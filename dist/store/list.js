"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _mobx = require("../npm/mobx/lib/mobx.js");

var _index3 = require("../utils/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moreDayClearStorage = 360; //超过2天清缓存
var requestUrl = 'https://iot2.midea.com.cn/nutrition/v1/recipe';
var listStore = (0, _mobx.observable)({
  listData: [],
  currentTag: 0,
  currentPage: '1,10',
  addPage: 10,
  totalsize: 0,
  scrollTop: null,
  currentBar: 0,
  isEnd: false,
  searchValue: '',

  clearDataStorage: function clearDataStorage() {
    var getStorageTimestamp = _index2.default.getStorageSync('currentSetTime');
    if (getStorageTimestamp) {
      var setRange = 31104000000; //天数转毫秒
      var isNeedClearStorage = _index4.default.isNeedClearStorage(setRange, getStorageTimestamp);
      console.log(isNeedClearStorage, "是否超过了缓存时间");
      if (isNeedClearStorage) {
        _index2.default.clearStorage();
      }
    } else {
      var timestamp = _index4.default.getCurrentTime();
      _index2.default.setStorageSync('currentSetTime', timestamp);
    }
  },
  getListData: function getListData() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1,10';
    var requestFun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'recommendList';
    var isScrollRequest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var that = this;
    if (!isScrollRequest) {
      //是否清除缓存
      this.clearDataStorage();
      var getData = _index2.default.getStorageSync(requestFun); //如果有缓存，就读取缓存数据
      if (getData && getData.length > 0) {
        console.log(getData, "获取" + requestFun + '缓存');
        this.listData = getData;
        return;
      }
    }
    var _page = page;
    var requestData = {
      'page': _page,
      'pwd': '10000',
      'platform': '0TPN50R6',
      'uid': '22305'
    };
    requestData.fun = requestFun;
    // Taro.showLoading({
    //   title: ''
    // })
    _index2.default.request({
      url: requestUrl,
      data: 'data=' + JSON.stringify(requestData),
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
      // mode: 'no-cors'
    }).then(function (res) {
      // console.log(res.data);
      // Taro.hideLoading();
      if (res.data && res.data.list.length <= 0) {
        that.isEnd = true;
        return;
      }
      var newDataCache = that.listData.concat(res.data.list);
      console.log(newDataCache, requestFun + '请求的新数据+之前的数据');
      that.listData = newDataCache;
      _index2.default.setStorageSync(requestFun, res.data.list);
    });
  },
  getRecomendData: function getRecomendData() {
    //刚进首页，初始化 推荐列表数据
    var page = this.currentPage;
    var requestFun = 'recommendList';
    this.getListData(page, requestFun);
  },
  tagRequest: function tagRequest(page) {
    var isScrollRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var requestFun = 'recommendList';
    if (this.currentTag == 0) {
      requestFun = 'recommendList';
    }
    if (this.currentTag == 1) {
      requestFun = 'pointList';
    }
    if (this.currentTag == 2) {
      requestFun = 'favoriteList';
    }
    this.getListData(page, requestFun, isScrollRequest);
  },
  handleTagClick: function handleTagClick(value) {
    this.scrollTop = 0;
    var page = '1,10';
    this.addPage = 10;
    this.currentTag = value;
    this.listData = [];
    this.isEnd = false;
    this.tagRequest(page);
  },
  handleBarClick: function handleBarClick(value) {
    this.scrollTop = null;
    this.currentBar = value;
  },
  searchValueChange: function searchValueChange(value) {
    this.searchValue = value;
  },
  scrollGetData: function scrollGetData() {
    console.log("是否结束了：" + this.isEnd);
    if (this.isEnd) {
      return;
    }
    this.scrollTop = null;
    var begin_page = this.addPage + 1,
        add_page = this.addPage + 10,
        _page = begin_page + ',' + add_page;
    this.addPage = add_page;
    var isScrollRequest = true;
    this.tagRequest(_page, isScrollRequest);
  }
});
exports.default = listStore;