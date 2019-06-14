<template>
  <div class="tab-bar">
    <div
      class="tab-bar-item"
      v-for="(item,idx) in typefaces"
      :key="item.name"
      
      @touchstart="goto(item)"
    >
      <a href="javascript:;" @touchstart="change(idx,$event)" v-bind:class="{'':true,active:idx===active}">
        <i :class="item.classname"></i>
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typefaces: [
        {
          num: "",
          name: "home",
          title: "首页",
          classname: "icon iconfont icon-tab-home"
        },
        {
          num: "",
          name: "CategoryPage",
          title: "分类",
          classname: "icon iconfont icon-tab-classify"
        },
        {
          num: "",
          name: "ChannelPage",
          title: "头条",
          classname: "icon iconfont icon-tab-jktt"
        },
        {
          num: "1",
          name: "jkcart",
          title: "购物车",
          classname: "icon iconfont icon-tab-cart"
        },
        {
          num: "",
          name: "user",
          title: "我",
          classname: "icon iconfont icon-tab-mine"
        }
      ],
      active:0
    };
  },
  methods: {
    change(idx,$event){
      this.active = idx;
    },
    goto(item) {
      // console.log('App:',this);
      this.$router.push({ name: item.name });
    }
  }
};
</script>
<style scope lang="scss">
.tab-bar {
  width: 100%;
  max-width: 960px;
  min-width: 320px;
  height: 1rem;
  position: fixed;
  border-top: 1px solid #e3e3e3;
  bottom: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  align-items: center;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  display: inline-block;

  a {
    text-decoration: none;
    color: #333;
  }
  p {
    font-size: 12px;
    margin-top: 2px;
  }
  .active {
    color: #28b2f9;
  }
}
</style>