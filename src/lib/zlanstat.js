window.ZlanIO = {
  Info: {
    AppId: "zl_f7b44428",
    File: "https://tongji.zlan.weixinmvp.top/home/getjs",
    Ws: "wss://tongji.zlan.weixinmvp.top/",
    Initjs: function() {
      try {
        (ZlanIO.StartTime = new Date().getTime()),
          (ZlanIO.referrer1 = location.href);
        ZlanIO.Event = {
          SetUser: function(at) {
            if (at) {
              ZlanIO.Info.OldToken = at;
            }
          },
          EventClick: function(opera, type, name, data) {
            var arg = [];
            for (var i = 0; i < arguments.length; i++) {
              arg.push(arguments[i]);
            }
            while (arg.length < 4) {
              arg.push(null);
            }
            arg.push(new Date().getTime() - ZlanIO.StartTime);
            window.ZlanIO.Info.ZlanIOClick.push(arg);
          },
          StateChange: function(e) {
            ZlanIO.referrer1 = location.href;
            ZlanIO.Info.PageVisit.push({
              Event: "UrlChange",
              data: {
                Url: ZlanIO.referrer1,
                Stay: new Date().getTime() - window.ZlanIO.StartTime
              }
            });
          }
        };
        var jsht = new XMLHttpRequest();
        jsht.onreadystatechange = function() {
          if (jsht.readyState == 4 && jsht.status == 200) {
            ZlanIO.Info.TokenNew = jsht.getResponseHeader("token");
            try {
              new Function(jsht.responseText).apply(window, []);
            } catch (exx) {
              var est = new XMLHttpRequest();
              est.open("post", "https://statsys.orz3.top/home/senderror", true);
              est.send(exx.message + "锚点：1");
            }
          }
        };
        jsht.open(
          "get",
          this.File +
            "?appid=" +
            this.AppId +
            "&referrer=" +
            encodeURIComponent(document.referrer) +
            "&url=" +
            encodeURIComponent(location.href) +
            "&view=" +
            document.documentElement.clientWidth +
            "x" +
            document.documentElement.clientHeight,
          true
        );
        jsht.withCredentials = true;
        jsht.send();
        window.addEventListener(
          "popstate",
          function() {
            ZlanIO.Event["StateChange"].apply(window, []);
          },
          false
        );
      } catch (eddx) {
        var espt = new XMLHttpRequest();
        espt.open("post", "https://statsys.orz3.top/home/senderror", true);
        espt.send(eddx.message + "锚点：2");
      }
    },
    OldToken: null,
    ZlanIOClick: [],
    PageVisit: [],
    TokenNew: null
  }
};
window.ZlanIO.Info.Initjs();
