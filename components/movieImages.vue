<template>
  <div>
    <div v-if="!images">
      <content-placeholders :rounded="true">
        <content-placeholders-img />
      </content-placeholders>
    </div>
    <div v-else>
      <div class="display-1 my-5">Movie images</div>
      <v-carousel show-arrows-on-hover hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in images"
          :key="i"
          :src="'https://image.tmdb.org/t/p/original'+item.file_path"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      length: 3,
      window: 0
    };
  },
  props: {
    id: {
      type: Number
    }
  },
  async created() {
    let { backdrops: images } = await this.$store.dispatch(
      "getMovieImages",
      this.id
    );
    this.images.push(...images);
  }
};
</script>

<style>
#overflow {
  overflow-x: scroll;
}
</style>