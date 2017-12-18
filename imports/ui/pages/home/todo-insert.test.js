import TodoInsert from './todo-insert.vue';
import { shallow } from 'avoriaz';

describe('TodoInsert', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(TodoInsert);
    expect(wrapper.find('.form-control').length).toEqual(1);
  })
})
