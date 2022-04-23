<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">{{ question.title }}</h1>
        <br />
        {{ question.body }}

        <v-col>
          <v-textarea
            name="input-japanese"
            label="日本語で返答する"
            hint="日本語で入力してください"
          ></v-textarea>
          <v-textarea
            name="input-foreign"
            label="外国語で返答する"
            hint="外国語で入力してください"
          ></v-textarea>
          <!-- <router-link to="/answer"> -->
          <v-btn color="accent" elevation="6" large @click="fetchTranslation"
            >回答する</v-btn
          >
          <!-- </router-link> -->
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "QuestionView",

  computed: {
    ...mapGetters("questions", ["question"]),
  },
  methods: {
    ...mapActions("questions", ["fetchQuestion"]),
    fetchTranslation() {
      axios
        .get("http://localhost:3000/translate", {
          params: { text: "こんにちは", target_lang: "EN" },
        })
        .then((response) => console.log(response.data));
    },
  },
  mounted() {
    this.fetchQuestion(this.$route.params.id);
  },
};
</script>
