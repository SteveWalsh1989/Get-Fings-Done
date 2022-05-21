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
import { ref } from 'vue-demi';
import NavBar from '@/components/NavBar';
import Notification from './components/Notification.vue';
export default {
  name: 'App',
  components: { NavBar, Notification },
  setup() {
    const drawerOpen = ref(false);

    return { drawerOpen };
  },
};
</script>
