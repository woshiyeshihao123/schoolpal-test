<template>
  <!-- <header class="header">
    <h1 class="logo">Vue Dome by Esao</h1>
    <router-link to="/">index</router-link>
    <router-link to="/goods">goods</router-link>
    <router-link to="/ratings">ratings</router-link>
    <router-link to="/seller">seller</router-link>
  </header> -->
  <div id="header">
    <div class="container">
      <h1 class="xb-icon"></h1>
      <el-menu
      :default-active="asd"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#333"
      text-color="#fff"
      active-text-color="red"
      router>
      <el-menu-item router index="/" @click="change">首页</el-menu-item>
      <el-menu-item  index="/member-center" @click="change2">用户中心</el-menu-item>
      </el-menu>
      <div class="rt login-box">
        <router-link v-if="!loginstate" to='/login'>登录</router-link>
        <router-link v-if="loginstate" to='/member-center'>{{username}}</router-link>
        <router-link v-if="!loginstate" to='/allcourses'>注册</router-link>
        <a href="javacript:void(0);"  v-if="loginstate" @click="logout">注销</a>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: { // here ↓
    asd () {
      return this.$store.getters.getTabpage
    },
    loginstate () {
      return this.$store.getters.getLoginstate
    },
    username () {
      return this.$store.getters.getUsername
    }
  },
  methods: {
    change () {
      this.$store.dispatch('setTabpage', '/')
    },
    change2 () {
      this.$store.dispatch('setTabpage', '/member-center')
    },
    logout () {
      this.$store.dispatch('setLoginstate', 0)
      this.$store.dispatch('setUsername', '')
      alert('注销成功')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
  #header{
    width: 100%;
    min-width: 1303px;
    background-color: #333;
  }
  .container{
    background-color: #333
  }
   .xb-icon{
    float: left;
    background: url(https://i.loli.net/2018/08/12/5b6fa69397c51.png) no-repeat center;
    background-size:148px 26px;
    width: 148px;
    height: 61px;
    margin-right: 150px;
    z-index: 50;
  }
  .el-menu-demo{
    opacity: 0.9;
    float: left;
    margin-bottom: -1px;
    border-bottom:none

  }

  .el-menu-demo .el-menu-item{
    font-size: 16px;
    margin: 0 50px 0 30px;
  }
  .login-box{
    height: 60px;
    width: 140px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
