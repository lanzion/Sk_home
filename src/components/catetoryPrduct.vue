<template>
  <div class='recommend'>
      <a v-for='(item,index) in ProductList' :key='index'>
                <img v-lazy="item.ImageUrl" alt="">
                <div class='recommendtitle'>{{item.Title}}</div>
                <div class='recommendmeno'>{{item.Describe}}</div>
                <div class='recommendprice'>￥{{item.ActivityPrice?item.ActivityPrice:item.Param1}}</div>
      </a>
  </div>
</template>
<script>
export default {
  props: ["ProductList"],
  data() {
    return {};
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.title {
  // width: 100%;
  height: 100/@rem;
  line-height: 100/@rem;
  text-align: center;
  font-size: 40/@rem;
  font-weight: 900;
  margin-bottom: 10/@rem;
  margin-top: 10/@rem;
  background: white;
  color: #6e6e6e;
}
.recommend {
  width: 100%;
  overflow: hidden;
  a {
    margin-top: 20/@rem;
    width: 345/@rem;
    margin-left: 20/@rem;
    border-radius: 6px;
    height: 566/@rem;
    float: left;
    display: block;
    font-size: 28/@rem;
    img {
      width: 345/@rem;
      height: 416/@rem;
      // box-shadow: 2px 2px 2px #ccc;
      border-radius: 6px;
    }
    .recommendtitle {
      height: 46/@rem;
      line-height: 46/@rem;
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
      color: red;
    }
  }
}
</style>


