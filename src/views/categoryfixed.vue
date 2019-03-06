<template>
  <div class="categoryfixed">
    <div style="height: 100%;" v-if="!lodeing">
      <div class="search">
        <router-link :to="{path:'/searchclass'}" class="search_int" @click="Statistics('categoryfixed|search')">
          <img src="../assets/images/sear_img.png" alt="">请输入搜索关键词</router-link>
      </div>
      <div class="categiry_content">
        <div class="categiry_content_left" v-if="dataList.length">
          <swiper :options="treeSwiper">
            <swiper-slide class="swiper-wrapper" style="height: auto;" v-for='(item,index) in dataList' :key="index">
              <ul class="menu">
                <li :class="{active:index==ins}" @click='menuClick(index)'>{{item.NAME}}</li>
              </ul>
            </swiper-slide>
          </swiper>
        </div>
        <div class="categiry_content_right" v-if="dataList.length">
          <a :href="dataList[ins].URL" class="banner" v-if="dataList[ins].IMG_URL&&dataList[ins].IMG_URL!='null'" @click="Statistics('categoryfixed|advert|'+dataList[ins].NAME)">
            <img :src="JSON.parse(dataList[ins].IMG_URL)[0].ServerUrl+JSON.parse(dataList[ins].IMG_URL)[0].FilePath+'.thumb.'+JSON.parse(dataList[ins].IMG_URL)[0].FileExt" alt="">
          </a>
          <div class="categiry_list" v-for="(item,index) in dataList[ins].son" :key="index">
            <div class="categiry_list_title">{{item.NAME}}</div>
            <div class="categiry_list_content">
              <a :href="subItem.URL" class="categiry_list_content_box" v-for="(subItem,index1) in item.son" :key="index1" @click="Statistics('categoryfixed|'+subItem.NAME)">
                <div class="categiry_content_img">
                  <img :src="JSON.parse(subItem.IMG_URL)[0].ServerUrl+JSON.parse(subItem.IMG_URL)[0].FilePath+'.thumb.'+JSON.parse(subItem.IMG_URL)[0].FileExt" alt="">
                </div>
                <div class="categiry_content_nema">{{subItem.NAME}}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='loading' v-if="lodeing">
      <img src="../assets/images/370310983500145999.gif" alt="">
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { LoadGetTypeTree } from "../server/getData.js";
export default {
  // name: "BannerSwiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      treeSwiper: {
        direction: "vertical",
        slidesPerView: "auto",
        // freeMode: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        mousewheel: true,
        on: {
          init: function() {}
        }
      },
      dataList: [],
      ins: 0,
      initId: 68,
      lodeing: true
    };
  },
  computed: {
    treeSwiperShow() {
      return this.$store.state.HeaderShow;
    }
  },
  watch: {},
  methods: {
    menuClick(index) {
      this.ins = index;
    },
    getTreeData() {
      LoadGetTypeTree({
        TypeId: 68
      }).then(res => {
        var jsonp = [];
        var IntData = function(root, data, pid) {
          for (var i = 0, j; (j = data[i++]); ) {
            if (root.RECID == j.PARENT) {
              if (root.RECID == pid) {
                jsonp.push(j);
              } else {
                if (!root.son) {
                  root.son = [];
                  root.son.push(j);
                } else {
                  root.son.push(j);
                }
              }
              IntData(j, data);
            }
          }
        };
        IntData({ RECID: 68 }, res.data.Data, 68);
        // console.log(jsonp);
        this.dataList = jsonp;
        this.lodeing = false;
      });
    },
    Statistics(item) {
      // console.log(item);
      this.$statistics = this.$statistics.of("categoryfixed|");
      this.$statistics.click(item);
    }
  },
  created() {
    this.getTreeData();
  }
};
</script>

<style lang="less">
@rem: 46.875rem;
img {
  width: 100%;
}

.categoryfixed {
  height: 100%;
  .search {
    padding: 18 / @rem 20 / @rem;
    height: 56 / @rem;
    background: #e6e6e6;
    position: fixed;
    top: 0;
    width: 96%;
    z-index: 1000;
    .search_int {
      display: inline-block;
      width: 96%;
      border: none;
      height: 100%;
      background: #f8f8f8;
      font-size: 24 / @rem;
      line-height: 56 / @rem;
      padding-left: 15 / @rem;
      border-radius: 10 / @rem;
      img {
        vertical-align: middle;
        width: 28 / @rem;
        margin-right: 10 / @rem;
      }
    }
  }
  .categiry_content {
    background: #f9f9f9;
    height: 100%;
    position: relative;
    padding-top: 110 / @rem;
    padding-bottom: 50px;
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    .categiry_content_left {
      width: 23%;
      height: 100%;
      float: left;
      text-align: center;
      // margin-bottom: 42px;
      .swiper-container {
        height: 100%;
      }
      ul {
        width: 100%;
        background: #fff;
        li {
          height: 110 / @rem;
          line-height: 110 / @rem;
          font-size: 26 / @rem;
          color: #a7a7a7;
          border-bottom: 1px solid #ccc;
          background: #fff;
          // margin: 0 10/@rem;
          width: 88%;
          margin: 0 auto;
        }
        li.active {
          color: #b4282d;
          border-bottom: 1px solid #b4282d;
          background: #f9f9f9;
          width: 100%;
        }
      }
    }
    .categiry_content_right {
      float: left;
      width: 77%;
      height: 100%;
      overflow: auto;
      .banner {
        padding: 20 / @rem;
        padding-bottom: 0;
        display: block;
      }
      .categiry_list {
        padding: 20 / @rem;
        .categiry_list_title {
          color: #383838;
          font-size: 28 / @rem;
          padding: 20 / @rem 0;
          padding-top: 0;
        }
        .categiry_list_title::after {
          content: "";
          display: inline-block;
          width: 13 / @rem;
          height: 13 / @rem;
          background: #b4282d;
          border-radius: 50%;
          float: left;
          margin-right: 20 / @rem;
          margin-top: 8 / @rem;
        }
        .categiry_list_content {
          overflow: hidden;
          background: #fff;
          padding: 20 / @rem 0;
          padding-top: 10 / @rem;
          border-radius: 20 / @rem;
          .categiry_list_content_box {
            display: block;
            width: 33.33%;
            float: left;
            color: #a7a7a7;
            font-size: 23 / @rem;
            text-align: center;
            padding: 10 / @rem 0;
            .categiry_content_img {
              position: relative;
              padding-bottom: 70%;
              img {
                position: absolute;
                width: 60%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }
    }
  }
}
</style>