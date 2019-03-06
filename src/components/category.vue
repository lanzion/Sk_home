<template>
  <div class='category' v-if='categoryArrBefore.length >1'>
      	<router-link :to="{path:'/catetory/'+data, query:{id:item.URL}}" v-for='(item,index) in categoryArrBefore' :key='index' :class="'cate'+categoryArrBefore.length" >
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
</template>
<script>
export default {
  props: ["categoryArr", "categroysKind",'categoryArrBefore'],
  data() {
    return {
      dataArr: [],
      data: ""
    };
    
  },
  methods: {
    Statistics(item, mess) {
      this.$statistics = this.$statistics.of("catetory|" + mess);
      this.$statistics.click(item);
    }
  },
  created() {
    var This = this;

    this.data = this.$store.state.category;

  },
  watch: {
    $route(to, from) {
      this.data = this.$store.state.category;
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
#app{
.category {
  font-size:28/@rem;
  width: 100%;
  overflow: hidden;
  a{
    margin-left:0;
    background: #fff;
     color: #929292;
    img{
        -webkit-box-shadow: 0px 0px 0px 0px #eee; 
        box-shadow:  0px 0px 0px 0px #eee;
        border-radius: 0px;
    }
  }
  .cate3 {
    text-align: center;
    // background: white;
    display: block;
    width: 33.333%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    // color: #929292;
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
  .cate4 {
    text-align: center;
    // background: white;
    display: block;
    width: 25%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    // color: #929292;
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
  .cate5 {
    text-align: center;
    // background: white;
    display: block;
    width: 20%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    // color: #929292;
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
    // background: white;
    display: block;
    width: 33.333%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    // color: #929292;
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
  .cate7{
    &:nth-of-type(7) {
      text-align: center;
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
     width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 33.3%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 33.3%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
       width: 33.3%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
    // background: white;
    display: block;
    width: 25%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    // color: #929292;
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
    // background: white;
    display: block;
    width: 20%;
    height: 180/@rem;
    float: left;
    text-decoration: none;
    // color: #929292;
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
      // background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 20%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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
      // background: white;
      display: block;
      width: 25%;
      height: 180/@rem;
      float: left;
      text-decoration: none;
      // color: #929292;
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

