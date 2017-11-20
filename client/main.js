import { Meteor } from 'meteor/meteor'
import { Vue } from 'meteor/akryum:vue'
import { Todos } from '../imports/api/todos.js'

import App from '/imports/ui/App.vue'

Meteor.startup(() => {
  console.log('from client: ', Todos.find({}).fetch())

  new Vue({
    el: '#app',
    render: (h) => h(App)
  })
})