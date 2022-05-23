<template>
  <v-list subheader two-line flat>
    <draggable v-model="tasks">
      <div
        v-for="(task, index) in tasks"
        class="flex items-center"
        :key="index"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div class="w-14 flex">
          <v-btn
            v-show="hover"
            class="cursor-move flex"
            color="grey"
            @mousedown="drag = true"
            @mouseup="drag = false"
            dark
            icon
          >
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </div>
        <Task :task="task" />
      </div>
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
    const hover = ref(false);
    const drag = ref(false);

    const tasks = computed({
      get() {
        return store.getters.filteredTasks;
      },
      set(value) {
        store.commit('updateTaskListOrder', value);
      },
    });

    return {
      drag,
      hover,
      tasks,
    };
  },
};
</script>
