"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActionableTable = function ActionableTable(_ref) {
  var onColumnAction = _ref.onColumnAction,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$columnNames = _ref.columnNames,
      columnNames = _ref$columnNames === void 0 ? [] : _ref$columnNames,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values,
      _ref$actionMessage = _ref.actionMessage,
      actionMessage = _ref$actionMessage === void 0 ? 'visit' : _ref$actionMessage;
  return _react["default"].createElement("div", {
    style: style,
    className: "action-table ".concat(className)
  }, _react["default"].createElement("div", {
    className: 'action-table-header'
  }, columnNames.map(function (columnName, index) {
    return _react["default"].createElement("div", {
      key: index,
      className: "table-cell"
    }, columnName);
  })), _react["default"].createElement("div", {
    className: 'action-table-main'
  }, values.map(function (obj, rowIndex) {
    return _react["default"].createElement("div", {
      key: rowIndex,
      className: "table-row"
    }, columnNames.map(function (columnName, index) {
      return _react["default"].createElement("div", {
        key: index,
        className: "table-cell"
      }, obj[columnName]);
    }));
  })), _react["default"].createElement("div", {
    className: 'action-table-footer'
  }, columnNames.map(function (columnName, index) {
    var handleClick = function handleClick(e) {
      if (typeof onColumnAction === 'function') {
        onColumnAction(columnName, e);
      }
    };

    return _react["default"].createElement("div", {
      key: index,
      className: "table-cell"
    }, _react["default"].createElement(_Button["default"], {
      onClick: handleClick,
      isColor: "primary",
      isFullwidth: true
    }, actionMessage));
  })));
};

var _default = ActionableTable;
exports["default"] = _default;