<template>
  <div class="schedule-card">
    <div class="schedule-map" id="map"></div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps({
  coordinate: {
    type: Array,
    default: () => [],
  },
});

const map = ref(null);
const placeId = ref(null);

onMounted(async () => {
  if (!window.google || !window.google.maps) {
    const loader = new Loader({
      apiKey: "AIzaSyCyKyntHfK7xKO_9ELubPAVdEQVFB58fRM",
      version: "weekly",
      libraries: ["places"],
    });
    await loader.load();
  }

  map.value = new window.google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 25.0374865, // 經度
      lng: 121.5647688, // 緯度
    },
    zoom: 15,
  });

  for (let i = 0; i < props.coordinate.length; i++) {
    new window.google.maps.Marker({
      position: props.coordinate[i],
      map: map.value,
      title: "Marker",
    });
  }

  let services = new window.google.maps.places.PlacesService(map.value);
  services.textSearch(
    {
      query: "National Taiwan University",
    },
    (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Check if results exist
        if (results.length > 0) {
          // Get the first place by default (you can filter based on needs)
          const firstPlace = results[0];
          placeId.value = firstPlace.place_id;
        } else {
          console.warn("No results found for the text search.");
        }
      } else {
        console.error("Error performing text search:", status);
      }
    }
  );
});
</script>
<style scoped>
.schedule-card {
  width: 100%;
  overflow-y: scroll;
}

.schedule-map {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: minmax(50rem, 50rem);
  border-radius: 15px;
  background-color: #495057;
}
</style>
