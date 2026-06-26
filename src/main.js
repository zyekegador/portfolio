import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
