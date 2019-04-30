"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _BackgroundGenerator = _interopRequireDefault(require("../BackgroundGenerator"));

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
      maxSize = _ref.maxSize,
      _ref$isSize = _ref.isSize,
      isSize = _ref$isSize === void 0 ? 'medium' : _ref$isSize;
  return _react["default"].createElement(_reactDropzone["default"], {
    className: "drop-zone-container",
    activeClassName: "active",
    accept: accept,
    maxSize: maxSize,
    onDrop: onDrop
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return _react["default"].createElement("section", {
      className: "drop-zone is-size-".concat(isSize)
    }, _react["default"].createElement("div", getRootProps(), _react["default"].createElement(_BackgroundGenerator["default"], null), _react["default"].createElement("input", getInputProps()), _react["default"].createElement("div", {
      className: "drop-zone-content-container"
    }, _react["default"].createElement("div", {
      className: "drop-zone-content"
    }, children))));
  });
};
/*
const DropZone = ({
  onDrop,
  children,
  accept,
  maxSize
}) => (
  <DropzoneComponent
    className="drop-zone"
    activeClassName="active"
    accept={accept}
    maxSize={maxSize}
    onDrop={onDrop}>
    {({isDragActive, isDragReject}) => (
      <div className={'drop-zone-content ' + (isDragActive ? 'active ' : ' ') + (isDragReject ? 'reject' : '')}>
        <BackgroundGenerator />
        <span className="tech-info">{children}</span>
      </div>
    )}
  </DropzoneComponent>
);
*/

/**
 * Component's properties types
 */


DropZone.propTypes = {
  onDrop: _propTypes["default"].func,
  accept: _propTypes["default"].string
};
var _default = DropZone;
exports["default"] = _default;