<template>
  <div
    class="container"
    :class="{ user: props.role === 'user', system: props.role != 'user' }"
  >
    <div class="dialog-box">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  role: String,
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
  max-width: 80%;
  padding: 1rem;
  background-color: #343a40;

  border-radius: 15px;

  display: flex;
  justify-content: flex-start;
}

.user {
  justify-content: flex-end;
}

.system {
  justify-content: flex-start;
}
</style>
