<template>
  <div id="box">
    <div class="box" >
      <div>
        <div class="btn-close"></div>
        <div rel="nofollow" class="btn-dl" data-stat="1090101"></div>
        <img
         
          src="https://img5.jianke.com/mall/common/201906/fec1c3ec8b5c4a5d8c124783e4417447.png"
          alt
          class="box-bg"
        >
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";

export default({
  data(){
    return {a:1}
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  height: 3rem;
}
.box {
  height: 1rem;
  margin: auto;
  background-color: #ff6243;
  width: 100%;
  max-width: 960px;
  min-width: 320px;
  z-index: 10;
  position: relative;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.box .btn-close{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
}
.box .btn-dl{
  height: 1rem;
  width: 2rem;
  float: right;
}
.box .box-bg{
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
}

</style>
