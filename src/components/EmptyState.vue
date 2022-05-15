<template>
  <v-container
    class="flex flex-col items-center text-center grey--text p-12 opacity-50"
  >
    <v-img
      max-height="150"
      max-width="100"
      src="@/assets/empty-state-blue.png"
    ></v-img>
    <h1 class="pt-12 text-4xl font-bold">{{ heading }}</h1>
  </v-container>
</template>

<script>
export default {
  name: 'EmptyState',
  setup() {
    const heading = 'No Tasks';

    return {
      heading,
    };
  },
};
</script>
