<template>
<div class="tab-bar">
    <a  class="tab-bar-item" >
        <i  class="icon iconfont icon-tab-home"></i>
        <!---->
        <p >首页</p>
      </a>
    <a  class="tab-bar-item active" >
        <!---->
        <i  class="icon iconfont icon-tab-classify-active"></i>
        <p >分类</p>
      </a>
    <a  class="tab-bar-item" >
        <i  class="icon iconfont icon-tab-jktt"></i>
        <!---->
        <p >头条</p>
      </a>
    <a  class="tab-bar-item" >
        <i  class="icon iconfont icon-tab-cart"></i>
        <!---->
        <p >购物车</p>
      </a>
    <a  class="tab-bar-item" >
        <i  class="icon iconfont icon-tab-mine"></i>
        <!---->
        <p >我</p>
      </a>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
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

    .tab-bar-item {
        flex: 1;
        text-align: center;
        display: inline-block;
        color: #333;

        i {
            font-size: 20px;
        }

        p {
            font-size: 12px;
            margin-top: 2px;
        }

    }

    .tab-bar-item.active {
        color: #28b2f9;
    }
}
</style>
