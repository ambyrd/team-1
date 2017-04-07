<template>
  <div class="file-view">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>GDrive</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <router-link to="/upload"><b-nav-item>Upload/Download Files</b-nav-item></router-link>
        <router-link to="/permissions"><b-nav-item>View File Permissions</b-nav-item></router-link>
        <router-link to="/history"><b-nav-item>View Access History</b-nav-item></router-link>
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">      
      </b-nav>
    </b-collapse>
  </b-navbar>

  <b-list-group class="file-list">
   <b-list-group-item v-for='f in fileList' v-bind:to="/upload/ + f.name"> 
    {{ f.name }}
   </b-list-group-item>
  </b-list-group>

<!--
   <ul class="file-list">
     <file-icon v-for='f in fileList' v-bind:file='f'></file-icon>
   </ul>
 -->
    <br>
    <div class="buttons">
      <b-btn variant="outline-primary" href="#">Download</b-btn>
      <b-btn variant="outline-success" href="#">Upload</b-btn>
      <b-btn variant="outline-danger" href="#">Delete</b-btn>
    </div>
  </div>
</template>


<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.buttons{
  text-align: center
}

</style>
