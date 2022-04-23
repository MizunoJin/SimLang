<template>
  <v-container>
    <h1 class="text-h1">QuestionList</h1>
    <v-list>
      <v-list-item v-for="question in questions" :key="question.id">
        {{ question.title }}
      </v-list-item>
    </v-list>
    <v-btn type="submit" @click="fetchQuestions()">fetchQuestions</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "QuestionList",

  data: () => ({
    questions: [],
  }),
  methods: {
    fetchQuestions() {
      axios
        .get("http://localhost:3000/questions")
        .then((response) => {
          this.questions = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
