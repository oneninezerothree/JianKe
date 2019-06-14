<template>
<div class="view">
    <PageCommonHeader :param="{'titleText':'搜索','className': 'list-head'}"></PageCommonHeader>
    <PageCommonSearch className="searchList"></PageCommonSearch>
    <div class="search-result-nav"><img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABXCAMAAABVwWmqAAACQ1BMVEUAAADa8P/i8//P6//c8P/f8v/j8//o9v/o9v/R7P/d8f/f8v/f8v+74v/d8f/d8f/d8f/////e8f/////h8v/k9P+64f/r9//////o9v/////////g8v/////n9f/////h8v/////d8P/d8f/////e8v/n9f/h8//A5P/i8/////+/5P/6/f/////n9f/z+v+64f/c8P/a8P+94//e8f/f8v/g8v+64f/m9f/m9f/////////////l9P+64f/o9f++4//////////G5//e8f/e8f/i8v/h8v/////o9v/G5//S7P////+64f/k9P+/5P/////Q6//D5v/////V7f/I6P/b7//k9P/h8v+64f/g8v/J6P/f8v+64f/d8f/////////////b8P/i8/+74f7B5P/////G5//P6v/////O6//m9P/p9f/////b8P/q9f/M6f+74f/H5//E5v+/5P/////M6f/////////f8v/n9f+44P/G5v/T7P/e8f/f8v/h8v/Z7//g8v/X7v/l9P/i8/+PxvDQ6//V7f/A5P/j8//C5f/n9f+74v/k9P/H5//T7P/E5v/F5v++4//g8f/k8/+94//a8P/I6P/S7P/K6P/M6f/U7f+64f/////m9f/P6v/O6v/L6f/W7v+/5P/G5//Y7//N6v/c8P+44f/S6//o9v/p9v/B5f/f8P/A4/+/4vyWyvKTyfHd8f/O6f+54P+ZzPORx/G94Pqm0/XN6Pyfz/PJ5vvD4vqt1vbT6v212/lwp1hkAAAAfnRSTlMAHgMPBmkJARcS+evk27aFemFcOiwiFxP86+Lc3NbTqKSjlY5yblZRRDcwKSgcDwv18+Xl18jDvLKvrJ6YkoyHfGpkV1NLRTwZ+vPx8O3r6eflxsW+sZ6diod+dHNwZFVPRkIa/vHe29XNy726sK+kn52cmZOOjo15Z1xPSiEfCFYfAAAIRElEQVRo3rWZhZcTMRDGQ3F3d3d3d3d3d3eHlnaxcsWLXWGhSFs43B3+NL6ZCZuF3QrvcV+SbybZx2+SdB93UFUqqqtKV60rqFJVk9I9QHe7nSpNrbSHqNLUQbuJKk3Nte3uqvQ0qZFtH2qo/lWBSuVUPvWs265lE5vVfOiYLoHC6RXbV3vT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" alt="正品承诺">
        <div class="tips">
            <p class="tip-top">健客承诺，正品保障</p>
            <p>国家药监局认证，合法网上药店</p>
        </div>
    </div>
    <ListPageSort></ListPageSort>
    <ListPageGoodsList></ListPageGoodsList>
    <div class="fixed-btn-box">
        <a href="/cart" class="car-btn">
        <i class="icon iconfont icon-bar-shoppingcart"></i>
        <span>12</span>
      </a>
        <PageCommonToTop></PageCommonToTop>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
// 列表页公共头部组件
import PageCommonHeader from '../components/PageCommonHeader.vue';
// 列表页公共搜索组件
import PageCommonSearch from '../components/PageCommonSearch.vue';
// 列表页排序组件
import ListPageSort from '../components/ListPageSort.vue';
// 列表页商品列表组件
import ListPageGoodsList from '../components/ListPageGoodsList.vue';
// 列表页公共返回顶部组件
import PageCommonToTop from '../components/PageCommToTop.vue';
export default Vue.extend({
    components: {
        PageCommonHeader,
        PageCommonSearch,
        ListPageSort,
        ListPageGoodsList,
        PageCommonToTop,
    },
    created() {
        this.$store.state.CommonBottomShow = false;
    },
});
</script>

<style lang="scss" scoped>
.search-result-nav {
    height: 1rem;
    background: linear-gradient(90deg, #00b4ff, #1095fa);
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    img {
        height: 80%;
        flex: 0 1 auto;
    }

    .tips {
        flex: auto;
        color: #fff;
        font-size: .205rem;
        line-height: 1.3;

        .tip-top {
            font-size: .32rem;
        }
    }
}

.fixed-btn-box {
    position: fixed;
    bottom: .6rem;
    right: .4rem;
    width: .74rem;
    transition: all 1s 0s;

    .car-btn i {
        font-size: .38rem;
    }

    .car-btn,
    .to-top {
        width: .72rem;
        height: .72rem;
        margin-top: .2rem;
        position: relative;
        display: block;
        border: 1px solid #ddd;
        border-radius: 50%;
        line-height: .72rem;
        color: #666;
        text-align: center;
        background: #fff;

        >span {
            background: red;
            color: #fff;
            line-height: .24rem;
            padding: .04rem .09rem;
            font-size: .2rem;
            border-radius: 1rem;
            position: absolute;
            top: 0;
            right: -.1rem;
        }
    }
}
</style>
