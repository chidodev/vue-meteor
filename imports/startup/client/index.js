import { Meteor } from 'meteor/meteor';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { VuexAltPlugin } from 'vuex-alt';
import { sync } from 'vuex-router-sync';
import { injectSupply } from 'vue-supply';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// local files
import App from '/imports/ui/app.vue'
import '../accounts-config.js';
import storeOptions from '/imports/modules/store';
import router from '/imports/router/router';
import '/imports/supply'

Vue.use(VueMeteorTracker)
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueRouter);

const supplyCache = {}
const suppliedStoreOptions = injectSupply(storeOptions, supplyCache)
const store = new Vuex.Store(suppliedStoreOptions)

Vue.use(VuexAltPlugin, { store });
sync(store, router);

// need a global variable to use in autorun
var vue;
Meteor.startup(() => {
  vue = new Vue({
    replace: true,
    render: (h) => h(App),
    supplyCache, // need to put cache inside new Vue instance
    store,
    router,
  })
  if (process.env.NODE_ENV !== 'test') {
    vue.$mount('body');
  }
  // initialize userId state
  vue.$store.state.accounts.userId = Meteor.userId();
})

Meteor.autorun(() => {

  // place this one first to let Meteor update whenever userId change
  let userId = Meteor.userId();

  // if vue hasn't started up, return null
  if (!vue) return;

  // otherwise setup state
  vue.$store.state.accounts.userId = userId;
});
