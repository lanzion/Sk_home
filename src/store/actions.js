

export default {
  getHome: function ({ commit, dispatch }, obj) {
    commit("getHome");
  },
  getZQHD: function ({ commit, dispatch }, obj) {  
    commit("getZQHD");
  },
  getMs: function ({ commit, dispatch }, obj) {
    commit("getMs");
  },
  getJjjz: function ({ commit, dispatch }, obj) {
    commit("getJjjz");
  },
  getJydq: function ({ commit, dispatch }, obj) {
    commit("getJydq");
  },
  getMyyp: function ({ commit, dispatch }, obj) {
    commit("getMyyp");
  },
  getMzgh: function ({ commit, dispatch }, obj) {
    commit("getMzgh");
  },
  getQcbk: function ({ commit, dispatch }, obj) {
    commit("getQcbk");
  },
  getWhjy: function ({ commit, dispatch }, obj) {
    commit("getWhjy");
  },
  getcatetoryData: function ({ commit, dispatch }, obj) {
    commit("getcatetoryData", obj);
  },
  getcatetory: function ({ commit, dispatch }, obj) {
    commit("getcatetory", obj);
  },
  getMoredata: function ({ commit, dispatch }, obj) {
    commit("getMoredata", obj);
  },
  getcatetoryOne: function ({ commit, dispatch }, obj) {
    commit("getcatetoryOne", obj);
  },
  getCatetoryOneDate: function ({ commit, dispatch }, obj) {
    commit("getCatetoryOneDate", obj);
  },
  LoadAdvertPoistion: function ({ commit, dispatch }, obj) {
    commit("LoadAdvertPoistion", obj);
  },
  CheckNewMember: function ({ commit, dispatch }) {
    commit("CheckNewMember");
  },
  getMoreProduct: function ({ commit, dispatch }, obj) {
    commit("getMoreProduct", obj);
  },
  getMorehotsale: function ({ commit, dispatch }, obj) {
    commit("getMorehotsale", obj);
  },
  moreProductImg: function ({ commit, dispatch }, obj) {
    commit("moreProductImg", obj);
  },
  moreHotProductImg: function ({ commit, dispatch }, obj) {
    commit("moreHotProductImg", obj);
  },
  getMore: function ({ commit, dispatch }, arr) {
    commit("getMore", arr);
  },
  getHotMore: function ({ commit, dispatch }, arr) {
    commit("getHotMore", arr);
  },

  getToast: function ({ commit, dispatch }) {
    commit("getToast");
  },
  IsLogin({ commit }) {
    commit("IsLogin");
  },
  BUOY({ commit }) {
    commit("BUOY");
  },
  getNotice({ commit }) {
    commit("getNotice");
  },
  getTopImage({ commit }) {
    commit("getTopImage");
  },
  getFullToast({ commit }) {
    commit("getFullToast");
  },
  getSearch({ commit }) {
    commit("getSearch");
  },
  getHeadNavArr({ commit }) {
    commit("getHeadNavArr");
  },
  getKind({ commit }, obj) {
    commit("getKind", obj)
  },
  getMoreKindProduct({ commit }, obj) {
    commit("getMoreKindProduct", obj)
  },
  getDouRecommend({ commit }, obj) {
    commit("getDouRecommend", obj)
  },
}

