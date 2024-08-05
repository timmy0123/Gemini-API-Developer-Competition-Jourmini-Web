<template>
  <div class="suggestion-container">
    <div class="suggestion-card">
      <div class="place-card" @click="handleClick(props.suggestion)">
        <div class="place-name">
          <p>{{ props.suggestion.name }}</p>
          <input
            type="checkbox"
            :id="'checkbox_' + index"
            :checked="getSelectedPlace1(props.suggestion)"
            @click.stop="handleSelect(props.suggestion)"
            :value="props.suggestion"
            v-if="props.needCheckbox"
          />
        </div>
        <img
          :src="props.suggestion.image"
          alt="suggestion-image"
          class="suggestion-image"
        />
        <p>{{ shortenDescription(props.suggestion.description) }}</p>
        <detail-card
          v-if="showDetail && displayPlace === props.suggestion"
          :name="props.suggestion.name"
          :description="props.suggestion.description"
          :image="props.suggestion.image"
          :youtubeLink="props.suggestion.youtube"
          @close="showDetail = false"
        ></detail-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";
import DetailCard from "../ui/DetailCard.vue";

const store = useStore();

const getSelectedPlace1 = (place) =>
  store.getters["conversations/getSelectedPlace"].includes(place);
const handleSelect = (place) =>
  store.dispatch("conversations/updateSelectedPlaces", place);

const props = defineProps({
  suggestion: Object,
  needCheckbox: {
    type: Boolean,
    default: true,
  },
});

const shortenDescription = (description) =>
  description.length > 90 ? description.slice(0, 90) + "..." : description;

let showDetail = ref(false);
let displayPlace = ref(null);
const handleClick = (place) => {
  displayPlace.value = place;
  showDetail.value = true;
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
