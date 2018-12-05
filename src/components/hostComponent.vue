<template>
  <el-row>
    <el-col :span="8">
      <div>&nbsp;</div>
    </el-col>
    <el-col :span="8" v-if="sessions.length > 0">
      <h1>Hi Host!</h1>
      <el-tabs v-model="currentConversation">
        <el-tab-pane v-for="(session, index) in sessions" :key="index" v-bind:label="session.user"
                     v-bind:name="session.user">
          <messages :user="session.user" :messages="session.messages"
                    @newMessage="send($event, session.user)"></messages>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="8" v-else="sessions.length === 0">
      <h1>Hi <span style="color: deepskyblue">Host!</span></h1>
      <h2>You have 0 conversations.</h2>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>


<script>
  import messages from './messages'

  export default {
    data() {
      return {
        sessions: [],
        currentConversation: ''
      }
    },
    methods: {
      send(e, receiver) {
        this.$socket.emit('message-from-host', {
          receiver: receiver,
          text: e
        });
        this.tryAddMsgToSession({
          user: 'host',
          text: e
        }, receiver)
      },
      createSession(data) {
        this.sessions.push({
          user: data.user,
          messages: [{
            user: data.user,
            text: data.text
          }]
        })
      },
      tryAddMsgToSession(message, user) {
        for (let session of this.sessions) {
          if (session.user === user) {
            session.messages.push(message);
            return true
          }
        }
        return false
      }
    },
    components: {
      messages
    },
    mounted() {
      this.sockets.subscribe('channel-host', data => {
        let added = this.tryAddMsgToSession({
          user: data.user,
          text: data.text
        }, data.user);
        if (!added) {
          this.createSession(data)
        }
        this.currentConversation = data.user
      })
    }
  }
</script>
