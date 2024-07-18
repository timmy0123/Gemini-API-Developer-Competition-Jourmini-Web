export default {
  sendChat(state, chat) {
    state.history.push({ user: chat });
    state.history.push({ system: "aaa" });
  },

  setSelectedPlace(state, place) {
    const index = state.selectedPlace.indexOf(place);
    if (index === -1) {
      state.selectedPlace.push(place);
    } else {
      state.selectedPlace.splice(index, 1);
    }
  },
};
