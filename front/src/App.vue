<template>
  <div id="app">
    <HelloWorld />
    <QuestionList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import QuestionList from "./components/QuestionList.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    QuestionList,
  },
});
</script>
