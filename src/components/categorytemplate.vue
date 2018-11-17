<template>
    <div class='categorytemplate'>
            <div v-if='recommendtitle '>
              <!-- <div class='title' v-if='TITLE && TitleFlag' > 
                {{TITLE}}
            </div>               -->
               <kind :categoryArrBefore = 'NavigationConfig' class='Ct'></kind>
            <a v-for='(item,index) in recommendtitle' :key='index' :href="item.Url" @click="Statistics(item.ProductNo)">
                <img v-lazy="item.ProductImage" alt="">
                <div class='recommendtitle'>{{item.ProductName}}</div>
                <div class='recommendmeno'>{{item.ShortDesc}}</div>
                <div class='recommendprice'>￥{{item.SalePrice}}</div>
            </a>
            </div>
         <div v-else class='loading'>
            <img src="../assets/images/370310983500145999.gif" alt="">
        </div>
    </div>
</template>
<script>
import advertisingSpace from "@/components/advertisingSpace";
import kind from "@/components/kind"
export default {
    props:['recommendtitle','TITLE',"NavigationConfig"],
    components:{
      advertisingSpace,
      kind
    },
    computed:{
      categoryArrBefore(){
        
      }
    },
    data(){
      return {
        IMGSHOW:false,
        TitleFlag:true,
      }
    },
    created(){
      this.TitleFlag = this.$route.name == 'kind'? false : true
    },
    methods:{
          Statistics(item) {
      this.$statistics = this.$statistics.of("CATETORY_PRODUCT|");
      this.$statistics.click(item);
    }
    }
};
</script>
<style lang='less'>
@rem: 46.875rem;
.cateImage{
  width:100%;
  .img{
    width:100%;
  }
}
.categorytemplate{
  overflow: hidden;
  margin-bottom:90/@rem;
    margin-top:15/@rem;
  padding-bottom: 15/@rem;
  .Ct{
    margin-bottom:20/@rem;
  }
  .title{
    text-align:center;
    height:90/@rem;
    font-size:30/@rem;
    background:white;
    color:#6d6d6d;
    line-height:90/@rem;
    margin-bottom:20/@rem;
    margin-top:0;
  }
 a {
      text-decoration:none;
      width: 345/@rem;
      margin-left: 20/@rem;
      border-radius: 6px;
      height: 566/@rem;
      float: left;
      display: block;
    color:#6d6d6d;
      font-size: 28/@rem;
      img {
        background:white;
        width: 345/@rem;
        height: 416/@rem;
        padding-top:((416-345)/2)/@rem;
        padding-bottom:((416-345)/2)/@rem;
        -webkit-box-shadow: 2px 2px 2px 1px #eee;
        box-shadow: 2px 2px 2px 1px #eee;
        border-radius: 6px;
        display:block;
        box-sizing:border-box;
      }
      .recommendtitle {
        height: 60/@rem;
        line-height:70/@rem;
        white-space: nowrap;
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
      }
      .recommendprice {
        height: 40/@rem;
        line-height: 40/@rem;
        font-weight: 500;
        color: #b4282d;
      }
    }

}
  
</style>