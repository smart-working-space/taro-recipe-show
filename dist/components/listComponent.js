"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListComponent = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ListComponent, _BaseComponent);

  function ListComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListComponent.__proto__ || Object.getPrototypeOf(ListComponent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray3", "listData"], _this.customComponents = ["AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ListComponent.prototype.__proto__ || Object.getPrototypeOf(ListComponent.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "goTo",
    value: function goTo(recipeId) {
      // 跳转到目的页面，打开新页面
      _index2.default.navigateTo({
        url: "/pages/detail/index?recipeId=" + recipeId
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

      var loopArray3 = this.__props.listData.map(function (item, _anonIdx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $compid__17 = (0, _index.genCompid)(__prefix + "kHDgLqstJt" + _anonIdx);
        _index.propsManager.set({
          "value": "star",
          "size": "18",
          "color": "#afabab"
        }, $compid__17);
        var $compid__18 = (0, _index.genCompid)(__prefix + "vkZFFvCSRL" + _anonIdx);
        _index.propsManager.set({
          "value": "star",
          "size": "18",
          "color": "#afabab"
        }, $compid__18);
        var $compid__19 = (0, _index.genCompid)(__prefix + "AHdUITkvzQ" + _anonIdx);
        _index.propsManager.set({
          "value": "star",
          "size": "18",
          "color": "#afabab"
        }, $compid__19);
        var $compid__20 = (0, _index.genCompid)(__prefix + "SpHuXCEzoV" + _anonIdx);
        _index.propsManager.set({
          "value": "star",
          "size": "18",
          "color": "#afabab"
        }, $compid__20);
        var $compid__21 = (0, _index.genCompid)(__prefix + "wYjfdoofKA" + _anonIdx);
        _index.propsManager.set({
          "value": "star",
          "size": "18",
          "color": "#afabab"
        }, $compid__21);
        var $compid__22 = (0, _index.genCompid)(__prefix + "AmxGkeCAno" + _anonIdx);
        _index.propsManager.set({
          "value": "clock",
          "size": "18",
          "color": "#c4c4c4",
          "className": "clock-icon"
        }, $compid__22);
        var $compid__23 = (0, _index.genCompid)(__prefix + "UwstoGkLNs" + _anonIdx);
        _index.propsManager.set({
          "value": "heart",
          "size": "18",
          "color": "#afabab",
          "className": "clock-icon heart-icon"
        }, $compid__23);
        return {
          $compid__17: $compid__17,
          $compid__18: $compid__18,
          $compid__19: $compid__19,
          $compid__20: $compid__20,
          $compid__21: $compid__21,
          $compid__22: $compid__22,
          $compid__23: $compid__23,
          $original: item.$original
        };
      });

      Object.assign(this.__state, {
        loopArray3: loopArray3
      });
      return this.__state;
    }
  }]);

  return ListComponent;
}(_index.Component), _class.$$events = ["goTo"], _class.$$componentPath = "components/listComponent", _temp2);
exports.default = ListComponent;

Component(require('../npm/@tarojs/taro-weapp/index.js').default.createComponent(ListComponent));