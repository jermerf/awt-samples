<template>
  <div id="app">
    <Toolbar />
    <div v-if="$root.user.loggedIn">
      <VueFeatures>
        <div>Where is this?</div>
      </VueFeatures>
      <Content />
    </div>
    <div v-else>
      You are not logged in, no soup for you.
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import VueFeatures from './components/VueFeatures.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    VueFeatures,
    Content
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
