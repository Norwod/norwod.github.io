webpackHotUpdate_N_E(1,{

/***/ "./src/components/Catalog.tsx":
/*!************************************!*\
  !*** ./src/components/Catalog.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sberdevices/plasma-ui */ "./node_modules/@sberdevices/plasma-ui/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sberdevices/plasma-ui/utils/deviceDetection */ "./node_modules/@sberdevices/plasma-ui/utils/deviceDetection.js");
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sberdevices_assistant_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sberdevices/assistant-client */ "./node_modules/@sberdevices/assistant-client/dist/index.js");
/* harmony import */ var _sberdevices_assistant_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_assistant_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../consts/routes */ "./src/consts/routes.ts");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Img */ "./src/components/Img.tsx");
/* harmony import */ var _MyHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyHeader */ "./src/components/MyHeader.tsx");
var _jsxFileName = "C:\\Users\\Professional\\Documents\\summer-drink-main\\src\\components\\Catalog.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const heightMap = {
  sberPortal: 247,
  sberBox: 336,
  mobile: 165
};
const StyledCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Card"])`
    margin-bottom: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? 8 : 32}px;

    height: ${heightMap[Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])()]}px;
`;
_c = StyledCard;
const StyledBody1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Body1"])`
    color: rgba(255, 255, 255, 0.56);
    margin-top: 8px;
    margin-bottom: 2px;
    width: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["isSberPortal"])() ? '100px' : '100%'};
    display: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["isSberPortal"])() ? 'inline-block' : 'block'};
`;
const StyledBody3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Body3"])`
    width: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["isSberPortal"])() ? 'calc(100% - 100px)' : '100%'};
    display: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["isSberPortal"])() ? 'inline-block' : 'block'};
`;
const MarginTop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    margin-top: 20px;
`;
const paddingLeft = {
  sberPortal: 12,
  sberBox: 52,
  mobile: 0
};
const RightCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Col"])`
    padding-left: ${paddingLeft[Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])()]}px;
