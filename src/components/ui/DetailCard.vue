<template>
  <Teleport to="body">
    <div class="detail-card-background" @click="close">
      <div class="detail-card">
        <p>{{ name }}</p>
        <p>{{ desc }}</p>
        <img :src="image" alt="suggestion-image" class="suggestion-image" />
        <iframe
          width="560"
          height="315"
          :src="youtubeLink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
const emit = defineEmits(["close"]);

const props = defineProps({
  name: String,
  description: String,
  image: String,
  youtubeLink: String,
});

const name = computed(() => props.name);
const desc = computed(() => props.description);
const image = computed(() => props.image);
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
  height: 90%;
  overflow-y: scroll;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.suggestion-image {
  width: 30rem;
  height: 30rem;
}
</style>
