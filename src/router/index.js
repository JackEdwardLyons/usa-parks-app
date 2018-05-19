import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import ParkSearch from '../components/ParkSearch';
import ParkDetails  from '../components/ParkDetails';
import Counter from '../components/Counter';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/park-search',
      component: ParkSearch,
      meta: {
        title: 'Search USA Parks',
      },
    },
    {
      path: '/park-detail/:id',
      name: 'parkDetail',
      component: ParkDetails,
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
