"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BigSelect = function BigSelect(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      activeOptionId = _ref.activeOptionId,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 2 : _ref$columns,
      onChange = _ref.onChange,
      style = _ref.style,
      _ref$boxStyle = _ref.boxStyle,
      boxStyle = _ref$boxStyle === void 0 ? {} : _ref$boxStyle;
  return _react["default"].createElement(_index.Grid, {
    columns: columns,
    style: style
  }, options.map(function (option, index) {
    var onClick = function onClick(e) {
      e.stopPropagation();
      onChange(option.id);
    };

    return _react["default"].createElement(_index.Box, {
      onClick: onClick,
      key: index,
      isActive: activeOptionId === option.id,
      style: _objectSpread({
        textAlign: 'center'
      }, boxStyle)
    }, option.iconUrl && _react["default"].createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, _react["default"].createElement(_index.Image, {
      style: {
        display: 'inline-block'
      },
      isSize: '64x64',
      src: option.iconUrl
    })), option.label);
  }));
};

BigSelect.propTypes = {
  onChange: _propTypes["default"].func,
  activeOptionId: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].element]),
    iconUrl: _propTypes["default"].string
  }))
};
var _default = BigSelect;
exports["default"] = _default;