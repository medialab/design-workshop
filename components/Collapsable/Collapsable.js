"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var _ref$isCollapsed = _ref.isCollapsed,
      isCollapsed = _ref$isCollapsed === void 0 ? false : _ref$isCollapsed,
      maxHeight = _ref.maxHeight,
      children = _ref.children,
      _ref$paddingBottom = _ref.paddingBottom,
      paddingBottom = _ref$paddingBottom === void 0 ? 0 : _ref$paddingBottom;
  var style = {
    maxHeight: !isCollapsed && maxHeight ? maxHeight : undefined,
    paddingBottom: !isCollapsed ? paddingBottom : undefined
  };
  return _react["default"].createElement("div", {
    style: style,
    className: "collapsable ".concat(isCollapsed ? 'is-collapsed' : '')
  }, children);
};

exports["default"] = _default;