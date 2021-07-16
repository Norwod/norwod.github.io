exports.ids = [22];
exports.modules = {

/***/ "//ZD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });
let Route;

(function (Route) {
  Route["INDEX"] = "/";
  Route["MOHITO"] = "/mohito";
  Route["TROPICAL"] = "/tropical";
  Route["ORANGE_LEMONADE"] = "/orange_lemonade";
  Route["MINT_MILK"] = "/mint_milk";
  Route["ICEBERG"] = "/iceberg";
  Route["CHOKOMILK"] = "/chokomilk";
  Route["SLAD"] = "/slad";
  Route["CHAMP"] = "/champ";
  Route["ALE"] = "/ale";
  Route["KLEMENT"] = "/klement";
  Route["PROSTUDA"] = "/prostuda";
  Route["GOGOL"] = "/gogol";
})(Route || (Route = {}));

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "KdaB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Root", function() { return /* binding */ Root; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@sberdevices/plasma-ui/utils/deviceDetection"
var deviceDetection_ = __webpack_require__("0QV9");

// EXTERNAL MODULE: external "@sberdevices/spatial-navigation"
var spatial_navigation_ = __webpack_require__("3y+F");

// EXTERNAL MODULE: ./node_modules/@sberdevices/assistant-client/dist/index.js
var dist = __webpack_require__("NbAz");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/consts/routes.ts
var routes = __webpack_require__("//ZD");

// CONCATENATED MODULE: ./src/hooks/useAssistant.ts





const initialize = (getState = () => ({})) => {
  return Object(dist["createAssistant"])({
    getState
  });
};

const processMessage = message => {
  var _message$action;

  const map = {
    // eslint-disable-next-line
    goto_catalog: routes["a" /* Route */].INDEX,
    // eslint-disable-next-line    
    goto_mohito: routes["a" /* Route */].MOHITO,
    // eslint-disable-next-line
    goto_tropical: routes["a" /* Route */].TROPICAL,
    // eslint-disable-next-line
    goto_orangelemonade: routes["a" /* Route */].ORANGE_LEMONADE,
    // eslint-disable-next-line
    goto_mintmilk: routes["a" /* Route */].MINT_MILK,
    // eslint-disable-next-line
    goto_iceberg: routes["a" /* Route */].ICEBERG,
    // eslint-disable-next-line
    goto_chokomilk: routes["a" /* Route */].CHOKOMILK,
    // eslint-disable-next-line
    goto_slad: routes["a" /* Route */].SLAD,
    // eslint-disable-next-line
    goto_champ: routes["a" /* Route */].CHAMP,
    // eslint-disable-next-line
    goto_ale: routes["a" /* Route */].ALE,
    // eslint-disable-next-line
    goto_klement: routes["a" /* Route */].KLEMENT,
    // eslint-disable-next-line
    goto_prostuda: routes["a" /* Route */].PROSTUDA,
    // eslint-disable-next-line
    goto_gogol: routes["a" /* Route */].GOGOL
  }; // @ts-ignore

  const route = map[message === null || message === void 0 ? void 0 : (_message$action = message.action) === null || _message$action === void 0 ? void 0 : _message$action.type];

  if (route) {
    var _Router$router;

    (_Router$router = router_default.a.router) === null || _Router$router === void 0 ? void 0 : _Router$router.push(route);
  }
};

const useAssistant = () => {
  Object(external_react_["useEffect"])(() => {
    const assistant = initialize();
    assistant.on('data', processMessage);
  }, []);
};
// EXTERNAL MODULE: external "@sberdevices/plasma-ui"
var plasma_ui_ = __webpack_require__("BsWs");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/components/Img.tsx
var Img = __webpack_require__("eK0j");

// EXTERNAL MODULE: ./src/components/MyHeader.tsx
var MyHeader = __webpack_require__("YAxo");

// CONCATENATED MODULE: ./src/components/Catalog.tsx
var __jsx = external_react_default.a.createElement;









const heightMap = {
  sberPortal: 247,
  sberBox: 336,
  mobile: 165
};
const StyledCard = external_styled_components_default()(plasma_ui_["Card"])`
    margin-bottom: ${Object(deviceDetection_["detectDevice"])() === 'mobile' ? 8 : 32}px;

    height: ${heightMap[Object(deviceDetection_["detectDevice"])()]}px;
`;
const StyledBody1 = external_styled_components_default()(plasma_ui_["Body1"])`
    color: rgba(255, 255, 255, 0.56);
    margin-top: 8px;
    margin-bottom: 2px;
    width: ${Object(deviceDetection_["isSberPortal"])() ? '100px' : '100%'};
    display: ${Object(deviceDetection_["isSberPortal"])() ? 'inline-block' : 'block'};
`;
const StyledBody3 = external_styled_components_default()(plasma_ui_["Body3"])`
    width: ${Object(deviceDetection_["isSberPortal"])() ? 'calc(100% - 100px)' : '100%'};
    display: ${Object(deviceDetection_["isSberPortal"])() ? 'inline-block' : 'block'};
`;
const MarginTop = external_styled_components_default.a.div`
    margin-top: 20px;
`;
const paddingLeft = {
  sberPortal: 12,
  sberBox: 52,
  mobile: 0
};
const RightCol = external_styled_components_default()(plasma_ui_["Col"])`
    padding-left: ${paddingLeft[Object(deviceDetection_["detectDevice"])()]}px;
`;

const Half = ({
  children
}) => __jsx(plasma_ui_["Col"], {
  sizeS: 4,
  sizeM: 3,
  sizeL: 4,
  sizeXL: 6
}, children);

const initializeAssistant = getState => {
  if (false) { var _process$env$REACT_AP; }

  return Object(dist["createAssistant"])({
    getState
  });
};

const Catalog = () => {
  var _window$AssistantHost;

  const assistantStateRef = Object(external_react_["useRef"])();
  const assistantRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current);
    assistantRef.current.on("data", ({
      action
    }) => {
      if (action) {}
    });
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(MyHeader["a" /* default */], {
    label: "\u0411\u0435\u0437\u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u0438",
    onBack: (_window$AssistantHost = window.AssistantHost) === null || _window$AssistantHost === void 0 ? void 0 : _window$AssistantHost.close
  }), __jsx(plasma_ui_["Container"], null, __jsx("div", {
    style: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, __jsx(plasma_ui_["Row"], null, __jsx(plasma_ui_["Col"], {
    sizeS: 4,
    sizeM: 4,
    sizeL: 8,
    sizeXL: 8
  }, __jsx(plasma_ui_["Row"], null, __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].MOHITO
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true,
    onChange: () => {
      var _assistantRef$current;

      return (_assistantRef$current = assistantRef.current) === null || _assistantRef$current === void 0 ? void 0 : _assistantRef$current.sendData({
        action: {
          type: 'MOHITO'
        }
      });
    }
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/mohito.jpg' : '/mohito.jpg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u041C\u043E\u0445\u0438\u0442\u043E"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].TROPICAL
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/tropical.jpeg' : '/tropical.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0422\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].ORANGE_LEMONADE
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/orange_lemonade.jpeg' : '/orange_lemonade.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D\u043E\u0432\u044B\u0439 \u043B\u0438\u043C\u043E\u043D\u0430\u0434"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].MINT_MILK
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/myatnoe_moloko_1.jpeg' : '/myatnoe_moloko_1.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u041C\u044F\u0442\u043D\u043E\u0435 \u043C\u043E\u043B\u043E\u043A\u043E")))))))), __jsx(plasma_ui_["Row"], null, __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].ICEBERG
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/iceverg.jpeg' : '/iceverg.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0410\u0439\u0441\u0431\u0435\u0440\u0433 \u0432 \u043E\u043A\u0435\u0430\u043D\u0435"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].CHOKOMILK
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/chokomilk.jpeg' : '/chokomilk.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u041C\u043E\u043B\u043E\u0447\u043D\u043E-\u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043D\u044B\u0439 \u043A\u043E\u043A\u0442\u0435\u0439\u043B\u044C"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].SLAD
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/slad.png' : '/slad.png'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0421\u043B\u0430\u0434\u043A\u043E\u0435\u0436\u043A\u0430"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].CHAMP
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/champ.jpeg' : '/champ.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0424\u0430\u043B\u044C\u0448\u0438\u0432\u043E\u0435 \u0448\u0430\u043C\u043F\u0430\u043D\u0441\u043A\u043E\u0435")))))))), __jsx(plasma_ui_["Row"], null, __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].ALE
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/ale.jpeg' : '/ale.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0418\u043C\u0431\u0438\u0440\u043D\u044B\u0439 \u044D\u043B\u044C"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].KLEMENT
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/klement.jpeg' : '/klement.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0421\u0435\u043D\u0442-\u041A\u043B\u0435\u043C\u0435\u043D\u0442"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].PROSTUDA
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/prostuda.jpeg' : '/prostuda.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0423\u0434\u0430\u0440 \u043F\u043E \u043F\u0440\u043E\u0441\u0442\u0443\u0434\u0435"))))))), __jsx(Half, null, __jsx(link_default.a, {
    href: routes["a" /* Route */].GOGOL
  }, __jsx(StyledCard, {
    outlined: true,
    scaleOnFocus: true
  }, __jsx(plasma_ui_["CardBody"], null, __jsx(Img["a" /* default */], {
    src: Object(deviceDetection_["detectDevice"])() === 'mobile' ? '/gogol.jpeg' : '/gogol.jpeg'
  }), __jsx(plasma_ui_["CardContent"], {
    cover: true
  }, __jsx(plasma_ui_["TextBox"], null, __jsx(plasma_ui_["TextBoxBigTitle"], null, "\u0413\u043E\u0433\u043E\u043B\u044C-\u043C\u043E\u0433\u043E\u043B\u044C")))))))))))));
};

/* harmony default export */ var components_Catalog = (Catalog);
// EXTERNAL MODULE: ./src/components/Layout.tsx + 1 modules
var Layout = __webpack_require__("soUV");

// CONCATENATED MODULE: ./src/components/Root.tsx
var Root_jsx = external_react_default.a.createElement;






const Root = () => {
  useAssistant();
  return Root_jsx(Layout["b" /* default */], {
    noPadding: Object(deviceDetection_["isSberPortal"])()
  }, Root_jsx(components_Catalog, null));
};
/* harmony default export */ var components_Root = __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "NbAz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.initializeDebugging=initializeDebugging;exports.initializeAssistantSDK=exports.createVoicePlayer=exports.createVoiceListener=exports.createSpeechRecognizer=exports.createSmartappDebugger=exports.createRecordPlayer=exports.createOnlineRecordPlayer=exports.createMusicRecognizer=exports.createClient=exports.createAssistantHostMockWithRecord=exports.createAssistantHostMock=exports.createAssistantDev=exports.createAssistant=exports.VpsVersion=exports.MessageNames=void 0;var _react=_interopRequireWildcard(__webpack_require__("cDcd"));var _reactDom=__webpack_require__("faye");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}}function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r;}// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues=typeof crypto!='undefined'&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!='undefined'&&typeof msCrypto.getRandomValues=='function'&&msCrypto.getRandomValues.bind(msCrypto);var rnds8=new Uint8Array(16);// eslint-disable-line no-undef
function rng(){if(!getRandomValues){throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');}return getRandomValues(rnds8);}/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */var byteToHex=[];for(var i=0;i<256;++i){byteToHex[i]=(i+0x100).toString(16).substr(1);}function bytesToUuid(buf,offset){var i=offset||0;var bth=byteToHex;// join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
return[bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],'-',bth[buf[i++]],bth[buf[i++]],'-',bth[buf[i++]],bth[buf[i++]],'-',bth[buf[i++]],bth[buf[i++]],'-',bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]]].join('');}function v4(options,buf,offset){var i=buf&&offset||0;if(typeof options=='string'){buf=options==='binary'?new Array(16):null;options=null;}options=options||{};var rnds=options.random||(options.rng||rng)();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
rnds[6]=rnds[6]&0x0f|0x40;rnds[8]=rnds[8]&0x3f|0x80;// Copy bytes to buffer, if provided
if(buf){for(var ii=0;ii<16;++ii){buf[i+ii]=rnds[ii];}}return buf||bytesToUuid(rnds);}var createNanoEvents=function(){var events={};var emit=function(event){var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}for(var _a=0,_b=events[event]||[];_a<_b.length;_a++){var listener=_b[_a];listener.apply(void 0,args);}};var on=function(event,cb){(events[event]=events[event]||[]).push(cb);return function(){events[event]=events[event].filter(function(i){return i!==cb;});};};var once=function(event,cb){// eslint-disable-next-line
// @ts-ignore И вот тут я сдался
var off=on(event,function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}cb.apply(void 0,args);off();});return off;};var clear=function(){events={};};return{events:events,emit:emit,on:on,once:once,clear:clear};};var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:false?undefined:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};function createCommonjsModule(fn,basedir,module){return module={path:basedir,exports:{},require:function(path,base){return commonjsRequire(path,base===undefined||base===null?module.path:base);}},fn(module,module.exports),module.exports;}function commonjsRequire(){throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');}var aspromise=asPromise;/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */ /**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */function asPromise(fn,ctx/*, varargs */){var params=new Array(arguments.length-1),offset=0,index=2,pending=true;while(index<arguments.length)params[offset++]=arguments[index++];return new Promise(function executor(resolve,reject){params[offset]=function callback(err/*, varargs */){if(pending){pending=false;if(err)reject(err);else{var params=new Array(arguments.length-1),offset=0;while(offset<params.length)params[offset++]=arguments[offset];resolve.apply(null,params);}}};try{fn.apply(ctx||null,params);}catch(err){if(pending){pending=false;reject(err);}}});}var base64_1=createCommonjsModule(function(module,exports){/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */var base64=exports;/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */base64.length=function length(string){var p=string.length;if(!p)return 0;var n=0;while(--p%4>1&&string.charAt(p)==="=")++n;return Math.ceil(string.length*3)/4-n;};// Base64 encoding table
var b64=new Array(64);// Base64 decoding table
var s64=new Array(123);// 65..90, 97..122, 48..57, 43, 47
for(var i=0;i<64;)s64[b64[i]=i<26?i+65:i<52?i+71:i<62?i-4:i-59|43]=i++;/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */base64.encode=function encode(buffer,start,end){var parts=null,chunk=[];var i=0,// output index
j=0,// goto index
t;// temporary
while(start<end){var b=buffer[start++];switch(j){case 0:chunk[i++]=b64[b>>2];t=(b&3)<<4;j=1;break;case 1:chunk[i++]=b64[t|b>>4];t=(b&15)<<2;j=2;break;case 2:chunk[i++]=b64[t|b>>6];chunk[i++]=b64[b&63];j=0;break;}if(i>8191){(parts||(parts=[])).push(String.fromCharCode.apply(String,chunk));i=0;}}if(j){chunk[i++]=b64[t];chunk[i++]=61;if(j===1)chunk[i++]=61;}if(parts){if(i)parts.push(String.fromCharCode.apply(String,chunk.slice(0,i)));return parts.join("");}return String.fromCharCode.apply(String,chunk.slice(0,i));};var invalidEncoding="invalid encoding";/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */base64.decode=function decode(string,buffer,offset){var start=offset;var j=0,// goto index
t;// temporary
for(var i=0;i<string.length;){var c=string.charCodeAt(i++);if(c===61&&j>1)break;if((c=s64[c])===undefined)throw Error(invalidEncoding);switch(j){case 0:t=c;j=1;break;case 1:buffer[offset++]=t<<2|(c&48)>>4;t=c;j=2;break;case 2:buffer[offset++]=(t&15)<<4|(c&60)>>2;t=c;j=3;break;case 3:buffer[offset++]=(t&3)<<6|c;j=0;break;}}if(j===1)throw Error(invalidEncoding);return offset-start;};/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */base64.test=function test(string){return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);};});var eventemitter=EventEmitter;/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */function EventEmitter(){/**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */this._listeners={};}/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */EventEmitter.prototype.on=function on(evt,fn,ctx){(this._listeners[evt]||(this._listeners[evt]=[])).push({fn:fn,ctx:ctx||this});return this;};/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */EventEmitter.prototype.off=function off(evt,fn){if(evt===undefined)this._listeners={};else{if(fn===undefined)this._listeners[evt]=[];else{var listeners=this._listeners[evt];for(var i=0;i<listeners.length;)if(listeners[i].fn===fn)listeners.splice(i,1);else++i;}}return this;};/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */EventEmitter.prototype.emit=function emit(evt){var listeners=this._listeners[evt];if(listeners){var args=[],i=1;for(;i<arguments.length;)args.push(arguments[i++]);for(i=0;i<listeners.length;)listeners[i].fn.apply(listeners[i++].ctx,args);}return this;};var float_1=factory(factory);/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */ /**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ // Factory function for the purpose of node-based testing in modified global environments
function factory(exports){// float: typed array
if(typeof Float32Array!=="undefined")(function(){var f32=new Float32Array([-0]),f8b=new Uint8Array(f32.buffer),le=f8b[3]===128;function writeFloat_f32_cpy(val,buf,pos){f32[0]=val;buf[pos]=f8b[0];buf[pos+1]=f8b[1];buf[pos+2]=f8b[2];buf[pos+3]=f8b[3];}function writeFloat_f32_rev(val,buf,pos){f32[0]=val;buf[pos]=f8b[3];buf[pos+1]=f8b[2];buf[pos+2]=f8b[1];buf[pos+3]=f8b[0];}/* istanbul ignore next */exports.writeFloatLE=le?writeFloat_f32_cpy:writeFloat_f32_rev;/* istanbul ignore next */exports.writeFloatBE=le?writeFloat_f32_rev:writeFloat_f32_cpy;function readFloat_f32_cpy(buf,pos){f8b[0]=buf[pos];f8b[1]=buf[pos+1];f8b[2]=buf[pos+2];f8b[3]=buf[pos+3];return f32[0];}function readFloat_f32_rev(buf,pos){f8b[3]=buf[pos];f8b[2]=buf[pos+1];f8b[1]=buf[pos+2];f8b[0]=buf[pos+3];return f32[0];}/* istanbul ignore next */exports.readFloatLE=le?readFloat_f32_cpy:readFloat_f32_rev;/* istanbul ignore next */exports.readFloatBE=le?readFloat_f32_rev:readFloat_f32_cpy;// float: ieee754
})();else(function(){function writeFloat_ieee754(writeUint,val,buf,pos){var sign=val<0?1:0;if(sign)val=-val;if(val===0)writeUint(1/val>0?/* positive */0:/* negative 0 */2147483648,buf,pos);else if(isNaN(val))writeUint(2143289344,buf,pos);else if(val>3.4028234663852886e+38)// +-Infinity
writeUint((sign<<31|2139095040)>>>0,buf,pos);else if(val<1.1754943508222875e-38)// denormal
writeUint((sign<<31|Math.round(val/1.401298464324817e-45))>>>0,buf,pos);else{var exponent=Math.floor(Math.log(val)/Math.LN2),mantissa=Math.round(val*Math.pow(2,-exponent)*8388608)&8388607;writeUint((sign<<31|exponent+127<<23|mantissa)>>>0,buf,pos);}}exports.writeFloatLE=writeFloat_ieee754.bind(null,writeUintLE);exports.writeFloatBE=writeFloat_ieee754.bind(null,writeUintBE);function readFloat_ieee754(readUint,buf,pos){var uint=readUint(buf,pos),sign=(uint>>31)*2+1,exponent=uint>>>23&255,mantissa=uint&8388607;return exponent===255?mantissa?NaN:sign*Infinity:exponent===0// denormal
?sign*1.401298464324817e-45*mantissa:sign*Math.pow(2,exponent-150)*(mantissa+8388608);}exports.readFloatLE=readFloat_ieee754.bind(null,readUintLE);exports.readFloatBE=readFloat_ieee754.bind(null,readUintBE);})();// double: typed array
if(typeof Float64Array!=="undefined")(function(){var f64=new Float64Array([-0]),f8b=new Uint8Array(f64.buffer),le=f8b[7]===128;function writeDouble_f64_cpy(val,buf,pos){f64[0]=val;buf[pos]=f8b[0];buf[pos+1]=f8b[1];buf[pos+2]=f8b[2];buf[pos+3]=f8b[3];buf[pos+4]=f8b[4];buf[pos+5]=f8b[5];buf[pos+6]=f8b[6];buf[pos+7]=f8b[7];}function writeDouble_f64_rev(val,buf,pos){f64[0]=val;buf[pos]=f8b[7];buf[pos+1]=f8b[6];buf[pos+2]=f8b[5];buf[pos+3]=f8b[4];buf[pos+4]=f8b[3];buf[pos+5]=f8b[2];buf[pos+6]=f8b[1];buf[pos+7]=f8b[0];}/* istanbul ignore next */exports.writeDoubleLE=le?writeDouble_f64_cpy:writeDouble_f64_rev;/* istanbul ignore next */exports.writeDoubleBE=le?writeDouble_f64_rev:writeDouble_f64_cpy;function readDouble_f64_cpy(buf,pos){f8b[0]=buf[pos];f8b[1]=buf[pos+1];f8b[2]=buf[pos+2];f8b[3]=buf[pos+3];f8b[4]=buf[pos+4];f8b[5]=buf[pos+5];f8b[6]=buf[pos+6];f8b[7]=buf[pos+7];return f64[0];}function readDouble_f64_rev(buf,pos){f8b[7]=buf[pos];f8b[6]=buf[pos+1];f8b[5]=buf[pos+2];f8b[4]=buf[pos+3];f8b[3]=buf[pos+4];f8b[2]=buf[pos+5];f8b[1]=buf[pos+6];f8b[0]=buf[pos+7];return f64[0];}/* istanbul ignore next */exports.readDoubleLE=le?readDouble_f64_cpy:readDouble_f64_rev;/* istanbul ignore next */exports.readDoubleBE=le?readDouble_f64_rev:readDouble_f64_cpy;// double: ieee754
})();else(function(){function writeDouble_ieee754(writeUint,off0,off1,val,buf,pos){var sign=val<0?1:0;if(sign)val=-val;if(val===0){writeUint(0,buf,pos+off0);writeUint(1/val>0?/* positive */0:/* negative 0 */2147483648,buf,pos+off1);}else if(isNaN(val)){writeUint(0,buf,pos+off0);writeUint(2146959360,buf,pos+off1);}else if(val>1.7976931348623157e+308){// +-Infinity
writeUint(0,buf,pos+off0);writeUint((sign<<31|2146435072)>>>0,buf,pos+off1);}else{var mantissa;if(val<2.2250738585072014e-308){// denormal
mantissa=val/5e-324;writeUint(mantissa>>>0,buf,pos+off0);writeUint((sign<<31|mantissa/4294967296)>>>0,buf,pos+off1);}else{var exponent=Math.floor(Math.log(val)/Math.LN2);if(exponent===1024)exponent=1023;mantissa=val*Math.pow(2,-exponent);writeUint(mantissa*4503599627370496>>>0,buf,pos+off0);writeUint((sign<<31|exponent+1023<<20|mantissa*1048576&1048575)>>>0,buf,pos+off1);}}}exports.writeDoubleLE=writeDouble_ieee754.bind(null,writeUintLE,0,4);exports.writeDoubleBE=writeDouble_ieee754.bind(null,writeUintBE,4,0);function readDouble_ieee754(readUint,off0,off1,buf,pos){var lo=readUint(buf,pos+off0),hi=readUint(buf,pos+off1);var sign=(hi>>31)*2+1,exponent=hi>>>20&2047,mantissa=4294967296*(hi&1048575)+lo;return exponent===2047?mantissa?NaN:sign*Infinity:exponent===0// denormal
?sign*5e-324*mantissa:sign*Math.pow(2,exponent-1075)*(mantissa+4503599627370496);}exports.readDoubleLE=readDouble_ieee754.bind(null,readUintLE,0,4);exports.readDoubleBE=readDouble_ieee754.bind(null,readUintBE,4,0);})();return exports;}// uint helpers
function writeUintLE(val,buf,pos){buf[pos]=val&255;buf[pos+1]=val>>>8&255;buf[pos+2]=val>>>16&255;buf[pos+3]=val>>>24;}function writeUintBE(val,buf,pos){buf[pos]=val>>>24;buf[pos+1]=val>>>16&255;buf[pos+2]=val>>>8&255;buf[pos+3]=val&255;}function readUintLE(buf,pos){return(buf[pos]|buf[pos+1]<<8|buf[pos+2]<<16|buf[pos+3]<<24)>>>0;}function readUintBE(buf,pos){return(buf[pos]<<24|buf[pos+1]<<16|buf[pos+2]<<8|buf[pos+3])>>>0;}var inquire_1=inquire;/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);// eslint-disable-line no-eval
if(mod&&(mod.length||Object.keys(mod).length))return mod;}catch(e){}// eslint-disable-line no-empty
return null;}var utf8_1=createCommonjsModule(function(module,exports){/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */var utf8=exports;/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */utf8.length=function utf8_length(string){var len=0,c=0;for(var i=0;i<string.length;++i){c=string.charCodeAt(i);if(c<128)len+=1;else if(c<2048)len+=2;else if((c&0xFC00)===0xD800&&(string.charCodeAt(i+1)&0xFC00)===0xDC00){++i;len+=4;}else len+=3;}return len;};/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */utf8.read=function utf8_read(buffer,start,end){var len=end-start;if(len<1)return"";var parts=null,chunk=[],i=0,// char offset
t;// temporary
while(start<end){t=buffer[start++];if(t<128)chunk[i++]=t;else if(t>191&&t<224)chunk[i++]=(t&31)<<6|buffer[start++]&63;else if(t>239&&t<365){t=((t&7)<<18|(buffer[start++]&63)<<12|(buffer[start++]&63)<<6|buffer[start++]&63)-0x10000;chunk[i++]=0xD800+(t>>10);chunk[i++]=0xDC00+(t&1023);}else chunk[i++]=(t&15)<<12|(buffer[start++]&63)<<6|buffer[start++]&63;if(i>8191){(parts||(parts=[])).push(String.fromCharCode.apply(String,chunk));i=0;}}if(parts){if(i)parts.push(String.fromCharCode.apply(String,chunk.slice(0,i)));return parts.join("");}return String.fromCharCode.apply(String,chunk.slice(0,i));};/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */utf8.write=function utf8_write(string,buffer,offset){var start=offset,c1,// character 1
c2;// character 2
for(var i=0;i<string.length;++i){c1=string.charCodeAt(i);if(c1<128){buffer[offset++]=c1;}else if(c1<2048){buffer[offset++]=c1>>6|192;buffer[offset++]=c1&63|128;}else if((c1&0xFC00)===0xD800&&((c2=string.charCodeAt(i+1))&0xFC00)===0xDC00){c1=0x10000+((c1&0x03FF)<<10)+(c2&0x03FF);++i;buffer[offset++]=c1>>18|240;buffer[offset++]=c1>>12&63|128;buffer[offset++]=c1>>6&63|128;buffer[offset++]=c1&63|128;}else{buffer[offset++]=c1>>12|224;buffer[offset++]=c1>>6&63|128;buffer[offset++]=c1&63|128;}}return offset-start;};});var pool_1=pool;/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */ /**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */ /**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */function pool(alloc,slice,size){var SIZE=size||8192;var MAX=SIZE>>>1;var slab=null;var offset=SIZE;return function pool_alloc(size){if(size<1||size>MAX)return alloc(size);if(offset+size>SIZE){slab=alloc(SIZE);offset=0;}var buf=slice.call(slab,offset,offset+=size);if(offset&7)// align to 32 bit
offset=(offset|7)+1;return buf;};}var longbits=LongBits;/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */function LongBits(lo,hi){// note that the casts below are theoretically unnecessary as of today, but older statically
// generated converter code might still call the ctor with signed 32bits. kept for compat.
/**
     * Low bits.
     * @type {number}
     */this.lo=lo>>>0;/**
     * High bits.
     * @type {number}
     */this.hi=hi>>>0;}/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */var zero=LongBits.zero=new LongBits(0,0);zero.toNumber=function(){return 0;};zero.zzEncode=zero.zzDecode=function(){return this;};zero.length=function(){return 1;};/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */var zeroHash=LongBits.zeroHash="\0\0\0\0\0\0\0\0";/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */LongBits.fromNumber=function fromNumber(value){if(value===0)return zero;var sign=value<0;if(sign)value=-value;var lo=value>>>0,hi=(value-lo)/4294967296>>>0;if(sign){hi=~hi>>>0;lo=~lo>>>0;if(++lo>4294967295){lo=0;if(++hi>4294967295)hi=0;}}return new LongBits(lo,hi);};/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */LongBits.from=function from(value){if(typeof value==="number")return LongBits.fromNumber(value);if(minimal.isString(value)){/* istanbul ignore else */if(minimal.Long)value=minimal.Long.fromString(value);else return LongBits.fromNumber(parseInt(value,10));}return value.low||value.high?new LongBits(value.low>>>0,value.high>>>0):zero;};/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */LongBits.prototype.toNumber=function toNumber(unsigned){if(!unsigned&&this.hi>>>31){var lo=~this.lo+1>>>0,hi=~this.hi>>>0;if(!lo)hi=hi+1>>>0;return-(lo+hi*4294967296);}return this.lo+this.hi*4294967296;};/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */LongBits.prototype.toLong=function toLong(unsigned){return minimal.Long?new minimal.Long(this.lo|0,this.hi|0,Boolean(unsigned))/* istanbul ignore next */:{low:this.lo|0,high:this.hi|0,unsigned:Boolean(unsigned)};};var charCodeAt=String.prototype.charCodeAt;/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */LongBits.fromHash=function fromHash(hash){if(hash===zeroHash)return zero;return new LongBits((charCodeAt.call(hash,0)|charCodeAt.call(hash,1)<<8|charCodeAt.call(hash,2)<<16|charCodeAt.call(hash,3)<<24)>>>0,(charCodeAt.call(hash,4)|charCodeAt.call(hash,5)<<8|charCodeAt.call(hash,6)<<16|charCodeAt.call(hash,7)<<24)>>>0);};/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */LongBits.prototype.toHash=function toHash(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24);};/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */LongBits.prototype.zzEncode=function zzEncode(){var mask=this.hi>>31;this.hi=((this.hi<<1|this.lo>>>31)^mask)>>>0;this.lo=(this.lo<<1^mask)>>>0;return this;};/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */LongBits.prototype.zzDecode=function zzDecode(){var mask=-(this.lo&1);this.lo=((this.lo>>>1|this.hi<<31)^mask)>>>0;this.hi=(this.hi>>>1^mask)>>>0;return this;};/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */LongBits.prototype.length=function length(){var part0=this.lo,part1=(this.lo>>>28|this.hi<<4)>>>0,part2=this.hi>>>24;return part2===0?part1===0?part0<16384?part0<128?1:2:part0<2097152?3:4:part1<16384?part1<128?5:6:part1<2097152?7:8:part2<128?9:10;};var minimal=createCommonjsModule(function(module,exports){var util=exports;// used to return a Promise where callback is omitted
util.asPromise=aspromise;// converts to / from base64 encoded strings
util.base64=base64_1;// base class of rpc.Service
util.EventEmitter=eventemitter;// float handling accross browsers
util.float=float_1;// requires modules optionally and hides the call from bundlers
util.inquire=inquire_1;// converts to / from utf8 encoded strings
util.utf8=utf8_1;// provides a node-like buffer pool in the browser
util.pool=pool_1;// utility to work with the low and high bits of a 64 bit value
util.LongBits=longbits;/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */util.isNode=Boolean(typeof commonjsGlobal!=="undefined"&&commonjsGlobal&&commonjsGlobal.process&&commonjsGlobal.process.versions&&commonjsGlobal.process.versions.node);/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */util.global=util.isNode&&commonjsGlobal|| false&&false||typeof self!=="undefined"&&self||commonjsGlobal;// eslint-disable-line no-invalid-this
/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */util.emptyArray=Object.freeze?Object.freeze([]):/* istanbul ignore next */[];// used on prototypes
/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */util.emptyObject=Object.freeze?Object.freeze({}):/* istanbul ignore next */{};// used on prototypes
/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */util.isInteger=Number.isInteger||/* istanbul ignore next */function isInteger(value){return typeof value==="number"&&isFinite(value)&&Math.floor(value)===value;};/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */util.isString=function isString(value){return typeof value==="string"||value instanceof String;};/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */util.isObject=function isObject(value){return value&&typeof value==="object";};/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */util.isset=/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */util.isSet=function isSet(obj,prop){var value=obj[prop];if(value!=null&&obj.hasOwnProperty(prop))// eslint-disable-line eqeqeq, no-prototype-builtins
return typeof value!=="object"||(Array.isArray(value)?value.length:Object.keys(value).length)>0;return false;};/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */ /**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */util.Buffer=function(){try{var Buffer=util.inquire("buffer").Buffer;// refuse to use non-node buffers if not explicitly assigned (perf reasons):
return Buffer.prototype.utf8Write?Buffer:/* istanbul ignore next */null;}catch(e){/* istanbul ignore next */return null;}}();// Internal alias of or polyfull for Buffer.from.
util._Buffer_from=null;// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe=null;/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */util.newBuffer=function newBuffer(sizeOrArray){/* istanbul ignore next */return typeof sizeOrArray==="number"?util.Buffer?util._Buffer_allocUnsafe(sizeOrArray):new util.Array(sizeOrArray):util.Buffer?util._Buffer_from(sizeOrArray):typeof Uint8Array==="undefined"?sizeOrArray:new Uint8Array(sizeOrArray);};/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */util.Array=typeof Uint8Array!=="undefined"?Uint8Array/* istanbul ignore next */:Array;/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */ /**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */util.Long=/* istanbul ignore next */util.global.dcodeIO&&/* istanbul ignore next */util.global.dcodeIO.Long||/* istanbul ignore next */util.global.Long||util.inquire("long");/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */util.key2Re=/^true|false|0|1$/;/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */util.key32Re=/^-?(?:0|[1-9][0-9]*)$/;/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */util.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */util.longToHash=function longToHash(value){return value?util.LongBits.from(value).toHash():util.LongBits.zeroHash;};/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */util.longFromHash=function longFromHash(hash,unsigned){var bits=util.LongBits.fromHash(hash);if(util.Long)return util.Long.fromBits(bits.lo,bits.hi,unsigned);return bits.toNumber(Boolean(unsigned));};/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */function merge(dst,src,ifNotSet){// used by converters
for(var keys=Object.keys(src),i=0;i<keys.length;++i)if(dst[keys[i]]===undefined||!ifNotSet)dst[keys[i]]=src[keys[i]];return dst;}util.merge=merge;/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */util.lcFirst=function lcFirst(str){return str.charAt(0).toLowerCase()+str.substring(1);};/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */function newError(name){function CustomError(message,properties){if(!(this instanceof CustomError))return new CustomError(message,properties);// Error.call(this, message);
// ^ just returns a new error instance because the ctor can be called as a function
Object.defineProperty(this,"message",{get:function(){return message;}});/* istanbul ignore next */if(Error.captureStackTrace)// node
Error.captureStackTrace(this,CustomError);else Object.defineProperty(this,"stack",{value:new Error().stack||""});if(properties)merge(this,properties);}(CustomError.prototype=Object.create(Error.prototype)).constructor=CustomError;Object.defineProperty(CustomError.prototype,"name",{get:function(){return name;}});CustomError.prototype.toString=function toString(){return this.name+": "+this.message;};return CustomError;}util.newError=newError;/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */util.ProtocolError=newError("ProtocolError");/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */ /**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */ /**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */util.oneOfGetter=function getOneOf(fieldNames){var fieldMap={};for(var i=0;i<fieldNames.length;++i)fieldMap[fieldNames[i]]=1;/**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */return function(){// eslint-disable-line consistent-return
for(var keys=Object.keys(this),i=keys.length-1;i>-1;--i)if(fieldMap[keys[i]]===1&&this[keys[i]]!==undefined&&this[keys[i]]!==null)return keys[i];};};/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */ /**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */util.oneOfSetter=function setOneOf(fieldNames){/**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */return function(name){for(var i=0;i<fieldNames.length;++i)if(fieldNames[i]!==name)delete this[fieldNames[i]];};};/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */util.toJSONOptions={longs:String,enums:String,bytes:String,json:true};// Sets up buffer utility according to the environment (called in index-minimal)
util._configure=function(){var Buffer=util.Buffer;/* istanbul ignore if */if(!Buffer){util._Buffer_from=util._Buffer_allocUnsafe=null;return;}// because node 4.x buffers are incompatible & immutable
// see: https://github.com/dcodeIO/protobuf.js/pull/665
util._Buffer_from=Buffer.from!==Uint8Array.from&&Buffer.from||/* istanbul ignore next */function Buffer_from(value,encoding){return new Buffer(value,encoding);};util._Buffer_allocUnsafe=Buffer.allocUnsafe||/* istanbul ignore next */function Buffer_allocUnsafe(size){return new Buffer(size);};};});var writer=Writer;var BufferWriter;// cyclic
var LongBits$1=minimal.LongBits,base64=minimal.base64,utf8=minimal.utf8;/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */function Op(fn,len,val){/**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */this.fn=fn;/**
     * Value byte length.
     * @type {number}
     */this.len=len;/**
     * Next operation.
     * @type {Writer.Op|undefined}
     */this.next=undefined;/**
     * Value to write.
     * @type {*}
     */this.val=val;// type varies
}/* istanbul ignore next */function noop(){}// eslint-disable-line no-empty-function
/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */function State(writer){/**
     * Current head.
     * @type {Writer.Op}
     */this.head=writer.head;/**
     * Current tail.
     * @type {Writer.Op}
     */this.tail=writer.tail;/**
     * Current buffer length.
     * @type {number}
     */this.len=writer.len;/**
     * Next state.
     * @type {State|null}
     */this.next=writer.states;}/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */function Writer(){/**
     * Current length.
     * @type {number}
     */this.len=0;/**
     * Operations head.
     * @type {Object}
     */this.head=new Op(noop,0,0);/**
     * Operations tail
     * @type {Object}
     */this.tail=this.head;/**
     * Linked forked states.
     * @type {Object|null}
     */this.states=null;// When a value is written, the writer calculates its byte length and puts it into a linked
// list of operations to perform when finish() is called. This both allows us to allocate
// buffers of the exact required size and reduces the amount of work we have to do compared
// to first calculating over objects and then encoding over objects. In our case, the encoding
// part is just a linked list walk calling operations with already prepared values.
}var create=function create(){return minimal.Buffer?function create_buffer_setup(){return(Writer.create=function create_buffer(){return new BufferWriter();})();}/* istanbul ignore next */:function create_array(){return new Writer();};};/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */Writer.create=create();/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */Writer.alloc=function alloc(size){return new minimal.Array(size);};// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */if(minimal.Array!==Array)Writer.alloc=minimal.pool(Writer.alloc,minimal.Array.prototype.subarray);/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */Writer.prototype._push=function push(fn,len,val){this.tail=this.tail.next=new Op(fn,len,val);this.len+=len;return this;};function writeByte(val,buf,pos){buf[pos]=val&255;}function writeVarint32(val,buf,pos){while(val>127){buf[pos++]=val&127|128;val>>>=7;}buf[pos]=val;}/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */function VarintOp(len,val){this.len=len;this.next=undefined;this.val=val;}VarintOp.prototype=Object.create(Op.prototype);VarintOp.prototype.fn=writeVarint32;/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.uint32=function write_uint32(value){// here, the call to this.push has been inlined and a varint specific Op subclass is used.
// uint32 is by far the most frequently used operation and benefits significantly from this.
this.len+=(this.tail=this.tail.next=new VarintOp((value=value>>>0)<128?1:value<16384?2:value<2097152?3:value<268435456?4:5,value)).len;return this;};/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.int32=function write_int32(value){return value<0?this._push(writeVarint64,10,LongBits$1.fromNumber(value))// 10 bytes per spec
:this.uint32(value);};/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.sint32=function write_sint32(value){return this.uint32((value<<1^value>>31)>>>0);};function writeVarint64(val,buf,pos){while(val.hi){buf[pos++]=val.lo&127|128;val.lo=(val.lo>>>7|val.hi<<25)>>>0;val.hi>>>=7;}while(val.lo>127){buf[pos++]=val.lo&127|128;val.lo=val.lo>>>7;}buf[pos++]=val.lo;}/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */Writer.prototype.uint64=function write_uint64(value){var bits=LongBits$1.from(value);return this._push(writeVarint64,bits.length(),bits);};/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */Writer.prototype.int64=Writer.prototype.uint64;/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */Writer.prototype.sint64=function write_sint64(value){var bits=LongBits$1.from(value).zzEncode();return this._push(writeVarint64,bits.length(),bits);};/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.bool=function write_bool(value){return this._push(writeByte,1,value?1:0);};function writeFixed32(val,buf,pos){buf[pos]=val&255;buf[pos+1]=val>>>8&255;buf[pos+2]=val>>>16&255;buf[pos+3]=val>>>24;}/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.fixed32=function write_fixed32(value){return this._push(writeFixed32,4,value>>>0);};/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.sfixed32=Writer.prototype.fixed32;/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */Writer.prototype.fixed64=function write_fixed64(value){var bits=LongBits$1.from(value);return this._push(writeFixed32,4,bits.lo)._push(writeFixed32,4,bits.hi);};/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */Writer.prototype.sfixed64=Writer.prototype.fixed64;/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.float=function write_float(value){return this._push(minimal.float.writeFloatLE,4,value);};/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.double=function write_double(value){return this._push(minimal.float.writeDoubleLE,8,value);};var writeBytes=minimal.Array.prototype.set?function writeBytes_set(val,buf,pos){buf.set(val,pos);// also works for plain array values
}/* istanbul ignore next */:function writeBytes_for(val,buf,pos){for(var i=0;i<val.length;++i)buf[pos+i]=val[i];};/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */Writer.prototype.bytes=function write_bytes(value){var len=value.length>>>0;if(!len)return this._push(writeByte,1,0);if(minimal.isString(value)){var buf=Writer.alloc(len=base64.length(value));base64.decode(value,buf,0);value=buf;}return this.uint32(len)._push(writeBytes,len,value);};/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */Writer.prototype.string=function write_string(value){var len=utf8.length(value);return len?this.uint32(len)._push(utf8.write,len,value):this._push(writeByte,1,0);};/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */Writer.prototype.fork=function fork(){this.states=new State(this);this.head=this.tail=new Op(noop,0,0);this.len=0;return this;};/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */Writer.prototype.reset=function reset(){if(this.states){this.head=this.states.head;this.tail=this.states.tail;this.len=this.states.len;this.states=this.states.next;}else{this.head=this.tail=new Op(noop,0,0);this.len=0;}return this;};/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */Writer.prototype.ldelim=function ldelim(){var head=this.head,tail=this.tail,len=this.len;this.reset().uint32(len);if(len){this.tail.next=head.next;// skip noop
this.tail=tail;this.len+=len;}return this;};/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */Writer.prototype.finish=function finish(){var head=this.head.next,// skip noop
buf=this.constructor.alloc(this.len),pos=0;while(head){head.fn(head.val,buf,pos);pos+=head.len;head=head.next;}// this.head = this.tail = null;
return buf;};Writer._configure=function(BufferWriter_){BufferWriter=BufferWriter_;Writer.create=create();BufferWriter._configure();};var writer_buffer=BufferWriter$1;// extends Writer
(BufferWriter$1.prototype=Object.create(writer.prototype)).constructor=BufferWriter$1;/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */function BufferWriter$1(){writer.call(this);}BufferWriter$1._configure=function(){/**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */BufferWriter$1.alloc=minimal._Buffer_allocUnsafe;BufferWriter$1.writeBytesBuffer=minimal.Buffer&&minimal.Buffer.prototype instanceof Uint8Array&&minimal.Buffer.prototype.set.name==="set"?function writeBytesBuffer_set(val,buf,pos){buf.set(val,pos);// faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
// also works for plain array values
}/* istanbul ignore next */:function writeBytesBuffer_copy(val,buf,pos){if(val.copy)// Buffer values
val.copy(buf,pos,0,val.length);else for(var i=0;i<val.length;)// plain array values
buf[pos++]=val[i++];};};/**
 * @override
 */BufferWriter$1.prototype.bytes=function write_bytes_buffer(value){if(minimal.isString(value))value=minimal._Buffer_from(value,"base64");var len=value.length>>>0;this.uint32(len);if(len)this._push(BufferWriter$1.writeBytesBuffer,len,value);return this;};function writeStringBuffer(val,buf,pos){if(val.length<40)// plain js is faster for short strings (probably due to redundant assertions)
minimal.utf8.write(val,buf,pos);else if(buf.utf8Write)buf.utf8Write(val,pos);else buf.write(val,pos);}/**
 * @override
 */BufferWriter$1.prototype.string=function write_string_buffer(value){var len=minimal.Buffer.byteLength(value);this.uint32(len);if(len)this._push(writeStringBuffer,len,value);return this;};/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */BufferWriter$1._configure();var reader=Reader;var BufferReader;// cyclic
