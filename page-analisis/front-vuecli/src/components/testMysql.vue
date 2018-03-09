<template>
  <div>
    <div class="hello" @click="getDatas">获取mysql数据库中的数据</div>
    <ul>
      <li v-for="item in linkDatas" v-html="item.link" :title="item.link" :style="style">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'analisis',
  data () {
    return {
      linkDatas: {},
      style: {
        'word-break': 'break-all',
        color: '#2c3e50',
        'margin-bottom': '16px'
      }
    }
  },
  methods: {
    getDatas() {
      this.$http.get('/api/getDatas').then(res => {
        if (res.status === 200) {
          this.linkDatas = res.data.datas
          console.log(res.data.datas)
        }
      })
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
  .hello {
    text-align: center;
    color: #2c3e50;
    padding: 30px;
  }
</style>
