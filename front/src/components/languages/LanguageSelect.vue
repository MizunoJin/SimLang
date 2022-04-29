<template>
  <v-select
    v-model="targetLang"
    :items="languages"
    item-text="label"
    item-value="property"
    label="言語を選択"
    @change="setLanguage"
  ></v-select>
</template>

<script>
import { LANGUAGES } from "@/const/languages.js";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      languages: LANGUAGES,
    };
  },
  computed: {
    ...mapGetters("language", ["targetLang"]),
  },
  methods: {
    ...mapActions("language", ["setLanguage"]),
  },
};
</script>
