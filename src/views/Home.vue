<template>
  <v-container>tes{{ test }} </v-container>
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
