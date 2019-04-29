"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('Dropzone', _reactDropzone["default"]);
/**
 * Renders the DropZone component as a pure function
 * @param {object} props - used props (see prop types below)
 * @param {object} context - used context data (see context types below)
 * @return {ReactElement} component - the resulting component
 */

var DropZone = function DropZone() {
  return _react["default"].createElement(_reactDropzone["default"], {
    onDrop: function onDrop(acceptedFiles) {
      return console.log(acceptedFiles);
    }
  }, function (_ref) {
    var getRootProps = _ref.getRootProps,
        getInputProps = _ref.getInputProps;
    return _react["default"].createElement("section", null, _react["default"].createElement("div", getRootProps(), _react["default"].createElement("input", getInputProps()), _react["default"].createElement("p", null, "Drag 'n' drop some files here, or click to select files")));
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
);*/

/**
 * Component's properties types
 */


DropZone.propTypes = {
  onDrop: _propTypes["default"].func,
  accept: _propTypes["default"].string
};
var _default = DropZone;
exports["default"] = _default;