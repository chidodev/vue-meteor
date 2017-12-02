import { Meteor } from 'meteor/meteor'
import { Account } from 'meteor/accounts-base'
import { Store } from 'vuex';

const state = {
  user: null,
}

const moduleAccount = {
  namespaced: true,
  state,
};

const plugins = [];

const createStore = () => {
  return new Store({
    plugins,
    module: {
      accounts: moduleAccount,
    }
  });
};

export {
  createStore,
};