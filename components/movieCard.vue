<template>
  <v-card height="500" @click="getDetails">
    <v-img :src="imgUrl" contain height="250"></v-img>

    <v-card-title v-if="data.title">{{data.title}}</v-card-title>
    <v-card-title v-else>{{data.original_name}}</v-card-title>
    <v-card-text>
      <div>
        Vote :
        <v-progress-circular :value="data.vote_average * 10" color="red"></v-progress-circular>
      </div>
      Released date : {{ data.release_date}}
      <br />
      Overview : {{data.overview | snip }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    imgUrl() {
      return process.env.IMAGE_URI + this.data.poster_path;
    }
  },
  filters: {
    snip: function(value) {
      return value.slice(0, 150) + "...";
    }
  },
  methods: {
    getDetails() {
      this.$store.commit("setImage", this.imgUrl);
      if (this.data.name) {
        this.$router.push({
          path: `/details/TVshow/${this.data.id}`
        });
      } else {
        this.$router.push({
          path: `/details/movie/${this.data.id}`
        });
      }
    }
  }
};
</script>

<style>
</style>