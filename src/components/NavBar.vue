<template>
  <div>
    <v-navigation-drawer v-model="drawerOpen" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Fings </v-list-item-title>
          <v-list-item-subtitle>Get fings done! </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in navDrawerItems"
          :key="index"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#d4bff9" app>
      <v-app-bar-nav-icon
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-semibold">Fings</v-toolbar-title>
    </v-app-bar>
  </div>
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
