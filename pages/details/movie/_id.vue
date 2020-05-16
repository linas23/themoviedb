<template>
  <v-container>
    <div v-if="movie">
      <v-card min-height="488">
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img v-if="imageUrl" :src="imageUrl" height="400" contain></v-img>
            <div v-else>
              <div class="display-3 text-center red white--text">No Image</div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title>{{movie.title}}</v-card-title>
            <v-card-text>
              <p>{{movie.tagline}}</p>
              <br />
              <p>{{movie.overview}}</p>
              <v-row justify="space-around">
                <v-col>
                  Budget
                  <br />
                  {{movie.budget | format}}
                </v-col>
                <v-col>
                  Popularity
                  <br />
                  {{movie.vote_average}} / 10
                </v-col>
                <v-col>
                  Revenue
                  <br />
                  {{movie.revenue | format}}
                </v-col>
              </v-row>
              <div class="title">Production Companies</div>
              <v-row>
                <v-col v-for="(p,index) in movie.production_companies" :key="index">
                  <v-img :src="'https://image.tmdb.org/t/p/original'+p.logo_path" width="100"></v-img>
                  <p class="mt-2">{{p.name}}</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <movieImages type="movie" :id="movie.id"></movieImages>
      <characterList type="movie" :id="movie.id"></characterList>
      <similarMovies type="movie" :id="movie.id"></similarMovies>
    </div>
    <div v-else>
      <v-progress-linear indeterminate></v-progress-linear>
    </div>
  </v-container>
</template>

<script>
import movieImages from "~/components/movieImages";
import characterList from "~/components/characterList";
import similarMovies from "~/components/similarItems";
import N from "numeral";
export default {
  components: {
    movieImages,
    characterList,
    similarMovies
  },
  async asyncData({ store, route }) {
    let movie = await store.dispatch("getMovieDetails", route.params.id);
    return { movie };
  },
  computed: {
    imageUrl: function() {
      return this.$store.getters.mainImage;
    }
  },
  filters: {
    format: function(value) {
      return "$ " + N(value).format();
    }
  }
};
</script>

<style>
</style>