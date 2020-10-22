import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMask: false,
    result: [],
  },
  mutations: {
    toggleMask(state, payload) {
      state.showMask = payload;
    },
    setData(state, payload) {
      state.result = payload;
    },
  },
  actions: {
    getData({ commit }) {
      axios.get('db.json').then((res) => commit('setData', res.data));
    },
  },
  modules: {},
});
