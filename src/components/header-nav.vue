<template>
  <div>
    <div class='containerTop'>
      <swiper class='Hcontainer' :options="HeaderSwiperOption" ref="mySwiper">
        <swiper-slide :class="'headNav'+index" v-for='(item,index) in HeadNavData' :key='index'>
          <router-link tag='span' replace :to="{name:item.Url}" v-if='!item.ImageUrl'>
            {{item.Title}}
          </router-link>
          <router-link tag='span' replace :to="{name:item.Url}" v-if='item.ImageUrl'>
            <img :src="JSON.parse(item.ImageUrl)[0].ServerUrl+JSON.parse(item.ImageUrl)[0].FilePath" alt="" v-if='item.ImageUrl'>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class='HomeTop'>
        <!-- <a href='https://gdtvshop.weixinmvp.com/Wap/Shop/Search.aspx'> <img src="../assets/images/logo.png" alt="" @click="StatisticsSearch('search')">
          <div v-if='searchtext[0]'>{{searchtext[0].Title}}
          </div>
        </a> -->
        <router-link :to="{path:'searchclass'}"> <img src="../assets/images/logo.png" alt="" @click="StatisticsSearch('search')">
          <div v-if='searchList[0]'>{{searchText}}
          </div>
        </router-link>
        <a v-if='LodUnReadNotice' href='https://gdtvshop.weixinmvp.com/wap/member/MessageIndex.aspx' @click="StatisticsMess('Mess')"> <img src="../assets/images/hmess.png" alt="">

        </a>
        <a v-else href='https://gdtvshop.weixinmvp.com/wap/member/MessageIndex.aspx' @click="StatisticsMess('Mess')"> <img src="../assets/images/message.png" alt=""> </a>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { LoadAdvertList } from "../server/getData.js";
