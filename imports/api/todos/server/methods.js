import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Todos from '../shared/collections/todos';

Meteor.methods({
  addTodo(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Todos.insert({
      text,
      createAt: new Date(),
      owner: this.userId,
      username: Meteor.user().username,
      private: true,
    });
  },
  removeTodo(_id) {
    Todos.remove(_id);
  },
  checkTodo(id, completed) {
    check(completed, Boolean);
    Todos.update(id, { $set: { completed } });
  },
  togglePrivacy(id, isPrivate) {
    check(isPrivate, Boolean);
    Todos.update(id, { $set: { isPrivate } });
  },
});
