<template>
  <v-card elevation="12" width="256">
    <v-navigation-drawer floating permanent>
      <v-list v-for="question in questions" :key="question.id" dense rounded>
        <v-list-item link @click="setQuestion(question)">
          <v-list-item-icon>
            <v-icon>{{ question.title }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["questions"],
  methods: {
    ...mapActions("questions", ["setQuestion"]),
  },
};
</script>
