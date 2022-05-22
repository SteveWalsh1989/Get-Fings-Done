<template>
  <v-dialog v-model="showDialog" max-width="290" persistent>
    <v-card>
      <v-card-title class="text-h5"> {{ title }} </v-card-title>
      <v-card-text>
        <v-text-field
          :placeholder="task.title"
          v-model="newTitle"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue" text @click="$emit('cancel')">
          {{ negative }}
        </v-btn>
        <v-btn
          color="blue"
          text
          @click="$emit('save', { id: task.id, title: newTitle })"
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
  setup(props) {
    const newTitle = ref('');
    const title = "Change fing's title";
    const positive = 'save';
    const negative = 'cancel';
    const showDialog = ref(props.show);

    return { negative, newTitle, positive, showDialog, title };
  },
};
</script>
