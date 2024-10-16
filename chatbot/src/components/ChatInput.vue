<script setup>
import { ref } from 'vue';

const props = defineProps({
  onSendMessage: Function,
  onChangeTypingState: Function,
});

const text = ref('');

function onChange(e) {
  const textValue = e.target.value;
  text.value = textValue;
}

function onSubmit() {
  if (text.value.trim()) {
    props.onSendMessage(text.value);
    text.value = ''; // Limpa a caixa de entrada após o envio
  }
}
</script>

<template>
  <div class="input-container">
    <form @submit.prevent="onSubmit" class="chat-form">
      <input
        v-model="text"
        @input="onChange"
        placeholder="Digite sua mensagem..."
      />
      <button type="submit" class="send-button">
        <i class="fas fa-paper-plane"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.input-container {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.chat-form {
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
}

input {
  flex-grow: 1;
  font-size: 16px;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #bdbdbd;
  margin-right: 10px;
}

.send-button {
  background-color: #096AD9;
  border: none;
  padding: 12px 14px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  margin-right: 10px;
}

.send-button i {
  font-size: 18px;
}

.send-button:hover {
  opacity: 0.8;
}
</style>
