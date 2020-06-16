<template>
  <ul :class="isDark">
    <li>{{$root.appTitle}}</li>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>{{$root.user.username}}</li>
    <li><button @click="$root.login">Login</button></li>
    <li><button @click="$root.darkTheme = !$root.darkTheme">Toggle Theme</button></li>
  </ul>
</template>

<script>
export default {
  computed: {
    isDark() {
      return {
        "dark-theme": this.$root.darkTheme
      }
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  list-style-type: none;
}
li {
  display: inline-block;
  padding: 10px 20px;
}
li:hover {
  background-color: #ccc;
}

ul.dark-theme {
  background-color: #333;
}
ul.dark-theme li {
  color: #eee;
}
ul.dark-theme li:hover {
  background-color: #555;
}
</style>
