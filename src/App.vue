<template>
<div id="app">
    <router-view />
    <PageCommonBottom></PageCommonBottom>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
// 底部选项卡组件
import PageCommonBottom from './components/PageCommonBottom.vue';
export default Vue.extend({
    components: {
        PageCommonBottom,
    },
    created() {
        // 创建之后根据当前路由决定公共底部组件当前选中
        this.$store.state.CommonBottomData.forEach((item: any, index: any) => {
            if (this.$route.path === item.path) {
                this.$store.state.CommonBottomActive = index;
            }
        });
    },
    watch: {
        // 监听路由改变，根据路由改变更改公共底部组件当前选中
        $route(to, from) {
            this.$store.state.CommonBottomData.forEach((item: any, index: any) => {
                if (to.path === item.path) {
                    this.$store.state.CommonBottomActive = index;
                }
            });
        },
    },
});
</script>

<style lang="scss">
html {
    line-height: 1.15;
}

body {
    font-family: Microsoft YaHei, tahoma, arial;
}

html,
body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 14px;
}

article,
blockquote,
body,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
img,
input,
legend,
li,
p,
pre,
section,
textarea,
ul {
    padding: 0;
    margin: 0;
}

ul li {
    list-style: none;
    padding: 0;
    margin: 0;
}

a,
button,
input,
textarea {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
}

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
}

.search,
.search-head,
.search-result-nav,
.swipe {
    z-index: 1111;
    position: relative;
}

@import url(../public/css/iconfont.css);
</style>
