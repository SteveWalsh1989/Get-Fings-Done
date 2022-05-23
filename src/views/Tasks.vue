<template>
  <v-container class="m-0">
    <div class="flex">
      <SortTasks />
      <AddTask />
    </div>

    <Tasklist v-if="tasks.length" />
    <EmptyState v-else />
  </v-container>
</template>

<script>
import { computed } from '@vue/composition-api';
import EmptyState from '@/components/Tasks/EmptyState';
import AddTask from '@/components/Tasks/AddTask';
import SortTasks from '@/components/Tasks/SortTasks';
import Tasklist from '@/components/Tasks/Tasklist';
import store from '@/store';
export default {
  name: 'Home',
  components: { AddTask, EmptyState, SortTasks, Tasklist },
  setup() {
    const tasks = computed(() => store.state.tasks);

    return {
      tasks,
    };
  },
};
</script>
