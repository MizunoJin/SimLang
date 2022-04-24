<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <div class="d-flex align-center text-h4 white--text">SimLang</div>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/about"
        ><div class="text-h6 white--text">SimLangとは?</div></router-link
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
