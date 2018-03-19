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
- 部分代码

```
import request from 'src/api/index';
import errorHandler from 'src/api/error-handler.js';
import { getUser } from 'src/assets/scripts/local-storage.js';
import Cookies from 'js-cookie'

/**
 * 代理 HTTP 请求;
 * @param  {Object}  obj      http 请求参数
 * @param  {Boolean} loading    是否显示 loading 弹窗
 * @param  {Boolean} alertInfoError 是否弹出捕获的服务器返回的逻辑错误
 * @param  {Boolean} alertServerError 是否弹出捕获的服务器错误
 * @return {Promise}            resolve(res); res 是 http 请求的结果
 */
export default (
    options, { loading = true, alertInfoError = true, alertServerError = true } = {}
) => {
    return new Promise(async(resolve, reject) => {
        try {
            loading && Indicator.open(); // loading
            // const { token } = Cookies.get();
            options = {
                    ...options,
                    headers: {
                        // Authorization: `Bearer${token ? ` ${token}` : ''}`, // iOS9 有空格的 bug,
                        'Halo-App': `merchant`,
                        ...options.headers
                    }
                }
                // alert(JSON.stringify(options))
                // options.headers = options.headers || {};
                // options.headers.Authorization = `Bearer${token ? ` ${token}` : ''}`; // iOS9 有空格的 bug
                // options.headers['Halo-App'] = 'merchant';
                // options.headers = options.headers || {};


            const response = await request(options);
            // alert(11, JSON.stringify(response))
            return resolve(response);
        } catch (response) {

            // alert(JSON.stringify(response.data))
            const { alert: _alert, message } = await errorHandler(response, {
                alertInfoError,
                alertServerError,
            });
            // eslint-disable-next-line
            return reject({ response, alert: _alert, message });
        } finally {

            loading && Indicator.close(); // close loading
        }
    });
};
```

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

