Meteor.methods({
  addTodo (text) {

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
    Todos.update(id, { $set: { completed } })
  },
  togglePrivacy (id, private) {
    Todos.update(id, { $set: { private } })
  }
})