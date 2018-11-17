<template>
  <div class="search_box">
    <!-- header -->
    <div class="search_heade" v-if="!lodeing">
      <a href="https://gdtvshop.weixinmvp.com/Wap/Shop/categoryfixed.aspx" class="heade_img">
        <img src="../../assets/images/fenleis.png" alt="" class="heade_images">
      </a>
      <div class="heade_imput">
        <div class="heade_imput_icon">
          <img src="../../assets/images/sousuo.png" alt="" class="header_seach">
        </div>
        <input type="text" data-type="search" v-model="SearchValueTxt" id="keyword" name="keyword" class="heade_test" :placeholder="SearchTxt">
      </div>
      <div class="heade_btn" @click="SearchProduct">
        <span class="heade_btn_test">搜索</span>
      </div>
    </div>
    <!-- main -->
    <div class="search_main">
      <!-- 热门搜索 -->
      <div class="search_main_box" v-if="DataList.length">
        <div class="search_main_head">
          <span class="search_main_hot">热门搜索</span>
          <!-- <span class="search_main_trade" onclick="replace()">换一批</span> -->
        </div>
        <div class="search_main_conten">
          <ul class="search_product">
            <li @click="Statistics('HOtTXT|'+item.Title+'|'+index)" v-for='(item,index) in DataList' :key="index">
              <a :href="item.Url">{{item.Title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 推荐 -->
      <div class="search_recommend" v-if="SearchComponents.length">
        <h3 class="search_rec_title">推荐商品</h3>
        <a :href="item.Url" v-for='(item,index) in SearchComponents' :key="index" @click="Statistics('SearchRecommend|'+item.ProductNo+'|'+index)">
          <div class="search_rec">
            <div class="search_rec_left">
              <img :src="item.ImageUrl" alt="" class="search_rec_left1">
              <img src="../../assets/images/Smallimg.png" class="search_rec_left2" alt="">
            </div>
            <div class="search_rec_right">
              <div class="rec_right">
                <p class="rec_right_title">{{item.Title}}</p>
                <p class="rec_right_text">{{item.Describe}}</p>
                <div class="rec_right_soping">
                  <span class="rec_right_rmb">¥{{item.Param1}}</span>
                  <div href="#" class="rec_right_soping_img">
                    <img src="../../assets/images/carts.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- banner -->
      <div class="banner_box" v-if="swiperData.length">
        <swiper id="Hcontainer" class='Hcontainer' :options="bannerSwiper" ref="myswiper" v-if="swiperData.length>1">
          <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <a :href="item.Url" @click="Statistics('SearchBanner|'+item.Title)"><img :src="item.ImageUrl" alt=""></a>
          </swiper-slide>
        </swiper>
        <a :href="swiperData[0].Url" v-if="swiperData.length==1"><img :src="swiperData[0].ImageUrl" alt=""></a>
      </div>

      <!-- 专场专区 -->
      <div class="search_recommend" v-if="SpecialList.length">
        <a :href="item.Url" v-for='(item,index) in SpecialList' :key="index" @click="Statistics('SearchSpecial|'+item.ProductNo+'|'+index)">
          <div class="search_rec">
            <div class="search_rec_left">
              <img :src="item.ImageUrl" alt="" class="search_rec_left1">
              <img src="../../assets/images/Smallimg.png" class="search_rec_left2" alt="">
            </div>
            <div class="search_rec_right">
              <div class="rec_right">
                <p class="rec_right_title">{{item.Title}}</p>
                <p class="rec_right_text">{{item.Describe}}</p>
                <div class="rec_right_soping">
                  <span class="rec_right_rmb">¥{{item.Param1}}</span>
                  <div class="rec_right_soping_img">
                    <img src="../../assets/images/carts.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
    <div class='loading' v-if="lodeing">
      <img src="../../assets/images/370310983500145999.gif" alt="">
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
import { CompositeCall } from "@/server/getData.js";
export default {
  data() {
    return {
      SearchComponents: [],
      DataList: [],
      bannerSwiper: {
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active"
        },
        init() {}
      },
      swiperData: [],
      SpecialList: [],
      SearchTxt: "",
      SearchValueTxt: "",
      lodeing: true
    };
  },
  methods: {
    getLoadSearchClass() {
      CompositeCall([
        {
          key: "SEARCH_TJ", //搜索推荐
          url: "https://dvcms.weixinmvp.com/api/Advert/LoadAdvertList",
          Parameter: {
            Kind: "PRODUCT",
            AdvertCode: "SEARCH_TJ",
            PageIndex: 1,
            PageSize: 8
          }
        },
        {
          key: "SEARCH_BANNER", //搜索banner
          url: "https://dvcms.weixinmvp.com/api/Advert/LoadAdvertList",
          Parameter: {
            Kind: "IMAGE",
            AdvertCode: "SEARCH_BANNER",
            PageIndex: 1,
            PageSize: 8
          }
        },
        {
          key: "SEARCH_SPECIAL", //搜索专场
          url: "https://dvcms.weixinmvp.com/api/Advert/LoadAdvertList",
          Parameter: {
            Kind: "PRODUCT",
            AdvertCode: "SEARCH_SPECIAL",
            PageIndex: 1,
            PageSize: 8
          }
        },
        {
          key: "SEARCH_MESS", //搜索框文字
          url: "https://dvcms.weixinmvp.com/api/Advert/LoadAdvertList",
          Parameter: {
            Kind: "IMAGE",
            AdvertCode: "SEARCH_MESS",
            PageIndex: 1,
            PageSize: 20
          }
        },
        {
          key: "SEARCH_HOT_TXT", //热门搜索
          url: "https://dvcms.weixinmvp.com/api/Advert/LoadAdvertList",
          Parameter: {
            Kind: "IMAGE",
            AdvertCode: "SEARCH_HOT_TXT",
            PageIndex: 1,
            PageSize: 10
          }
        }
      ]).then(
        res => {
          this.lodeing = false;
          if (res.status == 200) {
            var obj = res.data.Data;
            this.SearchComponents = obj.SEARCH_TJ.Data;
            this.swiperData = obj.SEARCH_BANNER.Data;
            this.SpecialList = obj.SEARCH_SPECIAL.Data;
            this.DataList = obj.SEARCH_HOT_TXT.Data;
            this.SearchTxt = obj.SEARCH_MESS.Data[0].Describe
              ? obj.SEARCH_MESS.Data[0].Describe
              : "请输入搜索内容";
            if (this.SearchComponents.length) {
              this.SearchComponents.forEach(v => {
                v.ImageUrl =
                  JSON.parse(v.ImageUrl)[0].ServerUrl +
                  JSON.parse(v.ImageUrl)[0].FilePath +
                  ".thumb." +
                  JSON.parse(v.ImageUrl)[0].FileExt;
              });
            }
            if (this.swiperData.length) {
              this.swiperData.forEach(v => {
                v.ImageUrl =
                  JSON.parse(v.ImageUrl)[0].ServerUrl +
                  JSON.parse(v.ImageUrl)[0].FilePath +
                  ".thumb." +
                  JSON.parse(v.ImageUrl)[0].FileExt;
              });
            }
            if (this.SpecialList.length) {
              this.SpecialList.forEach(v => {
                v.ImageUrl =
                  JSON.parse(v.ImageUrl)[0].ServerUrl +
                  JSON.parse(v.ImageUrl)[0].FilePath +
                  ".thumb." +
                  JSON.parse(v.ImageUrl)[0].FileExt;
              });
            }
          } else {
            console.log(res.statusText);
          }
        },
        err => {
          console.log(err.statusText);
        }
      );
    },
    // 搜索点击事件
    SearchProduct() {
      location.href =
        "https://gdtvshop.weixinmvp.com/Wap/Shop/ProductListS.aspx?keyword=" +
        this.SearchValueTxt;
    },
    Statistics(item) {
      this.$statistics = this.$statistics.of("SEARCH|");
      this.$statistics.click(item);
    }
  },
  created() {
    this.getLoadSearchClass();
    this.$statistics.page('HOME|SEARCH')
  }
};
</script>
<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.swiper-slide {
  width: 90% !important;
  margin-right: 10 / @rem !important;
}
.search_box {
  width: 100%;
  background-color: #fff;
  height: 100%;
  .search_heade {
    width: 100%;
    background-color: #fff;
    height: 85 / @rem;
    border-bottom: 1 / @rem solid #f4f4f4;
    padding-top: 3%;
    .heade_img {
      display: inline-block;
      width: 15px;
      height: 20px;
      padding-left: 4%;
      .heade_images {
        height: 100%;
        vertical-align: middle;
      }
    }
    .heade_imput {
      display: inline-block;
      box-shadow: none;
      background-color: #f4f4f4;
      border-radius: 30 / @rem;
      width: 65%;
      margin-left: 4%;
      position: relative;
      .heade_imput_icon {
        width: 100%;
        .header_seach {
          position: absolute;
          left: 0.4em;
          top: 50%;
          margin-top: -7px;
          width: 14px;
          height: 14px;
          opacity: 0.5;
        }
      }
      .heade_test {
        background-color: #f4f4f4;
        border: none;
        outline: medium;
        margin-left: 2.5em;
        width: 80%;
        padding-bottom: 3%;
        font-size: 28 / @rem;
      }
    }
    .heade_btn {
      display: inline-block;
      height: 75%;
      width: 15%;
      text-align: center;
      border-radius: 8 / @rem;
      margin-left: 1%;
      background-color: #d82239;
      .heade_btn_test {
        font-size: 13px;
        color: #fff;
      }
    }
  }
  .search_main {
    margin-top: 20px;
    padding: 0 15 / @rem;
    // height: 100%;
    margin-bottom: 130 / @rem;
    background-color: #fff;
    .search_main_box {
      .search_main_head {
        overflow: hidden;
        .search_main_hot {
          font-weight: normal;
          font-size: 28 / @rem;
          float: left;
          font-weight: 900;
        }
        .search_main_trade {
          font-weight: normal;
          font-size: 28 / @rem;
          float: right;
          color: #66ccff;
        }
      }
      .search_main_conten {
        overflow: hidden;
        .search_product {
          float: left;
          width: 100%;
          margin-top: 15px;
          clear: both;
          padding-bottom: 15px;
          border-bottom: 1 / @rem solid #f1f1f1;
          li {
            float: left;
            color: #000;
            padding: 16 / @rem 16 / @rem;
            margin-right: 20 / @rem;
            margin-bottom: 20 / @rem;
            background-color: #fff;
            font-size: 28 / @rem;
            background-color: #f1f1f1;
            border-radius: 8 / @rem;
          }
        }
      }
    }

    .search_recommend {
      padding-top: 20px;
      h3 {
        padding-bottom: 20 / @rem;
      }
      a {
        display: block;
        border-bottom: 1px solid #f1f1f1;
        padding-bottom: 10 / @rem;
      }
      .search_rec_title {
        font-size: 30 / @rem;
        font-weight: 900;
      }
      .search_rec {
        margin-top: 40 / @rem;
        .search_rec_left {
          display: inline-block;
          width: 30%;
          position: relative;
          // padding-top: 5%;
          .search_rec_left1 {
            width: 100%;
            top: 0;
            left: 0;
          }
          .search_rec_left2 {
            width: 30 / @rem;
            position: absolute;
            top: 0;
          }
        }
        .search_rec_right {
          width: 66%;
          margin-left: 20 / @rem;
          float: right;
          overflow: hidden;
          .rec_right {
            .rec_right_title {
              font-family: SimHei;
              font-size: 30 / @rem;
              color: #3c3c3c;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 35 / @rem;
            }
            .rec_right_text {
              font-size: 26 / @rem;
              color: #3c3c3c;
              opacity: 0.38;
              margin-top: 15 / @rem;
              line-height: 32 / @rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .rec_right_soping {
              overflow: hidden;
              padding-top: 5%;
              .rec_right_rmb {
                font-size: 38 / @rem;
                margin-top: 0.5rem;
                color: #d34a44;
                display: inline-block;
                float: left;
              }
              .rec_right_soping_img {
                float: right;
                background-color: #d34a44;
                border-radius: 50%;
                height: 50 / @rem;
                width: 50 / @rem;
                margin-top: 4%;
                margin-right: 5%;
                img {
                  width: 70%;
                  margin-top: 15%;
                  padding-left: 14%;
                  display: block;
                }
              }
            }
          }
        }
      }
    }
    .banner_box {
      margin: 30 / @rem 0;
      a {
        display: block;
      }
      .swiper-slide {
        width: 200 / @rem;
      }
    }
  }
}
</style>

