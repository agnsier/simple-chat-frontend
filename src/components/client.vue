<template>
  <div>
    <el-row>
      <el-col :span="8"><div>&nbsp;</div></el-col>
      <el-col :span="8"><div>
        <el-card class="box-card" v-if="user === ''">
          <div>
            <h1 class="text">What's your name?</h1>
            <el-input v-model="login" @keyup.enter.native="signIn" placeholder="Please provide your name here" class="input"></el-input>
            <el-button @click="signIn" type="primary" class="button" plain>Log in</el-button>
          </div>
        </el-card>
        <el-card class="box-card" v-else>
          <h2>Hi <span style="color:cornflowerblue">{{user}}</span>!</h2>
        </el-card>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>  </div>
</template>


<script>
  export default {
    data() {
      return {
        user: '',
        login: ''
      }
    },
    methods : {
      signIn() {
        if (this.login.length  === 0){
          this.open()
        }
        else{
          this.user = this.login
        }
      },
      open(){
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
    height: 250px;
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



