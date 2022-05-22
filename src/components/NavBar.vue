<template>
  <nav>
    <v-navigation-drawer class="primary white--text" v-model="drawerOpen" app>
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
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon
        color="white"
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-semibold white--text">Fings</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        :value="searchTerm"
        class="expanding-search white--text mt-8 mr-14 w-1/5"
        :class="{ closed: searchClosed && !searchTerm }"
        @input="updateSearchTerm($event)"
        @focus="searchClosed = false"
        @blur="searchClosed = true"
        color="white"
        placeholder="search fings"
        prepend-inner-icon="mdi-magnify"
        flat
        dense
        clearable
      >
      </v-text-field>
    </v-app-bar>
  </nav>
</template>

<script>
import { computed, ref } from 'vue-demi';
import { navDrawerItems } from '@/views/constants';
import store from '@/store';

export default {
  name: 'NavDrawer',
  setup() {
    const drawerOpen = ref(false);
    const searchClosed = ref(true);
    const searchTerm = computed(() => store.state.searchTerm);

    function updateSearchTerm(newTerm) {
      store.commit('updateSearchTerm', newTerm);
    }

    return {
      drawerOpen,
      navDrawerItems,
      searchClosed,
      searchTerm,
      updateSearchTerm,
    };
  },
};
</script>

<style lang="scss" scoped>
.expanding-search {
  transition: max-width 0.4s;

  .v-input__slot {
    &:before,
    &:after {
      border-color: transparent !important;
    }
  }
  &.closed {
    width: 2rem;
    max-width: 2rem;
  }
}
</style>
