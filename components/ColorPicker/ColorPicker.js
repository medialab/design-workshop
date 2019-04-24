"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faPalette = require("@fortawesome/free-solid-svg-icons/faPalette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColorPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker(props) {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (nextProps) {
      if (_this.props.color !== nextProps.color) {
        _this.setState({
          color: nextProps.color
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      if (_this.state.edited) {
        _this.setState({
          edited: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setEdited", function (edited) {
      _this.setState({
        edited: edited
      });

      if (typeof _this.props.onEdit === 'function' && edited) {
        _this.props.onEdit();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleEdited", function (e) {
      e.stopPropagation();
      e.preventDefault();

      _this.setEdited(!_this.state.edited);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var hex = _ref.hex;

      if (typeof _this.props.onChange === 'function') {
        _this.props.onChange(hex);
      }

      _this.setState({
        color: hex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          _assertThisInitialize2 = _assertThisInitialize.state,
          edited = _assertThisInitialize2.edited,
          color = _assertThisInitialize2.color,
          toggleEdited = _assertThisInitialize.toggleEdited,
          handleClickOutside = _assertThisInitialize.handleClickOutside,
          onChange = _assertThisInitialize.onChange;

      return _react["default"].createElement("div", {
        className: "color-picker dropdown",
        style: {
          position: 'relative',
          display: 'inline-block'
        }
      }, edited && _react["default"].createElement("div", {
        className: "dropdown-background",
        onClick: handleClickOutside
      }), _react["default"].createElement("button", {
        className: "button",
        onClick: toggleEdited
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _faPalette.faPalette
      }), _react["default"].createElement("div", {
        className: "color-picker--color-notification",
        style: {
          background: color
        }
      })), edited && _react["default"].createElement("div", {
        className: "color-picker-container",
        style: {
          position: 'absolute'
        }
      }, _react["default"].createElement(_reactColor.SwatchesPicker, {
        color: color,
        onChange: onChange
      })));
    });

    _this.state = {
      edited: false,
      color: props.color
    };
    return _this;
  }

  return ColorPicker;
}(_react.Component);

_defineProperty(ColorPicker, "propTypes", {
  edited: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  onEdit: _propTypes["default"].func,
  onChange: _propTypes["default"].func
});

var _default = ColorPicker;
exports["default"] = _default;