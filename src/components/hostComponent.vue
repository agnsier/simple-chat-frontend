<template>
  <el-row>
    <el-col :span="8">
      <div>&nbsp;</div>
    </el-col>
    <el-col :span="8">
      <el-tabs>
        <el-tab-pane v-for="(session, index) in sessions" :key="index" v-bind:label="session.user"
                     v-bind:name="session.name">
          <messages :user="session.user" :messages="session.messages"
                    @newMessage="send($event, session.user)"></messages>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="8"></el-col>
  </el-row>

</template>


<script>
  import messages from './messages'

  export default {
    methods: {
      send(e, user) {
        this.sessions.find(session => session.user === user).messages.push({
          text: e,
          user: user
        })
      }
    },
    components: {
      messages
    },
    data() {
      return {
        sessions: [
          {
            user: 'Aga',
            messages: [
              {text: 'Hi there!', user: 'Aga'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Aga'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Aga'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Aga'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Aga'},
              {text: 'Hello hello!', user: 'Host'},
            ]
          },
          {
            user: 'Magda',
            messages: [
              {text: 'Hi Host!', user: 'Magda'},
              {text: 'Hello Magda!', user: 'Host'},
              {text: 'Hi there!', user: 'Magda'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Magda'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Magda'},
              {text: 'Hello hello!', user: 'Host'},
              {text: 'Hi there!', user: 'Magda'},
              {text: 'Hello hello!', user: 'Host'},
            ]
          }
        ]
      }
    }
  }
</script>
