"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Delete = function Delete(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      onClick = _ref.onClick;
  return _react["default"].createElement("span", {
    onClick: onClick,
    style: style,
    className: "delete-el ".concat(className, "}")
  }, "\xD7");
};

var _default = Delete;
exports["default"] = _default;