<template>
  <div class="menu">
    <!-- Modo Escuro/Claro -->
    <button @click="toggleDarkMode" class="menu-button">
      <div class="icon-text">
        <span>{{ darkMode ? 'Modo Claro' : 'Modo Escuro' }}</span>
        <i :class="darkMode ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></i>
      </div>
    </button>

    <!-- Ajuda -->
    <button @click="goToHelp" class="menu-button">
      <div class="icon-text">
        <span>Ajuda</span>
        <i class="fa-regular fa-circle-question"></i>
      </div>
    </button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: ['darkMode'],
  setup() {
    const router = useRouter();

    const goToHelp = () => {
      router.push('/ajuda');
    };

    return { goToHelp };
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    }
  }
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
  padding: 10px;
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
  align-items: center;
  gap: 10px;
}

i {
  font-size: 18px;
  line-height: 1;
  font-family: 'Font Awesome 5 Free';
  font-weight: 400;
}

</style>
