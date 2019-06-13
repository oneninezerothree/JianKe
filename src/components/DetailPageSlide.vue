<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in slideImg" :key="index">
            <a href="javascript:;"><img :src="item" alt=""></a>
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination-wrap">
        <div class="swiper-pagination num">
        </div>
    </div>
</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default Vue.extend({
    data() {
        return {
            slideImg: [
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
                'https://img.tianditao.com/mall/product/201906/d8491b7499dc4069baa429e63aed6cc8.jpg',
            ],
        };
    },
    mounted() {
        const mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
        });
    },
});
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 300px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 100%;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-align: center;
    border: 1px solid transparent;
    border-left: none;
    border-right: none;

    a {
        width: 80%;
        height: 100%;
        margin: 0 auto;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.swiper-pagination-wrap {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 24px;
    line-height: 20px;
    text-align: center;

    .swiper-pagination {
        border-radius: 10px;
        color: #fff;
        background: rgba(0, 0, 0, .3);
        padding: 0 8px;
        width: auto;

        span {
            color: #fff;
            background: rgba(0, 0, 0, .3);
            padding: 0 8px;
            border-radius: 10px;
        }
    }
}

.swiper-pagination.num {
    text-align: right;
    left: auto;
    right: 15px;
    bottom: -5px;
}
</style>
