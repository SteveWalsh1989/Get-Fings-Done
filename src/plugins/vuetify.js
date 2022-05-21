import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueCompositionApi from '@vue/composition-api';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueCompositionApi);
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#82B1FF',
        secondary: '#E0E0E0',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        gray: '#E0E0E0',
        white: '#FFFFFF',
      },
    },
  },
});
