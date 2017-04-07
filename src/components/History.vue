<template>
  <div class="admin-view">
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

  <!-- Table of file changes in the drive -->
  <b-table striped hover :items="files" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    <template slot="name" scope="item">
      {{item.value}}
    </template>
  </b-table>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      files: [{
        name: 'HelloWorld.txt',
        date: '04/07/2017',
        user: 'GDrive User',
        type: 'Edit'
      },
      {
        name: 'Homework3.doc',
        date: '04/05/2017',
        user: 'GDrive User',
        type: 'Delete'
      },
      {
        name: 'background.jpg',
        date: '04/03/2017',
        user: 'GDrive User',
        type: 'Delete'
      }],
      fields: {
        name: {
          label: 'Filename',
          sortable: true
        },
        date: {
          label: 'Date Modified',
          sortable: true
        },
        user: {
          label: 'Changed By'
        },
        type: {
          label: 'Change'
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
