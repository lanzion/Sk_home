<template>
  <div class="categoryfixed">
    <div class="search">
      <a href="javascript:;" class="search_int">
        <img src="../assets/images/sear_img.png" alt="">请输入搜索关键词</a>
    </div>
    <div class="categiry_content">
      <swiper :options="bannerSwiper" class="categiry_content_left">
        <swiper-slide class="swiper-wrapper" style="height: auto;" v-for='(item,index) in dataList' :key="index">
          <ul class="menu">
            <li :class="{active:index==ins}" @click='menuClick(index)'>{{item.Name}}</li>
          </ul>
        </swiper-slide>
      </swiper>
      <div class="categiry_content_right" v-if="dataList.length">
        <a href="javascript:;" class="banner">
          <img src="../assets/images/1.png" alt="">
        </a>
        <div class="categiry_list" v-for="(item,index) in dataList[ins].son" :key="index">
          <div class="categiry_list_title">{{item.Name}}</div>
          <div class="categiry_list_content" v-if='(item,index)' :key="index">
            <a :href="'https://gdtvshop.weixinmvp.com'+subItem.Url" class="categiry_list_content_box" v-for="(subItem,index1) in item.son" :key="index1">
              <div class="categiry_content_img">
                <img :src="JSON.parse(subItem.ImgUrl)[0].ServerUrl+JSON.parse(subItem.ImgUrl)[0].FilePath+'.thumb.'+JSON.parse(subItem.ImgUrl)[0].FileExt" alt="">
              </div>
              <div class="categiry_content_nema">{{subItem.Name}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { dataPost } from "../lib/ajaxFn.js";
import { dataJson } from "../lib/dataJson.js";
export default {
  name: "BannerSwiper",
  data() {
    return {
      bannerSwiper: {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        mousewheel: true,
        on: {
          init: function() {}
        }
      },
      dataList: [],
      ins: 0,
      initId: 68
    };
  },
  methods: {
    menuClick(index) {
      this.ins = index;
    },
    subDataList() {
      // return this.dataList[this.ins].son;
    }
  },
  mounted: function() {
    var jsonp = [];
    var IntData = function(root, data, pid) {
      for (var i = 0, j; (j = data[i++]); ) {
        if (root.Id == j.Parent) {
          if (root.Id == pid) {
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
    IntData({ Id: this.initId }, dataJson.Result.List, this.initId);
    this.dataList = jsonp;
    console.log(this.dataList);
  }
};
</script>

<style lang="less">
@rem: 46.875rem;
img {
  width: 100%;
}

.categoryfixed {
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
    // height: 86vh;
    position: relative;
    padding-top: 160 / @rem;
    padding-bottom: 46px;
    .categiry_content_left {
      width: 23%;
      height: 100%;
      float: left;
      text-align: center;
      margin-bottom: 42px;
      ul {
        width: 100%;
        background: #fff;
        li {
          height: 110 / @rem;
          line-height: 110 / @rem;
          font-size: 26 / @rem;
          color: #666;
          border-bottom: 1px solid #ccc;
          background: #fff;
          // margin: 0 10/@rem;
        }
        li.active {
          color: #fb364d;
          border-bottom: 1px solid #fb364d;
          background: #f9f9f9;
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
          background: #ff3a56;
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