<template>
  <div class="spinner" v-if="isLoading">
    <!-- Customize the spinner style as needed -->
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
  <div class="container explore-content">
    <div class="explore-header">
      <h1>Recommand Taipei Tourist sites</h1>
      <nav to="/plan" class="nav" @click.prevent="handleClick">Explore</nav>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ExploreBox from "./suggestion/ExploreBox.vue";

const store = useStore();
const router = useRouter();
const isLoading = ref(false);
const exploredPlaceList = computed(
  () => store.getters["conversations/getExplorePlace"]
);

const selectedPlaceList = computed(
  () => store.getters["conversations/getSelectedPlace"]
);

const handleClick = async () => {
  isLoading.value = true;
  const inputValue =
    "I am interested on these places please give me some suggestions: " +
    selectedPlaceList.value.map((place) => place).join(", ");
  await store.dispatch("conversations/initChat", inputValue);
  isLoading.value = false;
  router.push("/plan");
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

.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #757575;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  animation-delay: -1s;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
