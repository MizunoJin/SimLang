<template>
  <v-app>
    <v-main>
      <QuestionList />
    </v-main>
  </v-app>
</template>

<script>
import QuestionList from './components/QuestionList'

export default {
  name: 'App',
  components: {
    QuestionList
  }
};
</script>
