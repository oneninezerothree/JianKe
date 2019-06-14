<template>
  <section class="jktt-box">
    <div class="jktt-icon">
      <img :src="url">
    </div>
    <div class="jktt-list">
      <ul class="list-box" style="transform: translate(0px, 0px) translateZ(0px);">
        <li class="item" v-for="(auto) in linkAdvise" :key="auto.number" >
          <span class="jktt-type">文章</span>
          {{auto.span}}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      linkAdvise: [
        {
          number: 1,
          txt: "文章",
          span: "男性最不容轻视的5大健康问题，你中招了吗？"
        },
        {
          number: 2,
          txt: "文章",
          span: "幸福专家说｜早泄，也要辩证看"
        },
        {
          number: 3,
          txt: "文章",
          span: "你吃东西老是塞牙，饭后口臭？原来“元凶”是它！"
        },
        {
          number: 4,
          txt: "文章",
          span: "出现过敏怎么办"
        },
        {
          number: 5,
          txt: "文章",
          span: "有这6大特征的人，更加长寿？中国这个城市的人平均寿命第一"
        },
        {
          number: 6,
          txt: "文章",
          span: "没超过这个体重就不是胖，硬要减肥，会摧毁你的健康！"
        }
      ],
      url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAABxVBMVEUAAABERERERERERERERERCQkJBQUFBQUFERERCQkJERERERERDQ0NERERERERBQUFBQUE8PDxERERERERERERERERERERERERERERERERERERERERERERERERERERDQ0NERERERERDQ0NBQUFBQUFAQEAzMzMnzo5EREQs25tEREREREREREREREQ6Ojot3JxEREQ8PDw0NDRERERBQUFERERERERCQkIs2pojyIdEREQlyokt3JxAQEA1NTUjxYQp1JREREQzMzMt3Jw1NTVEREREREQr15cxMTFBQUElzIs0NDQs2pogwX8t3Jw/Pz80NDQr2JgkyYgkx4c3Nzcp05MiwYE0NDQ0NDQt3Jw3Nzct3JwiwoEhwYE6Ojot3JwwMDA9PT0rKysgv34wMDAgvn06Ojot3JwwMDA9PT0t3JwoKCg7Ozso0pMt3JwhwoEmzItBQUEr1ZYwMDAt3Jwt3JwiIiIt25tEREQ3NzczMzMt3Jw8PDw5OTkwMDA2NjYiIiJAQEBBQUEsLCwoKCgbGxss25sr2Zkn0I8q15cp1pUp1JMo0pImzIsjx4Y4ODgtLS0lJSUrKyseHh4xMTESEhIRERGS+MmmAAAAeHRSTlMA9/O3FiQHA/kt7+rQvo8/FAv+7NzJr6qAeRuZlIhrX09LPDAoHw749ezm4cbBv6miloBvZVdENiATE/j06+ja2dXQwL2xp56QdHFrUTQZ9/Hv7+7u7ePi4N/QzMW5tbOwq6ikn5GOiYeGenFpZmRiW1RMSzw2MCpVM/xQAAAEBklEQVRYw82XZ2PTMBCGL2SHtKQrDV20hRY6aAttKWXvvffee28cZS+6oBP4vegUK7KNrLTkC+8HSec7P5FOJzsGiTQUN1R+Yfet9WLHBJpJdaMsxlarnG7d3SpFoFarEKj9ujsgR6C8CgRfEcnnSZb269O/03NBoIqijGvWfi79WgIu7hfKzc/n5mh/LJ1OJ4eliNRSoVBQIFJUCQDvHuxdIuMGRDK/sJAGsF1InCoD0I5mGEC61p/J+XkFQu/D2LXLEfFEIpoqiwj5cAc9coSWzWTiklwQVAkxjG01gHxHUGURQWzXqxGaXNzPzdIdFSCMzsoRK8wFuHKFQm53RYg1aapD0gJWL0T4TyapjlWE2BKnGvk7bAWIKuzGVAiUcparsaupBBHCtg+WkQuLKfxrsHVWhGhjx0ySseUjWrAdUSOgO58nu0vmWVqMNSD8bEM65QgP9g46+EhLZwBNdn0PrcUvAlHckJA8F03o66WDAVo6z9FkiAMU+EggGLnWK0dsQ2cVNLUWnyltxmK87wfTSX3ZDTJF0Le2GHJYv2EVQKelOldhm88nU/HsX7kIYr+BBdaH9BsaAaDajDiCLZEiWMlsZoFOl35DEAfQ4XQYEDsa6TyyKZLImAn89KyBksKN1e1e+P+F/zu6VvTPRxrslFyVqrcThMYHd938xIMdEoRc+0HoYCwW2/WVBy8LYYn8HKP6dtQW0ZAli8lXYNSzRZLVqoR9CgkT+2wRHWQhRxLrQGgLyS0Qh19c2I6Eqcv2uX9ACZnatdz0DGUSJLdIbaHBbxPTMxvtEd0HWOE63cxyN2gaZdzj3jd3Dz49c+b89MykAgGuIPP4mtdDU4SdysydGt33AjPZc+rD98kfFxQIqGmmjng0yo9RbauXu65jJqemX5/4MbtXXYedAxTAT3LVmHD0YCanv0++OzF7S47QJKLTmcvw2MHYxNQMXcXO028fLgsh1sNjt/cwwuzslfHxcoi64JFht//JjUu4Ho5AxtF9G3de3Hv78WkQiAokR6j92/p9ik8WVn7r6uwjHBEAhZsf+9VlIjS1EFEuonKERe4oUzfYivnBXp5DRcTJf0Z4GjWm7Dm/bC8dpk3dxL/+jGrq14pKkWtdlmPKvzgFoh4HLjBpNKDPIUoIuWqeB3uxNpgQm3HQAQZtcOqPgeNbCVUiIF6j/C0+ZEI046BFhHQ1+/R6HAWgjDlN840Y+Owx1cZWxBFtLD1uYHK1h3mR17P5b00ww9mxQz8Efcym4d5ICbGheMOYpXAO6/e08gt8O3gqakXZYzJQJkRAvCciEsT70qi+WIZ1VoSvJQRC6zZZEWEBqwYmf68RsanhuGWLu4YCRkSgxVNC9PPfcmEp/gEhDEYIZUGHjQAAAABJRU5ErkJggg=="
    };
  }
};
</script>

<style scoped lang="scss">
ul li {
  list-style: none;
}
img {
  border-style: none;
}
.jktt-box {
  height: 0.72rem;
  overflow: hidden;
  display: flex;
  padding: 0.1rem 0.24rem;
  background: #fff;
  .jktt-icon {
    flex: 0 0 0.8rem;
    padding: 0.1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
    }
  }
  .jktt-list {
    font-size: 0.24rem;
    flex: 1 1 5.6rem;
    padding: 0 0.08rem;
    height: 0.72rem;
    overflow: hidden;
    .item {
      padding: .05rem 0.48rem .05rem 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      transition-duration: 0.6s;
      .jktt-type {
        display:inline-block;
        font-size:.16rem;
        border:1px solid #f34242;
        color:#f34242;
        border-radius:2px;
        padding:.02rem .04rem;
      }
    }

  }
}


</style>
