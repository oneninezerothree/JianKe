<template>
<header id="mallHeader" class="class-head">
    <div>
        <a rel="nofollow" class="back-btn common-header-btn">
        <i class="icon iconfont icon-back"></i>
      </a>
        <span>全部分类</span>
        <div class="toggle-btn common-header-btn">
            <a rel="nofollow" class="common-width">
          <i class="icon iconfont icon-more"></i>
        </a>
        </div>
    </div>
    <nav style="display: none;">
        <ul>
            <li class="arrows-tag"></li>
            <li>
                <a href="/" rel="nofollow">
            <i class="icon iconfont icon-home"></i>
            <em>首页</em>
          </a>
            </li>
            <li>
                <a
            href="/classify/classifyList"
            class="router-link-exact-active router-link-active"
            rel="nofollow"
          >
            <i class="icon iconfont icon-types-search"></i>
            <em>分类搜索</em>
          </a>
            </li>
            <li>
                <a href="/cart" class rel="nofollow">
            <i class="icon iconfont icon-cart"></i>
            <em>购物车</em>
          </a>
            </li>
            <li>
                <a href="/user" class rel="nofollow">
            <i class="icon iconfont icon-person-center"></i>
            <em>个人中心</em>
          </a>
            </li>
        </ul>
    </nav>
</header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.class-head {
    z-index: 111;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}

header>div,
header>nav {
    border-bottom: 1px solid #eee;
}

header {
    >div {
        height: 0.88rem;
        text-align: center;
        color: #111;
        background: #fdfdfd;
        font-size: 17px;
        position: relative;
        line-height: 0.88rem;

        .back-btn {
            left: 10px;
            position: absolute;
            line-height: 0.48rem;
        }

        .common-header-btn {
            width: 0.48rem;
            height: 0.48rem;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
        }

        .toggle-btn {
            width: auto;
            right: 10px;
            position: absolute;
            line-height: 0.48rem;
        }
    }

    nav {
        height: 1.2rem;
        width: 100%;
        left: 0;
        z-index: 99;
        background-color: #f2f2f2;
        position: relative;

        ul {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;

            li {
                flex: 1 25%;
                width: 25%;
                list-style: none;
                text-align: center;

                a {
                    display: inline-block;
                }
            }

            li.arrows-tag {
                width: 10px;
                height: 10px;
                border-top: 1px solid #eee;
                border-left: 1px solid #ddd;
                position: absolute;
                right: 17px;
                top: -7px;
                background-color: #f2f2f2;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            .icon-cart,
            .icon-home,
            .icon-person-center,
            .icon-types-search {
                font-size: 20px;
            }

            em {
                display: block;
                font-size: 13px;
                text-align: center;
                font-style: normal;
                text-decoration-style: none;
                margin-top: .14rem;
            }
        }
    }

}
</style>
