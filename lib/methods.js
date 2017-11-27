import { check } from 'meteor/check'

Meteor.methods({
  addTodo (text) {
    check(text, String)

    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Todos.insert({
      text,
      createAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      private: true
    })
  },
  removeTodo (_id) {
    Todos.remove(_id)
  },
  checkTodo (id, completed) {
    check(completed, Boolean)
    Todos.update(id, { $set: { completed } })
  },
  togglePrivacy (id, private) {
    check(private, Boolean)
    Todos.update(id, { $set: { private } })
  }
})