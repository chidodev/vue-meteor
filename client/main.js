import { Meteor } from 'meteor/meteor'
import '../imports/startup/accounts-config.js'
import VueMeteorTracker from 'vue-meteor-tracker';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createStore } from '../imports/modules/accounts/client/accounts-store'
import Vuex from 'vuex';
import { VuexAltPlugin } from 'vuex-alt';

import Vue from 'vue'

import App from '/imports/ui/App.vue'
import todoItem from '/imports/ui/TodoItem.vue'

Vue.use(VueMeteorTracker)
Vue.use(BootstrapVue);
Vue.use(Vuex);

const store = createStore();
console.log("---store: ", store);
Vue.use(VuexAltPlugin, { store });

var oldUserId = undefined;
var vue;
Meteor.startup(() => {
  vue = new Vue({
    el: 'body',
    replace: true,
    render: (h) => h(App),
    store,
  })
})

Meteor.autorun(function () {
  var newUserId = Meteor.userId();
  if (oldUserId === null && newUserId) {
    console.log('The user logged in');
    
    vue.$store.state.accounts.user = Meteor.user().username;
  } else if (newUserId === null && oldUserId) {
    console.log('The user logged out');

    vue.$store.state.accounts.user = null;
  }
  oldUserId = Meteor.userId();
});