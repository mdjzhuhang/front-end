<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzI0NTAyNjE0NQ==&mid=2675577544&idx=1&sn=ad8fc1c4627bfaa4b8347bc1055b1ff3&chksm=f3da6ec6c4ade7d05584873e892c3f5bea6bbf72c761b0268a986202c279cd6fc64f2759ffd8&mpshare=1&scene=1&srcid=0823y7wpfSfZnpC8syWvXlaD&key=56dad6f73ddfc2e4f9c2cecaac6a23322e9d8699d3fb31afab698c577e06c0d111e86b8ee2ba9044781c9728f8d820fc70b6f2b016afc17ef4826a9509e1274172dd1c7be20eeebc3c0566548887c8e7&ascene=0&uin=MTA0NDgwMzE2&devicetype=iMac+MacBookPro13%2C2+OSX+OSX+10.12.4+build(16E195)&version=12020710&nettype=WIFI&fontScale=100&pass_ticket=COP7kcIlpbR6yN9L1U3%2FEWDWlGrmzrjPFkTmzUN%2BN2U%3D"
          target="_blank"
        >
          JavaScript 工作机制
        </a>
      </li>
      <li>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226816&idx=1&sn=5c2de943a3ff61de10466bfe21f973c2&chksm=bd495b448a3ed2529d674d66eab367d3b2c9c1516f70206ea36aaa5439703288168a6305d48f&mpshare=1&scene=1&srcid=0816wa5pk6fyHUqzFXOyqTg5&key=02a45e2d696653c04c909713716c69fe258026d3a6455ac6a6cdfc93e4c2a86e499c421894f699f460c47e5cfd18b5af12ced7e29011fd5324ff3819241dcf5e5c8dceb6c420fb79eac1311d1cbb51df&ascene=0&uin=MTA0NDgwMzE2&devicetype=iMac+MacBookPro13%2C2+OSX+OSX+10.12.4+build(16E195)&version=12020710&nettype=WIFI&fontScale=100&pass_ticket=COP7kcIlpbR6yN9L1U3%2FEWDWlGrmzrjPFkTmzUN%2BN2U%3D"
          target="_blank"
        >
          常见排序算法
        </a>
      </li>
      <li>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651226903&idx=1&sn=c1c260d3e54dcea339ce4d028c413030&chksm=bd495a938a3ed3853adf7608f1ed15d9af6080001ecdf21ba26e56c13a767b029ff74ee817a2&mpshare=1&scene=1&srcid=0905Okgx1olOeMOS9kngJDKK&key=f412391d4344710920ea0f7368edf19b1edfb8c1598b75dad35f029c6859b49c4097a59982f49503d8ac467506d7509e13d8212e82b6e5a6aaac5f2561a6087888ff6c460e08137013a69ee4682393e0&ascene=0&uin=MTA0NDgwMzE2&devicetype=iMac+MacBookPro13%2C2+OSX+OSX+10.12.4+build(16E195)&version=12020710&nettype=WIFI&fontScale=100&pass_ticket=vEaugKBjWpH9lFI4njdT1dMAumVRPq2SvUoQtme5mgI%3D"
          target="_blank"
        >
          this、作用域、闭包、对象
        </a>
      </li>
      <li>
        <a
          href="http://web.jobbole.com/82238/"
          target="_blank"
        >
          AMD、CMD、UMD
        </a>
      </li>
      <li>
        <a
          href="http://www.ruanyifeng.com/blog/2017/04/memory-leak.html"
          target="_blank"
        >
          JavaScript 内存泄漏教程
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BlogsJS',
    data () {
      return {
        msg: 'Blogs About JS'
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
