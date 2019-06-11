<template>
  <div class="shopping-cart view" data-v-26246734>
    <header id="mallHeader" data-v-d45bd762 data-v-26246734>
      <div data-v-d45bd762>
        <router-link to="/toutiao">
          <a rel="nofollow" class="back-btn common-header-btn" style="display:;" data-v-d45bd762>
            <i class="icon iconfont icon-back" data-v-d45bd762></i>
          </a>
        </router-link>
        <span data-v-d45bd762>购物车</span>
        <div class="toggle-btn common-header-btn" data-v-d45bd762>
          <div style="display:none;" data-v-d45bd762 data-v-26246734>
            <span data-v-d45bd762 data-v-26246734>编辑</span>
          </div>
          <!---->
        </div>
      </div>
      <nav style="display:none;" data-v-d45bd762>
        <ul data-v-d45bd762>
          <li class="arrows-tag" data-v-d45bd762></li>
          <li data-v-d45bd762>
            <a href="/" rel="nofollow" data-v-d45bd762>
              <i class="icon iconfont icon-home" data-v-d45bd762></i>
              <em data-v-d45bd762>首页</em>
            </a>
          </li>
          <li data-v-d45bd762>
            <a href="/classify/classifyList" rel="nofollow" data-v-d45bd762 class>
              <i class="icon iconfont icon-types-search" data-v-d45bd762></i>
              <em data-v-d45bd762>分类搜索</em>
            </a>
          </li>
          <li data-v-d45bd762>
            <a
              href="/cart"
              rel="nofollow"
              class="router-link-exact-active router-link-active"
              data-v-d45bd762
            >
              <i class="icon iconfont icon-cart" data-v-d45bd762></i>
              <em data-v-d45bd762>购物车</em>
            </a>
          </li>
          <li data-v-d45bd762>
            <a href="/user" rel="nofollow" data-v-d45bd762 class>
              <i class="icon iconfont icon-person-center" data-v-d45bd762></i>
              <em data-v-d45bd762>个人中心</em>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div data-v-26246734 class="cart-login-tip">
      <span data-v-26246734>登录后将保存购物车商品</span>
      <span data-v-26246734 class="login-btn">登录</span>
    </div>
    <div class="cart-bar" style="display:none;" data-v-29d0cc56 data-v-26246734>
      <div class="cart-tip" style="display:;" data-v-29d0cc56>请至少选择一件商品才能进行结算！</div>
      <div class="select-all-btn" data-v-29d0cc56>
        <label
          class="jk-checkbox-wrapper jk-checkbox-wrapper-checked"
          data-v-0fe15bb6
          data-v-29d0cc56
        >
          <!---->
          <span class="jk-checkbox jk-checkbox-checked" data-v-0fe15bb6>
            <span class="jk-checkbox-inner large" data-v-0fe15bb6></span>
            <!---->
            <input type="checkbox" checked="checked" class="jk-checkbox-input" data-v-0fe15bb6>
          </span>全选
        </label>
      </div>
      <div class="cart-bar-text" style="display:;" data-v-29d0cc56>
        <p class="total" data-v-29d0cc56>
          合计：￥
          <span class="total-money" data-v-29d0cc56>0</span>
        </p>
        <p class="privilege" data-v-29d0cc56>
          <span data-v-29d0cc56>已立省:￥0</span>
        </p>
      </div>
      <a rel="nofollow" class="cart-bar-btn" data-v-29d0cc56 data-stat="1110101">去结算(0)</a>
      <div class="batch-action" style="display:none;" data-v-29d0cc56>
        <span class="batch-remove" data-v-29d0cc56>删除</span>
        <span class="batch-fav" data-v-29d0cc56>移入收藏</span>
      </div>
      <div class="rxMix" data-v-750efe71 data-v-29d0cc56>
        <!---->
      </div>
    </div>
    <div class="cart-list" data-v-272cdcd6 data-v-26246734>
      <!---->
      <!---->
      <div class="no-car" data-v-272cdcd6>
        <img
          src="data:image/png;base64,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"
          alt
          data-v-272cdcd6
        >
        <div class="tips" data-v-272cdcd6>购物车空空如也，感觉不会再爱了ㄟ( ▔, ▔ )ㄏ</div>
        <a href="/" class="index-btn router-link-active" data-v-272cdcd6>随便逛逛</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shopping-cart[data-v-26246734] {
  width: 100vw;
  min-height: 100vh;
  background-color: #f0f0f0;
  box-sizing: border-box;
  padding-bottom: 2rem;
  overflow-x: hidden;
}
header > div[data-v-d45bd762] {
  height: 0.88rem;
  text-align: center;
  color: #111;
  background: #fdfdfd;
  font-size: 17px;
  position: relative;
  line-height: 0.88rem;
}
nav[data-v-d45bd762] {
  height: 1.2rem;
  width: 100%;
  left: 0;
  z-index: 99;
  background-color: #f2f2f2;
  position: relative;
}
header > div[data-v-d45bd762],
header > nav[data-v-d45bd762] {
  border-bottom: 1px solid #eee;
}
element.style {
  display: none;
}
header > div .back-btn[data-v-d45bd762] {
  left: 10px;
  position: absolute;
  line-height: 0.48rem;
}
header > div .common-header-btn[data-v-d45bd762] {
  width: 0.48rem;
  height: 0.48rem;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
header > div[data-v-d45bd762] {
  height: 0.88rem;
  text-align: center;
  color: #111;
  background: #fdfdfd;
  font-size: 17px;
  position: relative;
  line-height: 0.88rem;
}
header > div .toggle-btn[data-v-d45bd762] {
  width: auto;
  right: 10px;
  position: absolute;
  line-height: 0.48rem;
}
header > div[data-v-d45bd762] {
  height: 0.88rem;
  text-align: center;
  color: #111;
  background: #fdfdfd;
  font-size: 17px;
  position: relative;
  line-height: 0.88rem;
}
header > div .toggle-btn[data-v-d45bd762] {
  width: auto;
  right: 10px;
  position: absolute;
  line-height: 0.48rem;
}
.shopping-cart .cart-login-tip[data-v-26246734] {
  background: #fff;
  margin-bottom: 0.3rem;
  text-align: center;
  padding: 0.2rem 0.3rem;
  font-size: 14px;
  color: #666;
}
.shopping-cart .cart-login-tip[data-v-26246734] {
  background: #fff;
  margin-bottom: 0.3rem;
  text-align: center;
  padding: 0.2rem 0.3rem;
  font-size: 14px;
  color: #666;
}
.shopping-cart .cart-login-tip .login-btn[data-v-26246734] {
  padding: 0.04rem 0.18rem;
  color: #fff;
  margin-left: 0.3rem;
  background: #61b1f4;
  border-radius: 0.08rem;
}
.cart-bar[data-v-29d0cc56] {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 1rem;
  left: 0;
  background-color: #fff;
  z-index: 9;
  border-top: 1px solid #e5e5e5;
}
.cart-bar .cart-tip[data-v-29d0cc56] {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 12px;
  text-align: center;
  position: absolute;
  top: -0.36rem;
  width: 100%;
}
.cart-bar .select-all-btn[data-v-29d0cc56] {
  width: 1.4rem;
  line-height: 1rem;
  text-align: center;
  font-size: 16px;
  float: left;
  position: relative;
}
.jk-checkbox-wrapper[data-v-0fe15bb6] {
  display: inline-block;
}
.jk-checkbox[data-v-0fe15bb6] {
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  line-height: 1;
  position: relative;
  margin-right: 0.1rem;
}
.cart-bar .cart-bar-text[data-v-29d0cc56] {
  width: calc(100% - 3.4rem);
  float: left;
  padding: 0.16rem 0;
}
.cart-bar .cart-bar-text .total[data-v-29d0cc56] {
  height: 0.38rem;
  line-height: 0.38rem;
  color: #333;
  font-size: 13px;
}
.cart-bar .cart-bar-text .privilege[data-v-29d0cc56] {
  color: #999;
  font-size: 12px;
  height: 14px;
  line-height: 14px;
  text-align: left;
}
.cart-bar .cart-bar-text .total .total-money[data-v-29d0cc56] {
  font-size: 18px;
}
.cart-bar .cart-bar-text .privilege span[data-v-29d0cc56] {
  margin-right: 5px;
}
.cart-bar .cart-bar-btn[data-v-29d0cc56] {
  width: 2rem;
  float: right;
  background: #f53b10;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.cart-bar .batch-action[data-v-29d0cc56] {
  float: right;
}
.cart-bar .batch-action .batch-remove[data-v-29d0cc56] {
  border: 1px solid #999;
  color: #999;
}
.cart-bar .batch-action span[data-v-29d0cc56] {
  display: inline-block;
  width: 1.4rem;
  text-align: center;
  margin: 0.23rem 0.2rem 0 0;
  font-size: 14px;
  padding: 0.1rem;
  border-radius: 0.04rem;
}
.cart-bar .batch-action .batch-fav[data-v-29d0cc56] {
  background: #61b2f4;
  color: #fff;
}
.cart-list[data-v-272cdcd6] {
  width: 100%;
  background-color: #eee;
  margin: 0.2rem auto 0;
}
.no-car[data-v-272cdcd6] {
  text-align: center;
  margin-top: 1rem;
  overflow: hidden;
}
.no-car > img[data-v-272cdcd6] {
  display: block;
  width: 92px;
  margin: 0.6rem auto 0;
}
.no-car .tips[data-v-272cdcd6] {
  color: #999;
  margin-top: 0.6rem;
  font-size: 0.24rem;
}
.no-car .index-btn[data-v-272cdcd6] {
  width: 3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  display: block;
  margin: 0.4rem auto 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  letter-spacing: 1px;
}
</style>
