<template>
<section class="classify-box">
    <div class="classify-list">
        <div class="classify-ad"><a  href="https://m-zt.jianke.com/activity/mobile/act-09143a71-cd73-430e-916e-849d34c0608e"><img  src="https://img.jianke.com/mall/common/201811/4276f3cf28294e77bdf240e0c7edd023.jpg"></a></div>
        <ul>
            <routerLink v-for="(item, index) in 11" :key="index" to="/list" tag="li"><img  src="https://img.jianke.com/mall/common/201805/9ecfd485765a4f37a9dde994d45e1d2a.jpg"><span >高血压</span></routerLink>
        </ul>
    </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            urlData: 1,
        };
    },
});
</script>

<style lang="scss" scoped>
.classify-box {
    padding: .16rem;
    margin-top: 1.8rem;

    .classify-list {
        margin-top: .16rem;
        padding-left: 1.6rem;
        padding-bottom: 1.2rem;

        .classify-ad {
            img {
                display: block;
                width: 100%;
            }
        }

        >ul {
            display: flex;
            flex-wrap: wrap;

            >li {
                width: 31.33333333%;
                margin: 1%;
                overflow: hidden;
                text-align: center;
                font-size: .24rem;
                color: #666;
                letter-spacing: 1px;

                img {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
}
</style>
