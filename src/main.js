// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

window.isAuthorized = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created: function () {
    this.loadDriveApi()
  },
  data: {
    googleAuth: null,
    scope: 'https://www.googleapis.com/auth/drive'
  },

  methods: {
    loadDriveApi: function () {
      console.log('loadDriveApi', this.initClient)
      gapi.load('client:auth2', this.initClient)
    },

    initClient: function () {
      console.log('initClient')
      let vue = this
      gapi.client.init({
        'clientId': 'YOUR_CLIENT_ID',
        'apiKey': 'YOUR_API_KEY',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        'scope': this.scope
      })
      .then(function () {
        console.log('gapi.client.init.then')
        vue.googleAuth = gapi.auth2.getAuthInstance()
        // console.log('setsigningstatsu', this.setSigninStatus)
        console.log(this)
        vue.googleAuth.isSignedIn.listen(vue.updateSigninStatus)
        vue.setSigninStatus()

        // Call handleAuthClick function when user clicks on
        // "Sign In/Authorize" button.
        $('#sign-in-or-out-button').click(function () {
          vue.handleAuthClick()
        })
        $('#revoke-access-button').click(function () {
          vue.revokeAccess()
        })
      })
    },

    handleAuthClick: function () {
      if (this.googleAuth.isSignedIn.get()) {
        // User is authorized and has clicked 'Sign out' button.
        this.googleAuth.signOut()
      } else {
        // User is not signed in. Start Google auth flow.
        this.googleAuth.signIn()
      }
    },

    revokeAccess: function () {
      this.googleAuth.disconnect()
    },

    setSigninStatus: function () {
      console.log(this)
      console.log(this.scope)
      console.log(this.googleAuth)
      var user = this.googleAuth.currentUser.get()
      console.log('user', user)
      window.isAuthorized = user.hasGrantedScopes(this.scope)
      console.log('isAuthorized', window.isAuthorized)
      if (window.isAuthorized) {
        $('#sign-in-or-out-button').html('Sign out')
        $('#revoke-access-button').css('display', 'inline-block')
        $('#auth-status').html('You are currently signed in and have granted ' +
            'access to this app.')
      } else {
        $('#sign-in-or-out-button').html('Sign In/Authorize')
        $('#revoke-access-button').css('display', 'none')
        $('#auth-status').html('You have not authorized this app or you are ' +
            'signed out.')
      }
    },

    updateSigninStatus: function (isSignedIn) {
      this.setSigninStatus()
    },

    getFiles: function () {
      var request = gapi.client.request({
        'method': 'GET',
        'path': '/drive/v3/files'
      })
      // Execute the API request.
      request.execute(function (response) {
        console.log(response)
        var files = response.files
        for (var x = 0; x < files.length; x++) {
          let file = files[x]
          if (file.mimeType !== 'application/vnd.google-apps.folder') {
            console.log(file, file.mimeType)
            let btnInfo = $('<button/>', {onclick: 'getFileMetadata(' + file.id + ')', class: 'btn btn-outline-success space-left', text: 'Get Info'})
            let btnPerm = $('<button/>', {onclick: 'getFilePermissions(' + file.id + ')', class: 'btn btn-outline-success space-left', text: 'Get Permissions'})
            let div = $('<div/>', {class: 'list-group-item list-group-item-action', text: file.name})
            div.append(btnInfo)
            div.append(btnPerm)
            $('#file-list').append(div)
          }
        }
      })
    },

    getFileMetadata: function (id) {
      console.log('getFileMetadata(' + id + ')')
      // Request to access gapi for drive 'gapi.client.drive.files' specifies the API to use,
      // the .get method is the standard Google drive GET method
      // 'fileId' is the file's ID value in string format
      // 'fields' allows for specific subfields to be pulled by listing which ones you want delimitted by a space, with '*' pulling all fields
      var request = gapi.client.drive.files.get({
        'fileId': id, 'fields': '*'
      })
      // Executes API request, outputting object to 'response'
      request.execute(function (response) {
        console.log(response)
      })
    },

    getFilePermissions: function (id) {
      console.log('getFilePermissions(' + id + ')')
      var request = gapi.client.drive.files.get({
        'fileId': id, 'fields': 'permissions'
      })
      request.execute(function (response) {
        let perMetaDataObj = response
        let perObj = perMetaDataObj.permissions
        let permissions = perObj[0]
        console.log(permissions)
      })
    }
  }
})
