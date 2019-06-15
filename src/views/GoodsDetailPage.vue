<template>
<div>
    <DetailPageAd></DetailPageAd>
    <DetailPageHeader></DetailPageHeader>
    <div class="badge" data-v-17d95a53="" data-v-0a4dad80="" data-v-78fb53f4="">
        <div class="badge-contain" data-v-17d95a53="">
            <!----><i class="icon iconfont icon-Rx" data-v-17d95a53=""></i></div>
    </div>
    <DetailPageSlide></DetailPageSlide>
    <DetailPageGoodsInfo></DetailPageGoodsInfo>
    <DetailPageEvalution></DetailPageEvalution>
    <DetailPageBottom></DetailPageBottom>
</div>
</template>

<script lang="ts">
// 商品详情页顶部广告
import DetailPageAd from '../components/DetailPageAd.vue';
// 商品详情页头部
import DetailPageHeader from '../components/DetailPageHeader.vue';
// 商品详情页轮播图
import DetailPageSlide from '../components/DetailPageSlide.vue';
// 商品详情页商品数据
import DetailPageGoodsInfo from '../components/DetailPageGoodsInfo.vue';
// 商品详情页评论组件
import DetailPageEvalution from '../components/DetailPageEvalution.vue';
// 商品详情页底部组件
import DetailPageBottom from '../components/DetailPageBottom.vue';
import Vue from 'vue';
export default Vue.extend({
    components: {
        DetailPageAd,
        DetailPageHeader,
        DetailPageSlide,
        DetailPageGoodsInfo,
        DetailPageEvalution,
        DetailPageBottom,
    },
});
</script>

<style lang="scss">
.badge[data-v-17d95a53] {
    position: relative;

    .badge-contain[data-v-17d95a53] {
        position: absolute;
        top: 0;
        right: .3rem;
        z-index: 5;
        text-align: center;

        i[data-v-17d95a53] {
            margin-top: .2rem;
            display: inline-block;
        }

        .icon-OTC[data-v-17d95a53],
        .icon-Rx[data-v-17d95a53] {
            font-size: 20px;
        }

        .icon-Rx[data-v-17d95a53],
        .otc-green[data-v-17d95a53] {
            color: #28af6d;
        }
    }
}
</style>
