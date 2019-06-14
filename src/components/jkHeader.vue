<template>
  <div>
    <div class="search-bar">
      <div class="background" style="opacity: 0;"></div>
      <div class="info">
        <div class="info-logo">
          <i class="icon iconfont icon-jianke-logo"></i>
        </div>
        <div class="info-bar">
          <i class="icon iconfont icon-search"></i>
          <input type="text" placeholder="西乐葆低至33">
        </div>
        <div class="info-login" @touchstart="login()">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script  lang="js">
import Vue from "vue";

export default {
  data(){
    return {
      pathna:'jklogin'
    }
  },
  methods:{
    login(){
        // console.log(this.$router);
        this.$router.push({name:"jklogin"});
    },
    
  }
};
</script>
<style scoped lang="scss">
.search-bar {
  position: absolute;
  height: 0.86rem;
  width: 100%;
  z-index: 999;
  max-width: 960px;
  min-width: 320px;
  & .background {
    background: #0082f0;
  }
  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    .info-logo {
      flex: 0 1 1.2rem;
      width: 1.2rem;
      padding-left: 0.1rem;
      box-sizing: border-box;
      color: #fff;
      i {
        font-size: 0.4rem;
      }
    }
    .info-bar {
      background: #fff;
      border-radius: 0.32rem;
      flex: 0 auto 5rem;
      width: 4.1rem;
      padding: 0 0.24rem;
      height: 0.52rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      border: 1px solid #e3e3e3;
      i {
        flex: 0 1 0.32rem;
        font-size: 0.32rem;
        color: #ccc;
      }

      input {
        flex: auto;
        border: none;
        padding-left: 0.1rem;
      }
    }
  }

  .info-login {
    flex: 0 1 0.7rem;
    width: 0.7rem;
    text-align: center;
    color: #fff;
    font-size: 0.26rem;
  }
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-jianke-logo:before {
  content: "\e64a";
}
.icon-search:before {
  content: "\e612";
}
</style>

