<template>
  <div class="xv" v-if="information1.length&&information2.length">
    <div class="l_title"><img src="../../assets/doubleel_img/xv_recmmend.png" alt=""></div>
    <div class="product_list">
      <img src="../../assets/doubleel_img/xv_bg.png" alt="">
      <div class="conten">
        <div class="top">
          <div class="top_left">DV推荐</div>
          <div class="top_center" :class="{marquee_top:animate}">
            <a :href="item.URL" class="top_center_top" @click="Statistics('xvtj|'+item.Title+'|'+index)" v-for="(item,index) in information1" :key="index">
              <div class="txt">{{item.Title}}</div>
              <div class="img"><img v-lazy="item.ImageUrl" alt=""></div>
            </a>
          </div>
          <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI1NTYyNzIyOA==&scene=126&bizpsid=0&sessionid=1547437421&subscene=0#wechat_redirect" @click="Statistics('xvtj|more')" class="top_right">更多</a>
        </div>
        <div class="bottom">
          <a :href="information2[0].URL" class="bottom_left" v-if="information2[0]" @click="Statistics('xv|menuOfToday')">
            <div class="more">
              <span>今日菜谱</span>
              <span>查看更多>></span>
            </div>
            <div class="today_manu">
              <div class="manu_img"><img v-lazy="information2[0].ImageUrl" alt=""></div>
              <div class="manu_name">{{information2[0].Title}}</div>
            </div>
          </a>
          <div class="bottom_right">
            <a :href="information2[1].URL" class="manu" v-if="information2[1]" @click="Statistics('xv|menuZhou')">
              <div class="left">
                <div class="manu_title">本周新菜</div>
                <div class="des">{{information2[1].Title}}</div>
                <div class="moer">更多></div>
              </div>
              <div class="right"><img v-lazy="information2[1].ImageUrl" alt=""></div>
            </a>
            <a :href="information2[2].URL" class="manu" v-if="information2[2]" @click="Statistics('xv|menuNetRed')">
              <div class="left">
                <div class="manu_title">网红美食</div>
                <div class="des">{{information2[2].Title}}</div>
                <div class="moer">更多></div>
              </div>
              <div class="right"><img v-lazy="information2[2].ImageUrl" alt=""></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["information1", "information2"],
  data() {
    return {
      animate: false
    };
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_activity|");
      this.$statistics.click(item);
    },
    showMarquee: function() {
      this.animate = true;

      setTimeout(() => {
        this.information1.push(this.information1[0]);
        this.information1.shift();
        this.animate = false;
      }, 500);
    }
  },
  created() {
    if (this.information1.length > 2) {
      setInterval(this.showMarquee, 2000);
    }
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.xv {
  .marquee_top {
    transition: all 0.5s;
    margin-top: -30px;
  }
  .l_title {
    width: 70%;
    margin: 0 auto;
    position: relative;
  }
  .product_list {
    position: relative;
    .conten {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: 0 20 / @rem;
    }
    .top {
      position: absolute;
      box-sizing: border-box;
      width: 95%;
      height: 140 / @rem;
      background: #fff;
      border-radius: 10 / @rem;
      top: 30 / @rem;
      overflow: hidden;
      .top_left {
        width: 120 / @rem;
        border-bottom: 8 / @rem solid #d34a44;
        font-size: 28 / @rem;
        color: #474747;
        padding-bottom: 10 / @rem;
        display: inline-block;
        text-align: right;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 10 / @rem;
        font-weight: 600;
      }
      .top_center {
        position: absolute;
        left: 130 / @rem;
        width: 480 / @rem;
        top: 0;
        padding: 10 / @rem 0;
        padding-left: 15 / @rem;
        .top_center_top {
          display: block;
        }
        .txt {
          width: 384 / @rem;
          display: inline-block;
          color: #a4a4a4;
          font-size: 24 / @rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          // margin-right: 20/@rem;
          backface-visibility: hidden;
        }
        .img {
          width: 54 / @rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .top_right {
        position: absolute;
        width: 80 / @rem;
        height: 80 / @rem;
        text-align: center;
        color: #939393;
        font-size: 26 / @rem;
        line-height: 80 / @rem;
        border-left: 1px solid #ccc;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        backface-visibility: hidden;
      }
    }
    .bottom {
      position: absolute;
      top: 185 / @rem;
      width: 95%;
      backface-visibility: hidden;
      .bottom_left {
        width: 408 / @rem;
        height: 340 / @rem;
        background: #fff;
        border-radius: 8 / @rem;
        display: inline-block;
        overflow: hidden;
        backface-visibility: hidden;
        .more {
          height: 50 / @rem;
          border-left: 20 / @rem solid #d34a44;
          display: block;
          transform: translateX(-2px);
          position: relative;
          span:nth-of-type(1) {
            color: #474747;
            font-size: 30 / @rem;
            font-weight: 600;
          }
          span:nth-of-type(2) {
            color: #afafaf;
            font-size: 22 / @rem;
            position: absolute;
            right: 10 / @rem;
            bottom: 0;
          }
        }
        .today_manu {
          display: block;
          position: relative;
          height: 290 / @rem;
          .manu_img {
            width: 90%;
            left: 50%;
            top: 10 / @rem;
            transform: translateX(-50%);
            position: absolute;
          }
          .manu_name {
            color: #474747;
            font-size: 26 / @rem;
            position: absolute;
            bottom: 0;
            height: 45 / @rem;
            line-height: 45 / @rem;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
            padding-left: 10 / @rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            backface-visibility: hidden;
          }
        }
      }
      .bottom_right {
        width: 292 / @rem;
        position: absolute;
        right: 0;
        top: 0;
        .manu {
          height: 163 / @rem;
          background: #fff;
          border-radius: 10 / @rem;
          box-sizing: border-box;
          margin-bottom: 15 / @rem;
          display: block;
          position: relative;
          overflow: hidden;
          backface-visibility: hidden;
          .left {
            width: 124 / @rem;
            padding-left: 15 / @rem;
            .manu_title {
              color: #474747;
              font-size: 28 / @rem;
              padding: 20 / @rem 0;
              font-weight: 600;
            }
            .des {
              color: #616161;
              font-size: 20 / @rem;
              line-height: 30/@rem;
              margin-bottom: 10 / @rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              backface-visibility: hidden;
            }
            .moer {
              color: #afafaf;
              font-size: 20 / @rem;
              text-align: center;
            }
          }
          .right {
            width: 133 / @rem;
            top: 20 / @rem;
            right: 10 / @rem;
            position: absolute;
          }
        }
        .manu::after {
          position: absolute;
          content: "";
          width: 50 / @rem;
          height: 6 / @rem;
          background: #d34a44;
          right: 0;
          top: 0;
        }
      }
    }
  }
}
</style>