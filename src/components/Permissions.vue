<template>
  <div class="permissions-view">
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

  <!-- Table of files and their permissions -->
  <b-list-group class="file-list" id="file-list">
   <b-list-group-item v-for='f in files' :key='f.id'>
    {{ f.name }}
    <br>
    <button v-on:click="showOwnerInfo(f.id)"> Owner </button>
    </br>
    <br>
    <button v-on:click="showSharedInfo(f.id)"> Shared </button>
  </br>
   </b-list-group-item>
   <div id = "shared">
    <b-list-group class = "perm">
      Shared Users: {{ shared }}
      <br></br>
      User Emails: {{ sharedEmail }}
   </b-list-group>
  </div>

   <div id = "owner"> <b-list-group class = "perm">
     Owner: {{ owner }}
     <br></br>
     Email: {{ email }} </b-list-group> </div>
  </b-list-group>
  </div>


  </div>
</template>

<script>
import cmd from '../cmd'
let f = window.fileList

export default {
  name: 'permissions',

  data () {
    return {
      owner: '',
      email: '',
      shared: '',
      sharedEmail: ''
    }
  },
  asyncComputed: {
    files: {
      get () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(window.fileList)
          }, 2000)
        })
      },
      default: [{id: 'dummy', name: '...Loading...'}]
    }
  },

  methods: {
    showOwnerInfo: function (fileId) {
      if (!window.fileList[fileId].owner) {
        cmd.getFileMetadata(fileId)
        setTimeout(() => {
          document.getElementById('shared').style.display = 'none'
          document.getElementById('owner').style.display = null
          console.log('hi')
          for (let id in f) {
            if (id === fileId) {
              console.log(f[id].owner.name)
              this.owner = f[id].owner.name
              this.email = f[id].owner.email
            }
          }
        }, 1000)
      } else {
        document.getElementById('shared').style.display = 'none'
        document.getElementById('owner').style.display = null
        console.log('hi')
        for (let id in f) {
          if (id === fileId) {
            console.log(f[id].owner.name)
            this.owner = f[id].owner.name
            this.email = f[id].owner.email
          }
        }
      }
    },
    showSharedInfo: function (fileId) {
      if (!window.fileList[fileId].owner) {
        cmd.getFileMetadata(fileId)
        setTimeout(() => {
          document.getElementById('owner').style.display = 'none'
          document.getElementById('shared').style.display = null
          for (let id in f) {
            if (id === fileId) {
              console.log('hi')
              for (var i = 0; i < f[id].sharedWith.length; i++) {
                console.log(f[id].sharedWith[i].name)
                this.shared = f[id].sharedWith[i].name
                this.sharedEmail = f[id].sharedWith[i].email
              }
            }
          }
        }, 1000)
      } else {
        document.getElementById('owner').style.display = 'none'
        document.getElementById('shared').style.display = null
        for (let id in f) {
          if (id === fileId) {
            // console.log('hi')
            for (var i = 0; i < f[id].sharedWith.length; i++) {
              console.log(f[id].sharedWith[i].name)
              this.shared = f[id].sharedWith[i].name
              this.sharedEmail = f[id].sharedWith[i].email
            }
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.file-list {
 position: static;
 left: 0%;
 max-width: 50%;
 margin:5px;
=======
 left: 0px;
 max-width: 400px;
 margin:5px;
}

.perm {
  position: relative;
  bottom: 320px;
  left: 600px;
}
</style>
