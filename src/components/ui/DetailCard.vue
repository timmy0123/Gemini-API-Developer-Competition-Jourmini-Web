<template>
  <Teleport to="body">
    <div class="detail-card-background" @click="close">
      <div class="detail-card">
        <div class="close-container"><div class="close"></div></div>
        <div class="youtube-container">
          <youtube-iframe
            :video-id="youtubeLink"
            :width="800"
            :height="500"
          ></youtube-iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { YoutubeIframe } from "@vue-youtube/component";
const emit = defineEmits(["close"]);

const props = defineProps({
  youtubeLink: String,
});

//const image = computed(() => props.image);
const youtubeLink = computed(() => props.youtubeLink);

const close = () => {
  emit("close");
};
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
  width: 70%;
  height: 70%;
  margin: 1rem auto;
  position: relative;
}

.close-container {
  position: absolute;
  cursor: pointer;
  top: 2rem;
  right: 1.5rem;
}

.close {
  position: relative;
  margin-bottom: 1rem;
}

.close::before {
  content: "";
  position: absolute;
  cursor: pointer;
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
  cursor: pointer;
  transform: rotate(-135deg);
  width: 2rem;
  height: 0.1rem;
  background-color: black;
  top: -0.8rem;
  right: 0;
}

.youtube-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
