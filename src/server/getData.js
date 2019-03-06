import axios from 'axios';

export let LoadAdvertList = async (kind, Advert, PageIndex, PageSize, CheckTime) => {
  return axios
    .post('/api/Advert/LoadAdvertList', {
      Kind: kind,
      AdvertCode: Advert,
      PageIndex: PageIndex,
      PageSize: PageSize,
      CheckTime: CheckTime
    })
}

export let LoadCateGrop = async () => {
  return axios
    .post("api/Product/LoadCateGroup", {
      "TypeId": [626, 627, 628, 629, 630, 631, 632, 633, 634]
    })
}

export let LoadProductByCate = async (TypeId, PageIndex, PageSize) => {
  return axios
    .post('/api/Product/LoadProductByCate', {
      TypeId: TypeId,
      PageIndex: PageIndex,
      PageSize: PageSize
    })
}
export let GetSpecialActivity = async (id) => {
  return axios
    .post('/api/Activity/GetSpecialActivity', {
      Id: id
    })
}
export let GetReferenceProductList = async (PageIndex, PageSize, PromotionStatus, ReferenceKind, ReferenceCode) => {
  return axios
    .post('/api/Product/GetReferenceProductList', {
      CheckTime: '',
      PageIndex: PageIndex,
      PageSize: PageSize,
      PromotionStatus: PromotionStatus,
      ReferenceKind: ReferenceKind,
      ReferenceCode: ReferenceCode
    })
}

export let LoadActivityList = async (kind) => {
  return axios
    .post('/api/Activity/LoadActivityList', {
      Kind: kind
    })
}

export let LoadGetTypeTree = async (param)=>{
  return axios.post('/api/Article/GetTypeTree', param)
}

export let getQuery = (paramName) => {
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
    } else if (paramArr.indexOf("=") != -1) {
      var result = paramArr.split('=')
      if (result[0] == paramName) {
        paramValue = result[1];
        return paramValue;
      }
    }
  }
}
export let getCheckTime = async () => {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + '-';
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  D = date.getDate() + ' ';
  h = date.getHours() + ':';
  m = date.getMinutes() + ':';
  s = date.getSeconds();
  if (date.getFullYear()) {
    return Y + M + D + h + m + s;

  } else {
    return ''
  }
}
export let HandleImageData = (res) => {
  var resultData = [];
  if (res.data.Data) {
    res.data.Data.map(function (data, index) {

      if (JSON.parse(data.ImageUrl)) {
        var bannerObj = {};
        bannerObj.URL = data.Url;
        bannerObj.Title = data.Title;
        bannerObj.ImageUrl =
          JSON.parse(data.ImageUrl)[0].ServerUrl +
          JSON.parse(data.ImageUrl)[0].FilePath +
          ".thumb." +
          JSON.parse(data.ImageUrl)[0].FileExt;
        if (JSON.parse(data.NavigationConfig).length == 0) {
          bannerObj.status = '0'
        } else if (JSON.parse(data.NavigationConfig).length == 1) {
          bannerObj.status = '1'
          bannerObj.NavigationConfig = JSON.parse(data.NavigationConfig)

        } else {
          bannerObj.status = '2';
          bannerObj.NavigationConfig = JSON.parse(data.NavigationConfig)
        }
        resultData.push(bannerObj);
      }
    })
  }
  return resultData

}
export let HandleImageImg = (res) => {
  var resultData = [];
  if (res.data.Data) {
    res.data.Data.map(function (data, index) {
      var bannerObj = {};
      bannerObj.URL = data.Url;
      bannerObj.Title = data.Title;
      bannerObj.ImageUrl =
        JSON.parse(data.ImageUrl)[0].ServerUrl +
        JSON.parse(data.ImageUrl)[0].FilePath +
        ".thumb." +
        JSON.parse(data.ImageUrl)[0].FileExt;
      resultData.push(bannerObj);
    })
  }
  return resultData

}
export let HandleProductData = (res) => {
  // console.log(res);
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
    })
  }
  return res.data.Data
}
export let Cookies = (cookiesname) => {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  var cookieArr = [];
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    cookieArr.push(arr[0]);
  }
  if (cookieArr.indexOf(cookiesname) == -1) {

    var date = new Date();
    var ToastTIme = date.getTime();
    var expireDays = 1;
    date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000);
    document.cookie =
      cookiesname + "=" + ToastTIme + ";expires=" + date.toGMTString();
    return true
  } else {
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("=");
      if (arr[0] == cookiesname) {
        var oldDate = Math.floor(Number(arr[1]) / (86400 * 1000));
        var nowDate = Math.floor(new Date().getTime() / (86400 * 1000));
        if (nowDate > oldDate) {
          var date = new Date();
          var ToastTIme = date.getTime();
          document.cookie = cookiesname + "=" + ToastTIme;
          var expireDays = 1;
          date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000);
          document.cookie =
            cookiesname + "=" + ToastTIme + ";expires=" + date.toGMTString();
        } else {
          return false;
        }
      } else { }
    }
  }


}


export let CompositeCall = async (param) => {
  return axios
  .post('/api/Composite/Call',param )
}