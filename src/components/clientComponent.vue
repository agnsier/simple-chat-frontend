<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-card class="box-card" v-if="user === ''">
            <div>
              <h1 class="text">What's your name?</h1>
              <el-input v-model="login" @keyup.enter.native="signIn" placeholder="Please provide your name here"
                        class="input"></el-input>
              <el-button @click="signIn" type="primary" class="button" plain>Log in</el-button>
            </div>
          </el-card>
          <el-card class="box-card" v-else>
            <h2>Hi <span style="color:deepskyblue">{{user}}</span>!</h2>
            <messages :user="user" :messages="messages" @newMessage="send"></messages>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import messages from './messages'

  export default {
    components: {
      messages
    },
    data() {
      return {
        user: '',
        login: '',
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
        ],
        message: ''
      }
    },
    methods: {
      signIn() {
        if (this.login.length === 0) {
          this.open()
        } else {
          this.user = this.login
        }
      },
      send(e) {
        this.messages.push({
          text: e,
          user: this.user
        })
      },
      open() {
        this.$message({message: 'Name is required', type: 'error'});
      },
    }
  }
</script>

<style>
  .text {
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    color: deepskyblue;
    margin-top: 40px;
  }

  .box-card {
    margin-top: 30px;
    width: 600px;
    min-height: 250px;
    position: relative;
  }

  .input {
    width: 350px;
    margin-top: 30px;
  }

  .button {
    bottom: 0;
    position: relative;
  }
</style>



