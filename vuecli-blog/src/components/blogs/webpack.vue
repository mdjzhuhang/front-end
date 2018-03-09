<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="http://www.jianshu.com/p/42e11515c10f"
          target="_blank"
        >
          Webpack 入门
        </a>
      </li>
      <li>
        <a
          href="https://www.jianshu.com/p/c28e5df8647d"
          target="_blank"
        >
          webpack 从安装到起飞
        </a>
      </li>
      <li>
        <a
          href="http://www.css88.com/archives/7703"
          target="_blank"
        >
          Webpack 和 Rollup
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsWebpack',
    data () {
      return {
        msg: 'Blogs About Webpack'
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
