<template>
  <div id="app">

     <router-view></router-view>

     <div class="col-md-12">
        <b-btn id='sign-in-or-out-button'>Sign In</b-btn>
        <b-btn id='revoke-access-button'>Sign In</b-btn>
        <div id="auth-status" style="display: inline; padding-left: 25px"></div><hr>
     </div>
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
