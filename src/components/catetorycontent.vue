<template>

  <swiper :options="catetoryBodySwiperOption" ref="catetoryBodySwiper" id='cate'>
    <swiper-slide v-for='(item,index) in categorys' :key='index' style='width:100%;' :class='"cate"+bannerLlis[+index]'>
      <categorytemplate :recommendtitle='categroyList[index]' :NavigationConfig='categoryArr[index].NavigationConfig' :TITLE='categoryArr[index].Describe' v-if='categoryArr[index]'></categorytemplate>
    </swiper-slide>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import advertisingSpace from '@/components/advertisingSpace'
import categorytemplate from '@/components/categorytemplate.vue'
import catetoryartical from '@/components/catetoryartical.vue'
import catetoryPrduct from '@/components/catetoryPrduct.vue'
export default {
  props: ['categroyList', 'bannerLlis', 'categoryArr', 'categorys'],
  data() {
    return {
      index: null,
      slideflag: false,
      catetoryBodySwiperOption: {
        resistanceRatio: 0,
        initialSlide: 3,
        on: {
          init() {},
          touchStart() {
            var Name = document.getElementsByClassName('default')[0]
            if (
              Name.getElementsByClassName('swiper-slide-active')[1] &&
              Name.getElementsByClassName('Ttitle')[0] &&
              Name.getElementsByClassName('three')[0]
            ) {
              var Height =
                document.getElementsByClassName(
                  'cate' + this.App.$route.query.id
                )[0].clientHeight +
                Name.getElementsByClassName('Ttitle')[0].clientHeight +
                Name.getElementsByClassName('three')[0].clientHeight
              if (Height < document.documentElement.clientHeight) {
                Height = document.documentElement.clientHeight
              }
              document.getElementById('app').style.height = Height + 'px'
              document.getElementById('app').style.overflow = 'hidden'
            }

            if (this.App) {
              var activeIndex = this.activeIndex
              this.App.startIndex = this.activeIndex
              var ScTop =
                document.documentElement.scrollTop || document.body.scrollTop
              var catetoryname = this.App.$route.params.id
                .split('_')[0]
                .toLowerCase()
              // var catetoryId = this.App.$route.query.id;
              // this.App.$store.state[catetoryname][
              //   catetoryId + "scrollTop"
              // ] = ScTop;

              if (this.App.bannerLlis[this.activeIndex + 1]) {
                this.slides
                  .eq(this.activeIndex + 1)
                  .css(
                    'transform',
                    'translate3d(0,' +
                      (ScTop -
                        this.App.$store.state[catetoryname][
                          this.App.bannerLlis[this.activeIndex + 1] +
                            'scrollTop'
                        ]) +
                      'px,0)'
                  )
              }
              if (this.App.bannerLlis[this.activeIndex - 1]) {
                this.slides
                  .eq(this.activeIndex - 1)
                  .css(
                    'transform',
                    'translate3d(0,' +
                      (ScTop -
                        this.App.$store.state[catetoryname][
                          this.App.bannerLlis[this.activeIndex - 1] +
                            'scrollTop'
                        ]) +
                      'px,0)'
                  )
              }
              if (this.App.slideflag == false) {
                this.App.slideflag = true
              }
            }
          },
          slideChangeTransitionEnd() {},
          slideChange() {
            var activeIndex = this.activeIndex
            var This = this
            if (this.App) {
              var catetoryname = this.App.$route.params.id
                .split('_')[0]
                .toLowerCase()
              if (this.slides.eq(activeIndex)) {
                var Name = document.getElementsByClassName('default')[0]
                if (Name.getElementsByClassName('swiper-slide-active')[1]) {
                  var Height =
                    document.getElementsByClassName(
                      'cate' + this.App.$route.query.id
                    )[0].clientHeight +
                    Name.getElementsByClassName('Ttitle')[0].clientHeight +
                    Name.getElementsByClassName('three')[0].clientHeight
                  if (Height < document.documentElement.clientHeight) {
                    Height = document.documentElement.clientHeight
                  }
                  document.getElementById('app').style.height = Height + 'px'
                  document.getElementById('app').style.overflow = 'hidden'
                }
                // this.slides.eq(activeIndex).css('transform','translate3d(0,0,0)')
                // document.documentElement.scrollTop = document.body.scrollTop = this.App.$store.state[catetoryname][ this.App.bannerLlis[activeIndex]+'scrollTop'];
              }
            }
          },
          transitionEnd() {
            document.getElementById('app').style.overflow = 'visible'
            var activeIndex = this.activeIndex
            var This = this
            if (This.App) {
              if (this.App.slideflag) {
                This.router.replace({
                  query: { id: This.App.bannerLlis[activeIndex] }
                })
              }
            }

            if (this.App) {
              var catetoryname = this.App.$route.params.id
                .split('_')[0]
                .toLowerCase()
              if (this.slides.eq(activeIndex)) {
                var activeIndex = this.activeIndex
                this.slides
                  .eq(activeIndex)
                  .css('transform', 'translate3d(0,0,0)')
                document.documentElement.scrollTop = document.body.scrollTop = this.App.$store.state[
                  catetoryname
                ][this.App.bannerLlis[activeIndex] + 'scrollTop']
              }
            }
          }
        }
      }
    }
  },
  components: {
    categorytemplate,
    catetoryartical,
    catetoryPrduct,
    advertisingSpace
  },
  computed: {
    catetoryBodySwiper() {
      return this.$refs.catetoryBodySwiper.swiper
    },
    storeIndex() {
      return this.$store.state.sildeIndex
    }
  },
  created() {
    var This = this
  },
  watch: {
    storeIndex() {
      if (this.catetoryBodySwiper) {
        This.catetoryBodySwiper.slideTo(this.storeIndex, 0, false)
      }
    },
    $route() {
      var flag = this.$route.params.id.split('_')[0].toLowerCase()
      for (var i = 0; i < this.bannerLlis.length; i++) {
        if (this.bannerLlis[i] == this.$route.query.id) {
          if (this.categroyList[i - 1]) {
            if (this.categroyList[i - 1].length == 0) {
              this.$store.dispatch('getCatetoryOneDate', {
                Id: this.bannerLlis[i - 1],
                catetory: flag
              })
            }
          }
          if (this.categroyList[i].length == 0) {
            this.$store.dispatch('getCatetoryOneDate', {
              Id: this.bannerLlis[i],
              catetory: flag
            })
          }
          if (this.categroyList[i + 1]) {
            if (this.categroyList[i + 1].length == 0) {
              this.$store.dispatch('getCatetoryOneDate', {
                Id: this.bannerLlis[i + 1],
                catetory: flag
              })
            }
          }
        }
      }
      if (this.catetoryBodySwiper) {
        this.catetoryBodySwiper.slideTo(
          this.bannerLlis.indexOf(this.$route.query.id),
          0,
          false
        )

        // var  activeIndex = this.bannerLlis.indexOf(this.$route.query.id)
        // if(document.getElementById('cate').getElementsByClassName('swiper-slide')){

        //     var catetoryname = this.$route.params.id
        //     .split("_")[0]
        //     .toLowerCase();
        // document.getElementById('cate').getElementsByClassName('swiper-slide')[activeIndex].style.transform = 'translate3d(0,0,0)'
        //     document.documentElement.scrollTop = document.body.scrollTop = this.$store.state[catetoryname][ this.bannerLlis[activeIndex]+'scrollTop'];
        // }
      }
    }
  },
  mounted() {
    this.catetoryBodySwiper.App = this
    this.catetoryBodySwiper.route = this.$route
    this.catetoryBodySwiper.router = this.$router
    var This = this
    if (this.$route.meta.index == 100) {
      var TTimer = setInterval(function() {
        if (This.bannerLlis) {
          if (
            This.bannerLlis.length > 0 &&
            This.catetoryBodySwiper &&
            This.catetoryBodySwiper.slides.length == This.bannerLlis.length
          ) {
            This.catetoryBodySwiper.slideTo(
              This.bannerLlis.indexOf(This.$route.query.id),
              0,
              false
            )
            clearInterval(TTimer)
          }
        }
      }, 10)
    }
  }
}
</script>
<style lang="less">
#cate {
  background: #f6f6f6;
  margin-bottom: 1.92rem;
}
</style>



