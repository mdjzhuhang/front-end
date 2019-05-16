<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://www.kafan.cn/edu/80246226.html"
          target="_blank"
        >
          npm install 本地安装与全局安装的区别
        </a>
      </li>
      <li>
        <a
          href="http://web.jobbole.com/88459/"
          target="_blank"
        >
          Yarn vs npm
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsNPM',
    data () {
      return {
        msg: 'Blogs About NPM'
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px;
  }
  a {
    color: #42b983;
  }
</style>
