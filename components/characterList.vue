<template>
  <div>
    <div class="headline">character list</div>
    <v-row v-for="(char,i) in characters" :key="i">
      <v-col>{{i}}</v-col>

      <!-- <v-card tile width="300">
        <v-img contain height="200" :src="'https://image.tmdb.org/t/p/original'+char.profile_path"></v-img>
        <v-card-text class="text-center">
          <p>Character : {{char.character}}</p>
          <div class="title">{{char.name}}</div>
        </v-card-text>
      </v-card>-->
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: []
    };
  },
  props: {
    id: {
      type: Number
    }
  },
  async created() {
    let { cast } = await this.$store.dispatch("getCharacterList", this.id);
    cast = cast.filter(el => el.character);
    this.characters.push(...cast);
  }
};
</script>

<style>
</style>