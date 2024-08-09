<template>
  <Teleport to="body">
    <div class="detail-card-background" @click="close">
      <div class="detail-card">
        <div class="response">
          <h1 class="title">{{ name }}</h1>
          <h2 class="description">{{ desc }}</h2>
          <div class="youtube-container">
            <youtube-iframe
              :video-id="youtubeLink"
              :width="800"
              :height="500"
            ></youtube-iframe>
          </div>
        </div>

        <div class="google-info">
          <div class="close"></div>
          <div class="map">
            <div id="location"></div>
          </div>
          <gmpx-api-loader
            key="AIzaSyCyKyntHfK7xKO_9ELubPAVdEQVFB58fRM"
            solution-channel="GMP_DOCS_placeoverview_v1"
          ></gmpx-api-loader>
          <div class="place-overview" v-if="placeId != null">
            <gmpx-place-overview :place="placeId"> </gmpx-place-overview>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import {
  defineProps,
  defineEmits,
  computed,
  ref,
  onMounted,
  onUnmounted,
} from "vue";
import { YoutubeIframe } from "@vue-youtube/component";
import { Loader } from "@googlemaps/js-api-loader";
const emit = defineEmits(["close"]);

const props = defineProps({
  youtubeLink: String,
});

const placeId = ref(null);
const map = ref(null);

const name = computed(() => props.name);
const desc = computed(() => props.description);
//const image = computed(() => props.image);
const youtubeLink = computed(() => props.youtubeLink);

const close = () => {
  emit("close");
};

onMounted(async () => {
  if (!window.google || !window.google.maps) {
    const loader = new Loader({
      apiKey: "AIzaSyCyKyntHfK7xKO_9ELubPAVdEQVFB58fRM",
      version: "weekly",
      libraries: ["places"],
    });
    await loader.load();
  }

  map.value = new window.google.maps.Map(document.getElementById("location"), {
    center: {
      lat: 25.0374865, // 經度
      lng: 121.5647688, // 緯度
    },
    zoom: 15,
  });

  let services = new window.google.maps.places.PlacesService(map.value);
  services.textSearch(
    {
      query: "Taipei train station",
    },
    (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        // Check if results exist
        if (results.length > 0) {
          // Get the first place by default (you can filter based on needs)
          const firstPlace = results[0];
          placeId.value = firstPlace.place_id;
          map.value.setCenter(firstPlace.geometry.location);
          new window.google.maps.Marker({
            position: firstPlace.geometry.location,
            map: map.value,
            title: "Marker",
          });
        } else {
          console.warn("No results found for the text search.");
        }
      } else {
        console.error("Error performing text search:", status);
      }
    }
  );
});

onUnmounted(() => {
  map.value = null;
});
</script>
<style scoped>
.detail-card-background {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 1;
}
.detail-card {
  padding: 1rem;
  background-color: #fff;
  border-radius: 15px;
  width: 85%;
  height: 90%;
  overflow-y: scroll;
  margin: 1rem auto;

  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;
}

.header {
  height: 5rem;
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  justify-content: flex-end;
}

.close {
  position: relative;
  margin-bottom: 1rem;
}

.close:hover {
  cursor: pointer;
}

.close::before {
  content: "";
  position: absolute;
  transform: rotate(135deg);
  width: 2rem;
  height: 0.1rem;
  background-color: black;
  top: -0.8rem;
  right: 0;
}

.close::after {
  content: "";
  position: absolute;
  transform: rotate(-135deg);
  width: 2rem;
  height: 0.1rem;
  background-color: black;
  top: -0.8rem;
  right: 0;
}

.response {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 3rem;
}

.description {
  font-size: 1.4rem;
  align-self: start;
  white-space: pre-line;
  margin-bottom: 2rem;
}

.suggestion-image {
  width: 30rem;
  height: 30rem;
}

.youtube-container {
  display: flex;
  justify-content: center;
}

.map {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: minmax(50rem, 50rem);
  border-radius: 15px;
  background-color: #495057;
  width: 100%;
}

.google-info {
  padding: 2rem;
  width: 100%;
}
</style>
