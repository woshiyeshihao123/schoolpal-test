<template>
  <div id="app">
    <myHeader></myHeader>
    <transition name="fade" mode="out-in">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </transition>
    <myFooter></myFooter>
  </div>
</template>

<script>
const myHeader = () => import('@/components/header')
const myFooter = () => import('@/components/footer')

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
  @import url('https://unpkg.com/element-ui/lib/theme-chalk/index.css');
  .fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
  }
  .fade-enter, .fade-leave-to
  /* .fade-leave-active for below version 2.1.8 */ {
    transform:translateX(1300px);
    opacity: 0;
  }
</style>
