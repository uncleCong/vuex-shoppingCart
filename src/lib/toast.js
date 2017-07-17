import Vue from 'vue';
import { animate } from '../lib/utils.js';

export default {
    install(Vue) {
        Vue.prototype.$toast = (tips,cb) => {
            let toastTpl = Vue.extend({
                template: '<div class="vue-toast">' + tips + '</div>'
            });
            let tpl = new toastTpl().$mount().$el;
            document.body.appendChild(tpl);
            animate(tpl, { opacity: '0' },3000,'ease-in',function(){
               document.body.removeChild(tpl);
               cb&&cb();
            });

        }
    }
}