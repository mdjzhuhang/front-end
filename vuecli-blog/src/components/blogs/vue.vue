<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>About Vue</h2>
    <ul>
      <li>
        <a
          href="http://caibaojian.com/vue-vs-react.html"
          target="_blank"
        >
          vue与react区别
        </a>
      </li>
      <li>
        <a
          href="https://www.jianshu.com/p/2769efeaa10a"
          target="_blank"
        >
          基于vue-cli快速构建
        </a>
      </li>
      <li>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226750&idx=1&sn=4e93e457effbc73f7bfdbd1f7a6d30fb&chksm=bd495bfa8a3ed2ec13f060739f35c037f4d1545bb209f0bed811fee3b0b17ea5fd7a40b331eb&scene=21#wechat_redirect"
          target="_blank"
        >
          详解 Vue 2.4.0 带来的 4 个重大变化
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsVue',
    data () {
      return {
        msg: 'Blogs'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
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
  img {
    height: 20px;
    margin-right: 6px;
    vertical-align: middle;
  }
</style>
