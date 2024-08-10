export default {
  sendChat(state, dialog) {
    state.history.push(dialog);
  },

  setSelectedPlace(state, place) {
    const index = state.selectedPlace.indexOf(place);
    if (index === -1) {
      state.selectedPlace.push(place);
    } else {
      state.selectedPlace.splice(index, 1);
    }
  },

  setMap(state, map) {
    state.map = map;
  },

  setMarker(state, marker) {
    // for (let i = 0; i < state.markers.length; i++) {
    //   state.markers[i].setMap(null); // Removes the marker from the map
    // }
    // state.markers = [];

    for (let i = 0; i < marker.length; i++) {
      const newMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          Number(marker[i].place_coordinates.latitude),
          Number(marker[i].place_coordinates.longitude)
        ),
        map: state.map,
        title: marker[i].place_name,
      });

      state.markers.push(newMarker);
    }

    state.map.setCenter(
      new window.google.maps.LatLng(
        Number(marker[0].place_coordinates.latitude),
        Number(marker[0].place_coordinates.longitude)
      )
    );
  },

  setNewMapCenter(state, center) {
    state.map.setCenter(
      new window.google.maps.LatLng(Number(center[0]), Number(center[1]))
    );
  },
};
