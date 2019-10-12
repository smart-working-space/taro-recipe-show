import Taro from '@tarojs/taro'
import { observable } from 'mobx'
import util from '../utils/index'
const moreDayClearStorage = 360; //超过2天清缓存
const requestUrl = 'https://iot2.midea.com.cn/nutrition/v1/recipe'
const listStore = observable({
  listData: [],
  currentTag: 0,
  currentPage: '1,10',
  addPage: 10,
  totalsize: 0,
  scrollTop: null,
  currentBar: 0,
  isEnd: false,
  searchValue: '',

  clearDataStorage() {
    let getStorageTimestamp = Taro.getStorageSync('currentSetTime')
    if (getStorageTimestamp) {
      let setRange = moreDayClearStorage * 24 * 60 * 60 * 1000;//天数转毫秒
      let isNeedClearStorage = util.isNeedClearStorage(setRange, getStorageTimestamp);
      console.log(isNeedClearStorage, "是否超过了缓存时间");
      if (isNeedClearStorage) {
        Taro.clearStorage();
      }
    } else {
      let timestamp = util.getCurrentTime();
      Taro.setStorageSync('currentSetTime', timestamp);
    }
  },

  getListData(page = '1,10', requestFun = 'recommendList', isScrollRequest = false) {
    let that = this;
    if (!isScrollRequest) {
      //是否清除缓存
      this.clearDataStorage();
      let getData = Taro.getStorageSync(requestFun) //如果有缓存，就读取缓存数据
      if (getData && getData.length > 0) {
        console.log(getData, "获取" + requestFun + '缓存');
        this.listData = getData;
        return;
      }
    }
    var _page = page;
    let requestData = {
      'page': _page,
      'pwd': '10000',
      'platform': '0TPN50R6',
      'uid': '22305'
    }
    requestData.fun = requestFun;
    // Taro.showLoading({
    //   title: ''
    // })
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
        // console.log(res.data);
        // Taro.hideLoading();
        if (res.data && res.data.list.length <= 0) {
          that.isEnd = true;
          return;
        }
        let newDataCache = that.listData.concat(res.data.list);
        console.log(newDataCache, requestFun + '请求的新数据+之前的数据');
        that.listData = newDataCache;
        Taro.setStorageSync(requestFun, res.data.list);
      })
  },
  getRecomendData() { //刚进首页，初始化 推荐列表数据
    let page = this.currentPage;
    let requestFun = 'recommendList';
    this.getListData(page, requestFun);
  },
  tagRequest(page, isScrollRequest = false) {
    let requestFun = 'recommendList';
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
  handleTagClick(value) {
    this.scrollTop = 0;
    let page = '1,10';
    this.addPage = 10;
    this.currentTag = value;
    this.listData = [];
    this.isEnd = false;
    this.tagRequest(page);
  },
  handleBarClick(value) {
    this.scrollTop = null;
    this.currentBar = value;
  },
  searchValueChange(value) {
    this.searchValue = value;
  },
  scrollGetData() {
    console.log("是否结束了：" + this.isEnd);
    if (this.isEnd) {
      return;
    }
    this.scrollTop = null;
    let begin_page = this.addPage + 1, add_page = this.addPage + 10, _page = begin_page + ',' + add_page;
    this.addPage = add_page;
    let isScrollRequest = true;
    this.tagRequest(_page, isScrollRequest);
  }
})
export default listStore