<template>
  <div class="container">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 220px 1fr;
}
</style>
