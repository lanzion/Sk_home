<template>
   <swiper>
   <swiper  ref="kindBodySwiper" id='cate' :options="kindBodySwiperOption">
                <swiper-slide v-for='(item,index) in NavigateId' :key = 'index' style='width:100%;'>
                   <categorytemplate :recommendtitle = 'NavigateData[index]'  :TITLE = 'NavigateDescribe[index]' ></categorytemplate>
                </swiper-slide>
    </swiper>
    </swiper>
</template>

<script>
import categorytemplate from "@/components/categorytemplate.vue";
export default {
  data() {
    return {
      flag:false,
      kindBodySwiperOption: {
        resistanceRatio: 0,
        on: {
          init() {},
          touchStart() {
            this.App.flag = true;
            
            this.App.$store.state["kindPageScroll" +this.App.$route.query.id] = document.documentElement.scrollTop || document.body.scrollTop;
            if (this.App) {
              var activeIndex = this.activeIndex;
              this.App.startIndex = this.activeIndex;
              var ScTop =
                document.documentElement.scrollTop || document.body.scrollTop;

              if (this.App.NavigateId[this.activeIndex + 1]) {
                this.slides
                  .eq(this.activeIndex + 1)
                  .css(
                    "transform",
                    "translate3d(0," +
                      (ScTop -
                        this.App.$store.state[
                          "kindPageScroll" +
                            this.App.NavigateId[this.activeIndex + 1]
                        ]) +
                      "px,0)"
                  );
              }
              if (this.App.NavigateId[this.activeIndex - 1]) {
                this.slides
                  .eq(this.activeIndex - 1)
                  .css(
                    "transform",
                    "translate3d(0," +
                      (ScTop -
                        this.App.$store.state[
                          "kindPageScroll" +
                            this.App.NavigateId[this.activeIndex - 1]
                        ]) +
                      "px,0)"
                  );
              }
            }
          },
          slideChangeTransitionEnd() {},
          slideChange() {},
          transitionEnd() {
            this.el.style.height = 100000 + "px";
            var activeIndex = this.activeIndex;
            var This = this;
            if (This.App && this.slides && this.slides.length == this.App.NavigateId.length ) {
              if(this.App.flag){
              This.router.replace({
                query: { id: This.App.NavigateId[activeIndex] }
              });
              }


              if (this.slides.eq(activeIndex)) {
                this.slides
                  .eq(activeIndex)
                  .css("transform", "translate3d(0,0,0)");
                document.documentElement.scrollTop = document.body.scrollTop = this.App.$store.state[
                  "kindPageScroll" + this.App.$route.query.id
                ];
              }
            }
          }
        }
      }
    };
  },
  computed: {
    kindBodySwiper() {
      return this.$refs.kindBodySwiper.swiper;
    }
  },
  props: ["NavigateData", "NavigateId", "NavigateDescribe"],
  components: {
    categorytemplate
  },
  watch: {
    $route() {
      this.kindBodySwiper.slideTo(
        this.NavigateId.indexOf(this.$route.query.id),
        0,
        false
      );
      if (this.kindBodySwiper && this.NavigateId && this.NavigateId.length) {
        var index = this.NavigateId.indexOf(this.$route.query.id);
        var limit = this.kindBodySwiper.slides
          .eq(index)
          .find(".categorytemplate")[0].clientHeight;
          var name = document.getElementsByClassName('default')[0];
          var Height = name.getElementsByClassName("Ttitle")[0].clientHeight +
          name.getElementsByClassName("three")[0].clientHeight;
        if (limit < document.documentElement.clientHeight - Height) {
          limit = document.documentElement.clientHeight - Height;
        }
        this.kindBodySwiper.el.style.height = limit + "px";
        this.kindBodySwiper.el.style.overflow = "hidden";
      }
    }
  },
  mounted() {
    var kindId = this.$route.query.id;
    window.addEventListener("scroll", this.menu);
    this.kindBodySwiper.App = this;
    this.kindBodySwiper.route = this.$route;
    this.kindBodySwiper.router = this.$router;
    var This = this;
    var kindTimer = setInterval(function() {
      if (
        This.NavigateId &&
        This.NavigateData &&
        This.NavigateDescribe &&
        This.NavigateDescribe.length  &&
        This.kindBodySwiper.slides && This.kindBodySwiper.slides .length > 0
      ) {
        var index = This.NavigateId.indexOf(kindId);
        This.kindBodySwiper.params.initialSlide = index;
        This.kindBodySwiper.slideTo(index,0,false);
        var limit = This.kindBodySwiper.slides
          .eq(index)
          .find(".categorytemplate")[0].clientHeight;
        if (limit < document.documentElement.clientHeight) {
          limit = document.documentElement.clientHeight;
        }
        This.kindBodySwiper.el.style.height = limit + "px";
        This.kindBodySwiper.el.style.overflow = "hidden";
        clearInterval(kindTimer);
      }
    }, 30);
  },
  created(){
    var app = document.getElementById('app');
    app.style.overflow = 'hidden';
    app.style.height = 'auto'
  },
  methods: {
    menu() {

  var top = document.documentElement.scrollTop || document.body.scrollTop;
  top = top + document.documentElement.clientHeight;
  var Height =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  if (Height - top < 300) {
      this.$store.dispatch("getMoreKindProduct", {
        id: this.$route.query.id
      });
  }
      if (this.kindBodySwiper && this.NavigateId && this.NavigateId.length && this.kindBodySwiper.slides && this.kindBodySwiper.slides .length > 0) {
        var index = this.NavigateId.indexOf(this.$route.query.id);
        var limit = this.kindBodySwiper.slides
          .eq(index)
          .find(".categorytemplate")[0].clientHeight;
          var name = document.getElementsByClassName('default')[0];
          var Height = name.getElementsByClassName("Ttitle")[0].clientHeight +
          name.getElementsByClassName("three")[0].clientHeight;
        if (limit < document.documentElement.clientHeight - Height) {
          limit = document.documentElement.clientHeight - Height;
        }
        this.kindBodySwiper.el.style.height = limit + "px";
        this.kindBodySwiper.el.style.overflow = "hidden";
      }
    }
  }
};
</script>
<style>
</style>
