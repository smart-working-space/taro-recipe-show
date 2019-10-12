import Taro from '@tarojs/taro'
import { observable } from 'mobx'
const requestUrl = 'https://iot2.midea.com.cn/nutrition/v1/recipe'
const detailStore = observable({
  detailData: {},
  isLoading: false,

  getDetailData(recipeId) {
    let that = this;
    let getData = Taro.getStorageSync('detailData:' + recipeId) //如果有缓存，就读取缓存数据
    if (getData) {
      console.log(getData, '读取detail缓存数据');
      this.detailData = getData;
      return;
    }
    let requestData = {
      'recipe': recipeId,
      'uid': '1'
    }
    requestData.fun = 'recipeDetail';
    that.detailData = {};
    that.isLoading = true;
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
        console.log(res.data, "请求服务器的数据");
        that.isLoading = false;
        that.detailData = res.data;
        Taro.setStorageSync('detailData:' + recipeId, res.data);
      })
  },
})
export default detailStore