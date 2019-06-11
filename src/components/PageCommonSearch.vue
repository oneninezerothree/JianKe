<template>
<div class="search">
    <div class="class-search-box" :class="className">
        <div class="search-content"><i  class="icon iconfont icon-search"></i><input  type="text" placeholder="爽购618 心药九折起"></div>
            <div class="search-btn">搜索</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['className'],
});
</script>

<style lang="scss" scoped>
.search {
    position: relative;

    .class-search-box {
        position: fixed;
        height: .9rem;
        top: .9rem;
        width: 100%;
        overflow: hidden;
        background: #f0f0f0;
        z-index: 1;

        .search-content {
            margin: .16rem 1.4rem .18rem .28rem;
            text-align: center;
            background: #fff;
            border-radius: .9rem;
            overflow: hidden;

            .icon-search {
                color: #999;
                font-size: .26rem;
            }

            >input {
                display: inline-block;
                height: .6rem;
                box-sizing: border-box;
                padding: 0 .08rem;
                line-height: .6rem;
                border: none;
                color: #555;
                width: 4rem;
            }
        }

        .search-btn {
            position: absolute;
            width: 1rem;
            height: .6rem;
            top: .16rem;
            right: .28rem;
            text-align: center;
            color: #fff;
            line-height: .6rem;
            border-radius: 4px;
            background: #28b2f9;
        }
    }

    .class-search-box.searchList {
        position: relative;
        top: 0;
    }
}
</style>