`;

const Half = ({
  children
}) => __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sizeS: 4,
  sizeM: 3,
  sizeL: 4,
  sizeXL: 6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }
}, children);

_c2 = Half;

const Catalog = () => {
  var _window$AssistantHost;

  const initialize = (getState = () => ({})) => {
    return Object(_sberdevices_assistant_client__WEBPACK_IMPORTED_MODULE_5__["createAssistant"])({
      getState
    });
  };

  const assistant = initialize();
  assistant.sendData({
    action: {
      action_id: 'CATALOG'
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_MyHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "\u0411\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u0438",
    onBack: (_window$AssistantHost = window.AssistantHost) === null || _window$AssistantHost === void 0 ? void 0 : _window$AssistantHost.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sizeS: 4,
    sizeM: 4,
    sizeL: 8,
    sizeXL: 8,
    style: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].MOHITO,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'MOHITO'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/mohito.jpg' : '/mohito.jpg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 57
    }
  }, "\u041C\u043E\u0445\u0438\u0442\u043E"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].TROPICAL,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'TROPICAL'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/tropical.jpeg' : '/tropical.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 57
    }
  }, "\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].ORANGE_LEMONADE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'ORANGE_LEMONADE'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/orange_lemonade.jpeg' : '/orange_lemonade.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 57
    }
  }, "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u043B\u0438\u043C\u043E\u043D\u0430\u0434"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].MINT_MILK,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'MINT_MILK'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/myatnoe_moloko_1.jpeg' : '/myatnoe_moloko_1.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 57
    }
  }, "\u041C\u044F\u0442\u043D\u043E\u0435 \u043C\u043E\u043B\u043E\u043A\u043E")))))))), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 29
    }
  }, __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].ICEBERG,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'ICEBERG'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/iceverg.jpeg' : '/iceverg.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 57
    }
  }, "\u0410\u0439\u0441\u0431\u0435\u0440\u0433 \u0432 \u043E\u043A\u0435\u0430\u043D\u0435"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].CHOKOMILK,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'CHOKOMILK'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/chokomilk.jpeg' : '/chokomilk.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 57
    }
  }, "\u041C\u043E\u043B\u043E\u0447\u043D\u043E-\u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].SLAD,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'SLAD'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/slad.png' : '/slad.png',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 57
    }
  }, "\u0421\u043B\u0430\u0434\u043A\u043E\u0435\u0436\u043A\u0430"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].CHAMP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'CHAMP'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/champ.jpeg' : '/champ.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 57
    }
  }, "\u0424\u0430\u043B\u044C\u0448\u0438\u0432\u043E\u0435 \u0448\u0430\u043C\u043F\u0430\u043D\u0441\u043A\u043E\u0435")))))))), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 29
    }
  }, __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].ALE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'ALE'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/ale.jpeg' : '/ale.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 57
    }
  }, "\u0418\u043C\u0431\u0438\u0440\u043D\u044B\u0439 \u044D\u043B\u044C"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].KLEMENT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'KLEMENT'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/klement.jpeg' : '/klement.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 57
    }
  }, "\u0421\u0435\u043D\u0442-\u041A\u043B\u0435\u043C\u0435\u043D\u0442"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].PROSTUDA,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'PROSTUDA'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/prostuda.jpeg' : '/prostuda.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 57
    }
  }, "\u0423\u0434\u0430\u0440 \u043F\u043E \u043F\u0440\u043E\u0441\u0442\u0443\u0434\u0435"))))))), __jsx(Half, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: _consts_routes__WEBPACK_IMPORTED_MODULE_6__["Route"].GOGOL,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 37
    }
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onClick: () => assistant.sendData({
      action: {
        action_id: 'GOGOL'
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 41
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 45
    }
  }, __jsx(_Img__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_4__["detectDevice"])() === 'mobile' ? '/gogol.jpeg' : '/gogol.jpeg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 49
    }
  }), __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    cover: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 49
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 53
    }
  }, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["TextBoxBigTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 57
    }
  }, "\u0413\u043E\u0433\u043E\u043B\u044C-\u043C\u043E\u0433\u043E\u043B\u044C")))))))))))));
};

_c3 = Catalog;
/* harmony default export */ __webpack_exports__["default"] = (Catalog);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledCard");
$RefreshReg$(_c2, "Half");
$RefreshReg$(_c3, "Catalog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy50c3giXSwibmFtZXMiOlsiaGVpZ2h0TWFwIiwic2JlclBvcnRhbCIsInNiZXJCb3giLCJtb2JpbGUiLCJTdHlsZWRDYXJkIiwic3R5bGVkIiwiQ2FyZCIsImRldGVjdERldmljZSIsIlN0eWxlZEJvZHkxIiwiQm9keTEiLCJpc1NiZXJQb3J0YWwiLCJTdHlsZWRCb2R5MyIsIkJvZHkzIiwiTWFyZ2luVG9wIiwiZGl2IiwicGFkZGluZ0xlZnQiLCJSaWdodENvbCIsIkNvbCIsIkhhbGYiLCJjaGlsZHJlbiIsIkNhdGFsb2ciLCJpbml0aWFsaXplIiwiZ2V0U3RhdGUiLCJjcmVhdGVBc3Npc3RhbnQiLCJhc3Npc3RhbnQiLCJzZW5kRGF0YSIsImFjdGlvbiIsImFjdGlvbl9pZCIsIndpbmRvdyIsIkFzc2lzdGFudEhvc3QiLCJjbG9zZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIlJvdXRlIiwiTU9ISVRPIiwiVFJPUElDQUwiLCJPUkFOR0VfTEVNT05BREUiLCJNSU5UX01JTEsiLCJJQ0VCRVJHIiwiQ0hPS09NSUxLIiwiU0xBRCIsIkNIQU1QIiwiQUxFIiwiS0xFTUVOVCIsIlBST1NUVURBIiwiR09HT0wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQWFBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFFQTtBQUNBO0FBR0EsTUFBTUEsU0FBUyxHQUFHO0FBQ2RDLFlBQVUsRUFBRSxHQURFO0FBRWRDLFNBQU8sRUFBRSxHQUZLO0FBR2RDLFFBQU0sRUFBRTtBQUhNLENBQWxCO0FBTUEsTUFBTUMsVUFBVSxHQUFHQyxpRUFBTSxDQUFDQywyREFBRCxDQUFPO0FBQ2hDLHFCQUFxQkMsaUdBQVksT0FBTyxRQUFuQixHQUE4QixDQUE5QixHQUFrQyxFQUFHO0FBQzFEO0FBQ0EsY0FBY1AsU0FBUyxDQUFDTyxpR0FBWSxFQUFiLENBQWlCO0FBQ3hDLENBSkE7S0FBTUgsVTtBQU1OLE1BQU1JLFdBQVcsR0FBR0gsaUVBQU0sQ0FBQ0ksNERBQUQsQ0FBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxhQUFhQyxpR0FBWSxLQUFLLE9BQUwsR0FBZSxNQUFPO0FBQy9DLGVBQWVBLGlHQUFZLEtBQUssY0FBTCxHQUFzQixPQUFRO0FBQ3pELENBTkE7QUFRQSxNQUFNQyxXQUFXLEdBQUdOLGlFQUFNLENBQUNPLDREQUFELENBQVE7QUFDbEMsYUFBYUYsaUdBQVksS0FBSyxvQkFBTCxHQUE0QixNQUFPO0FBQzVELGVBQWVBLGlHQUFZLEtBQUssY0FBTCxHQUFzQixPQUFRO0FBQ3pELENBSEE7QUFLQSxNQUFNRyxTQUFTLEdBQUdSLHlEQUFNLENBQUNTLEdBQUk7QUFDN0I7QUFDQSxDQUZBO0FBSUEsTUFBTUMsV0FBVyxHQUFHO0FBQ2hCZCxZQUFVLEVBQUUsRUFESTtBQUVoQkMsU0FBTyxFQUFFLEVBRk87QUFHaEJDLFFBQU0sRUFBRTtBQUhRLENBQXBCO0FBTUEsTUFBTWEsUUFBUSxHQUFHWCxpRUFBTSxDQUFDWSwwREFBRCxDQUFNO0FBQzdCLG9CQUFvQkYsV0FBVyxDQUFDUixpR0FBWSxFQUFiLENBQWlCO0FBQ2hELENBRkE7O0FBSUEsTUFBTVcsSUFBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ25CLE1BQUMsMERBQUQ7QUFBSyxPQUFLLEVBQUUsQ0FBWjtBQUFlLE9BQUssRUFBRSxDQUF0QjtBQUF5QixPQUFLLEVBQUUsQ0FBaEM7QUFBbUMsUUFBTSxFQUFFLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDS0EsUUFETCxDQURKOztNQUFNRCxJOztBQU1OLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBRWxCLFFBQU1DLFVBQVUsR0FBRyxDQUFDQyxRQUFRLEdBQUcsT0FBTyxFQUFQLENBQVosS0FBMkI7QUFDMUMsV0FBT0MscUZBQWUsQ0FBQztBQUFFRDtBQUFGLEtBQUQsQ0FBdEI7QUFDSCxHQUZEOztBQUdBLFFBQU1FLFNBQVMsR0FBR0gsVUFBVSxFQUE1QjtBQUVBRyxXQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsVUFBTSxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiO0FBQVYsR0FBbkI7QUFFQSxTQUNJLG1FQUNJLE1BQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUMsdUlBQWhCO0FBQTBDLFVBQU0sMkJBQUVDLE1BQU0sQ0FBQ0MsYUFBVCwwREFBRSxzQkFBc0JDLEtBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUlJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsTUFBZDtBQUFzQkMsaUJBQVcsRUFBRTtBQUFuQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUssU0FBSyxFQUFFLENBQVo7QUFBZSxTQUFLLEVBQUUsQ0FBdEI7QUFBeUIsU0FBSyxFQUFFLENBQWhDO0FBQW1DLFVBQU0sRUFBRSxDQUEzQztBQUE4QyxTQUFLLEVBQUU7QUFBRUQsZ0JBQVUsRUFBRSxNQUFkO0FBQXNCQyxpQkFBVyxFQUFFO0FBQW5DLEtBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVDLG9EQUFLLENBQUNDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBWSxZQUFRLE1BQXBCO0FBQXFCLGdCQUFZLE1BQWpDO0FBQWtDLFdBQU8sRUFBRSxNQUFNVixTQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUFWLEtBQW5CLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUssT0FBRyxFQUFFcEIsaUdBQVksT0FBTyxRQUFuQixHQUE4QixhQUE5QixHQUE4QyxhQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURKLENBREosQ0FGSixDQURKLENBREosQ0FESixDQURKLEVBZUksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFMEIsb0RBQUssQ0FBQ0UsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFZLFlBQVEsTUFBcEI7QUFBcUIsZ0JBQVksTUFBakM7QUFBa0MsV0FBTyxFQUFFLE1BQU1YLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQjtBQUFFQyxZQUFNLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiO0FBQVYsS0FBbkIsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBSyxPQUFHLEVBQUVwQixpR0FBWSxPQUFPLFFBQW5CLEdBQThCLGdCQUE5QixHQUFpRCxnQkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxrRUFBRDtBQUFhLFNBQUssTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFESixDQURKLENBRkosQ0FESixDQURKLENBREosQ0FmSixFQTZCSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUwQixvREFBSyxDQUFDRyxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQVksWUFBUSxNQUFwQjtBQUFxQixnQkFBWSxNQUFqQztBQUFrQyxXQUFPLEVBQUUsTUFBTVosU0FBUyxDQUFDQyxRQUFWLENBQW1CO0FBQUVDLFlBQU0sRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWI7QUFBVixLQUFuQixDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFLLE9BQUcsRUFBRXBCLGlHQUFZLE9BQU8sUUFBbkIsR0FBOEIsdUJBQTlCLEdBQXdELHVCQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJIQURKLENBREosQ0FGSixDQURKLENBREosQ0FESixDQTdCSixFQTJDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUwQixvREFBSyxDQUFDSSxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQVksWUFBUSxNQUFwQjtBQUFxQixnQkFBWSxNQUFqQztBQUFrQyxXQUFPLEVBQUUsTUFBTWIsU0FBUyxDQUFDQyxRQUFWLENBQW1CO0FBQUVDLFlBQU0sRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWI7QUFBVixLQUFuQixDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUNJLE9BQUcsRUFDQ3BCLGlHQUFZLE9BQU8sUUFBbkIsR0FBOEIsd0JBQTlCLEdBQXlELHdCQUZqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlGQURKLENBREosQ0FOSixDQURKLENBREosQ0FESixDQTNDSixDQURKLEVBK0RJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTBCLG9EQUFLLENBQUNLLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBWSxZQUFRLE1BQXBCO0FBQXFCLGdCQUFZLE1BQWpDO0FBQWtDLFdBQU8sRUFBRSxNQUFNZCxTQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUFWLEtBQW5CLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQ0ksT0FBRyxFQUNDcEIsaUdBQVksT0FBTyxRQUFuQixHQUE4QixlQUE5QixHQUFnRCxlQUZ4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQURKLENBREosQ0FOSixDQURKLENBREosQ0FESixDQURKLEVBbUJJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTBCLG9EQUFLLENBQUNNLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBWSxZQUFRLE1BQXBCO0FBQXFCLGdCQUFZLE1BQWpDO0FBQWtDLFdBQU8sRUFBRSxNQUFNZixTQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUFWLEtBQW5CLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUssT0FBRyxFQUFFcEIsaUdBQVksT0FBTyxRQUFuQixHQUE4QixpQkFBOUIsR0FBa0QsaUJBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0VBQUQ7QUFBYSxTQUFLLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0tBREosQ0FESixDQUZKLENBREosQ0FESixDQURKLENBbkJKLEVBaUNJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTBCLG9EQUFLLENBQUNPLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBWSxZQUFRLE1BQXBCO0FBQXFCLGdCQUFZLE1BQWpDO0FBQWtDLFdBQU8sRUFBRSxNQUFNaEIsU0FBUyxDQUFDQyxRQUFWLENBQW1CO0FBQUVDLFlBQU0sRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWI7QUFBVixLQUFuQixDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFLLE9BQUcsRUFBRXBCLGlHQUFZLE9BQU8sUUFBbkIsR0FBOEIsV0FBOUIsR0FBNEMsV0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxrRUFBRDtBQUFhLFNBQUssTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFESixDQURKLENBRkosQ0FESixDQURKLENBREosQ0FqQ0osRUErQ0ksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFMEIsb0RBQUssQ0FBQ1EsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFZLFlBQVEsTUFBcEI7QUFBcUIsZ0JBQVksTUFBakM7QUFBa0MsV0FBTyxFQUFFLE1BQU1qQixTQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUFWLEtBQW5CLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQ0ksT0FBRyxFQUNDcEIsaUdBQVksT0FBTyxRQUFuQixHQUE4QixhQUE5QixHQUE4QyxhQUZ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJIQURKLENBREosQ0FOSixDQURKLENBREosQ0FESixDQS9DSixDQS9ESixFQWlJSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUwQixvREFBSyxDQUFDUyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQVksWUFBUSxNQUFwQjtBQUFxQixnQkFBWSxNQUFqQztBQUFrQyxXQUFPLEVBQUUsTUFBTWxCLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQjtBQUFFQyxZQUFNLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiO0FBQVYsS0FBbkIsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFDSSxPQUFHLEVBQ0NwQixpR0FBWSxPQUFPLFFBQW5CLEdBQThCLFdBQTlCLEdBQTRDLFdBRnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU1JLE1BQUMsa0VBQUQ7QUFBYSxTQUFLLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBREosQ0FESixDQU5KLENBREosQ0FESixDQURKLENBREosRUFtQkksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFMEIsb0RBQUssQ0FBQ1UsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFZLFlBQVEsTUFBcEI7QUFBcUIsZ0JBQVksTUFBakM7QUFBa0MsV0FBTyxFQUFFLE1BQU1uQixTQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUFWLEtBQW5CLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUssT0FBRyxFQUFFcEIsaUdBQVksT0FBTyxRQUFuQixHQUE4QixlQUE5QixHQUFnRCxlQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQURKLENBREosQ0FGSixDQURKLENBREosQ0FESixDQW5CSixFQWlDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUwQixvREFBSyxDQUFDVyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxVQUFEO0FBQVksWUFBUSxNQUFwQjtBQUFxQixnQkFBWSxNQUFqQztBQUFrQyxXQUFPLEVBQUUsTUFBTXBCLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQjtBQUFFQyxZQUFNLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiO0FBQVYsS0FBbkIsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBSyxPQUFHLEVBQUVwQixpR0FBWSxPQUFPLFFBQW5CLEdBQThCLGdCQUE5QixHQUFpRCxnQkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxrRUFBRDtBQUFhLFNBQUssTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RkFESixDQURKLENBRkosQ0FESixDQURKLENBREosQ0FqQ0osRUErQ0ksTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFMEIsb0RBQUssQ0FBQ1ksS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsVUFBRDtBQUFZLFlBQVEsTUFBcEI7QUFBcUIsZ0JBQVksTUFBakM7QUFBa0MsV0FBTyxFQUFFLE1BQU1yQixTQUFTLENBQUNDLFFBQVYsQ0FBbUI7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUFWLEtBQW5CLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQ0ksT0FBRyxFQUNDcEIsaUdBQVksT0FBTyxRQUFuQixHQUE4QixhQUE5QixHQUE4QyxhQUZ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLGtFQUFEO0FBQWEsU0FBSyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlGQURKLENBREosQ0FOSixDQURKLENBREosQ0FESixDQS9DSixDQWpJSixDQURKLENBRkosQ0FESixDQUpKLENBREo7QUFvTkgsQ0E3TkQ7O01BQU1hLE87QUErTlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuY2E2NmFiMjU2YTcyM2NjNTNkMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIEZDLFxuICAgIG1lbW8sXG4gICAgdXNlUmVkdWNlcixcbiAgICB1c2VTdGF0ZSxcbiAgICB1c2VSZWYsXG4gICAgdXNlRWZmZWN0LFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgQ29udGFpbmVyLFxuICAgIFJvdyxcbiAgICBUZXh0Qm94LFxuICAgIENvbCxcbiAgICBDYXJkLFxuICAgIENhcmRDb250ZW50LFxuICAgIENhcmRCb2R5LFxuICAgIFRleHRCb3hCaWdUaXRsZSxcbiAgICBIZWFkbGluZTIsXG4gICAgQm9keTEsXG4gICAgQm9keTMsXG59IGZyb20gJ0BzYmVyZGV2aWNlcy9wbGFzbWEtdWknO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGV0ZWN0RGV2aWNlLCBpc1NiZXJQb3J0YWwgfSBmcm9tICdAc2JlcmRldmljZXMvcGxhc21hLXVpL3V0aWxzL2RldmljZURldGVjdGlvbic7XG5cblxuaW1wb3J0IHtcbiAgICBjcmVhdGVTbWFydGFwcERlYnVnZ2VyLFxuICAgIGNyZWF0ZUFzc2lzdGFudCxcbiAgICBBc3Npc3RhbnRBcHBTdGF0ZSxcbn0gZnJvbSBcIkBzYmVyZGV2aWNlcy9hc3Npc3RhbnQtY2xpZW50XCI7XG5cbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi4vY29uc3RzL3JvdXRlcyc7XG5cbmltcG9ydCBJbWcgZnJvbSAnLi9JbWcnO1xuaW1wb3J0IE15SGVhZGVyIGZyb20gJy4vTXlIZWFkZXInO1xuaW1wb3J0IHsgdXNlQXNzaXN0YW50IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUFzc2lzdGFudFwiO1xuXG5jb25zdCBoZWlnaHRNYXAgPSB7XG4gICAgc2JlclBvcnRhbDogMjQ3LFxuICAgIHNiZXJCb3g6IDMzNixcbiAgICBtb2JpbGU6IDE2NSxcbn07XG5cbmNvbnN0IFN0eWxlZENhcmQgPSBzdHlsZWQoQ2FyZClgXG4gICAgbWFyZ2luLWJvdHRvbTogJHtkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyA4IDogMzJ9cHg7XG5cbiAgICBoZWlnaHQ6ICR7aGVpZ2h0TWFwW2RldGVjdERldmljZSgpXX1weDtcbmA7XG5cbmNvbnN0IFN0eWxlZEJvZHkxID0gc3R5bGVkKEJvZHkxKWBcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIHdpZHRoOiAke2lzU2JlclBvcnRhbCgpID8gJzEwMHB4JyA6ICcxMDAlJ307XG4gICAgZGlzcGxheTogJHtpc1NiZXJQb3J0YWwoKSA/ICdpbmxpbmUtYmxvY2snIDogJ2Jsb2NrJ307XG5gO1xuXG5jb25zdCBTdHlsZWRCb2R5MyA9IHN0eWxlZChCb2R5MylgXG4gICAgd2lkdGg6ICR7aXNTYmVyUG9ydGFsKCkgPyAnY2FsYygxMDAlIC0gMTAwcHgpJyA6ICcxMDAlJ307XG4gICAgZGlzcGxheTogJHtpc1NiZXJQb3J0YWwoKSA/ICdpbmxpbmUtYmxvY2snIDogJ2Jsb2NrJ307XG5gO1xuXG5jb25zdCBNYXJnaW5Ub3AgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5gO1xuXG5jb25zdCBwYWRkaW5nTGVmdCA9IHtcbiAgICBzYmVyUG9ydGFsOiAxMixcbiAgICBzYmVyQm94OiA1MixcbiAgICBtb2JpbGU6IDAsXG59O1xuXG5jb25zdCBSaWdodENvbCA9IHN0eWxlZChDb2wpYFxuICAgIHBhZGRpbmctbGVmdDogJHtwYWRkaW5nTGVmdFtkZXRlY3REZXZpY2UoKV19cHg7XG5gO1xuXG5jb25zdCBIYWxmOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8Q29sIHNpemVTPXs0fSBzaXplTT17M30gc2l6ZUw9ezR9IHNpemVYTD17Nn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbD5cbik7XG5cbmNvbnN0IENhdGFsb2cgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBpbml0aWFsaXplID0gKGdldFN0YXRlID0gKCkgPT4gKHt9KSkgPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlQXNzaXN0YW50KHsgZ2V0U3RhdGUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBhc3Npc3RhbnQgPSBpbml0aWFsaXplKCk7XG5cbiAgICBhc3Npc3RhbnQuc2VuZERhdGEoeyBhY3Rpb246IHsgYWN0aW9uX2lkOiAnQ0FUQUxPRycgfSB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TXlIZWFkZXIgbGFiZWw9XCLQkdC10LfQsNC70LrQvtCz0L7Qu9GM0L3Ri9C1INC60L7QutGC0LXQudC70LhcIiBvbkJhY2s9e3dpbmRvdy5Bc3Npc3RhbnRIb3N0Py5jbG9zZX0gLz5cblxuICAgICAgICAgICAgey8qIDxDb250YWluZXI+e2RldGVjdERldmljZSgpID09PSAnbW9iaWxlJyAmJiA8TG9nbyAvPn08L0NvbnRhaW5lcj4gKi99XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNpemVTPXs0fSBzaXplTT17NH0gc2l6ZUw9ezh9IHNpemVYTD17OH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Um91dGUuTU9ISVRPfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZCBvdXRsaW5lZCBzY2FsZU9uRm9jdXMgb25DbGljaz17KCkgPT4gYXNzaXN0YW50LnNlbmREYXRhKHsgYWN0aW9uOiB7IGFjdGlvbl9pZDogJ01PSElUTycgfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXtkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyAnL21vaGl0by5qcGcnIDogJy9tb2hpdG8uanBnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRCb3hCaWdUaXRsZT7QnNC+0YXQuNGC0L48L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLlRST1BJQ0FMfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZCBvdXRsaW5lZCBzY2FsZU9uRm9jdXMgb25DbGljaz17KCkgPT4gYXNzaXN0YW50LnNlbmREYXRhKHsgYWN0aW9uOiB7IGFjdGlvbl9pZDogJ1RST1BJQ0FMJyB9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e2RldGVjdERldmljZSgpID09PSAnbW9iaWxlJyA/ICcvdHJvcGljYWwuanBlZycgOiAnL3Ryb3BpY2FsLmpwZWcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveEJpZ1RpdGxlPtCi0YDQvtC/0LjRh9C10YHQutC40Lk8L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLk9SQU5HRV9MRU1PTkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmQgb3V0bGluZWQgc2NhbGVPbkZvY3VzIG9uQ2xpY2s9eygpID0+IGFzc2lzdGFudC5zZW5kRGF0YSh7IGFjdGlvbjogeyBhY3Rpb25faWQ6ICdPUkFOR0VfTEVNT05BREUnIH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17ZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnID8gJy9vcmFuZ2VfbGVtb25hZGUuanBlZycgOiAnL29yYW5nZV9sZW1vbmFkZS5qcGVnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRCb3hCaWdUaXRsZT7QkNC/0LXQu9GM0YHQuNC90L7QstGL0Lkg0LvQuNC80L7QvdCw0LQ8L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLk1JTlRfTUlMS30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmQgb3V0bGluZWQgc2NhbGVPbkZvY3VzIG9uQ2xpY2s9eygpID0+IGFzc2lzdGFudC5zZW5kRGF0YSh7IGFjdGlvbjogeyBhY3Rpb25faWQ6ICdNSU5UX01JTEsnIH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnID8gJy9teWF0bm9lX21vbG9rb18xLmpwZWcnIDogJy9teWF0bm9lX21vbG9rb18xLmpwZWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRCb3hCaWdUaXRsZT7QnNGP0YLQvdC+0LUg0LzQvtC70L7QutC+PC9UZXh0Qm94QmlnVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLklDRUJFUkd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkIG91dGxpbmVkIHNjYWxlT25Gb2N1cyBvbkNsaWNrPXsoKSA9PiBhc3Npc3RhbnQuc2VuZERhdGEoeyBhY3Rpb246IHsgYWN0aW9uX2lkOiAnSUNFQkVSRycgfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyAnL2ljZXZlcmcuanBlZycgOiAnL2ljZXZlcmcuanBlZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveEJpZ1RpdGxlPtCQ0LnRgdCx0LXRgNCzINCyINC+0LrQtdCw0L3QtTwvVGV4dEJveEJpZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hhbGY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Um91dGUuQ0hPS09NSUxLfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZCBvdXRsaW5lZCBzY2FsZU9uRm9jdXMgb25DbGljaz17KCkgPT4gYXNzaXN0YW50LnNlbmREYXRhKHsgYWN0aW9uOiB7IGFjdGlvbl9pZDogJ0NIT0tPTUlMSycgfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXtkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyAnL2Nob2tvbWlsay5qcGVnJyA6ICcvY2hva29taWxrLmpwZWcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveEJpZ1RpdGxlPtCc0L7Qu9C+0YfQvdC+LdGI0L7QutC+0LvQsNC00L3Ri9C5INC60L7QutGC0LXQudC70Yw8L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLlNMQUR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkIG91dGxpbmVkIHNjYWxlT25Gb2N1cyBvbkNsaWNrPXsoKSA9PiBhc3Npc3RhbnQuc2VuZERhdGEoeyBhY3Rpb246IHsgYWN0aW9uX2lkOiAnU0xBRCcgfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXtkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyAnL3NsYWQucG5nJyA6ICcvc2xhZC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveEJpZ1RpdGxlPtCh0LvQsNC00LrQvtC10LbQutCwPC9UZXh0Qm94QmlnVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhhbGY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtSb3V0ZS5DSEFNUH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmQgb3V0bGluZWQgc2NhbGVPbkZvY3VzIG9uQ2xpY2s9eygpID0+IGFzc2lzdGFudC5zZW5kRGF0YSh7IGFjdGlvbjogeyBhY3Rpb25faWQ6ICdDSEFNUCcgfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyAnL2NoYW1wLmpwZWcnIDogJy9jaGFtcC5qcGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY292ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94QmlnVGl0bGU+0KTQsNC70YzRiNC40LLQvtC1INGI0LDQvNC/0LDQvdGB0LrQvtC1PC9UZXh0Qm94QmlnVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLkFMRX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENhcmQgb3V0bGluZWQgc2NhbGVPbkZvY3VzIG9uQ2xpY2s9eygpID0+IGFzc2lzdGFudC5zZW5kRGF0YSh7IGFjdGlvbjogeyBhY3Rpb25faWQ6ICdBTEUnIH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnID8gJy9hbGUuanBlZycgOiAnL2FsZS5qcGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY292ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94QmlnVGl0bGU+0JjQvNCx0LjRgNC90YvQuSDRjdC70Yw8L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLktMRU1FTlR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkIG91dGxpbmVkIHNjYWxlT25Gb2N1cyBvbkNsaWNrPXsoKSA9PiBhc3Npc3RhbnQuc2VuZERhdGEoeyBhY3Rpb246IHsgYWN0aW9uX2lkOiAnS0xFTUVOVCcgfSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXtkZXRlY3REZXZpY2UoKSA9PT0gJ21vYmlsZScgPyAnL2tsZW1lbnQuanBlZycgOiAnL2tsZW1lbnQuanBlZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY292ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94QmlnVGl0bGU+0KHQtdC90YIt0JrQu9C10LzQtdC90YI8L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGFsZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlLlBST1NUVURBfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2FyZCBvdXRsaW5lZCBzY2FsZU9uRm9jdXMgb25DbGljaz17KCkgPT4gYXNzaXN0YW50LnNlbmREYXRhKHsgYWN0aW9uOiB7IGFjdGlvbl9pZDogJ1BST1NUVURBJyB9IH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9e2RldGVjdERldmljZSgpID09PSAnbW9iaWxlJyA/ICcvcHJvc3R1ZGEuanBlZycgOiAnL3Byb3N0dWRhLmpwZWcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveEJpZ1RpdGxlPtCj0LTQsNGAINC/0L4g0L/RgNC+0YHRgtGD0LTQtTwvVGV4dEJveEJpZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hhbGY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Um91dGUuR09HT0x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRDYXJkIG91dGxpbmVkIHNjYWxlT25Gb2N1cyBvbkNsaWNrPXsoKSA9PiBhc3Npc3RhbnQuc2VuZERhdGEoeyBhY3Rpb246IHsgYWN0aW9uX2lkOiAnR09HT0wnIH0gfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0RGV2aWNlKCkgPT09ICdtb2JpbGUnID8gJy9nb2dvbC5qcGVnJyA6ICcvZ29nb2wuanBlZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEJveEJpZ1RpdGxlPtCT0L7Qs9C+0LvRjC3QvNC+0LPQvtC70Yw8L1RleHRCb3hCaWdUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IYWxmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=