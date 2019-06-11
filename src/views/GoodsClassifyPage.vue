<template>
<div>
    <ListCommonHeader></ListCommonHeader>
    <ListCommonSearch></ListCommonSearch>
    <ListLeftControl></ListLeftControl>
    <ListRightContent></ListRightContent>
    <BottomTabControl></BottomTabControl>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
// 列表页公共头部组件
import ListCommonHeader from '../components/ListCommonHeader.vue';
// 列表页公共搜索组件
import ListCommonSearch from '../components/ListCommonSearch.vue';
// 列表页左侧列表项组件
import ListLeftControl from '../components/ListLeftControl.vue';
// 列表页右侧内容组件
import ListRightContent from '../components/ListRightContent.vue';
// 底部选项卡组件
import BottomTabControl from '../components/BottomTabControl.vue';

export default Vue.extend({
    components: {
        ListCommonHeader,
        ListCommonSearch,
        ListLeftControl,
        ListRightContent,
        BottomTabControl,
    },
});
</script>

<style lang="scss">

</style>
