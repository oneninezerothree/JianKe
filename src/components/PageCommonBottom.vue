<template>
<div class="tab-bar" v-if="showCommonBottom">
    <a v-for="(item, index) in TabControlContent" :key="index" class="tab-bar-item" :class="index === SelectedOption ? 'active' : ''" >
       <router-link  :to="item.path" class="routeStyle">
            <i  class="icon iconfont" :class="index === SelectedOption ? item.ActiveIcon : item.icon"></i>
        <p>{{ item.text }}</p>
       </router-link>
    </a>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    computed: {
        showCommonBottom() {
            return this.$store.state.CommonBottomShow;
        },
        TabControlContent() {
            return this.$store.state.CommonBottomData;
        },
        SelectedOption() {
            return this.$store.state.CommonBottomActive;
        },
    },
    // 点击更换公共底部组件 CurrentActive, 被 App.vue 中的监听路由改变替代
    // methods: {
    //     ChangeIcon(index: number) {
    //         this.$store.state.CommonBottomActive = index;
    //     },
    // },
});
</script>

<style lang="scss" scoped>
.routeStyle {
    display: block;
}

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
