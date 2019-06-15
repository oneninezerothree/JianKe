<template>
<div class="to-top" v-show="showStatus" @click="actionTotop"></div>
</template>

<script lang="js">
import Vue from 'vue';
export default Vue.extend({
    computed: {
        showStatus() {
            return this.$store.state.ListTotopShow;
        },
    },
    methods: {
        actionTotop() {
            console.log('返回顶部！');
        },
    },
});
</script>

<style lang="scss" scoped>
.to-top:before {
    content: " ";
    position: absolute;
    width: 2px;
    height: 0.36rem;
    top: 0.2rem;
    left: 50%;
    transform: translateX(-50%);
    background: #666;
}
 
.to-top:after {
    content: " ";
    position: absolute;
    width: 0.16rem;
    height: 0.16rem;
    border: 2px solid #666;
    border-right: none;
    border-bottom: none;
    top: 0.2rem;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
}
</style>
