import Vue from 'vue'
import Router from 'vue-router'
import StreamList from '@/components/StreamList'
import StreamGallery from '@/components/item/StreamGallery'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lista risultati',
      component: StreamList
    }
  ]
})
