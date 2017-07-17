<template>
    <div>
        <div class="userList">
            <p v-for="(item,index) in userList">
                <span><b>¥{{item.item.newPrice}}*{{item.length}}</b>{{item.item.title.substring(0,15)}}...</span>
                <span class="del me-ion-minus-round" @click="removeCount(index)"></span>
                <span class="del me-ion-plus-round" @click="addCount(index)"></span>
                <span class="del me-ion-close-round" @click="remove(index)"></span>
            </p>
        </div>
        <div class="cart" data-wrap="layout">
            <div data-item="col-4" class="size">
                合计<span>{{total}}</span>元
            </div>
            <div data-item="col-5">
                <button class="me-u-btn" data-color="red" @click="back">继续购买</button>
            </div>
            <div data-item="col-3">
                <button class="me-u-btn" data-color="red">去支付</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .userList {
        position: fixed;
        width: 100%;
        min-height: 40px;
        top: 0;
        z-index: 255;
        background: #fff;
        text-align: left;
        padding-left: 10px;
        padding-top: 10px;
        font-size: 14px;
        color: #999
    }
    
    .userList p {
        margin-bottom: 10px;
    }
    
    .me-ion-minus-round,
    .me-ion-plus-round,
    .me-ion-close-round {
        display: inline-block;
        width: 15px;
        height: 15px;
        background: #ff4c4c;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        float: right;
        margin-right: 10px
    }
    
    b {
        display: inline-block;
        min-width: 50px;
        padding: 2px 5px;
        text-align: center;
        line-height: 12px;
        color: #fff;
        background: #ff4c4c;
        margin-right: 10px;
        border-radius: 3px;
    }
    
    .cart {
        width: 100%;
        height: 60px;
        background: #fff;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #dddcdd;
    }
    
    .cart div {
        height: 100%;
    }
    
    .cart button {
        margin-top: 10px;
    }
    
    .cart .size {
        line-height: 60px;
        color: #5f5f5f;
    }
    
    .cart .size span {
        color: #ff4c4c;
        font-size: 30px;
    }
</style>

<script>
    export default {
        methods: {
            remove(index) {
                this.$store.dispatch("delete", index);
            },
            back() {
                this.$root.go('/')
            },
            removeCount(index){
                if(this.userList[index].length == 1){
                    this.remove();
                }else{
                    this.$store.dispatch("deleteLength",index);
                }
                
            },
            addCount(index){
                this.$store.dispatch("addLength",index);
            }
        },
        computed: {
            userList() {
                return this.$store.state.userList;
            },
            total() {
                let total = 0;
                for (var i in this.$store.state.userList) {
                    total += this.$store.state.userList[i].item.newPrice * this.$store.state.userList[i].length;
                }
                return total;
            }
        }
    }

</script>