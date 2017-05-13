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
     </b-nav>

      <b-nav is-nav-bar class="ml-auto">
      </b-nav>
    </b-collapse>
  </b-navbar>

  <b-list-group class="file-list" id="file-list">
   <b-list-group-item v-for='f in files' :key='f.id'>
    {{ f.name }}
   </b-list-group-item>
  </b-list-group>
    <br>
    <div class="buttons">
      <button name="downloadBtn" href="#">Download</button>
      <input type="file" id="files" name="files[]" multiple />
      <output id="list"></output>
      <button name="deleteBtn" href="#">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload',

  asyncComputed: {
    files: {
      get () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(window.fileList)
          }, 5000)
        })
      },
      default: [{id: 'dummy', name: '...Loading...'}]
    }
  }
}
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons{
  text-align: center
}
</style>
