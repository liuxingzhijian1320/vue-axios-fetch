1.

```
    vue init webpack vuedemo
    cd vuedemo && npm i
    npm run dev

```
- 注意： 页面是不会自动打开的，需要手动打开地址来运行项目

2. 修改配置项 config/index.js
- 自动打开浏览器

```
autoOpenBrowser : true // 设置自动打开浏览器
```
- 设置ip

```
npm install ip

```

```
// 添加以下代码
const ip = require('ip')
const IP = ip.address();
```

```
// host 修改
 host: IP,
```

- 重新启动项目

```
npm run dev
```

- 配置反向代理

```
  proxyTable: {
    '/api': {
        target: 'https://moment.douban.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    },
},
```

3. axios的封装 具体详见代码

4. sass的语法的配置

```
npm install --save-dev sass-loader
npm install --save-dev node-sass  (注：sass-loader依赖于node-sass)
```

5. rem的布局配置

6. mixins 和 filters的使用

7. mint-ui的引入方法

...

具体的查看代码（懒得粘贴复制代码）

