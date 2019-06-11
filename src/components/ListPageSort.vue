<template>
<div>
    <div class="condition">
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

});
</script>

<style lang="scss" scoped>
.condition {
    position: absolute;
    width: 100%;

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
}
</style>
