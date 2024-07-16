import conversationGetter from "./getter.js";
import conversationAction from "./action.js";
import conversationMutation from "./mutation.js";

export default {
  namespaced: true,
  state() {
    return {
      history: [],
      selectedPlace: [],
    };
  },
  getters: conversationGetter.getters,
  actions: conversationAction.actions,
  mutations: conversationMutation.mutations,
};
