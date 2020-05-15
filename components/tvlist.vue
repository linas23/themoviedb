<template>
  <div>
    <v-container>
      <div class="display-1 my-5">Featured TV shows</div>
      <v-row>
        <v-col cols="12" md="4" v-for="(list,index) in lists" :key="index">
          <movieCard :data="list"></movieCard>
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
      lists: "tvList"
    })
  },
  created() {
    this.$store.dispatch("getList", "tv");
  }
};
</script>

<style>
</style>