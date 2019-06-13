<template>
<div>
    <section class="shopping-bar" data-v-bce53b90="" data-v-0a4dad80="">
        <ul data-v-bce53b90="">
            <li class="bar-info" style="display:;" data-v-bce53b90=""><a class="phone-consult-btn" data-v-bce53b90=""><i class="icon iconfont icon-bar-consultation" data-v-bce53b90=""></i><span data-v-bce53b90="">咨询药师</span></a><a href="/cart" rel="nofollow" class="shopping-cart-btn" data-v-bce53b90=""><i class="icon iconfont icon-bar-shoppingcart" data-v-bce53b90=""></i><span data-v-bce53b90="">清单</span><span class="cart-number" style="" data-v-bce53b90="">12</span></a></li>
            <li data-v-bce53b90=""><a rel="nofollow" class="commonBtn add-to-cart-btn" data-v-bce53b90="">加入清单
      </a></li>
            <li data-v-bce53b90=""><a rel="nofollow" class="commonBtn buy-btn" data-v-bce53b90="">立即提交
      </a></li>
        </ul>
        <!---->
        <div class="booking" data-v-53e97a99="" data-v-bce53b90="">
            <!---->
        </div>
        <div class="consult" data-v-2b6f4de7="" data-v-bce53b90="">
            <!---->
            <!---->
            <!---->
        </div>
    </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.shopping-bar {
    width: 100%;
    height: 48px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: inline-block;
    z-index: 90;
    background-color: #fff;

    ul {
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        border-top: 1px solid #eee;

        li {
            flex: 1;
            height: 100%;

            a {
                display: inline-block;
                height: 100%;
                width: 100%;
                line-height: 48px;
            }

            .commonBtn {
                width: 100%;
                height: 100%;
                color: #fff;
            }

            .phone-consult-btn {
                width: 50%;
                box-sizing: border-box;
                color: #5eb5ff;
            }

            .shopping-cart-btn {
                width: 50%;
                position: relative;
            }

            .add-to-cart-btn,
            .consult-btn,
            .soldOut-btn {
                width: 100%;
                height: 100%;
                color: #fff;
                background-color: #fba744;
            }

            .buy-btn {
                width: 100%;
                height: 100%;
                color: #fff;
                background-color: #f53b10;
            }
        }

        li.bar-info {
            height: auto;
            flex: 0 0 150px;

            a {
                width: 50%;
                display: inline-block;
                color: #999;
                font-size: 12px;
                line-height: normal;

                i {
                    font-size: 18px;
                }

                span {
                    display: block;
                }
            }

            .shopping-cart-btn {
                width: 50%;
                position: relative;

                .cart-number {
                    position: absolute;
                    background: #ff6464;
                    right: .28rem;
                    top: -.04rem;
                    border-radius: .14rem;
                    color: #fff;
                    height: .28rem;
                    line-height: .28rem;
                    padding: 0 .08rem;
                }
            }

        }
    }
}
</style>
