<template>
  <v-snackbar
    v-model="notification.show"
    :timeout="timeout"
    outlined
    rounded="pill"
  >
    {{ notification.text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="hideNotification">
        close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import store from '@/store';
import { computed } from '@vue/composition-api';

export default {
  name: 'Notification',
  components: {},
  setup() {
    const notification = computed(() => store.state.notification);

    const text = 'Testing out Notification ';

    const timeout = 40000; // TODO: change to small number after test

    const hideNotification = () => {
      store.commit('hideNotification');
    };
    return { notification, hideNotification, text, timeout };
  },
};
</script>
