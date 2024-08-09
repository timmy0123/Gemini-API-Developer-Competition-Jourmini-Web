<template>
  <div class="suggestion-container">
    <div class="suggestion-card">
      <p v-html="reply"></p>
    </div>
    <div class="recommand-video">
      <p>Recommand Videos</p>
      <div class="youtube-container">
        <div
          class="youtube"
          v-for="video in props.suggestion.video_info"
          :key="video.video_id"
        >
          <YoutubeIframe
            :video-id="video.video_id"
            :width="300"
            :height="200"
          />
          <div
            class="mask"
            @click="handleVideoClick($event, video.video_id)"
          ></div>
        </div>
      </div>
      <p class="recommand-location-title">Recommand Sites</p>
      <div class="recommand-location">
        <div
          class="location"
          v-for="place in props.suggestion.location_info"
          :key="place.place_id"
        >
          <div
            class="place-item"
            @mouseover="handleHover(place.place_coordinates)"
          >
            <h2>{{ place.place_name }}</h2>
            <img :src="place.photo_url" alt="place-image" class="place-image" />
          </div>
        </div>
      </div>
    </div>
    <detail-card
      v-if="videoId != null"
      @close="close"
      :youtubeLink="videoId"
    ></detail-card>
  </div>
</template>
<script setup>
import { computed, ref, defineProps } from "vue";
import { marked } from "marked";
import { YoutubeIframe } from "@vue-youtube/component";
import DetailCard from "../ui/DetailCard.vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  suggestion: Object,
  needCheckbox: {
    type: Boolean,
    default: true,
  },
});

const videoId = ref(null);
const reply = computed(() => marked(props.suggestion.plan_options));

const handleVideoClick = (e, video_id) => {
  videoId.value = video_id;
};
const close = () => {
  videoId.value = null;
};

const handleHover = (coordinates) => {
  console.log([coordinates.latitude, coordinates.longitude]);
  store.dispatch("conversations/setNewMapCenter", [
    coordinates.latitude,
    coordinates.longitude,
  ]);
};
</script>

<style scoped>
.suggestion-container {
  width: 100%;
  overflow-x: scroll;
}

.suggestion-container p {
  font-size: 1.4rem;
  white-space: pre-line;
  text-align: start;
}

.suggestion-card {
  width: 100%;
  padding: 1rem;
  border-bottom: 2px solid #fff;

  display: flex;
  gap: 1rem;
}

.recommand-video {
  width: 100%;
  padding: 1rem;
}

.youtube-container {
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  margin-top: 2rem;
}

.youtube {
  position: relative;
}

.youtube:not(:last-child) {
  margin-right: 1rem;
}

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
}

.recommand-location-title {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #fff;
}

.recommand-location {
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 1rem;
}

.place-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid #fff;
  cursor: pointer;
}

.place-item:hover {
  border: 2px solid #adb5bd;
}

.place-image {
  width: 100%;
  height: 200px; /* Fixed height for all images */
  object-fit: cover; /* Ensures the image covers the entire area without distortion */
  border-radius: 10px; /* Optional: rounded corners */
}
</style>
