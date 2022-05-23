<template>
  <v-list-item
    :class="{ 'blue lighten-5': task.completed }"
    class="my-1 rounded"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <template v-slot:default>
      <v-list-item-action>
        <div class="w-6">
          <v-btn
            v-show="hover"
            class="cursor-move"
            color="grey"
            @mousedown="drag = true"
            @mouseup="drag = false"
            dark
            icon
          >
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </div>
      </v-list-item-action>
      <v-list-item-action>
        <v-checkbox
          @click="toggleTaskCompletion(task.id)"
          :input-value="task.completed"
          color="primary"
          :aria-pressed="task.completed"
          aria-label="Mark as completed"
        ></v-checkbox>
      </v-list-item-action>
      <v-list-item-content class="ml-4">
        <v-list-item-title
          :class="{ 'line-through': task.completed }"
          :aria-label="task.title"
          tabindex="0"
        >
          {{ task.title }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action v-if="task.dueDate">
        <v-list-item-action-text>
          {{ formatDate(task.dueDate) }}
          <v-icon class="bottom-0.5" small> mdi-calendar-blank-outline </v-icon>
        </v-list-item-action-text>
      </v-list-item-action>
      <v-list-item-action>
        <TaskOptions :task="task" />
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import store from '@/store';
import TaskOptions from '@/components/Tasks/TaskOptions';
import { formatDate } from '../../utils/helpers';
import { DateTime } from 'luxon';
export default {
  name: 'Task',
  components: { TaskOptions },
  props: {
    task: { type: Object, required: true },
  },
  setup() {
    const hover = ref(false);

    function toggleTaskCompletion(id) {
      const tasks = computed(() => store.state.tasks);
      let task = tasks.value.filter((task) => task.id === id)[0];
      if (task.completed) {
        store.dispatch('uncompleteTask', id);
      } else {
        store.dispatch('completeTask', id);
      }
    }

    return { DateTime, formatDate, hover, toggleTaskCompletion };
  },
};
</script>
