<template>
  <div class="con">
    <div class="top">
      <div class="nav">
        <div class="left-logo">
          <div class="left"></div>
          <div class="rt"></div>
        </div>
        <div class="sidebar">
          <ul>
            <li>车型总览</li>
            <li>电气化</li>
            <li>购车工具</li>
            <li>车主服务</li>
            <li style="margin-right: 0">品牌天地</li>
          </ul>
          <div class="logo"></div>
        </div>
      </div>
      <div class="left-text">
        2022 雷克萨斯全球设计大奖
        <div>新闻资讯</div>
      </div>
      .
      <div class="right-text">
        2022 LEXUS雷克萨斯全球设计大奖<br />最高奖得主正式公布<br />Poh Yun
        Ru创作的<br />“记忆倒带”斩获最高奖殊荣
      </div>
    </div>
    <Content />
    <Point />
    <Img />
  </div>
</template>

<script>
import Content from './views/content.vue'
import Point from './components/point.vue'
import Img from './components/img.vue'
export default {
  components: { Content, Point, Img }
}
</script>

<style lang="less" scoped>
.con {
  // height: 100%;
  .top {
    position: relative;
    left: 0;
    width: 1920px;
    height: 1080px;
    opacity: 1;
    background: url("./assets/1.png") no-repeat center,
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.24) 74%,
        rgba(0, 0, 0, 0) 100%
      );
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1720px;
      height: 100px;
      margin: auto;

      border-bottom: 1px solid #fff;
      .left-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 282px;

        .left {
          width: 128px;
          height: 40px;
          background-size: 128px 40px;
          background-image: url("./assets/2.png");
          border: 1px dashed #fff;
        }
        .rt {
          width: 133px;
          height: 26px;
          background-size: 133px 26px;
          background-image: url("./assets/3.png");
          border: 1px dashed #fff;
        }
      }
      .sidebar {
        display: flex;
        align-self: center;
        font-family: LEXUS-HeiS-Bold-U;
        font-size: 18px;
        font-weight: normal;
        color: #fff;
        ul {
          width: 3rem;
        }
        .logo {
          width: 22px;
          height: 22px;
          background-position: center;
          background-size: 22px 22px;
          background-image: url("./assets/4.png");
          margin: 6px 0 0 207px;
        }
        li {
          float: left;
          margin-right: 50px;
        }
      }
    }
    .left-text {
      position: absolute;
      left: 102px;
      top: 195px;
      opacity: 1;

      font-family: LEXUS-HeiS-Bold-U;
      font-size: 56px;
      font-weight: normal;
      letter-spacing: 0em;

      /* 黑 */
      color: #262626;
      div {
        font-size: 26px;
        color: #3d3d3d;
      }
    }
    .right-text {
      position: absolute;
      right: 101px;
      bottom: 24px;
      // width: 868px;
      height: 208px;
      opacity: 1;

      font-family: LEXUS-HeiS-Bold-U;
      font-size: 36px;
      font-weight: normal;
      text-align: right;
      letter-spacing: 0em;

      /* 黑 */
      color: #262626;
    }
  }
}
</style>