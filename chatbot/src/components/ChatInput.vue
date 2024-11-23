<template>
  <form class="inputForm" @submit.prevent="sendMessage">
    <input v-model="localMessage" placeholder="Digite sua mensagem..." />
    <button type="submit">
      <font-awesome-icon icon="fas fa-paper-plane" />
    </button>
  </form>
</template>

<script>
export default {
  props: ['newMessage'],
  emits: ['send-message', 'update:newMessage'],
  data() {
    return {
      localMessage: this.newMessage || '',
    };
  },
  watch: {
    newMessage(newVal) {
      this.localMessage = newVal;
    }
  },
  methods: {
    sendMessage() {
      if (this.localMessage.trim() === '') return;

      this.$emit('send-message', this.localMessage);

      this.localMessage = '';
      this.$emit('update:newMessage', this.localMessage);
    }
  }
};
</script>

<style scoped>
.inputForm {
  display: flex;
  width: 100%;
  background: #cfcece;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  position: sticky;
  bottom: 0;
}

input {
  font-size: 16px;
  border: 0;
  outline: none;
  flex-grow: 1;
  padding: 10px;
  border-radius: 10px;
  background: #cfcece;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 24px;
  color: #096AD9;
}

button:hover i {
  color: #4685ce; 
}

@media (max-width: 600px) {
  input {
    padding: 8px;
  }

  button {
    padding: 8px; 
  }

  button i {
    font-size: 20px;
  }
}
</style>
