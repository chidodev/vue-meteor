Todos = new Mongo.Collection('todos')

// if (Meteor.isServer) {
//   console.log('server')
//   Meteor.publish('todos', function tasksPublication () {
//     return Todos.find({})
//   })
// }

// Meteor.methods({
//   'todos.insert' (text) {
//     Todos.insert({
//       text,
//       createAt: new Date()
//     })
//   },
//   'todos.remove' (id) {

//     const todo = Todos.findOne(id)

//     Todos.remove(taskId)
//   }
// })