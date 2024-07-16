<template>
  <div class="container conversation-content">
    <div class="dialogs">
      <div v-for="(obj, index) in history" :key="index" class="dialog">
        <div v-for="(value, key) in obj" :key="key">
          <dialog-box :role="key">
            <template #default>
              <p v-html="formatDialog(value)"></p>
            </template>
          </dialog-box>
        </div>
      </div>
    </div>
    <div class="user-input">
      <textarea
        type="text"
        class="input-area"
        @keydown="handleKeyDown"
        :rows="rows"
        v-model="inputValue"
      ></textarea>
      <div class="upload" @click="handleClick">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div class="folder">
      <div class="item item-number" v-if="selectedPlaceNumber > 0">
        {{ selectedPlaceNumber }}
      </div>
      <svg
        viewBox="-102.4 -102.4 1228.80 1228.80"
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#ffffff"
            d="M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 01216.96 384H832zm-24.96 512H96a32 32 0 01-32-32V160a32 32 0 0132-32h287.872l128.384 128H864a32 32 0 0132 32v96h23.04a32 32 0 0131.04 39.744l-112 448A32 32 0 01807.04 896z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import DialogBox from "./ui/DialogBox.vue";

let rows = ref(1);
let selectedPlaceNumber = ref(1);
let inputValue = ref("");
const store = useStore();
const history = computed(
  () => store.getters["conversations/conversationHistory"]
);

const formatDialog = (dialog) => dialog.replace(/\n/g, "<br>");

const handleClick = (e) => {
  if (inputValue.value.trim() === "") return;
  store.commit("conversations/sendChat", inputValue.value);
  rows.value = 1;
  e.target.value = "";
  inputValue.value = "";
};

const handleKeyDown = (e) => {
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
    store.commit("conversations/sendChat", e.target.value);
    rows.value = 1;
    e.target.value = "";
    inputValue.value = "";
  }
};
</script>

<style scoped>
p {
  font-size: 1.4rem;
  white-space: pre-line;
  text-align: start;
}

.dialogs {
  overflow-y: scroll;
}

.dialog:last-child {
  margin-bottom: 5rem;
}
.container.conversation-content {
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

.user-input {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #212529;
}

.input-area {
  transform: translate(0, -0.5rem);
  width: calc(60% - 1.5rem);

  max-height: 10rem;
  padding: 1rem 0px 1rem 1.5rem;

  font-size: 1.5rem;
  border-radius: 15px;
  background-color: #343a40;
  color: #fff;
}

.upload {
  transform: translate(0, -0.5rem);
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 50%;
}

.upload:hover {
  cursor: pointer;
}

.folder {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  transform: translate(-30%, 10%);

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
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
</style>
