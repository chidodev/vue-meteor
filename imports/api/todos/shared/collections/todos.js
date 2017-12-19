import { Mongo } from 'meteor/mongo';
import TodosSchema from '../schemas/todos';

const Todos = new Mongo.Collection('todos');
Todos.attachSchema(TodosSchema);

export default Todos;
