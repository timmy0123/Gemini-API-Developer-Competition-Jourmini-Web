<template>
  <div class="spinner" v-if="isLoading">
    <!-- Customize the spinner style as needed -->
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
  <div class="container conversation-content">
    <div class="dialogs" ref="dialogsContainer">
      <div v-for="(obj, index) in history" :key="index">
        <div v-for="(value, key) in obj" :key="key">
          <dialog-box :role="key" v-if="key === 'suggestion'">
            <template #default>
              <suggestion-box
                :suggestion="value"
                @send-chat="handleSendChat"
                @loading="isLoading = true"
              ></suggestion-box>
            </template>
          </dialog-box>
          <dialog-box :role="key" v-else>
            <template #default>
              <plan-box :suggestion="value"></plan-box>
            </template>
          </dialog-box>
        </div>
      </div>
      <div class="user-input">
        <textarea
          type="text"
          class="input-area"
          @keydown="handleKeyDown"
          :rows="rows"
          v-model="inputValue"
          :disabled="isLoading"
        ></textarea>
        <div class="upload" @click="handleClick">
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
                d="M12.0004 18.5816V12.5M12.7976 18.754L15.8103 19.7625C17.4511 20.3118 18.2714 20.5864 18.7773 20.3893C19.2166 20.2182 19.5499 19.8505 19.6771 19.3965C19.8236 18.8737 19.4699 18.0843 18.7624 16.5053L14.2198 6.36709C13.5279 4.82299 13.182 4.05094 12.7001 3.81172C12.2814 3.60388 11.7898 3.60309 11.3705 3.80958C10.8878 4.04726 10.5394 4.8182 9.84259 6.36006L5.25633 16.5082C4.54325 18.086 4.18671 18.875 4.33169 19.3983C4.4576 19.8528 4.78992 20.2216 5.22888 20.394C5.73435 20.5926 6.55603 20.3198 8.19939 19.7744L11.2797 18.752C11.5614 18.6585 11.7023 18.6117 11.8464 18.5933C11.9742 18.5769 12.1036 18.5771 12.2314 18.5938C12.3754 18.6126 12.5162 18.6597 12.7976 18.754Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="map">
      <h1 class="h1">Enjoy your trip</h1>
      <google-map></google-map>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch, nextTick, onMounted } from "vue";
import { useStore } from "vuex";
import DialogBox from "./ui/DialogBox.vue";
import SuggestionBox from "./suggestion/SuggestionBox.vue";
import PlanBox from "./schedule/PlanBox.vue";
import GoogleMap from "./schedule/GoogleMap.vue";

const rows = ref(1);
const inputValue = ref("");
const response = ref(0);
const isLoading = ref(false);
const dialogsContainer = ref(null);
const store = useStore();
const history = computed(
  () => store.getters["conversations/conversationHistory"]
);

const handleSendChat = () => {
  isLoading.value = false;
  response.value += 1;
};

const handleClick = async (e) => {
  if (inputValue.value.trim() === "") return;
  isLoading.value = true;
  if (history.value.length == 0) {
    await store.dispatch("conversations/sendChat", inputValue.value);
  } else {
    await store.dispatch("conversations/initChat", inputValue.value);
  }
  rows.value = 1;
  e.target.value = "";
  inputValue.value = "";
  response.value += 1;
  isLoading.value = false;
};

const handleKeyDown = async (e) => {
  if (e.key === "Enter" && inputValue.value.trim() === "") {
    e.preventDefault();
    return;
  } else if (e.key === "Enter" && e.shiftKey) {
    // Insert a new line in the textarea
    e.preventDefault(); // Prevent the default behavior (submitting the form)

    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const value = e.target.value;

    e.target.value = value.substring(0, start) + "\n" + value.substring(end);
    inputValue.value = value.substring(0, start) + "\n" + value.substring(end);

    e.target.selectionStart = e.target.selectionEnd = start + 1; // Move the cursor position
    rows.value++;
  } else if (
    e.key === "Backspace" &&
    e.target.selectionStart === e.target.selectionEnd &&
    e.target.value.charAt(e.target.selectionStart - 1) === "\n"
  ) {
    rows.value--;
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (inputValue.value.trim() === "") return;
    isLoading.value = true;
    if (history.value.length > 0) {
      await store.dispatch("conversations/sendChat", e.target.value);
    } else {
      await store.dispatch("conversations/initChat", e.target.value);
    }
    rows.value = 1;
    e.target.value = "";
    inputValue.value = "";
    response.value += 1;
    isLoading.value = false;
  }
};
watch(response, () => {
  if (
    history.value &&
    history.value.length > 0 &&
    history.value[history.value.length - 1].suggestion &&
    history.value[history.value.length - 1].suggestion.location_info
  ) {
    store.dispatch(
      "conversations/setMarker",
      history.value[history.value.length - 1].suggestion.location_info
    );
  }
  nextTick(() => {
    dialogsContainer.value.scrollTo({
      top: dialogsContainer.value.scrollHeight,
      behavior: "smooth",
    });
  });
});

onMounted(() => {
  if (
    history.value &&
    history.value.length > 0 &&
    history.value[history.value.length - 1].suggestion &&
    history.value[history.value.length - 1].suggestion.location_info
  ) {
    store.dispatch(
      "conversations/setMarker",
      history.value[history.value.length - 1].suggestion.location_info
    );
  }
  nextTick(() => {
    dialogsContainer.value.scrollTo({
      top: dialogsContainer.value.scrollHeight,
      behavior: "smooth",
    });
  });
});
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}

p {
  font-size: 1.4rem;
  white-space: pre-line;
  text-align: start;
}

.dialogs {
  overflow-y: scroll;
  position: relative;
  height: calc(95vh - 4.1rem);
}

.dialog:last-child {
  margin-bottom: 5rem;
}

.container.conversation-content {
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  width: calc(100% - 2rem);
  height: 100vh;

  padding: 2rem 1rem 0px 1rem;
  color: #fff;

  display: grid;
  grid-template-columns: 70% 30%;
  gap: 0.5rem;
}

.user-input {
  position: fixed;
  bottom: 0;
  left: 45%;
  transform: translate(-50%, 0%);
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #212529;
}

.input-area {
  transform: translate(0, -0.5rem);
  width: calc(80% - 1.5rem);

  max-height: 10rem;
  padding: 1rem 0px 1rem 1.5rem;

  font-size: 1.5rem;
  border-radius: 15px;
  background-color: #343a40;
  color: #fff;
}

.upload {
  transform: translate(0, -0.5rem);
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 50%;
}

.upload:hover {
  cursor: pointer;
}

.folder {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 25%;
  padding: 1rem;
  transform: translate(-80%, 10%);

  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.folder:hover {
  cursor: pointer;
}

.item.item-number {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 1rem;
  background-color: black;
  transform: translate(-190%, 20%);
  padding: 0;
  color: #fff;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #e03131;

  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 100px;
  height: 100px;
  position: fixed;
  z-index: 10000;
  bottom: 0%;
  left: 20%;
  transform: translate(50%, 50%);
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
