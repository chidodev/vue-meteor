import { Random } from 'meteor/random'
import { assert } from 'meteor/practicalmeteor:chai'
import { Todos } from './collections.js'
import './methods.js'

if (Meteor.isServer) {
  describe('Todos', () => {
    describe('methods', () => {
      const userId = Random.id()
      let todoId
      beforeEach(() => {
        //console.log('todos: ', Todos)
        Todos.remove({})
        todoId = Todos.insert({
          text: 'test task',
          createAt: new Date(),
          owner: userId,
          username: 'tmeasday'
        })
      })
      it('can delete owned task', () => {
        const removeTodo = Meteor.server.method_handlers['removeTodo']
        const invocation = { userId }
        console.log('count: ', Todos.find().count())
        //console.log('******************* from server: ', Todos)
        removeTodo.apply(invocation, [todoId])
        assert.equal(Todos.find().count(), 0)
      })
    })
  })
}