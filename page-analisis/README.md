## page-analisis
A express-vue demo

#### front-end：
- 使用 vuecli 创建项目

- 用 webpack-dev-server 代理
```
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    },
```
- 注册 axios 和 echart 插件
```
import echarts from 'echarts'
import axios from 'axios'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
```

#### back-end
使用 express，链接 mysql 数据库


