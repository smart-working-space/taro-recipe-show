"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _mobx = require("../npm/mobx/lib/mobx.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestUrl = 'https://iot2.midea.com.cn/nutrition/v1/recipe';
var detailStore = (0, _mobx.observable)({
  detailData: {},
  isLoading: false,

  getDetailData: function getDetailData(recipeId) {
    var that = this;
    var getData = _index2.default.getStorageSync('detailData:' + recipeId); //如果有缓存，就读取缓存数据
    if (getData) {
      console.log(getData, '读取detail缓存数据');
      this.detailData = getData;
      return;
    }
    var requestData = {
      'recipe': recipeId,
      'uid': '1'
    };
    requestData.fun = 'recipeDetail';
    that.detailData = {};
    that.isLoading = true;
    _index2.default.request({
      url: requestUrl,
      data: 'data=' + JSON.stringify(requestData),
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
      // mode: 'no-cors'
    }).then(function (res) {
      console.log(res.data, "请求服务器的数据");
      that.isLoading = false;
      that.detailData = res.data;
      _index2.default.setStorageSync('detailData:' + recipeId, res.data);
    });
  }
});
exports.default = detailStore;