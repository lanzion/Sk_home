<template>
  <div class="advrt">
    <img src="../../assets/zqhd_img/zq_adrt.png" alt="">
    <a href="https://gift.gdtvdv.com/dist/index.html" class="mdsl" @click='Statistics("zqsl")'></a>
    <a href="https://dvcms.weixinmvp.com//Mass/20180914VcaedZq/index.html" class="vc" @click='Statistics("vcaerdzx")'></a>
    <a href="https://gdtvshop.weixinmvp.com/Wap/Shop/ProductListByTag.aspx?tag=415" class="zqtg" @click='Statistics("zqtg")'></a>
  </div>
</template>

<script>
  export default {
    methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_SPACE|");
      this.$statistics.click(item);
    }
  },
    data(){
      return {

      }
    },
  }
</script>

<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
  display: block;
}
.advrt{
  // margin-top: 200/@rem;
  position: relative;
}
.mdsl{
  display: block;
  width: 344/@rem;
  height: 416/@rem;
  // background: #000;
  position: absolute;
  bottom: 12/@rem;
  left: 12/@rem;
}
.vc{
  display: block;
  width: 350/@rem;
  height: 200/@rem;
  // background: red;
  position: absolute;
  right: 10/@rem;
  bottom: 238/@rem;
}
.zqtg{
  display: block;
  width: 350/@rem;
  height: 200/@rem;
  // background: blue;
  position: absolute;
  right: 10/@rem;
  bottom: 12/@rem;
}

</style>