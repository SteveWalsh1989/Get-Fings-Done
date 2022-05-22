<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in options" :key="index">
          <v-btn
            class="w-full"
            :disabled="item.disabled"
            @click="item.click()"
            text
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <mEditTask
      v-if="showModal.editTask"
      :show="showModal.editTask"
      :task="task"
      @save="editTaskTitle"
      @cancel="showModal.editTask = false"
    />
    <mDeleteTask
      v-if="showModal.deleteTask"
      :show="showModal.deleteTask"
      @confirmed="deleteTask(task.id)"
      @closed="showModal.deleteTask = false"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { ref } from '@vue/composition-api';
import mDeleteTask from '@/components/Modals/m-DeleteTask';
import mEditTask from '@/components/Modals/m-EditTask';
import store from '@/store';

export default {
  name: 'TaskOptions',
  components: { mDeleteTask, mEditTask },
  props: {
    task: { type: Object, required: true },
  },
  setup(props) {
    const showModal = ref({
      deleteTask: false,
      editTask: false,
    });

    const options = [
      {
        title: 'Edit',
        icon: 'mdi-pencil-outline',
        disabled: props.task.completed,
        click() {
          showModal.value.editTask = true;
        },
      },
      {
        title: 'Due Date',
        icon: 'mdi-calendar-blank-outline',
        disabled: props.task.completed,
        click() {
          console.log('dueDate');
        },
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          showModal.value.deleteTask = true;
        },
      },
    ];

    function deleteTask(id) {
      store.dispatch('deleteTask', id);
    }
    function editTaskTitle(value) {
      store.dispatch('editTaskTitle', { id: value.id, newTitle: value.title });
      showModal.value.editTask = false;
    }

    return {
      deleteTask,
      editTaskTitle,
      options,
      showModal,
    };
  },
};
</script>
