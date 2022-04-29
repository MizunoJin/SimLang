<template>
  <v-container class="py-15">
    <v-row class="text-center">
      <question-list :questions="category.questions"> </question-list>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <!-- TODO: あまりスマートではないため要リファクタリング -->
          {{ question ? question.title : category.questions[0].title }}
        </h1>
        <br />

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model="targetLang"
            :items="languages"
            item-text="label"
            item-value="property"
            label="言語を選択"
            @change="setLanguage"
          ></v-select>
        </v-col>
        <v-col>
          <v-textarea
            v-model="inputJapanese"
            name="input-japanese"
            label="日本語で返答する"
            hint="日本語で入力してください"
          ></v-textarea>
          <v-textarea
            v-model="inputForeign"
            name="input-foreign"
            label="あなたの回答"
            hint="外国語で入力してください"
          ></v-textarea>
          <v-textarea
            v-show="answer"
            v-model="answer"
            name="answer"
            label="回答"
            background-color="blue lighten-5"
            disabled
          ></v-textarea>
          <v-btn
            color="accent"
            elevation="6"
            large
            :loading="loading"
            :disabled="loading"
            @click="
              fetchTranslation();
              loader = 'loading';
            "
            >回答する</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestionList from "../components/questions/QuestionList.vue";
import { LANGUAGES } from "../const/languages";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "QuestionView",
  components: {
    QuestionList,
  },
  data() {
    return {
      languages: LANGUAGES,
      answer: null,
      inputJapanese: null,
      inputForeign: null,
      loader: null,
      loading: false,
    };
  },
  computed: {
    ...mapGetters("categories", ["category"]),
    ...mapGetters("questions", ["question"]),
    ...mapGetters("language", ["targetLang"]),
  },
  methods: {
    ...mapActions("categories", ["fetchCategory"]),
    ...mapActions("language", ["setLanguage"]),
    async fetchTranslation() {
      const l = this.loader;
      this[l] = !this[l];
      const res = await axios.get("http://localhost:3000/translate", {
        params: { text: this.inputJapanese, target_lang: this.targetLang },
      });
      this.answer = res.data.text;
      this[l] = false;
      this.loader = null;
    },
  },
  created() {
    this.fetchCategory(this.$route.params.id);
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>
