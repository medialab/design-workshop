"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _bloomer = require("bloomer");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavbarWrapper = function NavbarWrapper(_ref) {
  var brandImage = _ref.brandImage,
      brandContent = _ref.brandContent,
      _ref$brandUrl = _ref.brandUrl,
      brandUrl = _ref$brandUrl === void 0 ? '/' : _ref$brandUrl,
      _ref$locationBreadCru = _ref.locationBreadCrumbs,
      locationBreadCrumbs = _ref$locationBreadCru === void 0 ? [] : _ref$locationBreadCru,
      _ref$menuOptions = _ref.menuOptions,
      menuOptions = _ref$menuOptions === void 0 ? [] : _ref$menuOptions,
      _ref$actionOptions = _ref.actionOptions,
      actionOptions = _ref$actionOptions === void 0 ? [] : _ref$actionOptions,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      onToggle = _ref.onToggle,
      onProfileClick = _ref.onProfileClick,
      _ref$isLockStatus = _ref.isLockStatus,
      isLockStatus = _ref$isLockStatus === void 0 ? 'open' : _ref$isLockStatus,
      _ref$isFixed = _ref.isFixed,
      isFixed = _ref$isFixed === void 0 ? false : _ref$isFixed,
      _ref$withReactRouter = _ref.withReactRouter,
      withReactRouter = _ref$withReactRouter === void 0 ? true : _ref$withReactRouter,
      _ref$withLargeHeader = _ref.withLargeHeader,
      withLargeHeader = _ref$withLargeHeader === void 0 ? false : _ref$withLargeHeader,
      profile = _ref.profile,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$messages = _ref.messages,
      messages = _ref$messages === void 0 ? {} : _ref$messages;
  var NavLink = withReactRouter ? _reactRouterDom.Link : _bloomer.NavbarLink;

  var Ref = function Ref(_ref2) {
    var to = _ref2.to,
        children = _ref2.children;

    if (withReactRouter) {
      return _react["default"].createElement(_reactRouterDom.Link, {
        to: to
      }, children);
    } else {
      return _react["default"].createElement("a", {
        href: to
      }, children);
    }
  };

  return _react["default"].createElement(_bloomer.Navbar, {
    style: style,
    className: "is-lock-status-".concat(isLockStatus, " ").concat(isFixed ? 'is-fixed-top' : '', " ").concat(withLargeHeader ? 'with-large-header' : '')
  }, _react["default"].createElement(_index.Container, null, _react["default"].createElement(_bloomer.NavbarBrand, null, _react["default"].createElement(_bloomer.NavbarItem, null, _react["default"].createElement(Ref, {
    to: brandUrl
  }, brandImage && _react["default"].createElement("img", {
    src: brandImage
  }), " ", brandContent)), _react["default"].createElement(_bloomer.NavbarBurger, {
    isActive: isOpen,
    onClick: onToggle
  })), _react["default"].createElement(_bloomer.NavbarMenu, {
    isActive: isOpen,
    onClick: onToggle
  }, _react["default"].createElement(_bloomer.NavbarStart, null, _react["default"].createElement(_bloomer.Breadcrumb, {
    className: "navbar-item"
  }, locationBreadCrumbs.map(function (item, index) {
    return _react["default"].createElement(_bloomer.BreadcrumbItem, {
      key: index,
      isActive: item.isActive
    }, _react["default"].createElement(Ref, {
      to: item.href
    }, item.content));
  })), menuOptions.map(function (item, index) {
    return _react["default"].createElement(_bloomer.NavbarItem, {
      key: index,
      href: withReactRouter ? undefined : item.href,
      to: item.href,
      tag: withReactRouter ? _reactRouterDom.Link : undefined,
      isActive: item.isActive,
      hasDropdown: item.subItems && item.subItems.length > 0 ? true : null,
      isHoverable: item.subItems && item.subItems.length > 0 ? true : null
    }, item.subItems && item.subItems.length > 0 ? _react["default"].createElement(NavLink, {
      href: item.href
    }, _react["default"].createElement("span", null, _react["default"].createElement("span", null, item.content), _react["default"].createElement("span", null, item.lockStatus ? _react["default"].createElement(_index.StatusMarker, {
      lockStatus: item.lockStatus,
      statusMessage: item.statusMessage
    }) : null))) : _react["default"].createElement("span", null, _react["default"].createElement("span", null, item.content), _react["default"].createElement("span", null, item.lockStatus ? _react["default"].createElement(_index.StatusMarker, {
      lockStatus: item.lockStatus,
      statusMessage: item.statusMessage
    }) : null)), item.subItems && item.subItems.length > 0 && _react["default"].createElement(_bloomer.NavbarDropdown, null, item.subItems.map(function (subItem, index2) {
      return _react["default"].createElement(_bloomer.NavbarItem, {
        key: index2,
        href: subItem.href
      }, _react["default"].createElement("span", null, _react["default"].createElement("span", null, " ", subItem.content), _react["default"].createElement("span", {
        style: {
          marginLeft: '0.5rem'
        }
      }, _react["default"].createElement(_index.StatusMarker, {
        lockStatus: subItem.lockStatus,
        statusMessage: subItem.statusMessage
      }))));
    })));
  })), _react["default"].createElement(_bloomer.NavbarEnd, null, actionOptions.map(function (item, index) {
    return _react["default"].createElement(_bloomer.NavbarItem, {
      key: index,
      href: item.href
    }, item.content);
  }), profile ? _react["default"].createElement(_bloomer.NavbarItem, null, _react["default"].createElement(_index.Button, {
    "data-for": "tooltip",
    "data-tip": messages.profileMessage ? messages.profileMessage : "logged as ".concat(profile.nickName),
    "data-effect": "solid",
    "data-place": "left",
    onClick: onProfileClick,
    isRounded: true
  }, _react["default"].createElement("span", {
    style: {
      width: 32,
      height: 32
    }
  }, _react["default"].createElement("img", {
    src: profile.imageUri
  })))) : null))));
};

NavbarWrapper.propTypes = {
  isOpen: _propTypes["default"].bool,
  isFixed: _propTypes["default"].bool,
  onToggle: _propTypes["default"].func,
  brandImage: _propTypes["default"].string,
  brandContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  profile: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    imageUri: _propTypes["default"].string
  }),
  locationBreadCrumbs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    href: _propTypes["default"].string,
    content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
  })),
  menuOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    href: _propTypes["default"].string,
    content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
    subItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      href: _propTypes["default"].string,
      content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
    }))
  })),
  onProfileClick: _propTypes["default"].func,
  actionOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    href: _propTypes["default"].string,
    content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
  }))
};
var _default = NavbarWrapper;
exports["default"] = _default;