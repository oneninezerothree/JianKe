<template>
  <div>
    <div class="img-box" style="margin-bottom: 0px;">
      <img :src="url">
    </div>
    <div class="img-box" style="margin-bottom: 0px;">
      <img
        src="https://img5.jianke.com/mall/vmall/index/201906/6256937b79324656b747ae508536b07d.gif"
      >
    </div>
    <article class="pro-theme-list" style="margin-bottom: 0px;">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201906/7bf3028fd7864599adcc3f55409463b0.jpg"
          class="pro-pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201906/a7120c7b873e43b480f83df26f6032ad.jpg"
          class="pro-pic"
        >
      </div>
    </article>
    <article class="pro-theme-list" style="margin-bottom: 0px;">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201906/1821a12e2cd0418f8df74ceefcd1dead.jpg"
          class="pro-pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201906/0755ca51b2e7455e99dc713e1b51594c.jpg"
          class="pro-pic"
        >
      </div>
    </article>
    <article class="pro-sma-list">
      <div class="item" v-for="picdiv in picdivs" :key="picdiv.url">
        <img :src="picdiv.url" class="pic">
      </div>
    </article>
    <div class="img-box" style="margin-bottom: 0px;">
      <img
        src="https://img5.jianke.com/mall/vmall/index/201906/c794b644a0554d118bdcd6811d1d69fc.jpg"
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://img5.jianke.com/mall/vmall/index/201906/ed8bb71c0c284f109d2627df0b7cf561.gif",
      picdivs: [
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201906/f22d347db2fb4b7685885f1259feeea2.jpg"
        },
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201906/574e4647beb94bf2a167c80f3d12ff10.jpg"
        },
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201906/3c0be1b99d704c909b0d4c43e339dc55.jpg"
        },
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201906/d7c2cc2a15e4491f8256eab100e43126.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
element.style {
  margin-bottom: 0px;
}
.img-box {
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
}
.pro-theme-list {
  overflow: hidden;
  display: flex;
  justify-content: center;
  .item {
    background-color: #fff;
    border-radius: 0.1rem;
    overflow: hidden;
    position: relative;
    .pro-pic {
      display: block;
      width: 100%;
    }
  }
}
.pro-sma-list {
  overflow: hidden;
  display: flex;
  justify-content: center;
  .item {
    border-radius: 0.1rem;
    background: #fff;
    text-align: center;
    overflow: hidden;
    .pic {
      width: 100%;
      display: block;
    }
  }
}
</style>
