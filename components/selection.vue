<template>
  <v-container>
    <v-select :items="items" label="Select a genre" solo @change="handleChange" v-model="selection"></v-select>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selection: null,
      items: this.$store.getters.genreList
    };
  },
  methods: {
    handleChange() {
      this.$emit("selectionChanged", this.selection);
    }
  }
};
</script>

<style>
</style>