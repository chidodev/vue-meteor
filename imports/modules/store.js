import { Store } from 'vuex';

import accounts from '/imports/modules/accounts/accounts';
import todos from '/imports/modules/todos';

const plugins = [];

const store = {
  plugins,
  modules: {
    accounts,
    todos,
  }
}

export default store;
