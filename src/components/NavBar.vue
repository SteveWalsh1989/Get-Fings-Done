<template>
  <nav>
    <!-- Nav Drawer -->
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
    <!-- Left hand side-->

    <v-app-bar color="primary" app prominent>
      <v-container>
        <v-row>
          <v-app-bar-nav-icon
            color="white"
            @click="drawerOpen = !drawerOpen"
          ></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-toolbar-title class="font-semibold white--text ml-4 mt-1"
            >Fings</v-toolbar-title
          >
        </v-row>
        <v-row>
          <div class="text-sm white--text ml-4">
            {{ currentTime }}
          </div>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
      <!-- Right hand side Search-->
      <v-text-field
        :value="searchTerm"
        class="expanding-search white--text mt-auto mr-14 w-1/5 bottom-4"
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
import { format } from 'date-fns';
export default {
  name: 'NavDrawer',
  setup() {
    const drawerOpen = ref(false);
    const searchClosed = ref(true);
    const searchTerm = computed(() => store.state.searchTerm);
    const currentTime = ref(null);

    function updateSearchTerm(newTerm) {
      store.commit('updateSearchTerm', newTerm);
    }

    function getDate() {
      currentTime.value = format(new Date(), 'MMMM d, H:mm:ss');
      setTimeout(getDate, 1000);
    }

    getDate();
    return {
      getDate,
      currentTime,
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
