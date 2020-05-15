<template>
  <v-container>
    <v-select :items="items" label="Select a genre" solo></v-select>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: this.$store.getters.genreList
    };
  }
};
</script>

<style>
</style>