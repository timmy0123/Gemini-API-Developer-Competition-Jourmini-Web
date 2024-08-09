<template>
  <div class="suggestion-container">
    <div class="suggestion-card">
      <div
        class="place-card"
        :class="{ selected: seleted }"
        @click="handleClick(props.suggestion.place_name)"
      >
        <div class="place-name">
          <h2>{{ props.suggestion.place_name }}</h2>
        </div>
        <img
          :src="props.suggestion.photo_url"
          alt="suggestion-image"
          class="suggestion-image"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const seleted = ref(false);

const props = defineProps({
  suggestion: Object,
  needCheckbox: {
    type: Boolean,
    default: true,
  },
});

const handleClick = (place) => {
  store.dispatch("conversations/updateSelectedPlaces", place);
  seleted.value = true;
};
</script>

<style scoped>
.suggestion-container {
  width: 100%;
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

.place-card {
  width: 30rem;
  height: 30rem;
  padding: 3rem;
  border-radius: 15px;
  background-color: #495057;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.place-card:hover,
.place-card:active {
  background-color: #6c757d;
  cursor: pointer;
}

.selected {
  background-color: #6c757d;
  border: 3px solid #8fbce3;
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
