import { getType } from '@/api/resources';

const state = {
  resourcesList: []
};

const mutations = {
  SET_LIST: (state, resourcesList) => {
    state.resourcesList = [
			{ id: 'COAs', type: 'COA' },
			...resourcesList
		];
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
