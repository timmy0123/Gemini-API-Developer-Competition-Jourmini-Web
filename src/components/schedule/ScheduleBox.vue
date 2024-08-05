<template>
  <div class="schedule-card">
    <div class="schedule-title">
      <h1>Enjoy your trip</h1>
    </div>
    <div class="schedule-description">
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  description: String,
});
</script>
<style scoped>
.schedule-card {
  width: 100%;
}

.schedule-title {
  text-align: center;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
}

.schedule-description {
  text-align: start;
  margin-bottom: 3.2rem;
}

.schedule-map {
  width: 100%;
  height: 30rem;
  border-radius: 15px;
  background-color: #495057;
}
</style>
