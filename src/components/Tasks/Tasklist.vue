<template>
  <v-list subheader two-line flat>
    <draggable v-model="tasks">
      <Task
        v-for="(task, index) in tasks"
        class="flex items-center"
        :key="index"
        :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import store from '@/store';
import draggable from 'vuedraggable';
import { computed, ref } from '@vue/composition-api';
import Task from '@/components/Tasks/Task';
export default {
  name: 'Tasklist',
  components: { draggable, Task },
  setup() {
    const drag = ref(false);

    const tasks = computed({
      get() {
        return store.getters.filteredTasks;
      },
      set(value) {
        store.dispatch('sortTasks', value);
      },
    });

    return {
      drag,
      tasks,
    };
  },
};
</script>
