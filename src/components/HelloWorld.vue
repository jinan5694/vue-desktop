<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.count }}</h1>
    <el-button @click="handleClick" type="primary">increment</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to dms 2.0'
    }
  },
  created () {
    this.increment()
  },
  methods: {
    handleClick () {
      this.increment()
    },
    increment () {
      this.$store.commit('increment')
      this.$store.commit('setResource', ['test'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
