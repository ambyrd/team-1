<template>
  <div class="file-view">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <router-link to="/" class="gDrive">
      <b-link class="navbar-brand" to="/">
        <span>GDrive</span>
      </b-link>
    </router-link>

    <b-collapse is-nav id="nav_collapse">

     <b-nav is-nav-bar class="navBar">
       <router-link to="/upload" class="uploadLink"><b-nav-item >Upload/Download Files</b-nav-item></router-link>
       <router-link to="/permissions" class="permissionsLink"><b-nav-item >View File Permissions</b-nav-item></router-link>
       <router-link to="/history" class="historyLink"><b-nav-item >View Access History</b-nav-item></router-link>
       <router-link to="/admin" class="adminLink"><b-nav-item >View Admin Page</b-nav-item></router-link>
     </b-nav>

      <b-nav is-nav-bar class="ml-auto">
      </b-nav>
    </b-collapse>
  </b-navbar>

  <b-list-group class="file-list" id="file-list">
   <b-list-group-item v-for='f in fileList' :key="/upload/ + f.name">
    {{ f.name }}
   </b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
import cmd from '../cmd'

console.log(cmd)
setTimeout(() => {
  cmd.getFiles()
  console.log('metadata')
}, 1000)

setTimeout(() => {
  for (let id in window.fileList) {
    cmd.getFileMetadata(id)
  }
}, 2000)

export default {
  name: 'upload',
  data () {
    return {
     // Sample data
      fileList: [
       { name: 'HelloWorld.txt' },
       { name: 'Image.png' },
       { name: 'script.js' }
      ]
    }
  },
  methods: {
    getFiles () {
      cmd.getFiles()
    },
    getFileMetadata () {
      cmd.getFileMetadata()
    },
    getFilePermissions () {
      cmd.getFilePermissions()
    }
  }
}
// driveMethods.getFiles()

 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.buttons{
  text-align: center
}

</style>
