import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '@/components/Upload'
import Permissions from '@/components/Permissions'
import History from '@/components/History'
import Admin from '@/components/Admin'

Vue.use(Router)

const rooter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      beforeRouteUpdated: (to, from, next) => {
        if (to.name === 'Upload') {
          if (window.isAuthorized) {
            next()
          } else {
            next(false)
          }
        }
      }
    },
    {
      path: '/upload/:filename?',
      name: 'Upload',
      component: Upload,
      beforeRouteUpdate: (to, from, next) => {
        if (to.name === 'Upload') {
          if (window.isAuthorized) {
            next()
          } else {
            next(false)
          }
        }
      }
    },
    {
      path: '/permissions',
      name: 'Permissions',
      component: Permissions
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

console.log(rooter)

/* rooter.beforeResolve((to, from, next) => {
  if (to.name === 'Upload') {
    if (window.googleAuth.isSignedIn()) {
      next()
    } else {
      next(false)
    }
  }
}) */

export default rooter
