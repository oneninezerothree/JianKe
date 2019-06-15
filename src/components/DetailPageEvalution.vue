<template>
<div>
    <div class="part-evalution" id="productContain_2">
        <div class="product-evalution">
            <div class="evaluation-head"><span  class="label">评价(1000+)</span><span >
      好评度<em >98.3%</em></span><i  class="icon iconfont icon-arrows-right"></i></div>
            <div class="evaluation-body">
                <ul>
                    <li class="evaluation-item">
                        <div class="evalution-item">
                            <div class="eva-head">
                                <div class="eva-name"><img  src="data:image/png;base64,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" alt="evaluation_avatar">
                                    <p>135****8814</p><a   class="rate comment-star"><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span></a>
                                </div>
                                <div class="eva-time">2019-6-11 9:29</div>
                            </div>
                            <div class="eva-contant">
                                <p class="eva-text">效果比较明显</p>
                                <p class="eva-images less"></p>
                            </div>
                        </div>
                    </li>
                    <li class="evaluation-item">
                        <div class="evalution-item">
                            <div class="eva-head">
                                <div class="eva-name"><img  src="data:image/png;base64,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" alt="evaluation_avatar">
                                    <p>152****9561</p><a   class="rate comment-star"><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span><span  class="star whole"><i  class="icon iconfont icon-star-score-on" style="font-size: 8px; color: rgb(245, 59, 16);"></i></span></a>
                                </div>
                                <div class="eva-time">2019-6-10 17:05</div>
                            </div>
                            <div class="eva-contant">
                                <p class="eva-text">物流迅速，包装很好，效果显著.性价比高！</p>
                                <p class="eva-images less"></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="evaluation-foot"><button >查看全部评论</button></div>
        </div>
        <div class="product-suit">
            <p class="suit-title">商品搭配</p>
            <div class="suit-item">
                <p class="item-title">*阳痿早泄（搭必利劲）</p>
                <p class="item-subtitle">药师点评：1.必利劲：CFDA食药监局批准进口的治早泄药物，能够增强射精的控制能力，延长性爱时间，用于早泄效果较好；2.万艾可：美国原装进口，老牌伟哥，20年历史，疗效得到临床认证，用于治疗男性勃起功能障碍（俗称阳痿）；3.两者：合用能帮助患者治疗阳痿早泄，体验美好性生活。一般必利劲在性交前约1至3小时按需服用，万艾可在性交前约1小时按需服用。</p>
                <ul class="product-combination-list">
                    <li><a  href="/product/2268.html" class="router-link-exact-active router-link-active"><img  alt="枸橼酸西地那非片(万艾可)" data-src="https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg?x-oss-process=style/img200" src="https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg?x-oss-process=style/img200" lazy="loaded"><!----><!----><i  class="item-icon icon iconfont icon-plus"></i><!----></a></li>
                    <li><a  href="/product/2268.html" class="router-link-exact-active router-link-active"><img  alt="盐酸达泊西汀片(必利劲)" data-src="https://img.tianditao.com/mall/product/201906/3548f1bebf8e41628409126fb3329ca7.jpg?x-oss-process=style/img200" src="https://img.tianditao.com/mall/product/201906/3548f1bebf8e41628409126fb3329ca7.jpg?x-oss-process=style/img200" lazy="loaded"><!----><!----><i  class="item-icon icon iconfont icon-plus" style="display: none;"></i><!----></a></li>
                </ul>
                <div class="item-footer">
                    <div class="price"><span >套餐价：<em >￥306.00</em></span></div>
                    <div class="btn"><a  rel="nofollow" class="buy-btn suit-btn" data-stat="1000108">立即提交</a></div>
                </div>
            </div>
            <div class="suit-item">
                <p class="item-title">补肾坚挺装</p>
                <p class="item-subtitle">药师点评：万艾可，俗称“伟哥”。对于治疗男性勃起功能障碍，俗称阳痿具有较好疗效！搭配补肾的经典产品-肾宝片事后补肾，调和阴阳，温阳补肾，扶正固本，让您更加持久给力！</p>
                <ul class="product-combination-list">
                    <li><a  href="/product/2268.html" class="router-link-exact-active router-link-active"><img  alt="枸橼酸西地那非片(万艾可)" data-src="https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg?x-oss-process=style/img200" src="https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg?x-oss-process=style/img200" lazy="loaded"><!----><!----><i  class="item-icon icon iconfont icon-plus"></i><!----></a></li>
                    <li><a  href="/product/2268.html" class="router-link-exact-active router-link-active"><img  alt="领券+好礼】汇仁肾宝片126s" data-src="https://img.tianditao.com/upload/prodimage/201812/2018121217581856.jpg?x-oss-process=style/img200" src="https://img.tianditao.com/upload/prodimage/201812/2018121217581856.jpg?x-oss-process=style/img200" lazy="loaded"><!----><!----><i  class="item-icon icon iconfont icon-plus" style="display: none;"></i><!----></a></li>
                </ul>
                <div class="item-footer">
                    <div class="price"><span >套餐价：<em >￥440.00</em></span></div>
                    <div class="btn"><a  rel="nofollow" class="buy-btn suit-btn" data-stat="1000108">立即提交</a></div>
                </div>
            </div>
            <div class="suit-item">
                <p class="item-title">阳痿早泄装</p>
                <p class="item-subtitle">药师点评：此方案用于中重度阳痿早泄的治疗。引阳索胶囊为中药制剂，补肾填精，益气养血，温补先天之肾气以助阳生精，又可培补后天之脾胃以生血固精，配合万艾可使用，治疗早泄、阳痿，提升男人性能力，坚挺延时。</p>
                <ul class="product-combination-list">
                    <li><a  href="/product/2268.html" class="router-link-exact-active router-link-active"><img  alt="引阳索胶囊(育林)" data-src="https://img.tianditao.com/mall/product/201906/8854bb1b80944a66b6c25de59d9e4de5.jpg?x-oss-process=style/img200" src="https://img.tianditao.com/mall/product/201906/8854bb1b80944a66b6c25de59d9e4de5.jpg?x-oss-process=style/img200" lazy="loaded"><!----><!----><i  class="item-icon icon iconfont icon-plus"></i><!----></a></li>
                    <li><a  href="/product/2268.html" class="router-link-exact-active router-link-active"><img  alt="枸橼酸西地那非片(万艾可)" data-src="https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg?x-oss-process=style/img200" src="https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg?x-oss-process=style/img200" lazy="loaded"><!----><!----><i  class="item-icon icon iconfont icon-plus" style="display: none;"></i><!----></a></li>
                </ul>
                <div class="item-footer">
                    <div class="price"><span >套餐价：<em >￥765.00</em></span></div>
                    <div class="btn"><a  rel="nofollow" class="buy-btn suit-btn" data-stat="1000108">立即提交</a></div>
                </div>
            </div>
            <div class="suit-foot"><button >
      查看全部套装
      <i  class="icon iconfont icon-arrows-down"></i></button></div>
        </div>
        <div class="product-similar">
            <p class="similar-title">相关推荐</p>
            <div class="similar-contain">
                <div class="mall-swiper">
                    <div class="mall-swiper-content" style="transition: all 0.3s ease 0s; transform: translate3d(0px, 0px, 0px);">
                        <div class="swiper-item active" style="">
                            <div class="similar-item-box"><a  href="/product/3669.html" class="similar-info" data-stat="1000113"><div  class="similar-img"><img  alt="枸橼酸西地那非片(万艾可)  -产品图" data-src="https://img.tianditao.com/mall/product/201906/39ceec05b5034af1a2c07f89d74d1d1d.jpg?x-oss-process=style/img300" src="https://img.tianditao.com/mall/product/201906/39ceec05b5034af1a2c07f89d74d1d1d.jpg?x-oss-process=style/img300" lazy="loaded"></div><p >枸橼酸西地那非片(万艾可)  </p></a>
                                <p class="similar-price">￥419.00</p>
                            </div>
                        </div>
                        <div class="swiper-item" style="">
                            <div class="similar-item-box"><a  href="/product/220793.html" class="similar-info" data-stat="1000114"><div  class="similar-img"><img  alt="盐酸达泊西汀片(必利劲)-产品图" data-src="https://img.tianditao.com/mall/product/201906/3548f1bebf8e41628409126fb3329ca7.jpg?x-oss-process=style/img300" src="https://img.tianditao.com/mall/product/201906/3548f1bebf8e41628409126fb3329ca7.jpg?x-oss-process=style/img300" lazy="loaded"></div><p >盐酸达泊西汀片(必利劲)</p></a>
                                <p class="similar-price">￥188.00</p>
                            </div>
                        </div>
                        <div class="swiper-item" style="">
                            <div class="similar-item-box"><a  href="/product/769850.html" class="similar-info" data-stat="1000115"><div  class="similar-img"><img  alt="必利劲+引阳索治早泄-产品图" data-src="https://img.tianditao.com/upload/prodimage/201811/20181128184150263.jpg?x-oss-process=style/img300" src="https://img.tianditao.com/upload/prodimage/201811/20181128184150263.jpg?x-oss-process=style/img300" lazy="loaded"></div><p >必利劲+引阳索治早泄</p></a>
                                <p class="similar-price">￥720.00</p>
                            </div>
                        </div>
                        <div class="swiper-item" style="">
                            <div class="similar-item-box"><a  href="/product/11316.html" class="similar-info" data-stat="1000116"><div  class="similar-img"><img  alt="他达拉非片(希爱力)-产品图" data-src="https://img.tianditao.com/mall/product/201906/6533aa3318384fde83e56260f6e8a9b5.jpg?x-oss-process=style/img300" src="https://img.tianditao.com/mall/product/201906/6533aa3318384fde83e56260f6e8a9b5.jpg?x-oss-process=style/img300" lazy="loaded"></div><p >他达拉非片(希爱力)</p></a>
                                <p class="similar-price">￥640.00</p>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.part-evalution {
    background: #f5f5f5;
    margin-top: .2rem;

    .product-evalution {
        background: #fff;

        .evaluation-head {
            display: flex;
            align-items: center;
            font-size: .26rem;
            padding-right: .12rem;

            .star {
                padding-right: .1rem;
            }

            .star.whole i {
                color: #f5a623;
            }

            span {
                flex: 0 1 auto;

                em {
                    font-style: normal;
                    color: red;
                }
            }

            span.label {
                flex: auto;
                padding: .27rem .48rem;
                font-size: .28rem;
                position: relative;
                font-weight: 700;
            }

            span.label:before {
                content: "";
                position: absolute;
                left: .24rem;
                width: 4px;
                height: .32rem;
                background: #3fadff;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 2px;
            }

            i {
                font-size: .4rem;
                font-weight: 700;
                color: #666;
                flex: 0 0 0.2rem;
            }
        }

        .evaluation-body {
            .evaluation-item {
                padding: 0 .24rem .6rem;

                .eva-head {
                    display: flex;
                    align-items: center;
                    margin-bottom: .2rem;

                    .eva-name {
                        flex: auto;

                        img {
                            width: 40px;
                            float: left;
                            margin-right: .1rem;
                            border-radius: 50%;
                            overflow: hidden;
                        }

                        p {
                            margin-top: 6px;
                            font-size: 13px;
                        }

                        .star {
                            padding-right: .1rem;

                            i {
                                color: #ccc;
                            }
                        }

                        .star.whole i {
                            color: #f5a623;
                        }
                    }

                    .eva-time {
                        flex: 0 0 auto;
                        font-size: 12px;
                        color: #999;
                    }
                }

                .eva-contant {
                    .eva-text {
                        line-height: 1.5;
                        margin-bottom: .1rem;

                        .eva-images {
                            display: flex;
                        }
                    }
                }
            }

            .evaluation-item:last-of-type {
                padding: 0 .24rem .24rem;
            }
        }

        .evaluation-foot {
            text-align: center;
            padding: .3rem 0 .4rem;

            button {
                background: #fff;
                border: 1px solid #ccc;
                height: 30px;
                border-radius: 15px;
                padding: 0 .15rem;
            }

        }
    }
}

