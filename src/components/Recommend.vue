<template>
  <div class='recommend' v-if='RecommendProduct.length > 0'>
      <div class='title'>
          为你推荐
      </div>
      <div class='content'>
      <a v-for='(item,index) in RecommendProduct' :key='index' :href="item.Url" @click='Statistics(item.ProductNo +"|"+index)'>
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
  props: ["RecommendProduct"],
  data() {
    return {};
  },
  methods:{
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_RECOMMEND|");
      this.$statistics.click(item);
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;

.recommend {
  margin-bottom:47px;
  .title {
  width: 100%;
  height: 100/@rem;
  line-height: 100/@rem;
  text-align: center;
  font-size: 40/@rem;
  font-weight: 580;
  margin-top: 15/@rem;
  background: white;
 color: #747474;
}
  .content {
    margin-top: 15/@rem;
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
        font-size:28/@rem;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .recommendmeno {
        height: 40/@rem;
        line-height: 32/@rem;
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


