<template>
  <div>
    <h2>H5页面性能分析</h2>
    <br>
    <div id="pic" style="width: 650px;height: 500px;margin-bottom: 30px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'analisis',
    data () {
      return {
        xAxis: [],
        series: []
      }
    },
    methods:{
      getDatas() {
        this.$http.get('/api/getDatas').then(res => {
          if (res.status === 200) {
            this.getSeries(res.data.datas)
          }
        })
      },
      getSeries (arr) {
        let series = []
        for (let i = 0; i < arr.length; i++) {
          let obj = arr[i]
          let counts = []
          for (let key in obj) {
            // x轴坐标
            if (i === 0 && key !== 'link') {
              this.xAxis.push(key)
            }
            // 该链接各个日期加载时长
            if (key !== 'link') {
              counts.push(obj[key] || 0);
            }

          }
          series[i] = {
            name: obj.link,
            type: 'line',
            data: counts,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        }
        console.log(series[3])
        console.log(this.xAxis)
        this.series = series
        this.drawPie('pic', 'infographic')
      },
      drawPie(id, theme){
        let charts = this.$echarts.init(document.getElementById(id), theme)
        charts.setOption({
          title: {
            text: '模拟test',
            subtext: 'express + vue + axios + echart'
          },
          tooltip: {
            trigger: 'axis'
          },
          grid:{
            y: '15%',
            y2: '35%',
          },
          legend: { // 图例
            y: 'bottom'
          },
          toolbox: { // 提示框组件
            show: true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: this.xAxis
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                formatter: '{value} s'
              }
            }
          ],
          series: this.series
        })
      }
    },
    //调用
    mounted(){
      this.getDatas()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
