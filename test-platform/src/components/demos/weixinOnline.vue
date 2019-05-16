<template>
    <div>
        <p>微信环境 navigator.onLine 测试：</p>
        <div class="button" @click="testOnline">测试联网状态</div>
        <p v-html="testResult"></p>
    </div>
</template>

<script>
  export default {
    data: function(){
      return {
        testResult: ''
      }
    },
    methods: {
      testOnline(){
        if(navigator.onLine){
            this.testResult = '已连接网络'
        }else{
            this.testResult = '未连接网络'
        }
      }
    },
    mounted(){

    }
  }
</script>

