<template>
  <v-app id="todo" class="h-full w-full">
    <NavBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue-demi';
import NavBar from '@/components/NavBar';
export default {
  name: 'App',
  components: { NavBar },
  setup() {
    const drawerOpen = ref(false);

    return { drawerOpen };
  },
};
</script>
