import { Meteor } from 'meteor/meteor'
import '../imports/startup/accounts-config.js'
import VueMeteorTracker from 'vue-meteor-tracker';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'

import App from '/imports/ui/App.vue'
import todoItem from '/imports/ui/TodoItem.vue'

Vue.use(VueMeteorTracker)
Vue.use(BootstrapVue);

var oldUserId = undefined;

Meteor.autorun(function () {
  var newUserId = Meteor.userId();
  if (oldUserId === null && newUserId) {
    console.log('The user logged in');
    //document.location.reload(false);
    todoItem.me = Meteor.user().username;
    console.log('username: ', todoItem.me)
  } else if (newUserId === null && oldUserId) {
    console.log('The user logged out');
    //document.location.reload(false);
    todoItem.me = null;
    console.log('username: ', todoItem.me)
  }
  oldUserId = Meteor.userId();
});

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: true,
    render: (h) => h(App)
  })
})