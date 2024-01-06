"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Input = exports.Input = function Input(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Enter" : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    onChange: onChange
  }));
};
"use strict";

var _Input = require("./Hooks/Input.js");
(0, _Input.Input)();
