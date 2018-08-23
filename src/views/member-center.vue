<template>
  <div class="container">
      <h4>会员中心</h4>
      <p>欢迎回来{{username}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$store.getters.getUsername
    }
  },
  data () {
    return {

    }
  }
}
</script>
