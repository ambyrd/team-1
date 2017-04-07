<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/upload">Upload/Download Files</router-link></li>
        <li><router-link to="/permissions">View File Permissions</router-link></li>
        <li><router-link to="/admin">View Access History</router-link></li>
      </ul>
    </nav>
    <ul class="file-list">
      <file-icon v-for='f in fileList' v-bind:file='f'></file-icon>
    </ul>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
nav li {
  display: inline
}
</style>
