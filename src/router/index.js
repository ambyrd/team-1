import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/components/Upload'
import Permissions from '@/components/Permissions'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/permissions',
      name: 'Permissions',
      component: Permissions
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
