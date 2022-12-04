<template>
  <div class="content">
    <div class="item-1">
      <div class="left">
        <h1>G路径检索服务</h1>
        <p>
          实时把握路况，避开拥堵路段，寻找最佳路径，减少堵车烦恼，并接通中心话务员，语音设定目的地；点击车载器界面G路径按钮，即可得到最优路径。<br />
          截至2013年5月，此项服务已在北京、上海、广州、深圳、天津、沈阳、南京、成都、重庆、宁波、长沙、苏州、福州、珠海、东莞、长春、武汉、杭州、无锡、厦门、中山、青岛、太原、石家庄、泉州、台州、昆明、佛山28个城市开通。全国其他各大城市也将陆续开通此项服务。
        </p>
      </div>
      <div class="right"></div>
    </div>
    <div class="item-2">
      <div class="left">
        <img src="../assets/7.png" alt="" />
        <p>
          *预订相关费用将由用户自行承担。目前高尔夫球场预订服务已签约和确定签约的球场多达百余家，此项服务已在北京、上海、江苏、浙江、山东、江西、广东、海南、云南、广西、重庆、四川、河北、河南等多个城市及省份内开通。全国其他各大城市也将陆续开通此项服务。
        </p>
      </div>
      <div class="right">
        <h1>预订服务</h1>
        <p>
          预订服务中，除了随时预订酒店、机票、餐厅等服务之外，又增加了高尔夫球场预订服务，精选全国覆盖面广的知名高尔夫球场，全方位为您提供至尊服务。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.content {
  padding: 106px 140px 0;
  h1 {
    margin: 121px 0 37px 0;
    font-family: LEXUS-HeiS-Bold-U;
    font-size: 36px;
    font-weight: normal;
    letter-spacing: 0em;

    /* 纯黑 */
    color: #000000;
  }
  p {
    font-family: Nobel-Regular;
    font-size: 16px;
    font-weight: normal;
    text-align: justify; /* 浏览器可能不支持 */
    letter-spacing: 0em;

    /* 正文色/正文辅助色 */
    color: #767676;
  }
  .item-1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 148px;
    .left {
      width: 473px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        height: 288px;
      }
    }
    .right {
      width: 1118px;
      height: 682px;
      background-position: center;
      background-size: 1118px 682px;
      background-image: url("../assets/6.png");
    }
  }
  .item-2 {
    display: flex;
    justify-content: space-between;
    .left {
      width: 1118px;
      height: 682px;
    }
    img {
      width: 1118px;
      height: 682px;
    }
    .right {
      width: 473px;
      p {
        height: 153px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      h1 {
        margin: 223px 0 30px 0;
      }
    }
  }
}
</style>