import axios from 'axios';
var baseParams = { //基础参数
}; 

function dataGet(apiName, params, callback) {
  var url = apiName;
  var obj = initFn(params, callback, arguments[1]); //init方法实现见后
  var nparams = obj.nparams;
  callback = obj.callback;

  axios.get(url, { params: nparams }).then((response) => {
    var all = response.data; //返回所有数据
    var data = response.data.data; //根据后端实际返回修改

    //根据后端实际返回修改
    if (all.state == 1) { //成功
      if (callback) callback(data, all);
    } else { //失败
      console.log(all.state, all.message);
    }

  }).catch((error) => {
    console.log(error);
  });
}

function dataPost(apiName, params, callback) {
  var url = apiName;
  var obj = initFn(params, callback, arguments[1]);
  var nparams = obj.nparams;
  callback = obj.callback;

  axios.post(url, nparams).then((response) => {
    var all = response.data;
    var data = response.data.data; //根据后端实际返回修改

    //根据后端实际返回修改
    if (all.state == 1) { //成功
      if (callback) callback(data, all);
    } else { //失败
      console.log(all.state, all.message);
    }

  }).catch((error) => {
    console.log(error);
  });
}

function initFn(params, callback, argument) {
  //如果没有参数
  if (typeof argument == "function") {
    callback = argument;
    params = {};
  }
  //对象合并,确定最终参数
  return {
    nparams: Object.assign({}, params, baseParams),
    callback: callback
  }

}


export {
  dataGet, dataPost
}