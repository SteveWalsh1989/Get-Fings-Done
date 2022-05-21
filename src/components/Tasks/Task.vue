<template>
  <v-list-item
    :class="{ 'blue lighten-5': task.completed }"
    class="rounded"
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
        <v-btn @click.stop="deleteTask(task.id)" aria-label="Delete" icon>
          <v-icon color="primary lighten-1">mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
import { computed } from '@vue/composition-api';
import store from '@/store';

export default {
  name: 'Task',
  components: {},
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

    function deleteTask(id) {
      store.dispatch('deleteTask', id);
    }

    return { deleteTask, toggleTaskCompletion };
  },
};
</script>
