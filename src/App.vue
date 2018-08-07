<template>
  <div id="app">
    <!-- 头部 header-->
    <app-header></app-header>


    <div class="container-fluid">
    <div class="row">
      <!-- 侧边栏 -->
    <app-sidebar></app-sidebar>


      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
       

       <!-- 列表管理 -->
       <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  //导入AppHeader.vue组件
  import AppHeader from './components/AppHeader.vue';
  //导入Appside.vue 组件
  import AppSidebar from './components/AppSide.vue';
  
  

  export default {
   //局部组件
   components: {
    AppHeader,
    AppSidebar
   }
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
