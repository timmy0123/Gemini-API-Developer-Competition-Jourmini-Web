<template>
  <main-page />
</template>

<script setup>
import MainPage from "./pages/MainPage.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #212529;
  color: #fff;
}

.horizontal-line {
  border-bottom: 1px solid #adb5bd;
  width: 100%;
  margin-bottom: 1.6rem;
}

/* Width */
::-webkit-scrollbar {
  width: 0.35rem; /* Change the width of the scrollbar */
  height: 0.35rem;
  border-radius: 0.1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #343a40; /* Color of the track */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; /* Color of the scroll thumb */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Color of the scroll thumb on hover */
}
</style>
