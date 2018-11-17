import Vue from "vue";
import Router from "vue-router";
import home from "@/views/home";
import ms from "@/views/ms";
import jjjz from "@/views/jjjz";
import jydq from "@/views/jydq";
import myyp from "@/views/myyp";
import mzgh from "@/views/mzgh";
import qcbk from "@/views/qcbk";
import whjy from "@/views/whjy";

import zqhd from "@/views/zqhd";

import catetory from "@/views/catetory.vue";


import kind from "@/views/kind.vue";


import getMoreProduct from "@/views/morenewproduct.vue";

import getMoreHotProduct from "@/views/morehotsale.vue";
import doubleEl from "@/views/doubleEleven/doubleEl.vue";

// import categoryfixed from "@/views/categoryfixed.vue";

// import SearchClass from '@/views/search/SearchClass.vue';
import SearchClass from '../views/search/SearchClass.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 0,
        initialSlide: 0,
        loadname: "home",
        name: "home",
        HompPage: true,
      }
    },
    {
      path: "/ms",
      name: "MS",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 1,
        initialSlide: 1,
        name: "MS_CATEGORY",
        loadname: "ms",
        HompPage: true,
      }
    },
    {
      path: "/jjjz",
      name: "JJJZ",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 2,
        initialSlide: 1,
        name: "JJJZ_CATEGORY",
        loadname: "jjjz",
        HompPage: true,
      }
    },
    {
      path: "/jydq",
      name: "JYDQ",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 3,
        initialSlide: 1,
        name: "JYDQ_CATEGORY",
        loadname: "jydq",
        HompPage: true,
      }
    },
    {
      path: "/myyp",
      name: "MYYP",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 4,
        initialSlide: 1,
        name: "MYYP_CATEGORY",
        loadname: "myyp",
        HompPage: true,
      }
    },
    {
      path: "/mzgh",
      name: "MZGH",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 5,
        initialSlide: 1,
        name: "MZGH_CATEGORY",
        loadname: "mzgh",
        HompPage: true,
      }
    },
    {
      path: "/qcbk",
      name: "QCBK",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 6,
        initialSlide: 1,
        name: "QCBK_CATEGORY",
        loadname: "qcbk",
        HompPage: true,
      }
    },
    {
      path: "/whjy",
      name: "WHJY",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 7,
        initialSlide: 1,
        name: "WHJY_CATEGORY",
        loadname: "whjy",
        HompPage: true,
      }
    },
    {
      path: "/catetory/:Id?/kind/:id?",
      name: "kind",
      component: kind,
      meta: {
        index: 101,
        kindPage: true
      }
    },
    {
      path: "/catetory/:id?",
      name: "catetory",
      component: catetory,
      meta: {
        index: 100,
        catetoryPage: true
      }
    },
    {
      path: "/getMoreProduct/:id?",
      name: "getMoreProduct",
      component: getMoreProduct,
      meta: {
        index: 101,
      }
    },
    {
      path: "/getMoreHotProduct/:id?",
      name: "getMoreHotProduct",
      component: getMoreHotProduct,
      meta: {
        index: 101,
      }
    },
    // {
    //   path: "/categoryfixed",
    //   name: "categoryfixed",
    //   component: categoryfixed,
    // },
    {
      path: "/zqhd",
      name: "ZQHD",
      components: {
        home: home,
        ms: ms,
        jjjz: jjjz,
        jydq: jydq,
        myyp: myyp,
        mzgh: mzgh,
        qcbk: qcbk,
        whjy: whjy,
        zqhd: doubleEl
      },
      meta: {
        index: 8,
        initialSlide: 1,
        name: "ZQHD_CATEGORY",
        loadname: "zqhd",
        HompPage: true,
      }
    },
    {
      path: "/searchclass",
      name:'SearchClass',
      component: SearchClass,
    },
  ]
});
router.beforeEach((to, from, next) => {
  if (from) {
    if (from.meta.loadname) {
      this.a.app.$store.state[from.meta.loadname].scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    }
    if (from.meta.index == 100) {
      var catetoryname = from.params.id.split('_')[0].toLocaleLowerCase()
      var catetoryId = from.query.id
      this.a.app.$store.state[catetoryname][
        catetoryId + "scrollTop"
      ] = document.documentElement.scrollTop || document.body.scrollTop
    }
    if (from.meta.kindPage) {
      this.a.app.$store.state["kindPageScroll" + from.query.id] = document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
  var mess = null;
  var tjmess = null;
  if (to.query.id) {
    mess = to.query.id;
    tjmess = to.name + to.query.id;
    ZlanIO.Event.EventClick("pageview", "page", "category_l3", tjmess);
  } else {
    mess = to.meta.loadname;
    tjmess = to.meta.loadname;
    ZlanIO.Event.EventClick("pageview", "page", "default", tjmess);
  }
  if (!mess) {
    mess = 'newProduct'
  }
  this.a.app.$statistics.page(mess);
  this.a.app.$store.state.index = to.meta.index;
  this.a.app.$store.state.indexFlag = to.meta.initialSlide;
  this.a.app.$store.state.category = to.meta.name;
  if (to.meta.index == 100 || to.meta.index == 101) {
    this.a.app.$store.commit("changeHeaderShow", { state: false });
  } else {
    this.a.app.$store.commit("changeHeaderShow", { state: true });
  }
  if (to.meta.index == 0 || to.meta.index == 100 || to.meta.index == 101) {
    this.a.app.$store.commit("changeFlag", { state: "false" });
  } else if (to.meta.index == this.a.options.routes.length - 1) {
    this.a.app.$store.commit("changeFlagRIght", { state: "false" });
  } else {
    this.a.app.$store.commit("changeFlag", { state: "true" });
    this.a.app.$store.commit("changeFlagRIght", { state: "true" });
  }
  next();
});
export default router;
