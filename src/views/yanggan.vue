<template>
  <div>
    <div>
      <div class="nav-tab" data-v-56b50de9 data-v-39623280>
        <div class="scroll-wrap" data-v-56b50de9>
          <div class="scroll-inner" data-v-56b50de9>
            <router-link to="/news">
              <span data-v-56b50de9>推荐</span>
            </router-link>
            <router-link to="/guanzhu">
              <span data-v-56b50de9 class>关注</span>
            </router-link>
            <router-link to="/guanai">
              <span data-v-56b50de9 >关爱糖友</span>
            </router-link>
            <router-link to="/yanggan">
              <span data-v-56b50de9 class="active">养肝护肝</span>
            </router-link>
            <router-link to="/xinnao">
              <span data-v-56b50de9 class>心脑血管</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:40px 0 56px;">
        <h2>养肝</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content[data-v-39623280],
.home-container[data-v-39623280] {
  height: 100%;
  overflow: hidden;
}
.content[data-v-39623280] {
  background: #f5f5f5;
}
.nav-tab[data-v-56b50de9] {
  height: 0.74rem;
  font-size: 0;
  text-align: center;
  padding: 0 0.4rem 0 0.3rem;
  box-sizing: border-box;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
}
.nav-tab .scroll-wrap[data-v-56b50de9] {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  height: 0.74rem;
  font-size: 0;
}
.nav-tab[data-v-56b50de9]:after {
  content: "";
  width: 100%;
  height: 1px;
  background: #f5f5f5;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
}
.nav-tab .scroll-wrap[data-v-56b50de9]:before {
  border-left: 2px solid #fff;
  left: 0;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #fff),
    to(hsla(0, 0%, 100%, 0))
  );
  background: -webkit-linear-gradient(left, #fff, hsla(0, 0%, 100%, 0));
  background: -o-linear-gradient(left, #fff 0, hsla(0, 0%, 100%, 0) 100%);
  background: linear-gradient(90deg, #fff 0, hsla(0, 0%, 100%, 0));
}
.nav-tab .scroll-wrap .scroll-inner[data-v-56b50de9] {
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
}
.nav-tab span[data-v-56b50de9] {
  font-size: 0.3rem;
  height: 0.74rem;
  padding: 0.17rem 0;
  display: inline-block;
  margin: 0 0.1rem;
  vertical-align: middle;
  box-sizing: border-box;
}
.nav-tab span[data-v-56b50de9]:last-child {
  margin-right: 0.25rem;
}
.active {
  font-weight: 700;
  position: relative;
  border-bottom: 1px solid blue;
}
// 底部
</style>
