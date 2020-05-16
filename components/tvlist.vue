<template>
  <div>
    <v-container>
      <div class="display-1 my-5">Featured TV shows</div>
      <v-row>
        <v-col cols="12" md="4" v-for="(list,index) in lists" :key="index">
          <movieCard :data="list"></movieCard>
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
      lists: "tvList"
    })
  },
  mounted() {
    this.$store.dispatch("getList", "tv");
  },
  methods: {
    getMore() {
      this.$store.dispatch("getMore", { type: "tv", page: this.page });
      this.page++;
    }
    /* changeTvList(category) {
      this.$store.dispatch("getCategoryList", { category, type: "tv" });
    } */
  }
};
</script>

<style>
</style>