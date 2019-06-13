<template>
<div class="condition" ref="condition">
    <div :class="{'jk-affix': addFixedClass}">
        <section class="condition-box">
            <div class="cdt-item current"><span >综合
        <!----></span></div>
            <div class="cdt-item"><span >销量
        <!----></span></div>
            <div class="cdt-item"><span >价格
        <i  class="arrow arrow-down arrow-up"></i></span></div>
            <div class="cdt-item"><span >筛选
        <i  class="arrow arrow-down"></i></span></div>
        </section>
        <section class="cdt-item-spread" style="display: none;">
            <div class="spread-list">
                <p class="">
                    全部
                </p>
                <p class="">
                    处方药
                </p>
                <p class="">
                    非处方药
                </p>
            </div>
            <div class="bg"></div>
        </section>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            // jk-affix 类名添加条件
            addFixedClass: false,
        };
    },
    mounted() {
        // 侦听 window 滚动到阈值更改 jk-affix 类名改变条件
        window.addEventListener('scroll', () => {
            if (window.scrollY > 154) {
                this.addFixedClass = true;
            } else {
                this.addFixedClass = false;
            }
        });
    },
});
</script>

<style lang="scss" scoped>
.condition {
    position: absolute;
    width: 100%;

    .jk-affix {
        position: fixed;
        z-index: 66;
        border-bottom: 1px solid #eee;
        top: 0;
        left: 0;
        width: 100%;
    }

    .condition-box {
        display: flex;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        border: 1px solid #e6e6e6;
        background: #fff;
        position: relative;
        z-index: 1111;

        .cdt-item {
            flex-grow: 1;
            position: relative;

            .arrow {
                position: relative;
            }

            .arrow-down:before {
                border-top: 4px solid #ccc;
                top: .2rem;
                right: -.2rem;
            }

            .arrow-up:after {
                border-bottom: 4px solid #ccc;
                top: .1rem;
                right: -.2rem;
            }

            .arrow-down:before,
            .arrow-up:after {
                display: block;
                content: "";
                width: 0;
                height: 0;
                border-right: 4px solid transparent;
                border-left: 4px solid transparent;
                position: absolute;
            }
        }

        .cdt-item.current {
            color: #1b8ffa;
        }
    }

    .cdt-item-spread {
        position: relative;
        z-index: 111;

        .spread-list {
            padding-left: .32rem;
            background: #fff;
            position: relative;
            z-index: 111;

            >p {
                border-bottom: 1px solid #e6e6e6;
                height: .88rem;
                line-height: .88rem;
                padding-left: .2rem;
            }
        }

        .bg {
            background: rgba(0, 0, 0, .75);
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
    }
}
</style>
