<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './components/header'
import myFooter from './components/footer'

export default {
  name: 'app',
  components: {
    myHeader,
    myFooter}
}
</script>

<style lang="scss">
  @import "./style/base/_reset";
  @import "./style/style";
</style>
