<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      color="primary"
      class="mt-5 ml-4"
      :class="{ 'border border-solid border-black': hover }"
      @click="updateTaskListOrder"
      icon
    >
      <v-icon>mdi-sort-alphabetical-ascending</v-icon>
    </v-btn>
  </v-hover>
</template>

<script>
import { computed } from '@vue/composition-api';
import store from '@/store';

export default {
  name: 'SortTasks',
  setup() {
    const tasks = computed(() => store.state.tasks);
    function updateTaskListOrder() {
      tasks.value.sort((a, b) => a.title.localeCompare(b.title));
      store.commit('updateTaskListOrder', tasks.value);
    }

    return { updateTaskListOrder };
  },
};
</script>

 
