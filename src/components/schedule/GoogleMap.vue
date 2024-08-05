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

onMounted(async () => {
  if (!window.google || !window.google.maps) {
    const loader = new Loader({
      apiKey: "AIzaSyCyKyntHfK7xKO_9ELubPAVdEQVFB58fRM",
      version: "weekly",
    });
    const { Map } = await loader.importLibrary("maps");
    const { Marker } = await loader.importLibrary("marker");

    map.value = new Map(document.getElementById("map"), {
      center: {
        lat: 25.0374865, // 經度
        lng: 121.5647688, // 緯度
      },
      zoom: 15,
    });

    for (let i = 0; i < props.coordinate.length; i++) {
      new Marker({
        position: props.coordinate[i],
        map: map.value,
        title: "Marker",
      });
    }
  } else {
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
  }
});
</script>
<style scoped>
.schedule-card {
  width: 100%;
}

.schedule-map {
  width: 100%;
  height: 50rem;
  border-radius: 15px;
  background-color: #495057;
}
</style>
