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

    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" color="primary" class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
