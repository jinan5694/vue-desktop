<template lang="html">
  <div class="login">
    <el-button @click="login">Login</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      sessionStorage.token = true
      this.$router.push('/init')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
