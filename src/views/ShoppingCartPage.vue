<template>
<<<<<<< HEAD
  <div data-v-26246734 class="shopping-cart view">
    <header data-v-d45bd762 data-v-26246734 id="mallHeader">
      <!-- <router-link to="/home2">Home2</router-link> -->
      <div data-v-d45bd762>
        <router-link to="/">
          <a data-v-d45bd762 rel="nofollow" class="back-btn common-header-btn">
            <i data-v-d45bd762 class="icon iconfont icon-back"></i>
          </a>
        </router-link>
        <span data-v-d45bd762>购物车</span>
        <div data-v-d45bd762 class="toggle-btn common-header-btn">
          <div data-v-26246734 data-v-d45bd762>
            <span data-v-26246734 data-v-d45bd762>编辑</span>
          </div>
          <!---->
        </div>
      </div>
      <nav data-v-d45bd762 style="display: none;">
        <ul data-v-d45bd762>
          <li data-v-d45bd762 class="arrows-tag"></li>
          <li data-v-d45bd762>
            <a data-v-d45bd762 href="/" rel="nofollow">
              <i data-v-d45bd762 class="icon iconfont icon-home"></i>
              <em data-v-d45bd762>首页</em>
            </a>
          </li>
          <li data-v-d45bd762>
            <a data-v-d45bd762 href="/classify/classifyList" class rel="nofollow">
              <i data-v-d45bd762 class="icon iconfont icon-types-search"></i>
              <em data-v-d45bd762>分类搜索</em>
            </a>
          </li>
          <li data-v-d45bd762>
            <a
              data-v-d45bd762
              href="/cart"
              class="router-link-exact-active router-link-active"
              rel="nofollow"
            >
              <i data-v-d45bd762 class="icon iconfont icon-cart"></i>
              <em data-v-d45bd762>购物车</em>
            </a>
          </li>
          <li data-v-d45bd762>
            <a data-v-d45bd762 href="/user" class rel="nofollow">
              <i data-v-d45bd762 class="icon iconfont icon-person-center"></i>
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
    <div data-v-29d0cc56 data-v-26246734 class="cart-bar">
      <div data-v-29d0cc56 class="cart-tip" style="display: none;">请至少选择一件商品才能进行结算！</div>
      <div data-v-29d0cc56 class="select-all-btn">
        <label
          data-v-0fe15bb6
          data-v-29d0cc56
          class="jk-checkbox-wrapper jk-checkbox-wrapper-checked"
        >
          <!---->
          <span data-v-0fe15bb6 class="jk-checkbox jk-checkbox-checked" @click="all">
            <span data-v-0fe15bb6 class="jk-checkbox-inner large"></span>
            <!---->
            <input data-v-0fe15bb6 type="checkbox" class="jk-checkbox-input">
          </span>全选
        </label>
      </div>
      <div data-v-29d0cc56 class="cart-bar-text">
        <p data-v-29d0cc56 class="total">
          合计：￥
          <span data-v-29d0cc56 class="total-money">{{total()}}</span>
        </p>
        <p data-v-29d0cc56 class="privilege">
          <span data-v-29d0cc56>已立省:￥{{total2()-total()}}</span>
        </p>
      </div>
      <a data-v-29d0cc56 rel="nofollow" class="cart-bar-btn" data-stat="1110101">去结算(2)</a>
      <div data-v-29d0cc56 class="batch-action" style="display: none;">
        <span data-v-29d0cc56 class="batch-remove">删除</span>
        <span data-v-29d0cc56 class="batch-fav">移入收藏</span>
      </div>
      <div data-v-750efe71 data-v-29d0cc56 class="rxMix">
        <!---->
      </div>
    </div>
    <div data-v-272cdcd6 data-v-26246734 class="cart-list">
      <div data-v-272cdcd6>
        <div data-v-272cdcd6 class="cart-item-contain">
          <div data-v-30d2d1f6 data-v-272cdcd6 class="cart-item-contain" style="display: none;">
            <div data-v-30d2d1f6 class="cart-item-title rx-title">
              <label
                data-v-0fe15bb6
                data-v-30d2d1f6
                class="jk-checkbox-wrapper jk-checkbox-wrapper-checked"
              >
                <!---->
                <span data-v-0fe15bb6 class="jk-checkbox jk-checkbox-checked">
                  <span data-v-0fe15bb6 class="jk-checkbox-inner large"></span>
                  <!---->
                  <input data-v-0fe15bb6 type="checkbox" class="jk-checkbox-input">
                </span>
                健客大药房网订店送
              </label>
              <span data-v-30d2d1f6 class="cart-item-rxtips">您的订单交由健客线下药店委托第三方快递为您配送</span>
            </div>
          </div>
        </div>
        <!--大盒子-->
        <div data-v-272cdcd6 class="cart-item-contain domex">
          <div data-v-30d2d1f6 data-v-272cdcd6 class="cart-item-contain">
            <div data-v-30d2d1f6 class="cart-item-title">
              <label
                data-v-0fe15bb6
                data-v-30d2d1f6
                class="jk-checkbox-wrapper jk-checkbox-wrapper-checked"
              >
                <!---->
                <span data-v-0fe15bb6 class="jk-checkbox jk-checkbox-checked">
                  <span data-v-0fe15bb6 class="jk-checkbox-inner large"></span>
                  <!---->
                  <input data-v-0fe15bb6 type="checkbox" class="jk-checkbox-input">
                </span>
                健客自营
              </label>
              <span data-v-30d2d1f6 class="postage-tips" ref="hello">{{total3(total())}}</span>
            </div>
            <div data-v-30d2d1f6 class="cart-item-body">
              <div data-v-85f52d9c data-v-30d2d1f6>
                <div data-v-85f52d9c class="cart-item">
                  <div
                    v-for="(gouwuche,index) in gouwuches"
                    :key="index"
                    data-v-85f52d9c
                    class="item-body"
                  >
                    <div data-v-85f52d9c class="item-check">
                      <label
                        data-v-0fe15bb6
                        data-v-85f52d9c
                        class="jk-checkbox-wrapper jk-checkbox-wrapper-checked"
                      >
                        <!---->
                        <span data-v-0fe15bb6 class="jk-checkbox jk-checkbox-checked">
                          <span data-v-0fe15bb6 class="jk-checkbox-inner"></span>
                          <!---->
                          <input data-v-0fe15bb6 type="checkbox" class="jk-checkbox-input">
                        </span>
                        <!---->
                      </label>
                    </div>
                    <!--转到详情页-->
                    <a data-v-85f52d9c href="###" class="item-img">
                      <img
                        data-v-85f52d9c
                        src="//img.jianke.com/suo/upload/prodimage/201811/20181116151839613!200x200.jpg"
                      >
                    </a>
                    <div data-v-85f52d9c class="item-info">
                      <span data-v-85f52d9c class="item-info-name">
                        <!---->
                        {{gouwuche.name}}
                      </span>
                      <p data-v-85f52d9c class="item-info-size">
                        规格：
                        <span data-v-85f52d9c>{{gouwuche.guige}}</span>
                      </p>
                      <div data-v-85f52d9c class="item-info-pricesAndNumber">
                        <p data-v-85f52d9c class="item-info-price">￥ {{gouwuche.xianjia}}</p>
                        <!---->
                        <s data-v-85f52d9c class="item-info-linePrice">￥ {{gouwuche.yuanjiang}}</s>
                        <ul data-v-85f52d9c class="item-info-number">
                          <li
                            data-v-85f52d9c
                            class="reduce"
                            v-on:click="gouwuche.shuliang<=1?1 : gouwuche.shuliang--"
                          >-</li>
                          <li data-v-85f52d9c class="item-number">
                            <input
                              readonly="readonly"
                              data-v-85f52d9c
                              type="number"
                              v-model="gouwuche.shuliang"
                            >
                          </li>
                          <li data-v-85f52d9c class="plus" v-on:click="gouwuche.shuliang++">+</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-v-85f52d9c class="item-foot">
                    <a data-v-85f52d9c class="collects">移入收藏夹</a>
                    <a data-v-85f52d9c class="deletes">删除</a>
                  </div>
                  <!---->
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <!---->
    </div>
  </div>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      gouwuches: [
        {
          name: "五子衍宗丸(修正)(水蜜丸)",
          guige: "6g*10袋(修正)(水蜜丸)",
          xianjia: 26.5,
          yuanjiang: 50.0,
          shuliang: 1
        },
        {
          name: "六子衍宗丸(修正)(水蜜丸)",
          guige: "6g*10袋(修正)(水蜜丸)",
          xianjia: 6.5,
          yuanjiang: 50.0,
          shuliang: 1
        },
        {
          name: "七子衍宗丸(修正)(水蜜丸)",
          guige: "6g*10袋(修正)(水蜜丸)",
          xianjia: 6.5,
          yuanjiang: 50.0,
          shuliang: 1
        }
      ]
    };
  },
  methods: {
    //根据商品是否点亮，计算总价（双向数据绑定）
    // 现价
    total: function() {
      var total = 0;
      this.gouwuches.forEach(function(s) {
        total += s.xianjia * s.shuliang;
      });

      return total;
    },
    // 原价
    total2: function() {
      var total2 = 0;
      this.gouwuches.forEach(function(s) {
        total2 += s.yuanjiang * s.shuliang;
      });
      return total2;
    },
    total3: function(ietm) {
      if (79 > ietm) {
        console.log(this.$refs);
        
        this.arr = this.$refs.innerHTML = "再购" + (79 - ietm) + "元免运费";
        return this.arr;
      } else {
        return console.log("包邮");
      }
    },
    // 全选
    all() {
      let isok = true;
      this.isok = !this.isok;
      // 后面添加的属性active没有vue的set和get方法，需要自己补充添加
      this.gouwuches.forEach(item =>
        this.$set(item, "jk-checkbox-inner[data-v-0fe15bb6]", this.isok)
      );
      // this.services.forEach(item=>Vue.set(item,'active',this.isok));
    }
  }
});
</script>


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
.cart-list .cart-item-contain[data-v-272cdcd6] {
  margin-bottom: 0.2rem;
}
.cart-list .cart-item-contain .cart-item-title[data-v-30d2d1f6] {
  min-height: 0.84rem;
  line-height: 0.84rem;
  font-size: 15px;
  padding: 0 0.2rem;
  color: #333;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  position: relative;
}
.cart-list .cart-item-contain .cart-item-title label[data-v-30d2d1f6] {
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
.cart-list .cart-item-contain .cart-item-title .postage-tips[data-v-30d2d1f6] {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  color: #f78646;
  padding-right: 0.3rem;
  font-weight: 400;
}
.jk-checkbox-checked .jk-checkbox-inner.large[data-v-0fe15bb6] {
  width: 18px;
  height: 18px;
}
.jk-checkbox-checked .jk-checkbox-inner[data-v-0fe15bb6]:after {
  content: "";
  display: table;
  width: 4px;
  height: 8px;
  position: absolute;
  top: 1px;
  left: 4px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1);
  transition: all 0.2s ease-in-out;
}
.jk-checkbox-checked .jk-checkbox-inner.large[data-v-0fe15bb6]:after {
  top: 3px;
  left: 6px;
}
.jk-checkbox-inner[data-v-0fe15bb6]:after {
  content: "";
  display: table;
  width: 4px;
  height: 8px;
  position: absolute;
  top: 1px;
  left: 4px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(0);
  transition: all 0.2s ease-in-out;
}
.cart-item[data-v-85f52d9c] {
  width: 100%;
  background-color: #f5f5f5;
  position: relative;
  margin-bottom: 0.08rem;
}
.cart-item .item-body[data-v-85f52d9c] {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.2rem 0;
}
.cart-item .item-body .item-check[data-v-85f52d9c] {
  flex: 0 1 0.36rem;
  height: 0.36rem;
  align-self: center;
  margin: 0 0.1rem;
}
.jk-checkbox-inner[data-v-0fe15bb6] {
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  border: 1px solid #d7dde4;
  border-radius: 50%;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.jk-checkbox-checked .jk-checkbox-inner[data-v-0fe15bb6] {
  border-color: #39f;
  background-color: #39f;
}
.jk-checkbox-input[data-v-0fe15bb6] {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
}
.cart-item .item-body .item-img[data-v-85f52d9c] {
  flex: 0 0 1.16rem;
  display: inline-block;
  width: 1.16rem;
  height: 1.16rem;
  padding: 0.1rem;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  position: relative;
}
.cart-item .item-body .item-img > img[data-v-85f52d9c] {
  width: 100%;
  height: 100%;
}
.cart-item .item-body .item-info[data-v-85f52d9c] {
  flex: 1;
  padding: 0 0.1rem;
  position: relative;
}
.cart-item .item-body .item-info .item-info-name[data-v-85f52d9c] {
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cart-item .item-body .item-info .item-info-size[data-v-85f52d9c] {
  color: #999;
  font-size: 12px;
  line-height: 1.3;
  margin: 0.06rem 0 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 3rem;
}
.cart-item .item-body .item-info .item-info-pricesAndNumber[data-v-85f52d9c] {
  overflow: hidden;
}
.cart-item .item-body .item-info .item-info-size[data-v-85f52d9c] {
  color: #999;
  font-size: 12px;
  line-height: 1.3;
  margin: 0.06rem 0 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 3rem;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-price[data-v-85f52d9c] {
  color: #ff6464;
  font-size: 13px;
  text-align: left;
  line-height: 0.42rem;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-linePrice[data-v-85f52d9c] {
  color: #ccc;
  font-size: 12px;
  text-align: left;
  float: left;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-number[data-v-85f52d9c] {
  width: 1.4rem;
  height: 0.4rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.06rem;
  background-color: #fff;
  float: right;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-number
  li.plus[data-v-85f52d9c],
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-number
  li.reduce[data-v-85f52d9c] {
  width: 0.4rem;
  font-size: 14px;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-number
  li[data-v-85f52d9c] {
  color: #666;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 12px;
  text-align: center;
  display: inline-block;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-number
  li.item-number[data-v-85f52d9c] {
  width: 0.6rem;
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.cart-item
  .item-body
  .item-info
  .item-info-pricesAndNumber
  .item-info-number
  li.item-number
  input[data-v-85f52d9c] {
  width: 0.56rem;
  font-size: 12px;
  text-align: center;
  border: none;
}
.cart-item .item-foot[data-v-85f52d9c] {
  height: 12px;
  line-height: 12px;
  text-align: right;
  padding: 0.16rem 0.3rem 0.2rem;
}
.cart-item .item-foot .collects[data-v-85f52d9c],
.cart-item .item-foot .deletes[data-v-85f52d9c] {
  font-size: 12px;
  color: #333;
  margin-left: 0.3rem;
}
</style>
=======
<div>
    This's ShopPingCartPage!
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    created() {
        this.$store.state.CommonBottomShow = true;
    },
});
</script>
>>>>>>> a82b593fd11814bebd609ea8b65f7a77c60e1617
