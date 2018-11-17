window._hmt = [];
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?290e7b3ea81e18569ee34cb9d775cb90";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);

class Statistics {
  constructor(path) {
    this.path = path;
  }
  of(path) {
    var selfPathArr = this.path.split("|");
    selfPathArr.push.apply(selfPathArr, path.split("|"));
    var i = 0;
    var j = 0;
    var len = selfPathArr.length;
    for (i = 0; i < len; i++) {
      for (j = i + 1; j < len; j++) {
        if (selfPathArr[i] == selfPathArr[j]) {
          selfPathArr.splice(j, 1);
          len--;
          j--;
        }
      }
    } 
    return new Statistics(selfPathArr.join("|"));
  }
  page(mess) {
    const url = document.URL;
    const referre = document.referrer;

    var path = `${this.path}|${url}|${referre}`;
    _hmt.push(["_trackEvent", "HOME|ENTER", "enter", mess]);
    _hmt.push(["_trackEvent", "HOME|VIEW", "view", mess]);
  }
  click(item) {
    _hmt.push(["_trackEvent", this.path, "click", item]);
  }
}
export default {
  install: function(vm) {
    vm.prototype.$statistics = new Statistics("HOME");
  }
};
