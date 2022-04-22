<template>
  <div>
    <h1>Questions</h1>
    <p>questions:</p>
    <p>{{ questions }}</p>
    <button type="submit" @click="fetchQuestions()">fetchquestions</button>
  </div>
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
