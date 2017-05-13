// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import AsyncComputed from 'vue-async-computed'
import App from './App'
import router from './router'
import cmd from './cmd'

Vue.use(BootstrapVue)
Vue.use(AsyncComputed)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

window.fileList = {}
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
      gapi.load('client:auth2', this.initClient)
    },

    initClient: function () {
      let vue = this
      gapi.client.init({
        'clientId': 'YOUR_CLIENT_ID',
        'apiKey': 'YOUR_API_KEY',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        'scope': this.scope
      })
      .then(function () {
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

        // Initialize global file list
        cmd.getFiles()
      })
    },

    handleAuthClick: function () {
      if (this.googleAuth.isSignedIn.get()) {
        // User is authorized and has clicked 'Sign out' button.
        this.googleAuth.signOut()
        window.isAuthorized = false
        this.$router.push({ name: 'Hello' })
      } else {
        // User is not signed in. Start Google auth flow.
        this.googleAuth.signIn()
      }
    },

    setSigninStatus: function () {
      var user = this.googleAuth.currentUser.get()
      window.isAuthorized = user.hasGrantedScopes(this.scope)
      console.log('main Auth:', window.isAuthorized)
      if (window.isAuthorized) {
        $('#sign-in-or-out-button').html('Sign out')
        $('#auth-status').html('You are currently signed in and have access to this app.')
      } else {
        $('#sign-in-or-out-button').html('Sign In/Authorize')
        $('#auth-status').html('You have not authorized to use this app or you are ' +
            'signed out.')
      }
    },

    updateSigninStatus: function (isSignedIn) {
      this.setSigninStatus()
    }
  }
})
