"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActionCardFooter = function ActionCardFooter(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      children = _ref.children;
  return _react["default"].createElement("div", {
    style: style,
    className: "action-card-footer ".concat(className)
  }, children);
};

var _default = ActionCardFooter;
exports["default"] = _default;