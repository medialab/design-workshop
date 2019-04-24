"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StatusMarker = function StatusMarker(_ref) {
  var lockStatus = _ref.lockStatus,
      statusMessage = _ref.statusMessage,
      style = _ref.style;
  // let computedType;
  // switch (lockStatus) {
  //   case 'open':
  //     computedType = 'light';
  //     break;
  //   case 'active':
  //     computedType = 'success';
  //     break;
  //   case 'locked':
  //     computedType = 'info';
  //     break;
  //   case 'asked':
  //     computedType = 'light';
  //     break;
  //   case 'idle':
  //   default:
  //     computedType = 'light';
  //     break;
  // }
  return _react["default"].createElement("span", {
    className: "status-marker is-lock-status-".concat(lockStatus),
    "data-for": "tooltip",
    "data-tip": statusMessage // data-type={computedType}
    ,
    "data-place": "right",
    style: style
  }, "\u25CF");
};

StatusMarker.propTypes = {
  lockStatus: _propTypes["default"].oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array])
};
var _default = StatusMarker;
exports["default"] = _default;