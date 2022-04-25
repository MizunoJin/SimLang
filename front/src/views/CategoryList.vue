<template>
  <v-container>
    <v-list class="d-flex">
      <category-card
        v-for="question in questions"
        :key="question.id"
        :question="question"
      ></category-card>
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CategoryCard from "../components/categories/CategoryCard.vue";

export default {
  name: "CategoryList",
  components: {
    CategoryCard,
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
