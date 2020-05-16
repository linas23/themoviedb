<template>
  <div>
    <div class="display-1 my-5">Similar {{type}}s</div>
    <v-row>
      <v-col cols="12" md="4" v-for="(result,index) in results" :key="index">
        <movieCard :data="result"></movieCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import movieCard from "~/components/movieCard";
export default {
  components: {
    movieCard
  },
  data() {
    return {
      results: []
    };
  },
  props: {
    id: {
      type: Number
    },
    type: {
      type: String
    }
  },
  async created() {
    let { results } = await this.$store.dispatch("getSimilarItems", {
      id: this.id,
      type: this.type
    });
    this.results.push(...results);
  }
};
</script>

<style>
</style>