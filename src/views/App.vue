<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import router from '../router/index.js'
  export default {
    name: 'app',
    components:{
    },
    data(){
      return {
      }
    },
    mounted (){
    },
    methods:{
    },
    watch:{
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  body {
    padding-bottom: 50px;
  }
</style>