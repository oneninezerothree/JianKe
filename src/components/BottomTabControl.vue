<template>
<div class="tab-bar">
    <a v-for="(item, index) in TabControlContent" :key="index" class="tab-bar-item" :class="index === SelectedOption ? 'active' : ''" @click="ChangeIcon(index)">
        <i  class="icon iconfont" :class="index === SelectedOption ? item.ActiveIcon : item.icon"></i>
        <p >{{ item.text }}</p>
      </a>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            TabControlContent: [{
                text: '首页',
                icon: 'icon-tab-home',
                ActiveIcon: 'icon-tab-home-active',
            }, {
                text: '分类',
                icon: 'icon-tab-classify',
                ActiveIcon: 'icon-tab-classify-active',
            }, {
                text: '头条',
                icon: 'icon-tab-jktt',
                ActiveIcon: 'icon-tab-jktt-active',
            }, {
                text: '购物车',
                icon: 'icon-tab-cart',
                ActiveIcon: 'icon-tab-cart-active',
            }, {
                text: '我',
                icon: 'icon-tab-mine',
                ActiveIcon: 'icon-tab-mine-active',
            }],
            SelectedOption: 0,
        };
    },
    methods: {
        ChangeIcon(index: number) {
            this.SelectedOption = index;
        },
    },
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
