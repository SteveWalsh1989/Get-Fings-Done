<template>
  <nav>
    <v-navigation-drawer
      class="deep-purple lighten-3 white--text"
      v-model="drawerOpen"
      app
    >
      <v-list-item class="white--text">
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-white">
            Fings
          </v-list-item-title>
          <v-list-item-subtitle>Get fings done! </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          class="white--text"
          v-for="(item, index) in navDrawerItems"
          :key="index"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="deep-purple lighten-3" app>
      <v-app-bar-nav-icon
        color="white"
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-semibold white--text">Fings</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { ref } from 'vue-demi';
import { navDrawerItems } from '@/views/constants';
export default {
  name: 'NavDrawer',
  setup() {
    const drawerOpen = ref(false);

    return { drawerOpen, navDrawerItems };
  },
};
</script>
