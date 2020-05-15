<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img height="500" contain :src="'https://image.tmdb.org/t/p/original'+ tv.poster_path"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p class="display-1">{{tv.name}}</p>
        <p>First air data : {{tv.first_air_date}}</p>
        <p>Number of seasons : {{tv.number_of_seasons}}</p>
        <p>Number of episodes : {{tv.number_of_episodes}}</p>
        <div class="title">Overview</div>
        <p>{{tv.overview}}</p>
        <p>Status : {{tv.status}}</p>
      </v-col>
    </v-row>
    <div class="headline mt-5">Created by :</div>
    <v-row>
      <v-col v-for="c in tv.created_by" :key="c.id">
        <v-img
          class="align-end white--text black"
          width="200"
          :src="'https://image.tmdb.org/t/p/original'+c.profile_path"
        >
          <v-card-title>{{c.name}}</v-card-title>
        </v-img>
      </v-col>
    </v-row>

    <div class="display-1 my-5">Season details</div>
    <v-row>
      <v-col cols="12" v-for="(season,index) in tv.seasons" :key="index">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="12" md="4">
              <v-img
                contain
                height="250"
                :src="'https://image.tmdb.org/t/p/original'+season.poster_path"
              ></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <div class="headline font-weight-bold">{{season.name}}</div>
              <p>Episode count : {{season.episode_count}}</p>
              <p class="text-justify">{{season.overview}}</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    let tv = await store.dispatch("getTvDetail", route.params.id);
    return { tv };
  }
};
</script>

<style>
</style>