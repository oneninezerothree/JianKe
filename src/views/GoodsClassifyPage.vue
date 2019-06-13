<template>
<div class="view">
    <PageCommonHeader :param="{'titleText':'全部分类','className': 'class-head'}"></PageCommonHeader>
    <PageCommonSearch></PageCommonSearch>
    <ClassifyTabControl></ClassifyTabControl>
    <ClassifyContent></ClassifyContent>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
// 列表页公共头部组件
import PageCommonHeader from '../components/PageCommonHeader.vue';
// 列表页公共搜索组件
import PageCommonSearch from '../components/PageCommonSearch.vue';
// 列表页左侧列表项组件
import ClassifyTabControl from '../components/ClassifyTabControl.vue';
// 列表页右侧内容组件
import ClassifyContent from '../components/ClassifyContent.vue';


export default Vue.extend({
    components: {
        PageCommonHeader,
        PageCommonSearch,
        ClassifyTabControl,
        ClassifyContent,
    },
});
</script>

<style lang="scss">

</style>
