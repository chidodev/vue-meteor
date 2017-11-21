import { Meteor } from 'meteor/meteor'
import '../imports/startup/accounts-config.js'
import Vue from 'vue'

import App from '/imports/ui/App.vue'

Meteor.startup(() => {
  console.log('from client: ', Todos.find({}).fetch())

  new Vue({
    render: (h) => h(App)
  }).$mount('app')
})