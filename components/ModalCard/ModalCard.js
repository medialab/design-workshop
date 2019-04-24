"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bloomer = require("bloomer");

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

var ModalCardContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalCardContainer, _Component);

  function ModalCardContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalCardContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalCardContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      setTimeout(function () {
        if (_this.props.isActive && _this.modal) {
          var inputs = _this.modal.getElementsByTagName('input');

          if (inputs && inputs.length) {
            inputs[0].focus();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (nextProps) {
      if (!_this.props.isActive && nextProps.isActive && _this.modal) {
        var inputs = _this.modal.getElementsByTagName('input');

        if (inputs && inputs.length) {
          inputs[0].focus();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          _assertThisInitialize2 = _assertThisInitialize.props,
          headerContent = _assertThisInitialize2.headerContent,
          mainContent = _assertThisInitialize2.mainContent,
          footerContent = _assertThisInitialize2.footerContent,
          _assertThisInitialize3 = _assertThisInitialize2.isActive,
          isActive = _assertThisInitialize3 === void 0 ? false : _assertThisInitialize3,
          onClose = _assertThisInitialize2.onClose,
          _assertThisInitialize4 = _assertThisInitialize2.style,
          style = _assertThisInitialize4 === void 0 ? {} : _assertThisInitialize4;

      var bindRef = function bindRef(modal) {
        _this.modal = modal;
      };

      return _react["default"].createElement("div", {
        ref: bindRef
      }, _react["default"].createElement(_bloomer.Modal, {
        isActive: isActive
      }, _react["default"].createElement(_bloomer.ModalBackground, {
        onClick: onClose
      }), _react["default"].createElement(_bloomer.ModalCard, {
        style: style
      }, _react["default"].createElement(_bloomer.ModalCardHeader, null, _react["default"].createElement(_bloomer.ModalCardTitle, null, headerContent), typeof onClose === 'function' && _react["default"].createElement(_bloomer.Delete, {
        onClick: onClose
      })), _react["default"].createElement(_bloomer.ModalCardBody, null, mainContent), footerContent && _react["default"].createElement(_bloomer.ModalCardFooter, null, footerContent))));
    });

    return _this;
  }

  return ModalCardContainer;
}(_react.Component);

ModalCardContainer.propTypes = {
  headerContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]))]),
  mainContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]))]),
  footerContent: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])),
  isActive: _propTypes["default"].bool
};
var _default = ModalCardContainer;
exports["default"] = _default;