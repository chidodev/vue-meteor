import VueRouter from 'vue-router';

const getModule = (mod) => {
  if (process.env.NODE_ENV === 'test') {
    return mod;
  }
  return mod.default;
}

const PageHomeAsync = (resolve) => {
  import('/imports/ui/home.vue')
    .then((PageHome) => resolve(getModule(PageHome)));
}

const routes = [
  {
    path: '/',
    component: PageHomeAsync,
  },
  {
    path: '/home',
    name: 'home',
    component: PageHomeAsync,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   next();
// })

export default {
  router
};
