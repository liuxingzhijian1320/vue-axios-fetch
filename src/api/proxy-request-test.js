import request from 'src/api/index';
import errorHandler from 'src/api/error-handler.js';
// import { getUser } from 'src/assets/scripts/local-storage.js';
import { Indicator, MessageBox } from 'mint-ui'
const notServer = process.env.VUE_ENV !== 'server';

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
            loading && notServer && Indicator.open(); // loading
            // const { token } = getUser();
            // options.headers = options.headers || {};
            // options.headers.Authorization = `Bearer${token ? ` ${token}` : ''}`; // iOS9 有空格的 bug
            const response = await request(options);
            return resolve(response);
        } catch (response) {
            const { alert, message } = await errorHandler(response, {
                alertInfoError,
                alertServerError,
            });
            // eslint-disable-next-line
            return reject({ response, alert, message });
        } finally {
            loading && notServer && Indicator.close(); // close loading
        }
    });
};