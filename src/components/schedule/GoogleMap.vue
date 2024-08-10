<template>
  <div class="schedule-card">
    <div class="schedule-map" id="map"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import process from "process";
import { Loader } from "@googlemaps/js-api-loader";

const store = useStore();

onMounted(async () => {
  if (!window.google || !window.google.maps) {
    const loader = new Loader({
      apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });
    await loader.load();
  }

  let map = new window.google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 25.0374865, // 經度
      lng: 121.5647688, // 緯度
    },
    zoom: 15,
  });

  store.commit("conversations/setMap", map);
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
