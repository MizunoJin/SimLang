<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">SimLangへようこそ</h1>

        <p class="subheading font-weight-regular">
          SimLangはAIで他言語を学習できるサービスです。
        </p>
      </v-col>
    </v-row>
    <category-list> </category-list>
  </v-container>
</template>

<script>
import CategoryList from "../components/categories/CategoryList.vue";

export default {
  name: "HomeView",
  components: { CategoryList },
};
</script>
