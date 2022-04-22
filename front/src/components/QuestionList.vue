<template>
  <div>
    <h1>Questions</h1>
    <p>questions:</p>
    <p>{{ questions }}</p>
    <button type="submit">fetchquestions</button>
  </div>
</template>

<script>
export default {
  name: "QuestionList",
  data: () => ({
    questions: [],
  }),
};
</script>
