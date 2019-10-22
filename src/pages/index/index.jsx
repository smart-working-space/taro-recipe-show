import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import {
  AtTabBar,
  AtSegmentedControl,
  AtTimeline,
  AtDivider,
  AtSteps
} from "taro-ui";
const res = Taro.getSystemInfoSync();
import "./index.less";
import ListComponent from "../../components/listComponent";
import LoadingView from "../../components/loadingView";
import SearchView from "./searchView";
import namedPng from "../../images/header.jpg";

@inject("listStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    // let { listStore } = this.props;
    // console.log(listStore);
    // listStore.getRecomendData();
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
  // backGoto(recipeId) {
  //   Taro.navigateTo({
  //     url: "/pages/detail/index?recipeId=" + recipeId
  //   });
  // }

  render() {
    const {
      listStore: { listData, currentTag, scrollTop, currentBar, isEnd }
    } = this.props;
    const scrollStyle = {
      height: res.windowHeight - 46 - 70 + "px"
    };
    const Threshold = 20;

    let currentBarView = null;
    const items = [
      {
        title: "广州喜淘信息科技公司",
        desc: "担任前端开发工程师，负责PC官网和移动官网的开发，"
      },
      {
        title: "广东斯越科技有限公司",
        desc: "担任前端开发工程师，负责移动官网，商城以及后台管理系统的开发"
      },
      {
        title: "美的",
        desc:
          "现任职美的厨房电器制造有限公司，担任先行研究工程师一职（前端开发）"
      }
    ];
    if (currentBar === 0) {
      currentBarView = (
        <View>
          <View className="tab-content">
            <AtSegmentedControl
              className="tab-centent-item"
              values={["推荐", "评分", "收藏"]}
              onClick={this.handleTagClick.bind(this)}
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
        <View style="padding:20px;">
          <View>
            <Text className="me-title">该应用介绍</Text>
          </View>
          <View className="at-row at-row__justify--center">
            <View className="avtar-view">
              <View>
                <AtTimeline
                  items={[
                    { title: "前后端分离，react+mobx架构" },
                    { title: "less语法" },
                    { title: "缓存数据，秒进首页" },
                    { title: "一套代码架构H5以及小程序应用" },
                    { title: "智能云食谱H5应用" },
                    { title: "node服务渲染" }
                  ]}
                ></AtTimeline>
              </View>
            </View>
          </View>
          <AtDivider content="Next" />
          <View>
            <Text className="me-title">个人介绍</Text>
          </View>
          <View className="at-row at-row__justify--center">
            <View>
              <Image className="header-img" src={namedPng} />
            </View>
          </View>
          <View className="at-row at-row__justify--center">
            <AtSteps items={items} current={2} />
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
          onClick={this.handleBarClick.bind(this)}
          current={currentBar}
        />
      </View>
    );
  }
}

export default Index;
