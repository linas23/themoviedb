<template>
  <div>
    <div class="display-1 my-5">Character list</div>
    <v-btn
      @click="showList = !showList"
      class="red white--text"
    >{{showList ? 'hide':'show'}} characters</v-btn>

    <v-row v-if="showList">
      <v-col cols="6" md="4" v-for="(char,index) in characters" :key="index">
        <v-card>
          <div v-if="char.profile_path">
            <v-img
              contain
              height="200"
              :src="'https://image.tmdb.org/t/p/original'+char.profile_path"
            ></v-img>
          </div>
          <div v-else>
            <div class="display-1 text-center" style="height:200;">No Image</div>
          </div>
          <v-card-text class="text-center">
            <p>Character : {{char.character}}</p>
            <div class="title">{{char.name}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      showList: false
    };
  },
  props: {
    id: {
      type: Number
    },
    type: {
      type: String
    }
  },
  async created() {
    let { cast } = await this.$store.dispatch("getCharacterList", {
      id: this.id,
      type: this.type
    });
    cast = cast.filter(el => el.character);
    this.characters.push(...cast);
  }
};
</script>

<style>
</style>