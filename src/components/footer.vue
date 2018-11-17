<template>
    <div class='footer'>
        <ul class="footer shop" id="ShopFooter" style="width: 100%;display: flex;justify-content: space-between;align-items: center;">
            <!-- <li><a href="/mass/shop/index.html?t"><div style=' ' v-bind:style="styleObject"></div><p style='color:#b4282d;'>首页</p></a></li> -->
            <li @click='backHome()'><a ><div style=' ' v-bind:style="styleObject"></div><p style='color:#b4282d;'>首页</p></a></li>
            <!-- <li><router-link :to="{path:'/categoryfixed'}"><div v-bind:style="styleObject1"></div><p>分类</p></router-link></li> -->
            <li><a href="https://gdtvshop.weixinmvp.com/Wap/Shop/CategoryFixed.aspx"  ><div v-bind:style="styleObject1"></div><p>分类</p></a></li>
            <li><a href="https://gdtvshop.weixinmvp.com/Wap/ShoppingCart/#!/home"  ><div v-bind:style="styleObject2"></div><p>购物车</p></a></li>
            <li><a href="https://gdtvshop.weixinmvp.com/wap/shop/MemberDefault.aspx" ><div v-bind:style="styleObject3"></div><p>我</p></a></li>
        </ul>
    </div>
</template>
<script>
import bg from '../assets/images/footericonshop.png'
export default {
  data(){
    return {
      styleObject:{
        backgroundImage:" url("+bg+")",
        backgroundPosition:'0px -21px',
      },
      styleObject1:{
        backgroundImage:" url("+bg+")",
        backgroundPosition:'-21px 1px',
      },
      styleObject2:{
        backgroundImage:" url("+bg+")",
        backgroundPosition:'-42px 1px',
      },
      styleObject3:{
        backgroundImage:" url("+bg+")",
        backgroundPosition:'-60px 1px',
      }
    }
  },
  methods: {
    backHome(){
      if(this.$route.meta.loadname && this.$route.meta.loadname =="home"){

      }else{
       this.$router.replace({name:"home"})
      }
    }
  }
};
</script>
<style lang='less'>
.footer {
  position: fixed;
  z-index: 10000;
  max-width: 100%;
      // max-width: 540px;
    margin:0 auto;
  padding: 0;
  height: 46px !important;
  border-top: 1px solid #e0e0e0;
  box-sizing: content-box;
  left: 0;
  bottom: 0;
  right: 0;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    border: 0;
    max-width: 100%;
    overflow: visible;

    li {
      div {
        display: block;
        width: 20px;
        height: 20px;
        margin: 0 auto;
 
        background-size: 400% 200%;
      }
      a {
        background: #fff;
        padding: 5px 0;
        border: none;
        font-weight: normal;
        font-family: "微软雅黑";
        color: #a8a8a8;
        height: 46px;
        font-size: 12.5px;
        display: block;
        margin: 0;
        margin-right: -4px;
      }
      flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;
      height: 46px !important;
      background: #fff !important;
      p {
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        margin-bottom: 11px;
      }
    }
  }
}
</style>


