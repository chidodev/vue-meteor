import { Store } from 'vuex';

import accounts from '/imports/modules/accounts/accounts';

const plugins = [];

const store = new Store({
  plugins,
  modules: {
    accounts,
  }
});

export default store;
