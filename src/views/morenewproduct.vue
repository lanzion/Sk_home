<template>
  <div class='moreProduct'>
      <banner-component :bannerMess = 'moreProductImg'></banner-component>
      <div class='content'>
      <a v-for='(item,index) in moreProduct' :key='index' :href="item.Url">
                <img v-lazy="item.ImageUrl" alt="">
                <div class='recommendtitle'>{{item.Title}}</div>
                <div class='recommendmeno'>{{item.Describe}}</div>
                <div class='recommendprice'>￥{{item.Param1}}</div>
      </a>
      </div>
  </div>
</template>
<script>
import bannerComponent from "@/components/banner";
export default {
  data() {
    return {
    };
  },
  created() {
    var falg  = this.$route.params.id
    document.documentElement.scrollTop = document.body.scrollTop = 0
    if (this.$store.state[falg.toLowerCase()].moreProduct.length == 0) {
      this.$store.dispatch("getMoreProduct",{id:falg});
    }
    if(this.$store.state[falg.toLowerCase()].moreProductImg.length == 0){
        this.$store.dispatch("moreProductImg",{id:falg});
    }
     
      var This = this
      var timer4 = setInterval(function() {
        if (
          This.$store.state[falg.toLowerCase()].moreProduct.length != 0 &&  This.$store.state[[falg.toLowerCase()]].moreProductImg.length != 0
        ) {
          var Name = document.getElementsByClassName("moreProduct")[0];
            var Height =
              Name.clientHeight 
            if (Height < document.documentElement.clientHeight) {
              Height = document.documentElement.clientHeight;
            }
            // document.getElementById("app").style.height = Height + "px";
            document.getElementById("ASwiper").style.height ="0px";
            // document.getElementById("app").style.overflow = "hidden";
            // document.getElementById("ASwiper").style.overflow = "hidden";
            clearInterval(timer4);
        }
      }, 100);   
  },
  computed: {
    moreProduct() {
      var falg  = this.$route.params.id.toLowerCase()
      return this.$store.state[falg].moreProduct;
    },
    moreProductImg() {
      var falg  =  this.$route.params.id.toLowerCase()
      return this.$store.state[falg].moreProductImg;
    }
  },
  components:{
      bannerComponent
  },
};
</script>
<style lang='less'>
@rem: 46.875rem;
.moreProduct {
  .content {
    margin-top: 15/@rem;
    overflow: hidden;
    a {
      margin-top: 0/@rem;
      width: 345/@rem;
      margin-left: 20/@rem;
      border-radius: 6px;
      height: 566/@rem;
      text-decoration: none;
      color: #565656;
      float: left;
      display: block;
      font-size: 28/@rem;
      img {
        background: white;
        width: 345/@rem;
        height: 416/@rem;
        padding-top: ((416-345)/2)/@rem;
        padding-bottom: ((416-345)/2)/@rem;
        -webkit-box-shadow: 2px 2px 2px 1px #ccc;
        box-shadow: 2px 2px 2px 1px #ccc;
        border-radius: 6px;
        display: block;
        box-sizing: border-box;
      }
      .recommendtitle {
        height: 60/@rem;
        line-height: 70/@rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .recommendmeno {
        height: 40/@rem;
        line-height: 40/@rem;
        color: #a7a7a7;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size:24/@rem;
      }
      .recommendprice {
        height: 40/@rem;
        line-height: 40/@rem;
        font-weight: 500;
        color: #b4282d;
      }
    }
  }
  width: 100%;
  overflow: hidden;
  padding-bottom: 92/@rem;
  box-sizing: border-box;
}
</style>