.product-suit {
    background: #fff;
    padding-bottom: 1px;
    margin-top: .24rem;

    .suit-title {
        padding: .27rem .48rem;
        font-size: .28rem;
        position: relative;
        font-weight: 700;
    }

    .suit-item {
        margin: 0 .24rem .24rem;
        background: #f5f5f5;
        margin-bottom: .24rem;
        padding: .2rem;
        border-radius: 5px;

        .item-subtitle,
        .item-title {
            margin-bottom: .2rem;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .item-subtitle {
            font-size: 13px;
            color: #999;
        }

        .product-combination-list {
            width: 100%;
            white-space: nowrap;
            overflow-y: hidden;
            overflow-x: scroll;
            display: flex;
            align-items: center;
            margin-bottom: .16rem;

            li {
                position: relative;
                flex: 0 0 2.8rem;

                img {
                    width: 2rem;
                    height: 2rem;
                }

                .item-icon {
                    position: absolute;
                    top: 50%;
                    font-size: .28rem;
                    color: #e5e5e5;
                    transform: translateY(-50%);
                    font-size: 20px;
                    right: .2rem;
                    font-weight: 700;
                }
            }
        }

        .item-footer {
            padding: .2rem 0;
            font-size: 13px;
            display: flex;
            align-items: center;
            background: #f4f4f4;

            .price {
                flex: 1 auto;

                span {
                    display: inline-block;

                    em {
                        margin-right: 10px;
                    }
                }

                .btn {
                    flex: 0 0 auto;
                    text-align: right;

                }

            }

            .common-iem,
            em {
                font-style: normal;
                display: inline-block;
                color: #ff6464;
            }

            .suit-btn {
                padding: .14rem .3rem;
                border-radius: .8rem;
                vertical-align: top;
                color: #fff;
            }

            .suit-btn.buy-btn {
                background: linear-gradient(90deg, #ff2424, #ff796b);
                box-shadow: 0 1px 2px 1px rgba(255, 48, 0, .37);
            }
        }
    }

    .suit-foot {
        text-align: center;
        padding-bottom: .4rem;

        button {
            border: none;
            background: transparent;
            color: #222;
            position: relative;
            padding-right: .4rem;

            i {
                position: absolute;
                font-size: 12px;
                font-weight: 700;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

}

.product-similar {
    background: #fff;
    margin-top: .24rem;

    .similar-title {
        padding: .27rem .48rem;
        font-size: .28rem;
        position: relative;
        font-weight: 700;
    }

    .similar-title:before {
        content: "";
        position: absolute;
        left: .24rem;
        width: 4px;
        height: .32rem;
        background: #3fadff;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 2px;
    }

    .similar-contain {
        background: #fff;
        padding: 0 .24rem .24rem;

        .mall-swiper {
            background: #fafafa;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;

            .mall-swiper-content {
                display: flex;
                -webkit-display: flex;
                position: relative;

                .swiper-item {
                    background: #fff;
                    max-width: 100%;
                    flex-shrink: 0;
                    box-sizing: border-box;
                    justify-content: center;
                    align-items: center;
                    position: relative;

                    .similar-item-box {
                        margin-right: .2rem;

                        .similar-info {
                            display: inline-block;
                            width: 2rem;
                            color: #666;

                            .similar-img {
                                padding: .1rem;

                                img {
                                    width: 100%;
                                }
                            }

                            p {
                                text-align: center;
                                font-size: 13px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                        }

                        .similar-price {
                            text-align: center;
                            font-size: 13px;
                            color: #ff6464;
                        }
                    }
                }
            }
        }
    }
}
</style>
