import Vue from 'vue';
import Router from 'vue-router';
// 首页组件
import HomePage from './views/Home.vue';
// 商品分类页组件
import GoodsClassifyPage from './views/GoodsClassifyPage.vue';
// 商品列表页组件
import GoodsListPage from './views/GoodsListPage.vue';
// 商品下详情页
import GoodsDetailPage from './views/GoodsDetailPage.vue';
// 头条组件
import NewsPage from './views/NewsPage.vue';
<<<<<<< HEAD
//头条——关爱
import guanzhu from './views/guanzhu.vue';
//头条——关爱
import guanai from './views/guanai.vue';
//头条——关爱
import yanggan from './views/yanggan.vue';
//头条——关爱
import xinnao from './views/xinnao.vue';
=======
>>>>>>> a82b593fd11814bebd609ea8b65f7a77c60e1617
// 购物车组件
import ShoppingCartPage from './views/ShoppingCartPage.vue';
// 我的信息组件
import MyInfoPage from './views/MyInfoPage.vue';
// 登录页组件
import LoginPage from './views/jklogin.vue';
// 注册页组件
import RegisterPage from './views/Register.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/classify',
      name: 'ClassifyPage',
      component: GoodsClassifyPage,
    },
    {
      path: '/list',
      name: 'ListPage',
      component: GoodsListPage,
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: GoodsDetailPage,
    },
    {
      path: '/news',
      name: 'News',
      component: NewsPage,
    },
    {
<<<<<<< HEAD
      path: '/guanai',
      name: 'guanai',
      component: guanai,
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu,
    },
    {
      path: '/yanggan',
      name: 'yanggan',
      component: yanggan,
    },
    {
      path: '/xinnao',
      name: 'xinnao',
      component: xinnao,
    },
    {
=======
>>>>>>> a82b593fd11814bebd609ea8b65f7a77c60e1617
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCartPage,
    },
    {
      path: '/my',
      name: 'MyInfo',
      component: LoginPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
    }],
});
