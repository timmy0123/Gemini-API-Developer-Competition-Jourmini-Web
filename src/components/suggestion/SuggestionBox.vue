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
          @click="handleRecommandPlaceClick(place)"
        >
          <h2>{{ place.place_name }}</h2>
          <img :src="place.photo_url" alt="place-image" class="place-image" />
        </div>
      </div>
    </div>
    <button class="btn" @click="handleCompleteClick">Complete planning</button>
    <detail-card
      v-if="videoId != null"
      @close="close"
      :youtubeLink="videoId"
    ></detail-card>
  </div>
</template>
<script setup>
import { computed, ref, defineProps, defineEmits } from "vue";
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

const emit = defineEmits(["sendChat", "loading"]);

const videoId = ref(null);
const reply = computed(() => marked(props.suggestion.plan_options));

const handleVideoClick = (e, video_id) => {
  videoId.value = video_id;
};
const close = () => {
  videoId.value = null;
};

const handleRecommandPlaceClick = async (place) => {
  emit("loading");
  await store.dispatch(
    "conversations/sendChat",
    `I am interested in ${place.place_name}. It's place id is ${place.place_id}`
  );
  emit("sendChat");
};

const handleCompleteClick = async () => {
  emit("loading");
  await store.dispatch("conversations/startPlan", "Give me a plan");
  emit("sendChat");
};

const handleHover = (coordinates) => {
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.suggestion-container p {
  font-size: 1.4rem;
  white-space: pre-line;
  text-align: start;
}

.suggestion-card {
  width: 100%;
  padding: 1rem;

  display: flex;
  gap: 1rem;
}

.recommand-video {
  width: 100%;
  padding: 1rem;

  border-top: 2px solid #fff;
}

.youtube-container {
  width: 100%;
  overflow-x: scroll;
  display: flex;
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
  display: inline-block;
  width: 100%;
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

.btn {
  justify-self: start;
  align-self: flex-start;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #3e93e8;
  color: #fff;
  cursor: pointer;
}

::-webkit-scrollbar {
  margin-top: 0.5rem;
  height: 0.5rem;
}
::-webkit-scrollbar-thumb {
  background: #e54d4d;
  height: 0.5rem;
}
</style>
