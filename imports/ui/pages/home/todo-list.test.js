import TodoList from './todo-list.vue';
import { shallow } from 'avoriaz';

describe('TodoList', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(TodoList);
    expect(wrapper.find('todo-insert').length).toEqual(1);
  })
})
