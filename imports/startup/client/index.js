import { Meteor } from 'meteor/meteor';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { VuexAltPlugin } from 'vuex-alt';
import { sync } from 'vuex-router-sync';
import { injectSupply } from 'vue-supply';
import VueFormGenerator from 'vue-form-generator';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// local files
import App from './app.vue';
import '../accounts-config.js';
import storeOptions from '/imports/modules/store';
import { createRouter } from '/imports/router/router';
import '/imports/supply';

export const setupVue = () => {
  Vue.use(VueMeteorTracker);
  Vue.use(BootstrapVue);
  Vue.use(VueFormGenerator);
  Vue.use(Vuex);
  Vue.use(VueRouter);
  // vue-supply and vuex setup
  const supplyCache = {}; // need an empty cache to help vue-supply stores data in vuex
  const suppliedStoreOptions = injectSupply(storeOptions, supplyCache);
  const store = new Vuex.Store(suppliedStoreOptions);
  // const store = new Vuex.Store(storeOptions);

  const router = createRouter();
  sync(store, router);

  // Use vuex-alt for mapGetters and mapActions
  Vue.use(VuexAltPlugin, { store });

  return { supplyCache, store, router };
};

// need a global variable to use in autorun
let vue;

Meteor.startup(() => {
  const { supplyCache, store, router } = setupVue();
  vue = new Vue({
    replace: true,
    render: h => h(App),
    supplyCache, // need to put cache inside new Vue instance
    store,
    router,
  });
  if (process.env.NODE_ENV !== 'test') {
    vue.$mount('body');
  }
  // initialize userId state
  vue.$store.state.accounts.userId = Meteor.userId();
});

// need to use autorun to check login/out events
// will get rid of it once we have a hand-made login form
Meteor.autorun(() => {
  // place this one first to let Meteor update whenever userId change
  const userId = Meteor.userId();

  // if vue hasn't started up, return null
  if (!vue) return;

  // otherwise setup state
  vue.$store.state.accounts.userId = userId;
});
