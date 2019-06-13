<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in pic" :key="item.pic">
        <span class="small"><img :src="item.imgurl"></span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Vue from "vue";
  
export default {
  data() {
    return {
      pic:[
            {imgurl:"https://img5.jianke.com/mall/vmall/index/201906/f9f1cde934fa4968a4cdcb83bf78f3d2.jpg"},
            {imgurl:"https://img5.jianke.com/mall/vmall/index/201906/11c0a190409c477ea402dbd17bc54e8f.jpg"},
            {imgurl:"https://img5.jianke.com/mall/vmall/index/201906/5c1643f57dcd4d92b98c5d55fb4b2bed.jpg"},
            {imgurl:"https://img5.jianke.com/mall/vmall/index/201906/05dd0f5a08c04931ad87ec747ca11ecc.jpg"}
          ]
    }
  }
 
};
</script>
<style scoped lang="scss">


.el-carousel__item span {
    width:10%;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    img{
      width:100%;
      height:150px;
      margin:0;
    }
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{
  position: relative;;
  top:0;
  left:0;
}
</style>