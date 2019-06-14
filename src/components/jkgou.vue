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
    <div class="img-box">
      <img
        src="https://img.jianke.com/mall/vmall/index/201807/838e00d093cc4e2890bab074c479965f.png"
      >
    </div>
    <article class="pro-theme-list">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/b7135a538bc041f58e8797c93d05bf97.jpg"
          alt
          class="pro-pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/0bb89c0bfba5450986baa2636cb18e4b.jpg"
          alt
          class="pro-pic"
        >
      </div>
    </article>
    <article class="pro-theme-list">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/53c7918b357a4756ac35c577eb6eb6c0.jpg"
          alt
          class="pro-pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/5db2cf17babc40beb733b2db40588e74.jpg"
          alt
          class="pro-pic"
        >
      </div>
    </article>
    <article class="pro-sma-list">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/35620e45887b457f8f6c9249a12f8b91.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/800aa0d967264ec7be92ed23e6e21770.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/621bfb05338840c5a500c7409e87a102.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/b51ed6c6a7bb446a84f28f7a83b0b461.jpg"
          alt
          class="pic"
        >
      </div>
    </article>
    <article class="pro-sma-list">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/2667d8488ccb497a831d6358ae02c4a6.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/10e28a63d4964af89672bdf91596af4d.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/49aa63472d574b4da7b7387edcfe7e30.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/5e5d24c9a7a44e6abd80e3c79afd29a0.jpg"
          alt
          class="pic"
        >
      </div>
    </article>
    <article class="pro-sma-list">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/ecd31a91c53048d6936fa711d65ce2e2.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/c698e6cace7642358b623e08e68c9219.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/53adb87503da4d6ab207b4c9eae2a20b.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/af9f85df49d74c2ba924c7fc86840524.jpg"
          alt
          class="pic"
        >
      </div>
    </article>
    <div class="img-box">
      <img
        src="https://img.jianke.com/mall/vmall/index/201807/9312852ad50245b8ba5bc44a8cf0545d.jpg"
      >
    </div>
    <article class="pro-theme-list">
      <div class="item">
        <img
          src="https://img5.jianke.com/mall/vmall/index/201905/332222efa5804d7da67aa397eb005a4b.jpg"
          alt
          class="pro-pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/0cf23dd918d34b30ac9593c70e6504df.jpg"
          alt
          class="pro-pic"
        >
      </div>
    </article>
    <article class="pro-sma-list">
      <div class="item">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/a16317ff70dd41328eb366a821482238.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/4fd0b818b6fc490ba408d198ee8d7b3c.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/788af059b800467da9664d53c8425156.jpg"
          alt
          class="pic"
        >
      </div>
      <div class="item">
        <img
          src="https://img.jianke.com/mall/vmall/index/201807/52698e36493740d19fe8384f8cf88cec.jpg"
          alt
          class="pic"
        >
      </div>
    </article>
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
      ],
      classifyimg: [
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201905/53c7918b357a4756ac35c577eb6eb6c0.jpg"
        },
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201905/5db2cf17babc40beb733b2db40588e74.jpg"
        },
        {
          url:
            "https://img5.jianke.com/mall/vmall/index/201905/332222efa5804d7da67aa397eb005a4b.jpg"
        },
        {
          url:
            "https://img.jianke.com/mall/vmall/index/201807/0cf23dd918d34b30ac9593c70e6504df.jpg"
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
