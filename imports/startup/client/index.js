import '../accounts-config.js';
import { Meteor } from 'meteor/meteor';
import VueMeteorTracker from 'vue-meteor-tracker';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { createStore } from '/imports/modules/accounts/client/accounts-store';
import router from '/imports/modules/router/router.js';
import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { VuexAltPlugin } from 'vuex-alt';
import { sync } from 'vuex-router-sync';

import App from '/imports/ui/app.vue'

var oldUserId = undefined;
var vue;
var created = false;


Vue.use(VueMeteorTracker)
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueRouter);

const store = createStore();

Vue.use(VuexAltPlugin, { store });
console.log('--- router: ', router);
sync(store, router);

Meteor.startup(() => {
  vue = new Vue({
    replace: true,
    render: (h) => h(App),
    store,
    router,
  }).$mount('body');
  if (process.env.NODE_ENV !== 'test') {
    // vue.$mount('body');
  }
  created = true;
  vue.$store.state.accounts.userId = Meteor.userId();
})

Meteor.autorun(function () {
  if (!created)
    return;
  var newUserId = Meteor.userId();
  if (!oldUserId && newUserId) {

    vue.$store.state.accounts.userId = Meteor.userId();
  } else if (!newUserId && oldUserId) {

    vue.$store.state.accounts.userId = null;
  }
  oldUserId = Meteor.userId();
});
