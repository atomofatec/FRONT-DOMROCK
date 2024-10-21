<template>
  <div class="app">
    <div class="vertical-line left-line"></div>
    <div class="vertical-line right-line"></div>

    <Menu :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" />

    <div class="appContent">
      <Messages :messages="messages" :me="me" />
      <ChatInput :newMessage="newMessage" @send-message="sendMessage" @update:newMessage="newMessage = $event" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Messages from './components/Messages.vue';
import Menu from './components/Menu.vue';
import ChatInput from './components/ChatInput.vue';

// Funções para gerar cor aleatória
function randomName() {
  const adjectives = ['autumn', 'hidden', 'misty', 'silent'];
  const nouns = ['river', 'moon', 'rain', 'wind'];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

// Variáveis reativas para mensagens e estado do usuário
const messages = ref([]);
const me = ref({
  id: '0',
  clientData: {
    color: randomColor(),
    username: randomName(),
  },
});

const newMessage = ref('');
const darkMode = ref(false); 

// Função para enviar mensagens
function sendMessage(message) {
  if (message.trim() === '') return;

  // Adiciona a mensagem do usuário
  messages.value.push({
    id: String(messages.value.length + 1),
    data: message,
    member: me.value,
  });

  newMessage.value = '';

  // Simula uma resposta do bot
  setTimeout(() => {
    messages.value.push({
      id: String(messages.value.length + 1),
      data: 'Esta é uma resposta de teste!',
      member: {
        id: '1',
        clientData: {
          color: '#096AD9',
        },
      },
    });
  }, 1000);
}

// Função para alternar modo noturno/claro
function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}

watch(darkMode, (newValue) => {
  if (newValue) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--background-color);
  transition: background-color 0.3s ease;
  position: relative;
}

.vertical-line {
  position: absolute;
  width: 3px;
  background-color: #096AD9;
  height: 100%;
  left: 0;
}

.left-line {
  top: 0;
}

.right-line {
  top: 0;
  left: 20px;
  z-index: 0;
}

.appContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  height: calc(100vh - 50px);
  padding: 0 10px;
  background-image: url('../logoChatbot.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 13%;
}

.messagesList {
  flex-grow: 1;
  overflow-y: auto;
}

@media (max-width: 600px) {
  .vertical-line {
    display: none;
  }

  .appContent {
    padding: 0 5px;
  }

  .app {
    height: auto;
  }
}

</style>

<style>
:root {
  --background-color: rgba(99, 99, 191, 0.07);
}

.dark-mode {
  --background-color: #16181A;
  color: white;
}

.dark-mode input, .dark-mode button {
  background-color: #454646;
  color: white;
}

.dark-mode .inputForm{
  background-color: #454646;
}

.dark-mode nav a {
  color: white;
}
</style>