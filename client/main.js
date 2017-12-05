import { Meteor } from 'meteor/meteor'
import '../imports/startup/client/index.js'
import VueMeteorTracker from 'vue-meteor-tracker';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createStore } from '../imports/modules/accounts/client/accounts-store'
import Vuex from 'vuex';
import { VuexAltPlugin } from 'vuex-alt';

import Vue from 'vue'

import App from '/imports/ui/app.vue'

Vue.use(VueMeteorTracker)
Vue.use(BootstrapVue);
Vue.use(Vuex);

const store = createStore();

Vue.use(VuexAltPlugin, { store });

var oldUserId = undefined;
var vue;
var created = false;
Meteor.startup(() => {
  console.log('---startup')
  vue = new Vue({
    el: 'body',
    replace: true,
    render: (h) => h(App),
    store,
  });
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
