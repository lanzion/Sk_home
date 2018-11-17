<template>
  <div class='spectial' v-if='specialArr.length > 0'>
      <div class='left'>
          <a :href="specialArr[0].URL" @click='Statistics(item.Title)' v-if='specialArr[0]'>
              <img v-lazy="specialArr[0].ImageUrl" alt="">
          </a>
          <div>
          </div>
      </div>
      <div class='right'>
          <a :href="specialArr[1].URL" @click='Statistics(item.Title)' v-if='specialArr[1]'>
              <img v-lazy="specialArr[1].ImageUrl" alt="">
          </a>
            <a :href="specialArr[2].URL" @click='Statistics(item.Title)' v-if='specialArr[2]'>
              <img v-lazy="specialArr[2].ImageUrl" alt="">
          </a>
      </div>
  </div>
</template>
<script>
export default {
  props: ["specialArr"],
  data() {
    return {};
  },
  watch: {
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_AREA|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style lang='less'>
@rem: 46.875rem;
.spectial {
  width: 100%;
  height: 430/@rem;
  a {
    display: block;
  }
  .left {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-right: 2px solid #f4f4f4;
    float: left;
    a {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    width: 50%;
    box-sizing: border-box;
    height: 100%;
    float: left;
    a {
      width: 100%;
      height: (430/2)/@rem;
      overflow: hidden;
      box-sizing:border-box;
      img {
        width: 100%;
        height: 100%;
      }
      &:nth-of-type(1) {
        border-bottom: 2px solid #f4f4f4;
      }
    }
  }
}
</style>


