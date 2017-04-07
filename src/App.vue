<template>
  <div id="app">  

     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // Sample data
      fileList: [
        { name: 'HelloWorld.txt' },
        { name: 'Image.png' },
        { name: 'script.js' }
      ]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
nav li {
  display: inline
}
</style>
