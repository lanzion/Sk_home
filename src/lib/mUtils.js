
export var limitHomePageHeight =  (self,LoadName,number)=>{
    let limitTimer = null;
    clearInterval(limitTimer)
    limitTimer = setInterval(function(){
        if(self.$store.state[LoadName].loadingFlag >= number){
            setTimeout(function() {
                var Height =
                self.swiper.slides.eq(self.slideIndex)[0]
                    .clientHeight +
                  document
                    .getElementsByClassName("Hcontainer")[0]
                    .getBoundingClientRect().height;
                if (Height < document.documentElement.clientHeight) {
                  Height = document.documentElement.clientHeight;
                }
              document.getElementById("ASwiper").style.height = Height + "px";
              document.getElementById("ASwiper").style.overflow = "hidden";
                // document.getElementById("app").style.height = Height + "px";
                // document.getElementById("app").style.overflow = "hidden";
              }, 200);
              clearInterval(limitTimer);
        }
    },100)
}
export var limitCatetoryHeight =  (self)=>{
  var flag = self.$route.params.id.split("_")[0].toLowerCase();
  var timer3 = setInterval(function() {
    if (
      self.$store.state[flag].categroysKind &&
      self.$store.state[flag].categorys &&
      self.$store.state[flag].categroyList &&
      self.$store.state[flag].categroyList.length &&
      self.$store.state[flag].categorys.length &&
      self.$store.state[flag].categroyList.length ==
      self.$store.state[flag].categorys.length &&
      self.$store.state[flag].categroyList[
        self.$store.state[flag].categroysKind.indexOf(
          self.$route.query.id
        )
      ].length > 0
    ) {
      var Name = document.getElementsByClassName("default")[0];
      if (
        Name.getElementsByClassName("swiper-slide-active")[1] &&
        Name.getElementsByClassName("Ttitle")[0] &&
        Name.getElementsByClassName("three")[0]
      ) {
        var Height =
          document.getElementsByClassName("cate"+self.$route.query.id)[0]
            .clientHeight +
          Name.getElementsByClassName("Ttitle")[0].clientHeight +
          Name.getElementsByClassName("three")[0].clientHeight;
        if (Height < document.documentElement.clientHeight) {
          Height = document.documentElement.clientHeight;
        }
        document.getElementById("ASwiper").style.height = Height + "px";
        document.getElementById("ASwiper").style.overflow = "hidden";
        // document.getElementById("app").style.height = Height + "px";
        // document.getElementById("app").style.overflow = "hidden";
        clearInterval(timer3);
      }
    }
  }, 100);

}

export var HomePageMore =  (self)=>{
  var top = document.documentElement.scrollTop || document.body.scrollTop;
  top = top + document.documentElement.clientHeight;
  var Height =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  if (Height - top < 300) {
    self.$store.dispatch("getMoredata", {
      name: self.$route.meta.loadname,
      index: self.$store.state[self.$route.meta.loadname].index
    });
    if ( self.swiper) {
      if(self.moreIndex){
        self.swiper.slideTo(self.slideIndex , 0, false);
      }
      if (document.getElementsByClassName("Hcontainer")[0]) {
        // self.$route.meta.index
        var Height =
        self.swiper.slides.eq(self.slideIndex)[0].clientHeight +
          document
            .getElementsByClassName("Hcontainer")[0]
            .getBoundingClientRect().height;
        document.getElementById("ASwiper").style.height = Height + "px";
        document.getElementById("ASwiper").style.overflow = "hidden";
        // document.getElementById("app").style.height = Height + "px";
        // document.getElementById("app").style.overflow = "hidden";
      }
    }
  }
}

export var catetoryPageMore =  (self)=>{
  var Height =
  document.documentElement.scrollHeight || document.body.scrollHeight;
var top =
  document.documentElement.scrollTop || document.body.scrollTop;
top = top + document.documentElement.clientHeight;
if (Height - top < 300) {
  var flag = self.$route.params.id.split("_")[0].toLowerCase();
  var Name = document.getElementsByClassName("default")[0];
  var Height =
  document.getElementsByClassName("cate"+self.$route.query.id)[0]
  .clientHeight +
    Name.getElementsByClassName("Ttitle")[0].clientHeight +
    Name.getElementsByClassName("three")[0].clientHeight;
  document.getElementById("ASwiper").style.height = Height + "px";
  document.getElementById("ASwiper").style.overflow = "hidden";
  // document.getElementById("app").style.height = Height + "px";
  // document.getElementById("app").style.overflow = "hidden";
  self.$store.dispatch("getcatetoryOne", {
    id: self.$route.query.id,
    name: flag
  });
}
}
export var getMoreProduct =  (self,actionName)=>{
    var Height =
    document.documentElement.scrollHeight ||
    document.body.scrollHeight;
  var top =
    document.documentElement.scrollTop || document.body.scrollTop;
  top = top + document.documentElement.clientHeight;
  if (Height - top < 300) {
    self.$store.dispatch(actionName, { id: self.$route.params.id });
  }
  var Name = document.getElementsByClassName("moreProduct")[0];
  var Height = Name.clientHeight;
  if (Height < document.documentElement.clientHeight) {
    Height = document.documentElement.clientHeight;
  }
  document.getElementById("app").style.height = Height + "px";
  document.getElementById("app").style.overflow = "hidden";
}

export var remFit = (doc, win)=>{
  var docEl = doc.documentElement,
  resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
  recalc = function() {
    var clientWidth = doc
      .getElementsByTagName("html")[0]
      .getBoundingClientRect().width;
    if (!clientWidth) return;
    docEl.style.fontSize = clientWidth / 16 + "px";
  };
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener("DOMContentLoaded", recalc, false);
}

export let setScrollTop = (target)=>{
  target =  document.documentElement.scrollTop || document.body.scrollTop;
}