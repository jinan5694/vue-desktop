<template lang="html">
  <div class="index">
    index
    <component :is="currentView"></component>
  </div>
</template>

<script>
import Dashboard from '@/page/Dashboard'

export default {
  data () {
    return {
      init: false,
      currentView: ''
    }
  },
  created () {
    console.log('init')
    this.currentView = Dashboard
  }
}
</script>

<style lang="css" scoped>
</style>
