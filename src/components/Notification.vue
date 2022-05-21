<template>
  <v-snackbar
    :color="notification.color"
    class="notificaiton"
    v-model="notification.show"
    :timeout="timeout"
    rounded="pill"
  >
    {{ notification.text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="hideNotification">
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
    const timeout = 4000;

    const hideNotification = () => {
      store.commit('hideNotification');
    };
    return { notification, hideNotification, timeout };
  },
};
</script>

<style scoped>
.notificaiton {
  border-color: red;
}
</style>
