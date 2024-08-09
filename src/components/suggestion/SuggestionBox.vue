<template>
  <div class="suggestion-container">
    <div class="suggestion-card">
      <p v-html="reply"></p>
    </div>
    <div class="recommand-card">
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
    <detail-card v-if="video_id != null" @close="close"></detail-card>
  </div>
</template>
<script setup>
import { computed, ref, defineProps } from "vue";
import { marked } from "marked";
import { YoutubeIframe } from "@vue-youtube/component";
import DetailCard from "../ui/DetailCard.vue";
// import { useStore } from "vuex";

// const store = useStore();

// const getSelectedPlace1 = (place) =>
//   store.getters["conversations/getSelectedPlace"].includes(place);
// const handleSelect = (place) =>
//   store.dispatch("conversations/updateSelectedPlaces", place);

const props = defineProps({
  suggestion: Object,
  needCheckbox: {
    type: Boolean,
    default: true,
  },
});

const video_id = ref(null);
const reply = computed(() => marked(props.suggestion.plan_options));

const handleVideoClick = (e, video_id) => {
  video_id.value = video_id;
};
const close = () => {
  video_id.value = null;
};
// const shortenDescription = (description) =>
//   description.length > 90 ? description.slice(0, 90) + "..." : description;

// let showDetail = ref(false);
// let displayPlace = ref(null);
// const handleClick = (place) => {
//   displayPlace.value = place;
//   showDetail.value = true;
// };
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

.recommand-card {
  width: 100%;
  padding: 1rem;
}

.youtube-container {
  display: flex;
  justify-content: center;
  overflow-x: scroll;
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

.suggestion-image {
  width: 20rem;
  height: 20rem;
}

.place-name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
