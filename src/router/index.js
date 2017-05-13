import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '@/components/Upload'
import Loading from '@/components/Loading'
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
      component: Hello
    },
    {
      path: '/upload/:filename?',
      name: 'Upload',
      component: Upload,
      beforeRouteUpdate: (to, from, next) => {
        if (to.name === 'Upload' && from.name === 'Loading') {
          if (window.isAuthorized) {
            next()
          } else {
            next(false)
          }
        }
      }
    },
    {
      path: '/loading/',
      name: 'Loading',
      component: Loading,
      beforeRouteUpdate: (to, from, next) => {
        if (to.name === 'Loading' && from.name === 'Hello') {
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
