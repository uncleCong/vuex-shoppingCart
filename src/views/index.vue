<template>
    <div>
       <div class="productList" data-wrap="layout" v-for="(item,index) in product">
            <div data-item="col-3" class="productImg">
                <img :src="item.imgUrl">
            </div>
	        <div data-item="col-6" class="productContent">
                <p class="title">{{item.title}}</p>
                <p class="price">¥{{item.newPrice}}</p>
            </div>
             <div data-item="col-3" class="productContent">
                 <button class="me-u-btn" data-color="red" @click="add(index)">购买</button>
             </div>
       </div>
       <div class="cart" data-wrap="layout">
            <div data-item="col-4" class="size" @click="show">
                已选择<span>{{userList.length}}</span>种产品
            </div>
            <div data-item="col-5"></div>
            <div data-item="col-3">
                <button class="me-u-btn" data-color="red" @click="buy">去结算</button>
            </div>
       </div>
       <div class="userList" v-bind:class="{show:showList}">
            <p v-for="(item,index) in userList">
                <span><b>¥{{item.item.newPrice}}*{{item.length}}</b>{{item.item.title.substring(0,15)}}...</span>
                <span class="del me-ion-minus-round" @click="removeCount(index)"></span>
                <span class="del me-ion-plus-round" @click="addCount(index)"></span>
                <span class="del me-ion-close-round" @click="remove(index)"></span>
            </p>
       </div>
    </div>
</template>

<style scoped>
.productList{
    width:100%;
    height:80px;
    padding:3px 0;
    border-bottom:1px solid #ccc;
}
.productImg,.productContent{
    height:100%;
}
.productImg img{
    width:80%;
    height:100%;
}
.productContent button {
    margin-top:20px;
}
.productContent .title{
    font-size:12px;
    text-align: left;
    line-height: 18px;
}
.productContent .price{
    font-size:16px;
    text-align: left;
    color:#ff4c4c;
    margin-top:5px;
}
.cart{
    width:100%;
    height:60px;
    background:#fff;
    position: fixed;
    bottom:0;
    border-top:1px solid #dddcdd;
}
.cart div{
    height:100%;
}
.cart button{
    margin-top:10px;
}
.cart .size{
    line-height: 60px;
    color:#5f5f5f;
}
.cart .size span{
    color:#ff4c4c;
    font-size:30px;
}
.userList{
    position: fixed;
    width:100%;
    min-height:40px;
    top:0;
    z-index:255;
    background:#fff;
    border-bottom:1px solid #dddcdd;
    text-align:left;
    padding-left: 10px;
    padding-top: 10px;
    transform:translateY(-100%);
    transition: all ease .5s;
    font-size:12px;
    color:#999
}
.userList.show{
    transform:translateY(0);
}
.userList p{
    margin-bottom:10px;
}
.me-ion-minus-round,.me-ion-plus-round,.me-ion-close-round{    
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #ff4c4c;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    float:right;
    margin-right:10px
}
b{
    display: inline-block;
    min-width:50px;
    padding:2px 5px;
    text-align: center;
    line-height: 12px;
    color:#fff;
    background:#ff4c4c;
    margin-right:10px;
    border-radius:3px;
}
</style>

<script>
    import { getProduct } from '../lib/config.js'
    export default {
        data(){
            return {
                product : [],
                showList:false
            }
        },
        methods:{
            add(index){
                var _this = this;
                for(var i=0;i<this.userList.length;i++){
                    if(this.product[index] == this.userList[i].item){
                        this.$store.dispatch("addLength",i)
                         this.$toast("已添加到购物车！")
                        return;
                    }
                }
                this.$store.dispatch('add',{
                    item    : _this.product[index],
                    length  : 1
                });
                this.$toast("已添加到购物车！")
            },
            addCount(index){
                this.$store.dispatch("addLength",index);
            },
            show(){
                if(this.userList.length == 0){
                    this.$toast("未选择商品！")
                }else{
                    this.showList = !this.showList;
                }
            },
            remove(index){
               this.$store.dispatch("delete",index);
               if(this.userList.length == 0){
                   this.showList = false;
               }
            },
            removeCount(index){
                if(this.userList[index].length == 1){
                    this.remove();
                }else{
                    this.$store.dispatch("deleteLength",index);
                }
                
            },
            buy(){
                if(this.userList.length == 0){
                    this.$toast("未选择商品！");
                }else{
                    this.$root.go("cart");
                }
            }
        },
        computed:{
            userList(){
                return this.$store.state.userList;
            }
        },
        mounted (){
            var _this = this;
            getProduct(function(data){
                _this.product = data.data.productList;
            })
        }
    }
</script>