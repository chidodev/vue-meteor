import home from './home.vue';
import { shallow } from 'avoriaz';

describe('Home', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(home);
    expect(wrapper.find('todo-list').length).toEqual(1);
  })
})
