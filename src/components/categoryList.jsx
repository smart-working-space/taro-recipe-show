import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import "./categoryList.less";

class categoryList extends Component {
  goTo(recipeId) {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: "/pages/detail/index?recipeId=" + recipeId
    });
  }
  render() {
    let listView = this.props.searchData.map(item => {
      return (
        <View className="" key={item.recipe} style="padding:10px;">
          <View className="category-item">
            <View onClick={this.goTo.bind(this, item.recipe)}>
              <Image
                mode="widthFix"
                className="category-image-content"
                src={item.picUrl}
              />
            </View>
            <View
              className="at-col  at-col--auto col-content"
              style="margin-left:10px;"
            >
              <Text className="category-name">{item.name}</Text>
            </View>
          </View>
        </View>
      );
    });
    return <View>{listView}</View>;
  }
}

export default categoryList;
