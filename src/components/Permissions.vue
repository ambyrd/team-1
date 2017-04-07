<template>
  <div class="permissions-view">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>GDrive</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <router-link to="/upload"><b-nav-item>Upload/Download Files</b-nav-item></router-link>
        <router-link to="/permissions"><b-nav-item>View File Permissions</b-nav-item></router-link>
        <router-link to="/admin"><b-nav-item>View Access History</b-nav-item></router-link>
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">      
      </b-nav>
    </b-collapse>
  </b-navbar>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
