<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>ログイン</v-toolbar-title>
              </v-toolbar>
              <v-form @submit.prevent="onLogin">
                <v-card-text>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="Email"
                    type="text"
                    v-model="loginEmail"
                    placeholder="Email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="loginPassword"
                    placeholder="Password"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit" value="Login"
                    >Login</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import "@/store/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginView",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      overlay: false,
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    async onLogin() {
      this.overlay = !this.overlay;
      let data = {
        user: {
          email: this.loginEmail,
          password: this.loginPassword,
        },
      };
      try {
        await this.loginUser(data);
        this.$router.replace({ name: "home" });
      } catch (err) {
        console.log(err);
      }
      this.overlay = false;
    },
    resetData() {
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.loginEmail = "";
      this.loginPassword = "";
    },
  },
};
</script>
