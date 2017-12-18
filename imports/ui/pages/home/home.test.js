import home from './home.vue';
import { mount } from 'avoriaz';

describe('Home', () => {

  it('renders without crashing', () => {
    const wrapper = mount(home);
    expect(wrapper.find('todo-list').length).toEqual(1);
  })
})
