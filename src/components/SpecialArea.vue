<template>
  <div class='specialarea' v-if='specialAreaContent.length > 0'>
      <div class='title'>精选特惠</div>
      <a v-for="(item,index) in specialAreaContent" :key='index' :href='item.URL' @click='Statistics(item.Title)'>
        <!-- {{specialAreaContent}} -->
          <img v-lazy="item.ImageUrl">
      </a>
  </div>
</template>
<script>
export default {
  props: ["specialAreaContent"],
  data() {
    return {
    };
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_SPECIAL|");
      this.$statistics.click(item);
    }
  },
  watch:{

  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.specialarea {
  width: 100%;
  overflow: hidden;
  //   background: white;
  .title {
    width: 100%;
    height: 100/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 580;
    box-sizing: border-box;
    margin: 0 0 1px 0;
    margin-top:15/@rem;
    background: white;
    color: #747474;
  }
  a {
    width: 50%;
    height: (554/2)/@rem;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img {
      width: 100%;
      vertical-align:bottom;
      height: 100%;
    }
    &:nth-of-type(1) {
      border-bottom: 1px solid #ededed;
      border-right:1px solid #ededed;
    }
    &:nth-of-type(2) {
      border-bottom: 1px solid #ededed;
    }
    &:nth-of-type(3) {
     border-right:1px solid #ededed;
    }
  }
}
</style>


