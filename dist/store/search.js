"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _mobx = require("../npm/mobx/lib/mobx.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestUrl = 'https://iot2.midea.com.cn/nutrition/v1/recipe';
var searchStore = (0, _mobx.observable)({
  searchData: [],
  category: [{ title: "主食" }, { title: "糕点" }, { title: "风味小吃" }, { title: "汤羹" }, { title: "荤菜" }, { title: "素菜" }, { title: "鱼鲜" }, { title: "凉拌菜" }, { title: "酱汁" }, { title: "卤菜" }, { title: "其他菜式" }],
  currentPage: '1,10',
  addPage: 10,
  totalsize: 0,
  scrollTop: null,
  isEnd: false,
  searchValue: '',
  currentSelect: 0,

  getListData: function getListData() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1,10';
    var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var categoryKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '主食';

    var that = this;
    that.isEnd = false;
    that.searchData = [];
    var _page = page;
    var requestData = {
      'fun': 'keywordBaseList',
      'page': _page,
      'pwd': '10000',
      'platform': '0TPN50R6',
      'uid': '22305',
      'keyword': keyword,
      'categoryKey': categoryKey
    };
    _index2.default.request({
      url: requestUrl,
      data: 'data=' + JSON.stringify(requestData),
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
      // mode: 'no-cors'
    }).then(function (res) {
      // if (res.data && res.data.list.length <= 0) {
      //   that.isEnd = true;
      //   return;
      // }
      var newDataCache = res.data.list;
      console.log(newDataCache, '请求服务器的数据');
      that.searchData = newDataCache;
      that.isEnd = true;
      return;
    });
  },
  searchValueChange: function searchValueChange(value) {
    this.searchValue = value;
  },
  handleSelectClick: function handleSelectClick(value) {
    var categoryList = this.category;
    var categoryName = '';
    for (var i = 0; i < categoryList.length; i++) {
      if (value == i) {
        categoryName = categoryList[i].title;
      }
    }
    this.currentSelect = value;
    this.getListData('1,10', '', categoryName);
  },
  searchResult: function searchResult() {
    var searchValue = this.searchValue;
    this.getListData('1,10', searchValue, '');
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
    this.getListData(_page);
  }
});
exports.default = searchStore;