
import {
  LoadAdvertList,
  LoadCateGrop,
  getQuery,
  GetSpecialActivity,
  GetReferenceProductList,
  getCheckTime,
  HandleImageData,
  HandleProductData,
  LoadProductByCate,
  Cookies,
  LoadActivityList,
  LoadGetTypeTree
} from '../server/getData.js'

import axios from "axios";
import Vue from 'vue';

var more = require('../assets/images/more.jpg')

var cateMore = require('../assets/images/catemore.png')

export default {
  changeFlag: function (state, id) {
    state.flag = id.state;
  },
  changeHeaderShow: function (state, id) {
    state.HeaderShow = id.state;
  },
  changeFlagRIght: function (state, id) {
    state.flagRight = id.state;
  },
  getHome: function (state, id) {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("IMAGE", "HOME_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.home.swiperSlides = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "HOME_SPECIAL_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.home.specialAreaContent = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "HOME_HOT", 1, 26, CheckTime).then(function (res) {
      This.state.home.HotSaleProduct = HandleProductData(res)
      if (This.state.home.HotSaleProduct.length == 26) {
        var obj = {}
        obj.ImageUrl = more
        This.state.home.HotSaleProduct.push(obj)
      }
      // This.state.home.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "HOMT_ADVERTISING_SPACE_1", 1, 100, CheckTime).then(function (res) {
      This.state.home.adversitingone = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "HOMT_ADVERTISING_SPACE_2", 1, 100, CheckTime).then(function (res) {
      This.state.home.adversitingtwo = [];
      This.state.home.adversitingtwo = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "HOMT_ADVERTISING_SPACE_3", 1, 100, CheckTime).then(function (res) {
      This.state.home.adversitingthree = [];
      This.state.home.adversitingthree = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "HOME_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.home.NewProduct = HandleProductData(res)
      // This.state.home.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "HOME_SPECIAL_SPACE", 1, 100, CheckTime).then(function (res) {
      This.state.home.specialArr = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "HOME_RECOMMEND", 1, 10, CheckTime).then(function (res) {
      This.state.home.RecommendProduct = HandleProductData(res)
      // This.state.home.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "HOME_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.home.HomeAritcal = HandleImageData(res)
      This.state.home.loadingFlag++;
    })
    // 限时特惠
    LoadAdvertList('PRODUCT', 'HOME_LIMITEDTIME', 1, 4, CheckTime).then(function (res) {
      This.state.home.specialTimeLimitArr = HandleProductData(res);
    })
    LoadAdvertList("IMAGE", "HOME_YUANWEI", 1, 100, CheckTime).then(function (res) {
      res.data.Data.forEach(v => {
        if (v.ImageUrl) {
          v.ImageUrl = JSON.parse(v.ImageUrl)[0].ServerUrl + JSON.parse(v.ImageUrl)[0].FilePath + ".thumb." + JSON.parse(v.ImageUrl)[0].FileExt
        }
      });
      This.state.home.originalCompilation = res.data.Data
      This.state.home.loadingFlag++;
    })
  },
  getMs: function () {
    var This = this;
    var CheckTime = '';
    // LoadCateGrop().then(function(res){
    // })
    LoadAdvertList("PRODUCT", "MS_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.ms.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "MS_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.ms.swiperSlides = HandleImageData(res)
      This.state.ms.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MS_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.ms.MsAritcal = HandleImageData(res)
      This.state.ms.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MS_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.ms.categoryArrBefore = HandleImageData(res)
      if (This.state.ms.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.ms.categoryArrBefore[0].URL
        };
        This.state.ms.categoryArrBefore.push(aObj);
      }
      This.state.ms.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MS_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.ms.categoryAreaArr = HandleImageData(res)
      This.state.ms.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "MS_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.ms.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "MS_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.ms.hotRecommendVertical = HandleProductData(res)
    })
  },
  getJjjz: function () {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("PRODUCT", "JJJZ_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.jjjz.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "jjjz_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.jjjz.swiperSlides = HandleImageData(res)
      This.state.jjjz.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "JJJZ_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.jjjz.jjjzAritcal = HandleImageData(res)
      This.state.jjjz.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "jjjz_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.jjjz.categoryArrBefore = HandleImageData(res)
      if (This.state.jjjz.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.jjjz.categoryArrBefore[0].URL
        };
        This.state.jjjz.categoryArrBefore.push(aObj);
      }
      This.state.jjjz.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "jjjz_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.jjjz.categoryAreaArr = HandleImageData(res)
      This.state.jjjz.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "jjjz_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.jjjz.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "jjjz_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.jjjz.hotRecommendVertical = HandleProductData(res)
    })
  },
  getJydq: function () {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("PRODUCT", "JYDQ_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.jydq.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "JYDQ_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.jydq.swiperSlides = HandleImageData(res)
      This.state.jydq.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "JYDQ_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.jydq.jydqAritcal = HandleImageData(res)
      This.state.jydq.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "JYDQ_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.jydq.categoryArrBefore = HandleImageData(res)
      if (This.state.jydq.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.jydq.categoryArrBefore[0].URL
        };
        This.state.jydq.categoryArrBefore.push(aObj);
      }
      This.state.jydq.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "JYDQ_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.jydq.categoryAreaArr = HandleImageData(res)
      This.state.jydq.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "JYDQ_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.jydq.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "JYDQ_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.jydq.hotRecommendVertical = HandleProductData(res)
    })
  },
  getMyyp: function () {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("PRODUCT", "MYYP_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.myyp.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "MYYP_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.myyp.swiperSlides = HandleImageData(res)
      This.state.myyp.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MYYP_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.myyp.myypAritcal = HandleImageData(res)
      This.state.myyp.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MYYP_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.myyp.categoryArrBefore = HandleImageData(res)
      if (This.state.myyp.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.myyp.categoryArrBefore[0].URL
        };
        This.state.myyp.categoryArrBefore.push(aObj);
      }
      This.state.myyp.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MYYP_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.myyp.categoryAreaArr = HandleImageData(res)
      This.state.myyp.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "MYYP_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.myyp.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "MYYP_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.myyp.hotRecommendVertical = HandleProductData(res)
    })
  },
  getMzgh: function () {
    var This = this;
    var CheckTime = '';
    LoadAdvertList("PRODUCT", "MZGH_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.mzgh.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "MZGH_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.mzgh.swiperSlides = HandleImageData(res)
      This.state.mzgh.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MZGH_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.mzgh.mzghAritcal = HandleImageData(res)
      This.state.mzgh.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MZGH_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.mzgh.categoryArrBefore = HandleImageData(res)
      if (This.state.mzgh.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.mzgh.categoryArrBefore[0].URL
        };
        This.state.mzgh.categoryArrBefore.push(aObj);
      }
      This.state.mzgh.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "MZGH_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.mzgh.categoryAreaArr = HandleImageData(res)
      This.state.mzgh.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "MZGH_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.mzgh.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "MZGH_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.mzgh.hotRecommendVertical = HandleProductData(res)
    })
  },
  getQcbk: function () {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("PRODUCT", "QCBK_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.qcbk.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "QCBK_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.qcbk.swiperSlides = HandleImageData(res)
      This.state.qcbk.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "QCBK_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.qcbk.qcbkAritcal = HandleImageData(res)
      This.state.qcbk.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "QCBK_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.qcbk.categoryArrBefore = HandleImageData(res)
      if (This.state.qcbk.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.qcbk.categoryArrBefore[0].URL
        };
        This.state.qcbk.categoryArrBefore.push(aObj);
      }
      This.state.qcbk.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "QCBK_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.qcbk.categoryAreaArr = HandleImageData(res)
      This.state.qcbk.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "QCBK_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.qcbk.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "QCBK_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.qcbk.hotRecommendVertical = HandleProductData(res)
    })
  },
  getWhjy: function () {
    var This = this;
    var CheckTime = ''
    LoadAdvertList("PRODUCT", "WHJY_NEW_PRODUCT", 1, 9, CheckTime).then(function (res) {
      This.state.whjy.NewProduct = HandleProductData(res)
    })
    LoadAdvertList("IMAGE", "WHJY_BANNER", 1, 100, CheckTime).then(function (res) {
      This.state.whjy.swiperSlides = HandleImageData(res)
      This.state.whjy.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "WHJY_ARTICLE", 1, 100, CheckTime).then(function (res) {
      This.state.whjy.whjyAritcal = HandleImageData(res)
      This.state.whjy.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "WHJY_CATEGORY", 1, 9, CheckTime).then(function (res) {
      This.state.whjy.categoryArrBefore = HandleImageData(res)
      if (This.state.whjy.categoryArrBefore.length > 0) {
        var aObj = {
          Title: "更多",
          ImageUrl: cateMore,
          URL: This.state.whjy.categoryArrBefore[0].URL
        };
        This.state.whjy.categoryArrBefore.push(aObj);
      }
      This.state.whjy.loadingFlag++;
    })
    LoadAdvertList("IMAGE", "WHJY_AREA", 1, 100, CheckTime).then(function (res) {
      This.state.whjy.categoryAreaArr = HandleImageData(res)
      This.state.whjy.loadingFlag++;
    })
    LoadAdvertList("PRODUCT", "WHJY_HOTPRODUCT", 1, 100, CheckTime).then(function (res) {
      This.state.whjy.hotRecommendLevel = HandleProductData(res)
    })
    LoadAdvertList("PRODUCT", "WHJY_HOTRECOMMEND_VERTICAL", 1, 10, CheckTime).then(function (res) {
      This.state.whjy.hotRecommendVertical = HandleProductData(res)
    })
  },
  getcatetoryData(state, arr) {

    for (var i = 0; i < state[arr.catetoraName].categroysKind.length; i++) {
      state[arr.catetoraName][
        state[arr.catetoraName].categroysKind[i] + "index"
      ] = 2;
      state[arr.catetoraName][
        state[arr.catetoraName].categroysKind[i] + "flag"
      ] = true;
      state[obj.catetory][
        state[obj.catetory].categroysKind[i] + "scrollTop"
      ] = 0;
    }
    axios
      .post("/api/Product/LoadProductByCate", {
        TypeId: obj.Id,
        PageIndex: 1,
        PageSize: 8
      })
      .then(function (res) {
        res.data.Data.map(function (item) {
          item.ProductImage =
            JSON.parse(item.ProductImage)[0].ServerUrl +
            JSON.parse(item.ProductImage)[0].FilePath +
            ".thumb." +
            JSON.parse(item.ProductImage)[0].FileExt;
          state[arr.catetoraName].categroyList[
            state[arr.catetoraName].categroysKind.indexOf(obj.Id)
          ].push(item);
        });
        if (state[arr.catetoraName].categroysKind.indexOf(obj.Id) >= 0) {
          if (
            state[arr.catetoraName].categroysKind.indexOf(obj.Id) - 1 >=
            0
          ) {
            axios
              .post("/api/Product/LoadProductByCate", {
                TypeId:
                  state[arr.catetoraName].categroysKind[
                  state[arr.catetoraName].categroysKind.indexOf(obj.Id) - 1
                  ],
                PageIndex: 1,
                PageSize: 8
              })
              .then(function (res) {
                res.data.Data.map(function (item) {
                  item.ProductImage =
                    JSON.parse(item.ProductImage)[0].ServerUrl +
                    JSON.parse(item.ProductImage)[0].FilePath +
                    ".thumb." +
                    JSON.parse(item.ProductImage)[0].FileExt;
                  state[arr.catetoraName].categroyList[
                    state[arr.catetoraName].categroysKind.indexOf(
                      state[arr.catetoraName].categroysKind[
                      state[arr.catetoraName].categroysKind.indexOf(
                        obj.Id
                      ) - 1
                      ]
                    )
                  ].push(item);
                });
              });
          }
        }
        if (state[obj.catetory].categroysKind.indexOf(obj.Id) >= 0) {
          if (
            state[obj.catetory].categroysKind.indexOf(obj.Id) + 1 <=
            state[obj.catetory].categroysKind.length
          ) {
            axios
              .post("/api/Product/LoadProductByCate", {
                TypeId:
                  state[obj.catetory].categroysKind[
                  state[obj.catetory].categroysKind.indexOf(obj.Id) + 1
                  ],
                PageIndex: 1,
                PageSize: 8
              })
              .then(function (res) {
                res.data.Data.map(function (item) {
                  item.ProductImage =
                    JSON.parse(item.ProductImage)[0].ServerUrl +
                    JSON.parse(item.ProductImage)[0].FilePath +
                    ".thumb." +
                    JSON.parse(item.ProductImage)[0].FileExt;
                  state[obj.catetory].categroyList[
                    state[obj.catetory].categroysKind.indexOf(
                      state[obj.catetory].categroysKind[
                      state[obj.catetory].categroysKind.indexOf(obj.Id) + 1
                      ]
                    )
                  ].push(item);
                });
              });
          }
        }
      });


  },
  getcatetoryOne(state, arr) {
    if (state[arr.name][arr.id + "flag"]) {
      state[arr.name][arr.id + "flag"] = false;
      LoadProductByCate(arr.id, state[arr.name][arr.id + "index"], 8).then(function (res) {
        state[arr.name][arr.id + "index"] =
          state[arr.name][arr.id + "index"] + 1;
        res.data.Data.map(function (data) {
          data.ProductImage =
            JSON.parse(data.ProductImage)[0].ServerUrl +
            JSON.parse(data.ProductImage)[0].FilePath +
            ".thumb." +
            JSON.parse(data.ProductImage)[0].FileExt;
          state[arr.name].categroyList[
            state[arr.name].categroysKind.indexOf(arr.id)
          ].push(data);
        });
        if (res.data.Data.length < 8) {
          state[arr.name][arr.id + "flag"] = false;
        } else {
          state[arr.name][arr.id + "flag"] = true;
        }
      })
    }
  },
  getcatetory(state, obj) {
    function getParam(paramName) {
      var paramValue = "";
      if (window.location.href.indexOf("?") != -1) {
        var paramArr = window.location.href.split("?")[1];
        if (paramArr.indexOf("&") != -1) {
          var Parr = paramArr.split("&");
          for (var i = 0; i < Parr.length; i++) {
            var result = Parr[i].split("=");
            if (result[0] == paramName) {
              paramValue = result[1];
              return paramValue;
            }
          }
        }
      }
    }
    var CheckTime = getParam("CheckTime");
    if (CheckTime) {
      var data = new Date(t)

      CheckTime = myDate.getFullYear() + '-' + myDate.getMonth() + '-' + myDate.getDate()
    } else {
      CheckTime = ''
    }
    axios
      .post("/api/Advert/LoadAdvertList", {
        Kind: "IMAGE",
        AdvertCode: obj.catetoraName,
        PageIndex: 1,
        PageSize: 100,
        CheckTime: CheckTime
      })
      .then(function (res) {
        for (var i = 0; i < res.data.Data.length; i++) {
          var NavigationCf = JSON.parse(res.data.Data[i].NavigationConfig)
          // console.log(JSON.parse(res.data.Data[i].NavigationConfig))
          for (var j = 0; j < NavigationCf.length; j++) {
            if (NavigationCf[j].hasOwnProperty('status') && !NavigationCf[j].status) {
              NavigationCf.splice(j, 1)
              j--
            }
          }
          res.data.Data[i].NavigationConfig = JSON.stringify(NavigationCf)
        }
        state[obj.catetory].categorys = [];
        state[obj.catetory].categroysKind = [];
        if (res.data.Data) {
          res.data.Data.map(function (data) {
            state[obj.catetory].categroyList.push([]);
            state[obj.catetory].categorys.push(data.Title);
            state[obj.catetory].categroysKind.push(data.Url);
            state[obj.catetory].catetoryAfter.push(data.Title);
            var bannerObj = {};
            bannerObj.Describe = data.Describe;
            bannerObj.Title = data.Title;
            bannerObj.URL = data.Url;
            if (data.ImageUrl) {
              bannerObj.IMAGE =
                JSON.parse(data.ImageUrl)[0].ServerUrl +
                JSON.parse(data.ImageUrl)[0].FilePath +
                ".thumb." +
                JSON.parse(data.ImageUrl)[0].FileExt;
            }
            var NavigationConfigArr = [];
            var NavigationArr = [];
            if (JSON.parse(data.NavigationConfig).length <= 10) {
              JSON.parse(data.NavigationConfig).map(function (res, index) {
                if (res.Image.ServerUrl) {
                  res.ImageUrl = res.Image.ServerUrl +
                    res.Image.FilePath +
                    ".thumb." +
                    res.Image.FileExt;
                }
                if ((index + 1) % 11 == 0) {
                  NavigationConfigArr.push(NavigationArr)
                  NavigationArr = []
                } else {
                  NavigationArr.push(res)
                  if (index == JSON.parse(data.NavigationConfig).length - 1) {
                    NavigationConfigArr.push(NavigationArr)
                  }
                }

              })
              if (NavigationConfigArr[0] && NavigationConfigArr[0].length == 7) {
                var aObj = {
                  Title: "更多",
                  ImageUrl: cateMore,
                  Id: NavigationConfigArr[0][0].Id

                }
                NavigationConfigArr[0].push(aObj)

              } else if (NavigationConfigArr.length[0] && NavigationConfigArr.length[0] >= 9) {
                var aObj = {
                  Title: "更多",
                  ImageUrl: cateMore,
                  Id: NavigationConfigArr[0][0].Id

                }
                NavigationConfigArr[0].push(aObj)
              }
            } else {

              JSON.parse(data.NavigationConfig).map(function (res, index) {
                if (res.Image.ServerUrl) {
                  res.ImageUrl = res.Image.ServerUrl +
                    res.Image.FilePath +
                    ".thumb." +
                    res.Image.FileExt;
                }
                NavigationArr.push(res)
                if (NavigationArr.length >= 9) {
                  NavigationConfigArr.push(NavigationArr)
                  NavigationArr = []
                }
                // console.log(index)
                if (index == JSON.parse(data.NavigationConfig).length - 1) {
                  NavigationConfigArr.push(NavigationArr)
                }

              })
              for (var i = 0; i < NavigationConfigArr.length; i++) {
                if (NavigationConfigArr[i] && NavigationConfigArr[i].length >= 9 && i != NavigationConfigArr.length - 1) {
                  var aObj = {
                    Title: "滑动更多",
                    ImageUrl: cateMore,
                    Id: NavigationConfigArr[0][0].Id

                  }
                  NavigationConfigArr[i].push(aObj)
                }
              }
            }

            bannerObj.NavigationConfig = NavigationConfigArr
            state[obj.catetory].categoryArr.push(bannerObj);
          });
        }
        for (var i = 0; i < state[obj.catetory].categroysKind.length; i++) {
          state[obj.catetory][
            state[obj.catetory].categroysKind[i] + "index"
          ] = 2;
          state[obj.catetory][
            state[obj.catetory].categroysKind[i] + "flag"
          ] = true;
          state[obj.catetory][
            state[obj.catetory].categroysKind[i] + "scrollTop"
          ] = 0;
        }
        axios
          .post("/api/Product/LoadProductByCate", {
            TypeId: obj.Id,
            PageIndex: 1,
            PageSize: 8
          })
          .then(function (res) {
            if (res.data.Data.length > 0) {
              res.data.Data.map(function (item) {
                try {
                  item.ProductImage =
                    JSON.parse(item.ProductImage)[0].ServerUrl +
                    JSON.parse(item.ProductImage)[0].FilePath +
                    ".thumb." +
                    JSON.parse(item.ProductImage)[0].FileExt;
                } catch (e) {

                }

                if (state[obj.catetory].categroyList[
                  state[obj.catetory].categroysKind.indexOf(obj.Id)
                ]) {
                  state[obj.catetory].categroyList[
                    state[obj.catetory].categroysKind.indexOf(obj.Id)
                  ].push(item);
                }
              });
            }
            if (state[obj.catetory].categroysKind.indexOf(obj.Id) >= 0) {
              if (
                state[obj.catetory].categroysKind.indexOf(obj.Id) - 1 >=
                0
              ) {
                axios
                  .post("/api/Product/LoadProductByCate", {
                    TypeId:
                      state[obj.catetory].categroysKind[
                      state[obj.catetory].categroysKind.indexOf(obj.Id) - 1
                      ],
                    PageIndex: 1,
                    PageSize: 8
                  })
                  .then(function (res) {
                    res.data.Data.map(function (item) {
                      item.ProductImage =
                        JSON.parse(item.ProductImage)[0].ServerUrl +
                        JSON.parse(item.ProductImage)[0].FilePath +
                        ".thumb." +
                        JSON.parse(item.ProductImage)[0].FileExt;
                      state[obj.catetory].categroyList[
                        state[obj.catetory].categroysKind.indexOf(
                          state[obj.catetory].categroysKind[
                          state[obj.catetory].categroysKind.indexOf(
                            obj.Id
                          ) - 1
                          ]
                        )
                      ].push(item);
                    });
                  });
              }
            }

            if (state[obj.catetory].categroysKind.indexOf(obj.Id) >= 0) {
              if (
                state[obj.catetory].categroysKind.indexOf(obj.Id) + 1 <
                state[obj.catetory].categroysKind.length
              ) {
                axios
                  .post("/api/Product/LoadProductByCate", {
                    TypeId:
                      state[obj.catetory].categroysKind[
                      state[obj.catetory].categroysKind.indexOf(obj.Id) + 1
                      ],
                    PageIndex: 1,
                    PageSize: 8
                  })
                  .then(function (res) {
                    res.data.Data.map(function (item) {
                      item.ProductImage =
                        JSON.parse(item.ProductImage)[0].ServerUrl +
                        JSON.parse(item.ProductImage)[0].FilePath +
                        ".thumb." +
                        JSON.parse(item.ProductImage)[0].FileExt;
                      state[obj.catetory].categroyList[
                        state[obj.catetory].categroysKind.indexOf(
                          state[obj.catetory].categroysKind[
                          state[obj.catetory].categroysKind.indexOf(
                            obj.Id
                          ) + 1
                          ]
                        )
                      ].push(item);
                    });
                  });
              }
            }
          });
      });
  },
  getCatetoryOneDate(state, obj) {
    axios
      .post("/api/Product/LoadProductByCate", {
        TypeId: obj.Id,
        PageIndex: 1,
        PageSize: 8
      })
      .then(function (res) {
        res.data.Data.map(function (item) {
          item.ProductImage =
            JSON.parse(item.ProductImage)[0].ServerUrl +
            JSON.parse(item.ProductImage)[0].FilePath +
            ".thumb." +
            JSON.parse(item.ProductImage)[0].FileExt;
          state[obj.catetory].categroyList[
            state[obj.catetory].categroysKind.indexOf(obj.Id)
          ].push(item);
        });
      });
  },
  getMoredata(state, obj) {
    var CheckTime = ''
    var cateNAme = obj.name
    if (cateNAme == "home") {
      if (state.home.flag) {
        state.home.flag = false;
        axios
          .post("/api/Advert/LoadAdvertList", {
            Kind: "PRODUCT",
            AdvertCode: "HOME_RECOMMEND",
            PageIndex: obj.index,
            PageSize: 10,
            CheckTime: CheckTime
          })
          .then(function (res) {
            state.home.flag = true;
            state.home.index = state.home.index + 1;
            if (res.data.Data) {
              res.data.Data.map(function (data) {
                var PromotionTagTexts = {
                  conditional_discount: '满减',
                  conditional_gift: '满赠',
                  discount: '直降',
                  gift: '买赠',
                  shipfee: '包邮',
                  coupon: '优惠券',
                  limit: '限制',
                };
                if (PromotionTagTexts[data.PromotionTag] && data.PromotionTag != "shipfee" && data.PromotionTag != "limit") {
                  data.PromotionTag = PromotionTagTexts[data.PromotionTag]
                } else {
                  data.PromotionTag = ''
                }
                data.ImageUrl =
                  JSON.parse(data.ImageUrl)[0].ServerUrl +
                  JSON.parse(data.ImageUrl)[0].FilePath +
                  ".thumb." +
                  JSON.parse(data.ImageUrl)[0].FileExt;
              });

              for (var i = 0; i < res.data.Data.length; i++) {
                state.home.RecommendProduct.push(res.data.Data[i]);
              }
              if (res.data.Data.length < 10) {
                state.home.flag = false;
              }
            }
          });
      }
    } else {
      if (state[cateNAme].flag) {
        state[cateNAme].flag = false;
        axios
          .post("/api/Advert/LoadAdvertList", {
            Kind: "PRODUCT",
            AdvertCode: cateNAme.toUpperCase() + "_HOTRECOMMEND_VERTICAL",
            PageIndex: obj.index,
            PageSize: 10,
            CheckTime: CheckTime
          })
          .then(function (res) {
            state[cateNAme].flag = true;
            state[cateNAme].index = state[cateNAme].index + 1;
            if (res.data.Data) {

              res.data.Data.map(function (data) {
                var PromotionTagTexts = {
                  conditional_discount: '满减',
                  conditional_gift: '满赠',
                  discount: '直降',
                  gift: '买赠',
                  shipfee: '包邮',
                  coupon: '优惠券',
                  limit: '限制',
                };

                if (PromotionTagTexts[data.PromotionTag] && data.PromotionTag != "shipfee" && data.PromotionTag != "limit") {
                  // return PromotionTagTexts[tag]
                  data.PromotionTag = PromotionTagTexts[data.PromotionTag]
                } else {
                  data.PromotionTag = ''
                }
                data.ImageUrl =
                  JSON.parse(data.ImageUrl)[0].ServerUrl +
                  JSON.parse(data.ImageUrl)[0].FilePath +
                  ".thumb." +
                  JSON.parse(data.ImageUrl)[0].FileExt;

              });
            }
            for (var i = 0; i < res.data.Data.length; i++) {
              state[cateNAme].hotRecommendVertical.push(res.data.Data[i]);
            }
            if (res.data.Data.length < 10) {
              state[cateNAme].flag = false;
            }
          });
      }
    }
  },
  LoadAdvertPoistion(state, obj) {
    axios
      .post("/api/Advert/LoadAdvertPoistion?PositionCode=" + obj.PositionCode)
      .then(function (response) {
        state[obj.catetory].cateTitle = response.data.Data.TITLE;
      })
      .catch(function (error) { });
  },
  CheckNewMember(state) {
    axios
      .post("/api/Member/CheckNewMember", {})
      .then(function (response) {
        state.Discount = response.data.Data;
      })
      .catch(function (error) { });
  },
  getMoreProduct(state, obj) {
    var CheckTime = '';
    var This = this;
    LoadAdvertList("PRODUCT", obj.id + "_NEW_PRODUCT", 2, 9, CheckTime).then(function (res) {
      state[obj.id.toLowerCase()].moreProduct = HandleProductData(res)
    })
  },
  getMorehotsale(state, obj) {
    var CheckTime = '';
    var This = this;
    LoadAdvertList("PRODUCT", obj.id + "_HOT", 2, 26, CheckTime).then(function (res) {
      state[obj.id.toLowerCase()].moreHotProduct = HandleProductData(res)
    })
  },
  moreProductImg(state, obj) {
    var CheckTime = ''
    var This = this;
    LoadAdvertList("IMAGE", obj.id + "_MORENEWPORDUCT", 1, 100, CheckTime).then(function (res) {
      This.state[obj.id.toLowerCase()].moreProductImg = HandleImageData(res)
    })
  },
  moreHotProductImg(state, obj) {
    var CheckTime = ''
    var This = this;
    LoadAdvertList("IMAGE", obj.id + "_MOREHOTPORDUCT", 1, 100, CheckTime).then(function (res) {
      This.state[obj.id.toLowerCase()].moreHotProductImg = HandleImageData(res)
    })
  },
  BUOY(state) {
    var CheckTime = ''
    var This = this;
    LoadAdvertList("IMAGE", "HOME_BUOY", 1, 100, CheckTime).then(function (res) {
      var arr = []
      if (res.data.Data.length) {
        for (var i = 0; i < JSON.parse(res.data.Data[0].ImageUrl).length; i++) {
          arr.push(JSON.parse(res.data.Data[0].ImageUrl)[i].ServerUrl +
            JSON.parse(res.data.Data[0].ImageUrl)[i].FilePath +
            ".thumb." +
            JSON.parse(res.data.Data[0].ImageUrl)[i].FileExt)
        }
        res.data.Data[0].ImageUrl = arr
      }
      This.state.home.BUOY = res.data.Data
    })
  },
  getHotMore(state, arr) {
    var CheckTime = ''
    if (state[arr.id.toLowerCase()].getMoreHotflag) {
      state[arr.id.toLowerCase()].getMoreHotflag = false;
      LoadAdvertList("PRODUCT", arr.id + "_HOT", state[arr.id.toLowerCase()].HotIndex + 1, 26, CheckTime).then(function (res) {
        state[arr.id.toLowerCase()].HotIndex = state[arr.id.toLowerCase()].HotIndex + 1;
        HandleProductData(res).map(function (data) {
          state[arr.id.toLowerCase()].moreHotProduct.push(data)
        })
        if (res.data.Data.length < 26) {
          state[arr.id.toLowerCase()].getMoreHotflag = false;
        } else {
          state[arr.id.toLowerCase()].getMoreHotflag = true;
        }
      })
    }
  },
  getMore(state, arr) {
    var CheckTime = ''
    if (state[arr.id.toLowerCase()].getMoreflag) {
      state[arr.id.toLowerCase()].getMoreflag = false;
      LoadAdvertList("PRODUCT", arr.id + "_NEW_PRODUCT", state[arr.id.toLowerCase()].NewIndex + 1, 6, CheckTime).then(function (res) {
        state[arr.id.toLowerCase()].NewIndex = state[arr.id.toLowerCase()].NewIndex + 1;
        HandleProductData(res).map(function (data) {
          state[arr.id.toLowerCase()].moreProduct.push(data)
        })
        if (res.data.Data.length < 6) {
          state[arr.id.toLowerCase()].getMoreflag = false;
        } else {
          state[arr.id.toLowerCase()].getMoreflag = true;
        }
      })
    }
  },
  getTopImage() {
    var This = this;
    var CheckTime = '';
    LoadAdvertList("IMAGE", "HOME_TOPTOAST", 1, 100, CheckTime).then(function (res) {
      This.state.topImg = [];
      This.state.topImg[0] = false
      This.state.TopImage = HandleImageData(res)
    })
  },
  getToast(state) {
    var CheckTime = ''
    var This = this;
    LoadAdvertList("IMAGE", "HOME_TOAST", 1, 100, CheckTime).then(function (res) {
      This.state.home.homeToast = HandleImageData(res)
      if (This.state.home.homeToast.length > 0) {
        if (!Cookies('toastTime')) {
          This.state.home.homeToast = []
        }
      }
    })
  },
  IsLogin(state) {
  },
  getNotice(state) {
    if (state.moticeFlag) {
      axios
        .post('/api/Member/LodUnReadNotice', {
        }).then(function (res) {
          if (res.data.Data) {
            state.LodUnReadNotice = true;
            state.moticeFlag = false
          }
        })
    }
  },
  // 搜索文本
  // getSearch(state) {
  //   var CheckTime = ''
  //   var This = this;
  //   LoadAdvertList("IMAGE", "SEARCH_MESS", 1, 100, CheckTime).then(function (res) {
  //     This.state.searchText=res.data.Data
  //   })
  // },
  getHeadNavArr(state) {
    state.headNavArr = [];
    var CheckTime = "";
    var This = this;
    LoadAdvertList("IMAGE", "Navigation", 1, 100, CheckTime).then(function (res) {
      // state.headNavArr = res.data.Data;
      if (res.data.Data) {
        res.data.Data.map(function (res) {
          state.headNavArr.push(res)
        })
        // var obj = {
        //   AdvertCode: "Navigation",
        //   Describe: "中秋活动",
        //   Sort: 0,
        //   Title: "年货大作战",
        //   Url: "ZQHD",
        //   ImageUrl: '[{"FileId":0,"FilePath":"/res/gdtvimg/20190110/40307a98e6654e789d5b1baa630c849c.png","FileName":null,"FileExt":"png","SplitList":null,"ServerUrl":"http://gdtvimg.weixinmvp.com"}]'
        // }
        // state.headNavArr.unshift(obj);
      }
    })
  },
  getKind(state, obj) {
    // console.log
    var CheckTime = '';
    var This = this;
    state.kind.NavigateId = [];
    state.kind.NavigateTitle = [];
    state.kind.NavigateDescribe = [];
    state.kind.NavigateData = [];
    LoadAdvertList("IMAGE", obj.catetory, 1, 100, CheckTime).then(function (res) {
      for (var i = 0; i < res.data.Data.length; i++) {
        var NavigationCf = JSON.parse(res.data.Data[i].NavigationConfig)
        // console.log(JSON.parse(res.data.Data[i].NavigationConfig))
        for (var j = 0; j < NavigationCf.length; j++) {
          if (NavigationCf[j].hasOwnProperty('status') && !NavigationCf[j].status) {
            NavigationCf.splice(j, 1)
            j--
          }
        }
        res.data.Data[i].NavigationConfig = JSON.stringify(NavigationCf)
      }
      res.data.Data.map(function (data, index) {
        var titleobj = {
          id: '',
          title: ''
        };
        titleobj.id = data.Url;
        titleobj.title = data.Title;

        state.kind.headerTitle.push(titleobj)
        if (data.Url == obj.id) {
          JSON.parse(data.NavigationConfig).map(function (NavigateData, index) {
            state.kind['NavigateId'].push(NavigateData.Id);
            state.kind['NavigateTitle'].push(NavigateData.Title);
            state.kind['NavigateDescribe'].push(NavigateData.Describe);
          })
        }
      })
      var snFunc = async function () {
        for (let i = 0; i < state.kind['NavigateId'].length; i++) {

          state['kindPageIndex' + state.kind['NavigateId'][i]] = 2
          state['kindPageFalg' + state.kind['NavigateId'][i]] = true;
          state['kindPageScroll' + state.kind['NavigateId'][i]] = 0;

          await axios.post('/api/Product/LoadCateGroup', { "TypeId": [state.kind['NavigateId'][i]], PageIndex: 1, PageSize: 10, }).then(function (res) {

            var kindArr = [];
            var data = res.data.Data[state.kind['NavigateId'][i]].map(function (data, index) {
              data.ProductImage = JSON.parse(data.ProductImage)[0].ServerUrl + JSON.parse(data.ProductImage)[0].FilePath + '.thumb.' + JSON.parse(data.ProductImage)[0].FileExt
            })
            state.kind['NavigateData'].push(res.data.Data[state.kind['NavigateId'][i]])
          })
        }
      }
      snFunc();
    })
  },
  getMoreKindProduct(state, obj) {
    if (state["kindPageFalg" + obj.id]) {
      state["kindPageFalg" + obj.id] = false;
      var index = state["kindPageIndex" + obj.id]
      var inDex = state.kind['NavigateId'].indexOf(obj.id);
      axios.post('/api/Product/LoadCateGroup', { "TypeId": [obj.id], PageIndex: index, PageSize: 10, }).then(function (res) {
        state["kindPageIndex" + obj.id]++;
        var data = res.data.Data[obj.id].map(function (data, index) {
          data.ProductImage = JSON.parse(data.ProductImage)[0].ServerUrl + JSON.parse(data.ProductImage)[0].FilePath + '.thumb.' + JSON.parse(data.ProductImage)[0].FileExt

          state.kind['NavigateData'][inDex].push(data)
        })
        if (res.data.Data[obj.id].length >= 10) {
          state["kindPageFalg" + obj.id] = true;
        } else {
          state["kindPageFalg" + obj.id] = false;
        }
      })
    }
  },
  getFullToast(state) {
    var CheckTime = ''
    var This = this;
    LoadAdvertList("IMAGE", "HOME_FULL_TOAST", 1, 100, CheckTime).then(function (res) {
      var arr = []
      if (res.data.Data.length) {
        for (var i = 0; i < JSON.parse(res.data.Data[0].ImageUrl).length; i++) {
          arr.push(JSON.parse(res.data.Data[0].ImageUrl)[i].ServerUrl +
            JSON.parse(res.data.Data[0].ImageUrl)[i].FilePath +
            ".thumb." +
            JSON.parse(res.data.Data[0].ImageUrl)[i].FileExt)
        }
        res.data.Data[0].ImageUrl = arr
      }
      This.state.FullToastImage = res.data.Data
    })
  },
  getZQHD: function (state, id) {
    var This = this;
    var CheckTime = '';
    // banner
    GetSpecialActivity(398).then(function (res) {
      if (!res.data.Data) return
      var data = res.data.Data;
      var banner = [];
      if (data.ADVERT_CONFIG) {
        var advertConfigData = JSON.parse(data.ADVERT_CONFIG).Data;
        advertConfigData.forEach(v => {
          v.Image = v.Image.ServerUrl + v.Image.FilePath + '.thumb.' + v.Image.FileExt;
          banner.push(v);
        });
        This.state.zqhd.banner = banner;
      }
    })
    GetSpecialActivity(399).then(function (res) {
      if (!res.data.Data) return
      var data = res.data.Data;
      var banner = [];
      var foolrData = JSON.parse(data.NAVIGATION_CONFIG);
      foolrData.forEach(v => {
        v.Image = v.Image[0].ServerUrl + v.Image[0].FilePath + '.thumb.' + v.Image[0].FileExt;
        GetReferenceProductList(1, 7, 0, 'specialactivity', v.Code).then(res => {
          if (!res.data.Data) return
          var productList = [];
          res.data.Data.forEach(element => {
            var img = JSON.parse(element.ProductImage);
            element.ProductImage = img[0].ServerUrl + img[0].FilePath + '.thumb.' + img[0].FileExt;
            productList.push(element)
          });
          if (v.Title == '买满送礼') {
            This.state.zqhd.fullDelivery.Code = v.Code;
            This.state.zqhd.fullDelivery.Image = v.Image;
            This.state.zqhd.fullDelivery.Title = v.Title;
            This.state.zqhd.fullDelivery.productList = productList;
          } else if (v.Title == '爆款直降') {
            This.state.zqhd.descendingData.Code = v.Code;
            This.state.zqhd.descendingData.Image = v.Image;
            This.state.zqhd.descendingData.Title = v.Title;
            This.state.zqhd.descendingData.productList = productList;
          } else {
            This.state.zqhd.GiftData.Code = v.Code;
            This.state.zqhd.GiftData.Image = v.Image;
            This.state.zqhd.GiftData.Title = v.Title;
            This.state.zqhd.GiftData.productList = productList;
          }
          This.state.zqhd.loadingFlag++;
        })
      });
    });
    GetSpecialActivity(401).then(res=>{
      if (!res.data.Data) return
      var data = res.data.Data;
      var code = JSON.parse(data.NAVIGATION_CONFIG)[0].Code;
      GetReferenceProductList(1, 3, 0,'specialactivity',code).then(res=>{
        var productList = [];
        res.data.Data.forEach(element => {
          var img = JSON.parse(element.ProductImage);
          element.ProductImage = img[0].ServerUrl + img[0].FilePath + '.thumb.' + img[0].FileExt;
          productList.push(element)
        });
        This.state.zqhd.GiftData.productList = productList;
      })
    })
    // 团购和广告位
    GetSpecialActivity(358).then(function (res) {
      if (!res.data.Data) return
      var data = res.data.Data;
      var advertConfig = [];
      var advertConfigData = JSON.parse(data.ADVERT_CONFIG).Data;
      advertConfigData.forEach(v => {
        v.Image = v.Image.ServerUrl + v.Image.FilePath + '.thumb.' + v.Image.FileExt;
        advertConfig.push(v);
      });
      This.state.zqhd.advertConfig = advertConfig;
      This.state.zqhd.loadingFlag++;
      var code = JSON.parse(data.NAVIGATION_CONFIG)[0].Code;
      GetReferenceProductList(1, 6, 0, 'specialactivity', code).then(res => {
        if (!res.data.Data) return
        var productList = [];
        res.data.Data.forEach(element => {
          var img = JSON.parse(element.ProductImage);
          element.ProductImage = img[0].ServerUrl + img[0].FilePath + '.thumb.' + img[0].FileExt;
          productList.push(element)
        });
        This.state.zqhd.tuangouData = productList;
        This.state.zqhd.loadingFlag++;
      })
    })
    // 秒杀
    LoadActivityList('ELEVEN_SKILL').then(res => {
      // console.log(res);
      var data = res.data.Data;
      var nowDate = new Date().getDate();
      var nowHours = new Date().getHours();
      var isMorning = true;
      if (nowHours >= 14 && nowHours < 22) {
        isMorning = false;
      }
      var code = '';
      var nowFlag = true;
      var codeIndex = 0;
      data.forEach((v,i) => {
        v.START_TIME = v.START_TIME.replace(/-/g, "/").replace(/T/g, " ");
        if (nowDate == new Date(v.START_TIME).getDate()) {
          if (isMorning) {
            if (new Date(v.START_TIME).getHours() == 12) {
              code = v.RECID
              nowFlag = false;
              codeIndex=i;
            }

          } else {
            if (new Date(v.START_TIME).getHours() == 20) {
              code = v.RECID
              nowFlag = false;
              codeIndex = i;
            }
          }
        }
      });
      if (nowFlag) {
        code = data[0].RECID
      }
      GetReferenceProductList(1, 3, 1, 'ELEVEN_SKILL', code).then(res => {
        if (!res.data.Data) return
        var productList = [];
        res.data.Data.forEach(element => {
          var img = JSON.parse(element.ProductImage);
          element.ProductImage = img[0].ServerUrl + img[0].FilePath + '.thumb.' + img[0].FileExt;
          productList.push(element)
        });
        This.state.zqhd.skillData = productList;
        This.state.zqhd.loadingFlag++;
        
        if (This.state.zqhd.skillData.length<3){
          codeIndex++;
          console.log(codeIndex);
          GetReferenceProductList(1, 3, 1, 'ELEVEN_SKILL', data[codeIndex].RECID).then(res2=>{
            res2.data.Data.forEach(element => {
              var img = JSON.parse(element.ProductImage);
              element.ProductImage = img[0].ServerUrl + img[0].FilePath + '.thumb.' + img[0].FileExt;
              This.state.zqhd.skillData.push(element)
            });
          })
        }
      })
    })
    // 资讯
    LoadAdvertList('IMAGE', 'HOME_ARTICLE_1', 1, 2, CheckTime).then(res => {
      This.state.zqhd.information1 = HandleImageData(res);
      This.state.zqhd.loadingFlag++;
    })
    LoadAdvertList('IMAGE', 'HOME_ARTICLE_2', 1, 3, CheckTime).then(res => {
      This.state.zqhd.information2 = HandleImageData(res);
      This.state.zqhd.loadingFlag++;
    })
    LoadAdvertList('IMAGE', 'HOME_VIDEO', 1, 5, CheckTime).then(res => {
      res.data.Data.forEach(v => {
        v.ImageUrl = JSON.parse(v.ImageUrl)[0].ServerUrl + JSON.parse(v.ImageUrl)[0].FilePath + '.thumb.' + JSON.parse(v.ImageUrl)[0].FileExt
      });
      // This.state.zqhd.homeVideo = HandleImageData(res);
      This.state.zqhd.homeVideo = res.data.Data;
      This.state.zqhd.loadingFlag++;
    })
  },
  getDouRecommend(state, obj) {
    var This = this;
    var CheckTime = '';
    GetReferenceProductList(obj.index, 10, 1, 'specialactivity', obj.code).then(function (res) {
      for (var i = 0; i < res.data.Data.length; i++) {
        var element = res.data.Data[i];
        element.ProductImage =
          JSON.parse(element.ProductImage)[0].ServerUrl +
          JSON.parse(element.ProductImage)[0].FilePath + '.thumb.' + JSON.parse(element.ProductImage)[0].FileExt
        state.zqhd.douRecommend[obj.prindex][obj.code].push(element);
      }
    })

  }
}