webpackHotUpdate_N_E(1,{

/***/ "./src/components/Logo.tsx":
/*!*********************************!*\
  !*** ./src/components/Logo.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sberdevices/plasma-ui/utils/deviceDetection */ "./node_modules/@sberdevices/plasma-ui/utils/deviceDetection.js");
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Img */ "./src/components/Img.tsx");
var _jsxFileName = "C:\\Users\\Professional\\Documents\\summer-drink-main\\src\\components\\Logo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Split = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    height: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["isSberBox"])() ? 42 : 18 * _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["deviceScales"][Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["detectDevice"])()]}px;
    width: 0;
    display: inline-block;
    margin-left: 12px;
    margin-right: 12px;
    border: ${_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["deviceScales"][Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["detectDevice"])()]}px solid rgba(255, 255, 255, 0.28);
    border-radius: ${_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["deviceScales"][Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["detectDevice"])()]}px;
`;
const Logos = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["detectDevice"])() === 'mobile' ? '24px 0' : 0};
`;
_c = Logos;

const Logo = () => {
  return __jsx(Logos, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: "/bread.svg",
    width: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["isSberBox"])() ? 346 : 143 * _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["deviceScales"][Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["detectDevice"])()],
    height: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["isSberBox"])() ? 46 : 19 * _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["deviceScales"][Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_1__["detectDevice"])()],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
};

_c2 = Logo;
/* harmony default export */ __webpack_exports__["default"] = (Logo);

var _c, _c2;

$RefreshReg$(_c, "Logos");
$RefreshReg$(_c2, "Logo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9nby50c3giXSwibmFtZXMiOlsiU3BsaXQiLCJzdHlsZWQiLCJkaXYiLCJpc1NiZXJCb3giLCJkZXZpY2VTY2FsZXMiLCJkZXRlY3REZXZpY2UiLCJMb2dvcyIsIkxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBSTtBQUN6QixjQUFjQyw4RkFBUyxLQUFLLEVBQUwsR0FBVSxLQUFLQyx5RkFBWSxDQUFDQyxpR0FBWSxFQUFiLENBQWlCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBY0QseUZBQVksQ0FBQ0MsaUdBQVksRUFBYixDQUFpQjtBQUMzQyxxQkFBcUJELHlGQUFZLENBQUNDLGlHQUFZLEVBQWIsQ0FBaUI7QUFDbEQsQ0FSQTtBQVVBLE1BQU1DLEtBQUssR0FBR0wseURBQU0sQ0FBQ0MsR0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxlQUFlRyxpR0FBWSxPQUFPLFFBQW5CLEdBQThCLFFBQTlCLEdBQXlDLENBQUU7QUFDMUQsQ0FMQTtLQUFNQyxLOztBQU9OLE1BQU1DLElBQWMsR0FBRyxNQUFNO0FBQ3pCLFNBQ0ksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQ0ksT0FBRyxFQUFDLFlBRFI7QUFFSSxTQUFLLEVBQUVKLDhGQUFTLEtBQUssR0FBTCxHQUFXLE1BQU1DLHlGQUFZLENBQUNDLGlHQUFZLEVBQWIsQ0FGakQ7QUFHSSxVQUFNLEVBQUVGLDhGQUFTLEtBQUssRUFBTCxHQUFVLEtBQUtDLHlGQUFZLENBQUNDLGlHQUFZLEVBQWIsQ0FIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFTSCxDQVZEOztNQUFNRSxJO0FBWVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuZTgwNjY1MDEzNTc1YTUzYzk0Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZXZpY2VTY2FsZXMsIGRldGVjdERldmljZSwgaXNTYmVyQm94IH0gZnJvbSAnQHNiZXJkZXZpY2VzL3BsYXNtYS11aS91dGlscy9kZXZpY2VEZXRlY3Rpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBJbWcgZnJvbSAnLi9JbWcnO1xuXG5jb25zdCBTcGxpdCA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiAke2lzU2JlckJveCgpID8gNDIgOiAxOCAqIGRldmljZVNjYWxlc1tkZXRlY3REZXZpY2UoKV19cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBib3JkZXI6ICR7ZGV2aWNlU2NhbGVzW2RldGVjdERldmljZSgpXX1weCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7ZGV2aWNlU2NhbGVzW2RldGVjdERldmljZSgpXX1weDtcbmA7XG5cbmNvbnN0IExvZ29zID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6ICR7ZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnID8gJzI0cHggMCcgOiAwfTtcbmA7XG5cbmNvbnN0IExvZ286IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMb2dvcz5cbiAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvYnJlYWQuc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17aXNTYmVyQm94KCkgPyAzNDYgOiAxNDMgKiBkZXZpY2VTY2FsZXNbZGV0ZWN0RGV2aWNlKCldfVxuICAgICAgICAgICAgICAgIGhlaWdodD17aXNTYmVyQm94KCkgPyA0NiA6IDE5ICogZGV2aWNlU2NhbGVzW2RldGVjdERldmljZSgpXX1cbiAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9Mb2dvcz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiJdLCJzb3VyY2VSb290IjoiIn0=