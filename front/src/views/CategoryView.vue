<template>
  <v-container>
    <v-btn class="ma-10" color="accent" :to="{ name: 'home' }">
      <v-icon dark left> mdi-arrow-left </v-icon>一覧に戻る
    </v-btn>
    <v-row class="text-center mb-10">
      <v-col cols="2">
        <question-list :category="category"> </question-list>
      </v-col>
      <v-col>
        <v-sheet
          min-height="70vh"
          elevation="3"
          rounded="lg"
          class="d-flex flex-wrap pa-8"
        >
          <v-col cols="12">
            <h1 class="display-2 font-weight-bold mb-3">
              {{ question.title }}
            </h1>
            <br />
            {{ question.body }}
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <v-col cols="6">
              <language-select> </language-select>
            </v-col>
          </v-col>

          <v-col cols="6">
            <v-textarea
              v-model="inputJapanese"
              name="input-japanese"
              label="日本語で返答する"
              hint="日本語で入力してください"
            ></v-textarea>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="inputForeign"
              name="input-foreign"
              label="あなたの回答"
              hint="外国語で入力してください"
            ></v-textarea>
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="answer"
              name="answer"
              label="回答例"
              background-color="blue lighten-5"
              disabled
            ></v-textarea>
          </v-col>
          <v-col cols="6">
            <v-list-item two-line>
              <v-list-item-content v-for="error in errorList" :key="error.id">
                <v-list-item-title>{{
                  error.description.en
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >{{ error.bad }} => {{ error.better }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content v-if="!errorList.length">
                <v-list-item-title>バッチリです！</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12">
            <v-btn color="accent" elevation="6" :to="{ name: 'answer' }"
              >回答する
            </v-btn>
            <answer-button
              :to="{ name: 'answer' }"
              @updateAnswer="updateAnswer"
              :inputJapanese="inputJapanese"
              :inputForeign="inputForeign"
              :language="language"
            >
            </answer-button>
          </v-col>
        </v-sheet>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>

<script>
import axios from "axios";
import QuestionList from "../components/questions/QuestionList.vue";
import LanguageSelect from "../components/languages/LanguageSelect.vue";
import AnswerButton from "../components/buttons/AnswerButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "QuestionView",
  components: {
    QuestionList,
    LanguageSelect,
    AnswerButton,
  },
  data() {
    return {
      answer: null,
      inputJapanese: null,
      inputForeign: null,
      category: null,
      errorList: [],
    };
  },
  computed: {
    ...mapGetters("language", ["language"]),
    ...mapGetters("questions", ["question"]),
  },
  methods: {
    ...mapActions("categories", ["fetchCategory"]),
    ...mapActions("questions", ["setQuestion"]),
    updateAnswer(response) {
      this.answer = response.translation.text;
      this.errorList = response.check.response.errors;
    },
  },
  created() {
    axios
      .get(`http://localhost:3000/categories/${this.$route.params.id}`)
      .then((response) => {
        this.category = response.data;
        if (
          this.category.questions &&
          this.question?.category_id != this.category.category.id
        ) {
          this.setQuestion(this.category.questions[0]);
        }
      });
  },
};
</script>
