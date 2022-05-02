<template>
  <v-card elevation="3" width="256" rounded="lg">
    <v-navigation-drawer floating permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ category.category.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
        v-for="question in category.questions"
        :key="question.id"
        dense
        rounded
      >
        <v-list-item link @click="setQuestion(question)">
          <v-list-item-icon>
            {{ question.title }}
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["category"],
  methods: {
    ...mapActions("questions", ["setQuestion"]),
  },
};
</script>
