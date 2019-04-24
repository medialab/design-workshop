"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlexContainer = function FlexContainer(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent;

  var finalStyle = _objectSpread({
    flexDirection: flexDirection,
    alignItems: alignItems,
    flexWrap: flexWrap,
    justifyContent: justifyContent
  }, style);

  return _react["default"].createElement("div", {
    className: "flex-container ".concat(className),
    style: finalStyle
  }, children);
};

FlexContainer.propTypes = {
  style: _propTypes["default"].object,
  flexDirection: _propTypes["default"].string,
  flexWrap: _propTypes["default"].string,
  alignItems: _propTypes["default"].string,
  justifyContent: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var _default = FlexContainer;
exports["default"] = _default;