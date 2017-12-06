import { Todos } from '../imports/api/todos/shared/collections/todos'

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
