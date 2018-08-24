<template>
  <div id="app">
    <myHeader></myHeader>
    <transition name="slide-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
    myFooter
  }
}
</script>

<style lang="scss">

@import "@/style/base/_reset.scss";
@import "@/style/style.scss";

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

</style>
