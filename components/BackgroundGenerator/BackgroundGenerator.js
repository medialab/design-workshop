"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LIGHT = '░';
var MEDIUM = '▒';
var DARK = '▓';

var _default = function _default(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 1000 : _ref$rows,
      _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 60 : _ref$lines;
  var matrix = [];

  for (var i = 0; i < lines; i++) {
    var line = [];

    for (var j = 0; j < rows; j++) {
      var _char = LIGHT;
      line.push(_char);
    }

    matrix.push(line);
  }

  return _react["default"].createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      fontFamily: 'Times New Roman',
      fontSize: '24px',
      lineHeight: '29px',
      color: 'grey' // lineHeight: 100 / lines + '%',

    }
  }, matrix.map(function (line, index) {
    return _react["default"].createElement("div", {
      key: index
    }, line.join(''));
  }));
};

exports["default"] = _default;