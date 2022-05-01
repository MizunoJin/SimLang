<template>
  <v-btn
    color="accent"
    elevation="6"
    :loading="loading"
    :disabled="loading"
    @click="
      fetchAnswer();
      loader = 'loading';
    "
    >回答する
  </v-btn>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loader: null,
      loading: false,
    };
  },
  props: ["inputJapanese", "targetLang"],
  methods: {
    async fetchAnswer() {
      const l = this.loader;
      this[l] = !this[l];
      const res = await axios.get("http://localhost:3000/fetch_answer", {
        params: { text: this.inputJapanese, target_lang: this.targetLang },
      });
      this.$emit("updateAnswer", res.data.text);
    },
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
