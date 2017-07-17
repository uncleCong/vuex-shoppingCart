/*
    * vue测试项目全局配置文件
*/
import Vue from 'vue';
import axios from 'axios';
export const host = "http://www.easy-mock.com/mock/595d904f9adc231f35734bd2/example/";

/*
    * 统一接口管理
*/
let api = {
}

/*
    * 统一数据请求
    * {key, data,method, callback}
*/
export const getData = function (options) {
    const key = options.key;
    const data = options.data || {};
    const method = options.method || 'get';
    const callback = options.callback || function(){};
    axios[method](host + api[key], data)
        .then(function(res){
            callback&&callback(res.data)
        })
}