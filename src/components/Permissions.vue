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
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">      
      </b-nav>
    </b-collapse>
  </b-navbar>
  
  <!-- Table of files and their permissions -->
  <b-table striped hover :items="files" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    <template slot="name" scope="item" class="tableVar">
      {{item.value}}
    </template>
  </b-table>
  </div>
</template>

<script>
export default {
  name: 'permissions',
  data () {
    return {
      files: [{
        name: 'HelloWorld.txt',
        owner: 'GDrive User',
        permissions: 'Read, Write'
      },
      {
        name: 'Image.png',
        owner: 'GDrive User',
        permissions: 'Read'
      },
      {
        name: 'script.js',
        owner: 'GDrive User',
        permissions: 'Read'
      }],
      fields: {
        name: {
          label: 'Filename',
          sortable: true
        },
        owner: {
          label: 'Owner'
        },
        permissions: {
          label: 'Permissions'
        }
      },
      currentPage: null,
      perPage: null,
      filter: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
