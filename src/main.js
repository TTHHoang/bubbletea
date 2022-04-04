import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
function lazyLoad(view){
  return() => import(`/views/${view}.vue`)
}

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "@/css/index.css";

Vue.use(Router);

const router = new Router({ 
  // mode: 'history',
  routes:[ 
    {
      path:'/',
      name : 'Home',
      component: lazyLoad('Home')    
    },
    {
      path:'/about',
      name: 'About',
      component: lazyLoad('About')    
    },
    {
      path:'/products',
      name: 'Products',
      component: lazyLoad('Products')    
    }, 
    {
      path:'/customize',
      name: 'Customize',
      component: lazyLoad('Customize')    
    },
    {
      path:'/contact',
      name: 'Contact',
      component: lazyLoad('Contact')
    },
   
  ],
  // path: '/configurator',
  // component: lazyLoad('customize'),    
  // children: [
  //   { path: '/StepOne', component: lazyLoad('StepOne'), name: 'StepOne' },
  //   // { path: '2', component: StepTwo, name: 'StepTwo' },
  //   // { path: '3', component: StepThree, name: 'StepThree' }
  // ],

})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
