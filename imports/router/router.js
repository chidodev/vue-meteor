import VueRouter from 'vue-router';

const getModule = (mod) => {
  if (process.env.NODE_ENV === 'test') {
    return mod;
  }
  return mod.default;
}

const PageHomeAsync = (resolve) => {
  import('/imports/ui/pages/home/home.vue')
    .then((PageHome) => resolve(getModule(PageHome)));
}

const PageLoginAsync = (resolve) => {
  import('/imports/ui/pages/login/login.vue')
    .then((PageLogin) => resolve(getModule(PageLogin)));
}

const PageSignUpAsync = (resolve) => {
  import('/imports/ui/pages/sign-up/sign-up.vue')
    .then((PageSIgnUp) => resolve(getModule(PageSIgnUp)));
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
  },
  {
    path: '/login',
    name: 'login',
    component: PageLoginAsync,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: PageSignUpAsync,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// router.beforeEach((to, from, next) => {
//   next();
// })

export const createRouter = () => {
  return router;
};
