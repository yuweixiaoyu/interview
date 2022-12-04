<template>
  <div class="content">
    <div class="con">
      <div class="logo"></div>
      <div class="text">
        近日，LEXUS雷克萨斯正式宣布2022全球设计大奖最高奖得主，Poh Yun
        Ru所创作的“记忆倒带（Rewind）”从57个国家和地区的选手提交的1,726项参赛作品中脱颖而出，摘得2022第十届
        LEXUS雷克萨斯全球设计大奖最高奖桂冠。“记忆倒带（Rewind）”旨在通过先进科技，为失智老人等受记忆力障碍困扰的人群提供帮助，帮助他们唤醒记忆，构建更美好的未来。
        LEXUS雷克萨斯全球设计大奖最高奖得主Poh Yun
        Ru表示：“我希望‘记忆倒带（Rewind）’能帮助更多人改善他们的生活，我非常感激LEXUS雷克萨斯全球设计大奖让我离这个目标又近了一步。能够获此殊荣，离不开大家给予的巨大支持，包括我的导师、团队内的工程师、程序员、医疗保健专家以及参与这一项目的广大用户。LEXUS雷克萨斯全球设计大奖让我们有机会将创意过程转化为实际的产品，这非常了不起。能与世界各地充满激情的设计师相聚于此，相互交流学习，令我备受鼓舞。这是一场意义深远、充满启迪的创意之旅，我很高兴能够通过创意与设计和大家一起构建更美好的未来。”
      </div>
      <div class="img"></div>
    </div>
    <p>
      <span style="display: block">
        LEXUS雷克萨斯全球设计大奖不同于其他设计赛事，6位决赛入围选手将接受4位蜚声国际的专业导师亲自指导。备受尊敬的精英导师们来自不同行业背景和专业领域，与决赛入围选手进行一对一的沟通交流，选手们将基于导师们的个性化设计指导，充分激发各自的创意潜能，精心打造并持续完善各自的原型设计作品。LEXUS雷克萨斯全球设计大奖已连续举办九届，共呈现90件独具创意的作品，为139名独立设计师和设计团队提供了展示各自才华和天赋的广阔平台。参赛者均致力于借助设计的力量，构建更美好未来。
      </span>
    </p>
    <p>雷克萨斯全球设计大奖赛历程</p>
    <p>
      经过筛选在2021年12月最终确定6名入围者，他们将与指定的导师一起设计原型作品参加大奖赛评选活动，随后宣布大奖赛冠军。完整的计划时间表如下。
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content {
  padding: 106px 140px 0;
}
.con {
  display: flex;
  justify-content: space-between;
  margin-bottom: 238px;
  .logo {
    width: 175px;
    height: 195px;
    background-position: center;
    background-size: 179px 195px;
    background-image: url("../assets/8.png");
  }
  .img {
    width: 1022px;
    height: 524px;
    background-position: center;
    background-size: 1022px 524px;
    background-image: url("../assets/5.png");
  }
  .text {
    width: 369px;
    height: 524px;
    font-family: Nobel-Regular;
    font-size: 16px;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 14;
    -webkit-box-orient: vertical;
    text-align: justify; /* 浏览器可能不支持 */
    letter-spacing: 0em;

    color: #3d3d3d;
    font-family: Nobel-Regular;
    font-size: 16px;
    font-weight: normal;
    line-height: 25px;
    text-align: justify; /* 浏览器可能不支持 */
    letter-spacing: 0em;

    color: #3d3d3d;
  }
}
p {
  text-align: center;
  overflow: hidden;
}
p:nth-child(2) {
  width: 1148px;
  margin: 238px auto 101px auto;
  font-family: LEXUS-HeiS-Bold-U;
  font-size: 16px;
  font-weight: normal;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0em;
}
p:nth-child(3) {
  margin: 101px 0 33px 0;
  font-family: LEXUS-HeiS-Bold-U;
  font-size: 36px;
  font-weight: normal;
  letter-spacing: 0em;

  /* 黑 */
  color: #262626;
}
p:nth-child(4) {
  font-family: Nobel-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0em;

  color: #3d3d3d;
}
</style>