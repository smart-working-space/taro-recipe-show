import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./listComponent.less";

class ListComponent extends Component {
  goTo(recipeId) {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: "/pages/detail/index?recipeId=" + recipeId
    });
  }
  render() {
    let listView = this.props.listData.map(item => {
      return (
        <View key={item.recipe}>
          <View className="at-row at-row__align--center">
            <View className="recipe-item">
              <View onClick={this.goTo.bind(this, item.recipe)}>
                <Image
                  mode="widthFix"
                  className="image-content"
                  src={item.picUrl}
                />
              </View>
              <View className="at-row" style="margin-top:4px;">
                <View className="at-col  at-col--auto col-content">
                  <Text className="recipe-name">{item.name}</Text>
                </View>
                <View className="recipe-abstruct">
                  <Text>{item.abstruct}</Text>
                </View>
              </View>
              <View className="at-row" style="margin-top:4px;">
                <View className="at-col  at-col--auto col-content">
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <AtIcon value="star" size="18" color="#afabab"></AtIcon>
                  <Text className="difficulty-title">难度</Text>
                  <Text className="difficulty-sub-title">难</Text>
                  <AtIcon
                    value="clock"
                    size="18"
                    color="#c4c4c4"
                    className="clock-icon"
                  ></AtIcon>
                  <Text className="time-title">7</Text>
                  <Text className="time-title">分</Text>
                  <Text className="time-title">0</Text>
                  <Text className="time-title">秒</Text>
                  <AtIcon
                    value="heart"
                    size="18"
                    color="#afabab"
                    className="clock-icon heart-icon"
                  ></AtIcon>
                  <Text className="time-title">1</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    });
    return <View>{listView}</View>;
  }
}

export default ListComponent;
