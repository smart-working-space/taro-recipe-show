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

var Index = (_dec = (0, _index3.inject)("detailStore"), _dec(_class = (0, _index3.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "detailData", "loopArray27", "$compid__156", "$compid__157", "$compid__158", "$compid__159", "$compid__160", "$compid__161", "$compid__162", "$compid__163", "$compid__164", "$compid__165", "$compid__166", "$compid__167", "stepNumber", "isLoading", "Threshold", "tipOpen", "detailStore"], _this.config = {
      navigationBarTitleText: "详情页"
    }, _this.customComponents = ["AtNavBar", "LoadingView", "AtTag", "AtIcon", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        tipOpen: false
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router.params);
    }
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var recipeId = this.$router.params.recipeId;
      var detailStore = this.props.detailStore;

      detailStore.getDetailData(recipeId);
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
    key: "goBack",
    value: function goBack() {
      // 跳转
      _index2.default.navigateBack();
    }
  }, {
    key: "onClickRgIconSt",
    value: function onClickRgIconSt() {
      this.setState({
        tipOpen: true
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__156 = (0, _index.genCompid)(__prefix + "$compid__156");
      var $compid__157 = (0, _index.genCompid)(__prefix + "$compid__157");
      var $compid__158 = (0, _index.genCompid)(__prefix + "$compid__158");
      var $compid__159 = (0, _index.genCompid)(__prefix + "$compid__159");
      var $compid__160 = (0, _index.genCompid)(__prefix + "$compid__160");
      var $compid__161 = (0, _index.genCompid)(__prefix + "$compid__161");
      var $compid__162 = (0, _index.genCompid)(__prefix + "$compid__162");
      var $compid__163 = (0, _index.genCompid)(__prefix + "$compid__163");
      var $compid__164 = (0, _index.genCompid)(__prefix + "$compid__164");
      var $compid__165 = (0, _index.genCompid)(__prefix + "$compid__165");
      var $compid__166 = (0, _index.genCompid)(__prefix + "$compid__166");
      var $compid__167 = (0, _index.genCompid)(__prefix + "$compid__167");

      var _props$detailStore = this.__props.detailStore,
          detailData = _props$detailStore.detailData,
          isLoading = _props$detailStore.isLoading;


      var scrollStyle = {
        height: res.windowHeight - 60 + "px"
      };
      var Threshold = 20;

      detailData.steps = detailData.steps || [];
      detailData.mainingredients = detailData.mainingredients || [];
      detailData.ingredients = detailData.ingredients || [];
      console.log(detailData.steps);
      var stepNumber = 1;
      var anonymousState__temp = (0, _index.internal_inline_style)(scrollStyle);
      var loopArray27 = detailData.steps.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        stepNumber++;
        return {
          $original: item.$original
        };
      });
      _index.propsManager.set({
        "className": "detail-nav-content",
        "onClickLeftIcon": this.goBack,
        "leftIconType": "chevron-left",
        "color": "white",
        "leftText": "\u8FD4\u56DE",
        "onClickRgIconSt": this.onClickRgIconSt.bind(this),
        "rightFirstIconType": "message"
      }, $compid__156);
      isLoading && _index.propsManager.set({
        "status": "loading"
      }, $compid__157);
      _index.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small"
      }, $compid__158);
      _index.propsManager.set({
        "value": "clock",
        "size": "18",
        "color": "#808080",
        "className": "clock-icon"
      }, $compid__159);
      _index.propsManager.set({
        "type": "primary",
        "circle": true,
        "size": "small"
      }, $compid__160);
      _index.propsManager.set({
        "value": "heart",
        "size": "18",
        "color": "#afaeae",
        "className": "clock-icon heart-icon heart-section"
      }, $compid__161);
      _index.propsManager.set({
        "value": "star",
        "size": "18",
        "color": "#afabab"
      }, $compid__162);
      _index.propsManager.set({
        "value": "star",
        "size": "18",
        "color": "#afabab"
      }, $compid__163);
      _index.propsManager.set({
        "value": "star",
        "size": "18",
        "color": "#afabab"
      }, $compid__164);
      _index.propsManager.set({
        "value": "star",
        "size": "18",
        "color": "#afabab"
      }, $compid__165);
      _index.propsManager.set({
        "value": "star",
        "size": "18",
        "color": "#afabab"
      }, $compid__166);
      _index.propsManager.set({
        "isOpened": this.__state.tipOpen,
        "text": "\u8BC4\u8BBA\u529F\u80FD\u6682\u672A\u5F00\u653E\uFF0C\u656C\u8BF7\u671F\u5F85\u54E6"
      }, $compid__167);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        detailData: detailData,
        loopArray27: loopArray27,
        $compid__156: $compid__156,
        $compid__157: $compid__157,
        $compid__158: $compid__158,
        $compid__159: $compid__159,
        $compid__160: $compid__160,
        $compid__161: $compid__161,
        $compid__162: $compid__162,
        $compid__163: $compid__163,
        $compid__164: $compid__164,
        $compid__165: $compid__165,
        $compid__166: $compid__166,
        $compid__167: $compid__167,
        stepNumber: stepNumber,
        isLoading: isLoading,
        Threshold: Threshold
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/detail/index", _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));