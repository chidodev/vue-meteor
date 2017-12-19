import Vue from 'vue';
import TodoList from './todo-list.vue';
import { shallow } from 'avoriaz';
import { setupVue } from '/imports/startup/client/';

describe('TodoList', () => {
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
    const wrapper = shallow(TodoList, {
      supplyCache,
      store,
      router
    });
    expect(wrapper.find('todo-insert').length).toEqual(1);
  })
})
