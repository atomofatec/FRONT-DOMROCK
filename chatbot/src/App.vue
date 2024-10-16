<template>
  <div :class="['chatbot-container', { dark: darkMode }]">
    <!-- Menu lateral superior direito -->
    <Menu :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" />

    <!-- Corpo principal do chat com fundo -->
    <div class="chat-window">
      <ChatInput @send-message="sendMessage" />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import ChatInput from './components/ChatInput.vue';

export default {
  components: {
    Menu,
    ChatInput
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  }
};
</script>

<style scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.chatbot-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #E4E4E5;
}

.chatbot-container.dark {
  background-color: #2c2c2c;
  color: white;
}

.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%; 
  height: 100%;
  background-image: url('../logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 13%;
}
</style>