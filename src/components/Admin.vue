<template>
  <div class="admin-view">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <router-link to="/" class="gDrive">
      <b-link class="navbar-brand" to="/">
        <span>GDrive</span>
      </b-link>
    </router-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <router-link to="/upload" class="uploadLink"><b-nav-item >Upload/Download Files</b-nav-item></router-link>
        <router-link to="/permissions" class="permissionsLink"><b-nav-item >View File Permissions</b-nav-item></router-link>
        <router-link to="/history" class="historyLink"><b-nav-item >View Access History</b-nav-item></router-link>
        <router-link to="/admin" class="adminLink"><b-nav-item >View Admin Page</b-nav-item></router-link>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">
      </b-nav>
    </b-collapse>
  </b-navbar>

  <!-- Table of files and their created/modified times -->
  <b-list-group class="file-list" id="file-list">
   <b-list-group-item v-for='f in files' :key='f.id'>
    {{ f.name }}
    <div class='buttons' v-if="f.id !== 'dummy'">
    <button name="cTimeBtn" @click='getTimeCreated(f.id)'>Created Time</button>
    <button name="mTimeBtn" @click='getTimeModified(f.id)'>Modified Time</button>
    </div>
   </b-list-group-item>
  </b-list-group>
    <div id="showCtime">Time Created: {{ timeC }}</div>
    <div id="showMtime">Time Modified: {{ timeM }}</div>
  </div>
</template>

<script>
import cmd from '../cmd'

export default {
  name: 'admin',
  data () {
    return {
      timeC: '',
      timeM: ''
    }
  },
  methods: {
    getFileMetadata (id) {
      cmd.getFileMetadata(id)
    },
    getTimeCreated (id) {
      this.timeC = cmd.getTimeCreated(id)
    },
    getTimeModified (id) {
      this.timeM = cmd.getTimeModified(id)
    }
  },
  asyncComputed: {
    files: {
      get () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(window.fileList)
          }, 1000)
        })
      },
      default: [{id: 'dummy', name: '...Loading...'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableArea {
 position: static;
 left: 0px;
 max-width: 400px;
 margin:5px;

}
#showCtime{
  position: fixed;
  right: 50%;
}
#showMtime{
  position: relative;
}
</style>

</style>
