self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Bharath k\\Desktop\\bharath-portfolio\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;




var data = [{
  number: COORDINATOR,
  text: 'College Fest and Cultural activities'
}, {
  number: CREWMEMBER,
  text: 'IEEE India Operations'
}, {
  text1: 1900,
  text: 'Github Followers'
}, {
  text1: 5000,
  text: 'Github Stars'
}];

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Personal Achievements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: "".concat(card.number)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsIkNPT1JESU5BVE9SIiwidGV4dCIsIkNSRVdNRU1CRVIiLCJ0ZXh0MSIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBTSxFQUFFQyxXQUFWO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FEVyxFQUVYO0FBQUVGLFFBQU0sRUFBRUcsVUFBVjtBQUFzQkQsTUFBSSxFQUFFO0FBQTVCLENBRlcsRUFHWDtBQUFFRSxPQUFLLEVBQUUsSUFBVDtBQUFlRixNQUFJLEVBQUU7QUFBckIsQ0FIVyxFQUlYO0FBQUVFLE9BQUssRUFBRSxJQUFUO0FBQWVGLE1BQUksRUFBRTtBQUFyQixDQUpXLENBQWI7O0FBT0EsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNyQiw4REFBQyw2REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGdCQUNHTixJQUFJLENBQUNPLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDUiw4REFBQyxzREFBRDtBQUFBLGtDQUNFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQVlELElBQUksQ0FBQ1AsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxzQkFBVU8sSUFBSSxDQUFDTDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFVTSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBVUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURxQjtBQUFBLENBQXZCOztLQUFNSCxjO0FBZU4sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWM4YTQ1YjQxZjYzYTlmMTczODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IENPT1JESU5BVE9SLCB0ZXh0OiAnQ29sbGVnZSBGZXN0IGFuZCBDdWx0dXJhbCBhY3Rpdml0aWVzJ30sXG4gIHsgbnVtYmVyOiBDUkVXTUVNQkVSLCB0ZXh0OiAnSUVFRSBJbmRpYSBPcGVyYXRpb25zJywgfSxcbiAgeyB0ZXh0MTogMTkwMCwgdGV4dDogJ0dpdGh1YiBGb2xsb3dlcnMnLCB9LFxuICB7IHRleHQxOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxuXTtcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uPlxuICAgIDxTZWN0aW9uVGl0bGU+UGVyc29uYWwgQWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XG4gICAgPEJveGVzPlxuICAgICAge2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQubnVtYmVyfWB9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+e2NhcmQudGV4dH08L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3hlcz5cbiAgICA8U2VjdGlvbkRpdmlkZXIvPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50czsiXSwic291cmNlUm9vdCI6IiJ9