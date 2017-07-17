/*
    * vue测试项目全局配置文件
*/
import Vue from 'vue';
import axios from 'axios';
export const host = "http://www.easy-mock.com/mock/596c3027a1d30433d834bb1b/shoppingCart/";

/*
    * 统一接口管理
*/
let api = {
    product : 'product'
}

/*
    * 统一数据请求
    * {key, data,method, callback}
*/
export const getData = (options) => {
    const key = options.key;
    const data = options.data || {};
    const method = options.method || 'get';
    const callback = options.callback || function(){};
    axios[method](host + api[key], data)
        .then(function(res){
            callback&&callback(res.data)
        })
}
/*
    * 获取产品列表
    * {callback}
*/
export const getProduct = (callback) => {
    getData({
        key     : 'product',
        method  : 'post',
        callback:  (res) =>{
            callback && callback(res)
        }
    })
}