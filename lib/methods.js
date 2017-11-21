Meteor.methods({
  addTodo (text) {
    Todos.insert({
      text,
      createAt: new Date()
    })
  },
  removeTodo (_id) {
    Todos.remove(_id)
  }
})