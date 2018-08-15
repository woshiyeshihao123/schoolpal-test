<template>
  <div>
    <el-container>
      <el-header>登录</el-header>
      <el-main>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </el-main>
      <el-footer>
        <el-button type="primary">登录</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
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
