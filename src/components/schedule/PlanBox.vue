<template>
  <div class="suggestion-container">
    <div class="suggestion-card">
      <p v-html="reply"></p>
    </div>
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { marked } from "marked";

const props = defineProps({
  suggestion: Object,
  needCheckbox: {
    type: Boolean,
    default: true,
  },
});

const reply = computed(() =>
  props.suggestion.itinerary
    ? marked(props.suggestion.itinerary)
    : `<p>${props.suggestion}</p>`
);
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
</style>
