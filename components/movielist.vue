<template>
  <div>
    <v-container>
      <div class="display-1 my-5">Featured Movies</div>
      <v-row>
        <v-col cols="12" md="4" v-for="(movie,index) in movies" :key="index">
          <movieCard :data="movie"></movieCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import movieCard from "~/components/movieCard";
export default {
  components: {
    movieCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      movies: "movieList"
    })
  },
  created() {
    this.$store.dispatch("getList", "movie");
  }
};
</script>

<style>
</style>