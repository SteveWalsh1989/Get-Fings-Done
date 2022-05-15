<template>
  <v-container class="">
    <v-list subheader two-line flat>
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
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'Home',
  setup() {
    const newTaskTitle = ref('');
    const tasks = ref([
      {
        id: 1,
        title: 'Buy milk',
        description: 'Get some milk from the store',
        completed: false,
      },
      {
        id: 2,
        title: 'Buy eggs',
        description: 'Get some eggs from the store',
        completed: false,
      },
      {
        id: 3,
        title: 'Buy bread',
        description: 'Get some bread from the store',
        completed: false,
      },
    ]);

    function toggleTaskCompletion(id) {
      let task = tasks.value.filter((task) => task.id === id)[0];
      task.completed = !task.completed;
    }
    function addTask() {
      tasks.value.push({
        id: tasks.value.length + 1, // temp hack for id for now
        title: newTaskTitle.value,
        description: '',
        completed: false,
      });
      newTaskTitle.value = '';
    }
    function deleteTask(id) {
      tasks.value = tasks.value.filter((task) => task.id !== id);
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
