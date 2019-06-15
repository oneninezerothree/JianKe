<template>
<div class="box" style="" v-if="adShowStatus">
    <div class="btn-close" @click="closeAd"></div>
    <div rel="nofollow" class="btn-dl" data-stat="1090101"></div><img  src="https://img5.jianke.com/mall/common/201906/fec1c3ec8b5c4a5d8c124783e4417447.png" alt="" class="box-bg">
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            adShowStatus: true,
        };
    },
    methods: {
        closeAd() {
            console.log('广告已关闭');
            this.adShowStatus = false;
        },
    },
});
</script>

<style lang="scss" scoped>
.box {
    height: 1rem;
    margin: auto;
    background-color: #ff6243;
    width: 100%;
    max-width: 960px;
    min-width: 320px;
    z-index: 10;
    position: relative;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;

    .btn-close {
        width: .3rem;
        height: .3rem;
        position: absolute;
        top: 0;
        right: 0;
    }

    .btn-dl {
        height: 1rem;
        width: 2rem;
        float: right;
    }

    .box-bg {
        width: 100%;
        height: 1rem;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
    }
}
</style>
