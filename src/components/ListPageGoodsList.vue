<template>
<div class="product-list" style="height: 100vh;" @scroll="showTotop">
    <div infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <routerLink to="/detail" tag="div" v-for="(item, index) in 30" :key="index" data-v-61211646="" class="pro-item"><img data-v-61211646="" src="https://image.jianke.com/suo/mall/product/201906/aedd647b0921403895ac2354e602b7f0!200x200.jpg" alt="">
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
        </routerLink>
        <div class="loading" style="display: none;">加载中……</div>
        <div class="moreTips">
            <p>没有找到想要的商品？</p>
            <p>点击“咨询药师”帮您找</p>
        </div>
        <div data-v-5fa6a648="" class="search-result-footer">
            <h3 data-v-5fa6a648="">关于健客</h3>
            <p data-v-5fa6a648="">健客-国家药监局认证的合法网上药店，致力于打造优质、低价、便捷的网上药店和最值得信赖的健客服务平台。</p>
            <ul data-v-5fa6a648="" class="list">
                <li data-v-5fa6a648=""><img data-v-5fa6a648="" src="data:image/png;base64,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" alt="">
                    <p data-v-5fa6a648="" class="title">正品保证</p>
                    <p data-v-5fa6a648="">正规发票</p>
                </li>
                <li data-v-5fa6a648=""><img data-v-5fa6a648="" src="data:image/png;base64,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" alt="">
                    <p data-v-5fa6a648="" class="title">正品保证</p>
                    <p data-v-5fa6a648="">正规发票</p>
                </li>
                <li data-v-5fa6a648=""><img data-v-5fa6a648="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA7CAMAAAATkBfQAAABI1BMVEUAAAAPl/oPlvtR1f8Bs/86sv0OmfsmvP9R1v8lvP86sv0As/8PlvoQlvoPlvpS1f9S1v9S1f/p9PwPlvoDrv4ErP4Fqf5Q0f9R0v8KoPxS1v8Hpv0OmfsMnftKyf47wf84wP8JovwOmPpR1P8lvP8pu/8Nm/xMy/5Hx/4Nmvo/w/9Ozf8ruf8AtP9CxP9Pz/8Io/09wv9Fxf42v/44sv0LnvxExP4Pl/svt/4Bsf4GqP41tP0xtv4ztf42s/06sf1Pzv8Ipf1Vv/46sv0LnfwPlfsCsf8Cr/81wP/h8vzd8PxZyv615v2+5f1oxv5dwv6l3f3X7vyh2vxn0v4ltf6T1v140v0otP2t3/2X3P1TxP3H6v2O1P3G6vx70PwwqvsvqftinJTSAAAAEnRSTlMAivTz7u7u7b6RkY1Nvr6ETk3onStQAAADrElEQVRIx5WWiXbSUBCG475vYVGE1BIERBDRFmNxYYuUpbZVu7jr+z+F/8yETMi5JPW7d5Z7m/lOTnvowbKuXXmcyLMkLt6AgB+rVqUgtJP7yWRCz04opAdyRfuGdaWawmRHkCplF1nK5KJVrbZaVdDCChKy9Ew2kd2s1UrmdSuXgvU6jXxAr5c3Yr1No5iC9S6NMuh0yh0U6iikIFOx3qRRSMF6b+JNpHcY33G6vs8VgSzF7zrWpe0UGrVao1FDRkGzhK7pB5et69v97e0+xbgPxtT3EZJx6ZVKLi/guiWPN+F5dHnOsq5fGvfHY57nyqBF8OlDRuCqnXAZAmI6nW6BKYe02EHs7GR3d3azABVIwQXCWrK1uSVIVaa4oslgSyhq2ExCpyDg9N+G9ajh0aNHm5tIVNHQYrjL5bKAsqDHXMSQRC4CjSorhhd4dCVLd7I3tz8dfs+tQw0vltA8iqTFD1v4eJRmeGFkMbeXfDrKywgVJR8anhr5Zduzb4v20ckMb5HLB+Q4SU0xnEDwBTWf34Lie96AGtrt9lMEQOUOac+2v6GDoffbtg9jsz0ONZj4ZNsLqnjyFL+JHoNBBFU+hYZXr161EREWezN7lfnn016x1ysWkYF0aojyEsifIe44LcZRA8ZoFgsd2LNNfF5veBlnZjTMhzQ1HBaxeEcNTzAmiRvbzFDpcAoNT2KsM3Q6w46C/gyG2fHBwfFMDauUI4aNDcyhxA0/R+BYDeUQtJF32BCeSIDQcECGg+WpHEcNMdSwT4b90FDAFCehcAbDVzJ8XZ4KQhnBmA11NRCHo9GhrQbBbKjXN3gxavg4Gn00GrrdQlcNdRoXEg3dEExTUQPRNBrm+/vzFYPDCXnF0Kw3sevIajAhXxpY4Hd9p+uoIc6aT5bvhPg+pTWGQbO55tMdEUgJDYMm1iCYpsOXmekV/tR4LMw1NTwfYD2nPKAO5Yvhv9zfGnAo0TSjBh5Fok2gihLIVyZaqNSBUkNuIobn92XdlyCopVRqEMhKKdhq4EGaUfRQwqPyJQygA5h2uVVDEjzGCincSI0aHiQYXE/GXYFmATtCw4MkXNeDAhrP9VxUclB44OwGD6mUwRQsGY9xgRoqeLBSQZaGtlS6yGTcDMLDOLWCJyU0XKD5iiSiIkdJmQgeVoTzoeFq5WEFG0ijJ0T4rfhDBgsWSgi4boeGew9jVCJZDDKFLVW4aYXc0WGVBASCEH2lc1aEu1cvxBVqMHL+VvAG/wDpbOWGAQtuSQAAAABJRU5ErkJggg==" alt="">
                    <p data-v-5fa6a648="" class="title">正品保证</p>
                    <p data-v-5fa6a648="">正规发票</p>
                </li>
                <li data-v-5fa6a648=""><img data-v-5fa6a648="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAMAAAB+M959AAABd1BMVEUAAAAPlvtPzv4NmfsGp/5fyv8Eq/5Myf4IpP0Mnfw4vf4/v/5Ewv5Wz/9Yzf4Jo/wxvP5Ixf5jyv+Q1f4Kn/xbyv8qvP/L7PwWuP8lu/9ozf6I2P2U2/2x5P06u//Y7/x20v4PlvoBtP8Drv4Jtv8JsP4duv9Pyf5kyf8Drv4QlvpFu/6g3/3A6P1T0P5Wzv9lyv5jyv9kyv4ErP0QlfsPl/oDrf4ErP5Kwf4QlvoEq/5ix/9ix/7p9PwOmfsPl/sGp/0Kn/wNm/sDrf5Ny/5Myf47vf5Fwv4PlvsKofw1u/44vP5IxP4Hpv1PzP4suv4MnPwBsf8puv9Av/4Fqv4vuv4IpP1Lx/4CsP8Eq/1DwP4Gqf4LnvwJo/0+vv5Kxf5fy/8muv8yu/5ky/8juv8xu/4ErP5Xz/8Drv9bzP9hy//l8/xZzf8guf9cy/8cuf8As/8Eq/5Zzv9V0P8PlftdzP+c3v2Y2/3f8Px+zfxW0f9/yvyAyPsAThGsAAAAPXRSTlMA2Zvb5IzmnuHdsqumlpLeuaKHCN6QwB7VxoBiVjkUEXX16uni4c6+tFZQTUoq9PLw2s/NwsKxrISEfV833i1QagAAA9BJREFUSMedkYd3EkEQh9feYopoSKIx9t57peQUQhJC8QSOokEIBCUSYmzRP97fzC4eZcSEb3dn53hvvjc7qP5MH5icGPaqwfGcudRorK9fODmwwXuk0SDF+rmxmcEMpyYbrCAmpgcQzJzAI7QiQY1MeXZqmB5dMyQS6wli/OYO5zi55ioMO5qqd6hcLq+VdUi4DM1se47jZRcoXCZubG+O+yaL5XKxyAEkEplMBoFW5vwxzzbmeLjYSaYTnmr/OY4nk0VeZiczq52Oi/2n6h1L9rCawWJayRFvnzmOJmNubUwHa9XCXqWIi76sf091ajwmYAnsn5INJ2MilsgpUTH0FsRwDObTqlhOpWJVHAs4/AVGRcUoF62s8GUiluOghnEqSCkgvSgrUAAQcLBhIJoVBzSxK80m3yTdr7p5QYoPxAoW4IyPbTs26mzbhoEy2jYpriqX01eOkWL+w/w8DhZtSihDbc7uhhX7H51Whud3SqQ4PC+Sy9nYtPg2+V5SWOevmhZKpX6KQC4XyOEgGOgHVjiO9RiNeO6VWooFkYCIVjSblfseNVUaXNGkP+eZuusqQgsLoRA2AhYifUMRjQawEAFFbK2wiRFFgo8f97FCJCpCir0YK+aiyNBXkUpFU1yFG7nZrMBYMWQFg1EceReiFXpHfP/0sptPP1MuB0kRYBQJlpe1og0YeviB0kKKQ8EookaxLCjkLgoo1oyg4GCUUWQwijcihUgEJRFsJNjIkB/UCrS0DUVEhLtIMYoERpFt8SabFR/SrSiAVEErPpNiKNuGOM5gMBLUGAWjSPC5RyF3EXQ5joIRjAaor19JcYIU4XA2DBAomiscFGFFhFEw1FoKkXwQK59HGSJufQ6h4Di9KBJEF2iiV/FNeMivvCHuKoCq1WpogxRj4UUqXlykWxwnVQMKriKvFTVWoPYvYhdxF1bwq6AA9dowK0RmqWJ2No6lMw6kOBSPoy0o2GEU7wEiFkEpFIAMHcT3sIJRtXodmxXv2xAf0uZgBRrCVnWgFQdMdZqOOE6fz0flPqPYo22qvrHxV5F2kbr47WNI5GtXbECxUT9KirSILnKLGa3QP5CiWtVdvE6nX/MBaQ50+X0Su7oV1aOsEPG7DqQIhOmCUVUyVIe14hUXmWg2V/r5IDXoLvzsVVXmqFG04Ewr/N2wRysAFLddxatOlvTFZXN0EDjHYsUu/jyrLn8BRrGE1YMWcCUCoKgV/NNDdb26BQcpdi+JzIloxRxs15R6srX1P8UmbZzNTboRjIJ+fKrA9cu3tEJmlwwrzj5AD38Al1wSrbNtE8cAAAAASUVORK5CYII=" alt="">
                    <p data-v-5fa6a648="" class="title">正品保证</p>
                    <p data-v-5fa6a648="">正规发票</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            TotopStatus: true,
        };
    },
    methods: {
        // 显示返回顶部按钮
        showTotop(e: any) {
            if (e.target.scrollTop > 1000) {
                this.$store.state.ListTotopShow = true;
            } else {
                this.$store.state.ListTotopShow = false;
            }
        },
        // 返回顶部
        goToTheTop(e: any) {
            if (this.TotopStatus) {
                const Timer = setInterval(() => {
                    if (e.target.scrollTop > 0) {
                        e.target.scrollTo(0, 0);
                    } else {
                        clearInterval(Timer);
                    }
                }, 100);
            }
        },
    },
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

        .loading {
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            font-size: .24rem;
            color: #999;
        }

        .moreTips {
            flex: auto;
            text-align: center;
            padding: .4rem 0;
            color: #999;
            background: #f5f5f5;

            p {
                margin-top: .1rem;
            }
        }

        .search-result-footer {
            flex: 0 0 5rem;
            background: #e9f4fc;
            text-align: center;
            padding: 0 .3rem;

            h3 {
                font-weight: 700;
                position: relative;
                color: #1095fa;
                font-size: .32rem;
                display: inline-block;
                padding: .3rem .2rem;
            }

            h3:before,
            h3:after {
                content: "";
                position: absolute;
                width: 66px;
                height: 1px;
                border-top: 1px solid #ccc;
                top: 50%;
            }

            h3::before {
                left: -66px;
            }

            h3::after {
                right: -66px;
            }

            p {
                font-size: .22rem;
                text-align: left;
                line-height: 1.5;
                color: #7790a3;
            }

            .list {
                display: grid;
                grid-template-rows: auto auto;
                grid-template-columns: 1fr 1fr;
                align-items: center;

                li {
                    padding: .3rem .3rem .3rem .8rem;
                    text-align: left;
                    line-height: 1.5;

                    img {
                        height: .66rem;
                        float: left;
                        padding-right: .2rem;
                    }

                    .title {
                        font-weight: 700;
                        color: #1095fa;
                    }
                }
            }

        }
    }
}
</style>
