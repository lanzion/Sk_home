<template>
  <div class='catetoryLeave' v-if='RecommendProduct.length > 0'>
    <!-- <div class='title'>
          <div>
              爆款推荐
          </div>
          <div>
              人气商品不容错过
          </div>
      </div> -->
    <div class='hotsaletitle'>
      热卖爆款
    </div>
    <div class='level'>
      <a v-for='(item,index) in RecommendProduct' :key="index" :href="item.Url" @click="Statisticsleaver(item.ProductNo)">
        <div class='top'>
          <img v-lazy="item.ImageUrl" alt="">
          <!-- <div class="top_tag" v-if="item.PromotionTag=='满减'||item.PromotionTag=='直降'"><img src="../assets/images/level_tag1.png" alt=""></div> -->
          <img v-if="item.PromotionTag=='满减'||item.PromotionTag=='直降'" src="../assets/images/level_tag1.png" alt="" class="tag_img">
        </div>
        <div class='bottom'>
          <div class='recommendtitle'>{{item.Title}}</div>
          <div class='recommendmeno'>{{item.Describe}}</div>
          <div class='recommendprice'>￥{{item.ActivityPrice?item.ActivityPrice:item.Param1}}</div>
          <div class='button'> 立即抢购</div>
          <!-- <div class="level_tag"><img src="../assets/images/level_tag.png" alt=""></div> -->
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["RecommendProduct"],
  methods: {
    Statisticsleaver(item) {
      this.$statistics = this.$statistics.of(
        this.$route.meta.loadname + "|LEAVEL|"
      );
      this.$statistics.click(item);
    }
  }
};
</script>

<style lang='less'>
@rem: 46.875rem;
.catetoryLeave {
  .hotsaletitle {
    width: 100%;
    height: 100 / @rem;
    line-height: 100 / @rem;
    text-align: center;
    font-size: 40 / @rem;
    font-weight: 900;
    box-sizing: border-box;
    margin: 0 0 10 / @rem 0;
    margin-top: 15 / @rem;
    background: white;
    color: #747474;
    position: relative;
  }

  .title {
    width: 100%;
    height: 100 / @rem;
    text-align: center;
    background: white;
    margin-top: 15 / @rem;
    div:nth-of-type(1) {
      width: 100%;
      height: 60 / @rem;
      color: #565656;
      line-height: 60 / @rem;
      font-size: 36 / @rem;
    }
    div:nth-of-type(2) {
      width: 100%;
      height: 30 / @rem;
      line-height: 30 / @rem;
      font-size: 24 / @rem;
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
        width: 310 / @rem;
        height: 310 / @rem;
        float: left;
        box-sizing: border-box;
        padding: 20 / @rem;
        position: relative;
        .tag_img {
          width: 120 / @rem;
          height: auto;
          position: absolute;
           top: 12 / @rem;
          left: 12 / @rem;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          padding: 8 / @rem;
          box-sizing: border-box;
          // border-radius: 8/@rem;
          // position: absolute;
          // top: 20/@rem;
          // left: 20/@rem;
        }
        .top_tag {
          width: 296 / @rem;
          height: 296 / @rem;
          position: absolute;
          box-sizing: border-box;
          top: 12 / @rem;
          left: 12 / @rem;
          border: 8 / @rem solid #ffc98a;
          border-image: -webkit-linear-gradient(#ffc98a, #ff8781) 30 30;
          border-image: -moz-linear-gradient(#ffc98a, #ff8781) 30 30;
          border-image: linear-gradient(#ffc98a, #ff8781) 30 30;
          //       background-image: linear-gradient(17deg,
          // #ff8781 1%,
          // #ffc98a 100%);
          img {
            width: 120 / @rem;
            height: auto;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      .bottom {
        width: (710-320) / @rem;
        padding-left: 10 / @rem;
        box-sizing: border-box;
        height: 320 / @rem;
        float: left;
        position: relative;
        .button {
          width: 140 / @rem;
          height: 60 / @rem;
          background: #fb8686;
          color: white;
          text-align: center;
          font-size: 26 / @rem;
          line-height: 60 / @rem;
          border-radius: 4px;
          margin-top: 12 / @rem;
          letter-spacing: 4 / @rem;
        }
        .level_tag {
          position: absolute;
          width: 120 / @rem;
          right: 20 / @rem;
          bottom: 20 / @rem;
          img {
            width: 100%;
          }
        }
      }
      .recommendtitle {
        margin-top: 50 / @rem;
        height: 40 / @rem;
        width: 100%;
        font-size: 34 / @rem;
        color: #565656;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .recommendmeno {
        height: 70 / @rem;
        line-height: 70 / @rem;
        width: 100%;
        font-size: 28 / @rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #b7b7b7;
      }
      .recommendprice {
        height: 60 / @rem;
        line-height: 60 / @rem;
        color: #b4282d;
        font-size: 34 / @rem;
      }
    }
  }
}
</style>
