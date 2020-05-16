<template>
  <div>
    <div>
      <v-container height="100vh">
        <v-row align="center">
          <v-col>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets3.lottiefiles.com/datafiles/397tkqLfSbPbfm9/data.json"
              style="width: 320px"
              speed="0.5"
            ></lottie-player>
          </v-col>
          <v-col>
            <div class="display-4 font-weight-bold">lets review the movies</div>
          </v-col>
        </v-row>
        <v-card>
          <v-tabs v-model="tab" grow icons-and-text centered>
            <v-tab v-for="(tab,index) in tabs" :key="index">
              {{tab.title}}
              <v-icon>{{tab.icon}}</v-icon>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="i in 2" :key="i">
              <v-card flat elevation="24">
                <div v-if="tab==0">
                  <!-- keep alive -->
                  <movieList></movieList>
                </div>
                <div v-else>
                  <tvList></tvList>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import movieList from "~/components/movielist";
import tvList from "~/components/tvlist";
export default {
  components: {
    movieList,
    tvList
  },
  head() {
    return {
      title: "Home"
    };
  },
  data() {
    return {
      tab: null,
      tabs: [
        { title: "MOVIES", icon: "mdi-movie" },
        { title: "TV", icon: "mdi-television-classic" }
      ],
      items: ["hello", "hi", "bye"]
    };
  }
};
</script>