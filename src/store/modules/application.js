import { getType } from '@/api/application';

const state = {
  applicationList: []
};

const mutations = {
  SET_LIST: (state, applicationList) => {
    state.applicationList = applicationList;
  }
};

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getType()
        .then(res => {
          commit('SET_LIST', res.data);
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
