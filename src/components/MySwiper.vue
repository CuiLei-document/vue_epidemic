<template>
  <div class="chart">
    <h3 class="title">全国</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img :src="item.image" alt="" />
      </swiper-slide>
    </swiper>
    <ul class="navigator">
      <li
        class="navigatorItem"
        v-for="(item, index) in swiperData"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="onCurrentIndex(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  data() {
    let that = this;
    return {
      currentIndex: 0,
      swiperData: [
        {
          image:
            "https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
          title: "新增疑似/新增确诊",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
          title: "现存确诊/现存疑似",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
          title: "死亡/治愈",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
          title: "病死率",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
          title: "治愈率",
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay:true,
        parallax : true,
        on: {
          slideChangeTransitionEnd: function () {
            that.currentIndex = this.activeIndex;
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    onCurrentIndex(index) {
      this.currentIndex = index
      this.swiper.slideTo(index, 1000, false);
    },
  },
};
</script>
<style lang="scss" scoped>
.chart {
  position: relative;
  background: #fff;
  padding: 0.16rem 0;
  > .title {
    font-size: 0.16rem;
    padding: 0 0.16rem;
    /* margin: 0 0 0.08rem 0.16rem; */
  }
  > .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
    > .swiper-pagination-bullet {
      width: calc(20% - 0.02rem);
      text-align: center;
      background: #f7f7f7;
      padding: 0.045rem;
      box-sizing: border-box;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.02rem;
    }
  }
  > .navigator {
    font-size: 0.12rem;
    list-style: none;
    display: flex;
    padding: 0 0.16rem;
    justify-content: center;
    margin: 0.06rem 0 0;
    > .navigatorItem {
      color: #4169e2;
      background: #f1f5ff;
      position: relative;
      width: calc(20% - 0.02rem);
      text-align: center;
      background: #f7f7f7;
      padding: 0.045rem;
      box-sizing: border-box;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.02rem;
      margin-left: 0.025rem;
      &.active {
        color: #4169e2;
        background: #f1f5ff;
        position: relative;
      }
    }
  }
}
</style>