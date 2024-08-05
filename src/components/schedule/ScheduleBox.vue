<template>
  <div class="schedule-card">
    <div class="schedule-title">
      <h1>Enjoy your trip</h1>
    </div>
    <div class="schedule-description">
      <p>{{ props.description }}</p>
    </div>
    <div class="schedule-map" :id="id"></div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps({
  description: String,
  coordinate: Object,
  index: Number,
});

const map = ref(null);
const id = ref(`map${props.index}`);

onMounted(async () => {
  const loader = new Loader({
    apiKey: "AIzaSyCyKyntHfK7xKO_9ELubPAVdEQVFB58fRM",
    version: "weekly",
  });

  const { Map } = await loader.importLibrary("maps");
  const { Marker } = await loader.importLibrary("marker");

  map.value = new Map(document.getElementById(id.value), {
    center: props.coordinate[0],
    zoom: 15,
  });

  new Marker({
    position: props.coordinate[0],
    map: map.value,
    title: "Marker",
  });
});
</script>
<style scoped>
.schedule-card {
  width: 100%;
}

.schedule-title {
  text-align: center;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
}

.schedule-description {
  text-align: start;
  margin-bottom: 3.2rem;
}

.schedule-map {
  width: 100%;
  height: 30rem;
  border-radius: 15px;
  background-color: #495057;
}
</style>
