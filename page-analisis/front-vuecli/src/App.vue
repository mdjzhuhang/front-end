<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px 30px;
}
* {
  margin: 0;
  padding: 0
}
em,i {
  font-style: normal
}
li {
  list-style: none
}
img {
  border: 0;
  vertical-align: middle
}
button {
  cursor: pointer
}
a {
  color: #666;
  text-decoration: none
}
a:hover {
  color: #c81623
}
</style>
