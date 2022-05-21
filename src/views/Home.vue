<template>
  <v-container class="">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      clearable
      hide-details
      outlined
      label="Add new fing to do"
      append-icon="mdi-plus"
    ></v-text-field>
    <v-list v-if="tasks.length" subheader two-line flat>
      <div v-for="(task, index) in tasks" :key="index">
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
      </div>
    </v-list>
    <EmptyState v-else />
  </v-container>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import EmptyState from '@/components/EmptyState';
import store from '@/store';
export default {
  name: 'Home',
  components: { EmptyState },
  setup() {
    const newTaskTitle = ref('');
    const tasks = computed(() => store.state.tasks);

    function toggleTaskCompletion(id) {
      let task = tasks.value.filter((task) => task.id === id)[0];
      if (task.completed) {
        store.commit('uncompleteTask', id);
      } else {
        store.commit('completeTask', id);
      }
    }

    const addTask = () => {
      store.commit('addTask', newTaskTitle.value);
    };

    function deleteTask(id) {
      store.commit('deleteTask', id);
    }

    return {
      newTaskTitle,
      tasks,

      // methods
      addTask,
      deleteTask,
      toggleTaskCompletion,
    };
  },
};
</script>
