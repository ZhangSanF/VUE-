import Axios from './axios';


export function getRecommend(){
    let serverUrl = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    let data = {
        g_tk: 5381,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        format: 'jsonp',//jsonp
        notice: 0,
        jsonpCallback: '__jp0',
        uin: 0,
        platform: 'h5',
        needNewCode: 1
    }
    Axios(serverUrl,data)
}
// g_tk: 5381
// inCharset: utf-8
// outCharset: utf-8
// format: jsonp
// notice: 0
// param: jsonpCallback
// uin: 0
// platform: h5
// needNewCode: 1