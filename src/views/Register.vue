<template>
  <div>
    <div id="app">
      <div class="register-view view">
        <header id="mallHeader">
          <div>
            <a rel="nofollow" class="back-btn common-header-btn">
              <i class="icon iconfont icon-back"></i>
            </a>
            <span>用户注册</span>
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
                <a href="/classify/classifyList" class rel="nofollow">
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
        <div class="register-box">
          <section class="page">
            <div class="tel-item">
              <input type="tel" placeholder="请输入您的手机号" maxlength="11" class="inputStyle">
              <!---->
            </div>
            <!---->
            <div class="code-item">
              <input type="text" placeholder="验证码" class="inputStyle" >
              <button v-show="sendAuthCode" class="code-btn" @touchstart="getAuthCode">获取验证码</button>
              <button v-show="!sendAuthCode" class="code-btn computing">重新发送({{auth_time}}秒)</button>
              <!---->
            </div>
            <div class="password-item">
              <input type="text" placeholder="请输入6-16位密码" maxlength="16" class="inputStyle">
              <div class="pwd-switch">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByklEQVRYR+2U4U3DUAyEzxvABjABMAF1FqBMAExAmQA2oEwAI8ACcZkAmAA2ACY4dJGDShqSpn8QUp5UtVL97LvP9jP88bE/ro9RwEhgJPC/CUTEFYA3d7/b9D3pJRAR+wC23H3RLFKW5cLMFu4uIStHd939uUvcOgJmAM7dfXeIgIg4JTkrikIGfj3rCNgB8ArgQG4iYovknpkpscS9AViQFI0Xd/9QtbIsn5OOYjYXkMmUnGoFgE5HAIT8HoDasuvuEtgvIHst1Gd1tNwKfzrV7we51afZ27w/ITk1s0MAInHl7jfL1SOiIuLuc31/tyAiatQX+jMipgBuSZqZKXhe4+2b+MwlAifZouNsn+g9ATirN+fHDORaybFcSoAcn65buClMQkjeJZEZyWPFFEUxqWObAoT5neSnmamwetl60uVR/vnQ1es0dpmx1TCvCMh+B8ltM5t27W9EyEE0lHnbW7E0T9OkoRaoJdW2LM/AnOTEzCZ9yCNCZGr3VQ2Sj8to27BpUHNdNZytQ6jp7FwbJd5UQN7VsH+sEOib7JZVum7cqbZnSJ4fLRh6MSJUTBujc+PunS/eb/l7n+KhwobGjwJGAiOBkcAXNRLhITZr+/wAAAAASUVORK5CYII="
                  alt
                >
              </div>
              <!---->
            </div>
            <div class="register-bar">
              <button class="register-btn" @touchstart="regpersoner()">注册</button>
            </div>
            <div class="notice">
              注册即视您同意
              <a href="/account/clause" class>《健客服务条款》</a>
            </div>
          </section>
          <!---->
          <div class="loading-model hide">
            <img
              src="data:image/gif;base64,R0lGODlhZABkAPf/AEew6DSg2D59nsbGxi+w8zCu8JmZmWJiYoiIiHl5eTSe1tjx/zaZzqqqqk5OTj2Cpi+y9lFRUVTF/7fGzja6/1hYWDeWyEJwiEF1kcXq/mBgYEVneUNuhWPJ/sTExHFxcaKioi6z+IaGhkxPUcHBwTiRvzCs7UhcZjGr6nR0dC22/ktUWktUWDyEqmlpaV5eXjKm4lxcXEZldbCwsEeLrj97mTyGrUpWXHaGjlpaWqPf/0heabnn/29vb3HO/jGo50VpfOz2/I6Ojsfb5oqKimVlZZba/r29vTiSwVup0fT7/4TV/nt7e0dhb0dicYrX/knA/2ZmZuH1/juIsIuntXzR/01OT1V2hkJyikVoe2V6hWCYtT+Irqnh/klbZfn9/1VVVV5oboLG6pTT9LbV51NfZWdvc3vB5UB5mHy/4o/Z/1BUVlNYWu75/z2ZyU1WW01NTi+x9fX19S61+0tTV1dXVy61/Pv7+zKn5DKo5vz8/EtSVUtSVvLy8uTk5Obm5klaYzqNuFZWVpGRkTyEqTuJsjOi2zuHrzCv8bi4uNvb26+vr/Hx8fPz80lZYtnZ2TWc0kpXXnx8fEpYYP7+/qmpqZ6enrKysqampsjIyD2BpNLS0klZYfn5+efn50Nwh9bW1kZmdp2dnff39+Li4vb29nZ2du3t7djY2KSkpD6AojCt7j2DqPj4+K6urjeVxi60+i22/TeWx5CQkOzs7NfX17+/v6enp83Nze7u7qioqPr6+v39/UF0jkB3lD5/oTeUxUpYXy60+TmOujiUxM/Pz7q6upSUlOvr6/Dw8MnJyePj4zSh2zWe1UxSVTmPvMrKykFzjUxQUkZkc39/f+Dg4ERrfzeXyTOl4FJSUq2trdXV1enp6YODg4WFhZzd/y+4//3+/2hsboXN8pDG4565yEd4kaOqr3F0dmdxdU9UVk9odU9bYU51iPP09U9cYuHk5kueyjaf1lRWV4GLj1OCmvb3+FZqdJGWmElndlBWWkV3kS23/////01NTQAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNDI0NTcxNy03MGM1LWU1NDgtYmNhYi1lN2RlNThmZjYxZmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjhEQjQ5QTgzOTEzMTFFNzhFN0JFNTJENjI4RjE3NTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjhEQjQ5QTczOTEzMTFFNzhFN0JFNTJENjI4RjE3NTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGE1NDg4MzMtMjM4Yi1jMjQ0LWJjMjUtNDgzNGJmNjYzNTI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM0MjQ1NzE3LTcwYzUtZTU0OC1iY2FiLWU3ZGU1OGZmNjFmYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUDAP8ALAAAAABkAGQAAAj/AP8JHEiwoMGDCA/6W8iwYcOEECNKnEhRosOLGC9W3Mixo8GMIEM69Eiy5EeRKFGaXLkxpcuXLGMqfEnTpUyZNXPCvFlSp8+UPDv+HAo06ESiSEUahZi0qdKlBZ1KBQl14NSrGKti3TrSKNevDIOCHevvJlmyMc+eXYk10gVWwAKYINCBUqNTjwboQvACa0+ncGQcwsOvsGF+EvopXqzYj6sUDqSSTJklUJ45c34EyuKQjgDCh0MnZky6nx9LdRxKSuTpzp0/iSQV5YhyB6TQhiGd8MeiRRzcuKGUHi6nQQV/UTYN77fJhcqWIjdAAG6YACFEwO0EKIRhA6AVViJU/ziQYNYlVHqGM6rUZ7niUgmeUxS54zfu6dT52bFwgY7LCkRkkp57enRSmhzOhVSRSHAEcJgdgUwzgj8rRANDaIiwEolPL9zSCGmUHPFBZBoYkAtjqESmoEUiAXEYIhtcJM0whYVAyB5I1VGJgf3c4c1FMSjCmGxPMSVSIIapAERGVjDAACBSFVFMPwZk9AIjiyUiH0Ip/WBYCSHtAcdVDgwSAUggLObJbDOJNIdhS6rlkguL3cFmVCnZxw8fcroUwWK72NSmSNgYNmGfKOWw2B+CnoTSM4btgChK3SxmTKMEvWSNYQJMKpJyisWHqUAvNViYCf55ipEoi9Wi4p011f9X2DWHqrqQIDNQohiCNWVak3SFBdCErf4IgqVio4hKk680saBnC8T6o8tichzXq1U1CWAYBDdEW8eHilmSE7Y0wQEaP9BG6w8mi/nx6k45TWOYHRuq+8KA/aQw7j85HWKYLOoyNMBii+yb04WFYRHwQkQstozBNE0yb6oB18HLYhr0mtMnhgWwMEOoLIbAWC0YNsXHC82wWANjEWMYBij7M8tiHoxliGGhxGzKYoqMZYJhUKJ8wGK0jKUnxQvXQe1Yh1kRswOMMW1YzP78qZidYJWymCAxK6pYH2OdstgBMQ+tGDdjCRlqzAnwPNbAih0T8zGLDTBWJQTHvMhilYz/hcBi28QMisjj1mR2P7uA8TEYu4x9bU5+EL7w341BTNMli2XycSaLXWL5SztfnUPAMdyxmCmfu+TAH4ulEnAqi77baE6WLNaH4sSCcWw/4l5Lak2CgNsPCNGmqVgjXPvOb07s7pqxqhrIsRgmOjFLUwXJ1G0r3P0kM/q+5NI0CGODeDr+YuWDH/5LDgyuWCs9INpDK4uBIvuov9dUhPSKIUO2WgdABrWKUL1B0YRyivlDDM4SA9ZJTn3Wq4k2GOOH/33lAMtgjCt+khCfOMAWjMlF/LjSgxMtxhb3w18EaRIBXDCmE1XCigF4pBhcnMknEflJBEhAGmVYMCkHUAZp+0hwwwIayYN7Y0wrQIC7oYABBKMgzSJSuJMcDgUB/LNdKr6Xkxykoj2MkcPIhrKgoUTBfYy5QyZEkJqU1EEEmTAdaUBBQDKWcShl2h1jePGIRQghBQdQnHiKkAIhuOIRFysNIwZBxWVBhygVwAQY3UNJ0vThFtYiikeaIghLkKKSlSSFJZKHlMlI5QOXcCAoE3iJD0zlL1PRAAIwQQJF0IJ+emiEJxRBAkwg4HmvNAnVOMiSYUJQmMZUITKTuSKxMDMjWnlmV6IpzbJUZX3GvKajqKZNLnGzmx1cGDhZFK1xzkdV5qRNn9IJS66wMy1+eacz7SjPbipTmwEBACH5BAUDAP8ALDEAEgAMAAYAAAg1AFWoIGAiADBWFyL9W8ivoUOHeLike0iRnwQlFR8u+TdixApHGzAUCmCHX4aFKFOuaDfhTkAAIfkEBQMA/wAsOgATAA8ACQAACFgA/x2SAeefwYMIDfLjh0cAnYRAAgHo8m/hwjgtWPw7AYkfODVtKlpciIgQgYU+pPzDYsHOyJFQMiCMxOrkSApUEhqkQyjEwjladCL0woBfPaEJ4ZhzkDAgACH5BAUDAP8ALEIAFAAQAAwAAAhlAP8JFPhjzpw8gYAMXCiQn8OH/CDtYNgQ4kMIGxg6tBPCIr84Exs+m2bl36QaqyAGgCOQA8UbzCAqrEFRYCREDwNhGFFT4K+HAHoO3OFQgg6hAkdQ8JEhCNJ/b9QseCpQi5KBAQEAIfkEBQMA/wAsSQAbAAkAEAAACFkA/wkcKPAHwYH85hzkxxAWwRUM+eUhyCHiMIKQImYZKCBiADj/+EyJGGdHSEQRIWwYyIoki4F0CEQUQPBBRDwgBUayE3EaQVkRpxDEAg5KFXIE13RZoERgQAAh+QQFAwD/ACxMACkABgALAAAIOAD/8RsI4x+dWAP5TfoXIOGnf1MStviHISGxf6ESGvoHKKEJgwnj/LOSkN+/EQnn/GOjQ8e3MQEBACH5BAUDAP8ALEsAMwAHAAsAAAhBAP/9W8GvICKBgAryQyFwg0JDAn0pfCXwkEJCAhUovPBvDyyFjv59UohHYBIK4PgV+pdDCo8lHfIJFPhlCJx/AQEAIfkEBQMA/wAsRwA7AAoACwAACEcA/wkUaIEfv4EDb8wxyC8UQk0M8yDcg4ihAIS/GBLgMzBYHIYPEL5iWGDFQAwM+WEYKG4JBYMK4CBso0NCnBMIBYbjcSVnQAAh+QQFAwD/ACxBAEMACwAKAAAIRgD/CRzYJAS/gQg5oeDHEOG/G3kYMrwwEBAMifwOEVyFsQQcgWiEYWQwQuAEHyokIik5MIMEhoc+IvxiBMInhwMnlMH5LyAAIfkEBQMA/wAsOQBJAA0ACAAACEYA/wkc+M/RNX78CA7cowoCwoQEV2hC9BBhnAuC2lmYUxGhghP/9FTpyA8RBjgDu1B4SIAVC4UZJPCDIYCPQoGKtji5OTAgACH5BAUDAP8ALDEATAALAAYAAAgwAP8JHCiQDgeBI1Z4kdHrUIBY/P7p4EexosWJFjN+y1gxT6Fvdgj8MITkwYVJAgMCACH5BAUDAP8ALCcATAALAAYAAAgxAP/900JHoEGDUjrECnColwxOzgTygMKvosWKX9Rc3ChuS56NFg1OuvAAiSETIfgFBAAh+QQFAwD/ACwfAEgACwAJAAAIQwD//cMnsKDBcEbcODJYkAcUfiFU7TGYwYcKfhgRaVohsEwzjCD5zbHA4R8cDIhCgizI4gEBlQz5CICBkaFBJ4X+BQQAIfkEBQMA/wAsGABCAAsACwAACEgA/wmcJbCgQSlPmhgU6I6HD3AoOC3U0oGfxTw3FtqwaBEPIINwSnDkt0phwREMRgqrYXAEkpH8roE8NHKhwAtxLNoUeEKBwIAAIfkEBQMA/wAsEwA7AAkACwAACEYA/wkMUk6gQHQZjPiAssKgFQAU+PHTZPCfAIn8EO0xyIcARlUVH2CME8wgiwIYZVXEgJEfBoNwFGAMUfFEHIwV/13gJzAgACH5BAUDAP8ALBIAMwAGAAsAAAg5AMc8ebJEnT8T/BI68mcoIb8N/l459OWPkMND/i44bOaPk0NYe/zhcfjJXyGHFvyFcjjHH5w8DgMCACH5BAUDAP8ALBIAMQAFAAMAAAgRAI08ebLkX7+D/f5B4MeQT0AAIfkEBQMA/wAsEgAnAAYACwAACDsA/92TAO6fwXMZjPiI949Uv35BcGh42E9PHQQUH/1rQHHGPw8UZ/1TRNHUP1oUD/yTQ7HOP4r9HPwLCAAh+QQFAwD/ACwSABoACAAQAAAIXgC3UPhHsCCZJVAKErwj5VsHhXL6KeGhrmC1fhgjFDyCsZ+LgtQ6iirooBbGU3UKuojYD5pGgglGYXzUg2AFlv0aEBTVcVSMfw78dNT5L0VHPS8ILuo4QCHBfkQIBgQAIfkEBQMA/wAsEgAUABAACgAACF8A/wkUyCTRnzsLxAxc+M/Fpn4QIWbwAY5hglIRI1LiIWGhCzkZIVIqpeQbFBX/HKDKqCdRigj/ctBLU1FSxj4JGP6LsOVfIo2SdA6M5ymiLaED1/yLGBTpQoiCnAoMCAAh+QQFAwD/ACwbABMADwAJAAAIVQD/CRxI8J8DMzT+3fGUiEnBOqL8LOggsJ/FTVH+VWggx+IXNRUt9utTiZFIizyghDx5Us+EKwOFkGLZ51aMgv+yGbPYqRIYnAMd4Cp2AGhBMA6ABgQAIfkEBQMA/wAsJwASAAsABwAACDMA/Ql8gUDXgEenGqlJ4cpPv4cQ+32LSFFixYg6IOqpdWlQggMVrOjJhKCOwJMDUar0FxAAIfkEBQMA/wAsMQASAA0ABgAACDoAKVFqdOrRAF0IXvxb+K+fw4cP/VBZ5w+ixX46KDS86FBJlYURIlQ4kGDWJVR6FkhgyJJhBRyyFgYEACH5BAUDAP8ALDoAEwAQAAkAAAhaAP+5SuHgn8GDCA/26+fHUp2EkhKR6fBvoUU5DSr8i7Kpn5QlFMBZHMmoUp9+Sr5BMUgkk56RI3lISPjiViOYC7Y4SWiwTqVOC4No4ZmwSLF+9IjydEBPGs+AACH5BAUDAP8ALEIAFAAQAAwAAAhnAP8JFOjpzp0/iSQNXCiwn8OH/Ta5YPgPosVSCRg61NPJYj85EwVSOvLBwT8NBnJBRGXyjjeKMRRBVGiAosAXjB4mGhTBpkAQD4f4HOiinxIePoYKjCBFRwcKSv9VeAIlqsArUAUGBAAh+QQFAwD/ACxJABsACQAQAAAIXAD/CRwo0BNBgf363TmYsN8ugjka/iHYraExgpsaJhgoqmEtB/8EzaCUUI6LkIwajtooUFdDORUG1mnU0BJBTA39gBT4Qk/DFAQHNNRGkIiSBV3SEJznQwIFgQEBACH5BAUDAP8ALEwAKAAGAAwAAAg8AP8J/LdIYL+Dy/7V4XWwn4Z/qBoi+DejYYN/sxp6+GeqoaJ/BxrSUthQzj8HDfv9i9Dwzj99S5Y8GRcQACH5BAUDAP8ALEwAMwAGAAsAAAg7AP/l6Eewz78DBPtx+5cgoaJ/xxIO+LcoYaV/oBIiALMr4QEECf3885Dw0j8fOhYoMfXvHwUJZ6z8CwgAIfkEBQMA/wAsRgA7AAsADQAACFEA/wkcmGmgQYEx7vRbePBfqoX9/jgwCIYRREsHQUBsJMigBjkQMR0cADFZDoODIPYbZDBMEIigJgoEBMCIlH5yijSkUGUBgoYCY20BOtBfw4AAIfkEBQMA/wAsQABDAAsACwAACEwA/wkc+K9HK4IEDyDr1w/hvxh/GDJMuExiP1cDe+SyaMuBQAOdLOKK8O/dBIv9SJD8F0eNEomLPA6EwqOfHAQOwfmYUMShwH1WfAYEACH5BAUDAP8ALDgASQAMAAkAAAhDAP8JHCjwgDKCBMGAGNWvH8Icqfo0bCiwjohMdyZOBJVEisaJjAY5gJLhY59bFQRS6DKRlCVBCJfAu/QB4UB2NgkGBAAh+QQFAwD/ACwvAE0ADAAFAAAIMADZgfEXoUKRFEJcPeLVr0OQfhAjSvShRKLFflW+XIz4R4y9fnoaeVJEAhMCDf4CAgAh+QQFAwD/ACwlAEwADAAGAAAINAD/qegwQESdfwgTItTRrx+vR4uEpDggUIKUhhgz/kuTsWM/hB8u/fH4UaEGBJhIKKLVKiAAIfkEBQMA/wAsHgBIAAsACAAACD4A/8UyYuCfwYMGffTrp+wAwn8SlCzs1woEmIM45Exc2CdVDoNRQG1ceCeTQQeDGI18WAFTn4kPDQqyRMpgQAAh+QQFAwD/ACwXAEIACgAKAAAIPgD/CewwSKBBgQv6tepxsIycfhCRHTiIACLEPzEOarPYz89EgQ5scczFUGAEXBw7HYxAwuJBkIsgvjSIQGBAACH5BAUDAP8ALBMAOwAIAAoAAAg8AP9BadMv07+DpvopvJPjoIM/CvulOvjPUsQ+YA4KahQRBEVMEeVoOFghWcQBFAdF7EfRASiFFA8WoRgQACH5BAUDAP8ALBIAMwAGAAkAAAgtAEv1GyjI36mB/Q74U4Qwgb8BCI/5q4RwkT8ECLf5O4BwFxh/fhAi8HcJYaaAADs="
              alt
              class="hide"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */,
      auth_time: 0 /*倒计时 计数器*/,
      yzm:'获取验证码',
    };
  },
  methods: {
    getAuthCode() {
      this.sendAuthCode = false;
      this.auth_time = 5;
      var auth_timetimer = setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    getMa() {
      var randomMa = [];
      var str =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < 4; i++) {
        var randomIdx = parseInt(Math.random() * 63);
        randomMa.push(str[randomIdx]);
      }
      var code = randomMa.join("");
      return code;
    }
  }
};
</script>
<style scoped lang="scss">
header > div {
  height: 0.88rem;
  text-align: center;
  color: #111;
  background: #fdfdfd;
  font-size: 17px;
  position: relative;
  line-height: 0.88rem;
  border-bottom: 1px solid #eee;
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
header > nav {
  border-bottom: 1px solid #eee;
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
      &.arrows-tag {
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
      a {
        display: inline-block;
      }
    }
    .icon-home {
      font-size: 20px;
    }
    .icon-person-center {
      font-size: 20px;
    }
    .icon-types-search {
      font-size: 20px;
    }
    em {
      display: block;
      font-size: 13px;
      text-align: center;
      font-style: normal;
      text-decoration-style: none;
      margin-top: 0.14rem;
    }
  }
}
.icon-home:before {
  content: "\e610";
}
a {
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page {
  padding: 0 0.34rem;
}
.page .code-item,
.page .tel-item {
  position: relative;
  border-bottom: 1px solid #efefef;
}
.inputStyle {
  width: 100%;
  border: none;
  height: 1rem;
  padding-left: 0.13rem;
  font-size: 14px;
}
.page .code-item .code-btn {
  position: absolute;
  right: 0;
  bottom: 0.26rem;
  padding: 0;
  width: 1.52rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid #2da2ff;
  border-radius: 4px;
  color: #2da2ff;
  background: #fff;
  font-size: 0.24rem;
}
.page .code-item .code-btn.computing {
  color: #95d1ff;
  width: 1.7rem;
}
.page .code-item .code-btn {
  position: absolute;
  right: 0;
  bottom: 0.26rem;
  padding: 0;
  width: 1.52rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid #2da2ff;
  border-radius: 4px;
  color: #2da2ff;
  background: #fff;
  font-size: 0.24rem;
}
.page .password-item {
  position: relative;
  border-bottom: 1px solid #efefef;
}
.page .password-item .pwd-switch {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0.43rem;
}
.page .password-item .pwd-switch img {
  display: block;
  width: 100%;
}
.page .register-bar {
  margin-top: 0.51rem;
}
.page .register-bar .register-btn {
  width: 100%;
  height: 0.68rem;
  line-height: 0.68rem;
  background-color: #95d1ff;
  border-radius: 2px;
  border: none;
  font-size: 14px;
  color: #e3f2ff;
}
.page .notice[data-v-62c8cf66] {
  margin-top: 0.17rem;
  font-size: 12px;
  padding-left: 0.15rem;
  color: #aaa;
}
.page .notice a {
  color: #2da2ff;
}
.loading-model {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  overflow: hidden;
  background: transparent;
}
.loading-model img {
  width: 0.64rem;
  height: 0.64rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hide {
  display: none;
}
</style>
