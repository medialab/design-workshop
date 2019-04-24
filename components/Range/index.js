"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcSlider = _interopRequireWildcard(require("rc-slider"));

var _rcTooltip = _interopRequireDefault(require("rc-tooltip"));

var _fp = require("lodash/fp");

require("rc-slider/assets/index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _handle = function handle(props) {
  return _react["default"].createElement(_rcTooltip["default"], {
    prefixCls: "rc-slider-tooltip",
    overlay: props.value,
    visible: true,
    getTooltipContainer: props.getTooltipContainer,
    placement: "bottom",
    key: props.index
  }, _react["default"].createElement(_rcSlider.Handle, (0, _fp.omit)(['dragging', 'getTooltipContainer'], props)));
};

var Slider = function Slider(props) {
  return _react["default"].createElement(_rcSlider["default"], _extends({}, props, {
    className: "quinoa-slider",
    handle: function handle(p) {
      return _handle(_objectSpread({}, p, {
        getTooltipContainer: props.getTooltipContainer
      }));
    }
  }));
};

var _default = (0, _rcSlider.createSliderWithTooltip)(Slider);

exports["default"] = _default;