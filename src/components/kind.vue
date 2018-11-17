<template>
  <div class='kind' v-if='categoryArrBefore'>
      <swiper :options="KindSwiper" >
          <swiper-slide v-for='(kindarr,index1) in categoryArrBefore ' :key='index1'> 
            <div v-if='categoryArrBefore.length>1'>
              <router-link :to="{path:'/catetory/'+cateData+'/kind/'+data, query:{id:item.Id}}" v-for='(item,index) in kindarr' :key='index' class="cate10" >
                <div  @click='Statistics(item.URL,item.Title)'>
                <div class='categoryImg'>
                  <img v-lazy="item.ImageUrl" alt="">
                </div>
                <div>
                    {{item.Title}}
                    
                </div>
                </div>
              </router-link>
            </div>
            <div v-else>
              <router-link :to="{path:'/catetory/'+cateData+'/kind/'+data, query:{id:item.Id}}" v-for='(item,index) in kindarr' :key='index' :class="'cate'+kindarr.length" >
                <div  @click='Statistics(item.URL,item.Title)'>
                <div class='categoryImg'>
                  <img v-lazy="item.ImageUrl" alt="">
                </div>
                <div>
                    {{item.Title}}
                    
                </div>
                </div>
              </router-link>
            </div>

          </swiper-slide>
      </swiper>
  </div>
</template>
<script>
export default {
  props: ["categoryArr", "categroysKind",'categoryArrBefore'],
  data() {
    return {
      dataArr: [],
      data: "",
      cateData:'',
      KindSwiper:{
        resistanceRatio: 0,
        touchRatio: 0.6,
      }
    };
  },
  methods: {
    Statistics(item, mess) {
      this.$statistics = this.$statistics.of("kind|" + mess);
      this.$statistics.click(item);
    }
  },
  created() {
    var This = this;
    this.data = this.$route.query.id;
    this.cateData = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      this.data = this.$route.query.id;
      this.cateData = this.$route.params.id;
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
#app{

.kind {
  background:white;
  font-size:28/@rem;
  width: 100%;
  overflow: hidden;
  a{
    margin-left:0;
    border-radius: 0;
    img{
        -webkit-box-shadow: 0px 0px 0px 0px #eee; 
        box-shadow:  0px 0px 0px 0px #eee;
        border-radius: 0px;
    }
  }
    .cate2 {
    text-align: center;
    background: white;
    display: block;
    width: 50%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 100/@rem;
        height: 100/@rem;
        left: ((750-90*2)/4)/@rem;
      }
    }
    div {
      width: 100%;
      height: 40/@rem;
      line-height: 40/@rem;
    }
  }
  .cate3 {
    text-align: center;
    background: white;
    display: block;
    width: 33.333%;
height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 100/@rem;
        height: 100/@rem;
        left: ((750-90*3)/6)/@rem;
      
      }
    }
    div {
      width: 100%;
      height: 40/@rem;
      line-height: 40/@rem;
    }
  }
  .cate4 {
    text-align: center;
    background: white;
    display: block;
    width: 25%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*4)/8)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
    }
  }
  .cate5,.cate1 {
    text-align: center;
    background: white;
    display: block;
    width: 20%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*5)/10)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
    }
  }
    .cate6 {
    text-align: center;
    background: white;
    display: block;
    width: 33.333%;
height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height:  120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 100/@rem;
        height: 100/@rem;
        left: ((750-90*3)/6)/@rem;
      
      }
    }
    div {
      width: 100%;
      height: 40/@rem;
      line-height: 40/@rem;
    }
  }
  .cate7{
    &:nth-of-type(7) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(6) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
           left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(5) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(4) {
      text-align: center;
      background: white;
      display: block;
     width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(3) {
      text-align: center;
      background: white;
      display: block;
      width: 33.3%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*3)/6)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(2) {
      text-align: center;
      background: white;
      display: block;
      width: 33.3%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*3)/6)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(1) {
      text-align: center;
      background: white;
      display: block;
       width: 33.3%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*3)/6)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
  }

  .cate8 {
    text-align: center;
    background: white;
    display: block;
    width: 25%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*4)/8)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
    }
  }
  .cate10 {
    text-align: center;
    background: white;
    display: block;
    width: 20%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    color: #929292;
    .categoryImg {
      height: 120/@rem;
      width: 100%;
      position: relative;
      img {
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        width: 90/@rem;
        height: 90/@rem;
        left: ((750-90*5)/10)/@rem;
      }
    }
    div {
      width: 100%;
      height: 60/@rem;
      line-height: 60/@rem;
    }
  }
  .cate9 {
    &:nth-of-type(1) {
      text-align: center;
      background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*5)/10)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(2) {
      text-align: center;
      background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*5)/10)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(3) {
      text-align: center;
      background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*5)/10)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(4) {
      text-align: center;
      background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*5)/10)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(5) {
      text-align: center;
      background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*5)/10)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(6) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(7) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(8) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
    &:nth-of-type(9) {
      text-align: center;
      background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      color: #929292;
      .categoryImg {
        height: 120/@rem;
        width: 100%;
        position: relative;
        img {
          padding: 5px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          width: 90/@rem;
          height: 90/@rem;
          left: ((750-90*4)/8)/@rem;
        }
      }
      div {
        width: 100%;
        height: 60/@rem;
        line-height: 60/@rem;
      }
    }
  }
  }
}
</style>

