import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import BeenPlaces from '@/pages/BeenPlaces';
import RunningStory from '@/pages/RunningStory';
import RouteBook from '@/pages/RouteBook';
import Snow from '@/pages/Snow';
import C404 from '@/pages/404';

Vue.use(Router);

export default [
  { path: '/', component: Home },
  { path: '/been-places', component: BeenPlaces },
  { path: '/running-story', component: RunningStory },
  { path: '/route-book', component: RouteBook },
  { path: '/snow', component: Snow },
  {
    path: '*',
    component: C404,
  },
];
