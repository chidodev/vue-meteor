import app from './app';
import { shallow } from 'avoriaz';
import { setupVue } from '/imports/startup/client/';

describe('App', () => {
  let router;
  let store;
  let supplyCache;
  beforeEach(() => {
    const setup = setupVue();
    router = setup.router;
    store = setup.store;
    supplyCache = setup.supplyCache;
  });

  const wrapper = shallow(app, {
    supplyCache,
    store,
    router,
    stubs: ['router-link', 'router-view']
  });

  it('renders header and footer', () => {
    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});
