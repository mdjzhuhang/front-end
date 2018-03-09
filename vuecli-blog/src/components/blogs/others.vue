<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://www.jianshu.com/p/fa379a309c8a"
          target="_blank"
        >
          SCSS入门
        </a>
      </li>
      <li>
        <a
          href="https://www.cnblogs.com/theWayToAce/p/7942360.html"
          target="_blank"
        >
          iPhoneX页面安全区域与内容重叠问题
        </a>
      </li>
      <li>
        <a
          href="http://blog.csdn.net/k616358281/article/details/71602055"
          target="_blank"
        >
          express与koa对比
        </a>
      </li>
      <li>
        <a
          href="http://www.ruanyifeng.com/blog/2015/03/react.html"
          target="_blank"
        >
          React 入门实例教程
        </a>
      </li>
      <li>
        <a
          href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html"
          target="_blank"
        >
          Redux 入门教程
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsOthers',
    data () {
      return {
        msg: 'Blogs'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
