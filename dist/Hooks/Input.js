"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
var _inputModule = _interopRequireDefault(require("./input.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Input = exports.Input = function Input(_ref) {
  var label = _ref.label,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Enter" : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onKeyDown = _ref.onKeyDown,
    errorMessage = _ref.errorMessage,
    inputStyle = _ref.inputStyle,
    labelStyle = _ref.labelStyle,
    errorStyle = _ref.errorStyle;
  var handleFocus = function handleFocus(e) {
    if (onFocus) {
      onFocus(e);
    }
  };
  var handleBlur = function handleBlur(e) {
    if (onBlur) {
      onBlur(e);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputModule["default"]["input-container"]
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputModule["default"]["label"],
    style: labelStyle
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    style: inputStyle // Apply custom style to the input
  }), errorMessage && /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputModule["default"]["error-message"],
    style: errorStyle
  }, errorMessage));
};