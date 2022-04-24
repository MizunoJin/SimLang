<template>
  <v-container>
    <v-list class="d-flex">
      <question-card
        v-for="question in questions"
        :key="question.id"
        :question="question"
      ></question-card>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import QuestionCard from "../components/questions/QuestionCard.vue";

export default {
  name: "QuestionList",
  components: {
    QuestionCard,
  },
  computed: {
    ...mapGetters("questions", ["questions"]),
  },
  methods: {
    ...mapActions("questions", ["fetchQuestions"]),
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>
