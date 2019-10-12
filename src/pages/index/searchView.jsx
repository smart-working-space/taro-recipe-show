import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtSearchBar, AtTabs } from "taro-ui";
import "./index.less";
import CategoryList from "../../components/categoryList";
import LoadingView from "../../components/loadingView";

const res = Taro.getSystemInfoSync();
@inject("searchStore")
@observer
class Index extends Component {
  constructor() {
    super(...arguments);
  }
  config = {
    navigationBarTitleText: "详情页"
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {
    let { searchStore } = this.props;
    searchStore.getListData();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  searchValueChange = value => {
    let { searchStore } = this.props;
    searchStore.searchValueChange(value);
  };
  handleSelectClick = value => {
    let { searchStore } = this.props;
    searchStore.handleSelectClick(value);
  };
  onActionClick() {
    // alert("该功能暂未开放");
    let { searchStore } = this.props;
    searchStore.searchResult();
  }
  onScrollToLower(e) {
    let { searchStore } = this.props;
    searchStore.scrollGetData();
  }

  render() {
    const {
      searchStore: { searchData, category, searchValue, currentSelect, isEnd }
    } = this.props;

    const scrollStyle = {
      height: res.windowHeight - 100 + "px"
    };
    const Threshold = 20;

    return (
      <View>
        <AtSearchBar
          actionName="搜一下"
          value={searchValue}
          onChange={this.searchValueChange}
          onActionClick={this.onActionClick.bind(this)}
        />
        <View className="at-row">
          <View className="at-col at-col-1 at-col--auto tabs-category">
            <AtTabs
              current={currentSelect}
              scroll
              height={res.windowHeight - 100 + "px"}
              tabDirection="vertical"
              tabList={category}
              onClick={this.handleSelectClick}
            ></AtTabs>
          </View>
          <View className="at-col">
            <ScrollView
              className="scrollview"
              scrollY
              scrollWithAnimation
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
            >
              <View>
                <CategoryList searchData={searchData} />
                <LoadingView status={isEnd ? "noMore" : "loading"} />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
