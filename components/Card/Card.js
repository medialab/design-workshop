"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _StatusMarker = _interopRequireDefault(require("../StatusMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      bodyContent = _ref.bodyContent,
      icon = _ref.icon,
      _ref$footerActions = _ref.footerActions,
      footerActions = _ref$footerActions === void 0 ? [] : _ref$footerActions,
      _ref$asideActions = _ref.asideActions,
      asideActions = _ref$asideActions === void 0 ? [] : _ref$asideActions,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      headerContent = _ref.headerContent,
      onAction = _ref.onAction,
      lockStatus = _ref.lockStatus,
      statusMessage = _ref.statusMessage,
      isSelectable = _ref.isSelectable,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      onClick = _ref.onClick;
  var displayedLockStatus = lockStatus || 'open';

  var handleAction = function handleAction(id, e) {
    if (typeof onAction === 'function') {
      onAction(id, e);
    }
  };

  var renderContent = function renderContent() {
    return _react["default"].createElement("div", {
      className: "card-content"
    }, _react["default"].createElement("div", {
      className: "media"
    }, icon && _react["default"].createElement("div", {
      className: "media-left"
    }, _react["default"].createElement("figure", {
      className: "image"
    }, icon)), _react["default"].createElement("div", {
      className: "media-content"
    }, _react["default"].createElement("h2", {
      className: "title"
    }, title, lockStatus ? _react["default"].createElement(_StatusMarker["default"], {
      lockStatus: lockStatus,
      statusMessage: statusMessage
    }) : null), subtitle && _react["default"].createElement("p", {
      className: "subtitle"
    }, subtitle))), bodyContent && _react["default"].createElement("div", {
      className: "content"
    }, bodyContent));
  };

  return _react["default"].createElement("div", {
    style: style,
    onClick: onClick,
    className: "card is-lock-status-".concat(displayedLockStatus, " ").concat(isSelectable ? 'is-selectable' : '', " ").concat(isActive ? 'is-active' : '')
  }, headerContent && _react["default"].createElement("div", {
    className: "card-image"
  }, _react["default"].createElement("figure", {
    className: "image"
  }, headerContent)), asideActions && asideActions.length ? _react["default"].createElement("div", {
    className: "columns"
  }, _react["default"].createElement("div", {
    className: "column is-three-fifths"
  }, renderContent()), _react["default"].createElement("div", {
    className: "column is-two-fifths"
  }, _react["default"].createElement("div", {
    className: "card-content aside-actions"
  }, asideActions.map(function (action, index) {
    var onActionClick = function onActionClick(e) {
      handleAction(action.id, e);
    };

    return _react["default"].createElement("p", {
      key: index,
      onClick: onActionClick
    }, action.component ? _react["default"].createElement(action.component, null) : _react["default"].createElement(_Button["default"], {
      isDisabled: action.isDisabled,
      isColor: action.isColor,
      className: "button is-fullwidth"
    }, action.label));
  })))) : renderContent(), footerActions.length > 0 ? _react["default"].createElement("footer", {
    className: "card-footer"
  }, footerActions.map(function (action, index) {
    var onActionClick = function onActionClick(e) {
      handleAction(action.id, e);
    };

    return _react["default"].createElement("p", {
      key: index,
      className: "card-footer-item"
    }, _react["default"].createElement(_Button["default"], {
      isDisabled: action.isDisabled,
      isColor: action.isColor,
      onClick: onActionClick,
      className: "button is-fullwidth"
    }, action.label));
  })) : null);
};

Card.propTypes = {
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  icon: _propTypes["default"].element,
  subtitle: _propTypes["default"].string,
  headerContent: _propTypes["default"].element,
  lockStatus: _propTypes["default"].oneOf(['open', 'locked', 'asked', 'idle', 'active']),
  statusMessage: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
  bodyContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
  footerActions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
    id: _propTypes["default"].string
  })),
  asideActions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
    id: _propTypes["default"].string
  }))
};
var _default = Card;
exports["default"] = _default;