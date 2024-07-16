import conversationGetter from "./getter.js";
import conversationAction from "./action.js";
import conversationMutation from "./mutation.js";

export default {
  namespaced: true,
  state() {
    return {
      history: [
        {
          user: "Give me some suggestion",
        },
        {
          system: "lorem ipsum dolor sit amet",
        },
      ],
      selectedPlace: [],
      reply: {
        suggestion: [],
        ask: "lorem ipsum dolor sit amet",
        scheduled: "lorem ipsum dolor sit amet",
      },
    };
  },
  getters: conversationGetter,
  actions: conversationAction,
  mutations: conversationMutation,
};