export default {
  name: "mySwiper",
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("nav");
      this.$statistics.click(item);
    },
    StatisticsSearch(item) {
      this.$statistics = this.$statistics.of("Search");
      this.$statistics.click(item);
    },
    StatisticsMess(item) {
      this.$statistics = this.$statistics.of("Mess");
      this.$statistics.click(item);
    },
    getSearchText() {
      LoadAdvertList("IMAGE", "SEARCH_MESS", 1, 100, "").then(res => {
        this.searchList = res.data.Data;
        this.searchText = this.searchList[0].Title;
        if(this.searchList.length>1){
          setInterval(this.showMarquee, 2000)
        }
      });
    },
    showMarquee: function() {
      this.animate = true;
      if(this.searchIndex>this.searchList.length-1) this.searchIndex = 0;
      setTimeout(() => {
        this.searchText = this.searchList[this.searchIndex].Title;
        this.searchIndex++;
        this.animate = false;
      }, 1000);
    }
  },
  data() {
    return {
      HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        on: {
          init() {},
          click(e) {
            var navWidth = 0;
            for (var i = 0; i < this.slides.length; i++) {
              navWidth += parseInt(this.slides.eq(i).outerWidth(true));
            }
            var clientWidth = parseInt(this.$wrapperEl.outerWidth(true));
            var clickIndex = this.clickedIndex;
            this.APP.Statistics(this.APP.$route.name);
            var activeSlidePosition = this.slides[clickIndex].offsetLeft;
            var tSpeed = 300;
            var navSlideWidth = this.slides.eq(clickIndex).outerWidth(true);
            this.slides
              .eq(clickIndex)
              .find("span")
              .transition(tSpeed);
            if (clickIndex > 0) {
              this.slides.eq(clickIndex - 1).transition(tSpeed);
            }
            if (clickIndex < this.slides.length) {
              this.slides.eq(clickIndex + 1).transition(tSpeed);
            }
            var navActiveSlideLeft = this.slides[clickIndex].offsetLeft;
            this.setTransition(tSpeed);
            if (
              navActiveSlideLeft <
              (clientWidth - parseInt(navSlideWidth)) / 2
            ) {
              this.setTranslate(0);
            } else if (
              navActiveSlideLeft >
              navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
            ) {
              this.setTranslate(clientWidth - navWidth);
            } else {
              this.setTranslate(
                (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
              );
            }
            this.APP.$store.transition = true;
          }
        },
        transitionEnd() {}
      },
      searchList: '',
      searchText: "",
      animate: false,
      searchIndex:0,
    };
  },
  created() {
    this.$store.dispatch("getSearch");
    var This = this;
    var TIMER2 = setInterval(function() {
      if (This.Headerswiper && This.HeadNavData.length) {
        var tSpeed = 0;
        var activeIndex = 0;
        This.HeadNavData.map(function(data, index) {
          if (data.Url == This.$route.meta.loadname.toUpperCase()) {
            activeIndex = index;
          }
        });
        if (This.Headerswiper.slides[activeIndex]) {
          var activeSlidePosition =
            This.Headerswiper.slides[activeIndex].offsetLeft;
          if (activeIndex > 0) {
            This.Headerswiper.slides.eq(activeIndex - 1).transition(tSpeed);
          }
          if (activeIndex < This.Headerswiper.slides.length) {
            This.Headerswiper.slides.eq(activeIndex + 1).transition(tSpeed);
          }
          var navWidth = 0;
          for (var i = 0; i < This.Headerswiper.slides.length; i++) {
            navWidth += parseInt(
              This.Headerswiper.slides.eq(i).outerWidth(true)
            );
          }
          var navActiveSlideLeft =
            This.Headerswiper.slides[activeIndex].offsetLeft;
          var navSlideWidth = This.Headerswiper.slides
            .eq(activeIndex)
            .outerWidth(true);
          This.Headerswiper.setTransition(tSpeed);
          var clientWidth = parseInt(
            This.Headerswiper.$wrapperEl.outerWidth(true)
          );
          if (
            navActiveSlideLeft <
            (clientWidth - parseInt(navSlideWidth)) / 2
          ) {
            This.Headerswiper.setTranslate(0);
          } else if (
            navActiveSlideLeft >
            navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
          ) {
            This.Headerswiper.setTranslate(clientWidth - navWidth);
          } else {
            This.Headerswiper.setTranslate(
              (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
            );
          }
          clearInterval(TIMER2);
        }
      }
    }, 60);
    this.getSearchText();
  },
  computed: {
    HeadNavData() {
      return this.$store.state.headNavArr;
    },
    // searchtext() {
    //   return this.$store.state.searchText;
    // },
    Headerswiper() {
      return this.$refs.mySwiper.swiper;
    },
    LodUnReadNotice() {
      return this.$store.state.LodUnReadNotice;
    }
  },
  watch: {
    $route() {
      var This = this;
      if (
        this.Headerswiper &&
        This.HeadNavData.length &&
        this.Headerswiper.slides.length &&
        this.Headerswiper.slides.length == This.HeadNavData.length
      ) {
        var tSpeed = 300;
        var activeIndex = 0;
        This.HeadNavData.map(function(data, index) {
          if (data.Url == This.$route.meta.loadname.toUpperCase()) {
            activeIndex = index;
          }
        });
        var activeSlidePosition = this.Headerswiper.slides[activeIndex]
          .offsetLeft;
        if (activeIndex > 0) {
          this.Headerswiper.slides.eq(activeIndex - 1).transition(tSpeed);
        }
        if (activeIndex < this.Headerswiper.slides.length) {
          this.Headerswiper.slides.eq(activeIndex + 1).transition(tSpeed);
        }
        var navWidth = 0;
        for (var i = 0; i < this.Headerswiper.slides.length; i++) {
          navWidth += parseInt(this.Headerswiper.slides.eq(i).outerWidth(true));
        }
        var navActiveSlideLeft = this.Headerswiper.slides[activeIndex]
          .offsetLeft;
        var navSlideWidth = this.Headerswiper.slides
          .eq(activeIndex)
          .outerWidth(true);
        this.Headerswiper.setTransition(tSpeed);
        var clientWidth = parseInt(
          this.Headerswiper.$wrapperEl.outerWidth(true)
        );
        if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
          this.Headerswiper.setTranslate(0);
        } else if (
          navActiveSlideLeft >
          navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
        ) {
          this.Headerswiper.setTranslate(clientWidth - navWidth);
        } else {
          this.Headerswiper.setTranslate(
            (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
          );
        }
      }
    }
  },
  mounted() {
    this.Headerswiper.APP = this;
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.containerTop {
  position: fixed;
  z-index: 1000;
  width: 16rem;
}
#topImg {
  width: 16rem;
}
@rem: 46.875rem;
.Hcontainer {
  color: #6e6e6e;
  height: 90 / @rem;
  line-height: 90 / @rem;
  z-index: 10000;
  top: 80 / @rem;
  width: auto;
  background: white;
  .swiper-slide {
    width: 170 / @rem;
    font-size: 30 / @rem;
    padding-left: 12 / @rem;
    text-align: center;
    span {
      display: inline-block;
      height: 70%;
      line-height: 66 / @rem;
      overflow: hidden;
      margin-top: 10 / @rem;
      padding-bottom: 5 / @rem;
      img {
        width: 100%;
      }
    }
  }
  .recom {
    width: 80 / @rem;
  }
  .headNav0 {
    // width: 80 / @rem;
  }
  .router-link-active {
    border-bottom: 2px solid #b4282d;
    color: #b4282d;
    font-weight: 580;
  }
}
.HomeTop {
  background-color: white;
  height: 80 / @rem;
  position: absolute;
  top: 0 / @rem;
  left: 0;
  width: 100%;
  z-index: 10000000;
  padding-top: 10 / @rem;
  a:nth-of-type(1) {
    width: 650 / @rem;
    float: left;
    height: 100%;
    display: block;
    background: transparent;
    box-sizing: border-box;
    padding-left: 10 / @rem;
    position: relative;
    img {
      width: 650 / @rem;
    }
    div {
      position: absolute;
      top: 0 / @rem;
      left: 170 / @rem;
      font-size: 30 / @rem;
      font-weight: 500;
      width: 450 / @rem;
      color: #a0a0a1;
      height: 65 / @rem;
      line-height: 65 / @rem;
    }
  }
  a:nth-of-type(2) {
    width: 100 / @rem;
    float: left;
    height: 100%;
    display: block;
    box-sizing: border-box;
    padding-left: 26 / @rem;
    background: transparent;
    // display:
    box-sizing: border-box;
    margin-top: 2 / @rem;
    img {
      width: 80%;
    }
  }
}
</style>

