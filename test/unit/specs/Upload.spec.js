import Vue from 'vue'
import VueRouter from 'vue-router'
import Upload from '@/components/Upload'

describe('Upload.vue', () => {
  const router = new VueRouter({
    routes: [
      {path: '/upload/:filename?', name: 'Upload'}
    ]
  })

  const Constructor = Vue.extend(Upload)
  const vm = new Constructor({
    router: router
  }).$mount()

  const buttons = vm.$el.querySelector('.buttons').children

  it('should contain 3 buttons', () => {
    expect(buttons.length).to.equal(3)
  })

  it('should have a Download button', () => {
    expect(buttons.item(0).textContent).to.equal('Download')
  })

  it('should have an Upload button', () => {
    expect(buttons.item(1).textContent).to.equal('Upload')
  })

  it('should have a Delete button', () => {
    expect(buttons.item(2).textContent).to.equal('Delete')
  })
})
