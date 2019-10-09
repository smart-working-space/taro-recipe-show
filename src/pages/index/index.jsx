import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtLoadMore, AtTabBar, AtSegmentedControl, AtSearchBar } from "taro-ui";
import { ScrollView } from "@tarojs/components";
const res = Taro.getSystemInfoSync();
import "./index.less";
import ListComponent from "../../components/listComponent";

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
    console.log(this.props);
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
  searchValueChange = value => {
    let { listStore } = this.props;
    listStore.searchValueChange(value);
  };
  onActionClick() {
    console.log("开始搜索");
  }
  onScrollToUpper(e) {}
  onScrollToLower(e) {
    let { listStore } = this.props;
    listStore.scrollGetData();
  }

  render() {
    const {
      listStore: {
        listData,
        currentTag,
        scrollTop,
        currentBar,
        isEnd,
        searchValue
      }
    } = this.props;
    const scrollStyle = {
      height: res.windowHeight - 46 - 70 + "px"
    };
    const Threshold = 20;

    //loading
    let loadingView = <AtLoadMore status={isEnd ? "noMore" : "loading"} />;

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
            onScrollToUpper={this.onScrollToUpper} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScrollToLower={this.onScrollToLower.bind(this)}
          >
            <View className="scroll-content">
              <ListComponent listData={listData} />
              {loadingView}
            </View>
          </ScrollView>
        </View>
      );
    } else if (currentBar === 1) {
      currentBarView = (
        <View>
          <AtSearchBar
            actionName="搜一下"
            value={searchValue}
            onChange={this.searchValueChange}
            onActionClick={this.onActionClick}
          />
        </View>
      );
    } else if (currentBar === 2) {
      currentBarView = <View>6666</View>;
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