var LongBits$2=minimal.LongBits,utf8$1=minimal.utf8;/* istanbul ignore next */function indexOutOfRange(reader,writeLength){return RangeError("index out of range: "+reader.pos+" + "+(writeLength||1)+" > "+reader.len);}/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */function Reader(buffer){/**
     * Read buffer.
     * @type {Uint8Array}
     */this.buf=buffer;/**
     * Read buffer position.
     * @type {number}
     */this.pos=0;/**
     * Read buffer length.
     * @type {number}
     */this.len=buffer.length;}var create_array=typeof Uint8Array!=="undefined"?function create_typed_array(buffer){if(buffer instanceof Uint8Array||Array.isArray(buffer))return new Reader(buffer);throw Error("illegal buffer");}/* istanbul ignore next */:function create_array(buffer){if(Array.isArray(buffer))return new Reader(buffer);throw Error("illegal buffer");};var create$1=function create(){return minimal.Buffer?function create_buffer_setup(buffer){return(Reader.create=function create_buffer(buffer){return minimal.Buffer.isBuffer(buffer)?new BufferReader(buffer)/* istanbul ignore next */:create_array(buffer);})(buffer);}/* istanbul ignore next */:create_array;};/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */Reader.create=create$1();Reader.prototype._slice=minimal.Array.prototype.subarray||/* istanbul ignore next */minimal.Array.prototype.slice;/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */Reader.prototype.uint32=function read_uint32_setup(){var value=4294967295;// optimizer type-hint, tends to deopt otherwise (?!)
return function read_uint32(){value=(this.buf[this.pos]&127)>>>0;if(this.buf[this.pos++]<128)return value;value=(value|(this.buf[this.pos]&127)<<7)>>>0;if(this.buf[this.pos++]<128)return value;value=(value|(this.buf[this.pos]&127)<<14)>>>0;if(this.buf[this.pos++]<128)return value;value=(value|(this.buf[this.pos]&127)<<21)>>>0;if(this.buf[this.pos++]<128)return value;value=(value|(this.buf[this.pos]&15)<<28)>>>0;if(this.buf[this.pos++]<128)return value;/* istanbul ignore if */if((this.pos+=5)>this.len){this.pos=this.len;throw indexOutOfRange(this,10);}return value;};}();/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */Reader.prototype.int32=function read_int32(){return this.uint32()|0;};/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */Reader.prototype.sint32=function read_sint32(){var value=this.uint32();return value>>>1^-(value&1)|0;};/* eslint-disable no-invalid-this */function readLongVarint(){// tends to deopt with local vars for octet etc.
var bits=new LongBits$2(0,0);var i=0;if(this.len-this.pos>4){// fast route (lo)
for(;i<4;++i){// 1st..4th
bits.lo=(bits.lo|(this.buf[this.pos]&127)<<i*7)>>>0;if(this.buf[this.pos++]<128)return bits;}// 5th
bits.lo=(bits.lo|(this.buf[this.pos]&127)<<28)>>>0;bits.hi=(bits.hi|(this.buf[this.pos]&127)>>4)>>>0;if(this.buf[this.pos++]<128)return bits;i=0;}else{for(;i<3;++i){/* istanbul ignore if */if(this.pos>=this.len)throw indexOutOfRange(this);// 1st..3th
bits.lo=(bits.lo|(this.buf[this.pos]&127)<<i*7)>>>0;if(this.buf[this.pos++]<128)return bits;}// 4th
bits.lo=(bits.lo|(this.buf[this.pos++]&127)<<i*7)>>>0;return bits;}if(this.len-this.pos>4){// fast route (hi)
for(;i<5;++i){// 6th..10th
bits.hi=(bits.hi|(this.buf[this.pos]&127)<<i*7+3)>>>0;if(this.buf[this.pos++]<128)return bits;}}else{for(;i<5;++i){/* istanbul ignore if */if(this.pos>=this.len)throw indexOutOfRange(this);// 6th..10th
bits.hi=(bits.hi|(this.buf[this.pos]&127)<<i*7+3)>>>0;if(this.buf[this.pos++]<128)return bits;}}/* istanbul ignore next */throw Error("invalid varint encoding");}/* eslint-enable no-invalid-this */ /**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */Reader.prototype.bool=function read_bool(){return this.uint32()!==0;};function readFixed32_end(buf,end){// note that this uses `end`, not `pos`
return(buf[end-4]|buf[end-3]<<8|buf[end-2]<<16|buf[end-1]<<24)>>>0;}/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */Reader.prototype.fixed32=function read_fixed32(){/* istanbul ignore if */if(this.pos+4>this.len)throw indexOutOfRange(this,4);return readFixed32_end(this.buf,this.pos+=4);};/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */Reader.prototype.sfixed32=function read_sfixed32(){/* istanbul ignore if */if(this.pos+4>this.len)throw indexOutOfRange(this,4);return readFixed32_end(this.buf,this.pos+=4)|0;};/* eslint-disable no-invalid-this */function readFixed64()/* this: Reader */{/* istanbul ignore if */if(this.pos+8>this.len)throw indexOutOfRange(this,8);return new LongBits$2(readFixed32_end(this.buf,this.pos+=4),readFixed32_end(this.buf,this.pos+=4));}/* eslint-enable no-invalid-this */ /**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */Reader.prototype.float=function read_float(){/* istanbul ignore if */if(this.pos+4>this.len)throw indexOutOfRange(this,4);var value=minimal.float.readFloatLE(this.buf,this.pos);this.pos+=4;return value;};/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */Reader.prototype.double=function read_double(){/* istanbul ignore if */if(this.pos+8>this.len)throw indexOutOfRange(this,4);var value=minimal.float.readDoubleLE(this.buf,this.pos);this.pos+=8;return value;};/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */Reader.prototype.bytes=function read_bytes(){var length=this.uint32(),start=this.pos,end=this.pos+length;/* istanbul ignore if */if(end>this.len)throw indexOutOfRange(this,length);this.pos+=length;if(Array.isArray(this.buf))// plain array
return this.buf.slice(start,end);return start===end// fix for IE 10/Win8 and others' subarray returning array of size 1
?new this.buf.constructor(0):this._slice.call(this.buf,start,end);};/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */Reader.prototype.string=function read_string(){var bytes=this.bytes();return utf8$1.read(bytes,0,bytes.length);};/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */Reader.prototype.skip=function skip(length){if(typeof length==="number"){/* istanbul ignore if */if(this.pos+length>this.len)throw indexOutOfRange(this,length);this.pos+=length;}else{do{/* istanbul ignore if */if(this.pos>=this.len)throw indexOutOfRange(this);}while(this.buf[this.pos++]&128);}return this;};/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */Reader.prototype.skipType=function(wireType){switch(wireType){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:while((wireType=this.uint32()&7)!==4){this.skipType(wireType);}break;case 5:this.skip(4);break;/* istanbul ignore next */default:throw Error("invalid wire type "+wireType+" at offset "+this.pos);}return this;};Reader._configure=function(BufferReader_){BufferReader=BufferReader_;Reader.create=create$1();BufferReader._configure();var fn=minimal.Long?"toLong":/* istanbul ignore next */"toNumber";minimal.merge(Reader.prototype,{int64:function read_int64(){return readLongVarint.call(this)[fn](false);},uint64:function read_uint64(){return readLongVarint.call(this)[fn](true);},sint64:function read_sint64(){return readLongVarint.call(this).zzDecode()[fn](false);},fixed64:function read_fixed64(){return readFixed64.call(this)[fn](true);},sfixed64:function read_sfixed64(){return readFixed64.call(this)[fn](false);}});};var reader_buffer=BufferReader$1;// extends Reader
(BufferReader$1.prototype=Object.create(reader.prototype)).constructor=BufferReader$1;/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */function BufferReader$1(buffer){reader.call(this,buffer);/**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */}BufferReader$1._configure=function(){/* istanbul ignore else */if(minimal.Buffer)BufferReader$1.prototype._slice=minimal.Buffer.prototype.slice;};/**
 * @override
 */BufferReader$1.prototype.string=function read_string_buffer(){var len=this.uint32();// modifies pos
return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+len,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+len,this.len));};/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */BufferReader$1._configure();var service=Service;// Extends EventEmitter
(Service.prototype=Object.create(minimal.EventEmitter.prototype)).constructor=Service;/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */ /**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */ /**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */function Service(rpcImpl,requestDelimited,responseDelimited){if(typeof rpcImpl!=="function")throw TypeError("rpcImpl must be a function");minimal.EventEmitter.call(this);/**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */this.rpcImpl=rpcImpl;/**
     * Whether requests are length-delimited.
     * @type {boolean}
     */this.requestDelimited=Boolean(requestDelimited);/**
     * Whether responses are length-delimited.
     * @type {boolean}
     */this.responseDelimited=Boolean(responseDelimited);}/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */Service.prototype.rpcCall=function rpcCall(method,requestCtor,responseCtor,request,callback){if(!request)throw TypeError("request must be specified");var self=this;if(!callback)return minimal.asPromise(rpcCall,self,method,requestCtor,responseCtor,request);if(!self.rpcImpl){setTimeout(function(){callback(Error("already ended"));},0);return undefined;}try{return self.rpcImpl(method,requestCtor[self.requestDelimited?"encodeDelimited":"encode"](request).finish(),function rpcCallback(err,response){if(err){self.emit("error",err,method);return callback(err);}if(response===null){self.end(/* endedByRPC */true);return undefined;}if(!(response instanceof responseCtor)){try{response=responseCtor[self.responseDelimited?"decodeDelimited":"decode"](response);}catch(err){self.emit("error",err,method);return callback(err);}}self.emit("data",response,method);return callback(null,response);});}catch(err){self.emit("error",err,method);setTimeout(function(){callback(err);},0);return undefined;}};/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */Service.prototype.end=function end(endedByRPC){if(this.rpcImpl){if(!endedByRPC)// signal end to rpcImpl
this.rpcImpl(null,null,null);this.rpcImpl=null;this.emit("end").off();}return this;};var rpc_1=createCommonjsModule(function(module,exports){/**
 * Streaming RPC helpers.
 * @namespace
 */var rpc=exports;/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */ /**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */rpc.Service=service;});var roots={};var indexMinimal=createCommonjsModule(function(module,exports){var protobuf=exports;/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */protobuf.build="minimal";// Serialization
protobuf.Writer=writer;protobuf.BufferWriter=writer_buffer;protobuf.Reader=reader;protobuf.BufferReader=reader_buffer;// Utility
protobuf.util=minimal;protobuf.rpc=rpc_1;protobuf.roots=roots;protobuf.configure=configure;/* istanbul ignore next */ /**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */function configure(){protobuf.util._configure();protobuf.Writer._configure(protobuf.BufferWriter);protobuf.Reader._configure(protobuf.BufferReader);}// Set up buffer utility according to the environment
configure();});var minimal$1=indexMinimal;var proto=createCommonjsModule(function(module){/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/(function(global,factory){/* global define, require, module */ /* AMD */if(typeof commonjsRequire==='function'&&'object'==='object'&&module&&module.exports)module.exports=factory(minimal$1);})(commonjsGlobal,function($protobuf){// Common aliases
var $Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util;// Exported root namespace
var $root=$protobuf.roots["default"]||($protobuf.roots["default"]={});$root.Message=function(){/**
         * Properties of a Message.
         * @exports IMessage
         * @interface IMessage
         * @property {string|null} [userId] Message userId
         * @property {number|Long|null} [messageId] Message messageId
         * @property {number|null} [last] Message last
         * @property {string|null} [token] Message token
         * @property {string|null} [userChannel] Message userChannel
         * @property {string|null} [vpsToken] Message vpsToken
         * @property {Array.<IDevContext>|null} [devContext] Устарело с версии 3.
         * @property {string|null} [messageName] Message messageName
         * @property {number|null} [version] Message version
         * @property {IVoice|null} [voice] Message voice
         * @property {IText|null} [text] Message text
         * @property {ISystemMessage|null} [systemMessage] Message systemMessage
         * @property {ILegacyDevice|null} [legacyDevice] Message legacyDevice
         * @property {ISettings|null} [settings] Message settings
         * @property {IStatus|null} [status] Message status
         * @property {IDevice|null} [device] Message device
         * @property {IBytes|null} [bytes] Message bytes
         * @property {IInitialSettings|null} [initialSettings] Message initialSettings
         * @property {number|Long|null} [timestamp] Message timestamp
         * @property {Object.<string,string>|null} [meta] Message meta
         */ /**
         * Constructs a new Message.
         * @exports Message
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {IMessage=} [properties] Properties to set
         */function Message(properties){this.devContext=[];this.meta={};if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Message userId.
         * @member {string} userId
         * @memberof Message
         * @instance
         */Message.prototype.userId="";/**
         * Message messageId.
         * @member {number|Long} messageId
         * @memberof Message
         * @instance
         */Message.prototype.messageId=$util.Long?$util.Long.fromBits(0,0,false):0;/**
         * Message last.
         * @member {number} last
         * @memberof Message
         * @instance
         */Message.prototype.last=0;/**
         * Message token.
         * @member {string} token
         * @memberof Message
         * @instance
         */Message.prototype.token="";/**
         * Message userChannel.
         * @member {string} userChannel
         * @memberof Message
         * @instance
         */Message.prototype.userChannel="";/**
         * Message vpsToken.
         * @member {string} vpsToken
         * @memberof Message
         * @instance
         */Message.prototype.vpsToken="";/**
         * Устарело с версии 3.
         * @member {Array.<IDevContext>} devContext
         * @memberof Message
         * @instance
         */Message.prototype.devContext=$util.emptyArray;/**
         * Message messageName.
         * @member {string} messageName
         * @memberof Message
         * @instance
         */Message.prototype.messageName="";/**
         * Message version.
         * @member {number} version
         * @memberof Message
         * @instance
         */Message.prototype.version=0;/**
         * Message voice.
         * @member {IVoice|null|undefined} voice
         * @memberof Message
         * @instance
         */Message.prototype.voice=null;/**
         * Message text.
         * @member {IText|null|undefined} text
         * @memberof Message
         * @instance
         */Message.prototype.text=null;/**
         * Message systemMessage.
         * @member {ISystemMessage|null|undefined} systemMessage
         * @memberof Message
         * @instance
         */Message.prototype.systemMessage=null;/**
         * Message legacyDevice.
         * @member {ILegacyDevice|null|undefined} legacyDevice
         * @memberof Message
         * @instance
         */Message.prototype.legacyDevice=null;/**
         * Message settings.
         * @member {ISettings|null|undefined} settings
         * @memberof Message
         * @instance
         */Message.prototype.settings=null;/**
         * Message status.
         * @member {IStatus|null|undefined} status
         * @memberof Message
         * @instance
         */Message.prototype.status=null;/**
         * Message device.
         * @member {IDevice|null|undefined} device
         * @memberof Message
         * @instance
         */Message.prototype.device=null;/**
         * Message bytes.
         * @member {IBytes|null|undefined} bytes
         * @memberof Message
         * @instance
         */Message.prototype.bytes=null;/**
         * Message initialSettings.
         * @member {IInitialSettings|null|undefined} initialSettings
         * @memberof Message
         * @instance
         */Message.prototype.initialSettings=null;/**
         * Message timestamp.
         * @member {number|Long} timestamp
         * @memberof Message
         * @instance
         */Message.prototype.timestamp=$util.Long?$util.Long.fromBits(0,0,false):0;/**
         * Message meta.
         * @member {Object.<string,string>} meta
         * @memberof Message
         * @instance
         */Message.prototype.meta=$util.emptyObject;// OneOf field names bound to virtual getters and setters
var $oneOfFields;/**
         * Message content.
         * @member {"voice"|"text"|"systemMessage"|"legacyDevice"|"settings"|"status"|"device"|"bytes"|"initialSettings"|undefined} content
         * @memberof Message
         * @instance
         */Object.defineProperty(Message.prototype,"content",{get:$util.oneOfGetter($oneOfFields=["voice","text","systemMessage","legacyDevice","settings","status","device","bytes","initialSettings"]),set:$util.oneOfSetter($oneOfFields)});/**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Message
         * @static
         * @param {IMessage=} [properties] Properties to set
         * @returns {Message} Message instance
         */Message.create=function create(properties){return new Message(properties);};/**
         * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
         * @function encode
         * @memberof Message
         * @static
         * @param {IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Message.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&Object.hasOwnProperty.call(message,"userId"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);if(message.messageId!=null&&Object.hasOwnProperty.call(message,"messageId"))writer.uint32(/* id 2, wireType 0 =*/16).int64(message.messageId);if(message.last!=null&&Object.hasOwnProperty.call(message,"last"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.last);if(message.token!=null&&Object.hasOwnProperty.call(message,"token"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);if(message.voice!=null&&Object.hasOwnProperty.call(message,"voice"))$root.Voice.encode(message.voice,writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();if(message.text!=null&&Object.hasOwnProperty.call(message,"text"))$root.Text.encode(message.text,writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();if(message.systemMessage!=null&&Object.hasOwnProperty.call(message,"systemMessage"))$root.SystemMessage.encode(message.systemMessage,writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();if(message.legacyDevice!=null&&Object.hasOwnProperty.call(message,"legacyDevice"))$root.LegacyDevice.encode(message.legacyDevice,writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();if(message.settings!=null&&Object.hasOwnProperty.call(message,"settings"))$root.Settings.encode(message.settings,writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();if(message.status!=null&&Object.hasOwnProperty.call(message,"status"))$root.Status.encode(message.status,writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();if(message.userChannel!=null&&Object.hasOwnProperty.call(message,"userChannel"))writer.uint32(/* id 11, wireType 2 =*/90).string(message.userChannel);if(message.vpsToken!=null&&Object.hasOwnProperty.call(message,"vpsToken"))writer.uint32(/* id 12, wireType 2 =*/98).string(message.vpsToken);if(message.devContext!=null&&message.devContext.length)for(var i=0;i<message.devContext.length;++i)$root.DevContext.encode(message.devContext[i],writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();if(message.messageName!=null&&Object.hasOwnProperty.call(message,"messageName"))writer.uint32(/* id 14, wireType 2 =*/114).string(message.messageName);if(message.version!=null&&Object.hasOwnProperty.call(message,"version"))writer.uint32(/* id 15, wireType 0 =*/120).int32(message.version);if(message.device!=null&&Object.hasOwnProperty.call(message,"device"))$root.Device.encode(message.device,writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();if(message.bytes!=null&&Object.hasOwnProperty.call(message,"bytes"))$root.Bytes.encode(message.bytes,writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();if(message.initialSettings!=null&&Object.hasOwnProperty.call(message,"initialSettings"))$root.InitialSettings.encode(message.initialSettings,writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();if(message.timestamp!=null&&Object.hasOwnProperty.call(message,"timestamp"))writer.uint32(/* id 19, wireType 0 =*/152).int64(message.timestamp);if(message.meta!=null&&Object.hasOwnProperty.call(message,"meta"))for(var keys=Object.keys(message.meta),i=0;i<keys.length;++i)writer.uint32(/* id 20, wireType 2 =*/162).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.meta[keys[i]]).ldelim();return writer;};/**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message
         * @static
         * @param {IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Message.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Message.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Message(),key,value;while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.string();break;case 2:message.messageId=reader.int64();break;case 3:message.last=reader.int32();break;case 4:message.token=reader.string();break;case 11:message.userChannel=reader.string();break;case 12:message.vpsToken=reader.string();break;case 13:if(!(message.devContext&&message.devContext.length))message.devContext=[];message.devContext.push($root.DevContext.decode(reader,reader.uint32()));break;case 14:message.messageName=reader.string();break;case 15:message.version=reader.int32();break;case 5:message.voice=$root.Voice.decode(reader,reader.uint32());break;case 6:message.text=$root.Text.decode(reader,reader.uint32());break;case 7:message.systemMessage=$root.SystemMessage.decode(reader,reader.uint32());break;case 8:message.legacyDevice=$root.LegacyDevice.decode(reader,reader.uint32());break;case 9:message.settings=$root.Settings.decode(reader,reader.uint32());break;case 10:message.status=$root.Status.decode(reader,reader.uint32());break;case 16:message.device=$root.Device.decode(reader,reader.uint32());break;case 17:message.bytes=$root.Bytes.decode(reader,reader.uint32());break;case 18:message.initialSettings=$root.InitialSettings.decode(reader,reader.uint32());break;case 19:message.timestamp=reader.int64();break;case 20:if(message.meta===$util.emptyObject)message.meta={};var end2=reader.uint32()+reader.pos;key="";value="";while(reader.pos<end2){var tag2=reader.uint32();switch(tag2>>>3){case 1:key=reader.string();break;case 2:value=reader.string();break;default:reader.skipType(tag2&7);break;}}message.meta[key]=value;break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Message.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Message message.
         * @function verify
         * @memberof Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Message.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";var properties={};if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isString(message.userId))return"userId: string expected";if(message.messageId!=null&&message.hasOwnProperty("messageId"))if(!$util.isInteger(message.messageId)&&!(message.messageId&&$util.isInteger(message.messageId.low)&&$util.isInteger(message.messageId.high)))return"messageId: integer|Long expected";if(message.last!=null&&message.hasOwnProperty("last"))if(!$util.isInteger(message.last))return"last: integer expected";if(message.token!=null&&message.hasOwnProperty("token"))if(!$util.isString(message.token))return"token: string expected";if(message.userChannel!=null&&message.hasOwnProperty("userChannel"))if(!$util.isString(message.userChannel))return"userChannel: string expected";if(message.vpsToken!=null&&message.hasOwnProperty("vpsToken"))if(!$util.isString(message.vpsToken))return"vpsToken: string expected";if(message.devContext!=null&&message.hasOwnProperty("devContext")){if(!Array.isArray(message.devContext))return"devContext: array expected";for(var i=0;i<message.devContext.length;++i){var error=$root.DevContext.verify(message.devContext[i]);if(error)return"devContext."+error;}}if(message.messageName!=null&&message.hasOwnProperty("messageName"))if(!$util.isString(message.messageName))return"messageName: string expected";if(message.version!=null&&message.hasOwnProperty("version"))if(!$util.isInteger(message.version))return"version: integer expected";if(message.voice!=null&&message.hasOwnProperty("voice")){properties.content=1;{var error=$root.Voice.verify(message.voice);if(error)return"voice."+error;}}if(message.text!=null&&message.hasOwnProperty("text")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.Text.verify(message.text);if(error)return"text."+error;}}if(message.systemMessage!=null&&message.hasOwnProperty("systemMessage")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.SystemMessage.verify(message.systemMessage);if(error)return"systemMessage."+error;}}if(message.legacyDevice!=null&&message.hasOwnProperty("legacyDevice")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.LegacyDevice.verify(message.legacyDevice);if(error)return"legacyDevice."+error;}}if(message.settings!=null&&message.hasOwnProperty("settings")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.Settings.verify(message.settings);if(error)return"settings."+error;}}if(message.status!=null&&message.hasOwnProperty("status")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.Status.verify(message.status);if(error)return"status."+error;}}if(message.device!=null&&message.hasOwnProperty("device")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.Device.verify(message.device);if(error)return"device."+error;}}if(message.bytes!=null&&message.hasOwnProperty("bytes")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.Bytes.verify(message.bytes);if(error)return"bytes."+error;}}if(message.initialSettings!=null&&message.hasOwnProperty("initialSettings")){if(properties.content===1)return"content: multiple values";properties.content=1;{var error=$root.InitialSettings.verify(message.initialSettings);if(error)return"initialSettings."+error;}}if(message.timestamp!=null&&message.hasOwnProperty("timestamp"))if(!$util.isInteger(message.timestamp)&&!(message.timestamp&&$util.isInteger(message.timestamp.low)&&$util.isInteger(message.timestamp.high)))return"timestamp: integer|Long expected";if(message.meta!=null&&message.hasOwnProperty("meta")){if(!$util.isObject(message.meta))return"meta: object expected";var key=Object.keys(message.meta);for(var i=0;i<key.length;++i)if(!$util.isString(message.meta[key[i]]))return"meta: string{k:string} expected";}return null;};/**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message} Message
         */Message.fromObject=function fromObject(object){if(object instanceof $root.Message)return object;var message=new $root.Message();if(object.userId!=null)message.userId=String(object.userId);if(object.messageId!=null)if($util.Long)(message.messageId=$util.Long.fromValue(object.messageId)).unsigned=false;else if(typeof object.messageId==="string")message.messageId=parseInt(object.messageId,10);else if(typeof object.messageId==="number")message.messageId=object.messageId;else if(typeof object.messageId==="object")message.messageId=new $util.LongBits(object.messageId.low>>>0,object.messageId.high>>>0).toNumber();if(object.last!=null)message.last=object.last|0;if(object.token!=null)message.token=String(object.token);if(object.userChannel!=null)message.userChannel=String(object.userChannel);if(object.vpsToken!=null)message.vpsToken=String(object.vpsToken);if(object.devContext){if(!Array.isArray(object.devContext))throw TypeError(".Message.devContext: array expected");message.devContext=[];for(var i=0;i<object.devContext.length;++i){if(typeof object.devContext[i]!=="object")throw TypeError(".Message.devContext: object expected");message.devContext[i]=$root.DevContext.fromObject(object.devContext[i]);}}if(object.messageName!=null)message.messageName=String(object.messageName);if(object.version!=null)message.version=object.version|0;if(object.voice!=null){if(typeof object.voice!=="object")throw TypeError(".Message.voice: object expected");message.voice=$root.Voice.fromObject(object.voice);}if(object.text!=null){if(typeof object.text!=="object")throw TypeError(".Message.text: object expected");message.text=$root.Text.fromObject(object.text);}if(object.systemMessage!=null){if(typeof object.systemMessage!=="object")throw TypeError(".Message.systemMessage: object expected");message.systemMessage=$root.SystemMessage.fromObject(object.systemMessage);}if(object.legacyDevice!=null){if(typeof object.legacyDevice!=="object")throw TypeError(".Message.legacyDevice: object expected");message.legacyDevice=$root.LegacyDevice.fromObject(object.legacyDevice);}if(object.settings!=null){if(typeof object.settings!=="object")throw TypeError(".Message.settings: object expected");message.settings=$root.Settings.fromObject(object.settings);}if(object.status!=null){if(typeof object.status!=="object")throw TypeError(".Message.status: object expected");message.status=$root.Status.fromObject(object.status);}if(object.device!=null){if(typeof object.device!=="object")throw TypeError(".Message.device: object expected");message.device=$root.Device.fromObject(object.device);}if(object.bytes!=null){if(typeof object.bytes!=="object")throw TypeError(".Message.bytes: object expected");message.bytes=$root.Bytes.fromObject(object.bytes);}if(object.initialSettings!=null){if(typeof object.initialSettings!=="object")throw TypeError(".Message.initialSettings: object expected");message.initialSettings=$root.InitialSettings.fromObject(object.initialSettings);}if(object.timestamp!=null)if($util.Long)(message.timestamp=$util.Long.fromValue(object.timestamp)).unsigned=false;else if(typeof object.timestamp==="string")message.timestamp=parseInt(object.timestamp,10);else if(typeof object.timestamp==="number")message.timestamp=object.timestamp;else if(typeof object.timestamp==="object")message.timestamp=new $util.LongBits(object.timestamp.low>>>0,object.timestamp.high>>>0).toNumber();if(object.meta){if(typeof object.meta!=="object")throw TypeError(".Message.meta: object expected");message.meta={};for(var keys=Object.keys(object.meta),i=0;i<keys.length;++i)message.meta[keys[i]]=String(object.meta[keys[i]]);}return message;};/**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message
         * @static
         * @param {Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Message.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.devContext=[];if(options.objects||options.defaults)object.meta={};if(options.defaults){object.userId="";if($util.Long){var long=new $util.Long(0,0,false);object.messageId=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.messageId=options.longs===String?"0":0;object.last=0;object.token="";object.userChannel="";object.vpsToken="";object.messageName="";object.version=0;if($util.Long){var long=new $util.Long(0,0,false);object.timestamp=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.timestamp=options.longs===String?"0":0;}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.messageId!=null&&message.hasOwnProperty("messageId"))if(typeof message.messageId==="number")object.messageId=options.longs===String?String(message.messageId):message.messageId;else object.messageId=options.longs===String?$util.Long.prototype.toString.call(message.messageId):options.longs===Number?new $util.LongBits(message.messageId.low>>>0,message.messageId.high>>>0).toNumber():message.messageId;if(message.last!=null&&message.hasOwnProperty("last"))object.last=message.last;if(message.token!=null&&message.hasOwnProperty("token"))object.token=message.token;if(message.voice!=null&&message.hasOwnProperty("voice")){object.voice=$root.Voice.toObject(message.voice,options);if(options.oneofs)object.content="voice";}if(message.text!=null&&message.hasOwnProperty("text")){object.text=$root.Text.toObject(message.text,options);if(options.oneofs)object.content="text";}if(message.systemMessage!=null&&message.hasOwnProperty("systemMessage")){object.systemMessage=$root.SystemMessage.toObject(message.systemMessage,options);if(options.oneofs)object.content="systemMessage";}if(message.legacyDevice!=null&&message.hasOwnProperty("legacyDevice")){object.legacyDevice=$root.LegacyDevice.toObject(message.legacyDevice,options);if(options.oneofs)object.content="legacyDevice";}if(message.settings!=null&&message.hasOwnProperty("settings")){object.settings=$root.Settings.toObject(message.settings,options);if(options.oneofs)object.content="settings";}if(message.status!=null&&message.hasOwnProperty("status")){object.status=$root.Status.toObject(message.status,options);if(options.oneofs)object.content="status";}if(message.userChannel!=null&&message.hasOwnProperty("userChannel"))object.userChannel=message.userChannel;if(message.vpsToken!=null&&message.hasOwnProperty("vpsToken"))object.vpsToken=message.vpsToken;if(message.devContext&&message.devContext.length){object.devContext=[];for(var j=0;j<message.devContext.length;++j)object.devContext[j]=$root.DevContext.toObject(message.devContext[j],options);}if(message.messageName!=null&&message.hasOwnProperty("messageName"))object.messageName=message.messageName;if(message.version!=null&&message.hasOwnProperty("version"))object.version=message.version;if(message.device!=null&&message.hasOwnProperty("device")){object.device=$root.Device.toObject(message.device,options);if(options.oneofs)object.content="device";}if(message.bytes!=null&&message.hasOwnProperty("bytes")){object.bytes=$root.Bytes.toObject(message.bytes,options);if(options.oneofs)object.content="bytes";}if(message.initialSettings!=null&&message.hasOwnProperty("initialSettings")){object.initialSettings=$root.InitialSettings.toObject(message.initialSettings,options);if(options.oneofs)object.content="initialSettings";}if(message.timestamp!=null&&message.hasOwnProperty("timestamp"))if(typeof message.timestamp==="number")object.timestamp=options.longs===String?String(message.timestamp):message.timestamp;else object.timestamp=options.longs===String?$util.Long.prototype.toString.call(message.timestamp):options.longs===Number?new $util.LongBits(message.timestamp.low>>>0,message.timestamp.high>>>0).toNumber():message.timestamp;var keys2;if(message.meta&&(keys2=Object.keys(message.meta)).length){object.meta={};for(var j=0;j<keys2.length;++j)object.meta[keys2[j]]=message.meta[keys2[j]];}return object;};/**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Message.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Message;}();$root.InitialSettings=function(){/**
         * Properties of an InitialSettings.
         * @exports IInitialSettings
         * @interface IInitialSettings
         * @property {string|null} [userId] InitialSettings userId
         * @property {string|null} [userChannel] InitialSettings userChannel
         * @property {IDevice|null} [device] InitialSettings device
         * @property {ISettings|null} [settings] InitialSettings settings
         * @property {string|null} [locale] InitialSettings locale
         */ /**
         * Constructs a new InitialSettings.
         * @exports InitialSettings
         * @classdesc Represents an InitialSettings.
         * @implements IInitialSettings
         * @constructor
         * @param {IInitialSettings=} [properties] Properties to set
         */function InitialSettings(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * InitialSettings userId.
         * @member {string} userId
         * @memberof InitialSettings
         * @instance
         */InitialSettings.prototype.userId="";/**
         * InitialSettings userChannel.
         * @member {string} userChannel
         * @memberof InitialSettings
         * @instance
         */InitialSettings.prototype.userChannel="";/**
         * InitialSettings device.
         * @member {IDevice|null|undefined} device
         * @memberof InitialSettings
         * @instance
         */InitialSettings.prototype.device=null;/**
         * InitialSettings settings.
         * @member {ISettings|null|undefined} settings
         * @memberof InitialSettings
         * @instance
         */InitialSettings.prototype.settings=null;/**
         * InitialSettings locale.
         * @member {string} locale
         * @memberof InitialSettings
         * @instance
         */InitialSettings.prototype.locale="";/**
         * Creates a new InitialSettings instance using the specified properties.
         * @function create
         * @memberof InitialSettings
         * @static
         * @param {IInitialSettings=} [properties] Properties to set
         * @returns {InitialSettings} InitialSettings instance
         */InitialSettings.create=function create(properties){return new InitialSettings(properties);};/**
         * Encodes the specified InitialSettings message. Does not implicitly {@link InitialSettings.verify|verify} messages.
         * @function encode
         * @memberof InitialSettings
         * @static
         * @param {IInitialSettings} message InitialSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */InitialSettings.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&Object.hasOwnProperty.call(message,"userId"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);if(message.userChannel!=null&&Object.hasOwnProperty.call(message,"userChannel"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.userChannel);if(message.device!=null&&Object.hasOwnProperty.call(message,"device"))$root.Device.encode(message.device,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();if(message.settings!=null&&Object.hasOwnProperty.call(message,"settings"))$root.Settings.encode(message.settings,writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();if(message.locale!=null&&Object.hasOwnProperty.call(message,"locale"))writer.uint32(/* id 5, wireType 2 =*/42).string(message.locale);return writer;};/**
         * Encodes the specified InitialSettings message, length delimited. Does not implicitly {@link InitialSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof InitialSettings
         * @static
         * @param {IInitialSettings} message InitialSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */InitialSettings.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes an InitialSettings message from the specified reader or buffer.
         * @function decode
         * @memberof InitialSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {InitialSettings} InitialSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */InitialSettings.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.InitialSettings();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.string();break;case 2:message.userChannel=reader.string();break;case 3:message.device=$root.Device.decode(reader,reader.uint32());break;case 4:message.settings=$root.Settings.decode(reader,reader.uint32());break;case 5:message.locale=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes an InitialSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof InitialSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {InitialSettings} InitialSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */InitialSettings.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies an InitialSettings message.
         * @function verify
         * @memberof InitialSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */InitialSettings.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isString(message.userId))return"userId: string expected";if(message.userChannel!=null&&message.hasOwnProperty("userChannel"))if(!$util.isString(message.userChannel))return"userChannel: string expected";if(message.device!=null&&message.hasOwnProperty("device")){var error=$root.Device.verify(message.device);if(error)return"device."+error;}if(message.settings!=null&&message.hasOwnProperty("settings")){var error=$root.Settings.verify(message.settings);if(error)return"settings."+error;}if(message.locale!=null&&message.hasOwnProperty("locale"))if(!$util.isString(message.locale))return"locale: string expected";return null;};/**
         * Creates an InitialSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof InitialSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {InitialSettings} InitialSettings
         */InitialSettings.fromObject=function fromObject(object){if(object instanceof $root.InitialSettings)return object;var message=new $root.InitialSettings();if(object.userId!=null)message.userId=String(object.userId);if(object.userChannel!=null)message.userChannel=String(object.userChannel);if(object.device!=null){if(typeof object.device!=="object")throw TypeError(".InitialSettings.device: object expected");message.device=$root.Device.fromObject(object.device);}if(object.settings!=null){if(typeof object.settings!=="object")throw TypeError(".InitialSettings.settings: object expected");message.settings=$root.Settings.fromObject(object.settings);}if(object.locale!=null)message.locale=String(object.locale);return message;};/**
         * Creates a plain object from an InitialSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof InitialSettings
         * @static
         * @param {InitialSettings} message InitialSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */InitialSettings.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userId="";object.userChannel="";object.device=null;object.settings=null;object.locale="";}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.userChannel!=null&&message.hasOwnProperty("userChannel"))object.userChannel=message.userChannel;if(message.device!=null&&message.hasOwnProperty("device"))object.device=$root.Device.toObject(message.device,options);if(message.settings!=null&&message.hasOwnProperty("settings"))object.settings=$root.Settings.toObject(message.settings,options);if(message.locale!=null&&message.hasOwnProperty("locale"))object.locale=message.locale;return object;};/**
         * Converts this InitialSettings to JSON.
         * @function toJSON
         * @memberof InitialSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */InitialSettings.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return InitialSettings;}();$root.Device=function(){/**
         * Properties of a Device.
         * @exports IDevice
         * @interface IDevice
         * @property {string|null} [platformType] Device platformType
         * @property {string|null} [platformVersion] Device platformVersion
         * @property {string|null} [surface] Обязательно. Пример, SBERBOX
         * @property {string|null} [surfaceVersion] Device surfaceVersion
         * @property {string|null} [features] Device features
         * @property {string|null} [capabilities] Device capabilities
         * @property {string|null} [deviceId] Device deviceId
         * @property {string|null} [deviceManufacturer] Device deviceManufacturer
         * @property {string|null} [deviceModel] Device deviceModel
         * @property {string|null} [additionalInfo] Device additionalInfo
         */ /**
         * Constructs a new Device.
         * @exports Device
         * @classdesc Represents a Device.
         * @implements IDevice
         * @constructor
         * @param {IDevice=} [properties] Properties to set
         */function Device(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Device platformType.
         * @member {string} platformType
         * @memberof Device
         * @instance
         */Device.prototype.platformType="";/**
         * Device platformVersion.
         * @member {string} platformVersion
         * @memberof Device
         * @instance
         */Device.prototype.platformVersion="";/**
         * Обязательно. Пример, SBERBOX
         * @member {string} surface
         * @memberof Device
         * @instance
         */Device.prototype.surface="";/**
         * Device surfaceVersion.
         * @member {string} surfaceVersion
         * @memberof Device
         * @instance
         */Device.prototype.surfaceVersion="";/**
         * Device features.
         * @member {string} features
         * @memberof Device
         * @instance
         */Device.prototype.features="";/**
         * Device capabilities.
         * @member {string} capabilities
         * @memberof Device
         * @instance
         */Device.prototype.capabilities="";/**
         * Device deviceId.
         * @member {string} deviceId
         * @memberof Device
         * @instance
         */Device.prototype.deviceId="";/**
         * Device deviceManufacturer.
         * @member {string} deviceManufacturer
         * @memberof Device
         * @instance
         */Device.prototype.deviceManufacturer="";/**
         * Device deviceModel.
         * @member {string} deviceModel
         * @memberof Device
         * @instance
         */Device.prototype.deviceModel="";/**
         * Device additionalInfo.
         * @member {string} additionalInfo
         * @memberof Device
         * @instance
         */Device.prototype.additionalInfo="";/**
         * Creates a new Device instance using the specified properties.
         * @function create
         * @memberof Device
         * @static
         * @param {IDevice=} [properties] Properties to set
         * @returns {Device} Device instance
         */Device.create=function create(properties){return new Device(properties);};/**
         * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
         * @function encode
         * @memberof Device
         * @static
         * @param {IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Device.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.platformType!=null&&Object.hasOwnProperty.call(message,"platformType"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.platformType);if(message.platformVersion!=null&&Object.hasOwnProperty.call(message,"platformVersion"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.platformVersion);if(message.surface!=null&&Object.hasOwnProperty.call(message,"surface"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.surface);if(message.surfaceVersion!=null&&Object.hasOwnProperty.call(message,"surfaceVersion"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.surfaceVersion);if(message.features!=null&&Object.hasOwnProperty.call(message,"features"))writer.uint32(/* id 5, wireType 2 =*/42).string(message.features);if(message.capabilities!=null&&Object.hasOwnProperty.call(message,"capabilities"))writer.uint32(/* id 6, wireType 2 =*/50).string(message.capabilities);if(message.deviceId!=null&&Object.hasOwnProperty.call(message,"deviceId"))writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceId);if(message.deviceManufacturer!=null&&Object.hasOwnProperty.call(message,"deviceManufacturer"))writer.uint32(/* id 8, wireType 2 =*/66).string(message.deviceManufacturer);if(message.deviceModel!=null&&Object.hasOwnProperty.call(message,"deviceModel"))writer.uint32(/* id 9, wireType 2 =*/74).string(message.deviceModel);if(message.additionalInfo!=null&&Object.hasOwnProperty.call(message,"additionalInfo"))writer.uint32(/* id 10, wireType 2 =*/82).string(message.additionalInfo);return writer;};/**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link Device.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Device
         * @static
         * @param {IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Device.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Device message from the specified reader or buffer.
         * @function decode
         * @memberof Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Device.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Device();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.platformType=reader.string();break;case 2:message.platformVersion=reader.string();break;case 3:message.surface=reader.string();break;case 4:message.surfaceVersion=reader.string();break;case 5:message.features=reader.string();break;case 6:message.capabilities=reader.string();break;case 7:message.deviceId=reader.string();break;case 8:message.deviceManufacturer=reader.string();break;case 9:message.deviceModel=reader.string();break;case 10:message.additionalInfo=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Device.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Device message.
         * @function verify
         * @memberof Device
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Device.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.platformType!=null&&message.hasOwnProperty("platformType"))if(!$util.isString(message.platformType))return"platformType: string expected";if(message.platformVersion!=null&&message.hasOwnProperty("platformVersion"))if(!$util.isString(message.platformVersion))return"platformVersion: string expected";if(message.surface!=null&&message.hasOwnProperty("surface"))if(!$util.isString(message.surface))return"surface: string expected";if(message.surfaceVersion!=null&&message.hasOwnProperty("surfaceVersion"))if(!$util.isString(message.surfaceVersion))return"surfaceVersion: string expected";if(message.features!=null&&message.hasOwnProperty("features"))if(!$util.isString(message.features))return"features: string expected";if(message.capabilities!=null&&message.hasOwnProperty("capabilities"))if(!$util.isString(message.capabilities))return"capabilities: string expected";if(message.deviceId!=null&&message.hasOwnProperty("deviceId"))if(!$util.isString(message.deviceId))return"deviceId: string expected";if(message.deviceManufacturer!=null&&message.hasOwnProperty("deviceManufacturer"))if(!$util.isString(message.deviceManufacturer))return"deviceManufacturer: string expected";if(message.deviceModel!=null&&message.hasOwnProperty("deviceModel"))if(!$util.isString(message.deviceModel))return"deviceModel: string expected";if(message.additionalInfo!=null&&message.hasOwnProperty("additionalInfo"))if(!$util.isString(message.additionalInfo))return"additionalInfo: string expected";return null;};/**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Device
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Device} Device
         */Device.fromObject=function fromObject(object){if(object instanceof $root.Device)return object;var message=new $root.Device();if(object.platformType!=null)message.platformType=String(object.platformType);if(object.platformVersion!=null)message.platformVersion=String(object.platformVersion);if(object.surface!=null)message.surface=String(object.surface);if(object.surfaceVersion!=null)message.surfaceVersion=String(object.surfaceVersion);if(object.features!=null)message.features=String(object.features);if(object.capabilities!=null)message.capabilities=String(object.capabilities);if(object.deviceId!=null)message.deviceId=String(object.deviceId);if(object.deviceManufacturer!=null)message.deviceManufacturer=String(object.deviceManufacturer);if(object.deviceModel!=null)message.deviceModel=String(object.deviceModel);if(object.additionalInfo!=null)message.additionalInfo=String(object.additionalInfo);return message;};/**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Device
         * @static
         * @param {Device} message Device
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Device.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.platformType="";object.platformVersion="";object.surface="";object.surfaceVersion="";object.features="";object.capabilities="";object.deviceId="";object.deviceManufacturer="";object.deviceModel="";object.additionalInfo="";}if(message.platformType!=null&&message.hasOwnProperty("platformType"))object.platformType=message.platformType;if(message.platformVersion!=null&&message.hasOwnProperty("platformVersion"))object.platformVersion=message.platformVersion;if(message.surface!=null&&message.hasOwnProperty("surface"))object.surface=message.surface;if(message.surfaceVersion!=null&&message.hasOwnProperty("surfaceVersion"))object.surfaceVersion=message.surfaceVersion;if(message.features!=null&&message.hasOwnProperty("features"))object.features=message.features;if(message.capabilities!=null&&message.hasOwnProperty("capabilities"))object.capabilities=message.capabilities;if(message.deviceId!=null&&message.hasOwnProperty("deviceId"))object.deviceId=message.deviceId;if(message.deviceManufacturer!=null&&message.hasOwnProperty("deviceManufacturer"))object.deviceManufacturer=message.deviceManufacturer;if(message.deviceModel!=null&&message.hasOwnProperty("deviceModel"))object.deviceModel=message.deviceModel;if(message.additionalInfo!=null&&message.hasOwnProperty("additionalInfo"))object.additionalInfo=message.additionalInfo;return object;};/**
         * Converts this Device to JSON.
         * @function toJSON
         * @memberof Device
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Device.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Device;}();$root.Settings=function(){/**
         * Properties of a Settings.
         * @exports ISettings
         * @interface ISettings
         * @property {number|null} [dubbing] Settings dubbing
         * @property {number|null} [echo] Settings echo
         * @property {string|null} [ttsEngine] Settings ttsEngine
         * @property {string|null} [asrEngine] Settings asrEngine
         * @property {number|null} [asrAutoStop] Settings asrAutoStop
         * @property {number|null} [devMode] Settings devMode
         * @property {string|null} [authConnector] Settings authConnector
         * @property {string|null} [surface] Settings surface
         */ /**
         * Constructs a new Settings.
         * @exports Settings
         * @classdesc Represents a Settings.
         * @implements ISettings
         * @constructor
         * @param {ISettings=} [properties] Properties to set
         */function Settings(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Settings dubbing.
         * @member {number} dubbing
         * @memberof Settings
         * @instance
         */Settings.prototype.dubbing=0;/**
         * Settings echo.
         * @member {number} echo
         * @memberof Settings
         * @instance
         */Settings.prototype.echo=0;/**
         * Settings ttsEngine.
         * @member {string} ttsEngine
         * @memberof Settings
         * @instance
         */Settings.prototype.ttsEngine="";/**
         * Settings asrEngine.
         * @member {string} asrEngine
         * @memberof Settings
         * @instance
         */Settings.prototype.asrEngine="";/**
         * Settings asrAutoStop.
         * @member {number} asrAutoStop
         * @memberof Settings
         * @instance
         */Settings.prototype.asrAutoStop=0;/**
         * Settings devMode.
         * @member {number} devMode
         * @memberof Settings
         * @instance
         */Settings.prototype.devMode=0;/**
         * Settings authConnector.
         * @member {string} authConnector
         * @memberof Settings
         * @instance
         */Settings.prototype.authConnector="";/**
         * Settings surface.
         * @member {string} surface
         * @memberof Settings
         * @instance
         */Settings.prototype.surface="";/**
         * Creates a new Settings instance using the specified properties.
         * @function create
         * @memberof Settings
         * @static
         * @param {ISettings=} [properties] Properties to set
         * @returns {Settings} Settings instance
         */Settings.create=function create(properties){return new Settings(properties);};/**
         * Encodes the specified Settings message. Does not implicitly {@link Settings.verify|verify} messages.
         * @function encode
         * @memberof Settings
         * @static
         * @param {ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Settings.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.dubbing!=null&&Object.hasOwnProperty.call(message,"dubbing"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dubbing);if(message.echo!=null&&Object.hasOwnProperty.call(message,"echo"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.echo);if(message.ttsEngine!=null&&Object.hasOwnProperty.call(message,"ttsEngine"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.ttsEngine);if(message.asrEngine!=null&&Object.hasOwnProperty.call(message,"asrEngine"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.asrEngine);if(message.asrAutoStop!=null&&Object.hasOwnProperty.call(message,"asrAutoStop"))writer.uint32(/* id 5, wireType 0 =*/40).int32(message.asrAutoStop);if(message.devMode!=null&&Object.hasOwnProperty.call(message,"devMode"))writer.uint32(/* id 6, wireType 0 =*/48).int32(message.devMode);if(message.authConnector!=null&&Object.hasOwnProperty.call(message,"authConnector"))writer.uint32(/* id 7, wireType 2 =*/58).string(message.authConnector);if(message.surface!=null&&Object.hasOwnProperty.call(message,"surface"))writer.uint32(/* id 8, wireType 2 =*/66).string(message.surface);return writer;};/**
         * Encodes the specified Settings message, length delimited. Does not implicitly {@link Settings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Settings
         * @static
         * @param {ISettings} message Settings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Settings.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Settings message from the specified reader or buffer.
         * @function decode
         * @memberof Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Settings.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Settings();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.dubbing=reader.int32();break;case 2:message.echo=reader.int32();break;case 3:message.ttsEngine=reader.string();break;case 4:message.asrEngine=reader.string();break;case 5:message.asrAutoStop=reader.int32();break;case 6:message.devMode=reader.int32();break;case 7:message.authConnector=reader.string();break;case 8:message.surface=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Settings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Settings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Settings} Settings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Settings.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Settings message.
         * @function verify
         * @memberof Settings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Settings.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.dubbing!=null&&message.hasOwnProperty("dubbing"))if(!$util.isInteger(message.dubbing))return"dubbing: integer expected";if(message.echo!=null&&message.hasOwnProperty("echo"))if(!$util.isInteger(message.echo))return"echo: integer expected";if(message.ttsEngine!=null&&message.hasOwnProperty("ttsEngine"))if(!$util.isString(message.ttsEngine))return"ttsEngine: string expected";if(message.asrEngine!=null&&message.hasOwnProperty("asrEngine"))if(!$util.isString(message.asrEngine))return"asrEngine: string expected";if(message.asrAutoStop!=null&&message.hasOwnProperty("asrAutoStop"))if(!$util.isInteger(message.asrAutoStop))return"asrAutoStop: integer expected";if(message.devMode!=null&&message.hasOwnProperty("devMode"))if(!$util.isInteger(message.devMode))return"devMode: integer expected";if(message.authConnector!=null&&message.hasOwnProperty("authConnector"))if(!$util.isString(message.authConnector))return"authConnector: string expected";if(message.surface!=null&&message.hasOwnProperty("surface"))if(!$util.isString(message.surface))return"surface: string expected";return null;};/**
         * Creates a Settings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Settings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Settings} Settings
         */Settings.fromObject=function fromObject(object){if(object instanceof $root.Settings)return object;var message=new $root.Settings();if(object.dubbing!=null)message.dubbing=object.dubbing|0;if(object.echo!=null)message.echo=object.echo|0;if(object.ttsEngine!=null)message.ttsEngine=String(object.ttsEngine);if(object.asrEngine!=null)message.asrEngine=String(object.asrEngine);if(object.asrAutoStop!=null)message.asrAutoStop=object.asrAutoStop|0;if(object.devMode!=null)message.devMode=object.devMode|0;if(object.authConnector!=null)message.authConnector=String(object.authConnector);if(object.surface!=null)message.surface=String(object.surface);return message;};/**
         * Creates a plain object from a Settings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Settings
         * @static
         * @param {Settings} message Settings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Settings.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.dubbing=0;object.echo=0;object.ttsEngine="";object.asrEngine="";object.asrAutoStop=0;object.devMode=0;object.authConnector="";object.surface="";}if(message.dubbing!=null&&message.hasOwnProperty("dubbing"))object.dubbing=message.dubbing;if(message.echo!=null&&message.hasOwnProperty("echo"))object.echo=message.echo;if(message.ttsEngine!=null&&message.hasOwnProperty("ttsEngine"))object.ttsEngine=message.ttsEngine;if(message.asrEngine!=null&&message.hasOwnProperty("asrEngine"))object.asrEngine=message.asrEngine;if(message.asrAutoStop!=null&&message.hasOwnProperty("asrAutoStop"))object.asrAutoStop=message.asrAutoStop;if(message.devMode!=null&&message.hasOwnProperty("devMode"))object.devMode=message.devMode;if(message.authConnector!=null&&message.hasOwnProperty("authConnector"))object.authConnector=message.authConnector;if(message.surface!=null&&message.hasOwnProperty("surface"))object.surface=message.surface;return object;};/**
         * Converts this Settings to JSON.
         * @function toJSON
         * @memberof Settings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Settings.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Settings;}();$root.LegacyDevice=function(){/**
         * Properties of a LegacyDevice.
         * @exports ILegacyDevice
         * @interface ILegacyDevice
         * @property {string|null} [clientType] LegacyDevice clientType
         * @property {string|null} [channel] LegacyDevice channel
         * @property {string|null} [channelVersion] LegacyDevice channelVersion
         * @property {string|null} [platformName] LegacyDevice platformName
         * @property {string|null} [platformVersion] LegacyDevice platformVersion
         * @property {string|null} [sdkVersion] LegacyDevice sdkVersion
         * @property {string|null} [protocolVersion] LegacyDevice protocolVersion
         */ /**
         * Constructs a new LegacyDevice.
         * @exports LegacyDevice
         * @classdesc Represents a LegacyDevice.
         * @implements ILegacyDevice
         * @constructor
         * @param {ILegacyDevice=} [properties] Properties to set
         */function LegacyDevice(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * LegacyDevice clientType.
         * @member {string} clientType
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.clientType="";/**
         * LegacyDevice channel.
         * @member {string} channel
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.channel="";/**
         * LegacyDevice channelVersion.
         * @member {string} channelVersion
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.channelVersion="";/**
         * LegacyDevice platformName.
         * @member {string} platformName
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.platformName="";/**
         * LegacyDevice platformVersion.
         * @member {string} platformVersion
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.platformVersion="";/**
         * LegacyDevice sdkVersion.
         * @member {string} sdkVersion
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.sdkVersion="";/**
         * LegacyDevice protocolVersion.
         * @member {string} protocolVersion
         * @memberof LegacyDevice
         * @instance
         */LegacyDevice.prototype.protocolVersion="";/**
         * Creates a new LegacyDevice instance using the specified properties.
         * @function create
         * @memberof LegacyDevice
         * @static
         * @param {ILegacyDevice=} [properties] Properties to set
         * @returns {LegacyDevice} LegacyDevice instance
         */LegacyDevice.create=function create(properties){return new LegacyDevice(properties);};/**
         * Encodes the specified LegacyDevice message. Does not implicitly {@link LegacyDevice.verify|verify} messages.
         * @function encode
         * @memberof LegacyDevice
         * @static
         * @param {ILegacyDevice} message LegacyDevice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */LegacyDevice.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.clientType!=null&&Object.hasOwnProperty.call(message,"clientType"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientType);if(message.channel!=null&&Object.hasOwnProperty.call(message,"channel"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.channel);if(message.channelVersion!=null&&Object.hasOwnProperty.call(message,"channelVersion"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.channelVersion);if(message.platformName!=null&&Object.hasOwnProperty.call(message,"platformName"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.platformName);if(message.platformVersion!=null&&Object.hasOwnProperty.call(message,"platformVersion"))writer.uint32(/* id 5, wireType 2 =*/42).string(message.platformVersion);if(message.sdkVersion!=null&&Object.hasOwnProperty.call(message,"sdkVersion"))writer.uint32(/* id 6, wireType 2 =*/50).string(message.sdkVersion);if(message.protocolVersion!=null&&Object.hasOwnProperty.call(message,"protocolVersion"))writer.uint32(/* id 7, wireType 2 =*/58).string(message.protocolVersion);return writer;};/**
         * Encodes the specified LegacyDevice message, length delimited. Does not implicitly {@link LegacyDevice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LegacyDevice
         * @static
         * @param {ILegacyDevice} message LegacyDevice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */LegacyDevice.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a LegacyDevice message from the specified reader or buffer.
         * @function decode
         * @memberof LegacyDevice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LegacyDevice} LegacyDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */LegacyDevice.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.LegacyDevice();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.clientType=reader.string();break;case 2:message.channel=reader.string();break;case 3:message.channelVersion=reader.string();break;case 4:message.platformName=reader.string();break;case 5:message.platformVersion=reader.string();break;case 6:message.sdkVersion=reader.string();break;case 7:message.protocolVersion=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a LegacyDevice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LegacyDevice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LegacyDevice} LegacyDevice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */LegacyDevice.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a LegacyDevice message.
         * @function verify
         * @memberof LegacyDevice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */LegacyDevice.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.clientType!=null&&message.hasOwnProperty("clientType"))if(!$util.isString(message.clientType))return"clientType: string expected";if(message.channel!=null&&message.hasOwnProperty("channel"))if(!$util.isString(message.channel))return"channel: string expected";if(message.channelVersion!=null&&message.hasOwnProperty("channelVersion"))if(!$util.isString(message.channelVersion))return"channelVersion: string expected";if(message.platformName!=null&&message.hasOwnProperty("platformName"))if(!$util.isString(message.platformName))return"platformName: string expected";if(message.platformVersion!=null&&message.hasOwnProperty("platformVersion"))if(!$util.isString(message.platformVersion))return"platformVersion: string expected";if(message.sdkVersion!=null&&message.hasOwnProperty("sdkVersion"))if(!$util.isString(message.sdkVersion))return"sdkVersion: string expected";if(message.protocolVersion!=null&&message.hasOwnProperty("protocolVersion"))if(!$util.isString(message.protocolVersion))return"protocolVersion: string expected";return null;};/**
         * Creates a LegacyDevice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LegacyDevice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LegacyDevice} LegacyDevice
         */LegacyDevice.fromObject=function fromObject(object){if(object instanceof $root.LegacyDevice)return object;var message=new $root.LegacyDevice();if(object.clientType!=null)message.clientType=String(object.clientType);if(object.channel!=null)message.channel=String(object.channel);if(object.channelVersion!=null)message.channelVersion=String(object.channelVersion);if(object.platformName!=null)message.platformName=String(object.platformName);if(object.platformVersion!=null)message.platformVersion=String(object.platformVersion);if(object.sdkVersion!=null)message.sdkVersion=String(object.sdkVersion);if(object.protocolVersion!=null)message.protocolVersion=String(object.protocolVersion);return message;};/**
         * Creates a plain object from a LegacyDevice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LegacyDevice
         * @static
         * @param {LegacyDevice} message LegacyDevice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */LegacyDevice.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.clientType="";object.channel="";object.channelVersion="";object.platformName="";object.platformVersion="";object.sdkVersion="";object.protocolVersion="";}if(message.clientType!=null&&message.hasOwnProperty("clientType"))object.clientType=message.clientType;if(message.channel!=null&&message.hasOwnProperty("channel"))object.channel=message.channel;if(message.channelVersion!=null&&message.hasOwnProperty("channelVersion"))object.channelVersion=message.channelVersion;if(message.platformName!=null&&message.hasOwnProperty("platformName"))object.platformName=message.platformName;if(message.platformVersion!=null&&message.hasOwnProperty("platformVersion"))object.platformVersion=message.platformVersion;if(message.sdkVersion!=null&&message.hasOwnProperty("sdkVersion"))object.sdkVersion=message.sdkVersion;if(message.protocolVersion!=null&&message.hasOwnProperty("protocolVersion"))object.protocolVersion=message.protocolVersion;return object;};/**
         * Converts this LegacyDevice to JSON.
         * @function toJSON
         * @memberof LegacyDevice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */LegacyDevice.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return LegacyDevice;}();$root.Voice=function(){/**
         * Properties of a Voice.
         * @exports IVoice
         * @interface IVoice
         * @property {Uint8Array|null} [data] Voice data
         */ /**
         * Constructs a new Voice.
         * @exports Voice
         * @classdesc Represents a Voice.
         * @implements IVoice
         * @constructor
         * @param {IVoice=} [properties] Properties to set
         */function Voice(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Voice data.
         * @member {Uint8Array} data
         * @memberof Voice
         * @instance
         */Voice.prototype.data=$util.newBuffer([]);/**
         * Creates a new Voice instance using the specified properties.
         * @function create
         * @memberof Voice
         * @static
         * @param {IVoice=} [properties] Properties to set
         * @returns {Voice} Voice instance
         */Voice.create=function create(properties){return new Voice(properties);};/**
         * Encodes the specified Voice message. Does not implicitly {@link Voice.verify|verify} messages.
         * @function encode
         * @memberof Voice
         * @static
         * @param {IVoice} message Voice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Voice.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.data!=null&&Object.hasOwnProperty.call(message,"data"))writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);return writer;};/**
         * Encodes the specified Voice message, length delimited. Does not implicitly {@link Voice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Voice
         * @static
         * @param {IVoice} message Voice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Voice.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Voice message from the specified reader or buffer.
         * @function decode
         * @memberof Voice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Voice} Voice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Voice.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Voice();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.data=reader.bytes();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Voice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Voice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Voice} Voice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Voice.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Voice message.
         * @function verify
         * @memberof Voice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Voice.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.data!=null&&message.hasOwnProperty("data"))if(!(message.data&&typeof message.data.length==="number"||$util.isString(message.data)))return"data: buffer expected";return null;};/**
         * Creates a Voice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Voice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Voice} Voice
         */Voice.fromObject=function fromObject(object){if(object instanceof $root.Voice)return object;var message=new $root.Voice();if(object.data!=null)if(typeof object.data==="string")$util.base64.decode(object.data,message.data=$util.newBuffer($util.base64.length(object.data)),0);else if(object.data.length)message.data=object.data;return message;};/**
         * Creates a plain object from a Voice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Voice
         * @static
         * @param {Voice} message Voice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Voice.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)if(options.bytes===String)object.data="";else{object.data=[];if(options.bytes!==Array)object.data=$util.newBuffer(object.data);}if(message.data!=null&&message.hasOwnProperty("data"))object.data=options.bytes===String?$util.base64.encode(message.data,0,message.data.length):options.bytes===Array?Array.prototype.slice.call(message.data):message.data;return object;};/**
         * Converts this Voice to JSON.
         * @function toJSON
         * @memberof Voice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Voice.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Voice;}();$root.Text=function(){/**
         * Properties of a Text.
         * @exports IText
         * @interface IText
         * @property {string|null} [data] Text data
         * @property {string|null} [type] Text type
         */ /**
         * Constructs a new Text.
         * @exports Text
         * @classdesc Represents a Text.
         * @implements IText
         * @constructor
         * @param {IText=} [properties] Properties to set
         */function Text(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Text data.
         * @member {string} data
         * @memberof Text
         * @instance
         */Text.prototype.data="";/**
         * Text type.
         * @member {string} type
         * @memberof Text
         * @instance
         */Text.prototype.type="";/**
         * Creates a new Text instance using the specified properties.
         * @function create
         * @memberof Text
         * @static
         * @param {IText=} [properties] Properties to set
         * @returns {Text} Text instance
         */Text.create=function create(properties){return new Text(properties);};/**
         * Encodes the specified Text message. Does not implicitly {@link Text.verify|verify} messages.
         * @function encode
         * @memberof Text
         * @static
         * @param {IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Text.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.data!=null&&Object.hasOwnProperty.call(message,"data"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);if(message.type!=null&&Object.hasOwnProperty.call(message,"type"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);return writer;};/**
         * Encodes the specified Text message, length delimited. Does not implicitly {@link Text.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Text
         * @static
         * @param {IText} message Text message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Text.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Text message from the specified reader or buffer.
         * @function decode
         * @memberof Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Text.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Text();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.data=reader.string();break;case 2:message.type=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Text message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Text
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Text} Text
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Text.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Text message.
         * @function verify
         * @memberof Text
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Text.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.data!=null&&message.hasOwnProperty("data"))if(!$util.isString(message.data))return"data: string expected";if(message.type!=null&&message.hasOwnProperty("type"))if(!$util.isString(message.type))return"type: string expected";return null;};/**
         * Creates a Text message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Text
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Text} Text
         */Text.fromObject=function fromObject(object){if(object instanceof $root.Text)return object;var message=new $root.Text();if(object.data!=null)message.data=String(object.data);if(object.type!=null)message.type=String(object.type);return message;};/**
         * Creates a plain object from a Text message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Text
         * @static
         * @param {Text} message Text
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Text.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.data="";object.type="";}if(message.data!=null&&message.hasOwnProperty("data"))object.data=message.data;if(message.type!=null&&message.hasOwnProperty("type"))object.type=message.type;return object;};/**
         * Converts this Text to JSON.
         * @function toJSON
         * @memberof Text
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Text.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Text;}();$root.SystemMessage=function(){/**
         * Properties of a SystemMessage.
         * @exports ISystemMessage
         * @interface ISystemMessage
         * @property {string|null} [data] SystemMessage data
         */ /**
         * Constructs a new SystemMessage.
         * @exports SystemMessage
         * @classdesc Represents a SystemMessage.
         * @implements ISystemMessage
         * @constructor
         * @param {ISystemMessage=} [properties] Properties to set
         */function SystemMessage(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * SystemMessage data.
         * @member {string} data
         * @memberof SystemMessage
         * @instance
         */SystemMessage.prototype.data="";/**
         * Creates a new SystemMessage instance using the specified properties.
         * @function create
         * @memberof SystemMessage
         * @static
         * @param {ISystemMessage=} [properties] Properties to set
         * @returns {SystemMessage} SystemMessage instance
         */SystemMessage.create=function create(properties){return new SystemMessage(properties);};/**
         * Encodes the specified SystemMessage message. Does not implicitly {@link SystemMessage.verify|verify} messages.
         * @function encode
         * @memberof SystemMessage
         * @static
         * @param {ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */SystemMessage.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.data!=null&&Object.hasOwnProperty.call(message,"data"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);return writer;};/**
         * Encodes the specified SystemMessage message, length delimited. Does not implicitly {@link SystemMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SystemMessage
         * @static
         * @param {ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */SystemMessage.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a SystemMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */SystemMessage.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.SystemMessage();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.data=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a SystemMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */SystemMessage.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a SystemMessage message.
         * @function verify
         * @memberof SystemMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */SystemMessage.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.data!=null&&message.hasOwnProperty("data"))if(!$util.isString(message.data))return"data: string expected";return null;};/**
         * Creates a SystemMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SystemMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SystemMessage} SystemMessage
         */SystemMessage.fromObject=function fromObject(object){if(object instanceof $root.SystemMessage)return object;var message=new $root.SystemMessage();if(object.data!=null)message.data=String(object.data);return message;};/**
         * Creates a plain object from a SystemMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SystemMessage
         * @static
         * @param {SystemMessage} message SystemMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */SystemMessage.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.data="";if(message.data!=null&&message.hasOwnProperty("data"))object.data=message.data;return object;};/**
         * Converts this SystemMessage to JSON.
         * @function toJSON
         * @memberof SystemMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */SystemMessage.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return SystemMessage;}();$root.Status=function(){/**
         * Properties of a Status.
         * @exports IStatus
         * @interface IStatus
         * @property {number|null} [code] Status code
         * @property {string|null} [description] Status description
         * @property {string|null} [technicalDescription] Status technicalDescription
         */ /**
         * Constructs a new Status.
         * @exports Status
         * @classdesc Represents a Status.
         * @implements IStatus
         * @constructor
         * @param {IStatus=} [properties] Properties to set
         */function Status(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Status code.
         * @member {number} code
         * @memberof Status
         * @instance
         */Status.prototype.code=0;/**
         * Status description.
         * @member {string} description
         * @memberof Status
         * @instance
         */Status.prototype.description="";/**
         * Status technicalDescription.
         * @member {string} technicalDescription
         * @memberof Status
         * @instance
         */Status.prototype.technicalDescription="";/**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof Status
         * @static
         * @param {IStatus=} [properties] Properties to set
         * @returns {Status} Status instance
         */Status.create=function create(properties){return new Status(properties);};/**
         * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
         * @function encode
         * @memberof Status
         * @static
         * @param {IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Status.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.code!=null&&Object.hasOwnProperty.call(message,"code"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);if(message.description!=null&&Object.hasOwnProperty.call(message,"description"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);if(message.technicalDescription!=null&&Object.hasOwnProperty.call(message,"technicalDescription"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.technicalDescription);return writer;};/**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Status
         * @static
         * @param {IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Status.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Status.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Status();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.code=reader.int32();break;case 2:message.description=reader.string();break;case 3:message.technicalDescription=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Status.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Status message.
         * @function verify
         * @memberof Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Status.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.code!=null&&message.hasOwnProperty("code"))if(!$util.isInteger(message.code))return"code: integer expected";if(message.description!=null&&message.hasOwnProperty("description"))if(!$util.isString(message.description))return"description: string expected";if(message.technicalDescription!=null&&message.hasOwnProperty("technicalDescription"))if(!$util.isString(message.technicalDescription))return"technicalDescription: string expected";return null;};/**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Status} Status
         */Status.fromObject=function fromObject(object){if(object instanceof $root.Status)return object;var message=new $root.Status();if(object.code!=null)message.code=object.code|0;if(object.description!=null)message.description=String(object.description);if(object.technicalDescription!=null)message.technicalDescription=String(object.technicalDescription);return message;};/**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Status
         * @static
         * @param {Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Status.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.code=0;object.description="";object.technicalDescription="";}if(message.code!=null&&message.hasOwnProperty("code"))object.code=message.code;if(message.description!=null&&message.hasOwnProperty("description"))object.description=message.description;if(message.technicalDescription!=null&&message.hasOwnProperty("technicalDescription"))object.technicalDescription=message.technicalDescription;return object;};/**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Status.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Status;}();$root.Bytes=function(){/**
         * Properties of a Bytes.
         * @exports IBytes
         * @interface IBytes
         * @property {Uint8Array|null} [data] Bytes data
         * @property {string|null} [desc] Bytes desc
         */ /**
         * Constructs a new Bytes.
         * @exports Bytes
         * @classdesc Represents a Bytes.
         * @implements IBytes
         * @constructor
         * @param {IBytes=} [properties] Properties to set
         */function Bytes(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Bytes data.
         * @member {Uint8Array} data
         * @memberof Bytes
         * @instance
         */Bytes.prototype.data=$util.newBuffer([]);/**
         * Bytes desc.
         * @member {string} desc
         * @memberof Bytes
         * @instance
         */Bytes.prototype.desc="";/**
         * Creates a new Bytes instance using the specified properties.
         * @function create
         * @memberof Bytes
         * @static
         * @param {IBytes=} [properties] Properties to set
         * @returns {Bytes} Bytes instance
         */Bytes.create=function create(properties){return new Bytes(properties);};/**
         * Encodes the specified Bytes message. Does not implicitly {@link Bytes.verify|verify} messages.
         * @function encode
         * @memberof Bytes
         * @static
         * @param {IBytes} message Bytes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Bytes.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.data!=null&&Object.hasOwnProperty.call(message,"data"))writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);if(message.desc!=null&&Object.hasOwnProperty.call(message,"desc"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);return writer;};/**
         * Encodes the specified Bytes message, length delimited. Does not implicitly {@link Bytes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Bytes
         * @static
         * @param {IBytes} message Bytes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Bytes.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Bytes message from the specified reader or buffer.
         * @function decode
         * @memberof Bytes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bytes} Bytes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Bytes.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Bytes();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.data=reader.bytes();break;case 2:message.desc=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Bytes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Bytes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Bytes} Bytes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Bytes.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Bytes message.
         * @function verify
         * @memberof Bytes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Bytes.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.data!=null&&message.hasOwnProperty("data"))if(!(message.data&&typeof message.data.length==="number"||$util.isString(message.data)))return"data: buffer expected";if(message.desc!=null&&message.hasOwnProperty("desc"))if(!$util.isString(message.desc))return"desc: string expected";return null;};/**
         * Creates a Bytes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Bytes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Bytes} Bytes
         */Bytes.fromObject=function fromObject(object){if(object instanceof $root.Bytes)return object;var message=new $root.Bytes();if(object.data!=null)if(typeof object.data==="string")$util.base64.decode(object.data,message.data=$util.newBuffer($util.base64.length(object.data)),0);else if(object.data.length)message.data=object.data;if(object.desc!=null)message.desc=String(object.desc);return message;};/**
         * Creates a plain object from a Bytes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Bytes
         * @static
         * @param {Bytes} message Bytes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Bytes.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){if(options.bytes===String)object.data="";else{object.data=[];if(options.bytes!==Array)object.data=$util.newBuffer(object.data);}object.desc="";}if(message.data!=null&&message.hasOwnProperty("data"))object.data=options.bytes===String?$util.base64.encode(message.data,0,message.data.length):options.bytes===Array?Array.prototype.slice.call(message.data):message.data;if(message.desc!=null&&message.hasOwnProperty("desc"))object.desc=message.desc;return object;};/**
         * Converts this Bytes to JSON.
         * @function toJSON
         * @memberof Bytes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Bytes.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Bytes;}();$root.DevContext=function(){/**
         * Properties of a DevContext.
         * @exports IDevContext
         * @interface IDevContext
         * @property {string|null} [name] DevContext name
         * @property {number|Long|null} [timestampMs] DevContext timestampMs
         * @property {string|null} [data] DevContext data
         */ /**
         * Constructs a new DevContext.
         * @exports DevContext
         * @classdesc Represents a DevContext.
         * @implements IDevContext
         * @constructor
         * @param {IDevContext=} [properties] Properties to set
         */function DevContext(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * DevContext name.
         * @member {string} name
         * @memberof DevContext
         * @instance
         */DevContext.prototype.name="";/**
         * DevContext timestampMs.
         * @member {number|Long} timestampMs
         * @memberof DevContext
         * @instance
         */DevContext.prototype.timestampMs=$util.Long?$util.Long.fromBits(0,0,false):0;/**
         * DevContext data.
         * @member {string} data
         * @memberof DevContext
         * @instance
         */DevContext.prototype.data="";/**
         * Creates a new DevContext instance using the specified properties.
         * @function create
         * @memberof DevContext
         * @static
         * @param {IDevContext=} [properties] Properties to set
         * @returns {DevContext} DevContext instance
         */DevContext.create=function create(properties){return new DevContext(properties);};/**
         * Encodes the specified DevContext message. Does not implicitly {@link DevContext.verify|verify} messages.
         * @function encode
         * @memberof DevContext
         * @static
         * @param {IDevContext} message DevContext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */DevContext.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.name!=null&&Object.hasOwnProperty.call(message,"name"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);if(message.timestampMs!=null&&Object.hasOwnProperty.call(message,"timestampMs"))writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestampMs);if(message.data!=null&&Object.hasOwnProperty.call(message,"data"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);return writer;};/**
         * Encodes the specified DevContext message, length delimited. Does not implicitly {@link DevContext.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DevContext
         * @static
         * @param {IDevContext} message DevContext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */DevContext.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a DevContext message from the specified reader or buffer.
         * @function decode
         * @memberof DevContext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DevContext} DevContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */DevContext.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.DevContext();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.name=reader.string();break;case 2:message.timestampMs=reader.int64();break;case 3:message.data=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a DevContext message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DevContext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DevContext} DevContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */DevContext.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a DevContext message.
         * @function verify
         * @memberof DevContext
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */DevContext.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.name!=null&&message.hasOwnProperty("name"))if(!$util.isString(message.name))return"name: string expected";if(message.timestampMs!=null&&message.hasOwnProperty("timestampMs"))if(!$util.isInteger(message.timestampMs)&&!(message.timestampMs&&$util.isInteger(message.timestampMs.low)&&$util.isInteger(message.timestampMs.high)))return"timestampMs: integer|Long expected";if(message.data!=null&&message.hasOwnProperty("data"))if(!$util.isString(message.data))return"data: string expected";return null;};/**
         * Creates a DevContext message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DevContext
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DevContext} DevContext
         */DevContext.fromObject=function fromObject(object){if(object instanceof $root.DevContext)return object;var message=new $root.DevContext();if(object.name!=null)message.name=String(object.name);if(object.timestampMs!=null)if($util.Long)(message.timestampMs=$util.Long.fromValue(object.timestampMs)).unsigned=false;else if(typeof object.timestampMs==="string")message.timestampMs=parseInt(object.timestampMs,10);else if(typeof object.timestampMs==="number")message.timestampMs=object.timestampMs;else if(typeof object.timestampMs==="object")message.timestampMs=new $util.LongBits(object.timestampMs.low>>>0,object.timestampMs.high>>>0).toNumber();if(object.data!=null)message.data=String(object.data);return message;};/**
         * Creates a plain object from a DevContext message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DevContext
         * @static
         * @param {DevContext} message DevContext
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */DevContext.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.name="";if($util.Long){var long=new $util.Long(0,0,false);object.timestampMs=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.timestampMs=options.longs===String?"0":0;object.data="";}if(message.name!=null&&message.hasOwnProperty("name"))object.name=message.name;if(message.timestampMs!=null&&message.hasOwnProperty("timestampMs"))if(typeof message.timestampMs==="number")object.timestampMs=options.longs===String?String(message.timestampMs):message.timestampMs;else object.timestampMs=options.longs===String?$util.Long.prototype.toString.call(message.timestampMs):options.longs===Number?new $util.LongBits(message.timestampMs.low>>>0,message.timestampMs.high>>>0).toNumber():message.timestampMs;if(message.data!=null&&message.hasOwnProperty("data"))object.data=message.data;return object;};/**
         * Converts this DevContext to JSON.
         * @function toJSON
         * @memberof DevContext
         * @instance
         * @returns {Object.<string,*>} JSON object
         */DevContext.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return DevContext;}();return $root;});});var VpsVersion;exports.VpsVersion=VpsVersion;(function(VpsVersion){VpsVersion[VpsVersion["1.0"]=1]="1.0";VpsVersion[VpsVersion["2.0"]=2]="2.0";VpsVersion[VpsVersion["3.0"]=3]="3.0";VpsVersion[VpsVersion["4.0"]=4]="4.0";VpsVersion[VpsVersion["5.0"]=5]="5.0";})(VpsVersion||(exports.VpsVersion=VpsVersion={}));var MessageNames={ANSWER_TO_USER:'ANSWER_TO_USER',STT:'STT',MUSIC_RECOGNITION:'MUSIC_RECOGNITION'};exports.MessageNames=MessageNames;var appendHeader=function(buffer){// Добавляем 4 байта в начало с длинной сообщения
var arrayBuffer=new ArrayBuffer(4);var dataView=new DataView(arrayBuffer,0);dataView.setInt32(0,buffer.length,true);var uint8Array=new Uint8Array(4+buffer.length);uint8Array.set(new Uint8Array(arrayBuffer));uint8Array.set(buffer,4);return uint8Array;};var compileBasePayload=function(_a){var userId=_a.userId,token=_a.token,userChannel=_a.userChannel,version=_a.version,messageName=_a.messageName,vpsToken=_a.vpsToken;if(version<3){return{userId:userId,token:token,userChannel:userChannel,messageName:messageName,vpsToken:vpsToken,version:version};}return{token:token,messageName:messageName,version:version};};var createClient=function(clientParams,logger){var url=clientParams.url,userId=clientParams.userId,token=clientParams.token,userChannel=clientParams.userChannel,locale=clientParams.locale,device=clientParams.device,settings=clientParams.settings,legacyDevice=clientParams.legacyDevice,version=clientParams.version,messageName=clientParams.messageName,vpsToken=clientParams.vpsToken,meta=clientParams.meta;var basePayload=compileBasePayload({userId:userId,token:token,messageName:messageName,vpsToken:vpsToken,userChannel:userChannel,version:version});var status='connecting';var messageQueue=[];var _a=createNanoEvents(),on=_a.on,emit=_a.emit,once=_a.once;var pendingMessages=new Map();var commitedMessages=new Map();var currentSettings={device:device,legacyDevice:legacyDevice,settings:settings,locale:locale};var currentMessageId=Date.now();var retries=0;var destroyed=false;var ws;var timeOut;var clearRetryTimer;var getMessageId=function(){return currentMessageId++;};var waitForAnswerToUser=function(messageId){return new Promise(function(resolve){var off=on('systemMessage',function(systemMessageData,originalMessage){if(originalMessage.messageId===messageId&&originalMessage.messageName===MessageNames.ANSWER_TO_USER){off();resolve(systemMessageData);}});});};var send=function(_a){var payload=_a.payload,messageId=_a.messageId,other=__rest(_a,["payload","messageId"]);var message=proto.Message.create(__assign(__assign(__assign(__assign({messageName:''},basePayload),payload),{messageId:messageId}),other));var buffer=proto.Message.encode(message).finish();var bufferWithHeader=appendHeader(buffer);logger===null||logger===void 0?void 0:logger.logOutcoming(message);emit('outcoming',message);if(status==='ready'){ws.send(bufferWithHeader);}else{messageQueue.push(bufferWithHeader);}};var sendDevice=function(data,last,messageId){if(last===void 0){last=true;}if(messageId===void 0){messageId=getMessageId();}currentSettings=__assign(__assign({},currentSettings),{device:data});return send({payload:{device:proto.Device.create(data),last:last?1:-1},messageId:messageId});};var sendInitialSettings=function(data,last,messageId,params){if(last===void 0){last=true;}if(messageId===void 0){messageId=getMessageId();}if(params===void 0){params={};}if(data.device&&data.settings){currentSettings=__assign(__assign({},currentSettings),{device:data.device,settings:data.settings,locale:data.locale||undefined});}return send({payload:__assign({initialSettings:proto.InitialSettings.create(data),last:last?1:-1},params),messageId:messageId});};var sendLegacyDevice=function(data,last,messageId){if(last===void 0){last=true;}if(messageId===void 0){messageId=getMessageId();}currentSettings=__assign(__assign({},currentSettings),{legacyDevice:data});return send({payload:{legacyDevice:proto.LegacyDevice.create(data),last:last?1:-1},messageId:messageId});};var sendSettings=function(data,last,messageId){if(last===void 0){last=true;}if(messageId===void 0){messageId=getMessageId();}currentSettings=__assign(__assign({},currentSettings),{settings:data});return send({payload:{settings:proto.Settings.create(data),last:last?1:-1},messageId:messageId});};var sendText=function(data,params,type,messageId){var _a;if(params===void 0){params={};}if(type===void 0){type='';}if(messageId===void 0){messageId=getMessageId();}var text=type?{data:data,type:type}:{data:data};send(__assign({payload:{text:proto.Text.create(text),last:(_a=params.last)!==null&&_a!==void 0?_a:1},messageId:messageId},params));return waitForAnswerToUser(messageId);};var sendSystemMessage=function(_a,last,messageId,params){var data=_a.data,_b=_a.messageName,messageName=_b===void 0?'':_b;if(last===void 0){last=true;}if(messageId===void 0){messageId=getMessageId();}if(params===void 0){params={};}send({payload:__assign({systemMessage:proto.SystemMessage.create({data:JSON.stringify(data)}),messageName:messageName,last:last?1:-1},params),messageId:messageId});return waitForAnswerToUser(messageId);};var sendVoice=function(data,last,messageId,messageName,params){if(last===void 0){last=true;}if(messageId===void 0){messageId=getMessageId();}if(params===void 0){params={};}return send({payload:__assign({voice:proto.Voice.create({data:new Uint8Array(data)}),messageName:messageName,last:last?1:-1},params),messageId:messageId});};var updateDefauls=function(obj){Object.assign(basePayload,obj);};var destroy=function(){destroyed=true;ws&&ws.close();clearTimeout(timeOut);timeOut=undefined;};var startWebSocket=function(){status='connecting';setTimeout(function(){emit('connecting');},0);ws=new WebSocket(url);ws.binaryType='arraybuffer';ws.addEventListener('open',function(){status='ready';clearRetryTimer=window.setTimeout(function(){retries=0;},500);if(ws.readyState===1){if(version<3){if(version===1&&currentSettings.legacyDevice){sendLegacyDevice(currentSettings.legacyDevice);}else if(version===2&&currentSettings.device){sendDevice(currentSettings.device);}sendSettings(currentSettings.settings);}else{sendInitialSettings({userId:userId,userChannel:userChannel,device:currentSettings.device,settings:currentSettings.settings,locale:version>3?currentSettings.locale:undefined},true,undefined,{meta:meta});}logger===null||logger===void 0?void 0:logger.logInit(__assign(__assign({},clientParams),currentSettings));while(messageQueue.length>0){var message=messageQueue.shift();ws.send(message);}}emit('ready');});ws.addEventListener('close',function(){status='closed';clearTimeout(clearRetryTimer);if(!ws||ws.readyState===3&&!destroyed){if(timeOut){clearTimeout(timeOut);}timeOut=window.setTimeout(function(){startWebSocket();retries++;},300*retries);}emit('close');});ws.addEventListener('message',function(e){var _a;var message=proto.Message.decode(new Uint8Array(e.data).slice(4));var messages=pendingMessages.get(message.messageId)||[];logger===null||logger===void 0?void 0:logger.logIncoming(message);messages.push(message);if(message.last===1){commitedMessages.set(message.messageId,messages);pendingMessages.delete(message.messageId);}else{pendingMessages.set(message.messageId,messages);}emit('message',message);if((_a=message.systemMessage)===null||_a===void 0?void 0:_a.data){var systemMessage=JSON.parse(message.systemMessage.data);emit('systemMessage',systemMessage,message);}});};startWebSocket();var batch=function(cb){var batchingMessageId=getMessageId();var lastMessageSent=false;var checkLastMessageStatus=function(last){if(lastMessageSent){if(last){throw new Error("Can't send two last items in batch");}else{throw new Error("Can't send messages in batch after last message have been sent");}}else if(last){lastMessageSent=true;}};var threeParamsMethods=Object.entries({sendDevice:sendDevice,sendSettings:sendSettings,sendInitialSettings:sendInitialSettings,sendLegacyDevice:sendLegacyDevice}).reduce(function(acc,curr){var key=curr[0];acc[key]=function(){var params=[];for(var _i=0;_i<arguments.length;_i++){params[_i]=arguments[_i];}checkLastMessageStatus(params[1]);return curr[1](params[0],params[1],batchingMessageId);};return acc;},{});var upgradedSend=function(params){checkLastMessageStatus(params.payload.last===1);return send(__assign(__assign({},params),{messageId:batchingMessageId}));};var upgradedSendText=function(){var _a=[];for(var _i=0;_i<arguments.length;_i++){_a[_i]=arguments[_i];}var data=_a[0],params=_a[1],type=_a[2];checkLastMessageStatus((params===null||params===void 0?void 0:params.last)===1);return sendText(data,params,type,batchingMessageId);};var upgradedSendSystemMessage=function(data,last,params){checkLastMessageStatus(last);return sendSystemMessage(data,last,batchingMessageId,params);};var upgradedSendVoice=function(data,last,messageName,params){checkLastMessageStatus(last);return sendVoice(data,last,batchingMessageId,messageName,params);};return cb(__assign(__assign({},threeParamsMethods),{send:upgradedSend,sendText:upgradedSendText,sendSystemMessage:upgradedSendSystemMessage,sendVoice:upgradedSendVoice,messageId:batchingMessageId}));};return{once:once,send:send,sendDevice:sendDevice,sendLegacyDevice:sendLegacyDevice,sendSettings:sendSettings,sendText:sendText,sendVoice:sendVoice,waitForAnswerToUser:waitForAnswerToUser,sendSystemMessage:sendSystemMessage,on:on,updateDefauls:updateDefauls,destroy:destroy,batch:batch,get currentMessageId(){return currentMessageId;}};};exports.createClient=createClient;var assistantSphereIcon='data:image/png;base64,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';var NativePanel=function(_a){var defaultText=_a.defaultText,sendText=_a.sendText,className=_a.className,tabIndex=_a.tabIndex,suggestions=_a.suggestions,bubbleText=_a.bubbleText,onListen=_a.onListen,onSubscribeListenStatus=_a.onSubscribeListenStatus,onSubscribeHypotesis=_a.onSubscribeHypotesis;var _b=(0,_react.useState)(defaultText),value=_b[0],setValue=_b[1];var _c=(0,_react.useState)(false),recording=_c[0],setRecording=_c[1];var _d=(0,_react.useState)(bubbleText),bubble=_d[0],setBubble=_d[1];var _e=(0,_react.useState)(bubbleText),prevBubbleText=_e[0],setPrevBubbleText=_e[1];if(bubbleText!==prevBubbleText){setPrevBubbleText(bubbleText);setBubble(bubbleText);}var handleSphereClick=(0,_react.useCallback)(function(){setValue('');onListen();},[onListen]);var createSuggestClickHandler=function(suggest){return function(){var action=suggest.action;if('text'in action){sendText(action.text);}};};(0,_react.useEffect)(function(){var unsubscribeStatus=onSubscribeListenStatus(function(type){setRecording(type==='listen');});var unsubscribeHypotesis=onSubscribeHypotesis(function(hypotesis,last){setValue(last?'':hypotesis);});return function(){unsubscribeStatus();unsubscribeHypotesis();};},[onSubscribeListenStatus,onSubscribeHypotesis]);return/*#__PURE__*/_react.default.createElement("div",{className:className?"nativePanel "+className:'nativePanel'},bubble&&/*#__PURE__*/_react.default.createElement("div",{className:"bubble",onClick:function(){return setBubble('');}},bubble),/*#__PURE__*/_react.default.createElement("div",{className:recording?'sphere active':'sphere',onClick:handleSphereClick,style:{backgroundImage:"url("+assistantSphereIcon+")"}}),/*#__PURE__*/_react.default.createElement("label",{htmlFor:"voice",className:"label"},"\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435"),/*#__PURE__*/_react.default.createElement("input",{id:"voice",value:value,onChange:function(e){setValue(e.currentTarget.value);},tabIndex:typeof tabIndex==='number'&&Number.isInteger(tabIndex)?tabIndex:-1,disabled:recording,onKeyDown:function(e){if(e.key==='Enter'){sendText(value);setValue('');}},className:"input"}),/*#__PURE__*/_react.default.createElement("div",{className:"suggestPanel"},suggestions.map(function(s){return/*#__PURE__*/_react.default.createElement("div",{key:"suggest-"+s.title,onClick:createSuggestClickHandler(s),className:"suggest"},s.title);})));};var div;var renderNativePanel=function(props){if(!div){div=document.createElement('div');document.body.appendChild(div);}(0,_reactDom.render)(/*#__PURE__*/_react.default.createElement(NativePanel,__assign({},props)),div);};// стили
var NativePanelStyles="\n@keyframes rotation {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.nativePanel {\n    background-color: rgba(255, 255, 255, 0.04);\n    backdrop-filter: blur(5px);\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    position: fixed;\n    z-index: 999;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 144px;\n    padding: 36px 128px;\n    border-top-left-radius: 24px;\n    border-top-right-radius: 24px;\n}\n\n.bubble {\n    cursor: pointer;\n    position: absolute;\n    bottom: calc(100% - 36px);\n    max-width: 500px;\n    border-radius: 24px 24px 24px 6px;\n    background-color: rgba(255, 255, 255, 0.08);\n    padding: 12px 24px;\n    font-size: 24px;\n    line-height: 24px;\n    font-weight: 500;\n    color: #fff;\n    z-index: -1;\n}\n\n.sphere {\n    background-size: contain;\n    width: 72px;\n    height: 72px;\n\n    transition: transform 0.2s;\n\n}\n\n.sphere:hover {\n    transform: scale(1.1);\n}\n\n.sphere.active {\n    animation: rotation 2s linear infinite;\n}\n\n.input {\n    font-size: 36px;\n    line-height: 42px;\n    font-weight: 500;\n    color: #fff;\n    height: 42px;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    border: 0;\n    background: transparent;\n}\n\n.label {\n    font-size: 36px;\n    line-height: 42px;\n    font-weight: 500;\n    color: #fff;\n    opacity: 0.5;\n    padding-left: 40px;\n    padding-right: 10px;\n}\n\n.suggestPanel {\n    position: absolute;\n    top: 15px;\n    right: 25px;\n    display: flex;\n    flex-direction: row;\n    height: 28px;\n}\n\n.suggest {\n    line-height: 26px;\n    padding: 0 15px;\n    margin-left: 5px;\n    border: 1px solid #c4c4c4;\n    border-radius: 16px;\n    color: #fff;\n    cursor: pointer;\n    font-size: 14px;\n}\n";var style=document.createElement('style');style.appendChild(document.createTextNode(NativePanelStyles));document.getElementsByTagName('head')[0].appendChild(style);var CURRENT_VERSION='0.1.0';var AssistantRecordPanel=function(_a){var recorder=_a.recorder,onSave=_a.onSave;var _b=(0,_react.useState)(true),isRecording=_b[0],setIsRecording=_b[1];var _c=(0,_react.useState)(),record=_c[0],setRecord=_c[1];var recorderRef=(0,_react.useRef)();var handleStart=_react.default.useCallback(function(){var _a;(_a=recorderRef.current)===null||_a===void 0?void 0:_a.start();setIsRecording(true);setRecord(undefined);},[]);var handleStop=_react.default.useCallback(function(){var _a,_b;(_a=recorderRef.current)===null||_a===void 0?void 0:_a.stop();setIsRecording(false);setRecord((_b=recorderRef.current)===null||_b===void 0?void 0:_b.getRecord());},[]);var handleSave=_react.default.useCallback(function(){if(record){onSave(record);}},[onSave,record]);(0,_react.useEffect)(function(){var _a;(_a=recorderRef.current)===null||_a===void 0?void 0:_a.stop();recorderRef.current=recorder;},[recorder]);return/*#__PURE__*/_react.default.createElement("div",{className:"recordPanel"},/*#__PURE__*/_react.default.createElement("button",{onClick:handleStart,type:"button",disabled:isRecording,className:"recordButton"},"start"),/*#__PURE__*/_react.default.createElement("button",{onClick:handleStop,type:"button",disabled:!isRecording,className:"recordButton"},"stop"),/*#__PURE__*/_react.default.createElement("button",{onClick:handleSave,type:"button",disabled:record==null,className:"recordButton"},"save"));};var renderAssistantRecordPanel=function(recorder,saver){var div=document.createElement('div');document.body.appendChild(div);(0,_reactDom.render)(/*#__PURE__*/_react.default.createElement(AssistantRecordPanel,{recorder:recorder,onSave:saver.save}),div);};var RecordPanelStyles="\n.recordPanel {\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    right: 0;\n}\n\n.recordButton {\n    margin-right: 8px;\n    margin-top: 8px;\n}\n";var style$1=document.createElement('style');style$1.appendChild(document.createTextNode(RecordPanelStyles));document.getElementsByTagName('head')[0].appendChild(style$1);var createCallbackLogger=function(cb){return{logInit:function(message){cb({type:'params',parameters:message});},logIncoming:function(message){cb({type:'incoming',message:message});},logOutcoming:function(message){cb({type:'outcoming',message:message});}};};var createConsoleLogger=function(level){if(level===void 0){level='debug';}return{logInit:function(message){console[level]('Initialize',message);},logIncoming:function(message){console[level]('Received message',message);},logOutcoming:function(message){console[level]('Sended message',message);}};};var CURRENT_VERSION$1='0.1.0';var getDefaultLog=function(){return{entries:[],version:CURRENT_VERSION$1};};var createLogCallbackRecorder=function(subscribe,defaultActive){if(defaultActive===void 0){defaultActive=true;}var isActive=defaultActive;var currentLog=getDefaultLog();subscribe(function(entry){var _a,_b;if(isActive===false){return;}switch(entry.type){case'incoming':if((_a=entry.message.systemMessage)===null||_a===void 0?void 0:_a.data){currentLog.entries.push({type:entry.type,message:{data:JSON.parse(entry.message.systemMessage.data),name:entry.message.messageName}});}if(entry.message.text){currentLog.entries.push({type:entry.type,text:entry.message.text});}break;case'outcoming':if((_b=entry.message.systemMessage)===null||_b===void 0?void 0:_b.data){currentLog.entries.push({type:entry.type,message:{data:JSON.parse(entry.message.systemMessage.data),name:entry.message.messageName}});}if(entry.message.text){currentLog.entries.push({type:entry.type,text:entry.message.text});}break;default:currentLog.parameters=entry.parameters;break;}});var getRecord=function(){return currentLog;};var start=function(){currentLog=getDefaultLog();isActive=true;};var stop=function(){isActive=false;};return{getRecord:getRecord,start:start,stop:stop};};var createRecordDownloader=function(){return{save:function(record){var dataStr="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(record));var anchor=document.createElement('a');anchor.setAttribute('href',dataStr);anchor.setAttribute('download','assistant-log.json');document.body.appendChild(anchor);anchor.click();anchor.remove();}};};var AudioContext=window.AudioContext||window.webkitAudioContext;var context;var processor;var downsampleBuffer=function(buffer,sampleRate,outSampleRate){if(outSampleRate>sampleRate){throw new Error('downsampling rate show be smaller than original sample rate');}var sampleRateRatio=sampleRate/outSampleRate;var newLength=Math.round(buffer.length/sampleRateRatio);var result=new Int16Array(newLength);var empty=true;var offsetResult=0;var offsetBuffer=0;while(offsetResult<result.length){var nextOffsetBuffer=Math.round((offsetResult+1)*sampleRateRatio);var accum=0;var count=0;for(var i=offsetBuffer;i<nextOffsetBuffer&&i<buffer.length;i++){accum+=buffer[i];count++;}if(empty&&accum>0){empty=false;}result[offsetResult]=Math.min(1,accum/count)*0x7fff;offsetResult++;offsetBuffer=nextOffsetBuffer;}return{buffer:result.buffer,empty:empty};};var TARGET_SAMPLE_RATE=16000;var createAudioRecorder=function(stream,cb){var state='inactive';var input;var start=function(){if(state!=='inactive'){throw new Error("Can't start not inactive recorder");}state='recording';if(!context){context=new AudioContext({sampleRate:16000});}input=context.createMediaStreamSource(stream);if(!processor){processor=context.createScriptProcessor(2048,1,1);}var listener=function(e){var buffer=e.inputBuffer.getChannelData(0);var data=downsampleBuffer(buffer,context.sampleRate,TARGET_SAMPLE_RATE);var last=state==='inactive';cb(data.buffer,last);if(last){processor.removeEventListener('audioprocess',listener);}};processor.addEventListener('audioprocess',listener);input.connect(processor);processor.connect(context.destination);};var stop=function(){if(state==='inactive'){throw new Error("Can't stop inactive recorder");}state='inactive';stream.getTracks().forEach(function(track){track.stop();});input.disconnect();};start();return stop;};var createNavigatorAudioProvider=function(cb){return navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){return createAudioRecorder(stream,cb);});};var createVoiceListener=function(createAudioProvider){if(createAudioProvider===void 0){createAudioProvider=createNavigatorAudioProvider;}var _a=createNanoEvents(),emit=_a.emit,on=_a.on;var stopRecord;var status='stopped';var stop=function(){status='stopped';stopRecord();emit('status','stopped');};var listen=function(handleVoice){return createAudioProvider(function(data,last){return handleVoice(new Uint8Array(data),last);}).then(function(recStop){stopRecord=recStop;}).then(function(){status='listen';emit('status','listen');});};return{listen:listen,stop:stop,on:on,get status(){return status;}};};exports.createVoiceListener=createVoiceListener;var AudioContext$1=window.AudioContext||window.webkitAudioContext;var from16BitToFloat32=function(incomingData){var l=incomingData.length;var outputData=new Float32Array(l);for(var i=0;i<l;i+=1){outputData[i]=incomingData[i]/32768.0;}return outputData;};var createChunkQueue=function(){var buffer=[];// очередь на воспроизведение
var chunks=[];// очередь воспроизведения
var duration=0;// продолжительность очереди на воспроизведение
var loaded=false;// флаг завершения загрузки
/** Добавить чанк в очередь на воспроизведение */var push=function(chunk){var _a;buffer.push(chunk);duration+=((_a=chunk.buffer)===null||_a===void 0?void 0:_a.duration)||0;};/** Добавить чанк в очередь воспроизведения */var toPlay=function(chunk){chunks.push(chunk);};/** Удалить чанк из очереди воспроизведения */var remove=function(chunk){chunks.splice(chunks.indexOf(chunk),1);};/** Получить очередь на воспроизведение */var popAll=function(){duration=0;return buffer.splice(0,buffer.length);};/** Проставляем признак окончания загрузки трека */var allLoaded=function(){loaded=true;};return{get bufferLen(){return buffer.length;},allLoaded:allLoaded,toPlay:toPlay,remove:remove,push:push,popAll:popAll,get length(){return chunks.length;},get duration(){return duration;},get ended(){// считаем трек законченным, когда все загружено и воспроизведено
return loaded&&chunks.length===0&&buffer.length===0;},get loaded(){return loaded;}};};var createTrackStream=function(ctx,_a){var _b=_a.sampleRate,sampleRate=_b===void 0?24000:_b,_c=_a.numberOfChannels,numberOfChannels=_c===void 0?1:_c,_d=_a.delay,delay=_d===void 0?0:_d,onPlay=_a.onPlay,onEnd=_a.onEnd,trackStatus=_a.trackStatus;var queue=createChunkQueue();var extraByte=null;var status=trackStatus||'stop';var lastChunkOffset=0;var startTime=0;var firstChunk=true;var end=function(){status='end';onEnd&&onEnd();startTime=0;lastChunkOffset=0;};var play=function(){if(status==='end'){return;}if(status!=='play'){status='play';onPlay&&onPlay();}if(queue.ended){end();return;}if(queue.loaded||queue.duration>=delay){startTime=queue.length===0?ctx.currentTime:startTime;var chunks=queue.popAll();chunks.forEach(function(chunk){var _a;queue.toPlay(chunk);chunk.start(startTime+lastChunkOffset);lastChunkOffset+=((_a=chunk.buffer)===null||_a===void 0?void 0:_a.duration)||0;});}};var getExtraBytes=function(data,bytesArraysSizes){if(extraByte==null&&bytesArraysSizes.incomingMessageVoiceDataLength%2){extraByte=data[bytesArraysSizes.incomingMessageVoiceDataLength-1];bytesArraysSizes.incomingMessageVoiceDataLength-=1;bytesArraysSizes.sourceLen-=1;}else if(extraByte!=null){bytesArraysSizes.prepend=extraByte;bytesArraysSizes.start=1;if(bytesArraysSizes.incomingMessageVoiceDataLength%2){bytesArraysSizes.incomingMessageVoiceDataLength+=1;extraByte=null;}else{extraByte=data[bytesArraysSizes.incomingMessageVoiceDataLength-1];bytesArraysSizes.sourceLen-=1;}}};var createChunk=function(chunk){var audioBuffer=ctx.createBuffer(numberOfChannels,chunk.length/numberOfChannels,sampleRate);for(var i=0;i<numberOfChannels;i++){var channelChunk=new Float32Array(chunk.length/numberOfChannels);var index=0;for(var j=i;j<chunk.length;j+=numberOfChannels){channelChunk[index++]=chunk[j];}audioBuffer.getChannelData(i).set(channelChunk);}var source=ctx.createBufferSource();source.buffer=audioBuffer;source.connect(ctx.destination);source.onended=function(){queue.remove(source);if(queue.ended){status='end';onEnd&&onEnd();}};return source;};var write=function(data){// 44 байта - заголовок трека
var slicePoint=firstChunk?44:0;var bytesArraysSizes={incomingMessageVoiceDataLength:data.length,sourceLen:data.length,start:0,prepend:null};firstChunk=false;if(slicePoint>=data.length){return;}getExtraBytes(data,bytesArraysSizes);var dataBuffer=new ArrayBuffer(bytesArraysSizes.incomingMessageVoiceDataLength);var bufferUi8=new Uint8Array(dataBuffer);var bufferI16=new Int16Array(dataBuffer);bufferUi8.set(data.slice(0,bytesArraysSizes.sourceLen),bytesArraysSizes.start);if(bytesArraysSizes.prepend!=null){bufferUi8[0]=bytesArraysSizes.prepend;}var chunk=createChunk(from16BitToFloat32(bufferI16.slice(slicePoint)));queue.push(chunk);if(status==='play'){play();}};return{get loaded(){return queue.loaded;},setLoaded:function(){queue.allLoaded();if(status==='play'){play();}},write:write,get status(){return status;},play:play,stop:end};};var createTrackCollection=function(){var trackIds;var trackMap;var clear=function(){trackIds=new Array();trackMap=new Map();};var add=function(id,track){if(trackMap.has(id)){throw new Error('Track already exists');}trackMap.set(id,track);trackIds.push(id);};var has=function(id){return trackMap.has(id);};var getById=function(id){var track=trackMap.get(id);if(track===undefined){throw new Error('Unknown track id');}return track;};var getByIndex=function(index){if(index<0||index>=trackIds.length){throw new Error('Index out of bounds');}var track=trackMap.get(trackIds[index]);if(track==null){throw new Error('Something wrong...');}return track;};var some=function(predicate){return trackIds.some(function(id){return predicate(getById(id));});};clear();return{clear:clear,has:has,get:getById,getByIndex:getByIndex,add:add,some:some,get length(){return trackIds.length;}};};var createVoicePlayer=function(_a){var _b=_a===void 0?{}:_a,_c=_b.startVoiceDelay,startVoiceDelay=_c===void 0?0.2:_c,sampleRate=_b.sampleRate,numberOfChannels=_b.numberOfChannels;var _d=createNanoEvents(),on=_d.on,emit=_d.emit;var tracks=createTrackCollection();// true - воспроизводим все треки в очереди (новые в том числе), false - скипаем всю очередь (новые в т.ч.)
var active=true;var ctx=null;var cursor=0;var play=function(){if(cursor>=tracks.length){if(tracks.some(function(track){return!track.loaded;})){return;}ctx&&ctx.close();ctx=null;cursor=0;tracks.clear();return;}var current=tracks.getByIndex(cursor);if(current.status==='end'){if(cursor<tracks.length){cursor++;play();}}else{current.play();}};var append=function(data,trackId,last){if(last===void 0){last=false;}var current=tracks.has(trackId)?tracks.get(trackId):undefined;if(current==null){if(ctx==null){// шарим контекст между треками
ctx=new AudioContext$1();}current=createTrackStream(ctx,{sampleRate:sampleRate,numberOfChannels:numberOfChannels,delay:startVoiceDelay,onPlay:function(){return emit('play',trackId);},onEnd:function(){emit('end',trackId);play();},trackStatus:active?'stop':'end'});tracks.add(trackId,current);}if(data.length){current.write(data);}if(last){current.setLoaded();}play();};var stop=function(){while(cursor<tracks.length){tracks.getByIndex(cursor).stop();cursor++;}ctx===null||ctx===void 0?void 0:ctx.close();ctx=null;cursor=0;tracks.clear();};return{append:append,get active(){return active;},set active(value){active=value;if(value){play();}else{stop();}},on:on,stop:stop};};exports.createVoicePlayer=createVoicePlayer;var prefix='recovery_';var createRecoveryStateRepository=function(){var get=function(key){var value=localStorage.getItem(""+prefix+key);return value?JSON.parse(value):null;};var set=function(key,state){state&&localStorage.setItem(""+prefix+key,JSON.stringify(state));};var remove=function(key){localStorage.removeItem(""+prefix+key);};return{get:get,set:set,remove:remove};};var mtt=createCommonjsModule(function(module){/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/(function(global,factory){/* global define, require, module */ /* AMD */if(typeof commonjsRequire==='function'&&'object'==='object'&&module&&module.exports)module.exports=factory(minimal$1);})(commonjsGlobal,function($protobuf){// Common aliases
var $Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util;// Exported root namespace
var $root=$protobuf.roots["default"]||($protobuf.roots["default"]={});$root.Music2TrackProtocol=function(){/**
         * Namespace Music2TrackProtocol.
         * @exports Music2TrackProtocol
         * @namespace
         */var Music2TrackProtocol={};Music2TrackProtocol.DecoderResult=function(){/**
             * Properties of a DecoderResult.
             * @memberof Music2TrackProtocol
             * @interface IDecoderResult
             * @property {string|null} [result] DecoderResult result
             * @property {boolean|null} [isMusicFound] DecoderResult isMusicFound
             * @property {boolean|null} [isFinal] DecoderResult isFinal
             */ /**
             * Constructs a new DecoderResult.
             * @memberof Music2TrackProtocol
             * @classdesc Represents a DecoderResult.
             * @implements IDecoderResult
             * @constructor
             * @param {Music2TrackProtocol.IDecoderResult=} [properties] Properties to set
             */function DecoderResult(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
             * DecoderResult result.
             * @member {string} result
             * @memberof Music2TrackProtocol.DecoderResult
             * @instance
             */DecoderResult.prototype.result="";/**
             * DecoderResult isMusicFound.
             * @member {boolean} isMusicFound
             * @memberof Music2TrackProtocol.DecoderResult
             * @instance
             */DecoderResult.prototype.isMusicFound=false;/**
             * DecoderResult isFinal.
             * @member {boolean} isFinal
             * @memberof Music2TrackProtocol.DecoderResult
             * @instance
             */DecoderResult.prototype.isFinal=false;/**
             * Creates a new DecoderResult instance using the specified properties.
             * @function create
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {Music2TrackProtocol.IDecoderResult=} [properties] Properties to set
             * @returns {Music2TrackProtocol.DecoderResult} DecoderResult instance
             */DecoderResult.create=function create(properties){return new DecoderResult(properties);};/**
             * Encodes the specified DecoderResult message. Does not implicitly {@link Music2TrackProtocol.DecoderResult.verify|verify} messages.
             * @function encode
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {Music2TrackProtocol.IDecoderResult} message DecoderResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */DecoderResult.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&Object.hasOwnProperty.call(message,"result"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);if(message.isMusicFound!=null&&Object.hasOwnProperty.call(message,"isMusicFound"))writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isMusicFound);if(message.isFinal!=null&&Object.hasOwnProperty.call(message,"isFinal"))writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isFinal);return writer;};/**
             * Encodes the specified DecoderResult message, length delimited. Does not implicitly {@link Music2TrackProtocol.DecoderResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {Music2TrackProtocol.IDecoderResult} message DecoderResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */DecoderResult.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
             * Decodes a DecoderResult message from the specified reader or buffer.
             * @function decode
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Music2TrackProtocol.DecoderResult} DecoderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */DecoderResult.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Music2TrackProtocol.DecoderResult();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.string();break;case 2:message.isMusicFound=reader.bool();break;case 3:message.isFinal=reader.bool();break;default:reader.skipType(tag&7);break;}}return message;};/**
             * Decodes a DecoderResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Music2TrackProtocol.DecoderResult} DecoderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */DecoderResult.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
             * Verifies a DecoderResult message.
             * @function verify
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */DecoderResult.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))if(!$util.isString(message.result))return"result: string expected";if(message.isMusicFound!=null&&message.hasOwnProperty("isMusicFound"))if(typeof message.isMusicFound!=="boolean")return"isMusicFound: boolean expected";if(message.isFinal!=null&&message.hasOwnProperty("isFinal"))if(typeof message.isFinal!=="boolean")return"isFinal: boolean expected";return null;};/**
             * Creates a DecoderResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Music2TrackProtocol.DecoderResult} DecoderResult
             */DecoderResult.fromObject=function fromObject(object){if(object instanceof $root.Music2TrackProtocol.DecoderResult)return object;var message=new $root.Music2TrackProtocol.DecoderResult();if(object.result!=null)message.result=String(object.result);if(object.isMusicFound!=null)message.isMusicFound=Boolean(object.isMusicFound);if(object.isFinal!=null)message.isFinal=Boolean(object.isFinal);return message;};/**
             * Creates a plain object from a DecoderResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Music2TrackProtocol.DecoderResult
             * @static
             * @param {Music2TrackProtocol.DecoderResult} message DecoderResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */DecoderResult.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result="";object.isMusicFound=false;object.isFinal=false;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=message.result;if(message.isMusicFound!=null&&message.hasOwnProperty("isMusicFound"))object.isMusicFound=message.isMusicFound;if(message.isFinal!=null&&message.hasOwnProperty("isFinal"))object.isFinal=message.isFinal;return object;};/**
             * Converts this DecoderResult to JSON.
             * @function toJSON
             * @memberof Music2TrackProtocol.DecoderResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */DecoderResult.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return DecoderResult;}();Music2TrackProtocol.ErrorResponse=function(){/**
             * Properties of an ErrorResponse.
             * @memberof Music2TrackProtocol
             * @interface IErrorResponse
             * @property {string|null} [errorMessage] ErrorResponse errorMessage
             * @property {number|null} [errorCode] ErrorResponse errorCode
             */ /**
             * Constructs a new ErrorResponse.
             * @memberof Music2TrackProtocol
             * @classdesc Represents an ErrorResponse.
             * @implements IErrorResponse
             * @constructor
             * @param {Music2TrackProtocol.IErrorResponse=} [properties] Properties to set
             */function ErrorResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
             * ErrorResponse errorMessage.
             * @member {string} errorMessage
             * @memberof Music2TrackProtocol.ErrorResponse
             * @instance
             */ErrorResponse.prototype.errorMessage="";/**
             * ErrorResponse errorCode.
             * @member {number} errorCode
             * @memberof Music2TrackProtocol.ErrorResponse
             * @instance
             */ErrorResponse.prototype.errorCode=0;/**
             * Creates a new ErrorResponse instance using the specified properties.
             * @function create
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {Music2TrackProtocol.IErrorResponse=} [properties] Properties to set
             * @returns {Music2TrackProtocol.ErrorResponse} ErrorResponse instance
             */ErrorResponse.create=function create(properties){return new ErrorResponse(properties);};/**
             * Encodes the specified ErrorResponse message. Does not implicitly {@link Music2TrackProtocol.ErrorResponse.verify|verify} messages.
             * @function encode
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {Music2TrackProtocol.IErrorResponse} message ErrorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */ErrorResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.errorMessage!=null&&Object.hasOwnProperty.call(message,"errorMessage"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMessage);if(message.errorCode!=null&&Object.hasOwnProperty.call(message,"errorCode"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);return writer;};/**
             * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link Music2TrackProtocol.ErrorResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {Music2TrackProtocol.IErrorResponse} message ErrorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */ErrorResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
             * Decodes an ErrorResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Music2TrackProtocol.ErrorResponse} ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */ErrorResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Music2TrackProtocol.ErrorResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.errorMessage=reader.string();break;case 2:message.errorCode=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
             * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Music2TrackProtocol.ErrorResponse} ErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */ErrorResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
             * Verifies an ErrorResponse message.
             * @function verify
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */ErrorResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.errorMessage!=null&&message.hasOwnProperty("errorMessage"))if(!$util.isString(message.errorMessage))return"errorMessage: string expected";if(message.errorCode!=null&&message.hasOwnProperty("errorCode"))if(!$util.isInteger(message.errorCode))return"errorCode: integer expected";return null;};/**
             * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Music2TrackProtocol.ErrorResponse} ErrorResponse
             */ErrorResponse.fromObject=function fromObject(object){if(object instanceof $root.Music2TrackProtocol.ErrorResponse)return object;var message=new $root.Music2TrackProtocol.ErrorResponse();if(object.errorMessage!=null)message.errorMessage=String(object.errorMessage);if(object.errorCode!=null)message.errorCode=object.errorCode|0;return message;};/**
             * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Music2TrackProtocol.ErrorResponse
             * @static
             * @param {Music2TrackProtocol.ErrorResponse} message ErrorResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */ErrorResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.errorMessage="";object.errorCode=0;}if(message.errorMessage!=null&&message.hasOwnProperty("errorMessage"))object.errorMessage=message.errorMessage;if(message.errorCode!=null&&message.hasOwnProperty("errorCode"))object.errorCode=message.errorCode;return object;};/**
             * Converts this ErrorResponse to JSON.
             * @function toJSON
             * @memberof Music2TrackProtocol.ErrorResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */ErrorResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ErrorResponse;}();Music2TrackProtocol.MttResponse=function(){/**
             * Properties of a MttResponse.
             * @memberof Music2TrackProtocol
             * @interface IMttResponse
             * @property {Music2TrackProtocol.IDecoderResult|null} [decoderResultField] MttResponse decoderResultField
             * @property {Music2TrackProtocol.IErrorResponse|null} [errorResponse] MttResponse errorResponse
             */ /**
             * Constructs a new MttResponse.
             * @memberof Music2TrackProtocol
             * @classdesc Represents a MttResponse.
             * @implements IMttResponse
             * @constructor
             * @param {Music2TrackProtocol.IMttResponse=} [properties] Properties to set
             */function MttResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
             * MttResponse decoderResultField.
             * @member {Music2TrackProtocol.IDecoderResult|null|undefined} decoderResultField
             * @memberof Music2TrackProtocol.MttResponse
             * @instance
             */MttResponse.prototype.decoderResultField=null;/**
             * MttResponse errorResponse.
             * @member {Music2TrackProtocol.IErrorResponse|null|undefined} errorResponse
             * @memberof Music2TrackProtocol.MttResponse
             * @instance
             */MttResponse.prototype.errorResponse=null;// OneOf field names bound to virtual getters and setters
var $oneOfFields;/**
             * MttResponse MessageType.
             * @member {"decoderResultField"|"errorResponse"|undefined} MessageType
             * @memberof Music2TrackProtocol.MttResponse
             * @instance
             */Object.defineProperty(MttResponse.prototype,"MessageType",{get:$util.oneOfGetter($oneOfFields=["decoderResultField","errorResponse"]),set:$util.oneOfSetter($oneOfFields)});/**
             * Creates a new MttResponse instance using the specified properties.
             * @function create
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {Music2TrackProtocol.IMttResponse=} [properties] Properties to set
             * @returns {Music2TrackProtocol.MttResponse} MttResponse instance
             */MttResponse.create=function create(properties){return new MttResponse(properties);};/**
             * Encodes the specified MttResponse message. Does not implicitly {@link Music2TrackProtocol.MttResponse.verify|verify} messages.
             * @function encode
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {Music2TrackProtocol.IMttResponse} message MttResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */MttResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.decoderResultField!=null&&Object.hasOwnProperty.call(message,"decoderResultField"))$root.Music2TrackProtocol.DecoderResult.encode(message.decoderResultField,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.errorResponse!=null&&Object.hasOwnProperty.call(message,"errorResponse"))$root.Music2TrackProtocol.ErrorResponse.encode(message.errorResponse,writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();return writer;};/**
             * Encodes the specified MttResponse message, length delimited. Does not implicitly {@link Music2TrackProtocol.MttResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {Music2TrackProtocol.IMttResponse} message MttResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */MttResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
             * Decodes a MttResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Music2TrackProtocol.MttResponse} MttResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */MttResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Music2TrackProtocol.MttResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.decoderResultField=$root.Music2TrackProtocol.DecoderResult.decode(reader,reader.uint32());break;case 2:message.errorResponse=$root.Music2TrackProtocol.ErrorResponse.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
             * Decodes a MttResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Music2TrackProtocol.MttResponse} MttResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */MttResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
             * Verifies a MttResponse message.
             * @function verify
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */MttResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";var properties={};if(message.decoderResultField!=null&&message.hasOwnProperty("decoderResultField")){properties.MessageType=1;{var error=$root.Music2TrackProtocol.DecoderResult.verify(message.decoderResultField);if(error)return"decoderResultField."+error;}}if(message.errorResponse!=null&&message.hasOwnProperty("errorResponse")){if(properties.MessageType===1)return"MessageType: multiple values";properties.MessageType=1;{var error=$root.Music2TrackProtocol.ErrorResponse.verify(message.errorResponse);if(error)return"errorResponse."+error;}}return null;};/**
             * Creates a MttResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Music2TrackProtocol.MttResponse} MttResponse
             */MttResponse.fromObject=function fromObject(object){if(object instanceof $root.Music2TrackProtocol.MttResponse)return object;var message=new $root.Music2TrackProtocol.MttResponse();if(object.decoderResultField!=null){if(typeof object.decoderResultField!=="object")throw TypeError(".Music2TrackProtocol.MttResponse.decoderResultField: object expected");message.decoderResultField=$root.Music2TrackProtocol.DecoderResult.fromObject(object.decoderResultField);}if(object.errorResponse!=null){if(typeof object.errorResponse!=="object")throw TypeError(".Music2TrackProtocol.MttResponse.errorResponse: object expected");message.errorResponse=$root.Music2TrackProtocol.ErrorResponse.fromObject(object.errorResponse);}return message;};/**
             * Creates a plain object from a MttResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Music2TrackProtocol.MttResponse
             * @static
             * @param {Music2TrackProtocol.MttResponse} message MttResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */MttResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(message.decoderResultField!=null&&message.hasOwnProperty("decoderResultField")){object.decoderResultField=$root.Music2TrackProtocol.DecoderResult.toObject(message.decoderResultField,options);if(options.oneofs)object.MessageType="decoderResultField";}if(message.errorResponse!=null&&message.hasOwnProperty("errorResponse")){object.errorResponse=$root.Music2TrackProtocol.ErrorResponse.toObject(message.errorResponse,options);if(options.oneofs)object.MessageType="errorResponse";}return object;};/**
             * Converts this MttResponse to JSON.
             * @function toJSON
             * @memberof Music2TrackProtocol.MttResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */MttResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return MttResponse;}();return Music2TrackProtocol;}();return $root;});});var createMusicRecognizer=function(voiceListener){var off;var status='inactive';var stop=function(){if(voiceListener.status!=='stopped'){status='inactive';voiceListener.stop();}};var start=function(_a){var sendVoice=_a.sendVoice,messageId=_a.messageId,onMessage=_a.onMessage;voiceListener.listen(function(data,last){return!last&&sendVoice(new Uint8Array(data),last,MessageNames.MUSIC_RECOGNITION);}).then(function(){status='active';off=onMessage(function(message){var _a,_b;if(message.status&&message.status.code!=null&&message.status.code<0){off();stop();}if(message.messageId===messageId&&message.messageName.toUpperCase()===MessageNames.MUSIC_RECOGNITION){if(!((_b=(_a=message.bytes)===null||_a===void 0?void 0:_a.data)===null||_b===void 0?void 0:_b.length)){return;}var _c=mtt.Music2TrackProtocol.MttResponse.decode(message.bytes.data),decoderResultField=_c.decoderResultField,errorResponse=_c.errorResponse;if((decoderResultField===null||decoderResultField===void 0?void 0:decoderResultField.isFinal)||errorResponse){off();stop();}}});}).catch(function(){});};return{start:start,stop:stop,get status(){return status;}};};exports.createMusicRecognizer=createMusicRecognizer;var asr=createCommonjsModule(function(module){/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/(function(global,factory){/* global define, require, module */ /* AMD */if(typeof commonjsRequire==='function'&&'object'==='object'&&module&&module.exports)module.exports=factory(minimal$1);})(commonjsGlobal,function($protobuf){// Common aliases
var $Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util;// Exported root namespace
var $root=$protobuf.roots["default"]||($protobuf.roots["default"]={});$root.Variables=function(){/**
         * Properties of a Variables.
         * @exports IVariables
         * @interface IVariables
         * @property {Object.<string,string>|null} [variables] Variables variables
         */ /**
         * Constructs a new Variables.
         * @exports Variables
         * @classdesc Represents a Variables.
         * @implements IVariables
         * @constructor
         * @param {IVariables=} [properties] Properties to set
         */function Variables(properties){this.variables={};if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Variables variables.
         * @member {Object.<string,string>} variables
         * @memberof Variables
         * @instance
         */Variables.prototype.variables=$util.emptyObject;/**
         * Creates a new Variables instance using the specified properties.
         * @function create
         * @memberof Variables
         * @static
         * @param {IVariables=} [properties] Properties to set
         * @returns {Variables} Variables instance
         */Variables.create=function create(properties){return new Variables(properties);};/**
         * Encodes the specified Variables message. Does not implicitly {@link Variables.verify|verify} messages.
         * @function encode
         * @memberof Variables
         * @static
         * @param {IVariables} message Variables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Variables.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.variables!=null&&Object.hasOwnProperty.call(message,"variables"))for(var keys=Object.keys(message.variables),i=0;i<keys.length;++i)writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.variables[keys[i]]).ldelim();return writer;};/**
         * Encodes the specified Variables message, length delimited. Does not implicitly {@link Variables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Variables
         * @static
         * @param {IVariables} message Variables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Variables.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Variables message from the specified reader or buffer.
         * @function decode
         * @memberof Variables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Variables} Variables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Variables.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Variables(),key;while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:reader.skip().pos++;if(message.variables===$util.emptyObject)message.variables={};key=reader.string();reader.pos++;message.variables[key]=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Variables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Variables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Variables} Variables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Variables.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Variables message.
         * @function verify
         * @memberof Variables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Variables.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.variables!=null&&message.hasOwnProperty("variables")){if(!$util.isObject(message.variables))return"variables: object expected";var key=Object.keys(message.variables);for(var i=0;i<key.length;++i)if(!$util.isString(message.variables[key[i]]))return"variables: string{k:string} expected";}return null;};/**
         * Creates a Variables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Variables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Variables} Variables
         */Variables.fromObject=function fromObject(object){if(object instanceof $root.Variables)return object;var message=new $root.Variables();if(object.variables){if(typeof object.variables!=="object")throw TypeError(".Variables.variables: object expected");message.variables={};for(var keys=Object.keys(object.variables),i=0;i<keys.length;++i)message.variables[keys[i]]=String(object.variables[keys[i]]);}return message;};/**
         * Creates a plain object from a Variables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Variables
         * @static
         * @param {Variables} message Variables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Variables.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.objects||options.defaults)object.variables={};var keys2;if(message.variables&&(keys2=Object.keys(message.variables)).length){object.variables={};for(var j=0;j<keys2.length;++j)object.variables[keys2[j]]=message.variables[keys2[j]];}return object;};/**
         * Converts this Variables to JSON.
         * @function toJSON
         * @memberof Variables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Variables.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Variables;}();$root.UndecodedSeconds=function(){/**
         * Properties of an UndecodedSeconds.
         * @exports IUndecodedSeconds
         * @interface IUndecodedSeconds
         * @property {number|null} [undecodedSeconds] UndecodedSeconds undecodedSeconds
         */ /**
         * Constructs a new UndecodedSeconds.
         * @exports UndecodedSeconds
         * @classdesc Represents an UndecodedSeconds.
         * @implements IUndecodedSeconds
         * @constructor
         * @param {IUndecodedSeconds=} [properties] Properties to set
         */function UndecodedSeconds(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * UndecodedSeconds undecodedSeconds.
         * @member {number} undecodedSeconds
         * @memberof UndecodedSeconds
         * @instance
         */UndecodedSeconds.prototype.undecodedSeconds=0;/**
         * Creates a new UndecodedSeconds instance using the specified properties.
         * @function create
         * @memberof UndecodedSeconds
         * @static
         * @param {IUndecodedSeconds=} [properties] Properties to set
         * @returns {UndecodedSeconds} UndecodedSeconds instance
         */UndecodedSeconds.create=function create(properties){return new UndecodedSeconds(properties);};/**
         * Encodes the specified UndecodedSeconds message. Does not implicitly {@link UndecodedSeconds.verify|verify} messages.
         * @function encode
         * @memberof UndecodedSeconds
         * @static
         * @param {IUndecodedSeconds} message UndecodedSeconds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */UndecodedSeconds.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.undecodedSeconds!=null&&Object.hasOwnProperty.call(message,"undecodedSeconds"))writer.uint32(/* id 1, wireType 5 =*/13).float(message.undecodedSeconds);return writer;};/**
         * Encodes the specified UndecodedSeconds message, length delimited. Does not implicitly {@link UndecodedSeconds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UndecodedSeconds
         * @static
         * @param {IUndecodedSeconds} message UndecodedSeconds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */UndecodedSeconds.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes an UndecodedSeconds message from the specified reader or buffer.
         * @function decode
         * @memberof UndecodedSeconds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UndecodedSeconds} UndecodedSeconds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */UndecodedSeconds.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UndecodedSeconds();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.undecodedSeconds=reader.float();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes an UndecodedSeconds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UndecodedSeconds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UndecodedSeconds} UndecodedSeconds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */UndecodedSeconds.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies an UndecodedSeconds message.
         * @function verify
         * @memberof UndecodedSeconds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */UndecodedSeconds.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.undecodedSeconds!=null&&message.hasOwnProperty("undecodedSeconds"))if(typeof message.undecodedSeconds!=="number")return"undecodedSeconds: number expected";return null;};/**
         * Creates an UndecodedSeconds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UndecodedSeconds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UndecodedSeconds} UndecodedSeconds
         */UndecodedSeconds.fromObject=function fromObject(object){if(object instanceof $root.UndecodedSeconds)return object;var message=new $root.UndecodedSeconds();if(object.undecodedSeconds!=null)message.undecodedSeconds=Number(object.undecodedSeconds);return message;};/**
         * Creates a plain object from an UndecodedSeconds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UndecodedSeconds
         * @static
         * @param {UndecodedSeconds} message UndecodedSeconds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */UndecodedSeconds.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.undecodedSeconds=0;if(message.undecodedSeconds!=null&&message.hasOwnProperty("undecodedSeconds"))object.undecodedSeconds=options.json&&!isFinite(message.undecodedSeconds)?String(message.undecodedSeconds):message.undecodedSeconds;return object;};/**
         * Converts this UndecodedSeconds to JSON.
         * @function toJSON
         * @memberof UndecodedSeconds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */UndecodedSeconds.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UndecodedSeconds;}();$root.FullyFinalized=function(){/**
         * Properties of a FullyFinalized.
         * @exports IFullyFinalized
         * @interface IFullyFinalized
         */ /**
         * Constructs a new FullyFinalized.
         * @exports FullyFinalized
         * @classdesc Represents a FullyFinalized.
         * @implements IFullyFinalized
         * @constructor
         * @param {IFullyFinalized=} [properties] Properties to set
         */function FullyFinalized(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Creates a new FullyFinalized instance using the specified properties.
         * @function create
         * @memberof FullyFinalized
         * @static
         * @param {IFullyFinalized=} [properties] Properties to set
         * @returns {FullyFinalized} FullyFinalized instance
         */FullyFinalized.create=function create(properties){return new FullyFinalized(properties);};/**
         * Encodes the specified FullyFinalized message. Does not implicitly {@link FullyFinalized.verify|verify} messages.
         * @function encode
         * @memberof FullyFinalized
         * @static
         * @param {IFullyFinalized} message FullyFinalized message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */FullyFinalized.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
         * Encodes the specified FullyFinalized message, length delimited. Does not implicitly {@link FullyFinalized.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FullyFinalized
         * @static
         * @param {IFullyFinalized} message FullyFinalized message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */FullyFinalized.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a FullyFinalized message from the specified reader or buffer.
         * @function decode
         * @memberof FullyFinalized
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FullyFinalized} FullyFinalized
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */FullyFinalized.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.FullyFinalized();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a FullyFinalized message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FullyFinalized
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FullyFinalized} FullyFinalized
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */FullyFinalized.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a FullyFinalized message.
         * @function verify
         * @memberof FullyFinalized
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */FullyFinalized.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
         * Creates a FullyFinalized message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FullyFinalized
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FullyFinalized} FullyFinalized
         */FullyFinalized.fromObject=function fromObject(object){if(object instanceof $root.FullyFinalized)return object;return new $root.FullyFinalized();};/**
         * Creates a plain object from a FullyFinalized message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FullyFinalized
         * @static
         * @param {FullyFinalized} message FullyFinalized
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */FullyFinalized.toObject=function toObject(){return{};};/**
         * Converts this FullyFinalized to JSON.
         * @function toJSON
         * @memberof FullyFinalized
         * @instance
         * @returns {Object.<string,*>} JSON object
         */FullyFinalized.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return FullyFinalized;}();$root.EmotionResult=function(){/**
         * Properties of an EmotionResult.
         * @exports IEmotionResult
         * @interface IEmotionResult
         * @property {string|null} [name] EmotionResult name
         * @property {number|null} [confidence] EmotionResult confidence
         */ /**
         * Constructs a new EmotionResult.
         * @exports EmotionResult
         * @classdesc Represents an EmotionResult.
         * @implements IEmotionResult
         * @constructor
         * @param {IEmotionResult=} [properties] Properties to set
         */function EmotionResult(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * EmotionResult name.
         * @member {string} name
         * @memberof EmotionResult
         * @instance
         */EmotionResult.prototype.name="";/**
         * EmotionResult confidence.
         * @member {number} confidence
         * @memberof EmotionResult
         * @instance
         */EmotionResult.prototype.confidence=0;/**
         * Creates a new EmotionResult instance using the specified properties.
         * @function create
         * @memberof EmotionResult
         * @static
         * @param {IEmotionResult=} [properties] Properties to set
         * @returns {EmotionResult} EmotionResult instance
         */EmotionResult.create=function create(properties){return new EmotionResult(properties);};/**
         * Encodes the specified EmotionResult message. Does not implicitly {@link EmotionResult.verify|verify} messages.
         * @function encode
         * @memberof EmotionResult
         * @static
         * @param {IEmotionResult} message EmotionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */EmotionResult.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.name!=null&&Object.hasOwnProperty.call(message,"name"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);if(message.confidence!=null&&Object.hasOwnProperty.call(message,"confidence"))writer.uint32(/* id 2, wireType 5 =*/21).float(message.confidence);return writer;};/**
         * Encodes the specified EmotionResult message, length delimited. Does not implicitly {@link EmotionResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EmotionResult
         * @static
         * @param {IEmotionResult} message EmotionResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */EmotionResult.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes an EmotionResult message from the specified reader or buffer.
         * @function decode
         * @memberof EmotionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EmotionResult} EmotionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */EmotionResult.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.EmotionResult();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.name=reader.string();break;case 2:message.confidence=reader.float();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes an EmotionResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EmotionResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EmotionResult} EmotionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */EmotionResult.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies an EmotionResult message.
         * @function verify
         * @memberof EmotionResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */EmotionResult.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.name!=null&&message.hasOwnProperty("name"))if(!$util.isString(message.name))return"name: string expected";if(message.confidence!=null&&message.hasOwnProperty("confidence"))if(typeof message.confidence!=="number")return"confidence: number expected";return null;};/**
         * Creates an EmotionResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EmotionResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EmotionResult} EmotionResult
         */EmotionResult.fromObject=function fromObject(object){if(object instanceof $root.EmotionResult)return object;var message=new $root.EmotionResult();if(object.name!=null)message.name=String(object.name);if(object.confidence!=null)message.confidence=Number(object.confidence);return message;};/**
         * Creates a plain object from an EmotionResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EmotionResult
         * @static
         * @param {EmotionResult} message EmotionResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */EmotionResult.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.name="";object.confidence=0;}if(message.name!=null&&message.hasOwnProperty("name"))object.name=message.name;if(message.confidence!=null&&message.hasOwnProperty("confidence"))object.confidence=options.json&&!isFinite(message.confidence)?String(message.confidence):message.confidence;return object;};/**
         * Converts this EmotionResult to JSON.
         * @function toJSON
         * @memberof EmotionResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */EmotionResult.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return EmotionResult;}();$root.Hypothesis=function(){/**
         * Properties of a Hypothesis.
         * @exports IHypothesis
         * @interface IHypothesis
         * @property {string|null} [words] Hypothesis words
         * @property {number|null} [acousticCost] Hypothesis acousticCost
         * @property {number|null} [linguisticCost] Hypothesis linguisticCost
         * @property {number|null} [finalCost] Hypothesis finalCost
         * @property {number|null} [phraseStart] Hypothesis phraseStart
         * @property {number|null} [phraseEnd] Hypothesis phraseEnd
         * @property {string|null} [normalizedText] Hypothesis normalizedText
         */ /**
         * Constructs a new Hypothesis.
         * @exports Hypothesis
         * @classdesc Represents a Hypothesis.
         * @implements IHypothesis
         * @constructor
         * @param {IHypothesis=} [properties] Properties to set
         */function Hypothesis(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * Hypothesis words.
         * @member {string} words
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.words="";/**
         * Hypothesis acousticCost.
         * @member {number} acousticCost
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.acousticCost=0;/**
         * Hypothesis linguisticCost.
         * @member {number} linguisticCost
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.linguisticCost=0;/**
         * Hypothesis finalCost.
         * @member {number} finalCost
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.finalCost=0;/**
         * Hypothesis phraseStart.
         * @member {number} phraseStart
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.phraseStart=0;/**
         * Hypothesis phraseEnd.
         * @member {number} phraseEnd
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.phraseEnd=0;/**
         * Hypothesis normalizedText.
         * @member {string} normalizedText
         * @memberof Hypothesis
         * @instance
         */Hypothesis.prototype.normalizedText="";/**
         * Creates a new Hypothesis instance using the specified properties.
         * @function create
         * @memberof Hypothesis
         * @static
         * @param {IHypothesis=} [properties] Properties to set
         * @returns {Hypothesis} Hypothesis instance
         */Hypothesis.create=function create(properties){return new Hypothesis(properties);};/**
         * Encodes the specified Hypothesis message. Does not implicitly {@link Hypothesis.verify|verify} messages.
         * @function encode
         * @memberof Hypothesis
         * @static
         * @param {IHypothesis} message Hypothesis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Hypothesis.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.words!=null&&Object.hasOwnProperty.call(message,"words"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.words);if(message.acousticCost!=null&&Object.hasOwnProperty.call(message,"acousticCost"))writer.uint32(/* id 2, wireType 5 =*/21).float(message.acousticCost);if(message.linguisticCost!=null&&Object.hasOwnProperty.call(message,"linguisticCost"))writer.uint32(/* id 3, wireType 5 =*/29).float(message.linguisticCost);if(message.finalCost!=null&&Object.hasOwnProperty.call(message,"finalCost"))writer.uint32(/* id 4, wireType 5 =*/37).float(message.finalCost);if(message.phraseStart!=null&&Object.hasOwnProperty.call(message,"phraseStart"))writer.uint32(/* id 5, wireType 5 =*/45).float(message.phraseStart);if(message.phraseEnd!=null&&Object.hasOwnProperty.call(message,"phraseEnd"))writer.uint32(/* id 6, wireType 5 =*/53).float(message.phraseEnd);if(message.normalizedText!=null&&Object.hasOwnProperty.call(message,"normalizedText"))writer.uint32(/* id 7, wireType 2 =*/58).string(message.normalizedText);return writer;};/**
         * Encodes the specified Hypothesis message, length delimited. Does not implicitly {@link Hypothesis.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Hypothesis
         * @static
         * @param {IHypothesis} message Hypothesis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */Hypothesis.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a Hypothesis message from the specified reader or buffer.
         * @function decode
         * @memberof Hypothesis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Hypothesis} Hypothesis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Hypothesis.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.Hypothesis();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.words=reader.string();break;case 2:message.acousticCost=reader.float();break;case 3:message.linguisticCost=reader.float();break;case 4:message.finalCost=reader.float();break;case 5:message.phraseStart=reader.float();break;case 6:message.phraseEnd=reader.float();break;case 7:message.normalizedText=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a Hypothesis message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Hypothesis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Hypothesis} Hypothesis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */Hypothesis.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a Hypothesis message.
         * @function verify
         * @memberof Hypothesis
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */Hypothesis.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.words!=null&&message.hasOwnProperty("words"))if(!$util.isString(message.words))return"words: string expected";if(message.acousticCost!=null&&message.hasOwnProperty("acousticCost"))if(typeof message.acousticCost!=="number")return"acousticCost: number expected";if(message.linguisticCost!=null&&message.hasOwnProperty("linguisticCost"))if(typeof message.linguisticCost!=="number")return"linguisticCost: number expected";if(message.finalCost!=null&&message.hasOwnProperty("finalCost"))if(typeof message.finalCost!=="number")return"finalCost: number expected";if(message.phraseStart!=null&&message.hasOwnProperty("phraseStart"))if(typeof message.phraseStart!=="number")return"phraseStart: number expected";if(message.phraseEnd!=null&&message.hasOwnProperty("phraseEnd"))if(typeof message.phraseEnd!=="number")return"phraseEnd: number expected";if(message.normalizedText!=null&&message.hasOwnProperty("normalizedText"))if(!$util.isString(message.normalizedText))return"normalizedText: string expected";return null;};/**
         * Creates a Hypothesis message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Hypothesis
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Hypothesis} Hypothesis
         */Hypothesis.fromObject=function fromObject(object){if(object instanceof $root.Hypothesis)return object;var message=new $root.Hypothesis();if(object.words!=null)message.words=String(object.words);if(object.acousticCost!=null)message.acousticCost=Number(object.acousticCost);if(object.linguisticCost!=null)message.linguisticCost=Number(object.linguisticCost);if(object.finalCost!=null)message.finalCost=Number(object.finalCost);if(object.phraseStart!=null)message.phraseStart=Number(object.phraseStart);if(object.phraseEnd!=null)message.phraseEnd=Number(object.phraseEnd);if(object.normalizedText!=null)message.normalizedText=String(object.normalizedText);return message;};/**
         * Creates a plain object from a Hypothesis message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Hypothesis
         * @static
         * @param {Hypothesis} message Hypothesis
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */Hypothesis.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.words="";object.acousticCost=0;object.linguisticCost=0;object.finalCost=0;object.phraseStart=0;object.phraseEnd=0;object.normalizedText="";}if(message.words!=null&&message.hasOwnProperty("words"))object.words=message.words;if(message.acousticCost!=null&&message.hasOwnProperty("acousticCost"))object.acousticCost=options.json&&!isFinite(message.acousticCost)?String(message.acousticCost):message.acousticCost;if(message.linguisticCost!=null&&message.hasOwnProperty("linguisticCost"))object.linguisticCost=options.json&&!isFinite(message.linguisticCost)?String(message.linguisticCost):message.linguisticCost;if(message.finalCost!=null&&message.hasOwnProperty("finalCost"))object.finalCost=options.json&&!isFinite(message.finalCost)?String(message.finalCost):message.finalCost;if(message.phraseStart!=null&&message.hasOwnProperty("phraseStart"))object.phraseStart=options.json&&!isFinite(message.phraseStart)?String(message.phraseStart):message.phraseStart;if(message.phraseEnd!=null&&message.hasOwnProperty("phraseEnd"))object.phraseEnd=options.json&&!isFinite(message.phraseEnd)?String(message.phraseEnd):message.phraseEnd;if(message.normalizedText!=null&&message.hasOwnProperty("normalizedText"))object.normalizedText=message.normalizedText;return object;};/**
         * Converts this Hypothesis to JSON.
         * @function toJSON
         * @memberof Hypothesis
         * @instance
         * @returns {Object.<string,*>} JSON object
         */Hypothesis.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return Hypothesis;}();$root.DecoderResult=function(){/**
         * Properties of a DecoderResult.
         * @exports IDecoderResult
         * @interface IDecoderResult
         * @property {Array.<IHypothesis>|null} [hypothesis] DecoderResult hypothesis
         * @property {number|null} [chunkStart] DecoderResult chunkStart
         * @property {number|null} [chunkEnd] DecoderResult chunkEnd
         * @property {number|null} [timeEndpointDetectionMs] DecoderResult timeEndpointDetectionMs
         * @property {number|null} [timeDecodingMs] DecoderResult timeDecodingMs
         * @property {IVariables|null} [variables] DecoderResult variables
         * @property {boolean|null} [isFinal] DecoderResult isFinal
         * @property {Array.<IEmotionResult>|null} [emotionResult] DecoderResult emotionResult
         * @property {Array.<DecoderResult.IContextAnswer>|null} [contextAnswer] DecoderResult contextAnswer
         */ /**
         * Constructs a new DecoderResult.
         * @exports DecoderResult
         * @classdesc Represents a DecoderResult.
         * @implements IDecoderResult
         * @constructor
         * @param {IDecoderResult=} [properties] Properties to set
         */function DecoderResult(properties){this.hypothesis=[];this.emotionResult=[];this.contextAnswer=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * DecoderResult hypothesis.
         * @member {Array.<IHypothesis>} hypothesis
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.hypothesis=$util.emptyArray;/**
         * DecoderResult chunkStart.
         * @member {number} chunkStart
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.chunkStart=0;/**
         * DecoderResult chunkEnd.
         * @member {number} chunkEnd
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.chunkEnd=0;/**
         * DecoderResult timeEndpointDetectionMs.
         * @member {number} timeEndpointDetectionMs
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.timeEndpointDetectionMs=0;/**
         * DecoderResult timeDecodingMs.
         * @member {number} timeDecodingMs
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.timeDecodingMs=0;/**
         * DecoderResult variables.
         * @member {IVariables|null|undefined} variables
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.variables=null;/**
         * DecoderResult isFinal.
         * @member {boolean} isFinal
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.isFinal=false;/**
         * DecoderResult emotionResult.
         * @member {Array.<IEmotionResult>} emotionResult
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.emotionResult=$util.emptyArray;/**
         * DecoderResult contextAnswer.
         * @member {Array.<DecoderResult.IContextAnswer>} contextAnswer
         * @memberof DecoderResult
         * @instance
         */DecoderResult.prototype.contextAnswer=$util.emptyArray;/**
         * Creates a new DecoderResult instance using the specified properties.
         * @function create
         * @memberof DecoderResult
         * @static
         * @param {IDecoderResult=} [properties] Properties to set
         * @returns {DecoderResult} DecoderResult instance
         */DecoderResult.create=function create(properties){return new DecoderResult(properties);};/**
         * Encodes the specified DecoderResult message. Does not implicitly {@link DecoderResult.verify|verify} messages.
         * @function encode
         * @memberof DecoderResult
         * @static
         * @param {IDecoderResult} message DecoderResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */DecoderResult.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.hypothesis!=null&&message.hypothesis.length)for(var i=0;i<message.hypothesis.length;++i)$root.Hypothesis.encode(message.hypothesis[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.chunkStart!=null&&Object.hasOwnProperty.call(message,"chunkStart"))writer.uint32(/* id 2, wireType 5 =*/21).float(message.chunkStart);if(message.chunkEnd!=null&&Object.hasOwnProperty.call(message,"chunkEnd"))writer.uint32(/* id 3, wireType 5 =*/29).float(message.chunkEnd);if(message.timeEndpointDetectionMs!=null&&Object.hasOwnProperty.call(message,"timeEndpointDetectionMs"))writer.uint32(/* id 4, wireType 5 =*/37).float(message.timeEndpointDetectionMs);if(message.timeDecodingMs!=null&&Object.hasOwnProperty.call(message,"timeDecodingMs"))writer.uint32(/* id 5, wireType 5 =*/45).float(message.timeDecodingMs);if(message.variables!=null&&Object.hasOwnProperty.call(message,"variables"))$root.Variables.encode(message.variables,writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();if(message.isFinal!=null&&Object.hasOwnProperty.call(message,"isFinal"))writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isFinal);if(message.emotionResult!=null&&message.emotionResult.length)for(var i=0;i<message.emotionResult.length;++i)$root.EmotionResult.encode(message.emotionResult[i],writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();if(message.contextAnswer!=null&&message.contextAnswer.length)for(var i=0;i<message.contextAnswer.length;++i)$root.DecoderResult.ContextAnswer.encode(message.contextAnswer[i],writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();return writer;};/**
         * Encodes the specified DecoderResult message, length delimited. Does not implicitly {@link DecoderResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DecoderResult
         * @static
         * @param {IDecoderResult} message DecoderResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */DecoderResult.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a DecoderResult message from the specified reader or buffer.
         * @function decode
         * @memberof DecoderResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DecoderResult} DecoderResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */DecoderResult.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.DecoderResult();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.hypothesis&&message.hypothesis.length))message.hypothesis=[];message.hypothesis.push($root.Hypothesis.decode(reader,reader.uint32()));break;case 2:message.chunkStart=reader.float();break;case 3:message.chunkEnd=reader.float();break;case 4:message.timeEndpointDetectionMs=reader.float();break;case 5:message.timeDecodingMs=reader.float();break;case 6:message.variables=$root.Variables.decode(reader,reader.uint32());break;case 7:message.isFinal=reader.bool();break;case 8:if(!(message.emotionResult&&message.emotionResult.length))message.emotionResult=[];message.emotionResult.push($root.EmotionResult.decode(reader,reader.uint32()));break;case 9:if(!(message.contextAnswer&&message.contextAnswer.length))message.contextAnswer=[];message.contextAnswer.push($root.DecoderResult.ContextAnswer.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a DecoderResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DecoderResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DecoderResult} DecoderResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */DecoderResult.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a DecoderResult message.
         * @function verify
         * @memberof DecoderResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */DecoderResult.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.hypothesis!=null&&message.hasOwnProperty("hypothesis")){if(!Array.isArray(message.hypothesis))return"hypothesis: array expected";for(var i=0;i<message.hypothesis.length;++i){var error=$root.Hypothesis.verify(message.hypothesis[i]);if(error)return"hypothesis."+error;}}if(message.chunkStart!=null&&message.hasOwnProperty("chunkStart"))if(typeof message.chunkStart!=="number")return"chunkStart: number expected";if(message.chunkEnd!=null&&message.hasOwnProperty("chunkEnd"))if(typeof message.chunkEnd!=="number")return"chunkEnd: number expected";if(message.timeEndpointDetectionMs!=null&&message.hasOwnProperty("timeEndpointDetectionMs"))if(typeof message.timeEndpointDetectionMs!=="number")return"timeEndpointDetectionMs: number expected";if(message.timeDecodingMs!=null&&message.hasOwnProperty("timeDecodingMs"))if(typeof message.timeDecodingMs!=="number")return"timeDecodingMs: number expected";if(message.variables!=null&&message.hasOwnProperty("variables")){var error=$root.Variables.verify(message.variables);if(error)return"variables."+error;}if(message.isFinal!=null&&message.hasOwnProperty("isFinal"))if(typeof message.isFinal!=="boolean")return"isFinal: boolean expected";if(message.emotionResult!=null&&message.hasOwnProperty("emotionResult")){if(!Array.isArray(message.emotionResult))return"emotionResult: array expected";for(var i=0;i<message.emotionResult.length;++i){var error=$root.EmotionResult.verify(message.emotionResult[i]);if(error)return"emotionResult."+error;}}if(message.contextAnswer!=null&&message.hasOwnProperty("contextAnswer")){if(!Array.isArray(message.contextAnswer))return"contextAnswer: array expected";for(var i=0;i<message.contextAnswer.length;++i){var error=$root.DecoderResult.ContextAnswer.verify(message.contextAnswer[i]);if(error)return"contextAnswer."+error;}}return null;};/**
         * Creates a DecoderResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DecoderResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DecoderResult} DecoderResult
         */DecoderResult.fromObject=function fromObject(object){if(object instanceof $root.DecoderResult)return object;var message=new $root.DecoderResult();if(object.hypothesis){if(!Array.isArray(object.hypothesis))throw TypeError(".DecoderResult.hypothesis: array expected");message.hypothesis=[];for(var i=0;i<object.hypothesis.length;++i){if(typeof object.hypothesis[i]!=="object")throw TypeError(".DecoderResult.hypothesis: object expected");message.hypothesis[i]=$root.Hypothesis.fromObject(object.hypothesis[i]);}}if(object.chunkStart!=null)message.chunkStart=Number(object.chunkStart);if(object.chunkEnd!=null)message.chunkEnd=Number(object.chunkEnd);if(object.timeEndpointDetectionMs!=null)message.timeEndpointDetectionMs=Number(object.timeEndpointDetectionMs);if(object.timeDecodingMs!=null)message.timeDecodingMs=Number(object.timeDecodingMs);if(object.variables!=null){if(typeof object.variables!=="object")throw TypeError(".DecoderResult.variables: object expected");message.variables=$root.Variables.fromObject(object.variables);}if(object.isFinal!=null)message.isFinal=Boolean(object.isFinal);if(object.emotionResult){if(!Array.isArray(object.emotionResult))throw TypeError(".DecoderResult.emotionResult: array expected");message.emotionResult=[];for(var i=0;i<object.emotionResult.length;++i){if(typeof object.emotionResult[i]!=="object")throw TypeError(".DecoderResult.emotionResult: object expected");message.emotionResult[i]=$root.EmotionResult.fromObject(object.emotionResult[i]);}}if(object.contextAnswer){if(!Array.isArray(object.contextAnswer))throw TypeError(".DecoderResult.contextAnswer: array expected");message.contextAnswer=[];for(var i=0;i<object.contextAnswer.length;++i){if(typeof object.contextAnswer[i]!=="object")throw TypeError(".DecoderResult.contextAnswer: object expected");message.contextAnswer[i]=$root.DecoderResult.ContextAnswer.fromObject(object.contextAnswer[i]);}}return message;};/**
         * Creates a plain object from a DecoderResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DecoderResult
         * @static
         * @param {DecoderResult} message DecoderResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */DecoderResult.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults){object.hypothesis=[];object.emotionResult=[];object.contextAnswer=[];}if(options.defaults){object.chunkStart=0;object.chunkEnd=0;object.timeEndpointDetectionMs=0;object.timeDecodingMs=0;object.variables=null;object.isFinal=false;}if(message.hypothesis&&message.hypothesis.length){object.hypothesis=[];for(var j=0;j<message.hypothesis.length;++j)object.hypothesis[j]=$root.Hypothesis.toObject(message.hypothesis[j],options);}if(message.chunkStart!=null&&message.hasOwnProperty("chunkStart"))object.chunkStart=options.json&&!isFinite(message.chunkStart)?String(message.chunkStart):message.chunkStart;if(message.chunkEnd!=null&&message.hasOwnProperty("chunkEnd"))object.chunkEnd=options.json&&!isFinite(message.chunkEnd)?String(message.chunkEnd):message.chunkEnd;if(message.timeEndpointDetectionMs!=null&&message.hasOwnProperty("timeEndpointDetectionMs"))object.timeEndpointDetectionMs=options.json&&!isFinite(message.timeEndpointDetectionMs)?String(message.timeEndpointDetectionMs):message.timeEndpointDetectionMs;if(message.timeDecodingMs!=null&&message.hasOwnProperty("timeDecodingMs"))object.timeDecodingMs=options.json&&!isFinite(message.timeDecodingMs)?String(message.timeDecodingMs):message.timeDecodingMs;if(message.variables!=null&&message.hasOwnProperty("variables"))object.variables=$root.Variables.toObject(message.variables,options);if(message.isFinal!=null&&message.hasOwnProperty("isFinal"))object.isFinal=message.isFinal;if(message.emotionResult&&message.emotionResult.length){object.emotionResult=[];for(var j=0;j<message.emotionResult.length;++j)object.emotionResult[j]=$root.EmotionResult.toObject(message.emotionResult[j],options);}if(message.contextAnswer&&message.contextAnswer.length){object.contextAnswer=[];for(var j=0;j<message.contextAnswer.length;++j)object.contextAnswer[j]=$root.DecoderResult.ContextAnswer.toObject(message.contextAnswer[j],options);}return object;};/**
         * Converts this DecoderResult to JSON.
         * @function toJSON
         * @memberof DecoderResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */DecoderResult.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};DecoderResult.ContextAnswer=function(){/**
             * Properties of a ContextAnswer.
             * @memberof DecoderResult
             * @interface IContextAnswer
             * @property {Array.<DecoderResult.ContextAnswer.IContextRef>|null} [contextResult] ContextAnswer contextResult
             */ /**
             * Constructs a new ContextAnswer.
             * @memberof DecoderResult
             * @classdesc Represents a ContextAnswer.
             * @implements IContextAnswer
             * @constructor
             * @param {DecoderResult.IContextAnswer=} [properties] Properties to set
             */function ContextAnswer(properties){this.contextResult=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
             * ContextAnswer contextResult.
             * @member {Array.<DecoderResult.ContextAnswer.IContextRef>} contextResult
             * @memberof DecoderResult.ContextAnswer
             * @instance
             */ContextAnswer.prototype.contextResult=$util.emptyArray;/**
             * Creates a new ContextAnswer instance using the specified properties.
             * @function create
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {DecoderResult.IContextAnswer=} [properties] Properties to set
             * @returns {DecoderResult.ContextAnswer} ContextAnswer instance
             */ContextAnswer.create=function create(properties){return new ContextAnswer(properties);};/**
             * Encodes the specified ContextAnswer message. Does not implicitly {@link DecoderResult.ContextAnswer.verify|verify} messages.
             * @function encode
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {DecoderResult.IContextAnswer} message ContextAnswer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */ContextAnswer.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.contextResult!=null&&message.contextResult.length)for(var i=0;i<message.contextResult.length;++i)$root.DecoderResult.ContextAnswer.ContextRef.encode(message.contextResult[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();return writer;};/**
             * Encodes the specified ContextAnswer message, length delimited. Does not implicitly {@link DecoderResult.ContextAnswer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {DecoderResult.IContextAnswer} message ContextAnswer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */ContextAnswer.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
             * Decodes a ContextAnswer message from the specified reader or buffer.
             * @function decode
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DecoderResult.ContextAnswer} ContextAnswer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */ContextAnswer.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.DecoderResult.ContextAnswer();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.contextResult&&message.contextResult.length))message.contextResult=[];message.contextResult.push($root.DecoderResult.ContextAnswer.ContextRef.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
             * Decodes a ContextAnswer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DecoderResult.ContextAnswer} ContextAnswer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */ContextAnswer.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
             * Verifies a ContextAnswer message.
             * @function verify
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */ContextAnswer.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.contextResult!=null&&message.hasOwnProperty("contextResult")){if(!Array.isArray(message.contextResult))return"contextResult: array expected";for(var i=0;i<message.contextResult.length;++i){var error=$root.DecoderResult.ContextAnswer.ContextRef.verify(message.contextResult[i]);if(error)return"contextResult."+error;}}return null;};/**
             * Creates a ContextAnswer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DecoderResult.ContextAnswer} ContextAnswer
             */ContextAnswer.fromObject=function fromObject(object){if(object instanceof $root.DecoderResult.ContextAnswer)return object;var message=new $root.DecoderResult.ContextAnswer();if(object.contextResult){if(!Array.isArray(object.contextResult))throw TypeError(".DecoderResult.ContextAnswer.contextResult: array expected");message.contextResult=[];for(var i=0;i<object.contextResult.length;++i){if(typeof object.contextResult[i]!=="object")throw TypeError(".DecoderResult.ContextAnswer.contextResult: object expected");message.contextResult[i]=$root.DecoderResult.ContextAnswer.ContextRef.fromObject(object.contextResult[i]);}}return message;};/**
             * Creates a plain object from a ContextAnswer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DecoderResult.ContextAnswer
             * @static
             * @param {DecoderResult.ContextAnswer} message ContextAnswer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */ContextAnswer.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.contextResult=[];if(message.contextResult&&message.contextResult.length){object.contextResult=[];for(var j=0;j<message.contextResult.length;++j)object.contextResult[j]=$root.DecoderResult.ContextAnswer.ContextRef.toObject(message.contextResult[j],options);}return object;};/**
             * Converts this ContextAnswer to JSON.
             * @function toJSON
             * @memberof DecoderResult.ContextAnswer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */ContextAnswer.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};ContextAnswer.ContextRef=function(){/**
                 * Properties of a ContextRef.
                 * @memberof DecoderResult.ContextAnswer
                 * @interface IContextRef
                 * @property {string|null} [id] ContextRef id
                 * @property {number|null} [index] ContextRef index
                 * @property {string|null} [originalValue] ContextRef originalValue
                 * @property {string|null} [predictedValue] ContextRef predictedValue
                 * @property {number|null} [score] ContextRef score
                 */ /**
                 * Constructs a new ContextRef.
                 * @memberof DecoderResult.ContextAnswer
                 * @classdesc Represents a ContextRef.
                 * @implements IContextRef
                 * @constructor
                 * @param {DecoderResult.ContextAnswer.IContextRef=} [properties] Properties to set
                 */function ContextRef(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
                 * ContextRef id.
                 * @member {string} id
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @instance
                 */ContextRef.prototype.id="";/**
                 * ContextRef index.
                 * @member {number} index
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @instance
                 */ContextRef.prototype.index=0;/**
                 * ContextRef originalValue.
                 * @member {string} originalValue
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @instance
                 */ContextRef.prototype.originalValue="";/**
                 * ContextRef predictedValue.
                 * @member {string} predictedValue
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @instance
                 */ContextRef.prototype.predictedValue="";/**
                 * ContextRef score.
                 * @member {number} score
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @instance
                 */ContextRef.prototype.score=0;/**
                 * Creates a new ContextRef instance using the specified properties.
                 * @function create
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {DecoderResult.ContextAnswer.IContextRef=} [properties] Properties to set
                 * @returns {DecoderResult.ContextAnswer.ContextRef} ContextRef instance
                 */ContextRef.create=function create(properties){return new ContextRef(properties);};/**
                 * Encodes the specified ContextRef message. Does not implicitly {@link DecoderResult.ContextAnswer.ContextRef.verify|verify} messages.
                 * @function encode
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {DecoderResult.ContextAnswer.IContextRef} message ContextRef message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */ContextRef.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.id!=null&&Object.hasOwnProperty.call(message,"id"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);if(message.index!=null&&Object.hasOwnProperty.call(message,"index"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);if(message.originalValue!=null&&Object.hasOwnProperty.call(message,"originalValue"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.originalValue);if(message.predictedValue!=null&&Object.hasOwnProperty.call(message,"predictedValue"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.predictedValue);if(message.score!=null&&Object.hasOwnProperty.call(message,"score"))writer.uint32(/* id 5, wireType 5 =*/45).float(message.score);return writer;};/**
                 * Encodes the specified ContextRef message, length delimited. Does not implicitly {@link DecoderResult.ContextAnswer.ContextRef.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {DecoderResult.ContextAnswer.IContextRef} message ContextRef message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */ContextRef.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
                 * Decodes a ContextRef message from the specified reader or buffer.
                 * @function decode
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {DecoderResult.ContextAnswer.ContextRef} ContextRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */ContextRef.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.DecoderResult.ContextAnswer.ContextRef();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.id=reader.string();break;case 2:message.index=reader.int32();break;case 3:message.originalValue=reader.string();break;case 4:message.predictedValue=reader.string();break;case 5:message.score=reader.float();break;default:reader.skipType(tag&7);break;}}return message;};/**
                 * Decodes a ContextRef message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {DecoderResult.ContextAnswer.ContextRef} ContextRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */ContextRef.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
                 * Verifies a ContextRef message.
                 * @function verify
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */ContextRef.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.id!=null&&message.hasOwnProperty("id"))if(!$util.isString(message.id))return"id: string expected";if(message.index!=null&&message.hasOwnProperty("index"))if(!$util.isInteger(message.index))return"index: integer expected";if(message.originalValue!=null&&message.hasOwnProperty("originalValue"))if(!$util.isString(message.originalValue))return"originalValue: string expected";if(message.predictedValue!=null&&message.hasOwnProperty("predictedValue"))if(!$util.isString(message.predictedValue))return"predictedValue: string expected";if(message.score!=null&&message.hasOwnProperty("score"))if(typeof message.score!=="number")return"score: number expected";return null;};/**
                 * Creates a ContextRef message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {DecoderResult.ContextAnswer.ContextRef} ContextRef
                 */ContextRef.fromObject=function fromObject(object){if(object instanceof $root.DecoderResult.ContextAnswer.ContextRef)return object;var message=new $root.DecoderResult.ContextAnswer.ContextRef();if(object.id!=null)message.id=String(object.id);if(object.index!=null)message.index=object.index|0;if(object.originalValue!=null)message.originalValue=String(object.originalValue);if(object.predictedValue!=null)message.predictedValue=String(object.predictedValue);if(object.score!=null)message.score=Number(object.score);return message;};/**
                 * Creates a plain object from a ContextRef message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @static
                 * @param {DecoderResult.ContextAnswer.ContextRef} message ContextRef
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */ContextRef.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.id="";object.index=0;object.originalValue="";object.predictedValue="";object.score=0;}if(message.id!=null&&message.hasOwnProperty("id"))object.id=message.id;if(message.index!=null&&message.hasOwnProperty("index"))object.index=message.index;if(message.originalValue!=null&&message.hasOwnProperty("originalValue"))object.originalValue=message.originalValue;if(message.predictedValue!=null&&message.hasOwnProperty("predictedValue"))object.predictedValue=message.predictedValue;if(message.score!=null&&message.hasOwnProperty("score"))object.score=options.json&&!isFinite(message.score)?String(message.score):message.score;return object;};/**
                 * Converts this ContextRef to JSON.
                 * @function toJSON
                 * @memberof DecoderResult.ContextAnswer.ContextRef
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */ContextRef.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ContextRef;}();return ContextAnswer;}();return DecoderResult;}();$root.ErrorResponse=function(){/**
         * Properties of an ErrorResponse.
         * @exports IErrorResponse
         * @interface IErrorResponse
         * @property {string|null} [errorMessage] ErrorResponse errorMessage
         */ /**
         * Constructs a new ErrorResponse.
         * @exports ErrorResponse
         * @classdesc Represents an ErrorResponse.
         * @implements IErrorResponse
         * @constructor
         * @param {IErrorResponse=} [properties] Properties to set
         */function ErrorResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * ErrorResponse errorMessage.
         * @member {string} errorMessage
         * @memberof ErrorResponse
         * @instance
         */ErrorResponse.prototype.errorMessage="";/**
         * Creates a new ErrorResponse instance using the specified properties.
         * @function create
         * @memberof ErrorResponse
         * @static
         * @param {IErrorResponse=} [properties] Properties to set
         * @returns {ErrorResponse} ErrorResponse instance
         */ErrorResponse.create=function create(properties){return new ErrorResponse(properties);};/**
         * Encodes the specified ErrorResponse message. Does not implicitly {@link ErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof ErrorResponse
         * @static
         * @param {IErrorResponse} message ErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */ErrorResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.errorMessage!=null&&Object.hasOwnProperty.call(message,"errorMessage"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMessage);return writer;};/**
         * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link ErrorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ErrorResponse
         * @static
         * @param {IErrorResponse} message ErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */ErrorResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes an ErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ErrorResponse} ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */ErrorResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ErrorResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.errorMessage=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ErrorResponse} ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */ErrorResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies an ErrorResponse message.
         * @function verify
         * @memberof ErrorResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */ErrorResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.errorMessage!=null&&message.hasOwnProperty("errorMessage"))if(!$util.isString(message.errorMessage))return"errorMessage: string expected";return null;};/**
         * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ErrorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ErrorResponse} ErrorResponse
         */ErrorResponse.fromObject=function fromObject(object){if(object instanceof $root.ErrorResponse)return object;var message=new $root.ErrorResponse();if(object.errorMessage!=null)message.errorMessage=String(object.errorMessage);return message;};/**
         * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ErrorResponse
         * @static
         * @param {ErrorResponse} message ErrorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */ErrorResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.errorMessage="";if(message.errorMessage!=null&&message.hasOwnProperty("errorMessage"))object.errorMessage=message.errorMessage;return object;};/**
         * Converts this ErrorResponse to JSON.
         * @function toJSON
         * @memberof ErrorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */ErrorResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ErrorResponse;}();$root.PacketWrapperFromServer=function(){/**
         * Properties of a PacketWrapperFromServer.
         * @exports IPacketWrapperFromServer
         * @interface IPacketWrapperFromServer
         * @property {IUndecodedSeconds|null} [undecodedSecondsField] PacketWrapperFromServer undecodedSecondsField
         * @property {IFullyFinalized|null} [fullyFinalizedField] PacketWrapperFromServer fullyFinalizedField
         * @property {IDecoderResult|null} [decoderResultField] PacketWrapperFromServer decoderResultField
         * @property {IErrorResponse|null} [errorResponse] PacketWrapperFromServer errorResponse
         */ /**
         * Constructs a new PacketWrapperFromServer.
         * @exports PacketWrapperFromServer
         * @classdesc Represents a PacketWrapperFromServer.
         * @implements IPacketWrapperFromServer
         * @constructor
         * @param {IPacketWrapperFromServer=} [properties] Properties to set
         */function PacketWrapperFromServer(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i)if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}/**
         * PacketWrapperFromServer undecodedSecondsField.
         * @member {IUndecodedSeconds|null|undefined} undecodedSecondsField
         * @memberof PacketWrapperFromServer
         * @instance
         */PacketWrapperFromServer.prototype.undecodedSecondsField=null;/**
         * PacketWrapperFromServer fullyFinalizedField.
         * @member {IFullyFinalized|null|undefined} fullyFinalizedField
         * @memberof PacketWrapperFromServer
         * @instance
         */PacketWrapperFromServer.prototype.fullyFinalizedField=null;/**
         * PacketWrapperFromServer decoderResultField.
         * @member {IDecoderResult|null|undefined} decoderResultField
         * @memberof PacketWrapperFromServer
         * @instance
         */PacketWrapperFromServer.prototype.decoderResultField=null;/**
         * PacketWrapperFromServer errorResponse.
         * @member {IErrorResponse|null|undefined} errorResponse
         * @memberof PacketWrapperFromServer
         * @instance
         */PacketWrapperFromServer.prototype.errorResponse=null;// OneOf field names bound to virtual getters and setters
