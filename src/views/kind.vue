<template>
  <div class='kindHome'>
    <div class='Ttitle' >{{titile}}</div>
      <kind-nav :KindTItle = 'KindTItle'   :NavigateId = "NavigateId" class='kindSwiper'></kind-nav>
      <kindcontent :NavigateData = 'NavigateData' class='kindContent' :NavigateDescribe = "NavigateDescribe" :NavigateId = "NavigateId"></kindcontent>
  </div>
</template>
<script>
import kindNav from "@/components/kind-nav";
import categorytemplate from "@/components/categorytemplate.vue";

import kindcontent from "@/components/kindcontent.vue";

export default {
  components: {
    kindNav,
    kindcontent,
    categorytemplate
  },
  data() {
    return {
      data: "",
      ArrData: [],
      titile: "",
      catetoryBodySwiperOption: {
        initialSlide: 2
      }
    };
  },
  created() {
    this.$store.dispatch("getKind", {
      id: this.$route.params.id,
      catetory: this.$route.params.Id
    });
  },
  computed: {
    KindTItle() {
      return this.$store.state.kind.NavigateTitle;
    },

    NavigateId() {
       var kidnId = this.$route.params.id;
       var This = this;
       if(this.$store.state.kind.headerTitle.length){
         this.$store.state.kind.headerTitle.map(function(res){
          if(res.id == kidnId){
            This.titile = res.title;
          }
           
         })
       }
      return this.$store.state.kind.NavigateId;
    },
    NavigateData() {
      return this.$store.state.kind.NavigateData;
    },
    NavigateDescribe(){
      return this.$store.state.kind.NavigateDescribe;      
    }
  },
  methods: {
    pushBack() {
      this.$router.push({ name: this.$route.params.id.split("_")[0] });
    }
  }
};
</script>

<style lang='less'>
@rem: 46.875rem;
#cate {
  background: #f6f6f6;
  margin-bottom:1.92rem;
}
.kindHome {
  .kindContent {
    margin-top: 144/@rem;
  }
  .kindSwiper {
    position: fixed;
    width: 16rem;
    top: 84/@rem;
    background: white;
    z-index: 1000;
    left: 0;
  }
  // background: white;
  .Ttitle {
    font-size: 40/@rem;
    margin: 0;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 84/@rem;
    color: #5d5d5d;
    font-weight: 500;
    line-height: 84/@rem;
    text-align: center;
  }
  .toHome {
    width: 70/@rem;
    height: 70/@rem;
    position: fixed;
    bottom: 280/@rem;
    right: 80/@rem;

    z-index: 100000;
    font-size: 16px;
    right: 60/@rem;
    background: #000;
    opacity: 0.5;
    text-align: center;
    border-radius: 2px;
    img {
      width: 50/@rem;
      height: 50/@rem;
      margin-top: 10/@rem;
      vertical-align: middle;
    }
  }
}
</style>

