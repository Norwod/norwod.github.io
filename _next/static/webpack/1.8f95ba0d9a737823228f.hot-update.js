webpackHotUpdate_N_E(1,{

/***/ "./src/components/MyHeader.tsx":
/*!*************************************!*\
  !*** ./src/components/MyHeader.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Professional_Documents_summer_drink_main_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sberdevices/plasma-ui */ "./node_modules/@sberdevices/plasma-ui/es/index.js");
/* harmony import */ var _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sberdevices/plasma-tokens */ "./node_modules/@sberdevices/plasma-tokens/lib/index.js");
/* harmony import */ var _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sberdevices/plasma-ui/utils/deviceDetection */ "./node_modules/@sberdevices/plasma-ui/utils/deviceDetection.js");
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.tsx");


var _jsxFileName = "C:\\Users\\Professional\\Documents\\summer-drink-main\\src\\components\\MyHeader.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    ${_sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_3__["body1"]};
    /* stylelint-disable */
    background: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '#000' : `
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.6) 20%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0.35) 60%,
            rgba(0, 0, 0, 0.1) 80%,
            rgba(0, 0, 0, 0) 100%
        )
    `};
    /* stylelint-enable */
`;

const MyHeader = (_ref) => {
  _s();

  let {
    label,
    onBack
  } = _ref,
      props = Object(C_Users_Professional_Documents_summer_drink_main_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["label", "onBack"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const back = Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' || Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["isSberPortal"])() && !onBack;
  return (// <StyledHeader {...props}>
    __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      style: _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_3__["body1"],
      back: true,
      onBackClick: onBack !== null && onBack !== void 0 ? onBack : router.back,
      title: label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() !== 'mobile' && __jsx(_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 49
      }
    }))) // </StyledHeader>

  );
};

_s(MyHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = MyHeader;
/* harmony default export */ __webpack_exports__["default"] = (MyHeader);

var _c;

$RefreshReg$(_c, "MyHeader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlIZWFkZXIudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImRpdiIsImJvZHkxIiwiZGV0ZWN0RGV2aWNlIiwiTXlIZWFkZXIiLCJsYWJlbCIsIm9uQmFjayIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmFjayIsImlzU2JlclBvcnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLGdFQUFNO0FBQ1o7QUFDQSxrQkFBa0JDLGlHQUFZLE9BQU8sUUFBbkIsR0FDUixNQURRLEdBRVA7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFNO0FBQ047QUFDQSxDQXJCQTs7QUF1QkEsTUFBTUMsUUFBMEQsR0FBRyxVQUFpQztBQUFBOztBQUFBLE1BQWhDO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxHQUFnQztBQUFBLE1BQVpDLEtBQVk7O0FBQ2hHLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdQLGlHQUFZLE9BQU8sUUFBbkIsSUFBaUNRLGlHQUFZLE1BQU0sQ0FBQ0wsTUFBakU7QUFFQSxTQUNJO0FBQ0EsVUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw2REFBRDtBQUFRLFdBQUssRUFBRUosZ0VBQWY7QUFBc0IsVUFBSSxFQUFFLElBQTVCO0FBQWtDLGlCQUFXLEVBQUVJLE1BQUYsYUFBRUEsTUFBRixjQUFFQSxNQUFGLEdBQVlFLE1BQU0sQ0FBQ0UsSUFBaEU7QUFBc0UsV0FBSyxFQUFFTCxLQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tGLGlHQUFZLE9BQU8sUUFBbkIsSUFBK0IsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRHBDLENBREosQ0FGSixDQU9JOztBQVBKO0FBU0gsQ0FiRDs7R0FBTUMsUTtVQUNhSyxxRDs7O0tBRGJMLFE7QUFlU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS44Zjk1YmEwZDlhNzM3ODIzMjI4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGVyIH0gZnJvbSAnQHNiZXJkZXZpY2VzL3BsYXNtYS11aSc7XG5pbXBvcnQgeyBib2R5MSB9IGZyb20gJ0BzYmVyZGV2aWNlcy9wbGFzbWEtdG9rZW5zJztcbmltcG9ydCB7IGRldGVjdERldmljZSwgaXNTYmVyUG9ydGFsIH0gZnJvbSAnQHNiZXJkZXZpY2VzL3BsYXNtYS11aS91dGlscy9kZXZpY2VEZXRlY3Rpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgJHtib2R5MX07XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbiAgICBiYWNrZ3JvdW5kOiAke2RldGVjdERldmljZSgpID09PSAnbW9iaWxlJ1xuICAgICAgICA/ICcjMDAwJ1xuICAgICAgICA6IGBcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMTgwZGVnLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjcpIDAlLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjYpIDIwJSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSA0MCUsXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMzUpIDYwJSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xKSA4MCUsXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDEwMCVcbiAgICAgICAgKVxuICAgIGB9O1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUgKi9cbmA7XG5cbmNvbnN0IE15SGVhZGVyOiBSZWFjdC5GQzx7IGxhYmVsOiBzdHJpbmc7IG9uQmFjaz86ICgpID0+IHZvaWQgfT4gPSAoeyBsYWJlbCwgb25CYWNrLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgYmFjayA9IGRldGVjdERldmljZSgpID09PSAnbW9iaWxlJyB8fCAoKGlzU2JlclBvcnRhbCgpICYmICFvbkJhY2spIGFzIGFueSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8U3R5bGVkSGVhZGVyIHsuLi5wcm9wc30+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8SGVhZGVyIHN0eWxlPXtib2R5MX0gYmFjaz17dHJ1ZX0gb25CYWNrQ2xpY2s9e29uQmFjayA/PyByb3V0ZXIuYmFja30gdGl0bGU9e2xhYmVsfT5cbiAgICAgICAgICAgICAgICB7ZGV0ZWN0RGV2aWNlKCkgIT09ICdtb2JpbGUnICYmIDxMb2dvIC8+fVxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAvLyA8L1N0eWxlZEhlYWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9