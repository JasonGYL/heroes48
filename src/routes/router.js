import VueRouter from 'vue-router';  //安装vue-router
import Vue from 'vue';
//导入组件
import HeroesList from '../views/heroes/list.vue';
import EquipsList from '../views/equips/list.vue';
import WeaponList from '../views/weapon/list.vue';

//注册VueRouter插件 this.$router this.$route
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter({
	linkExactActiveClass: 'active',
	//路由规则
	routes: [
		{ path: '/', redirect: '/heroes' },
		{ name:'heroes', path: '/heroes', component: HeroesList },
		{ name:'equips', path: '/equips', component: EquipsList },
		{ name:'weapons', path: '/weapons', component: WeaponList }
	]
});


//模块中倒出路由对象
export default router;