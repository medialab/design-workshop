"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AbsoluteContainer = function AbsoluteContainer(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "absolute-container ".concat(className),
    style: style
  }, children);
};

AbsoluteContainer.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string
};
var _default = AbsoluteContainer;
exports["default"] = _default;