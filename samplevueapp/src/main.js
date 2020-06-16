import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),

  data: {
    appTitle: "My Vue App",
    darkTheme: true,
    user: {
      loggedIn: false,
      username: "not logged in"
    }
  },

  computed: {

  },

  vuetify,

  methods: {
    login() {
      // imagine we had some ajax
      if (true) { // Imagine server stuff happened
        this.user.loggedIn = true
        this.user.username = "res.username(jermerf)"
      }
    }
  }
}).$mount('#app')
