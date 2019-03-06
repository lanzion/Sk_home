<template>
  <div class="classify">
    <img src="../../assets/doubleel_img/classify_bg.png" alt="">
    <div class="class_nav">
      <!-- <div class="title">
        <i></i>•&nbsp;精选分类&nbsp;•
        <i></i>
      </div> -->
      <div class="nav_list">
        <a :href="item.url" class="nav_box" v-for="(item,index) in nav_list" :key="index" @click="Statistics('nav|'+item.name+'|'+index)">
          <div class="img_box"><img :src="item.tag_img" alt="" class="tag_img"></div>
          <div class="nav_name">{{item.name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_list: [
        {
          tag_img: require("../../assets/doubleel_img/nav_gs.png"),
          name: "时令果蔬",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=396"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_zb.png"),
          name: "滋补养生",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=397"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_ls.png"),
          name: "精品零食",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=390"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_sx.png"),
          name: "生鲜粮油",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=395"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_my.png"),
          name: "母婴用品",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=393"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_js.png"),
          name: "茗茶酒水",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=392"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_mz.png"),
          name: "美妆个护",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=391"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_jj.png"),
          name: "家居家装",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=388"
        },
        {
          tag_img: require("../../assets/doubleel_img/nav_dq.png"),
          name: "家用电器",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=389"
        },

        {
          tag_img: require("../../assets/doubleel_img/nav_qc.png"),
          name: "汽车养护",
          url:
            "https://dvcms.weixinmvp.com/Mass/20181226classification/index.html?id=394"
        }
      ]
    };
  },
  methods: {
    Statistics(item) {
      this.$statistics = this.$statistics.of("HOME_activity|");
      this.$statistics.click(item);
    }
  }
};
</script>

<style scoped lang='less'>
@rem: 46.875rem;
@keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@-webkit-keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@-moz-keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
@-o-keyframes icon-bounce {
  0%,
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  50% {
    -moz-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  75% {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
  }

  85% {
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
}
img {
  width: 100%;
  display: block;
}
.classify {
  transform: translateY(-30 / @rem);
  position: relative;
  z-index: 1;
  height: 374 / @rem;
  .class_nav {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    .title {
      text-align: center;
      color: #fffef8;
      font-size: 30 / @rem;
      padding-top: 20 / @rem;
      padding-bottom: 20 / @rem;
      i {
        height: 1px;
        width: 50 / @rem;
        background: #fff3dd;
        display: inline-block;
        vertical-align: middle;
        margin: 0 10 / @rem;
      }
    }
    .nav_list {
      // padding-left: 10 / @rem;
      padding-top: 40 / @rem;
      .nav_box {
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        color: #fffef8;
        font-size: 24 / @rem;
        text-align: center;
        margin-bottom: 30 / @rem;
        .img_box {
          width: 90 / @rem;
          margin: 0 auto;
          // padding-bottom: 15 / @rem;
          .tag_img {
            -webkit-animation: icon-bounce 0.5s alternate 2;
            -moz-animation: icon-bounce 0.5s alternate 2;
            -o-animation: icon-bounce 0.5s alternate 2;
            animation: icon-bounce 0.5s alternate 2;
          }
        }
      }
    }
  }
}
</style>