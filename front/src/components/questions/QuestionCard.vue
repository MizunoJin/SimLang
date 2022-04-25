<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>{{ question.title }}</v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="accent"
        :to="{ name: 'question', params: { id: question.id } }"
      >
        挑戦する
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: null,
    };
  },
  props: ["question"],
};
</script>
