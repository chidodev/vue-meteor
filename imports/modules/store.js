import { Store } from 'vuex';

import accounts from '/imports/modules/accounts';
import todos from '/imports/modules/todos';

const plugins = [];
console.log('todos: ', todos);
console.log('accounts: ', accounts);
const store = {
  plugins,
  modules: {
    accounts,
    todos,
  }
}

export default store;
