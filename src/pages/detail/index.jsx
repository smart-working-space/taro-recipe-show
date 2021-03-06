import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import { AtNavBar, AtIcon, AtTag, AtToast } from "taro-ui";
import "./index.less";
import LoadingView from "../../components/loadingView";
const res = Taro.getSystemInfoSync();
const requestUrl = "https://iot2.midea.com.cn/nutrition/v1/recipe";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      tipOpen: false,
      detailData: {},
      isLoading: false
    };
  }
  config = {
    navigationBarTitleText: "详情页"
  };

  componentWillMount() {
    console.log(this.$router.params);
  }

  componentWillReact() {}
  getDetailData(recipeId) {
    let that = this;
    let getData = Taro.getStorageSync("detailData:" + recipeId); //如果有缓存，就读取缓存数据
    if (getData) {
      if (getData && getData.error) {
        Taro.showToast({
          title: "没有请求到数据哦",
          icon: "none",
          duration: 2000
        });
      }
      console.log(getData, "读取detail缓存数据");
      this.setState({ detailData: getData });
      return;
    }
    let requestData = {
      recipe: recipeId,
      uid: "1"
    };
    requestData.fun = "recipeDetail";
    this.setState({ detailData: {} });
    this.setState({ isLoading: true });
    Taro.request({
      url: requestUrl,
      data: "data=" + JSON.stringify(requestData),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
      // mode: 'no-cors'
    }).then(res => {
      if (res.data && res.data.error) {
        Taro.showToast({
          title: "没有请求到数据哦",
          icon: "none",
          duration: 2000
        });
      }
      console.log(res.data, "请求服务器的数据");
      that.setState({ detailData: res.data });
      that.setState({ isLoading: false });
      Taro.setStorageSync("detailData:" + recipeId, res.data);
    });
  }

  componentDidMount() {
    let { recipeId } = this.$router.params;
    this.getDetailData(recipeId);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  goBack() {
    // 跳转
    Taro.navigateBack();
  }
  onClickRgIconSt() {
    this.setState({
      tipOpen: true
    });
  }

  render() {
    const { detailData, isLoading } = this.state;

    const scrollStyle = {
      height: res.windowHeight - 60 + "px"
    };
    const Threshold = 20;

    detailData.steps = detailData.steps || [];
    detailData.mainingredients = detailData.mainingredients || [];
    detailData.ingredients = detailData.ingredients || [];
    let stepNumber = 1;
    let stepView = detailData.steps.map((item, index) => {
      stepNumber++;
      return (
        <View className="desc-section" key={index}>
          <Image mode="widthFix" className="image-content" src={item.url} />
          <View>
            <Text className="step-title">步骤{stepNumber}</Text>
          </View>
          <View>
            <Text className="step-desc">{item.desc}</Text>
          </View>
        </View>
      );
    });
    let mainingredients = detailData.mainingredients.map((item, index) => {
      return (
        <View style="margin-right:6px;" key={index}>
          <Text className="main-text">{item.name}</Text>
        </View>
      );
    });
    let ingredients = detailData.ingredients.map((item, index) => {
      return (
        <View style="margin-right:10px;" key={index}>
          <Text className="main-text">
            {item.name}
            {item.weight}
          </Text>
        </View>
      );
    });

    return (
      <View className="index">
        <AtNavBar
          className="detail-nav-content"
          onClickLeftIcon={this.goBack}
          leftIconType="chevron-left"
          color="white"
          leftText="返回"
          onClickRgIconSt={this.onClickRgIconSt.bind(this)}
          rightFirstIconType="message"
        >
          <View className="menu-title">{detailData.name}</View>
        </AtNavBar>
        {isLoading ? <LoadingView status="loading" /> : null}
        <ScrollView
          className="scrollview"
          scrollY
          scrollWithAnimation
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
        >
          <View>
            <View className="detail-image-section">
              <Image
                mode="widthFix"
                className="image-content"
                src={detailData.picurl}
              />
              <View className="detail-mask">
                <View className="at-row" style="margin-top:9px;">
                  <View
                    className="at-col  at-col--auto col-content"
                    style="position:relative"
                  >
                    <AtTag type="primary" circle size="small">
                      蒸汽炉
                    </AtTag>
                    <Text className="difficulty-title">难度</Text>
                    <Text className="difficulty-sub-title">简单</Text>
                    <AtIcon
                      value="clock"
                      size="18"
                      color="#808080"
                      className="clock-icon"
                    ></AtIcon>
                    <Text className="time-title">{detailData.time}</Text>
                    <Text className="time-title">分</Text>
                    <Text className="time-title">{detailData.timeSec}</Text>
                    <Text className="time-title" style="margin-right: 10px;">
                      秒
                    </Text>
                    <AtTag type="primary" circle size="small">
                      <AtIcon
                        value="heart"
                        size="18"
                        color="#afaeae"
                        className="clock-icon heart-icon heart-section"
                      ></AtIcon>
                      <Text className="time-title">
                        {detailData.recorded_people}
                      </Text>
                    </AtTag>
                  </View>
                </View>
              </View>
            </View>
            <View className="desc-section" style="margin-top:0px;">
              <View className="at-row" style="margin-top:4px;">
                <View className="at-col  at-col--auto col-content">
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <Text className="difficulty-title">
                    {" "}
                    {detailData.commentCount}
                  </Text>
                  <Text className="time-title">条</Text>
                  <Text className="time-title" style="margin-left:10px;">
                    {detailData.finishCount} 人做过
                  </Text>
                </View>
              </View>
              <View>
                <Text className="desc-text">{detailData.desc}</Text>
              </View>
            </View>
            <View className="desc-section">
              <View>
                <Text className="step-title">主料</Text>
              </View>
              <View className="at-row at-row--wrap">{mainingredients}</View>
              <View>
                <Text className="step-title">辅料</Text>
              </View>
              <View className="at-row at-row--wrap">{ingredients}</View>
            </View>
            {stepView}
            <View className="desc-section">
              <Text className="tips-text">{detailData.tips}</Text>
            </View>
          </View>
        </ScrollView>
        <AtToast
          isOpened={this.state.tipOpen}
          text="评论功能暂未开放，敬请期待哦"
        ></AtToast>
      </View>
    );
  }
}

export default Index;
