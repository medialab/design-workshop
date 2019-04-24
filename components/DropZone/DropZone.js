"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Renders the DropZone component as a pure function
 * @param {object} props - used props (see prop types below)
 * @param {object} context - used context data (see context types below)
 * @return {ReactElement} component - the resulting component
 */
var DropZone = function DropZone(_ref) {
  var onDrop = _ref.onDrop,
      children = _ref.children,
      accept = _ref.accept,
      maxSize = _ref.maxSize;
  return _react["default"].createElement(_reactDropzone["default"], {
    className: "drop-zone",
    activeClassName: "active",
    accept: accept,
    maxSize: maxSize,
    onDrop: onDrop
  }, function (_ref2) {
    var isDragActive = _ref2.isDragActive,
        isDragReject = _ref2.isDragReject;
    return _react["default"].createElement("div", {
      className: 'caption-wrapper ' + (isDragActive ? 'active ' : ' ') + (isDragReject ? 'reject' : '')
    }, _react["default"].createElement("div", {
      className: "caption-container"
    }, children));
  });
};
/**
 * Component's properties types
 */


DropZone.propTypes = {
  onDrop: _propTypes["default"].func,
  accept: _propTypes["default"].string
};
var _default = DropZone;
exports["default"] = _default;