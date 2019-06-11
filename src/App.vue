<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import url(../public/css/iconfont.css);
article,
blockquote,
body,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
img,
input,
legend,
li,
p,
pre,
section,
textarea,
ul {
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
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
</style>
