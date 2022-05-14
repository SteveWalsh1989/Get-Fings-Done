<template>
  <v-container class="flex">
    <div class="bg-black text-white text-semibold">tes{{ test }}</div>
    <div class="bg-black text-white text-bold">tes2{{ test }}</div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    const test = 'testing yo';

    return { test };
  },
};
</script>

<style scoped></style>
