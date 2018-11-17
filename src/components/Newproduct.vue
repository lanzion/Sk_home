<template>
    <div class='new' v-if='NewProduct && NewProduct.length > 0 ' >
	<router-link :to="{path:'/getMoreProduct/'+cateoryeName}" class='title' v-if="cateoryeName =='HOME' " >
    <div @click='StatisticsNew()' >
          新品首发
          <!-- <img src="http://gdtvimg.weixinmvp.com/res/gdtvimg/20180328/eb299706fbd84fb0a387664616b621ef.png" alt=""> -->
          <span>查看更多&gt;</span>
          </div>
   
        </router-link>

 <div v-else class='title'>
          新品首发
       
          </div>
        <a v-for='(item,index) in NewProduct' :key="index" :href="item.Url" @click="Statistics(item.ProductNo + '|' + index)"> 
            <img v-lazy="item.ImageUrl" alt="">
             <div class='newIMg'>
                 <!-- <img  src="../assets/images/newproduct.png" alt=""> -->
                 <!-- <img  src="http://gdtvimg.weixinmvp.com/res/gdtvimg/20180328/e87fe0601ffd4aec93176503ccc32b74.png" alt=""> -->
            </div>
            <div class='newTitle'>{{item.Title}}</div>
            <div class='newDescribe'>{{item.Describe}}</div>
            <div class='newPrice'>￥{{item.Param1}}</div>
            <span class='span'>新品</span>
            <!-- <img class='tubiao' src="http://gdtvimg.weixinmvp.com/res/gdtvimg/20180328/e87fe0601ffd4aec93176503ccc32b74.png" alt=""> -->
        </a>
    </div>
</template>
<script>
export default {
  props: ["NewProduct", "cateoryeName"],
  data() {
    return {
      flag: ""
    };
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("NewProduct|"+this.flag);
      this.$statistics.click(item);
    },
    StatisticsNew() {
      this.$statistics = this.$statistics.of("MORENEWPRODUCT|");
      this.$statistics.click("新品首发查看更多");
    }
  },
  created() {
    this.flag = this.$route.name;
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.new {
  overflow: hidden;
  .title {
    display: block;
    width: 100%;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 580;
    position: relative;
    background: white;
    color: #747474;
    margin: 15/@rem 0 10/@rem 0;

    span {
      position: absolute;
      right: 10/@rem;
      top: 0;
      font-size: 24/@rem;
      color: #9a9a9a;
    }
    img {
      position: absolute;
      width: 36/@rem;
      line-height: 100/@rem;
      display: inline-block;
      left: 470/@rem;
      top: 34/@rem;
    }
  }
  a {
        .span{
 width: 60/@rem;
        height: 26/@rem;  
        // margin-right:8/@rem;
        position: absolute;
        line-height:26/@rem;
        font-size:20/@rem;
        top:0;
        display: inline-block;
        text-align: center;
        background:#e57b7b;
        color:white;
      }
    margin-bottom: 15/@rem;
    position: relative;
    text-decoration: none;
    width: ((750-40)/3)/@rem;
    // width: ((750-80)/3)/@rem;
    float: left;
    margin-left: 10/@rem;
    // margin-left: 20/@rem;
    color: black;
    text-decoration: none;
    .tubiao {
      position: absolute;
      top: 0;
      left: 0;
      width: 60/@rem;
      height: 26/@rem;
      margin: 0;
      padding: 0;
    }
    img {
      // width: ((750-80)/3)/@rem;
      // height: ((750-80)/3)/@rem;
      width: ((750-40)/3)/@rem;
      height: ((750-40)/3)/@rem;

      padding-top: 26/@rem;
      background: white;
      padding-bottom: 26/@rem;
    }
    div {
      img {
        width: 60/@rem;
        height: 26/@rem;
        line-height: 40/@rem;
        margin: 0;
        padding: 0;
      }
    }
    .newIMg {
      span {
        display: inline-block;
        height: 30/@rem;
        width: 60/@rem;
        font-size: 24/@rem;
        text-align: center;
        line-height: 30/@rem;
        color: white;
        background: #e57b7b;
      }
    }
    .newTitle {
      line-height: 40/@rem;
      font-size: 28/@rem;
      height: 40/@rem;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #565656;
    }
    .newDescribe {
      line-height: 40/@rem;
      font-size: 24/@rem;
      height: 40/@rem;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // display: -webkit-box;
      // -webkit-line-clamp: 2;
      // -webkit-box-orient: vertical;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #a7a7a7;
    }
    .newPrice {
      font-size: 28/@rem;
      color: #b4282d;
      line-height: 34/@rem;
      height: 34/@rem;
    }
  }
}
</style>


