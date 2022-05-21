<template>
  <v-dialog v-model="showDialog" max-width="290">
    <v-card>
      <v-card-title class="text-h5"> {{ title }} </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="showDialog = false">
          {{ negative }}
        </v-btn>
        <v-btn color="green darken-1" text @click="positiveAction()">
          {{ positive }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { computed, ref } from '@vue/composition-api';

export default {
  name: 'Modal',
  components: {},
  props: {
    show: { type: Boolean, default: false },
    title: { type: String, required: true },
    text: { type: String, required: true },
    positive: { type: String, default: 'Yes' },
    negative: { type: String, default: 'No' },
    action: { type: Function },
  },
  setup(props) {
    const showDialog = ref(props.show);
    function positiveAction() {
      props.action();
      showDialog = false;
    }
    return { positiveAction, showDialog };
  },
};
</script>
