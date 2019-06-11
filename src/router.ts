import Vue from 'vue';
import Router from 'vue-router';
// 商品分类单页面组件
import GoodsClassifyPage from './views/GoodsClassifyPage.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/classify',
      name: 'classify',
      component: GoodsClassifyPage,
    }  ],
});
