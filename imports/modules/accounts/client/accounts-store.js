import { Meteor } from 'meteor/meteor'
import { Store } from 'vuex';

const state = {
  userId: null,
}
const getters = {}
const moduleAccount = {
  namespaced: true,
  state,
  getters,
};

const plugins = [];

const createStore = () => {
  return new Store({
    plugins,
    modules: {
      accounts: moduleAccount,
    }
  });
};

export {
  createStore,
};
