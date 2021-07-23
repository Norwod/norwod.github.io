webpackHotUpdate_N_E(1,{

/***/ "./src/components/MyHeader.tsx":
/*!*************************************!*\
  !*** ./src/components/MyHeader.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Professional_Documents_summer_drink_main_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_Professional_Documents_summer_drink_main_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sberdevices/plasma-ui */ "./node_modules/@sberdevices/plasma-ui/es/index.js");
/* harmony import */ var _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sberdevices/plasma-tokens */ "./node_modules/@sberdevices/plasma-tokens/lib/index.js");
/* harmony import */ var _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sberdevices/plasma-ui/utils/deviceDetection */ "./node_modules/@sberdevices/plasma-ui/utils/deviceDetection.js");
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo.tsx");



var _jsxFileName = "C:\\Users\\Professional\\Documents\\summer-drink-main\\src\\components\\MyHeader.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    ${_sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_4__["body1"]};
    /* stylelint-disable */
    background: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5__["detectDevice"])() === 'mobile' ? '#000' : `
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
_c = StyledHeader;

const MyHeader = (_ref) => {
  _s();

  let {
    label,
    onBack
  } = _ref,
      props = Object(C_Users_Professional_Documents_summer_drink_main_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label", "onBack"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const back = Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5__["detectDevice"])() === 'mobile' || Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5__["isSberPortal"])() && !onBack;
  return __jsx(StyledHeader, Object(C_Users_Professional_Documents_summer_drink_main_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    style: _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_4__["body1"],
    back: true,
    onBackClick: onBack !== null && onBack !== void 0 ? onBack : router.back,
    title: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_5__["detectDevice"])() !== 'mobile' && __jsx(_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 54
    }
  }))));
};

_s(MyHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c2 = MyHeader;
/* harmony default export */ __webpack_exports__["default"] = (MyHeader);

var _c, _c2;

$RefreshReg$(_c, "StyledHeader");
$RefreshReg$(_c2, "MyHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTXlIZWFkZXIudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsImRpdiIsImJvZHkxIiwiZGV0ZWN0RGV2aWNlIiwiTXlIZWFkZXIiLCJsYWJlbCIsIm9uQmFjayIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmFjayIsImlzU2JlclBvcnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsZ0VBQU07QUFDWjtBQUNBLGtCQUFrQkMsaUdBQVksT0FBTyxRQUFuQixHQUNSLE1BRFEsR0FFUDtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQU07QUFDTjtBQUNBLENBckJBO0tBQU1KLFk7O0FBdUJOLE1BQU1LLFFBQTBELEdBQUcsVUFBaUM7QUFBQTs7QUFBQSxNQUFoQztBQUFFQyxTQUFGO0FBQVNDO0FBQVQsR0FBZ0M7QUFBQSxNQUFaQyxLQUFZOztBQUNoRyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHUCxpR0FBWSxPQUFPLFFBQW5CLElBQWlDUSxpR0FBWSxNQUFNLENBQUNMLE1BQWpFO0FBRUEsU0FDSyxNQUFDLFlBQUQsd0tBQWtCQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0csTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUFRLFNBQUssRUFBRUwsZ0VBQWY7QUFBc0IsUUFBSSxFQUFFLElBQTVCO0FBQWtDLGVBQVcsRUFBRUksTUFBRixhQUFFQSxNQUFGLGNBQUVBLE1BQUYsR0FBWUUsTUFBTSxDQUFDRSxJQUFoRTtBQUFzRSxTQUFLLEVBQUVMLEtBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUYsaUdBQVksT0FBTyxRQUFuQixJQUErQixNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEckMsQ0FESixDQURILENBREw7QUFTSCxDQWJEOztHQUFNQyxRO1VBQ2FLLHFEOzs7TUFEYkwsUTtBQWVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjU3YjVmZjFlYWJkN2QwNTBmODA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkZXIgfSBmcm9tICdAc2JlcmRldmljZXMvcGxhc21hLXVpJztcbmltcG9ydCB7IGJvZHkxIH0gZnJvbSAnQHNiZXJkZXZpY2VzL3BsYXNtYS10b2tlbnMnO1xuaW1wb3J0IHsgZGV0ZWN0RGV2aWNlLCBpc1NiZXJQb3J0YWwgfSBmcm9tICdAc2JlcmRldmljZXMvcGxhc21hLXVpL3V0aWxzL2RldmljZURldGVjdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJztcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICAke2JvZHkxfTtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuICAgIGJhY2tncm91bmQ6ICR7ZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnXG4gICAgICAgID8gJyMwMDAnXG4gICAgICAgIDogYFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNykgMCUsXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNikgMjAlLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpIDQwJSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zNSkgNjAlLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEpIDgwJSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgMTAwJVxuICAgICAgICApXG4gICAgYH07XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuYDtcblxuY29uc3QgTXlIZWFkZXI6IFJlYWN0LkZDPHsgbGFiZWw6IHN0cmluZzsgb25CYWNrPzogKCkgPT4gdm9pZCB9PiA9ICh7IGxhYmVsLCBvbkJhY2ssIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBiYWNrID0gZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnIHx8ICgoaXNTYmVyUG9ydGFsKCkgJiYgIW9uQmFjaykgYXMgYW55KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICA8U3R5bGVkSGVhZGVyIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgc3R5bGU9e2JvZHkxfSBiYWNrPXt0cnVlfSBvbkJhY2tDbGljaz17b25CYWNrID8/IHJvdXRlci5iYWNrfSB0aXRsZT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAge2RldGVjdERldmljZSgpICE9PSAnbW9iaWxlJyAmJiA8TG9nbyAvPn1cbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgPC9TdHlsZWRIZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15SGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==