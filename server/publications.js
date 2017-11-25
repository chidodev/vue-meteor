Meteor.publish('todos', (filter) => {
  console.log('filter', filter)
  switch (filter) {
    case 'completed':
      return Todos.find({}, { $completed: { $ne: false } })
    case 'todo':
      return Todos.find({}, { $completed: { $ne: true } })
    default:
      return Todos.find({})
  }

})