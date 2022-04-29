<template>
  <v-container>
    <v-btn class="ma-10" color="accent" :to="{ name: 'categories' }">
      <v-icon dark left> mdi-arrow-left </v-icon>一覧に戻る
    </v-btn>
    <v-row class="text-center">
      <question-list :questions="category.questions"> </question-list>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <!-- TODO: あまりスマートではないため要リファクタリング -->
          {{ question ? question.title : category.questions[0].title }}
        </h1>
        <br />

        <v-col class="d-flex" cols="12" sm="6">
          <language-select> </language-select>
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
          <answer-button
            @updateAnswer="updateAnswer"
            :inputJapanese="inputJapanese"
            :targetLang="targetLang"
          >
          </answer-button>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    };
  },
  computed: {
    ...mapGetters("categories", ["category"]),
    ...mapGetters("questions", ["question"]),
    ...mapGetters("language", ["targetLang"]),
  },
  methods: {
    ...mapActions("categories", ["fetchCategory"]),
    updateAnswer(answer) {
      this.answer = answer;
    },
  },
  created() {
    this.fetchCategory(this.$route.params.id);
  },
};
</script>
