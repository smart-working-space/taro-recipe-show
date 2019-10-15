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

var Index = (_dec = (0, _index3.inject)("searchStore"), _dec(_class = (0, _index3.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__25", "$compid__26", "$compid__27", "$compid__28", "Threshold", "searchStore"], _this.config = {
      navigationBarTitleText: "详情页"
    }, _this.searchValueChange = function (value) {
      var searchStore = _this.props.searchStore;

      searchStore.searchValueChange(value);
    }, _this.handleSelectClick = function (value) {
      var searchStore = _this.props.searchStore;

      searchStore.handleSelectClick(value);
    }, _this.customComponents = ["AtSearchBar", "AtTabs", "CategoryList", "LoadingView"], _temp), _possibleConstructorReturn(_this, _ret);
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
    value: function componentWillReact() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchStore = this.props.searchStore;

      searchStore.getListData();
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
    key: "onActionClick",
    value: function onActionClick() {
      // alert("该功能暂未开放");
      var searchStore = this.props.searchStore;

      searchStore.searchResult();
    }
  }, {
    key: "onScrollToLower",
    value: function onScrollToLower(e) {
      var searchStore = this.props.searchStore;

      searchStore.scrollGetData();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__25 = (0, _index.genCompid)(__prefix + "$compid__25");
      var $compid__26 = (0, _index.genCompid)(__prefix + "$compid__26");
      var $compid__27 = (0, _index.genCompid)(__prefix + "$compid__27");
      var $compid__28 = (0, _index.genCompid)(__prefix + "$compid__28");

      var _props$searchStore = this.__props.searchStore,
          searchData = _props$searchStore.searchData,
          category = _props$searchStore.category,
          searchValue = _props$searchStore.searchValue,
          currentSelect = _props$searchStore.currentSelect,
          isEnd = _props$searchStore.isEnd;


      var scrollStyle = {
        height: res.windowHeight - 100 + "px"
      };
      var Threshold = 20;

      var anonymousState__temp = res.windowHeight - 100 + "px";
      var anonymousState__temp2 = (0, _index.internal_inline_style)(scrollStyle);
      _index.propsManager.set({
        "actionName": "\u641C\u4E00\u4E0B",
        "value": searchValue,
        "onChange": this.searchValueChange,
        "onActionClick": this.onActionClick.bind(this)
      }, $compid__25);
      _index.propsManager.set({
        "current": currentSelect,
        "scroll": true,
        "height": anonymousState__temp,
        "tabDirection": "vertical",
        "tabList": category,
        "onClick": this.handleSelectClick
      }, $compid__26);
      _index.propsManager.set({
        "searchData": searchData
      }, $compid__27);
      _index.propsManager.set({
        "status": isEnd ? "noMore" : "loading"
      }, $compid__28);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__25: $compid__25,
        $compid__26: $compid__26,
        $compid__27: $compid__27,
        $compid__28: $compid__28,
        Threshold: Threshold
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/index/searchView", _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index));