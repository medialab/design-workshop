"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCodemirror = require("react-codemirror2");

var _lodash = require("lodash");

require("codemirror/lib/codemirror.css");

require("codemirror/mode/javascript/javascript");

require("codemirror/mode/xml/xml");

require("codemirror/mode/css/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TRIGGER_DEBOUNCE_DELAY = 500;

var CodeEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(CodeEditor, _Component);

  function CodeEditor(props) {
    var _this;

    _classCallCheck(this, CodeEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CodeEditor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (nextProps) {
      if (_this.props.value !== nextProps.value && !_this.state.focused) {
        _this.setState({
          value: nextProps.value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "triggerChange", function (code) {
      if (_this.props.onChange && typeof _this.props.onChange === 'function') {
        _this.props.onChange(code);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (editor, metadata, code) {
      _this.setState({
        value: code
      });

      _this.debouncedTriggerChange(code);
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      if (_this.props.onClick && typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      if (_this.props.onFocus && typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(e);
      }

      e.stopPropagation();
    });

    _this.state = {
      value: props.value || '',
      focused: false
    };
    var delay = props.changeDelay || TRIGGER_DEBOUNCE_DELAY;
    _this.debouncedTriggerChange = (0, _lodash.debounce)(_this.triggerChange, delay);
    return _this;
  }

  _createClass(CodeEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _onChange = this.onChange,
          onClick = this.onClick,
          _this$props = this.props,
          _this$props$mode = _this$props.mode,
          mode = _this$props$mode === void 0 ? 'css' : _this$props$mode,
          _this$props$lineNumbe = _this$props.lineNumbers,
          lineNumbers = _this$props$lineNumbe === void 0 ? true : _this$props$lineNumbe,
          value = this.state.value;
      return _react["default"].createElement("div", {
        className: "fonio-CodeEditor",
        onClick: onClick
      }, _react["default"].createElement(_reactCodemirror.Controlled, {
        value: value,
        options: {
          mode: mode,
          lineNumbers: lineNumbers
        },
        onFocus: function onFocus() {
          return _this2.setState({
            focused: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            focused: false
          });
        },
        onBeforeChange: function onBeforeChange(editor, data, thatValue) {
          _this2.setState({
            value: thatValue
          }); // state management here

        },
        onChange: function onChange(editor, data, thatValue) {
          // downstream callback
          _onChange(editor, data, thatValue);
        }
      }));
    }
  }]);

  return CodeEditor;
}(_react.Component);

_defineProperty(CodeEditor, "propTypes", {
  changeDelay: _propTypes["default"].number,
  value: _propTypes["default"].string,
  mode: _propTypes["default"].string,
  lineNumbers: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
});

var _default = CodeEditor;
exports["default"] = _default;