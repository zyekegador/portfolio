import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home from './views/Home.vue'
import AllProjects from './views/AllProjects.vue'
import AllCertifications from './views/AllCertifications.vue'
import FullTechStack from './views/FullTechStack.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: AllProjects },
  { path: '/certifications', component: AllCertifications },
  { path: '/tech-stack', component: FullTechStack },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

const redirectPath = new URLSearchParams(window.location.search).get('redirect')
if (redirectPath) {
  const decoded = decodeURIComponent(redirectPath)
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = decoded.startsWith(base)
    ? decoded.slice(base.length) || '/'
    : decoded
  router.replace(path || '/')
}

createApp(App).use(router).mount('#app')
