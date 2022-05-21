<template>
  <v-list-item
    :class="{ 'blue lighten-5': task.completed }"
    class="rounded"
    @click="toggleTaskCompletion(task.id)"
  >
    <template v-slot:default>
      <v-list-item-action>
        <v-checkbox :input-value="task.completed" color="primary"></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title :class="{ 'line-through': task.completed }">
          {{ task.title }}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn @click.stop="deleteTask(task.id)" icon>
          <v-icon color="primary lighten-1">mdi-trash-can-outline</v-icon>
        </v-btn>
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
        store.commit('uncompleteTask', id);
      } else {
        store.commit('completeTask', id);
      }
    }

    function deleteTask(id) {
      store.commit('deleteTask', id);
    }

    return { deleteTask, toggleTaskCompletion };
  },
};
</script>
