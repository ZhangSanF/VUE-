
/*
所有接口请求函数模块
函数返回值:promise对象
*/
//涉及到跨域时到config/index.js内修改proxyTable
// proxyTable: {
//     '/api': { //匹配所有以'/api'开头的请求路径
//            target: 'http://chaobet.sport.test', //代理目标的基础路径
//           changeOrigin: true, //支持跨域
//           pathRewrite: { //重写路径:去掉路径中开头的'/api'
//                 '^/api': ''
//           }
//     }
// },
import ajax from "./ajax";
const BASE_URL = '/api'
//某某请求(param参数) rul:http://www.baidu.com/positon/:geohash 示例: http://www.baidu.com/positon/40.10038,116.36867
export const reqxxx = (geohash) => ajax(`${BASE_URL}/positon/${geohash}`)
//封装在?后面的叫query参数
export const reqxxx = (geohash) => ajax(BASE_URL+'/positon',{geohash})

//调用异步
// async mounted () {
//     const result = await reqxxx();
//     console.log(result)
// }