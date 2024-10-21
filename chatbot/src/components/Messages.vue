<script setup>
import { onUpdated, ref } from 'vue';
import Message from './Message.vue';

const props = defineProps({
  messages: Array,
  me: Object,
});

const bottomRef = ref(null);

onUpdated(() => {
  bottomRef.value.scrollIntoView({ behavior: 'smooth' });
});
</script>

<template>
  <ul class="messagesList">
    <Message 
      v-for="message in messages" 
      :key="message.id" 
      :member="message.member" 
      :data="message.data" 
      :id="message.id"
      :me="me" 
    />
    <div ref="bottomRef"></div>
  </ul>
</template>

<style scoped>
.messagesList {
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  overflow: auto;
}

@media (max-width: 600px) {
  .messagesList {
    padding: 0 10px;
  }
}
</style>
