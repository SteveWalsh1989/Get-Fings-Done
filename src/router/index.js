import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Tasks,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Fings: ${to.name}`;
  next();
});

export default router;
