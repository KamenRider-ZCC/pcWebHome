import { getPage } from '@/api/web';
import i18n from '@/i18n/i18n';

const state = {
  webList: []
};

const mutations = {
  SET_LIST: (state, webList) => {
    state.webList = webList;
  }
};

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getPage({
				limit: 10,
				offset: 1
			})
        .then(res => {
					let href = window.location.href;
					let lang = 'cn';
					try{
						let obj = res.data.find(item => { return item.type == 1 });
						if(obj) {
							if(href.indexOf(obj.content) != -1) {
								lang = 'en';
							}
						}
					}catch(e){
						//TODO handle the exception
						lang = 'cn';
					}
					i18n.locale = lang;
					localStorage.setItem('lang', lang);
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
