<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html {
font-size: 50px !important;
line-height: 1.15;
}

body {
font-family: Microsoft YaHei, tahoma, arial;
}

html,
body {
width: 100%;
overflow-x: hidden;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;
font-size: 14px;
}
@import url(../public/css/iconfont.css);
</style>
