"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      hasConfig = _ref.hasConfig,
      hasNav = _ref.hasNav;
  var computedClass = (0, _classnames["default"])('layout-wrapper', className, {
    'has-config': hasConfig,
    'has-nav': hasNav
  });
  return _react["default"].createElement("div", {
    style: style,
    className: computedClass
  }, children);
};

exports["default"] = _default;