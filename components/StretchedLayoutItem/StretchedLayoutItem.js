"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StretchedLayoutItem = function StretchedLayoutItem(_ref, ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      isFlex = _ref.isFlex,
      isFlowing = _ref.isFlowing,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      isFluid = _ref.isFluid,
      id = _ref.id;
  return _react["default"].createElement("div", {
    ref: ref,
    id: id,
    className: "stretched-layout-item ".concat(className, " ").concat(isFlowing ? 'is-flowing' : '', " ").concat(isFluid ? 'is-fluid' : ''),
    style: _objectSpread({
      flex: isFlex !== undefined ? isFlex : undefined
    }, style)
  }, children);
};

var _default = (0, _react.forwardRef)(StretchedLayoutItem);

exports["default"] = _default;