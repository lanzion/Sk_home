<template>
    <div class='adverComponent' v-if='data.length>0'>
        <a :href="item.URL" v-for='(item,index) in data' :key='index' :class="'aa'+index%4" @click='Statistics(item.Title)'>
            <img v-lazy="item.ImageUrl" alt="">
        </a>
    </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_SPACE|");
      this.$statistics.click(item);
    }
  }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.adverComponent {
  overflow: hidden;

  height: auto;
  img {
    vertical-align: bottom;
  }
  a {
    text-decoration: none;
    overflow: hidden;
  }
  .aa0 {
      margin-top: 15/@rem;
    width: 100%;
    display: block;
    img {
      width: 100%;
      border-radius: 8px;
      vertical-align: bottom;
    }
  }
  .aa1,
  .aa2,
  .aa3 {
    display: block;
    width: 33.3333%;
    float: left;
    
    img {
      width: 100%;
    }
  }
}
</style>

