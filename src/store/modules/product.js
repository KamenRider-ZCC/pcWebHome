import { getFirst } from '@/api/product';

const state = {
  productList: []
};

const mutations = {
  SET_LIST: (state, productList) => {
    state.productList = productList;
  }
};

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getFirst()
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
