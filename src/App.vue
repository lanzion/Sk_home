<template>
  <div id="app">
    <a id='headerImg' v-if='TopImage[0]' v-show="closeFlage" @click='StatisticsTopToast(TopImage[0].Title)' :href='TopImage[0].URL' style='display:block;'>
      <img id='topImg' :src="TopImage[0].ImageUrl" v-if="topImg" alt="">
    </a>
    <div v-if='TopImage[0]' id='closeImg' @click='closeImg' v-show='closeFlage' style='display:block;color:#565656;height:30px;line-height:30px;color:white;width:80px;position:absolute;top:6px;right:4px;z-index:10000;text-align:center;font-size:16px;border-radius:16px;background:rgba(0,0,0,.4);margin-top:6px;'>
      <span>{{sec}}</span>s | 关闭
    </div>
    <div class="fulltoastimage" v-show="fulltoas_flag" @click="fulltoas_close">
      <a :href="FullToastImage[0].URL" class="fulltoasa" :style="FullToastImage[0].Describe" v-if='FullToastImage[0]' @click='StatisticsTopToast(FullToastImage[0].Title)'>
        <img :src="item" alt="" v-for='(item,index) in FullToastImage[0].ImageUrl' :key="index">
      </a>
      <div class="fulltoas_close" @click="fulltoas_close">关闭 | {{fulltoastdjs}}S</div>
    </div>

    <div v-if='topImgReady[0]' style='width:100%;height:100%;position:fixed;top:0;z-index:10000000;'>
      <img src="./assets/images/370310983500145999.gif" alt="" style='width:100%;'>
    </div>
    <div>
      <header-nav v-show='!topImgReady[0]' style='' v-if='HeaderShow1'></header-nav>
      <div class='container'>
        <router-view class='default' id="default"></router-view>
        <swiper :options="AppSwiper" ref='ASwiper' id='ASwiper'>
          <swiper-slide v-for='(data,index) in HeadNavData' :key="index">
            <router-view :name='data.Url.toLocaleLowerCase()'></router-view>
          </swiper-slide>
        </swiper>
      </div>
      <div class='mark' v-show='toastFlag' v-if='ToastData.length > 0'>

      </div>
      <div id='toast' v-show='toastFlag' @click='change' v-for='(item,index) in ToastData' :key="index" v-if='ToastData.length > 0 '>
        <a class='toastImg' :href='item.URL' @click='StatisticsTOAST(item.Title)'>
          <div class='close' @click='closeToast'>

          </div>
          <img :src="item.ImageUrl" alt="">
        </a>
      </div>
      <a class='enter' :href='BUOY[0].Url' v-if='BUOY[0]&&BUOY[0].ImageUrl.length==1' @click="StatisticsBUOY(BUOY[0].Title)">
        <img :src="BUOY[0].ImageUrl[0]" alt="">
      </a>
      <a class="flipper" :href='BUOY[0].Url' v-if='BUOY[0]&&BUOY[0].ImageUrl.length>1' @click="StatisticsBUOY(BUOY[0].Title)">
        <img :src="item" alt="" v-for='(item,index) in BUOY[0].ImageUrl' :key='index'>
      </a>
      <div id='top' @click='toTop()' style='display:none;'>
        <img src="./assets/images/top.png" alt="">
      </div>
      <!-- <div id='newcoup' v-if='Discount'>
        <a href="https://cms.weixinmvp.com/Mass/170921newmember/default.aspx">
          <img src="https://gdtvshop.weixinmvp.com/Wap/Shop/images/Default/footab.png" alt="">
        </a>
        <div class='close' @click='close()'>
        </div>
      </div> -->
      <footer-nav></footer-nav>
    </div>

  </div>
