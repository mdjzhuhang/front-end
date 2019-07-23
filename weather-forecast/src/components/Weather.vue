<template>
  <div v-loading.fullscreen.lock="showLoading">
    <el-container>
      <el-main>
        <div>
          <span class="top-city">{{ cityName }}</span>
          <span class="top-temp" v-show="curMain.temp">{{ curMain.temp | toCelsius }}</span>
          °C
          <span @click="toggleMore" class="top-more">More</span>
        </div>
        <el-row :gutter="10">
          <el-col :span="6" class="daily-content" v-for="(item, index) in forecast">
            <ul @click="chooseItem(item)">
              <li>
                {{ item.dt | filterWeekday }}
                <br class="hidden-sm-and-up">
                <span class="hidden-xs-only">&nbsp;&nbsp;</span>
                {{ item.dt | filterDate }}
              </li>
              <img :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'">
              <li class="hidden-sm-and-up">
                <span>{{ item.temp.max | toCelsius }}°</span>
                <br>
                <span>{{ item.temp.min | toCelsius }}°</span>
              </li>
              <li class="hidden-xs-only">
                <span>{{ item.temp.min | toCelsius }}°</span>
                ~
                <span>{{ item.temp.max | toCelsius }}°</span>
              </li>
            </ul>
          </el-col>
        </el-row>
        <detailInfo :details="selectedObj"></detailInfo>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import detailInfo from './detailInfo.vue'
export default {
  name: 'Weather',
  data: () => {
    return {
      appid: '5f27e6de016a45e5d58cf3cf874bd3be',
      cityID: '',
      cityName: '',
      curWeather: {},
      curMain: {},
      curWind: {},
      forecast: [],
      lat: 0,
      lon: 0,
      showLoading: true,
      selectedObj: {},
      today: 0,
      todayDetal: {}
    }
  },
  components: {
    detailInfo
  },
  filters: {
    toCelsius: temp => {
      temp = temp || 273.16;
      return Math.round(temp - 273.16);
    },
    filterWeekday: time => {
      let date = new Date(time * 1000);
      let index = date.getDay();
      let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return weekDays[index]
    },
    filterDate: time => {
      let date = new Date(time * 1000);
      return date.getMonth() + 1 + '/' + date.getDate()
    },
    setUnit: str => {
      return 'm/s'
    }
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude.toFixed(4);
          this.lon = position.coords.longitude.toFixed(4);
          this.getCurrentWeather();
        }, this.showError);
      } else {
        console.log("该浏览器不支持定位功能！");
      }
    },

    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          x.innerHTML = "用户拒绝对获取地理位置的请求。";
          break;
        case error.POSITION_UNAVAILABLE:
          x.innerHTML = "位置信息是不可用的。";
          break;
        case error.TIMEOUT:
          x.innerHTML = "请求用户地理位置超时。";
          break;
        case error.UNKNOWN_ERROR:
          x.innerHTML = "未知错误。";
          break;
      }
    },

    getCurrentWeather() {
      let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lon + '&appid=' + this.appid;
      axios
        .get(url)
        .then(response => {
          let obj = response.data;
          this.cityID = obj.id;
          this.cityName = obj.name;
          this.curWeather = obj.weather[0];
          this.curMain = obj.main;
          this.curWind = obj.wind;
          this.today = obj.dt;
          this.getForecast();
        })
        .catch(error => console.log(error));
    },
    getForecast() {
      let url = 'https://api.openweathermap.org/data/2.5/forecast/daily?id=' + this.cityID + '&cnt=' + 5 + '&appid=' + this.appid;
      axios
        .get(url)
        .then(response => {
          this.todayDetal = response.data.list[0];
          this.forecast = response.data.list.splice(1);
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.showLoading = false;
        });
    },
    chooseItem(item) {
      this.selectedObj = item;
    },
    toggleMore() {
      this.selectedObj = this.todayDetal;
    }
  },
  mounted() {
    this.getLocation();
  }
}
</script>
<style>
@import "../assets/css/style.css";
</style>