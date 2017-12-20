import { Meteor } from 'meteor/meteor';

const state = {
  userId: null,
};
const getters = {};
const actions = {
  loginUser({ }, { username, password }) {
    console.log('user: ', username, ' pass: ', password);
    return new Promise((resolve, reject) => {
      //commit('LOADING', true, { root: true });

      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          console.log('err: ', err);
          //commit('LOGIN_FAILED', { error: err });

          return reject(err);
        }
        //commit('LOADING', false, { root: true });

        return resolve(true);
      });
    });
  },
};
const mutations = {

};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

