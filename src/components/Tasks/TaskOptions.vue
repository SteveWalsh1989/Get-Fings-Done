<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in options"
          :key="index"
          @click="item.click()"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <Modal
      v-if="showModal"
      :show="showModal"
      title="Are you sure?"
      text="This will delete the fing"
      @confirmed="deleteTask(taskId)"
      @closed="showModal = false"
    />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import Modal from '@/components/Modal';
import store from '@/store';

export default {
  name: 'TaskOptions',
  components: { Modal },
  props: {
    taskId: { type: Number, required: true },
  },
  setup(props) {
    const showModal = ref(false);

    const options = [
      {
        title: 'Edit',
        icon: 'mdi-pencil-outline',
        click() {
          console.log('Edit', props.taskId);
        },
      },
      {
        title: 'Due Date',
        icon: 'mdi-calendar-blank-outline',
        click() {
          console.log('Due date', props.taskId);
        },
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          showModal.value = true;
          console.log('showModal', showModal.value);
        },
      },
    ];

    function deleteTask(id) {
      store.dispatch('deleteTask', id);
    }

    return { deleteTask, options, showModal };
  },
};
</script>
