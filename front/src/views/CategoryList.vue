<template>
  <v-container>
    <v-list class="d-flex">
      <category-card
        v-for="category in categories"
        :key="category.id"
        :category="category"
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
    ...mapGetters("categories", ["categories"]),
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"]),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>
