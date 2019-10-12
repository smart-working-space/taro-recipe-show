import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtTabBar, AtSegmentedControl, AtAvatar } from "taro-ui";
const res = Taro.getSystemInfoSync();
import "./index.less";
import ListComponent from "../../components/listComponent";
import LoadingView from "../../components/loadingView";
import SearchView from "./searchView";

@inject("listStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    let { listStore } = this.props;
    listStore.getRecomendData();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleTagClick = value => {
    let { listStore } = this.props;
    listStore.handleTagClick(value);
  };
  handleBarClick = value => {
    let { listStore } = this.props;
    listStore.handleBarClick(value);
  };
  onScrollToLower(e) {
    let { listStore } = this.props;
    listStore.scrollGetData();
  }

  render() {
    const {
      listStore: { listData, currentTag, scrollTop, currentBar, isEnd }
    } = this.props;
    const scrollStyle = {
      height: res.windowHeight - 46 - 70 + "px"
    };
    const Threshold = 20;

    let currentBarView = null;
    if (currentBar === 0) {
      currentBarView = (
        <View>
          <View className="tab-content">
            <AtSegmentedControl
              className="tab-centent-item"
              values={["推荐", "评分", "收藏"]}
              onClick={this.handleTagClick}
              current={currentTag}
              // selectedColor="#e07200"
            />
          </View>
          <ScrollView
            className="scrollview"
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToLower={this.onScrollToLower.bind(this)}
          >
            <View className="scroll-content">
              <ListComponent listData={listData} />
              <LoadingView status={isEnd ? "noMore" : "loading"} />
            </View>
          </ScrollView>
        </View>
      );
    } else if (currentBar === 1) {
      currentBarView = (
        <View>
          <SearchView></SearchView>
        </View>
      );
    } else if (currentBar === 2) {
      currentBarView = (
        <View>
          <View className="at-row at-row__justify--center">
            <View className="avtar-view">
              <AtAvatar
                size="large"
                circle
                image="https://jdc.jd.com/img/200"
              ></AtAvatar>
              <View>parker</View>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View className="index">
        <View>{currentBarView}</View>
        <AtTabBar
          fixed
          tabList={[
            { title: "首页", iconType: "home", text: "" },
            { title: "分类", iconType: "bullet-list" },
            { title: "我的", iconType: "user", text: "", max: "" }
          ]}
          onClick={this.handleBarClick}
          current={currentBar}
        />
      </View>
    );
  }
}

export default Index;
