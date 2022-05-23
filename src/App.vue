<template>
  <v-app id="todo" class="h-full w-full">
    <NavBar />
    <v-main>
      <router-view></router-view>
      <Notification />
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted } from 'vue-demi';
import NavBar from '@/components/NavBar';
import Notification from './components/Notification.vue';
import store from './store';
export default {
  name: 'App',
  components: { NavBar, Notification },
  setup() {
    const drawerOpen = ref(false);

    onMounted(() => {
      store.dispatch('loadTasks');
    });

    return { drawerOpen };
  },
};
</script>

<style>
/* remove underline from search icon */
.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
</style>