var $oneOfFields;/**
         * PacketWrapperFromServer MessageType.
         * @member {"undecodedSecondsField"|"fullyFinalizedField"|"decoderResultField"|"errorResponse"|undefined} MessageType
         * @memberof PacketWrapperFromServer
         * @instance
         */Object.defineProperty(PacketWrapperFromServer.prototype,"MessageType",{get:$util.oneOfGetter($oneOfFields=["undecodedSecondsField","fullyFinalizedField","decoderResultField","errorResponse"]),set:$util.oneOfSetter($oneOfFields)});/**
         * Creates a new PacketWrapperFromServer instance using the specified properties.
         * @function create
         * @memberof PacketWrapperFromServer
         * @static
         * @param {IPacketWrapperFromServer=} [properties] Properties to set
         * @returns {PacketWrapperFromServer} PacketWrapperFromServer instance
         */PacketWrapperFromServer.create=function create(properties){return new PacketWrapperFromServer(properties);};/**
         * Encodes the specified PacketWrapperFromServer message. Does not implicitly {@link PacketWrapperFromServer.verify|verify} messages.
         * @function encode
         * @memberof PacketWrapperFromServer
         * @static
         * @param {IPacketWrapperFromServer} message PacketWrapperFromServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */PacketWrapperFromServer.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.undecodedSecondsField!=null&&Object.hasOwnProperty.call(message,"undecodedSecondsField"))$root.UndecodedSeconds.encode(message.undecodedSecondsField,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.fullyFinalizedField!=null&&Object.hasOwnProperty.call(message,"fullyFinalizedField"))$root.FullyFinalized.encode(message.fullyFinalizedField,writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();if(message.decoderResultField!=null&&Object.hasOwnProperty.call(message,"decoderResultField"))$root.DecoderResult.encode(message.decoderResultField,writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();if(message.errorResponse!=null&&Object.hasOwnProperty.call(message,"errorResponse"))$root.ErrorResponse.encode(message.errorResponse,writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();return writer;};/**
         * Encodes the specified PacketWrapperFromServer message, length delimited. Does not implicitly {@link PacketWrapperFromServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PacketWrapperFromServer
         * @static
         * @param {IPacketWrapperFromServer} message PacketWrapperFromServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */PacketWrapperFromServer.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
         * Decodes a PacketWrapperFromServer message from the specified reader or buffer.
         * @function decode
         * @memberof PacketWrapperFromServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PacketWrapperFromServer} PacketWrapperFromServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */PacketWrapperFromServer.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.PacketWrapperFromServer();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.undecodedSecondsField=$root.UndecodedSeconds.decode(reader,reader.uint32());break;case 2:message.fullyFinalizedField=$root.FullyFinalized.decode(reader,reader.uint32());break;case 4:message.decoderResultField=$root.DecoderResult.decode(reader,reader.uint32());break;case 8:message.errorResponse=$root.ErrorResponse.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
         * Decodes a PacketWrapperFromServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PacketWrapperFromServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PacketWrapperFromServer} PacketWrapperFromServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */PacketWrapperFromServer.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
         * Verifies a PacketWrapperFromServer message.
         * @function verify
         * @memberof PacketWrapperFromServer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */PacketWrapperFromServer.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";var properties={};if(message.undecodedSecondsField!=null&&message.hasOwnProperty("undecodedSecondsField")){properties.MessageType=1;{var error=$root.UndecodedSeconds.verify(message.undecodedSecondsField);if(error)return"undecodedSecondsField."+error;}}if(message.fullyFinalizedField!=null&&message.hasOwnProperty("fullyFinalizedField")){if(properties.MessageType===1)return"MessageType: multiple values";properties.MessageType=1;{var error=$root.FullyFinalized.verify(message.fullyFinalizedField);if(error)return"fullyFinalizedField."+error;}}if(message.decoderResultField!=null&&message.hasOwnProperty("decoderResultField")){if(properties.MessageType===1)return"MessageType: multiple values";properties.MessageType=1;{var error=$root.DecoderResult.verify(message.decoderResultField);if(error)return"decoderResultField."+error;}}if(message.errorResponse!=null&&message.hasOwnProperty("errorResponse")){if(properties.MessageType===1)return"MessageType: multiple values";properties.MessageType=1;{var error=$root.ErrorResponse.verify(message.errorResponse);if(error)return"errorResponse."+error;}}return null;};/**
         * Creates a PacketWrapperFromServer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PacketWrapperFromServer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PacketWrapperFromServer} PacketWrapperFromServer
         */PacketWrapperFromServer.fromObject=function fromObject(object){if(object instanceof $root.PacketWrapperFromServer)return object;var message=new $root.PacketWrapperFromServer();if(object.undecodedSecondsField!=null){if(typeof object.undecodedSecondsField!=="object")throw TypeError(".PacketWrapperFromServer.undecodedSecondsField: object expected");message.undecodedSecondsField=$root.UndecodedSeconds.fromObject(object.undecodedSecondsField);}if(object.fullyFinalizedField!=null){if(typeof object.fullyFinalizedField!=="object")throw TypeError(".PacketWrapperFromServer.fullyFinalizedField: object expected");message.fullyFinalizedField=$root.FullyFinalized.fromObject(object.fullyFinalizedField);}if(object.decoderResultField!=null){if(typeof object.decoderResultField!=="object")throw TypeError(".PacketWrapperFromServer.decoderResultField: object expected");message.decoderResultField=$root.DecoderResult.fromObject(object.decoderResultField);}if(object.errorResponse!=null){if(typeof object.errorResponse!=="object")throw TypeError(".PacketWrapperFromServer.errorResponse: object expected");message.errorResponse=$root.ErrorResponse.fromObject(object.errorResponse);}return message;};/**
         * Creates a plain object from a PacketWrapperFromServer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PacketWrapperFromServer
         * @static
         * @param {PacketWrapperFromServer} message PacketWrapperFromServer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */PacketWrapperFromServer.toObject=function toObject(message,options){if(!options)options={};var object={};if(message.undecodedSecondsField!=null&&message.hasOwnProperty("undecodedSecondsField")){object.undecodedSecondsField=$root.UndecodedSeconds.toObject(message.undecodedSecondsField,options);if(options.oneofs)object.MessageType="undecodedSecondsField";}if(message.fullyFinalizedField!=null&&message.hasOwnProperty("fullyFinalizedField")){object.fullyFinalizedField=$root.FullyFinalized.toObject(message.fullyFinalizedField,options);if(options.oneofs)object.MessageType="fullyFinalizedField";}if(message.decoderResultField!=null&&message.hasOwnProperty("decoderResultField")){object.decoderResultField=$root.DecoderResult.toObject(message.decoderResultField,options);if(options.oneofs)object.MessageType="decoderResultField";}if(message.errorResponse!=null&&message.hasOwnProperty("errorResponse")){object.errorResponse=$root.ErrorResponse.toObject(message.errorResponse,options);if(options.oneofs)object.MessageType="errorResponse";}return object;};/**
         * Converts this PacketWrapperFromServer to JSON.
         * @function toJSON
         * @memberof PacketWrapperFromServer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */PacketWrapperFromServer.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return PacketWrapperFromServer;}();return $root;});});var createSpeechRecognizer=function(voiceListener){var _a=createNanoEvents(),emit=_a.emit,on=_a.on;var off;var status='inactive';var stop=function(){if(voiceListener.status!=='stopped'){status='inactive';voiceListener.stop();}};var start=function(_a){var sendVoice=_a.sendVoice,messageId=_a.messageId,onMessage=_a.onMessage;voiceListener.listen(sendVoice).then(function(){status='active';off=onMessage(function(message){var _a,_b;if(message.status&&message.status.code!=null&&message.status.code<0){off();stop();}if(message.messageId===messageId&&message.messageName===MessageNames.STT){if(message.text){emit('hypotesis',message.text.data||'',message.last===1);if(message.last===1){off();stop();}}if((_a=message.bytes)===null||_a===void 0?void 0:_a.data){var decoderResultField=asr.PacketWrapperFromServer.decode(message.bytes.data).decoderResultField;if(decoderResultField&&((_b=decoderResultField.hypothesis)===null||_b===void 0?void 0:_b.length)){emit('hypotesis',decoderResultField.hypothesis[0].normalizedText||'',!!decoderResultField.isFinal);if(decoderResultField.isFinal){off();stop();}}}}});}).catch(function(){});};return{start:start,stop:stop,on:on,get status(){return status;}};};/* eslint-disable no-unused-expressions, @typescript-eslint/camelcase, no-underscore-dangle */exports.createSpeechRecognizer=createSpeechRecognizer;var SDK_VERSION='20.09.1.3576';var APP_VERSION='2.11.5';var CAPABILITIES=JSON.stringify({screen:{available:true,width:window.innerWidth,height:window.innerHeight},speak:{available:true}});var FEATURES=JSON.stringify({appTypes:['DIALOG','WEB_APP']});var legacyDevice={clientType:'simple',channel:'Android_SB',channelVersion:'8.1.0.2932_RC',platformName:'WEBDBG 1.0',platformVersion:'1.0'};var initializeAssistantSDK=function(_a){var initPhrase=_a.initPhrase,url=_a.url,userChannel=_a.userChannel,surface=_a.surface,_b=_a.userId,userId=_b===void 0?"webdbg_userid_"+(Math.random().toString(36).substring(2,13)+Math.random().toString(36).substring(2,13)):_b,_c=_a.token,token=_c===void 0?"webdbg_eribtoken_"+(Math.random().toString(36).substring(2,13)+Math.random().toString(36).substring(2,13)):_c,surfaceVersion=_a.surfaceVersion,deviceId=_a.deviceId,_d=_a.locale,locale=_d===void 0?'ru':_d,_e=_a.nativePanel,nativePanel=_e===void 0?{defaultText:'Покажи что-нибудь',render:renderNativePanel}:_e,_f=_a.sdkVersion,sdkVersion=_f===void 0?SDK_VERSION:_f,enableRecord=_a.enableRecord,recordParams=_a.recordParams,_g=_a.settings,settings=_g===void 0?{}:_g,voiceSettings=_a.voiceSettings,_h=_a.vpsVersion,vpsVersion=_h===void 0?3:_h;var device={platformType:'WEBDBG',platformVersion:'1.0',sdkVersion:sdkVersion,surface:surface,surfaceVersion:surfaceVersion||APP_VERSION,features:FEATURES,capabilities:CAPABILITIES,deviceId:deviceId,additionalInfo:JSON.stringify({host_app_id:'ru.sberbank.sdakit.demo',sdk_version:sdkVersion})};var voicePlayer=createVoicePlayer(voiceSettings);var recoveryStateRepository=createRecoveryStateRepository();var autolistenMesId=null;var clientLogger=(recordParams===null||recordParams===void 0?void 0:recordParams.logger)?recordParams.logger:createConsoleLogger();var loggerCb;var recorder=createLogCallbackRecorder(function(subscribe){loggerCb=subscribe;},(recordParams===null||recordParams===void 0?void 0:recordParams.defaultActive)!=null?recordParams.defaultActive:true);var saver=createRecordDownloader();if(enableRecord&&(recordParams===null||recordParams===void 0?void 0:recordParams.logger)==null){clientLogger=createCallbackLogger(function(logEntry){return loggerCb&&loggerCb(logEntry);});}var vpsClient=createClient({url:url,userId:userId,token:token,userChannel:userChannel,locale:locale,device:device,legacyDevice:legacyDevice,settings:__assign(__assign({},settings),{dubbing:settings.dubbing===false?-1:1,echo:settings.echo||-1}),version:vpsVersion},clientLogger);var appInfo;var initialSmartAppData=[];var requestIdMap={};var clientReady=false;// флаг готовности клиента к приему onData
var assistantReady=false;// флаг готовности контекста ассистента
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var state=null;var character;var createSystemMessageBase=function(){return{app_info:appInfo,meta:{current_app:{app_info:appInfo,state:state}}};};var sendServerAction=function(_a){var data=_a.data,message_name=_a.message_name,requestId=_a.requestId;var messageId;if(requestId){messageId=Date.now();requestIdMap[messageId.toString()]=requestId;}return vpsClient.sendSystemMessage({data:__assign(__assign({},createSystemMessageBase()),{server_action:data}),messageName:message_name||'SERVER_ACTION'},undefined,messageId);};var updateState=function(){var _a;if((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onRequestState){state=window.AssistantClient.onRequestState();}};var sendText=function(text,params){if(params===void 0){params={};}voicePlayer.active=false;voicePlayer.active=true;updateState();return vpsClient.batch(function(_a){var batchedSendText=_a.sendText,sendSystemMessage=_a.sendSystemMessage;state&&sendSystemMessage({data:__assign({},createSystemMessageBase()),messageName:''},false);return batchedSendText(text,params);});};var emitOnData=function(command){var _a;if(clientReady&&assistantReady&&((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onData)){window.AssistantClient.onData(command);}};var fn=function(){return __awaiter(void 0,void 0,void 0,function(){var messageId,res,_i,_a,item,_b,initialSmartAppData_1,smartAppData;var _c,_d,_e;return __generator(this,function(_f){switch(_f.label){case 0:return[4/*yield*/,new Promise(function(resolve){vpsClient.on('ready',resolve);})];case 1:_f.sent();return[4/*yield*/,vpsClient.sendSystemMessage({data:{},messageName:'OPEN_ASSISTANT'})];case 2:_f.sent();if(!initPhrase)return[3/*break*/,4];initialSmartAppData.push({type:'insets',insets:{left:0,top:0,right:0,bottom:144},sdk_meta:{mid:-1}});messageId=vpsClient.currentMessageId;return[4/*yield*/,vpsClient.sendText(initPhrase)];case 3:res=_f.sent();appInfo=res===null||res===void 0?void 0:res.app_info;if(res===null||res===void 0?void 0:res.character){character=res===null||res===void 0?void 0:res.character.id;initialSmartAppData.push({type:'character',character:res.character,sdk_meta:{mid:-1}});}for(_i=0,_a=(res===null||res===void 0?void 0:res.items)||[];_i<_a.length;_i++){item=_a[_i];if(item.command!=null){initialSmartAppData.push(__assign(__assign({},item.command),{sdk_meta:{mid:messageId}}));}}window.appInitialData=initialSmartAppData;if(appInfo&&appInfo.applicationId){window.appRecoveryState=recoveryStateRepository.get(appInfo.applicationId);}if(clientReady&&((_c=window.AssistantClient)===null||_c===void 0?void 0:_c.onData)){((_d=window.AssistantClient)===null||_d===void 0?void 0:_d.onStart)&&((_e=window.AssistantClient)===null||_e===void 0?void 0:_e.onStart());}assistantReady=true;for(_b=0,initialSmartAppData_1=initialSmartAppData;_b<initialSmartAppData_1.length;_b++){smartAppData=initialSmartAppData_1[_b];emitOnData(smartAppData);}_f.label=4;case 4:return[2/*return*/];}});});};var promise=fn();window.appInitialData=[];window.appRecoveryState=null;window.AssistantHost={close:function(){var _a;if(appInfo&&appInfo.applicationId){recoveryStateRepository.remove(appInfo.applicationId);if((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onRequestRecoveryState){recoveryStateRepository.set(appInfo.applicationId,window.AssistantClient.onRequestRecoveryState());}}appInfo=undefined;initialSmartAppData.splice(0,initialSmartAppData.length);state=null;window.appRecoveryState=null;},ready:function(){var _a,_b,_c;if(assistantReady&&((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onData)){((_b=window.AssistantClient)===null||_b===void 0?void 0:_b.onStart)&&((_c=window.AssistantClient)===null||_c===void 0?void 0:_c.onStart());}clientReady=true;},sendData:function(payload,messageName){if(messageName===void 0){messageName=null;}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,promise];case 1:_a.sent();updateState();sendServerAction({data:JSON.parse(payload),message_name:messageName||undefined});return[2/*return*/];}});});},sendDataContainer:function(container){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,promise];case 1:_a.sent();updateState();sendServerAction(JSON.parse(container));return[2/*return*/];}});});},setSuggest:function(){}};var voiceListener=createVoiceListener();var speechRecognizer=createSpeechRecognizer(voiceListener);var musciRecognizer=createMusicRecognizer(voiceListener);var subscribeToListenerStatus=function(cb){return voiceListener.on('status',cb);};var subscribeToListenerHypotesis=function(cb){return speechRecognizer.on('hypotesis',cb);};voiceListener.on('status',function(status){if(status==='listen'){voicePlayer.active=false;}else{voicePlayer.active=true;}});var handleListen=function(){autolistenMesId=null;if(speechRecognizer.status==='active'){speechRecognizer.stop();return;}if(musciRecognizer.status==='active'){musciRecognizer.stop();return;}updateState();vpsClient.batch(function(_a){var sendSystemMessage=_a.sendSystemMessage,sendVoice=_a.sendVoice,messageId=_a.messageId;state&&sendSystemMessage({data:__assign({},createSystemMessageBase()),messageName:''},false);speechRecognizer.start({sendVoice:sendVoice,messageId:messageId,onMessage:function(cb){return vpsClient.on('message',cb);}});});};var handleMusicRecognize=function(){autolistenMesId=null;if(speechRecognizer.status==='active'){speechRecognizer.stop();return;}if(musciRecognizer.status==='active'){musciRecognizer.stop();return;}vpsClient.batch(function(_a){var sendVoice=_a.sendVoice,messageId=_a.messageId;musciRecognizer.start({sendVoice:sendVoice,messageId:messageId,onMessage:function(cb){return vpsClient.on('message',cb);}});});};var updateDevUI=function(suggestions,bubbleText){if(suggestions===void 0){suggestions=[];}if(bubbleText===void 0){bubbleText='';}if(nativePanel){var render=nativePanel.render,props=__rest(nativePanel,["render"]);(render||renderNativePanel)(__assign(__assign({},props),{sendText:sendText,onListen:handleListen,suggestions:suggestions||[],bubbleText:bubbleText,onSubscribeListenStatus:subscribeToListenerStatus,onSubscribeHypotesis:subscribeToListenerHypotesis}));}};voicePlayer.on('end',function(messageId){if(autolistenMesId===messageId){handleListen();}});vpsClient.on('systemMessage',function(message,original){var _a,_b,_c,_d;var bubbleText='';if(message.auto_listening){autolistenMesId=original.messageId.toString();}for(var _i=0,_e=message.items;_i<_e.length;_i++){var item=_e[_i];if(item.bubble){bubbleText=item.bubble.text;}if(item.command){if(item.command.type.toLowerCase()==='close_app'&&appInfo&&appInfo.applicationId===((_a=message.app_info)===null||_a===void 0?void 0:_a.applicationId)){(_b=window.AssistantHost)===null||_b===void 0?void 0:_b.close();return;}if(item.command.type.toLowerCase()==='start_music_recognition'){handleMusicRecognize();return;}emitOnData(__assign(__assign({},item.command),{sdk_meta:{mid:original.messageId,requestId:requestIdMap[original.messageId.toString()]}}));}}if(message.character&&message.character.id!==character){character=message.character.id;emitOnData({type:'character',character:message.character,sdk_meta:{mid:-1}});}updateDevUI((_d=(_c=message.suggestions)===null||_c===void 0?void 0:_c.buttons)!==null&&_d!==void 0?_d:[],bubbleText);});vpsClient.on('message',function(message){if(message.voice){voicePlayer.append(message.voice.data||new Uint8Array(),message.messageId.toString(),message.last===1);}});updateDevUI();enableRecord&&renderAssistantRecordPanel(recorder,saver);window.__dangerouslySendTextMessage=sendText;return{sendText:sendText,on:vpsClient.on,destroy:vpsClient.destroy};};exports.initializeAssistantSDK=initializeAssistantSDK;var createNanoObservable=function(observerFunc){var _a=createNanoEvents(),on=_a.on,emit=_a.emit;var subscribe=function(_a){var next=_a.next;var unsubscribe=on('next',next);return{unsubscribe:unsubscribe};};observerFunc({next:function(data){emit('next',data);}});return{subscribe:subscribe};};/* eslint-disable @typescript-eslint/camelcase */var createRecordOfflinePlayer=function(record,_a){var _b=(_a===void 0?{}:_a).context,context=_b===void 0?window:_b;var currentRecord=record;var entryCursor=0;var playMessage=function(message,onPlay){var _a;for(var _i=0,_b=message.items;_i<_b.length;_i++){var item=_b[_i];if(item.command){onPlay?onPlay(item.command):((_a=context.AssistantClient)===null||_a===void 0?void 0:_a.onData)&&context.AssistantClient.onData(item.command);}}};var playNext=function(onPlay){var _a;if(!currentRecord||entryCursor+1>=currentRecord.entries.length){return false;}var entry=currentRecord.entries[entryCursor++];while((entry.type!=='incoming'||((_a=entry.message)===null||_a===void 0?void 0:_a.data)==null||entry.message.name!==MessageNames.ANSWER_TO_USER||!entry.message.data.items.some(function(_a){var command=_a.command;return command!=null;}))&&entryCursor<currentRecord.entries.length){entry=currentRecord.entries[entryCursor++];}if(entry.type==='incoming'&&entryCursor<=currentRecord.entries.length){entry.message&&playMessage(entry.message.data,onPlay);}return currentRecord.entries.some(function(e,i){var _a;return i>=entryCursor&&e.type==='incoming'&&((_a=e.message)===null||_a===void 0?void 0:_a.data)!=null&&e.message.name===MessageNames.ANSWER_TO_USER&&e.message.data.items.some(function(_a){var command=_a.command;return command!=null;});});};var play=function(onPlay){var _a;((_a=context.AssistantClient)===null||_a===void 0?void 0:_a.onStart)&&context.AssistantClient.onStart();if(!currentRecord){return;}var end=false;while(!end){end=!playNext(onPlay);}};var getNextAction=function(){var _a,_b,_c,_d,_e,_f,_g;if(!currentRecord||entryCursor+1>=currentRecord.entries.length){return undefined;}var cursor=entryCursor;var entry=currentRecord.entries[cursor++];while(entry.type==='outcoming'&&((_c=(_b=(_a=entry.message)===null||_a===void 0?void 0:_a.data)===null||_b===void 0?void 0:_b.systemMessage)===null||_c===void 0?void 0:_c.data)==null&&cursor<currentRecord.entries.length){entry=currentRecord.entries[cursor++];}if(cursor>=currentRecord.entries.length){return undefined;}return{action:(_d=entry.message)===null||_d===void 0?void 0:_d.data.server_action,name:(_e=entry.message)===null||_e===void 0?void 0:_e.name,requestId:(_g=(_f=entry.message)===null||_f===void 0?void 0:_f.data.sdk_meta)===null||_g===void 0?void 0:_g.requestId};};var setRecord=function(rec){if(rec.version!==CURRENT_VERSION){throw new Error('Unsupported log version');}currentRecord=rec;entryCursor=0;};return{continue:playNext,play:play,getNextAction:getNextAction,setRecord:setRecord};};exports.createRecordPlayer=createRecordOfflinePlayer;var createOnlineRecordPlayer=function(record,_a){var _b=(_a===void 0?{}:_a).context,context=_b===void 0?window:_b;var currentRecord=record;var entryCursor=0;var playServerAction=function(action,message){var _a;/// WARNING: requestId не поддерживается
// eslint-disable-next-line @typescript-eslint/camelcase
(_a=window.AssistantHost)===null||_a===void 0?void 0:_a.sendDataContainer(JSON.stringify({action:action,message_name:message}));};var playTextAction=function(text){if(!text.length){return;}// eslint-disable-next-line no-underscore-dangle
context.__dangerouslySendTextMessage&&context.__dangerouslySendTextMessage(text);};var playNext=function(){var _a;if(!currentRecord||entryCursor+1>=currentRecord.entries.length){return false;}var entry=currentRecord.entries[entryCursor++];while(entry.type!=='outcoming'||(entry.message==null||((_a=entry.message.data)===null||_a===void 0?void 0:_a.server_action)==null||entry.message.name==='OPEN_ASSISTANT')&&entry.text==null&&entryCursor<currentRecord.entries.length){entry=currentRecord.entries[entryCursor++];}if(entry.type==='outcoming'&&entryCursor<currentRecord.entries.length){entry.message&&playServerAction(entry.message.data.server_action,entry.message.name);entry.text&&playTextAction(entry.text.data||'');}return currentRecord.entries.some(function(e,i){var _a;return i>=entryCursor&&e.type==='outcoming'&&((_a=e.message)===null||_a===void 0?void 0:_a.data)!=null;});};var play=function(){if(!currentRecord){return;}var end=false;while(!end){end=!playNext();}};var setRecord=function(rec){if(rec.version!==CURRENT_VERSION){throw new Error('Unsupported log version');}currentRecord=rec;entryCursor=0;};return{continue:playNext,play:play,setRecord:setRecord};};exports.createOnlineRecordPlayer=createOnlineRecordPlayer;var bind=function bind(fn,thisArg){return function wrap(){var args=new Array(arguments.length);for(var i=0;i<args.length;i++){args[i]=arguments[i];}return fn.apply(thisArg,args);};};/*global toString:true*/ // utils is a library of generic helper functions non-specific to axios
var toString=Object.prototype.toString;/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */function isArray(val){return toString.call(val)==='[object Array]';}/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */function isUndefined(val){return typeof val==='undefined';}/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function isBuffer(val){return val!==null&&!isUndefined(val)&&val.constructor!==null&&!isUndefined(val.constructor)&&typeof val.constructor.isBuffer==='function'&&val.constructor.isBuffer(val);}/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */function isArrayBuffer(val){return toString.call(val)==='[object ArrayBuffer]';}/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */function isFormData(val){return typeof FormData!=='undefined'&&val instanceof FormData;}/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function isArrayBufferView(val){var result;if(typeof ArrayBuffer!=='undefined'&&ArrayBuffer.isView){result=ArrayBuffer.isView(val);}else{result=val&&val.buffer&&val.buffer instanceof ArrayBuffer;}return result;}/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */function isString(val){return typeof val==='string';}/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */function isNumber(val){return typeof val==='number';}/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */function isObject(val){return val!==null&&typeof val==='object';}/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */function isPlainObject(val){if(toString.call(val)!=='[object Object]'){return false;}var prototype=Object.getPrototypeOf(val);return prototype===null||prototype===Object.prototype;}/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */function isDate(val){return toString.call(val)==='[object Date]';}/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */function isFile(val){return toString.call(val)==='[object File]';}/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */function isBlob(val){return toString.call(val)==='[object Blob]';}/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */function isFunction(val){return toString.call(val)==='[object Function]';}/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */function isStream(val){return isObject(val)&&isFunction(val.pipe);}/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */function isURLSearchParams(val){return typeof URLSearchParams!=='undefined'&&val instanceof URLSearchParams;}/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */function trim(str){return str.replace(/^\s*/,'').replace(/\s*$/,'');}/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */function isStandardBrowserEnv(){if(typeof navigator!=='undefined'&&(navigator.product==='ReactNative'||navigator.product==='NativeScript'||navigator.product==='NS')){return false;}return  false&&false;}/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */function forEach(obj,fn){// Don't bother if no value provided
if(obj===null||typeof obj==='undefined'){return;}// Force an array if not already something iterable
if(typeof obj!=='object'){/*eslint no-param-reassign:0*/obj=[obj];}if(isArray(obj)){// Iterate over array values
for(var i=0,l=obj.length;i<l;i++){fn.call(null,obj[i],i,obj);}}else{// Iterate over object keys
for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){fn.call(null,obj[key],key,obj);}}}}/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */function merge()/* obj1, obj2, obj3, ... */{var result={};function assignValue(val,key){if(isPlainObject(result[key])&&isPlainObject(val)){result[key]=merge(result[key],val);}else if(isPlainObject(val)){result[key]=merge({},val);}else if(isArray(val)){result[key]=val.slice();}else{result[key]=val;}}for(var i=0,l=arguments.length;i<l;i++){forEach(arguments[i],assignValue);}return result;}/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */function extend(a,b,thisArg){forEach(b,function assignValue(val,key){if(thisArg&&typeof val==='function'){a[key]=bind(val,thisArg);}else{a[key]=val;}});return a;}/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */function stripBOM(content){if(content.charCodeAt(0)===0xFEFF){content=content.slice(1);}return content;}var utils={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isPlainObject:isPlainObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim,stripBOM:stripBOM};function encode(val){return encodeURIComponent(val).replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']');}/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */var buildURL=function buildURL(url,params,paramsSerializer){/*eslint no-param-reassign:0*/if(!params){return url;}var serializedParams;if(paramsSerializer){serializedParams=paramsSerializer(params);}else if(utils.isURLSearchParams(params)){serializedParams=params.toString();}else{var parts=[];utils.forEach(params,function serialize(val,key){if(val===null||typeof val==='undefined'){return;}if(utils.isArray(val)){key=key+'[]';}else{val=[val];}utils.forEach(val,function parseValue(v){if(utils.isDate(v)){v=v.toISOString();}else if(utils.isObject(v)){v=JSON.stringify(v);}parts.push(encode(key)+'='+encode(v));});});serializedParams=parts.join('&');}if(serializedParams){var hashmarkIndex=url.indexOf('#');if(hashmarkIndex!==-1){url=url.slice(0,hashmarkIndex);}url+=(url.indexOf('?')===-1?'?':'&')+serializedParams;}return url;};function InterceptorManager(){this.handlers=[];}/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */InterceptorManager.prototype.use=function use(fulfilled,rejected){this.handlers.push({fulfilled:fulfilled,rejected:rejected});return this.handlers.length-1;};/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */InterceptorManager.prototype.eject=function eject(id){if(this.handlers[id]){this.handlers[id]=null;}};/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */InterceptorManager.prototype.forEach=function forEach(fn){utils.forEach(this.handlers,function forEachHandler(h){if(h!==null){fn(h);}});};var InterceptorManager_1=InterceptorManager;/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */var transformData=function transformData(data,headers,fns){/*eslint no-param-reassign:0*/utils.forEach(fns,function transform(fn){data=fn(data,headers);});return data;};var isCancel=function isCancel(value){return!!(value&&value.__CANCEL__);};var normalizeHeaderName=function normalizeHeaderName(headers,normalizedName){utils.forEach(headers,function processHeader(value,name){if(name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()){headers[normalizedName]=value;delete headers[name];}});};/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */var enhanceError=function enhanceError(error,config,code,request,response){error.config=config;if(code){error.code=code;}error.request=request;error.response=response;error.isAxiosError=true;error.toJSON=function toJSON(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code};};return error;};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */var createError=function createError(message,config,code,request,response){var error=new Error(message);return enhanceError(error,config,code,request,response);};/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */var settle=function settle(resolve,reject,response){var validateStatus=response.config.validateStatus;if(!response.status||!validateStatus||validateStatus(response.status)){resolve(response);}else{reject(createError('Request failed with status code '+response.status,response.config,null,response.request,response));}};var cookies=utils.isStandardBrowserEnv()?// Standard browser envs support document.cookie
function standardBrowserEnv(){return{write:function write(name,value,expires,path,domain,secure){var cookie=[];cookie.push(name+'='+encodeURIComponent(value));if(utils.isNumber(expires)){cookie.push('expires='+new Date(expires).toGMTString());}if(utils.isString(path)){cookie.push('path='+path);}if(utils.isString(domain)){cookie.push('domain='+domain);}if(secure===true){cookie.push('secure');}document.cookie=cookie.join('; ');},read:function read(name){var match=document.cookie.match(new RegExp('(^|;\\s*)('+name+')=([^;]*)'));return match?decodeURIComponent(match[3]):null;},remove:function remove(name){this.write(name,'',Date.now()-86400000);}};}():// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return{write:function write(){},read:function read(){return null;},remove:function remove(){}};}();/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */var isAbsoluteURL=function isAbsoluteURL(url){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);};/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */var combineURLs=function combineURLs(baseURL,relativeURL){return relativeURL?baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''):baseURL;};/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */var buildFullPath=function buildFullPath(baseURL,requestedURL){if(baseURL&&!isAbsoluteURL(requestedURL)){return combineURLs(baseURL,requestedURL);}return requestedURL;};// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf=['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent'];/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */var parseHeaders=function parseHeaders(headers){var parsed={};var key;var val;var i;if(!headers){return parsed;}utils.forEach(headers.split('\n'),function parser(line){i=line.indexOf(':');key=utils.trim(line.substr(0,i)).toLowerCase();val=utils.trim(line.substr(i+1));if(key){if(parsed[key]&&ignoreDuplicateOf.indexOf(key)>=0){return;}if(key==='set-cookie'){parsed[key]=(parsed[key]?parsed[key]:[]).concat([val]);}else{parsed[key]=parsed[key]?parsed[key]+', '+val:val;}}});return parsed;};var isURLSameOrigin=utils.isStandardBrowserEnv()?// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv(){var msie=/(msie|trident)/i.test(navigator.userAgent);var urlParsingNode=document.createElement('a');var originURL;/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function resolveURL(url){var href=url;if(msie){// IE needs attribute set twice to normalize properties
urlParsingNode.setAttribute('href',href);href=urlParsingNode.href;}urlParsingNode.setAttribute('href',href);// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,''):'',host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,''):'',hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,''):'',hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:urlParsingNode.pathname.charAt(0)==='/'?urlParsingNode.pathname:'/'+urlParsingNode.pathname};}originURL=resolveURL(window.location.href);/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return function isURLSameOrigin(requestURL){var parsed=utils.isString(requestURL)?resolveURL(requestURL):requestURL;return parsed.protocol===originURL.protocol&&parsed.host===originURL.host;};}():// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true;};}();var xhr=function xhrAdapter(config){return new Promise(function dispatchXhrRequest(resolve,reject){var requestData=config.data;var requestHeaders=config.headers;if(utils.isFormData(requestData)){delete requestHeaders['Content-Type'];// Let the browser set it
}var request=new XMLHttpRequest();// HTTP basic authentication
if(config.auth){var username=config.auth.username||'';var password=config.auth.password?unescape(encodeURIComponent(config.auth.password)):'';requestHeaders.Authorization='Basic '+btoa(username+':'+password);}var fullPath=buildFullPath(config.baseURL,config.url);request.open(config.method.toUpperCase(),buildURL(fullPath,config.params,config.paramsSerializer),true);// Set the request timeout in MS
request.timeout=config.timeout;// Listen for ready state
request.onreadystatechange=function handleLoad(){if(!request||request.readyState!==4){return;}// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
if(request.status===0&&!(request.responseURL&&request.responseURL.indexOf('file:')===0)){return;}// Prepare the response
var responseHeaders='getAllResponseHeaders'in request?parseHeaders(request.getAllResponseHeaders()):null;var responseData=!config.responseType||config.responseType==='text'?request.responseText:request.response;var response={data:responseData,status:request.status,statusText:request.statusText,headers:responseHeaders,config:config,request:request};settle(resolve,reject,response);// Clean up request
request=null;};// Handle browser request cancellation (as opposed to a manual cancellation)
request.onabort=function handleAbort(){if(!request){return;}reject(createError('Request aborted',config,'ECONNABORTED',request));// Clean up request
request=null;};// Handle low level network errors
request.onerror=function handleError(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
reject(createError('Network Error',config,null,request));// Clean up request
request=null;};// Handle timeout
request.ontimeout=function handleTimeout(){var timeoutErrorMessage='timeout of '+config.timeout+'ms exceeded';if(config.timeoutErrorMessage){timeoutErrorMessage=config.timeoutErrorMessage;}reject(createError(timeoutErrorMessage,config,'ECONNABORTED',request));// Clean up request
request=null;};// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(utils.isStandardBrowserEnv()){// Add xsrf header
var xsrfValue=(config.withCredentials||isURLSameOrigin(fullPath))&&config.xsrfCookieName?cookies.read(config.xsrfCookieName):undefined;if(xsrfValue){requestHeaders[config.xsrfHeaderName]=xsrfValue;}}// Add headers to the request
if('setRequestHeader'in request){utils.forEach(requestHeaders,function setRequestHeader(val,key){if(typeof requestData==='undefined'&&key.toLowerCase()==='content-type'){// Remove Content-Type if data is undefined
delete requestHeaders[key];}else{// Otherwise add header to the request
request.setRequestHeader(key,val);}});}// Add withCredentials to request if needed
if(!utils.isUndefined(config.withCredentials)){request.withCredentials=!!config.withCredentials;}// Add responseType to request if needed
if(config.responseType){try{request.responseType=config.responseType;}catch(e){// Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
// But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
if(config.responseType!=='json'){throw e;}}}// Handle progress if needed
if(typeof config.onDownloadProgress==='function'){request.addEventListener('progress',config.onDownloadProgress);}// Not all browsers support upload events
if(typeof config.onUploadProgress==='function'&&request.upload){request.upload.addEventListener('progress',config.onUploadProgress);}if(config.cancelToken){// Handle cancellation
config.cancelToken.promise.then(function onCanceled(cancel){if(!request){return;}request.abort();reject(cancel);// Clean up request
request=null;});}if(!requestData){requestData=null;}// Send the request
request.send(requestData);});};var DEFAULT_CONTENT_TYPE={'Content-Type':'application/x-www-form-urlencoded'};function setContentTypeIfUnset(headers,value){if(!utils.isUndefined(headers)&&utils.isUndefined(headers['Content-Type'])){headers['Content-Type']=value;}}function getDefaultAdapter(){var adapter;if(typeof XMLHttpRequest!=='undefined'){// For browsers use XHR adapter
adapter=xhr;}else if(typeof process!=='undefined'&&Object.prototype.toString.call(process)==='[object process]'){// For node use HTTP adapter
adapter=xhr;}return adapter;}var defaults={adapter:getDefaultAdapter(),transformRequest:[function transformRequest(data,headers){normalizeHeaderName(headers,'Accept');normalizeHeaderName(headers,'Content-Type');if(utils.isFormData(data)||utils.isArrayBuffer(data)||utils.isBuffer(data)||utils.isStream(data)||utils.isFile(data)||utils.isBlob(data)){return data;}if(utils.isArrayBufferView(data)){return data.buffer;}if(utils.isURLSearchParams(data)){setContentTypeIfUnset(headers,'application/x-www-form-urlencoded;charset=utf-8');return data.toString();}if(utils.isObject(data)){setContentTypeIfUnset(headers,'application/json;charset=utf-8');return JSON.stringify(data);}return data;}],transformResponse:[function transformResponse(data){/*eslint no-param-reassign:0*/if(typeof data==='string'){try{data=JSON.parse(data);}catch(e){/* Ignore */}}return data;}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,maxBodyLength:-1,validateStatus:function validateStatus(status){return status>=200&&status<300;}};defaults.headers={common:{'Accept':'application/json, text/plain, */*'}};utils.forEach(['delete','get','head'],function forEachMethodNoData(method){defaults.headers[method]={};});utils.forEach(['post','put','patch'],function forEachMethodWithData(method){defaults.headers[method]=utils.merge(DEFAULT_CONTENT_TYPE);});var defaults_1=defaults;/**
 * Throws a `Cancel` if cancellation has been requested.
 */function throwIfCancellationRequested(config){if(config.cancelToken){config.cancelToken.throwIfRequested();}}/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */var dispatchRequest=function dispatchRequest(config){throwIfCancellationRequested(config);// Ensure headers exist
config.headers=config.headers||{};// Transform request data
config.data=transformData(config.data,config.headers,config.transformRequest);// Flatten headers
config.headers=utils.merge(config.headers.common||{},config.headers[config.method]||{},config.headers);utils.forEach(['delete','get','head','post','put','patch','common'],function cleanHeaderConfig(method){delete config.headers[method];});var adapter=config.adapter||defaults_1.adapter;return adapter(config).then(function onAdapterResolution(response){throwIfCancellationRequested(config);// Transform response data
response.data=transformData(response.data,response.headers,config.transformResponse);return response;},function onAdapterRejection(reason){if(!isCancel(reason)){throwIfCancellationRequested(config);// Transform response data
if(reason&&reason.response){reason.response.data=transformData(reason.response.data,reason.response.headers,config.transformResponse);}}return Promise.reject(reason);});};/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */var mergeConfig=function mergeConfig(config1,config2){// eslint-disable-next-line no-param-reassign
config2=config2||{};var config={};var valueFromConfig2Keys=['url','method','data'];var mergeDeepPropertiesKeys=['headers','auth','proxy','params'];var defaultToConfig2Keys=['baseURL','transformRequest','transformResponse','paramsSerializer','timeout','timeoutMessage','withCredentials','adapter','responseType','xsrfCookieName','xsrfHeaderName','onUploadProgress','onDownloadProgress','decompress','maxContentLength','maxBodyLength','maxRedirects','transport','httpAgent','httpsAgent','cancelToken','socketPath','responseEncoding'];var directMergeKeys=['validateStatus'];function getMergedValue(target,source){if(utils.isPlainObject(target)&&utils.isPlainObject(source)){return utils.merge(target,source);}else if(utils.isPlainObject(source)){return utils.merge({},source);}else if(utils.isArray(source)){return source.slice();}return source;}function mergeDeepProperties(prop){if(!utils.isUndefined(config2[prop])){config[prop]=getMergedValue(config1[prop],config2[prop]);}else if(!utils.isUndefined(config1[prop])){config[prop]=getMergedValue(undefined,config1[prop]);}}utils.forEach(valueFromConfig2Keys,function valueFromConfig2(prop){if(!utils.isUndefined(config2[prop])){config[prop]=getMergedValue(undefined,config2[prop]);}});utils.forEach(mergeDeepPropertiesKeys,mergeDeepProperties);utils.forEach(defaultToConfig2Keys,function defaultToConfig2(prop){if(!utils.isUndefined(config2[prop])){config[prop]=getMergedValue(undefined,config2[prop]);}else if(!utils.isUndefined(config1[prop])){config[prop]=getMergedValue(undefined,config1[prop]);}});utils.forEach(directMergeKeys,function merge(prop){if(prop in config2){config[prop]=getMergedValue(config1[prop],config2[prop]);}else if(prop in config1){config[prop]=getMergedValue(undefined,config1[prop]);}});var axiosKeys=valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);var otherKeys=Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key){return axiosKeys.indexOf(key)===-1;});utils.forEach(otherKeys,mergeDeepProperties);return config;};/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */function Axios(instanceConfig){this.defaults=instanceConfig;this.interceptors={request:new InterceptorManager_1(),response:new InterceptorManager_1()};}/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */Axios.prototype.request=function request(config){/*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
if(typeof config==='string'){config=arguments[1]||{};config.url=arguments[0];}else{config=config||{};}config=mergeConfig(this.defaults,config);// Set config.method
if(config.method){config.method=config.method.toLowerCase();}else if(this.defaults.method){config.method=this.defaults.method.toLowerCase();}else{config.method='get';}// Hook up interceptors middleware
var chain=[dispatchRequest,undefined];var promise=Promise.resolve(config);this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor){chain.unshift(interceptor.fulfilled,interceptor.rejected);});this.interceptors.response.forEach(function pushResponseInterceptors(interceptor){chain.push(interceptor.fulfilled,interceptor.rejected);});while(chain.length){promise=promise.then(chain.shift(),chain.shift());}return promise;};Axios.prototype.getUri=function getUri(config){config=mergeConfig(this.defaults,config);return buildURL(config.url,config.params,config.paramsSerializer).replace(/^\?/,'');};// Provide aliases for supported request methods
utils.forEach(['delete','get','head','options'],function forEachMethodNoData(method){/*eslint func-names:0*/Axios.prototype[method]=function(url,config){return this.request(mergeConfig(config||{},{method:method,url:url,data:(config||{}).data}));};});utils.forEach(['post','put','patch'],function forEachMethodWithData(method){/*eslint func-names:0*/Axios.prototype[method]=function(url,data,config){return this.request(mergeConfig(config||{},{method:method,url:url,data:data}));};});var Axios_1=Axios;/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */function Cancel(message){this.message=message;}Cancel.prototype.toString=function toString(){return'Cancel'+(this.message?': '+this.message:'');};Cancel.prototype.__CANCEL__=true;var Cancel_1=Cancel;/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */function CancelToken(executor){if(typeof executor!=='function'){throw new TypeError('executor must be a function.');}var resolvePromise;this.promise=new Promise(function promiseExecutor(resolve){resolvePromise=resolve;});var token=this;executor(function cancel(message){if(token.reason){// Cancellation has already been requested
return;}token.reason=new Cancel_1(message);resolvePromise(token.reason);});}/**
 * Throws a `Cancel` if cancellation has been requested.
 */CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason){throw this.reason;}};/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */CancelToken.source=function source(){var cancel;var token=new CancelToken(function executor(c){cancel=c;});return{token:token,cancel:cancel};};var CancelToken_1=CancelToken;/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */var spread=function spread(callback){return function wrap(arr){return callback.apply(null,arr);};};/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */var isAxiosError=function isAxiosError(payload){return typeof payload==='object'&&payload.isAxiosError===true;};/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */function createInstance(defaultConfig){var context=new Axios_1(defaultConfig);var instance=bind(Axios_1.prototype.request,context);// Copy axios.prototype to instance
utils.extend(instance,Axios_1.prototype,context);// Copy context to instance
utils.extend(instance,context);return instance;}// Create the default instance to be exported
var axios=createInstance(defaults_1);// Expose Axios class to allow class inheritance
axios.Axios=Axios_1;// Factory for creating new instances
axios.create=function create(instanceConfig){return createInstance(mergeConfig(axios.defaults,instanceConfig));};// Expose Cancel & CancelToken
axios.Cancel=Cancel_1;axios.CancelToken=CancelToken_1;axios.isCancel=isCancel;// Expose all/spread
axios.all=function all(promises){return Promise.all(promises);};axios.spread=spread;// Expose isAxiosError
axios.isAxiosError=isAxiosError;var axios_1=axios;// Allow use of default import syntax in TypeScript
var _default=axios;axios_1.default=_default;var axios$1=axios_1;/* eslint-disable @typescript-eslint/camelcase */var STATE_UPDATE_TIMEOUT=200;var createMessage=function(props){var messageName=props.data?'SERVER_ACTION':props.name||'MESSAGE_TO_SKILL';var systemMessage=props.data?{systemMessage:{data:{app_info:{},server_action:JSON.parse(props.data)}}}:{};var payload={payload:{applicationId:props.applicationId,appversionId:props.appVersionId,message:props.text?{original_text:props.text}:{},device:props.config.device||{type:'SBERBOX',locale:'ru-RU',timezone:'+03:00',install_id:v4()}}};return __assign(__assign({messageName:messageName,sessionId:props.sessionId,messageId:String(Math.floor(Math.random()*Math.floor(9999999))),meta:{current_app:{state:props.state}},uuid:{userId:props.userId,userChannel:'FAKE'}},systemMessage),payload);};var defaultConfig={request:{url:'sberbank.ru'},onRequest:function(props){return props;},onResponse:function(res){return res;},onError:function(){}};function initializeDebugging(config){if(config===void 0){config=defaultConfig;}var currentAppState={};var sessionId=v4();var userId=v4();var applicationId=v4();var appVersionId=v4();var createMessageInSession=function(props){return createMessage(__assign({config:config,userId:userId,sessionId:sessionId,applicationId:applicationId,appVersionId:appVersionId,state:currentAppState},props));};var ask=function(props){var _a,_b;return axios$1({method:((_a=config.request)===null||_a===void 0?void 0:_a.method)||'post',url:config.request.url,headers:(_b=config.request)===null||_b===void 0?void 0:_b.headers,data:config.onRequest(createMessageInSession(props))}).then(config.onResponse).then(function(action){var _a;if(action&&((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onData)){window.AssistantClient.onData(action);}}).catch(config.onError);};window.AssistantHost={close:function(){},ready:function(){setTimeout(function(){var _a;if((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onStart)window.AssistantClient.onStart();},0);},sendData:function(data,name){ask({data:data,name:name||undefined});},sendDataContainer:function(container){var _a=JSON.parse(container),data=_a.data,message_name=_a.message_name;ask({data:data,name:message_name||undefined});},setSuggest:function(){}};window.__dangerouslyGetAssistantAppState=function(){return __assign({},currentAppState);};window.__dangerouslySendVoiceMessage=function(text){var _a;if((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onRequestState)window.AssistantClient.onRequestState();setTimeout(function(){return ask({text:text});},STATE_UPDATE_TIMEOUT);};// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.__dangerouslySendDataMessage=function(data,name){var _a;if(name===void 0){name=null;}return(_a=window.AssistantHost)===null||_a===void 0?void 0:_a.sendData(JSON.stringify(data),name);};}// сначала создаем mock, затем вызываем createAssistant
var createAssistantHostMock=function(_a){var _b=(_a===void 0?{}:_a).context,context=_b===void 0?window:_b;/* eslint-disable-next-line no-spaced-func, func-call-spacing, @typescript-eslint/no-explicit-any */var handlers=new Map();var currentResolve=null;var onReady;var handleAction=function(action,name,requestId){if(!context.AssistantClient||!context.AssistantClient.onRequestState||!context.AssistantClient.onData){throw new Error('Assistant not initialized');}if(currentResolve){var resolve=currentResolve;currentResolve=null;resolve({state:context.AssistantClient.onRequestState(),name:name,action:action,requestId:requestId});return;}var actionType=action.action_id.toLowerCase();var handler=handlers.has(actionType)?handlers.get(actionType):undefined;if(handler!=null){handler(action);}};context.AssistantHost={close:function(){// ничего не делаем
},ready:function(){var _a,_b;((_a=window.AssistantClient)===null||_a===void 0?void 0:_a.onStart)&&((_b=window.AssistantClient)===null||_b===void 0?void 0:_b.onStart());onReady&&onReady();},sendData:function(action,message){handleAction(JSON.parse(action),message);},sendDataContainer:function(container){var _a=JSON.parse(container),action=_a.data,name=_a.message_name,requestId=_a.requestId;handleAction(action,name,requestId);},setSuggest:function(){throw new Error('Not implemented method');}};/** Добавить обработчик клиентского экшена */var addActionHandler=function(actionType,handler){var type=actionType.toLowerCase();if(handlers.has(type)){throw new Error('Action-handler already exists');}handlers.set(type,handler);};/** Удалить обработчик клиентского экшена */var removeActionHandler=function(actionType){var type=actionType.toLowerCase();if(handlers.has(type)){handlers.delete(type);}};/** Вызвать обработчик команды бека */var receiveCommand=function(command){if(!context.AssistantClient||!context.AssistantClient.onData){throw new Error('Assistant not initialized');}context.AssistantClient.onData(command);return new Promise(function(resolve){return setTimeout(resolve);});};/** Дождаться и вернуть клиентский экшен и его контекст */var waitAction=function(onAction){return new Promise(function(resolve){currentResolve=resolve;onAction&&onAction();});};return{addActionHandler:addActionHandler,removeActionHandler:removeActionHandler,receiveCommand:receiveCommand,waitAction:waitAction,onReady:function(cb){onReady=cb;}};};exports.createAssistantHostMock=createAssistantHostMock;var createAssistantHostMockWithRecord=function(_a){var _b=_a.context,context=_b===void 0?window:_b,record=_a.record;var mock=createAssistantHostMock({context:context});var player=createRecordOfflinePlayer(record,{context:context});var hasNext=true;var next=function(_a){var _b=_a===void 0?{}:_a,onRequest=_b.onRequest,_c=_b.waitRequest,waitRequest=_c===void 0?false:_c;return new Promise(function(resolve){hasNext=player.continue(function(command){if(!waitRequest&&onRequest==null){resolve(mock.receiveCommand(command));return;}return mock.waitAction(onRequest).then(function(result){// на будущее - неплохо было бы иметь эталон из записи
mock.receiveCommand(command);resolve(result);});});});};return{get hasNext(){return hasNext;},onReady:mock.onReady,next:next,receiveCommand:mock.receiveCommand};};/* eslint-disable @typescript-eslint/camelcase */exports.createAssistantHostMockWithRecord=createAssistantHostMockWithRecord;var createAssistant=function(_a){var getState=_a.getState,getRecoveryState=_a.getRecoveryState;var currentGetState=getState;var currentGetRecoveryState=getRecoveryState;var _b=createNanoEvents(),on=_b.on,emit=_b.emit;var startedAppInitialData=__spreadArrays(window.appInitialData||[]);var initialData=__spreadArrays(window.appInitialData||[]);var observables=new Map();window.AssistantClient={onData:function(command){var _a,_b,_c;if(initialData.length){var index=-1;if(command.type==='character'){index=initialData.findIndex(function(c){return c.type==='character'&&c.character.id===command.character.id;});}else if(command.type==='insets'){index=initialData.findIndex(function(c){return c.type==='insets';});}else if(command.type==='app_context'){index=initialData.findIndex(function(c){return c.type==='app_context';});}else if(command.sdk_meta&&((_a=command.sdk_meta)===null||_a===void 0?void 0:_a.mid)&&((_b=command.sdk_meta)===null||_b===void 0?void 0:_b.mid)!=='-1'){index=initialData.findIndex(function(c){var _a;return((_a=c.sdk_meta)===null||_a===void 0?void 0:_a.mid)===command.sdk_meta.mid;});}if(index>=0){initialData.splice(index,1);return;}}if((command.type==='smart_app_data'||command.type==='smart_app_error')&&((_c=command.sdk_meta)===null||_c===void 0?void 0:_c.requestId)&&observables.has(command.sdk_meta.requestId)){var sdk_meta=command.sdk_meta,other=__rest(command,["sdk_meta"]);var realReqId=sdk_meta.requestId,meta=__rest(sdk_meta,["requestId"]);var result=other;var _d=observables.get(command.sdk_meta.requestId),requestId=_d.requestId,next=_d.next;if(Object.keys(meta).length>0||requestId){result.sdk_meta=__assign({},meta);if(requestId){result.sdk_meta={requestId:requestId};}}next(result);return;}if(command.type==='smart_app_data'){emit('command',command.smart_app_data);}if(command.type==='smart_app_error'){emit('error',command.smart_app_error);}return emit('data',command);},onRequestState:function(){return currentGetState();},onRequestRecoveryState:function(){if(currentGetRecoveryState){return currentGetRecoveryState();}return undefined;},onStart:function(){return emit('start');}};setTimeout(function(){var _a;return(_a=window.AssistantHost)===null||_a===void 0?void 0:_a.ready();});// таймаут для подписки на start
var sendData=function(_a,onData){var _b,_c,_d;var action=_a.action,name=_a.name,requestId=_a.requestId;if((_b=window.AssistantHost)===null||_b===void 0?void 0:_b.sendDataContainer){if(onData==null){(_c=window.AssistantHost)===null||_c===void 0?void 0:_c.sendDataContainer(/* eslint-disable-next-line @typescript-eslint/camelcase */JSON.stringify({data:action,message_name:name||'',requestId:requestId}));return function(){};}if(requestId&&observables.has(requestId)){throw new Error('requestId должен быть уникальным');}var subscribe=createNanoObservable(function(_a){var _b;var next=_a.next;var realRequestId=requestId||v4();(_b=window.AssistantHost)===null||_b===void 0?void 0:_b.sendDataContainer(/* eslint-disable-next-line @typescript-eslint/camelcase */JSON.stringify({data:action,message_name:name||'',requestId:realRequestId}));observables.set(realRequestId,{next:next,requestId:requestId});}).subscribe;return subscribe({next:onData}).unsubscribe;}if(onData!=null){throw new Error('Не поддерживается в данной версии клиента');}(_d=window.AssistantHost)===null||_d===void 0?void 0:_d.sendData(JSON.stringify(action),name||null);return function(){};};return{close:function(){var _a;return(_a=window.AssistantHost)===null||_a===void 0?void 0:_a.close();},getInitialData:function(){return startedAppInitialData;},getRecoveryState:function(){return window.appRecoveryState;},on:on,sendAction:function(action,onData,onError,_a){var _b=_a===void 0?{}:_a,name=_b.name,requestId=_b.requestId;return sendData({action:action,name:name,requestId:requestId},function(data){if(data.type==='smart_app_data'){onData&&onData(data.smart_app_data);}else if(data.type==='smart_app_error'){onError&&onError(data.smart_app_error);}});},sendData:sendData,setGetState:function(nextGetState){currentGetState=nextGetState;},setGetRecoveryState:function(nextGetRecoveryState){currentGetRecoveryState=nextGetRecoveryState;},setSuggest:function(suggest){var _a;return(_a=window.AssistantHost)===null||_a===void 0?void 0:_a.setSuggest(suggest);}};};exports.createAssistant=createAssistant;var createAssistantDev=function(_a){var getState=_a.getState,getRecoveryState=_a.getRecoveryState,initPhrase=_a.initPhrase,nativePanel=_a.nativePanel,url=_a.url,userId=_a.userId,token=_a.token,userChannel=_a.userChannel,surface=_a.surface,surfaceVersion=_a.surfaceVersion,sdkVersion=_a.sdkVersion,_b=_a.enableRecord,enableRecord=_b===void 0?false:_b,recordParams=_a.recordParams,settings=_a.settings,voiceSettings=_a.voiceSettings;initializeAssistantSDK({initPhrase:initPhrase,nativePanel:nativePanel,url:url,userId:userId,token:token,userChannel:userChannel,surface:surface,surfaceVersion:surfaceVersion,sdkVersion:sdkVersion,enableRecord:enableRecord,recordParams:recordParams,settings:settings,voiceSettings:voiceSettings||{startVoiceDelay:1}});return createAssistant({getState:getState,getRecoveryState:getRecoveryState});};exports.createAssistantDev=createAssistantDev;var parseJwt=function(token){var base64Url=token.split('.')[1];var base64=base64Url.replace(/-/g,'+').replace(/_/g,'/');var jsonPayload=decodeURIComponent(atob(base64).split('').map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2);}).join(''));return JSON.parse(jsonPayload);};// Публичный метод, использующий токен из SmartApp Studio
var createSmartappDebugger=function(_a){var token=_a.token,initPhrase=_a.initPhrase,getState=_a.getState,getRecoveryState=_a.getRecoveryState,_b=_a.settings,settings=_b===void 0?{}:_b,enableRecord=_a.enableRecord,recordParams=_a.recordParams;try{var exp=parseJwt(token).exp;if(exp*1000<=Date.now()){alert('Срок действия токена истек!');throw new Error('Token expired');}}catch(exc){if(exc.message!=='Token expired'){alert('Указан невалидный токен!');throw new Error('Wrong token');}throw exc;}return createAssistantDev({initPhrase:initPhrase,token:token,settings:__assign(__assign({},settings),{authConnector:'developer_portal_jwt'}),getState:getState,getRecoveryState:getRecoveryState,url:'wss://nlp2vps.online.sberbank.ru:443/vps/',surface:'SBERBOX',userChannel:'B2C',enableRecord:enableRecord,recordParams:recordParams});};exports.createSmartappDebugger=createSmartappDebugger;

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YAxo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BsWs");
/* harmony import */ var _sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1r6o");
/* harmony import */ var _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0QV9");
/* harmony import */ var _sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    ${_sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_2__["body1"]};
    /* stylelint-disable */
    background: ${Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_3__["detectDevice"])() === 'mobile' ? '#000' : `
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
  let {
    label,
    onBack
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "onBack"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const back = Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_3__["detectDevice"])() === 'mobile' || Object(_sberdevices_plasma_ui_utils_deviceDetection__WEBPACK_IMPORTED_MODULE_3__["isSberPortal"])() && !onBack;
  return __jsx(StyledHeader, props, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(_sberdevices_plasma_ui__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    style: _sberdevices_plasma_tokens__WEBPACK_IMPORTED_MODULE_2__["body1"],
    back: true,
    onBackClick: onBack !== null && onBack !== void 0 ? onBack : router.back,
    title: label
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (MyHeader);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eK0j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    background: url(${({
  src
}) => src}) no-repeat center center;
    background-size: cover;
    width: ${({
  width
}) => width ? `${width}px` : '100%'};
    height: ${({
  height
}) => height ? `${height}px` : '100%'};
`;

const Img = (_ref) => {
  let props = Object.assign({}, _ref);
  return __jsx(StyledImage, props);
};

/* harmony default export */ __webpack_exports__["a"] = (Img);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "soUV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GlobalStyles; });

// UNUSED EXPORTS: Layout

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@sberdevices/plasma-tokens/typo/index"
var index_ = __webpack_require__("s7QM");

// EXTERNAL MODULE: external "@sberdevices/plasma-tokens"
var plasma_tokens_ = __webpack_require__("1r6o");

// EXTERNAL MODULE: external "@sberdevices/plasma-tokens/themes/darkSber"
var darkSber_ = __webpack_require__("IZ6c");

// EXTERNAL MODULE: external "@sberdevices/plasma-ui/utils/deviceDetection"
var deviceDetection_ = __webpack_require__("0QV9");

// CONCATENATED MODULE: ./src/hooks/useFocus.ts

const useFocus = () => {
  Object(external_react_["useLayoutEffect"])(() => {
    const focusable = document.querySelectorAll('[tabindex]:not([tabindex="-1"])')[0]; // @ts-ignore

    focusable === null || focusable === void 0 ? void 0 : focusable.focus();
  }, []);
};
// CONCATENATED MODULE: ./src/components/Layout.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const map = {
  sberPortal: index_["sberPortal"],
  sberBox: index_["sberBox"],
  mobile: index_["mobile"]
}; // создаем react-компонент c глобальными стилями типографики

