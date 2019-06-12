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
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://img5.jianke.com/mall/vmall/index/201906/ed8bb71c0c284f109d2627df0b7cf561.gif"
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
</style>
