import Taro, { Component } from "@tarojs/taro";
import { AtLoadMore } from "taro-ui";
class LoadingView extends Component {
  render() {
    return <AtLoadMore status={this.props.status} />;
  }
}

export default LoadingView;
