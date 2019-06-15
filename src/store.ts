import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ListTotopShow: false,
    CommonBottomShow: true,
    CommonBottomActive: 0,
    CommonBottomData: [{
      text: '首页',
      icon: 'icon-tab-home',
      ActiveIcon: 'icon-tab-home-active',
      path: '/',
    }, {
      text: '分类',
      icon: 'icon-tab-classify',
      ActiveIcon: 'icon-tab-classify-active',
      path: '/classify',
    }, {
      text: '头条',
      icon: 'icon-tab-jktt',
      ActiveIcon: 'icon-tab-jktt-active',
      path: '/news',
    }, {
      text: '购物车',
      icon: 'icon-tab-cart',
      ActiveIcon: 'icon-tab-cart-active',
      path: '/cart',
    }, {
      text: '我',
      icon: 'icon-tab-mine',
      ActiveIcon: 'icon-tab-mine-active',
      path: '/my',
    }],
  },
  mutations: {

  },
  actions: {

  },
});
