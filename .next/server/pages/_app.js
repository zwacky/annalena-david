(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3208:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Cormorant_e88389', '__Cormorant_Fallback_e88389'","fontStyle":"normal"},
	"className": "__className_e88389"
};


/***/ }),

/***/ 3682:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Proza_Libre_de86fd', '__Proza_Libre_Fallback_de86fd'","fontStyle":"normal"},
	"className": "__className_de86fd"
};


/***/ }),

/***/ 7538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Cormorant","arguments":[{"subsets":["latin"],"display":"auto","weight":["300","400","700"]}],"variableName":"cormorant"}
var _app_tsx_import_Cormorant_arguments_subsets_latin_display_auto_weight_300_400_700_variableName_cormorant_ = __webpack_require__(3208);
var _app_tsx_import_Cormorant_arguments_subsets_latin_display_auto_weight_300_400_700_variableName_cormorant_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Cormorant_arguments_subsets_latin_display_auto_weight_300_400_700_variableName_cormorant_);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Proza_Libre","arguments":[{"subsets":["latin"],"display":"auto","weight":["400","700"]}],"variableName":"porzaLibre"}
var _app_tsx_import_Proza_Libre_arguments_subsets_latin_display_auto_weight_400_700_variableName_porzaLibre_ = __webpack_require__(3682);
var _app_tsx_import_Proza_Libre_arguments_subsets_latin_display_auto_weight_400_700_variableName_porzaLibre_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Proza_Libre_arguments_subsets_latin_display_auto_weight_400_700_variableName_porzaLibre_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "b12087c4fa32026b",
                dynamic: [
                    (_app_tsx_import_Cormorant_arguments_subsets_latin_display_auto_weight_300_400_700_variableName_cormorant_default()).style.fontFamily,
                    (_app_tsx_import_Proza_Libre_arguments_subsets_latin_display_auto_weight_400_700_variableName_porzaLibre_default()).style.fontFamily
                ],
                children: `:root{--font-display:${(_app_tsx_import_Cormorant_arguments_subsets_latin_display_auto_weight_300_400_700_variableName_cormorant_default()).style.fontFamily};--font-serif:${(_app_tsx_import_Proza_Libre_arguments_subsets_latin_display_auto_weight_400_700_variableName_porzaLibre_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "b12087c4fa32026b",
                        [
                            (_app_tsx_import_Cormorant_arguments_subsets_latin_display_auto_weight_300_400_700_variableName_cormorant_default()).style.fontFamily,
                            (_app_tsx_import_Proza_Libre_arguments_subsets_latin_display_auto_weight_400_700_variableName_porzaLibre_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7538));
module.exports = __webpack_exports__;

})();