<template>
  <v-app id="todo" class="h-full w-full">
    <v-navigation-drawer v-model="drawerOpen" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar class="" app>
      <v-app-bar-nav-icon
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-semibold">Fings</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue-demi';
export default {
  name: 'App',

  setup() {
    const drawerOpen = ref(false);
    return { drawerOpen };
  },
};
</script>
