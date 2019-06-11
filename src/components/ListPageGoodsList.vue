<template>
<div>
    <div class="product-list" style="height: 477px;">
        <div infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <article data-v-61211646="" class="pro-item"><img data-v-61211646="" src="https://image.jianke.com/suo/mall/product/201906/aedd647b0921403895ac2354e602b7f0!200x200.jpg" alt="">
                <div data-v-61211646="" class="pro-info">
                    <h1 data-v-61211646="">盐酸伐地那非片(艾力达)</h1>
                    <div data-v-61211646="" class="type">规格：20mg*4s</div>
                    <div data-v-61211646="" class="desc">厂商：Bayer Pharma AG(原Bayer Schering Pharma AG)(德国)</div>
                    <div data-v-61211646="" class="price-box"><span data-v-61211646="" class="price">￥399.00
                        <span data-v-61211646="">起</span></span>
                        <span data-v-61211646="" class="pro-tip">促</span>
                    </div>
                </div>
                <div data-v-3b08a2b4="" data-v-61211646="" class="btn-car iconfont icon-bar-shoppingcart"></div>
            </article>
            <div class="loading" style="display: none;">加载中……</div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.product-list {
    overflow-y: auto;
    padding-top: .9rem;
    background: #fff;

    >div {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        .pro-item {
            position: relative;
            padding-left: 2rem;
            height: 2.2rem;
            overflow: hidden;
            background: #fff;

            >img {
                width: 1.6rem;
                height: 1.6rem;
                position: absolute;
                top: .25rem;
                left: .2rem;
                display: block;
            }

            .pro-info {
                font-size: .24rem;
                letter-spacing: 1px;

                >h1 {
                    font-size: .28rem;
                    color: #333;
                    margin-top: .28rem;
                    width: 90%;
                    height: .4rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    letter-spacing: 1px;
                    font-weight: 700;
                }

                .desc,
                .type {
                    color: #999;
                    font-size: .24rem;
                    margin-top: .08rem;
                    height: .32rem;
                    width: 70%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .price-box {
                    height: .5rem;
                    line-height: .5rem;
                    color: #ff422c;
                    font-size: .28rem;
                    overflow: hidden;

                    .price {
                        margin-right: .16rem;
                    }

                    .pro-tip {
                        font-size: 12px;
                        line-height: 14px;
                        padding: 1px 2px;
                        border-radius: 2px;
                        color: #fff;
                        background: #ff6464;
                        display: inline-block;
                        margin: 2px 6px 0 0;
                    }
                }
            }

            .btn-car {
                width: .72rem;
                height: .72rem;
                text-align: center;
                line-height: .72rem;
                font-size: .36rem;
                color: #666;
                position: absolute;
                border: 1px solid #ddd;
                border-radius: 50%;
                right: .4rem;
                top: .85rem;
            }
        }

        .pro-item:before {
            display: block;
            content: "";
            width: 7.48rem;
            left: .2rem;
            bottom: 0;
            position: absolute;
            height: 1px;
            background-color: #e5e5e5;
        }
    }
}
</style>
