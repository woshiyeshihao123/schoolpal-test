<template>
  <div class="container">
    <el-container>
      <el-header>登录</el-header>
      <el-main>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </el-main>
      <el-footer>
        <el-button type="primary" @click="login">登录</el-button>
        <div>{{loginstate}}</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  computed: {
    loginstate: function () {
      return this.$store.getters.getLoginstate
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      if (this.username) {
        this.$store.dispatch('setUsername', this.username)
        this.$store.dispatch('setLoginstate', '1')
        this.$router.push({ path: '/member-center' })
      } else {
        alert('帐号密码不能为空')
      }
    }
  }
}
</script>

<style scoped>
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
