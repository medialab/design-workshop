"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faQuestionCircle = require("@fortawesome/free-solid-svg-icons/faQuestionCircle");

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HelpPin = function HelpPin(_ref) {
  var children = _ref.children,
      place = _ref.place,
      type = _ref.type,
      _ref$effect = _ref.effect,
      effect = _ref$effect === void 0 ? 'solid' : _ref$effect,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return _react["default"].createElement("span", {
    className: "help-pin ".concat(className),
    style: {
      position: 'relative'
    },
    "data-tip": children,
    "data-for": "help-tooltip",
    "data-type": type,
    "data-place": place,
    "data-effect": effect
  }, _react["default"].createElement(_index.Icon, null, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _faQuestionCircle.faQuestionCircle
  })), _react["default"].createElement(_reactTooltip["default"], {
    id: "help-tooltip"
  }));
};

HelpPin.propTypes = {
  place: _propTypes["default"].string,
  type: _propTypes["default"].string,
  effect: _propTypes["default"].string
};
var _default = HelpPin;
exports["default"] = _default;