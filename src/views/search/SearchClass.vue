<template>
  <div class="search_box">
    <!-- header -->
    <div class="search_heade" v-if="!lodeing">
      <router-link :to="{path:'categoryfixed'}" class="heade_img"><img src="../../assets/images/class_1.png" alt="" class="heade_images"></router-link>
      <!-- <a href="https://gdtvshop.weixinmvp.com/Wap/Shop/categoryfixed.aspx" class="heade_img">
        <img src="../../assets/images/fenleis.png" alt="" class="heade_images">
      </a> -->
      <div class="heade_imput">
        <div class="heade_imput_icon">
          <img src="../../assets/images/sousuo.png" alt="" class="header_seach">
        </div>
        <input type="text" data-type="search" v-model="SearchValueTxt" id="keyword" name="keyword" class="heade_test" :placeholder="searchText">
      </div>
      <div class="heade_btn" @click="SearchProduct">
        <span class="heade_btn_test">搜索</span>
      </div>
    </div>
    <!-- main -->
    <div class="search_main">
      <!-- banner_3 -->
      <div class="banner_3" v-if="banner_3.length>=3">
        <a :href="banner_3[0].Url" class="banner_3_box banner_3_left"><img :src="banner_3[0].ImageUrl" alt="" @click="Statistics('SearchBanner|'+banner_3[0].Title)"></a>
        <a :href="banner_3[1].Url" class="banner_3_box banner_3_center" @click="Statistics('SearchBanner|'+banner_3[1].Title)">
          <img :src="banner_3[1].ImageUrl?banner_3[1].ImageUrl:'https://dvcms.weixinmvp.com/Mass/images/'+banner_3[1].Param4+'.gif?v=1'" alt="">
          <div class="banner_3_product_list">
            <img :src="banner_product_image" alt="">
          </div>
        </a>
        <a :href="banner_3[2].Url" class="banner_3_box banner_3_right" @click="Statistics('SearchBanner|'+banner_3[2].Title)"><img :src="banner_3[2].ImageUrl" alt=""></a>
      </div>
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
      <!-- banner -->
      <div class="banner_box" v-if="swiperData">
        <swiper id="Hcontainer" class='Hcontainer' :options="bannerSwiper" ref="myswiper" v-if="swiperData.length>1">
          <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <a :href="item.Url" @click="Statistics('SearchBanner|'+item.Title)"><img :src="item.ImageUrl" alt="" class="banner_img"></a>
          </swiper-slide>
        </swiper>
        <a :href="swiperData[0].Url" v-if="swiperData.length==1">
          <img :src="swiperData[0].ImageUrl" alt="" class="banner_img">
        </a>
      </div>
      <!-- 推荐 -->
      <div class="search_recommend" v-if="SearchComponents.length||(swiperData&&swiperData.length)">
        <h3 class="search_rec_title">热门推荐</h3>

        <div class="search_rec_contenr">
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
                    <span class="rec_right_rmb">¥{{item.ActivityPrice?item.ActivityPrice:item.Param1}}</span>
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
import {
  CompositeCall,
  LoadAdvertList,
  GetSpecialActivity,
  GetReferenceProductList
} from "@/server/getData.js";
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
      lodeing: true,
      searchList: "",
      searchText: "",
      animate: false,
      searchIndex: 0,
      SearchValueTxt: "",
      banner_3: [],
      banner_product_list: [],
      banner_product_image: ""
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
            this.searchList = obj.SEARCH_MESS.Data;
            if (this.searchList.length) {
              this.searchText = this.searchList[0].Title;
            } else {
              this.searchText = "请输入搜索内容";
            }
            if (this.searchList.length > 1) {
              setInterval(this.showMarquee, 3000);
            }
            if (this.SearchComponents.length) {
              this.SearchComponents.forEach(v => {
                v.ImageUrl =
                  JSON.parse(v.ImageUrl)[0].ServerUrl +
                  JSON.parse(v.ImageUrl)[0].FilePath +
                  ".thumb." +
                  JSON.parse(v.ImageUrl)[0].FileExt;
              });
            }
            if (this.swiperData) {
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
          console.log(err);
        }
      );
    },
    getBanner_3() {
      var CheckTime = "";
      var This = this;
      LoadAdvertList("IMAGE", "SEARCH_SPACE_3", 1, 3, CheckTime).then(res => {
        // console.log(res);
        if (res.data.Data.length < 3) return;
        var obj = res.data.Data;
        obj.forEach(r => {
          if (r.ImageUrl) {
            var r_img = JSON.parse(r.ImageUrl)[0];
            r.ImageUrl =
              r_img.ServerUrl + r_img.FilePath + ".thumb." + r_img.FileExt;
          }
        });
        this.banner_3 = obj;
        // 获取中间产品
        var id = obj[1].Param5;
        if (id) {
          GetSpecialActivity(id).then(res => {
            if (!res.data.Data) return;
            var code = JSON.parse(res.data.Data.NAVIGATION_CONFIG)[0].Code;
            GetReferenceProductList(1, 6, 0, "specialactivity", code).then(
              res => {
                // console.log(res);
                var data = res.data.Data;
                data.forEach(v => {
                  var img_obj = JSON.parse(v.ProductImage)[0];
                  v.ProductImage =
                    img_obj.ServerUrl +
                    img_obj.FilePath +
                    ".thumb." +
                    img_obj.FileExt;
                });
                // console.log(data);
                this.banner_product_list = data;
                This.banner_product_image =
                  This.banner_product_list[0].ProductImage;
                var index = 0;
                setInterval(function() {
                  index++;
                  if (index >= 6) index = 0;
                  This.banner_product_image =
                    This.banner_product_list[index].ProductImage;
                }, 2500);
              }
            );
          });
        }
      });
    },
    // 搜索点击事件
    SearchProduct() {
      var searchUrlTxt = "";
      if (this.SearchValueTxt) {
        searchUrlTxt = this.SearchValueTxt;
      } else {
        searchUrlTxt =
          this.searchText != "请输入搜索内容" ? this.searchText : "";
      }
      location.href =
        "https://gdtvshop.weixinmvp.com/Wap/Shop/ProductListS.aspx?keyword=" +
        searchUrlTxt;
    },
    Statistics(item) {
      this.$statistics = this.$statistics.of("SEARCH|");
      this.$statistics.click(item);
    },
    showMarquee: function() {
      this.animate = true;
      if (this.searchIndex > this.searchList.length - 1) this.searchIndex = 0;
      setTimeout(() => {
        this.searchText = this.searchList[this.searchIndex].Title;
        this.searchIndex++;
        this.animate = false;
      }, 500);
    }
  },
  created() {
    this.getLoadSearchClass();
    this.$statistics.page("HOME|SEARCH");
    this.getBanner_3();
  }
};
</script>
<style scoped lang='less'>
@rem: 46.875rem;
img {
  width: 100%;
}
.swiper-slide {
  // width: 90% !important;
  // margin-right: 10 / @rem !important;
}
.search_box {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .search_heade {
    width: 100%;
    background-color: #87180f;
    height: 85 / @rem;
    // border-bottom: 1 / @rem solid #f4f4f4;
    padding-top: 20/@rem;
    position: fixed;
    z-index: 10000;
    .heade_img {
      float: left;
      width: 1.4rem;
      padding-top: 5 / @rem;
      padding-left: 20 / @rem;
      padding-right: 25 / @rem;
      .heade_images {
        width: 80%;
        margin: 0 auto;
        display: block;
        margin-top: 0%;
      }
    }
    .heade_imput {
      display: inline-block;
      box-shadow: none;
      background-color: #f4f4f4;
      border-radius: 30 / @rem;
      width: 65%;
      // margin-left: 4%;
      position: relative;
      overflow: hidden;
      .heade_imput_icon {
        width: 100%;
        .header_seach {
          position: absolute;
          left: 0.4em;
          top: 50%;
          margin-top: -7px;
          width: 25/@rem;
          height: 25/@rem;
        }
      }
      .heade_test {
        background-color: #f4f4f4;
        border: none;
        outline: medium;
        margin-left: 60/@rem;
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
      vertical-align: top;
      .heade_btn_test {
        font-size: 13px;
        color: #fff;
      }
    }
  }
  .search_main {
    padding-top: 120 / @rem;
    padding-bottom: 280 / @rem;
    .search_main_box {
      background: #fff;
      margin: 15 / @rem;
      border-radius: 20 / @rem;
      margin-top: 0;
      .search_main_head {
        overflow: hidden;
        padding: 15 / @rem 15 / @rem;
        .search_main_hot {
          font-weight: normal;
          font-size: 28 / @rem;
          float: left;
          font-weight: 900;
          // color: #fff;
        }
        .search_main_trade {
          font-weight: normal;
          font-size: 28 / @rem;
          float: right;
          color: #66ccff;
        }
      }
      .search_main_conten {
        width: 96%;
        margin-left: 2%;
        // background-color: #fff;
        display: inline-block;
        padding-top: 20 / @rem;
        border-radius: 10 / @rem;
        .search_product {
          float: left;
          width: 100%;
          clear: both;
          // border-bottom: 1 / @rem solid #f5f5f5;
          li {
            float: left;
            color: #000;
            padding: 16 / @rem 16 / @rem;
            margin: 0 / @rem 0 / @rem 20 / @rem 20 / @rem;
            background-color: #f5f5f5;
            font-size: 28 / @rem;
            border-radius: 8 / @rem;
          }
        }
      }
    }

    .search_recommend {
      padding-top: 30 / @rem;
      // background-color: #f5f5f5;
      background: #fff;
      margin: 15 / @rem;
      margin-top: 0;
      border-radius: 20 / @rem;
      h3 {
        padding-bottom: 20 / @rem;
      }

      a {
        display: block;
      }
      .search_rec_title {
        font-size: 0.64rem;
        font-weight: 900;
        padding: 0 0.32rem;
        margin-bottom: 20 / @rem;
        // color: #fff;
      }

      .search_rec_contenr {
        width: 96%;
        margin-left: 2%;
        background-color: #fff;
        display: inline-block;
        border-radius: 10 / @rem;
        .search_rec {
          margin-top: 25 / @rem;
          padding: 0 15 / @rem;
          border-bottom: 1 / @rem solid #f1f1f1;
          position: relative;
          .search_rec_left {
            display: inline-block;
            width: 30%;
            position: relative;
            .search_rec_left1 {
              width: 100%;
              top: 0;
              left: 0;
              padding-top: 20 / @rem;
              padding-left: 20 / @rem;
            }
            .search_rec_left2 {
              width: 45 / @rem;
              position: absolute;
              top: 0;
            }
          }
          .search_rec_right {
            width: 63%;
            margin-left: 20 / @rem;
            position: absolute;
            height: 100%;
            display: inline-block;
            .rec_right {
              margin-top: 2%;
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
                bottom: 0;
                position: absolute;
                width: 100%;
                margin-bottom: 2%;
                .rec_right_rmb {
                  font-size: 38 / @rem;
                  margin-top: 0.5rem;
                  color: #d34a44;
                  display: inline-block;
                  // float: left;
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
                    margin-top: 18%;
                    padding-left: 14%;
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
    .banner_box {
      width: 96%;
      margin-left: 2%;
      margin-bottom: 10 / @rem;
      .banner_img {
        border-radius: 10 / @rem;
      }
      .swiper-slide {
        width: 200 / @rem;
      }
    }
    .banner_3 {
      // padding: 15 / @rem 0;
      overflow: hidden;
      .banner_3_box {
        width: 240 / @rem;
        display: block;
        float: left;
      }
      .banner_3_left {
      }
      .banner_3_center {
        width: 270 / @rem;
        position: relative;
        .banner_3_product_list {
          position: absolute;
          top: 48.9%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 67%;
          border-radius: 10 / @rem 10 / @rem 0 0;
          overflow: hidden;
        }
      }
      .banner_3_right {
      }
    }
  }
}
</style>

