"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _bloomer = require("bloomer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var children = props.children,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? 3 : _props$columns,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$tilesStyle = props.tilesStyle,
      tilesStyle = _props$tilesStyle === void 0 ? {} : _props$tilesStyle; // grouping items

  var groups = children.reduce(function (result, child, index) {
    if (index > 0) {
      var lastGroup = result[result.length - 1];

      if (lastGroup.length < columns) {
        lastGroup.push(child);
      } else {
        result.push([child]);
      }
    } else {
      result.push([child]);
    }

    return result;
  }, []);
  return _react["default"].createElement("div", {
    style: style
  }, groups.map(function (group, groupIndex) {
    return _react["default"].createElement(_bloomer.Tile, {
      key: groupIndex,
      isAncestor: true
    }, group.map(function (item, itemIndex) {
      return _react["default"].createElement(_bloomer.Tile, {
        key: itemIndex,
        isSize: parseInt(12 / columns, 10),
        isVertical: true,
        isParent: true
      }, _react["default"].createElement(_bloomer.Tile, {
        isChild: true,
        style: tilesStyle,
        render: function render() {
          return item;
        }
      }));
    }));
  }));
};

exports["default"] = _default;