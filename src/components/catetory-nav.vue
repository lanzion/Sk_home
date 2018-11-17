<template>
      <div class='three'>
        <swiper class='catetoryNav' :options="HeaderSwiperOption" ref="HSwiper" >
            <swiper-slide v-for='(item,index) in categorys' :key='index' :class="'cates'+categorys.length"  >
              <router-link  exact :to="{path:'/catetory/'+data ,query: {id: bannerLlis[index]}} " replace   >{{item}}</router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  props: ["categorys", "bannerLlis", "data"],
  data() {
    return {
      HeaderSwiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        on: {
          init() {
            var This = this;
            var slideTimer = setInterval(function() {
              if (This.slides.length != 0) {
                for (var i = 0; i < This.slides.length; i++) {
                  This.slides[i].index = i
                  This.slides[i].onclick = function() {
                    This.App.Statistics(This.App.bannerLlis[this.index]);
                  };
                }
                clearInterval(slideTimer);
              }
            }, 20);
          },
          click(){
            var  activeIndex = this.clickedIndex
            if(document.getElementById('cate').getElementsByClassName('swiper-slide')){

                var catetoryname = this.App.$route.params.id
                .split("_")[0]
                .toLowerCase();
            document.getElementById('cate').getElementsByClassName('swiper-slide')[this.clickedIndex].style.transform = 'translate3d(0,0,0)'
                // document.documentElement.scrollTop = document.body.scrollTop = this.App.$store.state[catetoryname][ this.App.bannerLlis[activeIndex]+'scrollTop'];
            // document.documentElement.scrollTop = document.body.scrollTop = 0
            }
          }
        }
      }
    };
  },
  computed: {
    cateswiper() {
      return this.$refs.HSwiper.swiper;
    }
  },
  created() {
    var This = this;
    var TIMER1 = setInterval(function() {
      if (This.cateswiper) {
        var tSpeed = 0;
        var activeIndex = This.bannerLlis.indexOf(This.$route.query.id);
        if (This.cateswiper.slides[activeIndex]) {
          var activeSlidePosition =
            This.cateswiper.slides[activeIndex].offsetLeft;
          if (activeIndex > 0) {
            This.cateswiper.slides.eq(activeIndex - 1).transition(tSpeed);
          }
          if (activeIndex < This.cateswiper.slides.length) {
            This.cateswiper.slides.eq(activeIndex + 1).transition(tSpeed);
          }
          var navWidth = 0;
          for (var i = 0; i < This.cateswiper.slides.length; i++) {
            navWidth += parseInt(This.cateswiper.slides.eq(i).outerWidth(true));
          }
          var navActiveSlideLeft =
            This.cateswiper.slides[activeIndex].offsetLeft; //activeSlide距左边的距离
          var navSlideWidth = This.cateswiper.slides
            .eq(activeIndex)
            .outerWidth(true);
          This.cateswiper.setTransition(tSpeed);
          var clientWidth = parseInt(
            This.cateswiper.$wrapperEl.outerWidth(true)
          );
          if (
            navActiveSlideLeft <
            (clientWidth - parseInt(navSlideWidth)) / 2
          ) {
            This.cateswiper.setTranslate(0);
          } else if (
            navActiveSlideLeft >
            navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
          ) {
            This.cateswiper.setTranslate(clientWidth - navWidth);
          } else {
            This.cateswiper.setTranslate(
              (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
            );
          }
          clearInterval(TIMER1);
        }
      }
    }, 60);
    var This = this;
    var Length = 0;
    var timer = setInterval(function() {
      if (This.cateswiper && This.categorys.length > 0) {
        if (This.categorys.length < 4) {
          This.cateswiper.slides.css("width", "20%").css('margin-left',"6%").css('margin-right','6%');
        }
        clearInterval(timer);
      }
    }, 30);
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("CATETORY_BANNER|");
      this.$statistics.click(item);
    }
  },
  watch: {
    $route() {
      if (this.cateswiper && this.cateswiper.slides.length > 4) {
        var tSpeed = 300;
        var activeIndex = this.bannerLlis.indexOf(this.$route.query.id);
        if (this.cateswiper.slides[activeIndex]) {
          var activeSlidePosition = this.cateswiper.slides[activeIndex]
            .offsetLeft;
          if (activeIndex > 0) {
            this.cateswiper.slides.eq(activeIndex - 1).transition(tSpeed);
          }
          if (activeIndex < this.cateswiper.slides.length) {
            this.cateswiper.slides.eq(activeIndex + 1).transition(tSpeed);
          }
          var navWidth = 0;
          for (var i = 0; i < this.cateswiper.slides.length; i++) {
            navWidth += parseInt(this.cateswiper.slides.eq(i).outerWidth(true));
          }
          var navActiveSlideLeft = this.cateswiper.slides[activeIndex]
            .offsetLeft; //activeSlide距左边的距离
          var navSlideWidth = this.cateswiper.slides
            .eq(activeIndex)
            .outerWidth(true);
          this.cateswiper.setTransition(tSpeed);
          var clientWidth = parseInt(
            this.cateswiper.$wrapperEl.outerWidth(true)
          );
          if (
            navActiveSlideLeft <
            (clientWidth - parseInt(navSlideWidth)) / 2
          ) {
            this.cateswiper.setTranslate(0);
          } else if (
            navActiveSlideLeft >
            navWidth - (parseInt(navSlideWidth) + clientWidth) / 2
          ) {
            this.cateswiper.setTranslate(clientWidth - navWidth);
          } else {
            this.cateswiper.setTranslate(
              (clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft
            );
          }
        }
      }
    }
  },
  mounted() {
    this.cateswiper.router = this.$router;
    this.cateswiper.App = this;
    this.cateswiper.route = this.$route;
    this.cateswiper.store = this.$store;
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.three {
  .swiper-slide {
    height: 100%;
    padding: 0;
    margin: 0;
  }
}
.catetoryNav {
  border-bottom: 1px solid #ccc;
  width: auto;
  background: white;

  a {
    text-decoration: none;
    display: block;
    height: 100%;
    background: white;
    color: #b7b7b7;
  }
  active {
    color: white;
  }
  .swiper-slide {
    width: 170/@rem;
    font-size: 30/@rem;
    height: 60/@rem;
    line-height: 60/@rem;
    margin: 0 12/@rem;
    box-sizing: border-box;
    margin-bottom: 2px;
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
    border-bottom: 2px solid #b4282d;
    color: #b4282d;
    font-weight: 580;
  }
  .cates3 {
    width: 33.333%;
    // padding:0;margin:0;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  .cates4 {
    width: 25%;
    // padding:0;margin:0;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>


