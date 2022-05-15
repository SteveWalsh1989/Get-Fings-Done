<template>
  <v-container class="flex flex-col items-center text-center grey--text p-12">
    <v-img
      max-height="150"
      max-width="100"
      src="@/assets/empty-state-blue.png"
    ></v-img>
    <h1 class="pt-12 text-4xl font-bold">{{ heading }}</h1>
    <h2 class="pt-4 text-2xl font-semibold">{{ subHeading }}</h2>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  setup() {
    const heading = `You've nofing to do!`;
    const subHeading = `Start adding some fings to complete`;

    return {
      heading,
      subHeading,
    };
  },
};
</script>
