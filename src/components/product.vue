<template>
    <div class='product'>
        <a v-for='(item , index) in Product' :key='index'>
                <div class='productTitle'>{{item.Title}}</div>
                <div class='productDec'>{{item.Describe}}</div>
                <div class='productImg'><img v-lazy="item.ImageUrl" alt=""></div>        
        </a>
    </div>
</template>
<script>
export default {
  props: ["Product"]
};
</script>
<style lang='less'>
@rem: 46.875rem;

.product {
  background: white;
  overflow: hidden;
  a {
    width: 33.3333%;
    height: 300/@rem;
    text-align: center;
    float: left;
    .productTitle {
      width: 100%;
      height: 56/@rem;
      font-size: 30/@rem;
      line-height: 56/@rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

    }
    .productDec {
      width: 100%;
      height: 40/@rem;
      font-size: 26/@rem;
      line-height: 40/@rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .productImg {
      width: 100%;
      height: (300-56-40)/@rem;
      img {
        height: (300-56-40)/@rem;
        width: (300-56-40)/@rem;
      }
    }
  }
}
</style>


