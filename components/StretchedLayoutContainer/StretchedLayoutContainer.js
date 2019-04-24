"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      _ref$isDirection = _ref.isDirection,
      isDirection = _ref$isDirection === void 0 ? 'vertical' : _ref$isDirection,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$isAbsolute = _ref.isAbsolute,
      isAbsolute = _ref$isAbsolute === void 0 ? false : _ref$isAbsolute,
      isFlowing = _ref.isFlowing,
      isFluid = _ref.isFluid,
      isOverflowVisible = _ref.isOverflowVisible,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return _react["default"].createElement("div", {
    style: style,
    className: "stretched-layout-container ".concat(className, " is-direction-").concat(isDirection, " ").concat(isAbsolute ? 'is-absolute' : '', " ").concat(isFlowing ? 'is-flowing' : '', " ").concat(isFluid ? 'is-fluid' : '', " ").concat(isOverflowVisible ? 'is-overflow-visible' : '')
  }, children);
};

exports["default"] = _default;