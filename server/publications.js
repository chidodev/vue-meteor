import { Todos } from '../imports/api/todos/todos.js'

Meteor.publish('todos', (filter) => {
  return Todos.find({
    $or: [
      { private: { $ne: true } },
      {
        $or: [
          { owner: Meteor.userId() },
          { owner: undefined }
        ]
      }
    ]
  })
})