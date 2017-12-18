import { shallow } from 'avoriaz';
import TodoInsert from './todo-insert.vue';

describe('TodoInsert', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(TodoInsert);
    expect(wrapper.find('.form-control').length).toEqual(1);
  });
});
