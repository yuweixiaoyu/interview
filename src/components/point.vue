<template>
  <div>
    <ul>
      <div class="line"></div>
      <li v-for="(item, i) in arr" :key="i">
        <div class="point-box">
          <transition>
            <div
              v-if="item.isStart"
              class="text animate__animated animate__bounce"
            >
              {{ item.tiemData }}
            </div>
          </transition>
          <transition name="dian">
            <!-- ... -->
            <div
              class="dian"
              :class="{ 'an-cls': item.isStart }"
              @click="ck(i, item.isStart)"
            ></div>
          </transition>
          <transition>
            <div v-if="item.isStart" class="point"></div>
          </transition>
        </div>

        <div class="text">
          <transition>
            <p :class="{ show: item.isStart }">
              {{ item.tiemData }}
            </p>
          </transition>
          <p>{{ item.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    ck (i, isStart) {
      this.arr.forEach(item => {
        item.isStart = false
      })
      this.arr[i].isStart = !isStart
      // console.log(1)
    }
  },
  data () {
    return {
      arr: [
        { isStart: false, tiemData: '2021年12月', content: '入围者筛选环节评审以线上会议的形式筛选作品和选出优秀参赛者。' },
        { isStart: false, tiemData: '2021年12月', content: '入围者筛选环节评审以线上会议的形式筛选作品和选出优秀参赛者。' },
        { isStart: false, tiemData: '2021年12月', content: '入围者筛选环节评审以线上会议的形式筛选作品和选出优秀参赛者。' },
        { isStart: false, tiemData: '2021年12月', content: '入围者筛选环节评审以线上会议的形式筛选作品和选出优秀参赛者。' },
        { isStart: false, tiemData: '2021年12月', content: '入围者筛选环节评审以线上会议的形式筛选作品和选出优秀参赛者。' }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.show {
  visibility: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s linear;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  // opacity: 1;
  transform: scale(1);
}
.an-cls {
  animation: an 1s linear forwards;
}
@keyframes an {
  0% {
  }
  100% {
    width: 170px;
    height: 170px;
  }
}
ul {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  .line {
    position: absolute;
    top: 102px;
    width: 100%;
    height: 4px;
    background: #666666;
  }
  li {
    position: relative;
    width: 245px;
    text-align: center;
    .text p:nth-child(2) {
      margin-top: 20px;
    }
    .point-box {
      position: relative;
      height: 204px;
      width: 204px;
      margin: auto;
      .text {
        position: relative;
        z-index: 99;
        font-size: 16px;
        color: #fff;
        text-align: center;
        height: 204px;
        line-height: 204px;
        width: 204px;
      }
      .point,
      .dian {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(102, 102, 102);
        // opacity: 0;
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      .point {
        // opacity: 0;
        height: 204px;
        width: 204px;
        background: rgba(102, 102, 102, 0.4);
      }
    }
    p {
      font-family: LEXUS-HeiS-Bold-U;
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      letter-spacing: 0em;

      /* 黑 */
      color: #262626;
      font-family: LEXUS-HeiS-Bold-U;
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      letter-spacing: 0em;

      /* 黑 */
      color: #262626;
    }
  }
}
</style>