<template>
  <div class="container explore-content">
    <div class="explore-header">
      <h1>Recommand Taipei Tourist sites</h1>
      <router-link to="/plan" class="nav" @click="handleClick"
        >Explore</router-link
      >
    </div>
    <div class="suggestion-grid">
      <div v-for="place in exploredPlaceList" :key="place">
        <explore-box
          :suggestion="place"
          :needCheckbox="false"
          v-if="
            place != null && place.place_name != null && place.photo_url != null
          "
        ></explore-box>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ExploreBox from "./suggestion/ExploreBox.vue";

const store = useStore();
const exploredPlaceList = computed(
  () => store.getters["conversations/getExplorePlace"]
);

const selectedPlaceList = computed(
  () => store.getters["conversations/getSelectedPlace"]
);

console.log(exploredPlaceList.value);

const handleClick = () => {
  const inputValue =
    "I am interested on these places please give me some suggestions: \n" +
    selectedPlaceList.value.map((place) => place).join(", ");
  store.dispatch("conversations/sendChat", inputValue);
};
</script>
<style scoped>
.explore-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
}

.nav {
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  padding: 1.5rem;
  border: 1px solid #fff;
}

.nav:hover {
  background-color: #d9dee3;
  color: black;
}
.container.explore-content {
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);

  padding: 2rem 1rem 0px 1rem;
  color: #fff;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.suggestion-grid {
  overflow-y: scroll;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  gap: 0.5rem;

  justify-content: center;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
</style>
