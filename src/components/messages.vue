<template>
  <div>
    <div class="messages-box">
      <div v-for="(message, index) in messages" :key="index" class="message-cover">
        <span v-bind:class="message.user === user ? 'message message-sent' : 'message message-received'">
          {{message.text}}
        </span>
      </div>
    </div>
    <div class="send-message">
      <el-input v-model="message" @keyup.enter.native="send" placeholder="Enter your message"
                class="message-input"></el-input>
      <el-button @click="send">Send</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      user: {
        type: String,
        required: true
      },
      messages: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        message: '',
      }
    },
    methods: {
      send() {
        if (this.message !== '') {
          this.$emit('newMessage', this.message)
          this.message = ''
        }
      },
    },
  }
</script>
<style>
  .send-message {
    display: inline;
  }

  .message-input {
    width: 80%;
    float: left;
    margin-bottom: 10px;
  }

  .messages-box {
    margin-top: 1em;
    margin-bottom: 1em;
    height: 300px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .message-cover {
    margin-top: 1em;
    padding: 1em;
  }

  .message {
    padding: 0.5em;
    -webkit-border-radius: 1em;
    -moz-border-radius: 0.5em;
    border-radius: 0.5em;
  }

  .message-sent {
    color: #ffffff;
    float: right;
    background-color: deepskyblue;
  }

  .message-received {
    color: deepskyblue;
    float: left;
    background-color: #ffffff;
    border: 1px solid deepskyblue;
  }
</style>
