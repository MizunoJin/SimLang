<template>
  <v-container>
    <h1 class="text-h2">お好きな問題を選んでください</h1>
    <v-list>
      <v-list-item v-for="question in questions" :key="question.id">
        <router-link :to="{ name: 'question', params: { id: question.id } }">
          {{ question.title }}
        </router-link>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "QuestionList",

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
