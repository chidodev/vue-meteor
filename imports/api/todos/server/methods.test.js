import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { Todos } from './todos.js';
import './methods.js';

if (Meteor.isServer) {
  describe('Todos', () => {
    describe('methods', () => {
      const userId = Random.id();
      let todoId;
      beforeEach(() => {
        Todos.remove({});
        todoId = Todos.insert({
          text: 'test task',
          createAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can not create tasks if not logged in', () => {
        const addTodo = Meteor.server.method_handlers.addTodo;
        assert.throws(() => addTodo('from testing'), Meteor.Error, 'not-authorized');
      });

      it('can delete tasks', () => {
        const removeTodo = Meteor.server.method_handlers.removeTodo;
        const invocation = { userId };
        console.log('count: ', Todos.find().count());
        removeTodo.apply(invocation, [todoId]);
        assert.equal(Todos.find().count(), 0);
      });
    });
  });
}
