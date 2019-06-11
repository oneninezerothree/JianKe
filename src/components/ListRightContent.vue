<template>
<div>
    <section class="classify-box">
        <div class="classify-list">
            <div class="classify-ad"><a  href="https://m-zt.jianke.com/activity/mobile/act-09143a71-cd73-430e-916e-849d34c0608e"><img  src="https://img.jianke.com/mall/common/201811/4276f3cf28294e77bdf240e0c7edd023.jpg"></a></div>
            <ul>
                <li><img  src="https://img.jianke.com/mall/common/201805/9ecfd485765a4f37a9dde994d45e1d2a.jpg"><span >高血压</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/f04a346031334d30bb9a6de707da02c7.jpg"><span >高血脂</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/13f4d816a02940f9a729c521c9cd0e21.jpg"><span >冠心病</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/72f02eaedd8f46fc93ab70a2f3880ebb.jpg"><span >心绞痛</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/c34982573b3a416a82b574efb78cc4f3.jpg"><span >心律失常</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/1b2c968acad04acaa79d0dd6a11a0442.jpg"><span >脉管炎</span></li>
                <li><img  src="https://img.jianke.com/app/upload/xinnaoxueke/dongmaiyinghua.jpg"><span >动脉硬化</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/eac21c8a440640658a15f849add9940b.jpg"><span >中风</span></li>
                <li><img  src="https://img.jianke.com/mall/common/201805/ff693edefefe43409a1235069522abe5.jpg"><span >心肌病</span></li>
                <li><img  src="https://img.jianke.com/app/upload/xinnaoxueke/diàojiēsāngāo.jpg"><span >调节三高</span></li>
                <li><img  src="https://img.jianke.com/app/upload/xinnaoxueke/xuèyājì.jpg"><span >血压计</span></li>
                <li><img  src="https://img.jianke.com/app/upload/xinnaoxueke/xinnaoxuekeqitayongyao.jpg"><span >其他用药</span></li>
            </ul>
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
