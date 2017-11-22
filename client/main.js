import { Meteor } from 'meteor/meteor'
import '../imports/startup/accounts-config.js'
import Vue from 'vue'

import App from '/imports/ui/App.vue'

Meteor.startup(() => {

  new Vue({
    el: '#app',
    render: (h) => h(App)
  })
})