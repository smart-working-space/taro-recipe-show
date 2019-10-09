import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtNavBar, AtIcon } from "taro-ui";
import "./index.less";
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
        <View>
          <Image className="image-content" src={detailData.picurl} />
        </View>
      </View>
    );
  }
}

export default Index;
