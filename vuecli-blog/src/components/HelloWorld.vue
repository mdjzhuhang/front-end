<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="http://es6.ruanyifeng.com"
          target="_blank"
        >
          es6
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com.cn"
          target="_blank"
        >
          NPM Docs
        </a>
      </li>
      <li>
        <a
          href="http://nodejs.cn/api/"
          target="_blank"
        >
          Node API
        </a>
      </li>
      <li>
        <a
          href="https://doc.react-china.org/docs/hello-world.html"
          target="_blank"
        >
          React Docs
        </a>
      </li>
      <br><br>
      <li><img src="../assets/vue.png"/></li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://router.vuejs.org/zh-cn/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org/zh-cn/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <br><br>
      <li><img src="../assets/webpack.png"/></li>
      <li>
        <a
          href="https://doc.webpack-china.org/concepts/"
          target="_blank"
        >
          Docs
        </a>
      </li>
      <li>
        <a
          href="http://webpack.wuhaolin.cn"
          target="_blank"
        >
          《深入浅出webpack》
        </a>
      </li>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>

    <h2>Recommending Blogs</h2>
    <ul>
      <li>
        <router-link to="/blogs/js">JavaScript</router-link>
      </li>
      <li>
        <router-link to="/blogs/es6">ECMAScript6</router-link>
      </li>
      <li>
        <router-link to="/blogs/vue">Vue</router-link>
      </li>
      <li>
        <router-link to="/blogs/webpack">Webpack</router-link>
      </li>
      <li>
        <router-link to="/blogs/npm">NPM</router-link>
      </li>
      <li>
        <router-link to="/blogs/service">service</router-link>
      </li>
      <li>
        <router-link to="/blogs/others">Others</router-link>
      </li>
    </ul>
    <h2>Github Demos</h2>
    <ul>
      <li>
        <a
          href="https://github.com/ruanyf/webpack-demos#demo01-entry-file-source"
          target="_blank"
        >
          webpack-demos
        </a>
      </li>
      <li>
        <a
          href="https://didi.github.io/cube-ui/#/zh-CN/docs/introduction"
          target="_blank"
        >
          cube-ui
        </a>
      </li>
      <li>
        <a
          href="http://element-cn.eleme.io/#/zh-CN/component/installation"
          target="_blank"
        >
          element-ui
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '目录'
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
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  img {
    height: 20px;
    vertical-align: middle;
  }
</style>
