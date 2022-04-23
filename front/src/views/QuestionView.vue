<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to SimLang</h1>

        <p class="subheading font-weight-regular">QuestionView</p>
        <v-btn color="primary" elevation="2">
          <router-link to="/questions"
            ><div class="text-h6 white--text">始める</div></router-link
          >
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
