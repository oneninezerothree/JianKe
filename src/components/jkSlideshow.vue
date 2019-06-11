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
            {imgurl:"https://img02.hua.com/slider/18_youflower_m.jpg"},
            {imgurl:"https://img02.hua.com/slider/19_duanwujie_m.png"},
            {imgurl:"https://img02.hua.com/slider/18_birthday_m.jpg"}
           
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
  margin-top: 31px;
}
</style>