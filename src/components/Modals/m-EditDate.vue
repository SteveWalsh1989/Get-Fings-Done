<template>
  <v-dialog ref="dialog" v-model="showDialog" persistent width="290px">
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text @click="showDialog = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$emit('confirmed', date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import { computed, ref } from '@vue/composition-api';

export default {
  name: 'mEditDate',
  components: {},
  props: {
    show: { type: Boolean, default: false },
    task: { type: Object, required: true },
  },
  setup(props) {
    const showDialog = ref(props.show);

    const date = ref(props.task.dueDate);
    return { date, showDialog };
  },
};
</script>
