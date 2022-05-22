<template>
  <v-dialog v-model="showDialog" max-width="290" persistent>
    <v-card>
      <v-card-title class="text-h5"> {{ title }} </v-card-title>
      <v-card-text>
        <v-text-field
          :placeholder="task.title"
          v-model="newTitle"
          @keyup.enter="saveTitle"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cancel">
          {{ negative }}
        </v-btn>
        <v-btn
          :disabled="newTitle.length === 0"
          color="blue"
          text
          @click="saveTitle"
        >
          {{ positive }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'm-EditTask',
  components: {},
  props: {
    show: { type: Boolean, default: false },
    task: { type: Object, required: true },
  },
  setup(props, { emit }) {
    const newTitle = ref('');
    const title = "Change fing's title";
    const positive = 'save';
    const negative = 'cancel';
    const showDialog = ref(props.show);

    function saveTitle() {
      emit('save', { id: props.task.id, title: newTitle.value });
    }
    function cancel() {
      emit('cancel');
    }

    return {
      cancel,
      negative,
      newTitle,
      positive,
      saveTitle,
      showDialog,
      title,
    };
  },
};
</script>
