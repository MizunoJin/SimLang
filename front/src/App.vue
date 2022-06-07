<template>
  <v-app>
    <!-- <session-manager></session-manager> -->
    <v-app-bar app color="primary" flat>
      <v-container class="py-0 fill-height">
        <router-link to="/">
          <v-img
            class="mr-10"
            src="/Icon/icon.iconset/icon_256x256.png"
            height="36"
            width="36"
          >
          </v-img>
        </router-link>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <div v-if="isLoggedIn">{{ getUserEmail }}</div>
        <v-spacer></v-spacer>

        <v-btn v-if="isLoggedIn" color="accent" @click="onLogout"
          >LOGOUT<v-icon>mdi-logout</v-icon></v-btn
        >
        <v-btn v-else color="accent" :to="{ name: 'login' }"
          >LOGIN<v-icon>mdi-login</v-icon></v-btn
        >
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view />
    </v-main>

    <v-footer v-bind="localAttrs" :padless="true">
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
          {{ new Date().getFullYear() }} — <strong>SimLang</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
  computed: {
    ...mapGetters(["isLoggedIn", "getUserEmail"]),
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
  methods: {
    ...mapActions(["logoutUser"]),
    onLogout() {
      this.logoutUser();
      this.$router.push({ name: "login" });
    },
  },
};
</script>
