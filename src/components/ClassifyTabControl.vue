<template>
<nav class="classify-nav-box">
    <ul class="nav-list">
        <li v-for="(item, index) in ListTitle" :key="index" :class="index === CurrentClass ? 'current' : ''" @click="ChangeCurrentClass(index)">{{ item.title }}</li>
    </ul>
</nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            // 列表项文本
            ListTitle: [{
                title: '男科用药',
            }, {
                title: '心血管科',
            }, {
                title: '糖尿病科',
            }, {
                title: '内分泌科',
            }, {
                title: '风湿骨科',
            }, {
                title: '肝胆科药',
            }, {
                title: '肿瘤科药',
            }, {
                title: '皮肤科药',
            }, {
                title: '艾滋病类',
            }, {
                title: '消化系统',
            }, {
                title: '神经系统',
            }, {
                title: '呼吸系统',
            }, {
                title: '泌尿科药',
            }, {
                title: '女性用药',
            }, {
                title: '儿科用药',
            }, {
                title: '日常用药',
            }, {
                title: '成人用品',
            }, {
                title: '全球购',
            }, {
                title: '滋补保健',
            }, {
                title: '医疗器械',
            }, {
                title: '健康服务',
            }, {
                title: '美妆个护',
            }],
            // 列表项当前类名
            CurrentClass: 0,
        };
    },
    methods: {
        ChangeCurrentClass(index: number) {
            this.CurrentClass = index;
        },
    },
});
</script>

<style lang="scss" scoped>
.classify-nav-box {
    width: 1.6rem;
    position: fixed;
    height: 100%;
    padding-top: 1.8rem;
    padding-bottom: 1.2rem;
    top: 0;
    left: 0;
    overflow-y: auto;
    background: #f0f0f0;
    box-sizing: border-box;

    .nav-list {
        text-align: center;
        letter-spacing: 1px;

        >li {
            height: .96rem;
            line-height: .96rem;
            border-bottom: 1px solid #e6e6e6;
            overflow: hidden;
        }

        >li.current {
            background: #fff;
            color: #1b8ffa;
            border-right: 1px solid #fff;
        }
    }
}
</style>
