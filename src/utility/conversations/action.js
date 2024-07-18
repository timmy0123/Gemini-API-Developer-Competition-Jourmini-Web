export default {
  updateSelectedPlaces(context, selectedPlaces) {
    context.commit("setSelectedPlace", selectedPlaces);
  },
};
