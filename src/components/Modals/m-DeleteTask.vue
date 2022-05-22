<template>
  <v-dialog v-model="showDialog" max-width="290" persistent>
    <v-card>
      <v-card-title class="text-h5"> {{ title }} </v-card-title>
      <v-card-text> {{ text }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="$emit('closed')">
          {{ negative }}
        </v-btn>
        <v-btn text @click="$emit('confirmed')">
          {{ positive }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { computed, ref } from '@vue/composition-api';

export default {
  name: 'm-DeleteTask',
  components: {},
  props: {
    show: { type: Boolean, default: false },
  },
  setup(props) {
    const title = 'Are you sure?';
    const text = 'This will delete the fing';
    const positive = 'Delete';
    const negative = 'cancel';
    const showDialog = ref(props.show);

    return { showDialog, negative, positive, text, title };
  },
};
</script>
