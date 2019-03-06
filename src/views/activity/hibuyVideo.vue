<template>
  <div class="hibuyvideo" v-if="homeVideo.length==5">
    <div class="l_title"><img src="../../assets/doubleel_img/video_title.png" alt=""></div>
    <div class="conten">
      <div class="top">
        <a :href="homeVideo[0].Url" class="top_left" @click="Statistics('Video|'+homeVideo[0].Title+'|0')"><img :src="'http://gsvideo.gdtvdv.com/upload/image/'+ homeVideo[0].Param5 +'.gif'" alt=""></a>
        <a :href="homeVideo[1].Url" class="top_right" @click="Statistics('Video|'+homeVideo[1].Title+'|1')">
          <div class="pay_tag"><img src="../../assets/doubleel_img/pay.png" alt=""></div>
          <img v-lazy="homeVideo[1].ImageUrl" alt="">
          <div class="video_name">{{homeVideo[1].Title}}</div>
        </a>
      </div>
      <div class="bottom">
        <a :href="homeVideo[2].Url" class="bottom_box" @click="Statistics('Video|'+homeVideo[2].Title+'|2')">
          <div class="pay_tag"><img src="../../assets/doubleel_img/pay.png" alt=""></div>
          <img v-lazy="homeVideo[2].ImageUrl" alt="">     
          <div class="video_name">{{homeVideo[2].Title}}</div>
        </a>
        <a :href="homeVideo[3].Url" class="bottom_box" @click="Statistics('Video|'+homeVideo[3].Title+'|3')">
          <div class="pay_tag"><img src="../../assets/doubleel_img/pay.png" alt=""></div>
          <img v-lazy="homeVideo[3].ImageUrl" alt="">
          <div class="video_name">{{homeVideo[3].Title}}</div>
        </a>
        <a href="https://dvcms.weixinmvp.com/mass/20181031video/view/videolist.aspx?id=398" @click="Statistics('Video|more')" class="bottom_box moer">
          <!-- <div class="pay_tag"><img src="../../assets/doubleel_img/pay.png" alt=""></div> -->
          <img v-lazy="homeVideo[4].ImageUrl" alt="">
          <div class="video_name">
            <span>查看更多</span>
          </div>
        </a>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  props: ["homeVideo"],
  data() {
    return {};
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_activity|");
      this.$statistics.click(item);
    }
  },
  created () {
    console.log(this.homeVideo);
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
  display: block;
}
.hibuyvideo {
  .l_title {
    width: 65%;
    margin: 0 auto;
  }
  .conten {
    padding: 10 / @rem 4 / @rem;
    background: #9e0323;
    box-shadow: inset 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
    position: relative;
    margin-top: 20 / @rem;
    .top {
      .top_left {
        display: inline-block;
        width: 458 / @rem;
        height: 300 / @rem;
        overflow: hidden;
        backface-visibility: hidden;
      }
      .top_right {
        display: inline-block;
        width: 267 / @rem;
        height: 300 / @rem;
        overflow: hidden;
        position: relative;
        backface-visibility: hidden;
        .pay_tag {
          width: 64 / @rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .video_name {
          position: absolute;
          width: 100%;
          height: 50 / @rem;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-size: 26 / @rem;
          text-align: center;
          line-height: 50 / @rem;
          bottom: 0;
          left: 0;
          backface-visibility: hidden;
        }
      }
    }
    .bottom {
      margin-top: 10 / @rem;
      .bottom_box {
        display: inline-block;
        width: 237 / @rem;
        overflow: hidden;
        position: relative;
        backface-visibility: hidden;
        .pay_tag {
          width: 64 / @rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .video_name {
          position: absolute;
          width: 100%;
          height: 50 / @rem;
          background: rgba(0, 0, 0, 0.38);
          color: #fff;
          font-size: 26 / @rem;
          text-align: center;
          line-height: 50 / @rem;
          bottom: 0;
          left: 0;
        }
      }
      .moer {
        .video_name {
          height: 100%;
          width: 100%;
          span {
            border: 1px solid #fff;
            padding: 2 / @rem 4 / @rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
  .conten::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 13 / @rem;
    border-top: 2px solid #fdd284;
    background: #a20927;
    top: -13 / @rem;
    left: 0;
  }
  .conten::before {
    position: absolute;
    width: 100%;
    content: "";
    height: 13 / @rem;
    border-bottom: 2px solid #fdd284;
    background: #a20927;
    bottom: -13 / @rem;
    left: 0;
  }
}
</style>