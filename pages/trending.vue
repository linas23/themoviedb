<template>
  <v-container>
    <div class="display-1 my-5">Trending movies</div>
    <v-row>
      <v-col cols="6" md="4" v-for="(movie,index) in movies" :key="index">
        <movieCard :data="movie"></movieCard>
      </v-col>
    </v-row>
    <div class="display-1 my-5">Trending TV shows</div>

    <v-row>
      <v-col cols="6" md="4" v-for="(tv,index) in tvs" :key="index">
        <movieCard :data="tv"></movieCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import movieCard from "~/components/movieCard";

export default {
  components: {
    movieCard
  },
  data() {
    return {};
  },
  async asyncData({ store }) {
    let movies = await store.dispatch("getTrending", "movie");
    let tvs = await store.dispatch("getTrending", "tv");

    return { movies, tvs };
  }
};
</script>

<style>
</style>