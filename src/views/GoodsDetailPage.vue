<template>
<div>
    <DetailPageAd></DetailPageAd>
    <DetailPageHeader></DetailPageHeader>
    <DetailPageSlide></DetailPageSlide>
    <DetailPageGoodsInfo></DetailPageGoodsInfo>
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
import Vue from 'vue';
export default Vue.extend({
    components: {
        DetailPageAd,
        DetailPageHeader,
        DetailPageSlide,
        DetailPageGoodsInfo,
    },
});
</script>

<style lang="scss">

</style>
