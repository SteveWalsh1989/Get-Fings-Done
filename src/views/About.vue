<template>
  <v-container class="mt-8 ml-6 text-sm dark-grey--text">
    <h1 class="font-semibold black--text">About this small project</h1>
    <p class="mt-4">
      The goal of this mini project is to test out the Vuetify framework by
      making a small todo task application
    </p>
    <v-list dense>
      <v-subheader class="font-semibold black--text">Features</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in features" :key="i" disabled>
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const features = [
      'Vuetify for components',
      'Vuex for state management',
      'Vue Router for routing',
      'dateFns for date formatting',
      'vue-demi for vue3 setup format',
      'vue-draggabole reordering',
      'localbase for browser storage',
    ];
    return { features };
  },
};
</script>

<style scoped></style>
