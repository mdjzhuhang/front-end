<template>
    <div>
        <p>ios 环境 hammer.js 测试</p>
        <div class="flexBox">
            <div class="item" style="position:relative">
                <div id="panDom">单指拖动</div>
            </div>
            <div class="item">
                <div id="swipeDom">双指滑动</div>
            </div>
        </div>
        <p v-html="'双指滑动翻转状态：' + pinchFlag"></p>
        <div id="aim">拖动目标区域</div>
    </div>
</template>

<script>

  import '../../libs/hammer.js'
  export default {
    data: function(){
      return {
        pinchFlag: 'open'
      }
    },
    methods: {
      testOnline(){

      }
    },
    mounted(){
      // alert(navigator.userAgent)
      // Pan：单指拖动事件
      var panDom = document.querySelector("#panDom")
      var pantime = new Hammer(panDom);
      pantime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
      var x = 0;
      var y = 0;
      pantime.on('panstart', function (event) {
        x = Number(panDom.style.left.replace('px', ''));
        y = Number(panDom.style.top.replace('px', ''));
      });
      pantime.on('pan', function (event) {
        panDom.style.left = x + event.deltaX + "px";
        panDom.style.top = y + event.deltaY + "px";
      });
      pantime.on('panend', function (event) {
        var topVal = panDom.style.top.replace('px', '')
        var leftVal = panDom.style.left.replace('px', '')
        if (topVal < 160 || topVal > 320 || leftVal < 0 || leftVal > 200) {
          panDom.style.top = "0px";
          panDom.style.left = "0px";
        }
      });
      // swipe
      var swipetime = new Hammer(document.querySelector("#swipeDom"));
      swipetime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
      swipetime.on("swipe", function (ev) {
        //控制台输出
        console.log(ev);
        if(this.pinchFlag == 'open'){
          this.pinchFlag = 'close'
        }
      });
    }
  }
</script>
<style scoped>
    p {
        min-height:30px;
    }
    div {
        font-size: 12px;

    }
    .flexBox {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .item {
        width:47%;
        height:100px;
    }
    #panDom {
        background:yellow;
        width:40px;
        height:40px;
        position:absolute;
    }
    #swipeDom {
        background:red;
        width:80px;
        height:80px;
    }
    #aim {
        background:grey;
        height:200px;
        width:100%;
    }
</style>
