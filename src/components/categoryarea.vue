<template>
  <div class='categoryArea' v-if='categoryAreaArr.length>0'>
      <a :href="item.URL" v-for='(item,index) in categoryAreaArr' :key='index' @click="Statistics(slide.Title)">
          <img v-lazy="item.ImageUrl" alt="">
      </a>
  </div>
</template>
<script>
export default {
  props: ["categoryAreaArr"],
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("CATRETORY_AREA|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style lang='less'>
@rem: 46.875rem;
.categoryArea {
  overflow: hidden;
  margin-top:15/@rem;
  a {
    display: block;
    float: left;
    img {
      width: 100%;
      vertical-align: bottom;
      height:100%;
    }
    &:nth-of-type(1) {
      width: 100%;
      border-bottom:1px solid #f6f6f6;
    }
    &:nth-of-type(2) {
      width: 50%;
    }
    &:nth-of-type(3) {
      width: 50%;
    }
    &:nth-of-type(4) {
      width: 33.333%;
         height:280/@rem;
 
    }
    &:nth-of-type(5) {
      width: 33.333%;
      border-left:1px solid #f6f6f6;
      border-right:1px solid #f6f6f6;
      box-sizing: border-box;
         height:280/@rem;

      
    }
    &:nth-of-type(6) {
      width: 33.333%;
         height:280/@rem;
      
    }
  }
}
</style>


