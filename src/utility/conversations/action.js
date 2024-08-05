export default {
  updateSelectedPlaces(context, selectedPlaces) {
    context.commit("setSelectedPlace", selectedPlaces);
  },

  sendChat(context, chat) {
    context.commit("sendChat", chat);
  },
};
