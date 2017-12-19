import home from './home.vue';
import { shallow } from 'avoriaz';
import { setupVue } from '/imports/startup/client/';

describe('Home', () => {
  let router;
  let store;
  let supplyCache;
  beforeEach(() => {
    const setup = setupVue();
    router = setup.router;
    store = setup.store;
    supplyCache = setup.supplyCache;
  });

  it('renders without crashing', () => {
    const wrapper = shallow(home, { supplyCache, store, router });
    expect(wrapper.find('todo-list').length).toEqual(1);
  });
})
