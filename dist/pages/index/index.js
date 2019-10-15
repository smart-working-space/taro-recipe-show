"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/mobx/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var res = _index2.default.getSystemInfoSync();

var Index = (_dec = (0, _index3.inject)("listStore"), _dec(_class = (0, _index3.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "_$anonymousState__temp2", "anonymousState__temp3", "$compid__0", "$compid__1", "$compid__2", "$compid__3", "$compid__4", "currentBar", "scrollTop", "Threshold", "listStore"], _this.config = {
      navigationBarTitleText: "首页"
    }, _this.handleTagClick = function (value) {
      var listStore = _this.props.listStore;

      listStore.handleTagClick(value);
    }, _this.handleBarClick = function (value) {
      var listStore = _this.props.listStore;

      listStore.handleBarClick(value);
    }, _this.customComponents = ["AtSegmentedControl", "ListComponent", "LoadingView", "SearchView", "AtAvatar", "AtTabBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {
      console.log("componentWillReact");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var listStore = this.props.listStore;

      listStore.getRecomendData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onScrollToLower",
    value: function onScrollToLower(e) {
      var listStore = this.props.listStore;

      listStore.scrollGetData();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _$anonymousState__temp, _$anonymousState__temp2;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__0 = (0, _index.genCompid)(__prefix + "$compid__0");
      var $compid__1 = (0, _index.genCompid)(__prefix + "$compid__1");
      var $compid__2 = (0, _index.genCompid)(__prefix + "$compid__2");
      var $compid__3 = (0, _index.genCompid)(__prefix + "$compid__3");
      var $compid__4 = (0, _index.genCompid)(__prefix + "$compid__4");

      var _props$listStore = this.__props.listStore,
          listData = _props$listStore.listData,
          currentTag = _props$listStore.currentTag,
          scrollTop = _props$listStore.scrollTop,
          currentBar = _props$listStore.currentBar,
          isEnd = _props$listStore.isEnd;

      var scrollStyle = {
        height: res.windowHeight - 46 - 70 + "px"
      };
      var Threshold = 20;

      var currentBarView = null;
      if (currentBar === 0) {
        _$anonymousState__temp = ["推荐", "评分", "收藏"];
        _$anonymousState__temp2 = (0, _index.internal_inline_style)(scrollStyle);
        _index.propsManager.set({
          "className": "tab-centent-item",
          "values": _$anonymousState__temp,
          "onClick": this.handleTagClick,
          "current": currentTag
        }, $compid__0);
        _index.propsManager.set({
          "listData": listData
        }, $compid__1);
        _index.propsManager.set({
          "status": isEnd ? "noMore" : "loading"
        }, $compid__2);
      } else if (currentBar === 1) {} else if (currentBar === 2) {
        _index.propsManager.set({
          "size": "large",
          "circle": true,
          "image": "https://jdc.jd.com/img/200"
        }, $compid__3);
      }
      var anonymousState__temp3 = [{ title: "首页", iconType: "home", text: "" }, { title: "分类", iconType: "bullet-list" }, { title: "我的", iconType: "user", text: "", max: "" }];
      _index.propsManager.set({
        "fixed": true,
        "tabList": anonymousState__temp3,
        "onClick": this.handleBarClick,
        "current": currentBar
      }, $compid__4);
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        _$anonymousState__temp2: _$anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        $compid__4: $compid__4,
        currentBar: currentBar,
        scrollTop: scrollTop,
        Threshold: Threshold
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = ["onScrollToLower"], _class2.$$componentPath = "pages/index/index", _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));