const TypoScale = Object(external_styled_components_["createGlobalStyle"])(map[Object(deviceDetection_["detectDevice"])()]); // создаем react-компонент для подложки

const DocStyles = external_styled_components_["createGlobalStyle"]`
    /* stylelint-disable-next-line selector-nested-pattern */
    html {
        color: ${plasma_tokens_["text"]};
        background-color: ${plasma_tokens_["background"]};
        background-image: ${plasma_tokens_["gradient"]};
        /** необходимо залить градиентом всю подложку */
        min-height: 100vh;
    }

    /* stylelint-disable-next-line selector-nested-pattern */
    body {
        margin: 0;
        ${!Object(deviceDetection_["isSberBox"])() && '--plasma-colors-button-focused: transparent'};
    }
`; // создаем react-компонент для персонажа

const Theme = Object(external_styled_components_["createGlobalStyle"])(darkSber_["darkSber"]);
const StyledLayout = external_styled_components_default.a.div`
    padding: 0 0 ${({
  noPadding
}) => noPadding ? 0 : 80 * deviceDetection_["deviceScales"][Object(deviceDetection_["detectDevice"])()]}px;
    ${plasma_tokens_["body1"]}
`;
const GlobalStyles = () => __jsx(external_react_default.a.Fragment, null, __jsx(TypoScale, null), __jsx(DocStyles, null), __jsx(Theme, null));
const Layout = (_ref) => {
  let {
    noPadding = false,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["noPadding", "children"]);

  useFocus();
  return __jsx(StyledLayout, _extends({
    noPadding: noPadding
  }, props), __jsx(GlobalStyles, null), children);
};
/* harmony default export */ var components_Layout = __webpack_exports__["b"] = (Layout);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

};;