</template>
<script>
import {
  limitHomePageHeight,
  limitCatetoryHeight,
  catetoryPageMore,
  getMoreProduct,
  HomePageMore,
  remFit
} from "./lib/mUtils";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import headerNav from "@/components/header-nav";
import footerNav from "@/components/footer";
remFit(document, window);
export default {
  name: "App",
  components: {
    headerNav,
    footerNav
  },
  data() {
    return {
      This: this,
      names: "left",
      flag: true,
      timer: null,
      topImg: true,
      toastFlag: true,
      topImgFlag: true,
      startIndex: null,
      timer3: null,
      closeFlage: true,
      fulltoas_flag: false,
      isTop: true,
      HeaderShow1: true,
      topImgTimer: null,
      endIndex: null,
      slideIndex: 0,
      moreIndex: true,
      sec: 4,
      fulltoastdjs: 3,
      _hmt: [],
      index: 0,
      AppSwiper: {
        resistanceRatio: 0,
        touchRatio: 0.6,
        autoHeight: true,
        init() {},
        on: {
          touchMove: function() {},
          touchMove() {
            var activeIndex = this.activeIndex;
          },
          touchStart() {
            var activeIndex = this.activeIndex;
            this.App.startIndex = this.activeIndex;
            var ScTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            if (this.activeIndex + 1 < this.slides.length) {
              this.slides
                .eq(this.activeIndex + 1)
                .css(
                  "transform",
                  "translate3d(0," +
                    (ScTop -
                      this.App.$store.state[
                        this.App.HeadNavData[
                          this.activeIndex + 1
                        ].Url.toLocaleLowerCase()
                      ].scrollTop) +
                    "px,0)"
                );
            }
            if (this.router.options.routes[this.activeIndex - 1]) {
              this.slides
                .eq(this.activeIndex - 1)
                .css(
                  "transform",
                  "translate3d(0," +
                    (ScTop -
                      this.App.$store.state[
                        this.App.HeadNavData[
                          this.activeIndex - 1
                        ].Url.toLocaleLowerCase()
                      ].scrollTop) +
                    "px,0)"
                );
            }
          },
          slideChangeTransitionEnd() {},
          slideChange() {
            if (document.getElementsByClassName("Hcontainer")[0]) {
              if (this.slides.eq(this.route.meta.index)[0]) {
                var Height =
                  this.slides.eq(this.route.meta.index)[0].clientHeight +
                  document
                    .getElementsByClassName("Hcontainer")[0]
                    .getBoundingClientRect().height;
                // document.getElementById("app").style.height = Height + "px";
                document.getElementById("ASwiper").style.height = Height + "px";
              }
            }
          },
          transitionStart() {
            // console.log(111)
            this.App.moreIndex = false;
          },
          transitionEnd() {
            this.App.endIndex = this.activeIndex;
            this.router.replace({
              name: this.App.HeadNavData[this.activeIndex].Url
            });
            this.slides
              .eq(this.activeIndex)
              .css("transform", "translate3d(0,0,0)");
            var This = this;
            if (This.slides.eq(This.activeIndex)) {
              document.documentElement.scrollTop = document.body.scrollTop =
                This.App.$store.state[
                  // This.router.options.routes[This.activeIndex].meta.loadname
                  this.App.HeadNavData[this.activeIndex].Url.toLocaleLowerCase()
                ].scrollTop;
            }
            this.App.moreIndex = true;
          }
        }
      },
    };
  },
  methods: {
    closeImg: function() {
      var This = this;
      var closeImg = document.getElementById("closeImg");
      closeImg.style.display = "none";
      headerImg.style.height = "0";
      headerImg.style.transition = ".5s  ease-in";
      setTimeout(function() {
        document.getElementsByClassName("containerTop")[0].style.position =
          "fixed";
      }, 500);
      This.topImg == false;
      clearInterval(This.topImgTimer);
      This.topImgFlag = false;
    },
    closeToast(ev) {
      var e = ev || window.event;
      e.preventDefault();

      this.toastFlag = false;
    },
    change() {
      this.toastFlag = false;
    },
    StatisticsBUOY(item) {
      this.$statistics = this.$statistics.of("HOME_BUOY|");
      this.$statistics.click(item);
    },
    StatisticsTopToast(item) {
      this.$statistics = this.$statistics.of("HOME_TOPIMG|");
      this.$statistics.click(item);
    },
    StatisticsTOAST(item) {
      this.$statistics = this.$statistics.of("HOME_TOAST|");
      this.$statistics.click(item);
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    menu() {
      var This = this;
      var he = document.documentElement.scrollTop || document.body.scrollTop;
      if (This.TopImage.length && This.topImgFlag) {
        var topImg = document.getElementById("topImg");
        var th = topImg.getBoundingClientRect().height;
        if (he > th) {
          var This = this;
          var closeImg = document.getElementById("closeImg");
          closeImg.style.display = "none";
          headerImg.style.height = "0";
          setTimeout(function() {
            document.getElementsByClassName("containerTop")[0].style.position =
              "fixed";
          }, 500);
          This.topImg == false;
          clearInterval(This.topImgTimer);
          This.topImgFlag = false;
        }
      }
      if (this.$route.meta.index == 100) {
        var catetoryname = this.$route.params.id
          .split("_")[0]
          .toLocaleLowerCase();
        var catetoryId = this.$route.query.id;
        this.$store.state[catetoryname][catetoryId + "scrollTop"] =
          document.documentElement.scrollTop || document.body.scrollTop;
      }
      var myBtn = document.getElementById("top");
      var clientHeight = document.documentElement.clientHeight;
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (!this.isTop) {
        clearInterval(this.timer);
      }
      this.isTop = false;
      if (osTop > clientHeight) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
      if (this.$route.meta.HompPage) {
        HomePageMore(this);
      } else {
        if (this.$route.meta.catetoryPage) {
          catetoryPageMore(this);
        } else {
          if (this.$route.name == "getMoreProduct") {
            getMoreProduct(this, "getMore");
          } else if (this.$route.name == "getMoreHotProduct") {
            getMoreProduct(this, "getHotMore");
          }
        }
        if (this.$route.meta.kindPage) {
        }
      }
    },
    close() {
      this.$store.state.Discount = false;
    },
    fulltoas_close() {
      this.fulltoas_flag = false;
    }
  },
  watch: {
    $route(to, from) {
      var header_flag = false;
      if(this.$store.state.index<100){
        header_flag = true;
        if(this.$store.state.index==100) document.getElementById("ASwiper").style.height = "0px";
      };
      if (header_flag) {
        this.$store.state.HeaderShow = true;
      } else {
        this.$store.state.HeaderShow = false;
        document.getElementById("ASwiper").style.height = "0px";
      }
      clearInterval(this.timer3);
      if (this.$store.state.flag == "false") {
        this.flag = false;
      } else {
        this.flag = true;
      }
      var This = this;
      if (this.$route.meta.HompPage && this.swiper && this.HeadNavData.length) {
        this.HeadNavData.map(function(data, index) {
          if (This.$route.meta.loadname == data.Url.toLocaleLowerCase()) {
            This.slideIndex = index;
          }
        });
        this.swiper.slideTo(This.slideIndex, 0, false);
        var LoadName = this.$route.meta.loadname;
        if (this.$route.meta.loadname != "home") {
          limitHomePageHeight(this, LoadName, 4);
        } else {
          limitHomePageHeight(this, LoadName, 6);
        }
      } else {
        if (this.$route.meta.catetoryPage) {
          limitCatetoryHeight(this);
        }
      }
      if (this.$store.state.HeaderShow) {
        this.HeaderShow1 = true;
      } else {
        this.HeaderShow1 = false;
      }
    }
  },
  created() {
    if (this.$route.name != "home") {
      this.closeFlage = false;
    }
    this.$store.dispatch("getHeadNavArr");
    if (this.$store.state.home.homeToast.length == 0) {
      this.$store.dispatch("getToast");
    }
    this.$store.dispatch("CheckNewMember");
    if (!this.$store.state.TopImage.length) {
      this.$store.dispatch("getTopImage");
    }
    if (!this.$store.state.FullToastImage.length) {
      this.$store.dispatch("getFullToast");
    }
    this.$store.dispatch("getNotice");
    if (this.$store.state.flag == "false") {
      this.flag = false;
    } else {
      this.flag = true;
    }
    if (this.$store.state.HeaderShow) {
      this.HeaderShow1 = true;
    } else {
      this.HeaderShow1 = false;
    }
    if (this.$route.name != "home") {
      this.HeaderShow1 = false;
    }
    if(this.$store.state.index<100){
        this.HeaderShow1 = true;
      }
    localStorage.setItem("fulltoas_flag", new Date().getTime());
  },

  computed: {
    HeadNavData() {
      if (this.$store.state.headNavArr.length) {
        if (this.$route.path == "/") {
          this.$router.push({ name: this.$store.state.headNavArr[0].Url });
        }
      }
      return this.$store.state.headNavArr;
    },
    SHOWMk() {
      return this.$store.state.SHOWMk;
    },
    TopImage() {
      return this.$store.state.TopImage;
    },
    FullToastImage() {
      if (this.$store.state.FullToastImage.length) this.fulltoas_flag = true;
      return this.$store.state.FullToastImage;
    },
    ToastData() {
      return this.$store.state.home.homeToast;
    },
    swiper() {
      return this.$refs.ASwiper.swiper;
    },
    Discount() {
      return this.$store.state.Discount;
    },
    BUOY() {
      return this.$store.state.home.BUOY;
    },
    topImgReady() {
      return this.$store.state.topImg;
    }
  },
  mounted() {
    var This = this;
    var aaaa = 0;
    This.topImgTimer = setInterval(function() {
      aaaa++;
      if (This.TopImage.length && This.topImgFlag && This.HeaderShow1) {
        document.getElementsByClassName("containerTop")[0].style.position =
          "absolute";
        var headerImg = document.getElementById("headerImg");
        var topImg = document.getElementById("topImg");
        var th = topImg.getBoundingClientRect().height;
        headerImg.style.height = th + "px";
        headerImg.style.transition = ".5s  ease-in";
        headerImg.style.overflow = "hidden";
        This.sec--;
        if (This.sec == 0) {
          var closeImg = document.getElementById("closeImg");
          closeImg.style.display = "none";
          headerImg.style.height = "0";
          setTimeout(function() {
            document.getElementsByClassName("containerTop")[0].style.position =
              "fixed";
          }, 500);
          This.topImg == false;
          clearInterval(This.topImgTimer);
        }
      }
      if (aaaa == 10 && !This.TopImage.length) {
        clearInterval(This.topImgTimer);
      }
    }, 1000);
    if (This.FullToastImage) {
      This.FullToastImageTimer = setInterval(function() {
        This.fulltoastdjs--;
        if (This.fulltoastdjs < 0) {
          This.fulltoas_flag = false;
          clearInterval(This.FullToastImageTimer);
        }
      }, 1000);
    }

    var a = 1;
    window.addEventListener("scroll", this.menu);
    var slideTimer = setInterval(function() {
      if (This.swiper && This.HeadNavData.length) {
        This.swiper.router = This.$router;
        This.swiper.App = This;
        This.swiper.route = This.$route;
        This.swiper.store = This.$store;
        if (This.$route.meta.HompPage) {
          This.HeadNavData.map(function(data, index) {
            if (This.$route.meta.loadname == data.Url.toLocaleLowerCase()) {
              This.slideIndex = index;
            }
          });
          This.swiper.slideTo(This.slideIndex, 0, false);
          var LoadName = This.$route.meta.loadname;
          if (This.$route.meta.loadname != "home") {
            limitHomePageHeight(This, LoadName, 4);
          } else {
            limitHomePageHeight(This, LoadName, 6);
          }
        } else {
          if (This.$route.meta.catetoryPage) {
            limitCatetoryHeight(This);
          }
        }
        clearInterval(slideTimer);
      }
    }, 100);
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
body,
html {
  // max-width: 540px;
  // margin:0 auto;
}
.mark {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #999;
  z-index: 10000;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.fulltoastimage {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999999;
  // background: #fffaf1;
  .fulltoasa {
    display: block;
    height: 100%;
    width: 100%;
  }
  .fulltoas_close {
    background: #000;
    opacity: 0.6;
    color: #fff;
    font-size: 24 / @rem;
    position: absolute;
    bottom: 15%;
    z-index: 1;
    padding: 10 / @rem 15 / @rem;
    right: 30 / @rem;
    border-radius: 20 / @rem;
  }
  img {
    width: 100%;
  }
  img:nth-of-type(1) {
    position: absolute;
    top: 0;
  }
  img:nth-of-type(2) {
    position: absolute;
    bottom: 0;
  }
}
#toast {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .toastImg {
    width: 678 / @rem;
    height: 603 / @rem;
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -(678/2) / @rem;
    margin-top: -(603/2) / @rem;
    z-index: 100000;
    .close {
      width: 280 / @rem;
      height: 120 / @rem;
      position: absolute;
      right: 0;
    }
    img {
      width: 678 / @rem;
      height: 603 / @rem;
    }
  }
}
@keyframes qikill {
  0% {
    transform: translateX(15px) rotate(13deg);
  }
  10% {
    transform: translateX(-30px) rotate(-18deg);
  }
  75% {
    transform: translateX(15px) rotate(13deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}

@-webkit-keyframes qikill {
  0% {
    transform: translateX(15px) rotate(13deg);
  }
  10% {
    transform: translateX(-30px) rotate(-18deg);
  }
  75% {
    transform: translateX(15px) rotate(13deg);
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
@-webkit-keyframes play {
  0% {
    -webkit-transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(180deg);
  }
}
// @-moz-keyframes play {
//   0% {
//     -moz-transform: rotateY(0deg);
//   }
//   100% {
//     -moz-transform: rotateY(360deg);
//   }
// }

@keyframes play {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
body {
  transition: 0.5s;
}
.swiper-container-horizontal .my-bullet-active {
  background: #ba3d3f;
  opacity: 1;
}
.swiper-container-horizontal .area-bullet-active {
  background: #ba3d3f;
  opacity: 1;
}

#ASwiper {
  // margin-top: 172/@rem;
  position: relative;
  top: 170 / @rem;
  // background: #ab3228;
}
a {
  text-decoration: none;
  color: #565656;
}
body,
html {
  height: 100%;
  
}
.app {
  margin-bottom: 100px;
}
.enter {
  width: 80px;
  position: fixed;
  right: 0px;
  top: 60%;
  animation: qikill 1s 1;
  -webkit-animation: qikill 1s 1;
  z-index: 10000;
  height: 80px;
  img {
    width: 100%;
  }
}
.flipper {
  width: 80px;
  position: fixed;
  right: 0px;
  top: 60%;
  z-index: 1000000;
  // transition: 0.6s;
  // transform-style: preserve-3d;
  // margin: 0 auto;
  -webkit-transform: translate3d(0, 0, 100px);
  // -moz-transform: translate3d(0, 0, 100px);
  transform: translate3d(0, 0, 100px);
  -webkit-animation: play 8s linear infinite;
  // -moz-animation: play 8s linear infinite;
  animation: play 8s linear infinite;
  height: 80px;
  img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    // -moz-backface-visibility:hidden;
    -ms-backface-visibility: hidden;
  }
  img:nth-child(1) {
    transform: rotateY(0deg);
    z-index: 2;
    -webkit-transform: rotate(0deg);
  }
  img:nth-child(2) {
    transform: rotateY(-180deg);
  }
}
#top {
  width: 70 / @rem;
  height: 70 / @rem;
  position: fixed;
  bottom: 160 / @rem;
  right: 80 / @rem;
  z-index: 100000;
  font-size: 16px;
  right: 60 / @rem;
  background: #000;
  opacity: 0.5;
  text-align: center;
  border-radius: 2px;
  img {
    width: 50 / @rem;
    height: 50 / @rem;
    margin-top: 10 / @rem;
    vertical-align: middle;
  }
}

#home {
  font-size: 16px;
  width: 76 / @rem;
  height: 76 / @rem;
  position: fixed;
  bottom: 120 / @rem;
  right: 80 / @rem;
  z-index: 10000;
}

.container {
  // overflow: hidden;
  // position: absolute;
  width: 100%;
  z-index: 0;
  // height: 100%;
}

.left-enter {
  transform: translateX(100%);
}

.left-enter-active,
.left-leave-active {
  transition: 1s;
}

.left-leave-to {
  transform: translateX(-100%);
}

.right-enter {
  transform: translateX(-100%);
}

.right-enter-active,
.right-leave-active {
  transition: 1s;
}

.right-leave-to {
  transform: translateX(100%);
}

.center {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
}
#newcoup {
  position: fixed;
  bottom: 90 / @rem;
  left: 0;
  z-index: 100000;
  width: 100%;
  height: 120 / @rem;
  .close {
    width: 140 / @rem;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
#app {
  // height: 100%;
  .category {
    font-size: 28 / @rem;
    width: 100%;
    overflow: hidden;
    .cate3 {
      text-align: center;
      // background: white;
      display: block;
      width: 33.333%;
      height: 180 / @rem;
      float: left;
      text-decoration: none;
      // color: #929292;
      .categoryImg {
        height: 120 / @rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90 / @rem;
          left: ((750-90 * 3)/6) / @rem;
        }
      }
      div {
        width: 100%;
        height: 60 / @rem;
        line-height: 60 / @rem;
      }
    }
    .cate4 {
      text-align: center;
      // background: white;
      display: block;
      width: 25%;
      height: 180 / @rem;
      float: left;
      text-decoration: none;
      // color: #929292;
      .categoryImg {
        height: 120 / @rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90 / @rem;
          left: ((750-90 * 4)/8) / @rem;
        }
      }
      div {
        width: 100%;
        height: 60 / @rem;
        line-height: 60 / @rem;
      }
    }
    .cate5 {
      text-align: center;
      // background: white;
      display: block;
      width: 20%;
      height: 180 / @rem;
      float: left;
      text-decoration: none;
      // color: #929292;
      .categoryImg {
        height: 120 / @rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90 / @rem;
          left: ((750-90 * 5)/10) / @rem;
        }
      }
      div {
        width: 100%;
        height: 60 / @rem;
        line-height: 60 / @rem;
      }
    }
    .cate8 {
      text-align: center;
      // background: white;
      display: block;
      width: 25%;
      height: 180 / @rem;
      float: left;
      text-decoration: none;
      // color: #929292;
      .categoryImg {
        height: 120 / @rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90 / @rem;
          left: ((750-90 * 4)/8) / @rem;
        }
      }
      div {
        width: 100%;
        height: 60 / @rem;
        line-height: 60 / @rem;
      }
    }
    .cate10 {
      text-align: center;
      // background: white;
      display: block;
      width: 20%;
      height: 180 / @rem;
      float: left;
      text-decoration: none;
      // color: #929292;
      .categoryImg {
        height: 120 / @rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90 / @rem;
          left: ((750-90 * 5)/10) / @rem;
        }
      }
      div {
        width: 100%;
        height: 60 / @rem;
        line-height: 60 / @rem;
      }
    }
    .cate9 {
      &:nth-of-type(1) {
        text-align: center;
        // background: white;
        display: block;
        width: 20%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 5)/10) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(2) {
        text-align: center;
        // background: white;
        display: block;
        width: 20%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 5)/10) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(3) {
        text-align: center;
        // background: white;
        display: block;
        width: 20%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 5)/10) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(4) {
        text-align: center;
        // background: white;
        display: block;
        width: 20%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 5)/10) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(5) {
        text-align: center;
        // background: white;
        display: block;
        width: 20%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 5)/10) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(6) {
        text-align: center;
        // background: white;
        display: block;
        width: 25%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 4)/8) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(7) {
        text-align: center;
        // background: white;
        display: block;
        width: 25%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 4)/8) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(8) {
        text-align: center;
        // background: white;
        display: block;
        width: 25%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 4)/8) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
      &:nth-of-type(9) {
        text-align: center;
        // background: white;
        display: block;
        width: 25%;
        height: 180 / @rem;
        float: left;
        text-decoration: none;
        // color: #929292;
        .categoryImg {
          height: 120 / @rem;
          width: 100%;
          position: relative;
          img {
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            width: 90 / @rem;
            left: ((750-90 * 4)/8) / @rem;
          }
        }
        div {
          width: 100%;
          height: 60 / @rem;
          line-height: 60 / @rem;
        }
      }
    }
  }
}
.loading {
  img {
    width: 16rem;
  }
}
</style>

