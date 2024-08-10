<template>
  <div
    class="container"
    :class="{
      user: props.role === 'user',
      system: props.role != 'user',
    }"
  >
    <div class="dialog-box" :class="{ schedule: props.schedule }">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  role: String,
  schedule: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;

  width: 60%;
  margin: 0.5rem auto;
}
.dialog-box {
  max-width: 90%;
  padding: 1rem;
  background-color: #343a40;

  border-radius: 15px;

  display: flex;
  justify-content: flex-start;
}

.schedule {
  width: 100%;
}

.user {
  justify-content: flex-end;
}

.system {
  justify-content: flex-start;
}
</style>
