import { getTypePage } from '@/api/support';

const state = {
  supportList: []
};

const mutations = {
  SET_LIST: (state, supportList) => {
    state.supportList = supportList;
  }
};

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getTypePage({
				limit: 6,
				offset: 1
			})
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
