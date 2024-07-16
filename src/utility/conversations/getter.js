export default {
  conversationHistory(state) {
    console.log(state.history);
    return state.history;
  },

  conversationSelectedPlace(state) {
    return state.selectedPlace;
  },
};
