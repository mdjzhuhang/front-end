<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="http://es6.ruanyifeng.com/"
          target="_blank"
        >
          ECMAScript6入门
        </a>
      </li>
      <li>
        <a
          href="http://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html"
          target="_blank"
        >
          Reduce 和 Transduce 的含义
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsES6',
    data () {
      return {
        msg: 'Blogs About ECMAScript6'
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
