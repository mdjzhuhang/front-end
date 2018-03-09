<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://www.cnblogs.com/engeng/articles/5959335.html"
          target="_blank"
        >
          一次完整的 HTTP 请求过程
        </a>
      </li>
      <li>
        <a
          href="http://blog.csdn.net/lz233333/article/details/51210554"
          target="_blank"
        >
          Web服务器的工作原理及其相关协议
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsService',
    data () {
      return {
        msg: 'Blogs About Service'
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
