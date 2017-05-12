import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '@/components/Upload'
import Permissions from '@/components/Permissions'
import History from '@/components/History'

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
      beforeEnter: (to, from, next) => {
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
