<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="ml-14 pa-3"
    clearable
    hide-details
    outlined
    label="Add new fing to do"
    append-icon="mdi-plus"
  ></v-text-field>
</template>

<script>
import { ref } from '@vue/composition-api';
import store from '@/store';

export default {
  name: 'AddTask',
  setup() {
    const newTaskTitle = ref('');

    const addTask = () => {
      store.dispatch('addTask', newTaskTitle.value);
      newTaskTitle.value = '';
    };
    return {
      addTask,
      newTaskTitle,
    };
  },
};
</script>

 
