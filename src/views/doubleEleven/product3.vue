<template>
  <div class="vide" v-if="videoList">
    <div class="top">
      <img src="../../assets/doubleel_img/sp_l.png" alt="" class="img_l">
      <img src="../../assets/doubleel_img/sp_c.png" alt="" class="img_c">
      <a href="https://dvcms.weixinmvp.com/Mass/20181031Video/default.aspx#!/home" class="btn">更多视频></a>
    </div>
    <!-- <swiper :options="articalSwiper" ref="ArticalSwiper">
      <swiper-slide v-for="(item,index) in videoList" :key="index">
        <a :href="'https://dvcms.weixinmvp.com/Mass/20181031Video/default.aspx?no='+item.ProductNo" class="product_box">
          <img :src='"https://act.gdtvdv.com/Video/"+item.ProductNo+"_l.jpg"' alt="">
          <div class="pay_img"><img src="../../assets/doubleel_img/pay.png" alt=""></div>
          <div class=''>
            <div>
              <div class='my_product_name'>{{item.ProductName}}</div>
              <div class='my_product_des'>{{item.ShortDesc}}</div>
            </div>
            <div class="zan" @click="GiveLike" v-show="false">
              <img :src="GiveLikeImg.like" alt="" v-if='!isGiveLike'>
              <img :src="GiveLikeImg.noLike" alt="" v-if='isGiveLike'>
              <p>{{likeNum}}</p>
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper> -->
    <div class="video_list">
      <a @click="Statistics(videoList[0].ProductNo+'|0')" :href="'https://dvcms.weixinmvp.com/Mass/20181031Video/default.aspx?no='+videoList[0].ProductNo" class='video_box'>
        <video ref='my_video' id="ovideo" 
        webkit-playsinline playsinline x5-playsinline x-webkit-airplay="allow"
        loop="loop" 
        controls=""
        :src="'https://act.gdtvdv.com/Video/'+ videoList[0].ProductNo +'.mp4'" :poster="'https://act.gdtvdv.com/Video/'+ videoList[0].ProductNo +'_c.jpg'" style="width:100%">
        </video>
        <!-- <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player> -->
      </a>
      <a @click="Statistics(videoList[1].ProductNo+'|1')" :href="'https://dvcms.weixinmvp.com/Mass/20181031Video/default.aspx?no='+videoList[1].ProductNo" class="video_cen">
        <img :src="'https://act.gdtvdv.com/Video/'+ videoList[1].ProductNo +'_c.jpg'" alt="">
        <div class="play_img"><img src="../../assets/doubleel_img/pay.png" alt=""></div>
        <div class="video_name">
          <div class="map"></div>
          {{videoList[1].ProductName}}
        </div>
      </a>
      <div class="video_sm_list">
        <a @click="Statistics(item.ProductNo+'|'+(index+2))" :href="'https://dvcms.weixinmvp.com/Mass/20181031Video/default.aspx?no='+item.ProductNo" class="video_sm" v-for="(item,index) in videoList.slice(2,4)" :key='index'>
          <img :src="'https://act.gdtvdv.com/Video/'+ item.ProductNo +'_c.jpg'" alt="">
          <div class="play_img"><img src="../../assets/doubleel_img/pay.png" alt=""></div>
          <div class="video_name">
            <div class="map"></div>
            {{item.ProductName}}
          </div>
        </a>
        <a @click="Statistics('video_genduo')" href="https://dvcms.weixinmvp.com/Mass/20181031Video/default.aspx#!/home" class="video_sm">
          <img :src="'https://act.gdtvdv.com/Video/'+ videoList[4].ProductNo +'_c.jpg'" alt="">
          <div class="play_img active">
            <div class="txt">更多视频</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "articalSwiper",
  props: ["videoList"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      articalSwiper: {
        followFinger: true,
        centeredSlides: true,
        slidesPerView: 1.1,
        // autoplayDisableOnInteraction: false,
        loopedSlides: 1,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0
        },
        pagination: {},
        on: {
          init() {
            var clickSlide = this.slides.eq(this.activeIndex);
            // this.slides.find("div").css("display", "none");
            // clickSlide.find("div").css("display", "block");
          },
          transitionStart() {
            // var clickSlide = this.slides.eq(this.activeIndex);
            // this.slides.find("div").css("display", "none");
            // clickSlide.find("div").css("display", "block");
          }
        }
      },
      GiveLikeImg: {
        like: require("../../assets/doubleel_img/zan.png"),
        noLike: require("../../assets/doubleel_img/zan1.png")
      },
      likeNum: 99,
      isGiveLike: false,
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          src: "https://act.gdtvdv.com/Video/031603127801.mp4" //url地址
        }],
        poster: "https://act.gdtvdv.com/Video/031603127801_c.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    }
    };
  },
  methods: {
    GiveLike() {
      if (this.isGiveLike) {
        this.likeNum--;
        this.isGiveLike = false;
      } else {
        this.likeNum++;
        this.isGiveLike = true;
      }
    },
    Statistics(item) {
      this.$statistics = this.$statistics.of("DOU_VIDEO|");
      this.$statistics.click(item);
    },
  },
  mounted() {
    // console.log(this.$refs.my_video);
    // var This = this;

    // this.$nextTick(function() {
    //   var ovideo = document.getElementById("ovideo");
    //   console.log(this.$refs.my_video.play());
    //   this.$refs.my_video.play();
    //   //  ovideo.play();
    // });
    // setTimeout(() => {
    //   var ovideo = document.getElementById("ovideo");
    //   console.log(ovideo.play());
    //   console.log(1);
    //   // ovideo.play();
    // }, 100);
  },
  created() {}
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.vide {
  .top {
    position: relative;
    height: 100 / @rem;
    .img_l {
      position: absolute;
      width: 130 / @rem;
      top: 30 / @rem;
      left: 70 / @rem;
    }
    .img_c {
      position: absolute;
      left: 50%;
      top: 20 / @rem;
      transform: translateX(-50%);
      width: 170 / @rem;
    }
    .btn {
      position: absolute;
      color: #494949;
      font-size: 24 / @rem;
      right: 20 / @rem;
      top: 30 / @rem;
    }
  }
  .product_box {
    display: block;
    position: relative;
    margin-right: 20 / @rem;
    img {
      width: 100%;
    }
    .pay_img {
      position: absolute;
      width: 90 / @rem;
      left: 50%;
      top: 36%;
      transform: translate(-50%, -50%);
    }
    .my_product_name {
      color: #494949;
      font-size: 30 / @rem;
      width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 10 / @rem;
    }
    .my_product_des {
      color: #acadad;
      font-size: 24 / @rem;
      width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 10 / @rem 10 / @rem 10 / @rem;
    }
    .zan {
      position: absolute;
      width: 15%;
      right: 10 / @rem;
      bottom: 5 / @rem;
      font-size: 24 / @rem;
      color: #494949;
      img {
        width: 40%;
        margin: 0 auto;
        margin-bottom: 10 / @rem;
      }
    }
  }
  .video_list {
    overflow: hidden;
    padding: 10 / @rem;
    position: relative;
    .video_box {
      float: left;
      width: 475 / @rem;
      display: block;
      position: absolute;
      height: 265 / @rem;
      top: 10 / @rem;
      left: 10 / @rem;
      z-index: 0;
      overflow: hidden;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        // z-index: -1;
      }
    }
    .video_cen {
      float: right;
      width: 240 / @rem;
      margin-left: 10 / @rem;
      position: relative;
      display: block;
      .play_img {
        position: absolute;
        width: 70 / @rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .video_name {
        position: absolute;
        width: 100%;
        height: 44 / @rem;
        // background: #000;
        // opacity: 0.5;
        color: #fff;
        font-size: 20 / @rem;
        text-align: center;
        line-height: 44 / @rem;
        bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .map {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.5;
          z-index: -1;
        }
      }
    }
    .video_sm_list {
      overflow: hidden;
      float: left;
      margin-top: 10 / @rem;
    }
    .video_sm {
      float: left;
      width: 32%;
      margin-right: 10 / @rem;
      position: relative;
      display: block;
      .play_img {
        position: absolute;
        width: 70 / @rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .play_img.active {
        color: #fff;
        font-size: 26 / @rem;
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0.7;
        .txt {
          position: absolute;
          width: 126 / @rem;
          height: 50 / @rem;
          border: 1px solid #fff;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          line-height: 50 / @rem;
        }
      }
      .video_name {
        position: absolute;
        width: 100%;
        height: 44 / @rem;
        // background: #000;
        // opacity: 0.4;
        color: #fff;
        font-size: 20 / @rem;
        text-align: center;
        line-height: 44 / @rem;
        bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 1;
        .map {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.5;
          z-index: -1;
        }
      }
    }
    .video_sm:nth-of-type(3) {
      margin-right: 0;
    }
  }
}
</style>