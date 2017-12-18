import app from './app';
import { mount } from 'avoriaz';

describe('App', () => {
  const wrapper = mount(app);

  it('renders header and footer', () => {
    expect(wrapper.find('.b-nav').length).toEqual(1);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});
