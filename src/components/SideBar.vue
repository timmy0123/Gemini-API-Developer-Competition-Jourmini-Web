<template>
  <div class="container sidebar">
    <header>
      <div class="box">
        <div class="logo">
          <img src="icon.png" alt="logo" class="logo-img" />
        </div>
        <h1>Jourmini</h1>
      </div>
    </header>
    <section>
      <!-- <button class="new-conversation">New Schedule</button>
      <div class="horizontal-line"></div> -->
      <div v-for="item in show" :key="item" class="list-name">
        <router-link :to="'/' + item.toLowerCase()">{{ item }}</router-link>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";

const show = ref(["Explore", "Plan"]);
</script>
<style scoped>
h1 {
  font-size: 2rem;
}
.container.sidebar {
  width: calc(100% - 2rem);
  padding: 2rem 1rem 0px 1rem;
  color: #fff;

  background-color: #343a40;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}

.logo {
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
}

.list-name {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  margin-bottom: 1.6rem;
  height: 2.4rem;
  padding: 0.8rem;

  border-radius: 9px;
}

.list-name a {
  text-decoration: none;
  font-size: 1.6rem;
  color: #fff;
}

.list-name:hover {
  cursor: pointer;
  background-color: #adb5bd;
}

.new-conversation {
  border-radius: 9px;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  background-color: #343a40;
  font-size: 1.6rem;
  color: #fff;
  border: none;
  padding: 0.8rem;
  margin-bottom: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.new-conversation:hover {
  background-color: #adb5bd;
}
</style>
