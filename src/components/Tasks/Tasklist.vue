<template>
  <v-list subheader two-line flat>
    <Task v-for="(task, index) in tasks" :key="index" :task="task" />
  </v-list>
</template>

<script>
import store from '@/store';
import { computed } from '@vue/composition-api';
import Task from '@/components/Tasks/Task';
export default {
  name: 'Tasklist',
  components: { Task },
  setup() {
    const tasks = computed(() => store.state.tasks);

    return {
      tasks,
    };
  },
};
</script>
