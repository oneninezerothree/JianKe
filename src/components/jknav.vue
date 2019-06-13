<template>
  <div id="nav_bottom">
    <div class="tab-bar-item" v-for="(item,idx) in typefaces" :key="item.name" v-on:click="goto(idx,$event)">
      <a v-bind:class="{'tab-bar-item':true,active:idx===active}"  href="javascript:;" >
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
          name: "Home",
          title: "首页",
          classname: "icon iconfont icon-tab-home-active"
        },
        {
          color: "black",
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
          name: "Cart",
          title: "购物车",
          classname: "icon iconfont icon-tab-cart"
        },
        {
          num: "",
          name: "Personal",
          title: "我",
          classname: "icon iconfont icon-tab-mine"
        }
      ],
      active:0
    };
  },
  methods:{
    //   color(idx){
    //   // console.log(this.typefaces.length);
    //   this.typefaces.map(typeface=>typeface.color='black');
    //   this.typefaces[idx].color='red';
    //   },
    //   goto(typeface){
    //       // console.log('App:',this);
    //       this.$router.push({name:typeface.name});
    //   }

    goto(event,idx){
        // console.log(idx,event);
        this.active = idx;
    }
  },
//   @click="color(idx)" :color="typeface.color"
};
</script>
<style scope>
#nav_bottom {
  position: fixed;
  bottom: 0;
  display: block;
  width: 100%;
  background: #ffffff;
}
#nav_bottom > div {
  text-align: center;
  float: left;
  width: 20%;
}
.tab-bar-item {
  list-style:none;
}
.tab-bar-item .active{
  color: #28b2f9;
}

</style>