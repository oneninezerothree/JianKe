import Vue from 'vue';
import Router from 'vue-router';
// 商品分类页组件
import GoodsClassifyPage from './views/GoodsClassifyPage.vue';
// 商品列表页组件
import GoodsListPage from './views/GoodsListPage.vue';
// 商品下详情页
import GoodsDetailPage from './views/GoodsDetailPage.vue';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
    }],
});
