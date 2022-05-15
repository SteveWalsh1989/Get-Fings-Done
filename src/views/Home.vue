<template>
  <v-container class="">
    <v-list subheader two-line flat>
      <div v-for="(task, index) in tasks" :key="index">
        <v-list-item
          :class="{ 'deep-purple': task.completed }"
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
              <v-list-item-title>
                {{ task.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ task.completed }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { ref, computed } from '@vue/composition-api';
export default {
  name: 'Home',
  setup() {
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
    return {
      tasks,
      toggleTaskCompletion,
    };
  },
};
</script>
