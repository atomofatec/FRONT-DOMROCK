<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  member: Object,
  me: Object,
  data: String,
  id: String,
});

const { color } = props.member.clientData;
const messageFromMe = props.member.id === props.me.id;
const className = messageFromMe ? "messagesMessage currentMember" : "messagesMessage";
</script>

<template>
  <li :key="id" :class="className">
    <span class="avatar" :style="{ backgroundColor: color }" />
    <div class="messageContent">
      <div class="text">{{ data }}</div>
    </div>
  </li>
</template>

<style scoped>
.messagesMessage {
  display: flex;
  margin-top: 10px;
}

.currentMember {
  flex-direction: row-reverse;
  text-align: right;
}

.avatar {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}

.messageContent {
  padding: 10px;
  max-width: 80%;
  border-radius: 12px;
  background-color: #096AD9;
  color: white;
}

.currentMember .messageContent {
  background-color: white;
  color: black;
}

@media (max-width: 600px) {
  .messagesMessage {
    flex-direction: column;
  }

  .messageContent {
    max-width: 90%;
  }

  .avatar {
    display: none;
  }
}
</style>
