import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: []
  },
  mutations: {
    ADD(state, item) {
      state.userList.push(item);
    },
    ADD_Length(state, index) {
      state.userList[index].length += 1;
    },
    DELETE(state,index) {
      state.userList.splice(index, 1)
    },
    DELETE_LENGTH(state, index){
      state.userList[index].length -= 1;
    }
  },
  actions: {
    add : ({ commit },item) => {
      commit('ADD',item);
    },
    addLength:({ commit },index) => {
      commit('ADD_Length',index);
    },
    delete:({ commit },index) => {
      commit('DELETE',index);
    },
    deleteLength:({ commit },index) => {
      commit('DELETE_LENGTH',index);
    }
  }
})