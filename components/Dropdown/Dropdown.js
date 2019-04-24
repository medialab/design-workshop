"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bloomer = require("bloomer");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faAngleDown = require("@fortawesome/free-solid-svg-icons/faAngleDown");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownContainer, _Component);

  function DropdownContainer(props) {
    var _this;

    _classCallCheck(this, DropdownContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", function (nextProps) {
      if (_this.menuRef) {
        var _nextProps$menuAlign = nextProps.menuAlign,
            menuAlign = _nextProps$menuAlign === void 0 ? 'left' : _nextProps$menuAlign;

        var elemRect = _this.menuRef.getBoundingClientRect();

        var x = elemRect.x,
            y = elemRect.y,
            width = elemRect.width;

        var _this$triggerRef$getB = _this.triggerRef.getBoundingClientRect(),
            height = _this$triggerRef$getB.height,
            triggerWidth = _this$triggerRef$getB.width;

        var finalX;

        if (menuAlign === 'left') {
          finalX = x + width > window.innerWidth ? window.innerWidth - width : x;
        } else if (menuAlign === 'right') {
          finalX = window.innerWidth - (x + triggerWidth);
          finalX = finalX + width > window.innerWidth ? window.innerWidth : finalX;
        }

        var maxWidth = window.innerWidth - x;

        if (y > 0) {
          _this.setState({
            x: finalX,
            y: y + height,
            width: width,
            maxWidth: maxWidth
          });
        } else {
          _this.setState({
            width: width
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          _assertThisInitialize2 = _assertThisInitialize.props,
          value = _assertThisInitialize2.value,
          onToggle = _assertThisInitialize2.onToggle,
          isFullWidth = _assertThisInitialize2.isFullWidth,
          onChange = _assertThisInitialize2.onChange,
          isColor = _assertThisInitialize2.isColor,
          _assertThisInitialize3 = _assertThisInitialize2.isActive,
          isActive = _assertThisInitialize3 === void 0 ? false : _assertThisInitialize3,
          _assertThisInitialize4 = _assertThisInitialize2.options,
          options = _assertThisInitialize4 === void 0 ? [] : _assertThisInitialize4,
          _assertThisInitialize5 = _assertThisInitialize2.closeOnChange,
          closeOnChange = _assertThisInitialize5 === void 0 ? true : _assertThisInitialize5,
          children = _assertThisInitialize2.children,
          _assertThisInitialize6 = _assertThisInitialize2.menuAlign,
          menuAlign = _assertThisInitialize6 === void 0 ? 'left' : _assertThisInitialize6,
          _assertThisInitialize7 = _assertThisInitialize.state,
          x = _assertThisInitialize7.x,
          y = _assertThisInitialize7.y;

      var handleAction = function handleAction(id, index) {
        if (typeof onChange === 'function') {
          onChange(id, index);

          if (closeOnChange) {
            onToggle();
          }
        }
      };

      var isNested = options.length && options[0].options;

      var renderOption = function renderOption(option, index) {
        var nested = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var onClick = function onClick(e) {
          e.stopPropagation();
          e.preventDefault();
          handleAction(option.id, index);
        };

        var label = option.label,
            id = option.id;
        var val = nested && value ? value[index].value : value;
        var subIsActive = Array.isArray(val) ? val.indexOf(id) > -1 : val === id;
        return _react["default"].createElement(_bloomer.DropdownItem, {
          href: "#",
          key: id + '-' + index,
          isActive: subIsActive,
          onClick: onClick
        }, label);
      };

      var renderGroup = function renderGroup(option, index) {
        var id = option.id,
            subOptions = option.options;
        return [_react["default"].createElement(_bloomer.DropdownItem, {
          key: id + '-' + index
        }, _react["default"].createElement(_bloomer.Title, {
          isSize: 5
        }, option.label)), _react["default"].createElement(_bloomer.DropdownDivider, {
          key: id + '-' + (index + 1)
        })].concat(_toConsumableArray(subOptions.map(function (o) {
          return renderOption(o, id, true);
        })));
      };

      var bindMenuRef = function bindMenuRef(menuRef) {
        _this.menuRef = menuRef;
      };

      var bindTriggerRef = function bindTriggerRef(triggerRef) {
        _this.triggerRef = triggerRef;
      };

      var color = '';

      if (isActive) {
        color = 'info';
      } else if (isColor) {
        color = isColor;
      }

      return _react["default"].createElement(_bloomer.Dropdown, {
        isActive: isActive,
        isFullWidth: isFullWidth
      }, _react["default"].createElement("div", {
        className: "dropdown-bind-menu-ref",
        ref: bindMenuRef
      }, isActive && _react["default"].createElement("div", {
        className: "dropdown-background",
        onClick: onToggle
      }), _react["default"].createElement("div", {
        className: "dropdown-bind-trigger-ref",
        ref: bindTriggerRef
      }, _react["default"].createElement(_bloomer.DropdownTrigger, {
        isFullWidth: isFullWidth
      }, _react["default"].createElement(_Button["default"], {
        isFullWidth: isFullWidth,
        onClick: onToggle,
        isOutlined: true,
        "aria-haspopup": "true",
        "aria-controls": "dropdown-menu",
        isColor: color
      }, children ? children : _react["default"].createElement("span", null, value && value.label), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _faAngleDown.faAngleDown
      })))), _react["default"].createElement(_bloomer.DropdownMenu, {
        style: {
          maxHeight: window.innerHeight - y,
          top: y + 'px',
          left: menuAlign === 'left' ? x + 'px' : 'unset',
          right: menuAlign === 'right' ? x + 'px' : 'unset',
          maxWidth: _this.state.maxWidth
        },
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, _react["default"].createElement(_bloomer.DropdownContent, null, isNested ? options.map(renderGroup).reduce(function (cur, next, index) {
        return [].concat(_toConsumableArray(cur), [cur.length && index !== options.length - 1 ? _react["default"].createElement(_bloomer.DropdownDivider, {
          key: index + 0.5
        }) : null], _toConsumableArray(next));
      }, []) : options.map(function (o) {
        return renderOption(o);
      })))));
    });

    _this.state = {
      x: 0,
      y: 0,
      width: 192
    };
    return _this;
  }

  return DropdownContainer;
}(_react.Component);

DropdownContainer.propTypes = {
  isActive: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  onToggle: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
  }), // for nested value
  _propTypes["default"].object, _propTypes["default"].array]),
  options: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    id: _propTypes["default"].string
  }), _propTypes["default"].shape({
    id: _propTypes["default"].string,
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
      id: _propTypes["default"].string
    }))
  })]))
};
var _default = DropdownContainer;
exports["default"] = _default;