<template>
    <ul>
        <li v-for="item in demos" v-html="item.name" @click="goToDemo(item)">
        </li>
    </ul>
</template>

<script>
    export default {
      data: function(){
        return {
          demos: [{
            path: '/demo/weixinOnline',
            name: '微信nagigator.online'
          }, {
            path: '/demo/hammerDemo',
            name: 'ios 环境 hammer.js 测试'
          }]
        }
      },
      methods: {
        goToDemo(item){
          console.log(item)
          this.$router.push(item.path)
        }
      },
      mounted(){
        console.log('demo列表')
      }
    }
</script>
