export default {
  updateSelectedPlaces(context, selectedPlaces) {
    context.commit("setSelectedPlace", selectedPlaces);
  },

  sendChat(context, chat) {
    context.commit("sendChat", chat);
  },

  setMap(context, map) {
    context.commit("setMap", map);
  },

  setMarker(context, marker) {
    context.commit("setMarker", marker);
  },

  setNewMapCenter(context, center) {
    context.commit("setNewMapCenter", center);
  },
};
