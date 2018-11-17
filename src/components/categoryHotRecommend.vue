<template>
  <div class='catetoryRecommend'>
      <div class='title'>
          <div>
              爆款推荐
          </div>
          <div>
              人气商品不容错过
          </div>
      </div>
      <div class='level'>
          <a v-for='(item,index) in RecommendProduct' :key="index"  :href="item.URL" @click="Statisticsleaver(item.ProductNo)">  
              <div class='top'>
                  <img v-lazy="item.ImageUrl" alt="">
              </div>
              <div class='bottom'>
                  <div class='recommendtitle'>{{item.Title}}</div>
                  <div class='recommendmeno'>{{item.Describe}}</div>
                  <div class='recommendprice'>￥{{item.Param1}}</div>
                  <div class='button'> 立即抢购</div>
              </div>
          </a>
      </div>
      <div class='vertical'>
            <a v-for='(item,index) in RecommendVerticl' :key='index' :href="item.URL" @click="Statisticsvertical(item.ProductNo)">
                <img v-lazy="item.ImageUrl" alt="">
                <div class='recommendtitle'>{{item.Title}}</div>
                <div class='recommendmeno'>{{item.Describe}}</div>
                <div class='recommendprice'>￥{{item.Param1}}</div>
            </a>
      </div>
  </div>
</template>
<script>
export default {
  props: ["RecommendProduct", "RecommendVerticl"],
  methods: {
    Statisticsleaver(item) {
      this.$statistics = this.$statistics.of(this.$route.meta.loadname+"|LEAVEL|");
      this.$statistics.click(item);
    },
    Statisticsvertical(item) {
      this.$statistics = this.$statistics.of(this.$route.meta.loadname+"|VERTICAL|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style lang='less'>
@rem: 46.875rem;
.catetoryRecommend {
  padding-bottom: 92/@rem;
  box-sizing: border-box;
  overflow: hidden;
  .title {
    width: 100%;
    height: 100/@rem;
    text-align: center;
    margin-bottom: 15/@rem;
    background: white;
    margin-top: 15/@rem;
    div:nth-of-type(1) {
      width: 100%;
      height: 60/@rem;
      color: #565656;
      line-height: 60/@rem;
      font-size: 36/@rem;
    }
    div:nth-of-type(2) {
      width: 100%;
      height: 30/@rem;
      line-height: 30/@rem;
      font-size: 24/@rem;
      color: #b7b7b7;
    }
  }
  .level {
    overflow: hidden;
    a {
      background: white;
      border-bottom: 1px solid #f6f6f6;
      box-sizing: border-box;
      width: 100%;
      display: block;
      overflow: hidden;
      .top {
        width: 320/@rem;
        height: 320/@rem;
        float: left;
        box-sizing: border-box;
        padding: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          padding: 8/@rem;
          box-sizing: border-box;
        }
      }
      .bottom {
        width: (750-320)/@rem;
        height: 320/@rem;
        float: left;
        .button {
          width: 160/@rem;
          height: 60/@rem;
          background: #fb8686;
          color: white;
          text-align: center;
          font-size: 30/@rem;
          line-height: 60/@rem;
          border-radius: 4px;
          margin-top: 22/@rem;
          letter-spacing: 4/@rem;
        }
      }
      .recommendtitle {
        margin-top: 50/@rem;
        height: 40/@rem;
        width: 100%;
        font-size: 34/@rem;
        color: #565656;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .recommendmeno {
        height: 70/@rem;
        line-height: 70/@rem;
        width: 100%;
        font-size: 28/@rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #b7b7b7;
      }
      .recommendprice {
        height: 50/@rem;
        line-height: 50/@rem;
        color: #b4282d;
        font-size: 34/@rem;
      }
    }
  }
  .vertical {
    margin-top: 15/@rem;
    a {
      width: 345/@rem;
      margin-left: 20/@rem;
      border-radius: 6px;
      height: 566/@rem;
      float: left;
      display: block;
      font-size: 28/@rem;
      //      box-shadow: 2px 2px 2px #ccc;
      //   border-radius: 6px;
      img {
        background: white;
        width: 345/@rem;
        height: 416/@rem;
        padding-top: ((416-345)/2)/@rem;
        padding-bottom: ((416-345)/2)/@rem;
        -webkit-box-shadow: 2px 2px 2px 1px #eee;
        box-shadow: 2px 2px 2px 1px #eee;

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
      }
      .recommendprice {
        height: 40/@rem;
        line-height: 40/@rem;
        font-weight: 500;
        color: #b4282d;
      }
    }
  }
}
</style>


