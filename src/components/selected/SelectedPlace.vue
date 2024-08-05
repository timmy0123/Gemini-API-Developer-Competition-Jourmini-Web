<template>
  <div class="place">
    <header class="header">
      <p>Selected Place</p>
      <div class="close" @click="closeSelectedPlace">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </div>
    </header>
    <div
      v-for="(place, index) in selectedPlaceList"
      :key="index"
      @click="handleClick(place)"
    >
      <detail-card
        v-if="showDetail && displayPlace === place"
        :name="place.name"
        :description="place.description"
        :image="place.image"
        :youtubeLink="place.youtube"
        @close="showDetail = false"
      ></detail-card>
      <div class="place-card">
        <img
          :src="place.image"
          alt="suggestion-image"
          class="suggestion-image"
        />
        <p>{{ place.name }}</p>
        <div class="close" @click="removePlace(place)">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, defineEmits } from "vue";
import { useStore } from "vuex";
import DetailCard from "../ui/DetailCard.vue";

const emit = defineEmits(["close"]);

const closeSelectedPlace = () => {
  emit("close");
};

const store = useStore();
const selectedPlaceList = computed(
  () => store.getters["conversations/getSelectedPlace"]
);

const removePlace = (place) =>
  store.dispatch("conversations/updateSelectedPlaces", place);

let showDetail = ref(false);
let displayPlace = ref(null);
const handleClick = (place) => {
  displayPlace.value = place;
  showDetail.value = true;
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
}
.place {
  display: block;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  width: 25rem;
  height: 50rem;
  border-radius: 9px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 2rem;

  position: fixed;
  bottom: 0;
  right: 25%;
  transform: translate(-10%, -5%);
  background-color: #343a40;
}

.place-card {
  width: 92%;
  padding: 1rem;
  border-radius: 15px;
  background-color: #495057;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.6rem;
}

.place-card:hover {
  cursor: pointer;
  background-color: #6c757d;
}

.suggestion-image {
  width: 10rem;
  height: 10rem;
}

.close {
  width: 1.5rem;
  height: 1.5rem;
}

.close:hover {
  cursor: pointer;
}

p {
  overflow: hidden;
}
</style>
