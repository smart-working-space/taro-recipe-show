import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtNavBar, AtIcon } from "taro-ui";
import "./index.less";
const res = Taro.getSystemInfoSync();
@inject("detailStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: "详情页"
  };

  componentWillMount() {
    console.log(this.$router.params);
  }

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    console.log(this.props);
    let { recipeId } = this.$router.params;
    let { detailStore } = this.props;
    detailStore.getDetailData(recipeId);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  goBack() {
    // 跳转
    Taro.navigateBack();
  }

  render() {
    const {
      detailStore: { detailData }
    } = this.props;

    const scrollStyle = {
      height: res.windowHeight - 60 + "px"
    };
    const Threshold = 20;

    let stepView = null;
    detailData.steps = detailData.steps || [];
    let stepNumber = 1;
    stepView = detailData.steps.map(item => {
      return (
        <View className="desc-section">
          <Image mode="widthFix" className="image-content" src={item.url} />
          <View>
            <Text className="step-title">步骤{stepNumber++}</Text>
          </View>
          <View>
            <Text className="step-desc">{item.desc}</Text>
          </View>
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
        >
          <View className="menu-title">{detailData.name}</View>
        </AtNavBar>
        <ScrollView
          className="scrollview"
          scrollY
          scrollWithAnimation
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
        >
          <View>
            <View>
              <Image
                mode="widthFix"
                className="image-content"
                src={detailData.picurl}
              />
            </View>
            <View className="desc-section">
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
            {stepView}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
