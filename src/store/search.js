import Taro from '@tarojs/taro'
import { observable } from 'mobx'
const requestUrl = 'https://iot2.midea.com.cn/nutrition/v1/recipe'
const searchStore = observable({
  searchData: [],
  category: [
    { title: "主食" },
    { title: "糕点" },
    { title: "风味小吃" },
    { title: "汤羹" },
    { title: "荤菜" },
    { title: "素菜" },
    { title: "鱼鲜" },
    { title: "凉拌菜" },
    { title: "酱汁" },
    { title: "卤菜" },
    { title: "其他菜式" },
  ],
  currentPage: '1,10',
  addPage: 10,
  totalsize: 0,
  scrollTop: null,
  isEnd: false,
  searchValue: '',
  currentSelect: 0,

  getListData(page = '1,10', keyword = '', categoryKey = '主食') {
    let that = this;
    that.isEnd = false;
    that.searchData = [];
    var _page = page;
    let requestData = {
      'fun': 'keywordBaseList',
      'page': _page,
      'pwd': '10000',
      'platform': '0TPN50R6',
      'uid': '22305',
      'keyword': keyword,
      'categoryKey': categoryKey
    }
    Taro.request({
      url: requestUrl,
      data: 'data=' + JSON.stringify(requestData),
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      // mode: 'no-cors'
    })
      .then(res => {
        console.log(res.data);
        // if (res.data && res.data.list.length <= 0) {
        //   that.isEnd = true;
        //   return;
        // }
        let newDataCache = res.data.list;
        console.log(newDataCache, '请求');
        that.searchData = newDataCache;
        that.isEnd = true;
        return;
      })
  },
  searchValueChange(value) {
    this.searchValue = value;
  },
  handleSelectClick(value) {
    let categoryList = this.category;
    let categoryName = '';
    for (var i = 0; i < categoryList.length; i++) {
      if (value == i) {
        categoryName = categoryList[i].title;
      }
    }
    this.currentSelect = value;
    this.getListData('1,10', '', categoryName);
  },
  searchResult() {
    let searchValue = this.searchValue;
    this.getListData('1,10', searchValue, '');
  },
  scrollGetData() {
    console.log("是否结束了：" + this.isEnd);
    if (this.isEnd) {
      return;
    }
    this.scrollTop = null;
    let begin_page = this.addPage + 1, add_page = this.addPage + 10, _page = begin_page + ',' + add_page;
    this.addPage = add_page;
    this.getListData(_page);
  }
})
export default searchStore