import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
// import createPersistedState from 'vuex-persistedstate';
// Vue.use(Vuex)

export default new Vuex.Store({
//   plugins: [createPersistedState({
//     storage: window.sessionStorage,
// })],
  state: {
    cartItems: [] as Array<any>,
    userData: null,
  },
  mutations: {
    UPDATE_DATA(state, newData) {
      state.cartItems.push(newData);
    },
    SET_USER_DATA(state, userDatils) {
      state.userData = userDatils;
      localStorage.setItem('user', JSON.stringify(userDatils));
      axios.defaults.headers.common.Authorization = `Bearer ${userDatils.token}`;
    },
    CLEAR_USER_DATA(state) {
        localStorage.removeItem('user');
        location.reload();
    },

  },
  actions: {
    updateData({commit}, newData) {
      commit('UPDATE_DATA',newData);
    },
    register({ commit }, credentials) {
      return axios
      .post('http://localhost:8080/api/auth/register', credentials)
      .then(({ data }) => {
         commit('SET_USER_DATA', data);
        },
      );
    },
    login({ commit }, credentials) {
        return axios
        .post('https://localhost:44304/api/ApiSecurity/Auth', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data);
          },
        );
      },
    logout({commit}) {
        commit('CLEAR_USER_DATA');
    },
  },
  getters: {
    cartCount: state => {
      if (state.cartItems) {
      return state.cartItems.length;
      }
    },
    loggedIn(state) {
      return !!state.userData;
    },
    getUserData: state => {
      if (state.userData) {
      return state.userData;
      }
    },
  },
  modules: {

  }
})
