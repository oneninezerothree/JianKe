<template>
<div class="product-header on-top">
    <div class="">
        <header id="mallHeader">
            <div><a @click="$router.back()" rel="nofollow" class="back-btn common-header-btn" style="display:;" ><i class="icon iconfont icon-back" ></i></a @click="$router.back()">
                <span class="title" v-for="(item, index) in headerText" :key="index" :class="{'active': index === headerActive}" @click="changeHeaderActive(index)">{{ item }}</span>
                <div class="toggle-btn common-header-btn"><a rel="nofollow" ><i class="icon iconfont icon-more" ></i></a></div>
            </div>
            <nav style="display:none;">
                <div class="nav-masker" style="display:none;"></div>
                <ul>
                    <li class="arrows-tag"></li>
                    <li><a href="/" rel="nofollow" class="router-link-active" ><i class="icon iconfont icon-mall-home" ></i><em >首页</em></a></li>
                    <li><a href="/classify/classifyList" rel="nofollow"  class=""><i class="icon iconfont icon-mall-classify" ></i><em >分类搜索</em></a></li>
                    <li><a href="/cart" rel="nofollow"  class=""><i class="icon iconfont icon-mall-shoppingcart" ></i><em >购物车</em></a></li>
                    <li><a href="/user" rel="nofollow"  class=""><i class="icon iconfont icon-mall-user" ></i><em >个人中心</em></a></li>
                </ul>
            </nav>
        </header>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            headerText: ['商品', '评论', '详情'],
            headerActive: 0,
        };
    },
    methods: {
        changeHeaderActive(index: number) {
            this.headerActive = index;
        },
    },
});
</script>

<style lang="scss">
.product-header {
    width: 100%;

    header>div {
        height: 44px;
        text-align: center;
        color: #111;
        background: #fff;
        font-size: .28rem;
        position: relative;
        line-height: 44px;
        z-index: 10;
        width: 100%;
        max-width: 960px;
        min-width: 320px;

        .back-btn {
            left: 10px;
            position: absolute;
            line-height: .48rem;
        }

        .common-header-btn {
            width: .48rem;
            height: .48rem;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            font-weight: 700;
        }

        .title.active {
            font-size: .32rem;
            box-sizing: border-box;
            color: #222;
            font-weight: 700;
        }

        .title {
            display: inline-block;
            height: 100%;
            padding: 0 .28rem;
            color: #999;
        }

        .common-header-btn {
            width: .48rem;
            height: .48rem;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            font-weight: 700;
        }

        .toggle-btn {
            width: auto;
            right: 20px;
            position: absolute;
            line-height: .48rem;
        }
    }

    nav {
        z-index: 99;
        position: relative;

        .nav-masker {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
        }

        ul {
            position: absolute;
            right: 10px;
            top: -5px;
            background: rgba(0, 0, 0, .6);
            color: #fff;
            border-radius: 5px;

            li {
                padding: .2rem .3rem;
                border-bottom: 1px solid #777;

                .icon-mall-classify,
                .icon-mall-home,
                .icon-mall-shoppingcart,
                .icon-mall-user {
                    width: 19px;
                    display: inline-block;
                    text-align: center;
                }

                em {
                    font-style: normal;
                    padding-left: .2rem;
                }
            }

            li.arrows-tag {
                border-color: transparent transparent rgba(0, 0, 0, .6);
                border-style: solid;
                border-width: 0 4px 10px;
                position: absolute;
                top: -10px;
                right: 14px;
                padding: 0;
            }
        }
    }
}
</style>
