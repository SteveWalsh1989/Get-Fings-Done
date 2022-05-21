<template>
  <v-list subheader two-line flat>
    <v-list-item
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ 'blue lighten-5': task.completed }"
      class="rounded"
      @click="toggleTaskCompletion(task.id)"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.completed"
            color="primary"
          ></v-checkbox>
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
        </v-list-item-action>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
import store from '@/store';
import { computed, ref } from '@vue/composition-api';

export default {
  name: 'Tasklist',
  components: {},
  setup() {
    const tasks = computed(() => store.state.tasks);

    function toggleTaskCompletion(id) {
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
    return {
      deleteTask,
      tasks,
      toggleTaskCompletion,
    };
  },
};
</script>
