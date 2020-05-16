<template>
  <div>
    <v-container>
      <div class="display-1 my-5">Featured Movies</div>
      <v-row>
        <v-col cols="12" md="4" v-for="(movie,index) in movies" :key="index">
          <movieCard :data="movie"></movieCard>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn class="red white--text" x-large @click="getMore">See More</v-btn>
      </div>
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
    return {
      page: 2
    };
  },
  computed: {
    ...mapGetters({
      movies: "movieList"
    })
  },
  mounted() {
    this.$store.dispatch("getList", "movie");
  },
  methods: {
    getMore() {
      this.$store.dispatch("getMore", { type: "movie", page: this.page });
      this.page++;
    }
    /* changeMovieList(category) {
      this.$store.dispatch("getCategoryList", { category, type: "movie" });
    } */
  }
};
</script>

<style>
</style>