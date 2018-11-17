<template>
          <div class='HomeTop'>
          <a href='https://gdtvshop.weixinmvp.com/Wap/Shop/Search.aspx'> <img src="../assets/images/search.png" alt=""> </a>
          <a href='https://gdtvshop.weixinmvp.com/wap/member/MessageIndex.aspx'> <img src="../assets/images/mess.png" alt=""> </a>
        </div>
</template>

<script>
export default {

}
</script>
<style lang='less'>
@rem: 46.875rem;
.HomeTop {
  height: 80/@rem;
  position: absolute;
  top: 10/@rem;
  left: 0;
  width: 100%;
  z-index: 10000000;
  padding-top: 10/@rem;
  a:nth-of-type(1) {
    width: 650/@rem;
    float: left;
    height: 100%;
    display: block;
    background: transparent;
    box-sizing: border-box;
    padding-left: 10/@rem;
    img {
      width: 650/@rem;
    }
  }
  a:nth-of-type(2) {
    width: 100/@rem;
    float: left;
    height: 100%;
    display: block;
    box-sizing: border-box;
    padding-left: 26/@rem;
    background: transparent;
    // display:
    box-sizing: border-box;
    margin-top: 8/@rem;
    img {
      width: 50/@rem;
    }
  }
}
</style>
