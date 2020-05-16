<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      height="100%"
      overlay-color="black"
      src="https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
    >
      <v-list nav>
        <v-list-item class="text-center">
          <v-list-item-title class="white--text headline">The Movies</v-list-item-title>
          <v-spacer></v-spacer>
          <span>
            <v-icon x-large color="white" @click="drawer= !drawer">mdi-close</v-icon>
          </span>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item flat link v-for="(link,index) in links" :key="index" :to="link.to">
          <v-list-item-icon>
            <v-icon color="white" x-large>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">{{link.title}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :clipped-left="!drawer">
      <v-app-bar-nav-icon @click="drawer= !drawer" v-if="!drawer"></v-app-bar-nav-icon>
      <nuxt-link text to="/" v-if="!drawer" style="text-decoration:none">
        <v-toolbar-title class="red--text display-1">The Movies</v-toolbar-title>
      </nuxt-link>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-card>
      <v-footer class="font-weight-medium">
        <v-col class="text-center" cols="12">
          Made with
          <v-icon class="mr-2" color="red">mdi-heart</v-icon>
          by Sanil Desemaru
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Home", to: "/", icon: "mdi-home" },
        { title: "Trending", to: "/trending", icon: "mdi-trending-up" }
      ]
    };
  }
};
</script>

<style>
</style>