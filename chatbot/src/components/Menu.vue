
<template>
  <div class="menu">
    <!-- Excluir Chat (apenas na rota "/") -->
    <button v-if="isHome" @click="showConfirmationModal = true" class="menu-button">
      <div class="icon-text">
        <span>Excluir Chat</span>
        <font-awesome-icon icon="trash-can" />
      </div>
    </button>

    <!-- Voltar para o Chat (apenas na rota "/ajuda") -->
    <button v-if="isHelp" @click="goToChat" class="menu-button">
      <div class="icon-text">
        <span>Voltar para o Chat</span>
        <font-awesome-icon icon="angle-left" />
      </div>
    </button>

    <!-- Modo Noturno/Claro -->
    <button @click="toggleDarkMode" class="menu-button">
      <div class="icon-text">
        <span>{{ darkMode ? 'Modo Claro' : 'Modo Noturno' }}</span>
        <font-awesome-icon :icon="darkMode ? 'sun' : 'moon'" />
      </div>
    </button>

    <!-- Ajuda -->
    <button @click="goToHelp" class="menu-button">
      <div class="icon-text">
        <span>Ajuda</span>
        <font-awesome-icon icon="circle-question" />
      </div>
    </button>

    <!-- Modal de Confirmação -->
    <div v-if="showConfirmationModal" class="confirmation-modal">
      <div class="modal-content">
        <p><b>Excluir chat?</b></p>
        <p>Isso excluirá todas as mensagens</p>
        <div class="modal-actions">
          <button @click="showConfirmationModal = false" class="cancel-button">Cancelar</button>
          <button @click="confirmClearMessages" class="confirm-button">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  props: ['darkMode'],
  emits: ['toggle-dark-mode', 'clear-messages'],
  setup(_, { emit }) {
    const router = useRouter();
    const route = useRoute();
    const showConfirmationModal = ref(false);

    // Computed properties para verificar a rota atual
    const isHome = computed(() => route.path === '/');
    const isHelp = computed(() => route.path === '/ajuda');

    const goToHelp = () => {
      router.push('/ajuda');
    };

    const goToChat = () => {
      router.push('/');
    };

    const confirmClearMessages = () => {
      emit('clear-messages');
      showConfirmationModal.value = false;
    };

    return {
      goToHelp,
      goToChat,
      showConfirmationModal,
      confirmClearMessages,
      isHome,
      isHelp,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    },
  },
};
</script>

<style scoped>
.menu {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.menu-button {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 7px;
  border: none;
  border-radius: 5px;
  background: transparent; 
  color: #096AD9;
  font-family: Arial, sans-serif;
  font-size: 16px;
  transition: background 0.3s;
  width: 100%;
}

.menu-button:hover {
  background: rgba(0, 0, 0, 0.1);
}

.icon-text {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
}

i {
  font-size: 18px;
  line-height: 1;
  font-family: 'Font Awesome 5 Free';
  font-weight: 400;
}

.confirmation-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
}

.modal-content p {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  font-family: Arial, sans-serif;
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.confirm-button,
.cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.confirm-button {
  background: #d9534f;
  color: #fff;
}

.confirm-button:hover {
  background: #c9302c;
}

.cancel-button {
  background: #ddd;
  color: #333;
}

.cancel-button:hover {
  background: #bbb;
}
</style>
