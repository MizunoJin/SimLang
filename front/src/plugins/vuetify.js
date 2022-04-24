import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.lighten1,
        secondary: colors.cyan.lighten4,
        accent: colors.orange,
        error: colors.red.lighten4,
      },
    },
  },
});
