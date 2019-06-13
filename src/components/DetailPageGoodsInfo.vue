<template>
<div class="product-infos">
    <ul class="product-quality" style="display:;">
        <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA2CAMAAACLF4vOAAAA8FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////87q/4/rf/c8P91xP7n8v/V5/+ezP/L4v/4+/+Bwf9btP/V7f9Vt/79/v/p9v+Nzv5Ksv5Brv6b1P5twf5euv7P6/+Izf70+v+34f+k2P+Qx/+W0/57x/5mvv5Qtf7B3f9Fr/7z+v/v9//i8/++4/+74v+f1v/I5//G5/+u3P9wuv+S0P622P+tHhsIAAAAInRSTlMABKyN+vdKRh7hpKGH2nNTEQzfZfLv58zHtpeTXD4tJBBnV1IkPwAAAmVJREFUSMe91nlT2kAYx/ENp9zifdv+ngBqJCEHhEuQIpdX3/+76e4Sqc0kJB2n/fwRo/P1ySYwLCxINV+ospiye8BeNla6k4eU34lMd5NpHvb7/JAufts+NXkArmsYXXAHyfDpl/kUuKcecb0ncKn8ZdDlM+c5CNpwSuS6RPZQg7B3ntksJ1O5KCcTJaz1hxMip61pbYdoMuxjrZRIli8qGYZPdItPpfEc3LzOT6eWjk8+4lZjaRkkUn3zryInw1o2Wr9jczzuuA4Jk/cGPmm8T0hw3M54bMq4RtK0M9Lh19JHnSlJNS92F8+6iVCm/rxwN3EdkepfjGd3flp43FT9tsQP92tvatM7C4p9aupt/Bu8+Qex9nMWP75V7/4mvpHx290PQYsVe+LFzdsHITL2rfn/xZ3ouCPjNEwyomODTKRZCbBpHhXPyQZKrAD0aATpvine0E3vKHlPekQ9oMAqYtGOCU5TA8jYdMSSK0zJ8dHeLTYCeLfHB+cUxvaBmU0rbLEiewZ8Z4wpx8AL0SC8HRC9AMcK467SwJCcRVi7UGkIpK9EKxcCi9RB6FyL/9hnniTETVI7qG2v2yT7oCTWf633/Wm/vp6RUNif9cAhw/c5qhvkDLzWV3dtUlctbLRWKtldXyvrM/GiPBI91uCpid9MfnLGW59yis/iC1dHGjhtpPLl8uukyixA5lDul0STJbCcEMmd8zAbsr+eiIkW8as/8oMlrnASuscqRXBdlzhXB1dUWLjskXgKr7b9Kp7KUTbiW0FBbt9y4y7ssiiZHKRclsVQLaaAVLHK4rk+Pb1mX/ULHGn94TZONLYAAAAASUVORK5CYII=" alt="" ><span >正品保证</span></li>
        <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA2CAMAAACLF4vOAAABBVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////87q/4/rf/G5/+j1/9btP/4+/+ezP/V5//v9v9wuv+Bwf/0+v/h8/9HsP6p2v/8/v/s9//L4v+x3f9Ksv5Arf7o9P+HzP6Qx/+Kzf5Wt/5PtP7L6f+94//Y7//B3f+u3P+g1v+q0v+T0f5+yP58x/54xf5xw/5qwP5duv7e7P+34P+Ey/7c8P/T7P/C5f+22P+d1f+Ayf5hu/4SldzTAAAAI3RSTlMA+6femkUSDKL117pkSzktHgTzjoX27eTgyLaWgHBrWz8l9HhLussAAAKdSURBVEjHvZbpUuJAFIUTRGXH3XHXOTeR1kAWloRdREEB9+X9H2U6ISQ4EELVVM33K9X19eXcJnXTwj+zHoutL+uurgArq0upGxE4xDZC1bXtXQDVKoDdnbXFVbd/g/Os68/gbG0HVt9MR0RwtAFxBho4YiS9OStmU5E92JQaElGtRiQ1SrDZi6Sy3oZoNJZMiBjz+mIRNduA3CSyXl4xRkwkY9Eol+FRNYZEZBoMHGaYRDQ0qvBw5KKqau1ubUScJlddVKNJnFGt29ZUtejKMrnofZmv+RTlvk4usiebze9Bo9LxTd/vVBqD76Y5JV8ihMtgmdVvl5SfgGspB9znlFD5XrpyZCZJ0u1imbuuDCXPHxfKdUmquzHwwWsXguVqzi42lsuSQz5QLrsxlYKU42LZXmABMrcVW70tSJwPZ6G6ILNSvuI1OfcKUxSFBTfIuPeTerAMR8gVJuQXHp1SxZMv4DpI9oVpwuX8hFyoHB7jMyzGpyvH8UYP03LOw5cf6A1xLifALJ3Ni+GfDNMthgSXj+x9lekGZytX7N8+4vI50KGWuiiz2qIOcC5wDoA+fXlynU0oT/7uL+oDB+PZDZTMyekx7+Xxnw0yS4A73SNAm3jsACpEbSAyGeD7QJfoGXO5IeoC+95gz8SBOyIDczCI7oB4RvA4g2PXijPTq+a4OBOmOB1nG5bwg9Jw3Mup8IMTALJOpowpZJN0e+FE+IuUCGgjooYKF7VBNNIAMSXMkN4C2AtR6x0O7y3eBAO20sIcsr/sg9KJHjVAeyTSbwCsZAM+mEm7J25ZvZ7F99jdJoM/nMeiXbxFnJZdVjwWFpCxo6g9y+qpdoRMyO0hCo6mgRNdX+YCwVn2ErG+IwLizrLXk4vDwwvhv/IHEBbzR3m1u60AAAAASUVORK5CYII=" alt="" ><span >厂家直供</span></li>
        <li style=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA2CAMAAACLF4vOAAAA6lBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8/rf87q/6ezP/d8f91xP73+//9///V5//V7f/e7P9Vt/70+v+Qx/+Kzv5Ksv5Brv7v9//p9v/l9P9wuv+b1P5twf5euv7P6//B3f9btP+64v+k2P+q0v+W0/6Q0P57x/5mvv5Qtf75/P/n8f/L4v9Fr/7H5/++4/+24P+f1v+GzP6u3P+Bwf9WS5JqAAAAIHRSTlMA+AWI4UpGHhEDq6ShjvHaynNlU64M59+2l5NcPi0kD9LSQkIAAALDSURBVEjHpZaJcqJAEIYHr423xtzX9rQKIgqIChqNGu+Y7Pu/zvaAIa4FStV+VYMCH83P1NTMsCB+Z3PXLCKpW4DbVCT1VxZcsr/OqhdxicRWiw5S/OJ01XwBiIGmDYAoxMOrP2UlIDqfSOgtIKTsU9Drkw8JECzGa0THQTTGCxAkHpJ+nGTlsZzPFMGjNZ4jmv3Fom8izsct8Chm8uXHSpLBAapOVXHWBaJWp79rXYUDvmWlO9I1FKp/WxU6avqoq/zI1mxmOyYK5tMuHNCdzlFgOvZsZrlyDV3W9kRV4AhFndhrdKntZWe7US0FQlAsdbN1fLkOZ6kHynJ7GF1u8CoImg3BqnNSbnqyzD2qobI8HK7avLcaDpskt6tVzt9CZbq5pw2cy0CH5Qm599Z2W9WVm5xDuExS022eTA+dlhuieTK1ZmR5xV8hskyfcFLe48kdihFZhjfei/6BMpWOLFPpanS5ESDbYfLKl21XlsBCzZf/yEPRXLnx2vsZSBpaILEigIHdoN5o0G9PBpcaGgBFlgPQceLLvVeBF6PZJNVjgjpAjlXEY6a1l9sgaOyHqI9lisgVFksAfKKtANFZdkAgLzvyoazY+AmQiDF2SZKBOzhiuQSfHRpU5ZJmxnQJYIM4glBGiBuAUpoRzxLAGM1tmLvlOAaQnoXrBoEp8o9g9wNxCm4IjzyAoiP2lYC5q4+o0/U8+yad8a7WW8duq+7VyKSZT+xKvM9ETf3XVTU0Rbor6rUje2Ag3ykHEXYcjQFQXc/1Sd+Lyfsd8b0Ge2riTIya+zQ7pqx4wflkAYQ84V5cpcwCSBbc9RJxPlKU0RzRXTkLqZD1tSQqTpHeTglwKgZHKXSNjcVBFHeQcFQg4jEWTuqGDOXLML5Er9ykzuwKcuDtCojcBTtHMgEuiUjbk+u4JDYbUTc+L3d3L+x/+Qu/MfQ0fy404wAAAABJRU5ErkJggg==" alt="" ><span >满79包邮</span></li>
    </ul>
    <div class="product-detail">
        <div class="product-price"><i class="symbol" >￥</i>118.00</div>
        <!---->
        <h1 class="product-name">
            <!---->枸橼酸西地那非片(万艾可)
        </h1>
        <p class="product-slogn"><span >【领1000元APP新人红包】</span><span >10-12号：特价10片装券后394</span>
            <!---->
        </p>
        <div class="multi-line-text product-intro"><span >适用于治疗阴茎勃起功能障碍(ED)。</span>
            <!---->
        </div>
        <p class="rx-tip">本品为处方药，请凭处方笺购买；健客网上药店只对处方药提供信息展示，不提供交易。</p>
    </div>
    <!---->
    <div class="product-promotion">
        <dl class="product-info-item product-coupon"><dt class="vertical"><span >领券</span></dt>
            <dd class="">
                <div class="coupon-contain">
                    <i class="coupon-tag"> 满999减50 </i>
                    <i class="coupon-tag"> 满399减15
                    </i>
                    <!---->
                </div>
                <!---->
            </dd>
            <dd class="icon"><i  class="icon iconfont icon-more"></i></dd>
            <!---->
        </dl>
        <dl class="product-info-item"><dt  class="vertical"><span>促销</span></dt>
            <dd class="">
                <div>
                    <p class="product-promo-contain"><span   class="product-promo-label">优惠</span>618提前购，满199-5，满399-15，满999-50
                    </p>
                    <!---->
                    <p class="product-promo-contain"><span   class="product-promo-label">赠品</span>买1件赠以下商品，送完为止
                    </p>
                </div>
                <!---->
            </dd>
            <dd class="icon"><i  class="icon iconfont icon-more"></i></dd>
            <!---->
        </dl>
        <!---->
    </div>
    <div class="product-packings">
        <dl class="common-info-item"><dt >规格</dt>
            <dd class="simple-pack"><a >0.1g*1s</a><span >1盒</span></dd>
            <dd class="icon"><i class="icon iconfont icon-more" ></i></dd>
        </dl>
    </div>
    <div class="product-server">
        <dl class="product-info-item"><dt class="vertical" ><span >厂商</span></dt>
            <dd class="vertical"><span class="text" >辉瑞制药有限公司</span></dd>
            <dd class="icon" style="display:none;"><i class="icon iconfont icon-more" ></i></dd>
            <!---->
        </dl>
        <dl class="product-info-item"><dt  class="vertical"><span >说明</span></dt>
            <dd class="">
                <div class="server-list"><span  >正品保证</span><span  >药监认证</span><span  >满79包邮</span><span  >花呗分期</span><span  >健客自营</span></div>
                <!---->
            </dd>
            <dd class="icon"><i  class="icon iconfont icon-more"></i></dd>
            <!---->
        </dl>
    </div>
    <!---->
    <!---->
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.product-infos {
    background: #f5f5f5;

    .product-quality {
        height: .8rem;
        width: 100%;
        background: #3fadff;
        display: flex;
        align-items: center;

        li {
            flex: 1;
            text-align: center;

            img {
                display: inline-block;
                vertical-align: middle;
                width: .45rem;
                padding-right: .1rem;
            }

            span {
                display: inline-block;
                vertical-align: middle;
                color: #fff;
            }
        }
    }

    .product-detail {
        padding: .2rem .24rem .3rem;
        background: #fff;
        line-height: 1.4;
        font-size: 13px;
        word-wrap: break-word;

        .product-price {
            color: #ff4a4a;
            font-weight: 700;
            font-size: 20px;

            .symbol {
                font-size: 12px;
                font-style: normal;
            }
        }

        .product-name {
            font-weight: 700;
            color: #222;
            font-size: 17px;
            margin-top: .06rem;
        }

        .product-slogn {
            color: #ff4a4a;
            text-indent: -.12rem;
            margin-top: .1rem;
        }

        .multi-line-text {
            position: relative;
            word-break: break-all;
        }

        .product-intro {
            margin-top: .1rem;
        }

        .rx-tip {
            margin-top: .2rem;
            font-size: .24rem;
            line-height: .32rem;
            color: #999;
        }
    }

    .product-promotion,
    .product-packings,
    .product-server {
        margin-top: .2rem;
    }

    .product-info-item {
        display: flex;
        align-items: center;
        padding: .2rem .24rem;
        background: #fff;

        dt {
            font-size: 13px;
            color: #999;
            flex: 0 0 0.8rem;
            align-self: flex-start;
        }

        .vertical {
            height: 18px;
            line-height: 18px;
            display: inline-block;
            vertical-align: bottom;
        }

        dd {
            flex: 1 auto;

            .coupon-tag {
                text-align: center;
                margin-right: 10px;
                color: #ff4a4a;
                border: 1px solid #ff4a4a;
                font-style: normal;
                padding: 0 3px 1px 7px;
                border-radius: 5px;
                position: relative;
                font-size: 12px;
            }

            .coupon-tag:after,
            .coupon-tag:before {
                content: "";
                position: absolute;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #fff;
                top: 50%;
                transform: translateY(-50%) rotate(315deg);
            }

            .coupon-tag:before {
                left: -5px;
                border-color: #fff #ff4a4a #ff4a4a #fff;
                border-style: solid;
                border-width: 1px;
            }

            .coupon-tag:after {
                right: -5px;
                border-color: #ff4a4a #fff #fff #ff4a4a;
                border-style: solid;
                border-width: 1px;
            }
        }

        .icon {
            flex: 0 0 0.5rem;
            align-self: flex-start;
            text-align: right;

            i {
                color: #222;
                font-size: .28rem;
                padding: 0 .1rem;
            }
        }
    }

    .common-info-item {
        display: flex;
        align-items: center;
        padding: .2rem .24rem;
        position: relative;
        background: #fff;

        dd {
            flex: 1 auto;
        }

        .simple-pack {
            font-weight: 700;
            line-height: 1.4;

            a {
                padding-right: .2rem;
            }
        }

        .icon {
            flex: 0 0 0.5rem;
            text-align: right;

            i {
                color: #222;
                font-size: .28rem;
                padding: 0 .1rem;
            }
        }
    }

    .product-promo-contain {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        color: #222;
        margin-bottom: .1rem;
        width: 5.6rem;

        .product-promo-label {
            padding: 0 .08rem;
            border-radius: 8px;
            border: 1px solid #ff706a;
            color: #ff706a;
            display: inline-block;
            font-size: 12px;
            height: 14px;
            line-height: 14px;
            margin-right: .2rem;
        }
    }

    .product-promo-contain:last-of-type {
        margin-bottom: 0;
    }

    .product-coupon {
        color: #ff4a4a;
    }
}
</style>
