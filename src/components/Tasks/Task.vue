<template>
  <v-list-item
    :class="{ 'blue lighten-5': task.completed }"
    class="my-1 rounded"
    @click="toggleTaskCompletion(task.id)"
  >
    <template v-slot:default>
      <v-list-item-action>
        <v-checkbox
          :input-value="task.completed"
          color="primary"
          :aria-pressed="task.completed"
          aria-label="Mark as completed"
        ></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title
          :class="{ 'line-through': task.completed }"
          :aria-label="task.title"
          tabindex="0"
        >
          {{ task.title }}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <TaskOptions :task="task" />
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
import { computed } from '@vue/composition-api';
import store from '@/store';
import TaskOptions from '@/components/Tasks/TaskOptions';

export default {
  name: 'Task',
  components: { TaskOptions },
  props: {
    task: { type: Object, required: true },
  },
  setup() {
    function toggleTaskCompletion(id) {
      const tasks = computed(() => store.state.tasks);
      let task = tasks.value.filter((task) => task.id === id)[0];
      if (task.completed) {
        store.dispatch('uncompleteTask', id);
      } else {
        store.dispatch('completeTask', id);
      }
    }

    return { toggleTaskCompletion };
  },
};
</script>
