<template>
    <div class='three'>
        <swiper class='catetoryNav' :options="HeaderSwiperOption" ref="HSwiper">
            <swiper-slide v-for='(item,index) in categorys' :key='index'>
              <router-link  exact :to="{path:'/catetory/'+data ,query: {id: bannerLlis[index]}} " >{{item}}</router-link>
            </swiper-slide>
        </swiper>
        <swiper :options="BodySwiperOption" ref="BodySwiper">
                <swiper-slide v-for='(item,index) in categroyList' :key = 'index' style='width:100%;'>
                   <categorytemplate :recommendtitle = 'item' :TITLE = 'bannerLlis[index]' :dataAaa = 'dataAaa'></categorytemplate>
                </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import advertisingSpace from "@/components/advertisingSpace";
import categorytemplate from "@/components/categorytemplate.vue";
import catetoryartical from "@/components/catetoryartical.vue";
import catetoryPrduct from "@/components/catetoryPrduct.vue";
import axios from "axios";
export default {
  name: "mySwiper",
  components: {
    categorytemplate,
    catetoryartical,
    catetoryPrduct,
    advertisingSpace
  },
  created() {
    var flag = this.$route.params.id.split("_")[0].toLowerCase();
    var This = this;
    var cName = this.$route.params.id;
    this.data = this.$route.params.id;
    var This = this;
    if (this.$store.state[flag].categroysKind.length > 0) {
      this.$store.dispatch("getcatetoryData", {
        kindArr: this.$store.state[flag].categroysKind,
        catetoraName: flag
      });
    } else {
      this.$store.dispatch("getcatetory", {
        catetoraName: cName,
        catetory: flag
      });
    }
  },
  watch: {},
  data() {
    return {
      index: 0,
      List: [],
      data: "",
      titleList: [],
      urlList: [],
      dataAaa: [],
      artical: null,
      articalProduct: [],
      ProductList: [],
      HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        on: {
          init() {
          },
          click(e) {
            var navWidth = 0;
            for (var i = 0; i < this.slides.length; i++) {
              navWidth += parseInt(this.slides.eq(i).css("width"));
            }
            var clientWidth = parseInt(this.$wrapperEl.css("width"));
            var clickIndex = this.clickedIndex;
            var activeSlidePosition = this.slides[clickIndex].offsetLeft;
            var tSpeed = 300;
            var navSlideWidth = this.slides.eq(clickIndex).css("width");
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
            this.Bswiper.slideTo(clickIndex, 500, false);
          }
        }
      },
      BodySwiperOption: {
        watchSlidesProgress: true,
        resistanceRatio: 0,
        on: {
          init() {},
          touchMove: function() {},
          transitionStart: function() {
            if (this.Hswiper) {
              var tSpeed = 300;
              var activeIndex = this.activeIndex;
              var activeSlidePosition = this.Hswiper.slides[activeIndex]
                .offsetLeft;
              this.Hswiper.slides.eq(activeIndex).css("color", "red");
              if (activeIndex > 0) {
                this.Hswiper.slides.eq(activeIndex - 1).transition(tSpeed);
                this.Hswiper.slides
                  .eq(activeIndex - 1)
                  .css("color", "rgba(51,51,51,1)");
                this.Hswiper.slides
                  .eq(activeIndex - 1)
                  .css("border-bottom", "2px solid white");
              }
              if (activeIndex < this.slides.length) {
                this.Hswiper.slides.eq(activeIndex + 1).transition(tSpeed);
                this.Hswiper.slides
                  .eq(activeIndex + 1)
                  .css("color", "rgba(51,51,51,1)");
                this.Hswiper.slides
                  .eq(activeIndex + 1)
                  .css("border-bottom", "2px solid white");
              }
              var navWidth = 0;
              for (var i = 0; i < this.Hswiper.slides.length; i++) {
                navWidth += parseInt(this.Hswiper.slides.eq(i).css("width"));
              }
              var navActiveSlideLeft = this.Hswiper.slides[activeIndex]
                .offsetLeft; //activeSlide距左边的距离
              var navSlideWidth = this.Hswiper.slides
                .eq(activeIndex)
                .css("width");
              this.Hswiper.setTransition(tSpeed);
              var clientWidth = parseInt(this.Hswiper.$wrapperEl.css("width"));
              if (
                navActiveSlideLeft <
                (clientWidth - parseInt(navSlideWidth)) / 2
              ) {
                this.Hswiper.setTranslate(0);
              } else if (
                navActiveSlideLeft >
                navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
              ) {
                this.Hswiper.setTranslate(clientWidth - navWidth);
              } else {
                this.Hswiper.setTranslate(
                  (clientWidth - parseInt(navSlideWidth)) / 2 -
                    navActiveSlideLeft
                );
              }
            }
          },
          transitionEnd() {
            var activeIndex = this.activeIndex;
            if (this.App) {
              this.router.push({
                query: { id: this.App.bannerLlis[activeIndex] }
              });
            }
          }
        }
      }
    };
  },
  computed: {
    bannerLlis() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();

      return this.$store.state[flag].categroysKind;
    },
    categorys() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();

      return this.$store.state[flag].categorys;
    },
    categroyList() {
      var flag = this.$route.params.id.split("_")[0].toLowerCase();
      return this.$store.state[flag].categroyList;
    },
    Hswiper() {
      return this.$refs.HSwiper.swiper;
    },
    Bswiper() {
      return this.$refs.BodySwiper.swiper;
    }
  },
  mounted() {
    this.Hswiper.Bswiper = this.Bswiper;
    this.Bswiper.App = this;
    this.Bswiper.Hswiper = this.Hswiper;
    this.Bswiper.route = this.$route;
    this.Bswiper.router = this.$router;

    var This = this;
    var flag = this.$route.params.id.split("_")[0].toLowerCase();
    var aaa = 0;
    var Timer = setInterval(function() {
      if (This.bannerLlis.length) {
        This.bannerLlis.map(function(item,index) {
          // if(item == This.$route.query.id){
          //   This.Bswiper.slideTo(index,0,false)
          // }
        });
        clearInterval(Timer);
      }
    }, 100);
  },
  watch:{
    $route(){}
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;

.catetoryNav {
  width: auto;
  background: white;
  a {
    text-decoration: none;
    border-bottom: 0px;
    border-bottom: 0px;
    color: #b7b7b7;
  }
  active {
    color: white;
  }
  .swiper-slide {
    width: 170/@rem;
    font-size: 40/@rem;
    margin: 16/@rem 12/@rem;
    box-sizing: border-box;
    text-align: center;
    span {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 15/@rem 0;
    }
  }
  .recommend {
    width: 80/@rem;
  }
  .router-link-active {
    border-bottom: 2px solid red;
    color: red;
    font-weight: 580;
  }
}
</style>

