<template>
  <div class="container explore-content">
    <h1>Explore the famous attractions in Taiwan</h1>
    <div class="suggestion-grid">
      <div v-for="place in exploredPlaceList" :key="place">
        <explore-box :suggestion="place" :needCheckbox="false"></explore-box>
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

console.log(123);

console.log(exploredPlaceList.value);
</script>
<style scoped>
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
