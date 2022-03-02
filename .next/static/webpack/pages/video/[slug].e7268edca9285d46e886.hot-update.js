"use strict";
self["webpackHotUpdate_N_E"]("pages/video/[slug]",{

/***/ "./pages/video/[slug].js":
/*!*******************************!*\
  !*** ./pages/video/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\bhavyanth.kondapalli\\Downloads\\disney-graphcms\\disney-graphcms\\pages\\video\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();




var changeToSeen = /*#__PURE__*/function () {
  var _ref = (0,C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(slug) {
    return C_Users_bhavyanth_kondapalli_Downloads_disney_graphcms_disney_graphcms_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/api/changeToSeen', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                slug: slug
              })
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function changeToSeen(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Video = function Video(_ref2) {
  _s();

  var video = _ref2.video;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      watching = _useState[0],
      setWatching = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [!watching && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "video-image",
      src: video.thumbnail.url,
      alt: video.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }, _this), !watching && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "info",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: video.tags.join(', ')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: video.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__.FcUpLeft, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "video-overlay",
        onClick: function onClick() {
          changeToSeen(video.slug);
          watching ? setWatching(false) : setWatching(true);
        },
        children: "PLAY"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }, _this), watching && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("video", {
      width: "100%",
      controls: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("source", {
        src: video.mp4.url,
        type: "video/mp4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "info-footer",
      onClick: function onClick() {
        return watching ? setWatching(false) : null;
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Video, "NflbPuzEmvIycsOwDC0C4wpy8As=");

_c = Video;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Video);

var _c;

$RefreshReg$(_c, "Video");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3NsdWddLmU3MjY4ZWRjYTkyODVkNDZlODg2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBOENBLElBQU1FLFlBQVk7QUFBQSxpWUFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWEMsS0FBSyxDQUFDLG1CQUFELEVBQXNCO0FBQzdCQyxjQUFBQSxNQUFNLEVBQUUsTUFEcUI7QUFFN0JDLGNBQUFBLE9BQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRm9CO0FBSzdCQyxjQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLGdCQUFBQSxJQUFJLEVBQUpBO0FBQUYsZUFBZjtBQUx1QixhQUF0QixDQURNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpELFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O0FBVUEsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFBQSxrQkFDT1gsK0NBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUNsQlksUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUd6QixzQkFDSTtBQUFBLGVBQ0ssQ0FBQ0QsUUFBRCxpQkFBYTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUcsRUFBRUQsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxHQUFsRDtBQUF1RCxTQUFHLEVBQUVKLEtBQUssQ0FBQ0s7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURsQixFQUVLLENBQUNKLFFBQUQsaUJBQWE7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNWO0FBQUEsa0JBQUlELEtBQUssQ0FBQ00sSUFBTixDQUFXQyxJQUFYLENBQWdCLElBQWhCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVLGVBRVY7QUFBQSxrQkFBSVAsS0FBSyxDQUFDUTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVSxlQUdWO0FBQVEsaUJBQVMsRUFBQyxRQUFsQjtBQUFBLCtCQUNJO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxpQ0FBWSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIVSxlQUtWO0FBQ0ksaUJBQVMsRUFBQyxlQURkO0FBRUksZUFBTyxFQUFFLG1CQUFNO0FBQ1hqQixVQUFBQSxZQUFZLENBQUNTLEtBQUssQ0FBQ1IsSUFBUCxDQUFaO0FBQ0FTLFVBQUFBLFFBQVEsR0FBR0MsV0FBVyxDQUFDLEtBQUQsQ0FBZCxHQUF1QkEsV0FBVyxDQUFDLElBQUQsQ0FBMUM7QUFDSCxTQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmxCLEVBZUtELFFBQVEsaUJBQ0w7QUFBTyxXQUFLLEVBQUMsTUFBYjtBQUFvQixjQUFRLE1BQTVCO0FBQUEsNkJBQ0k7QUFBUSxXQUFHLEVBQUVELEtBQUssQ0FBQ1MsR0FBTixDQUFVTCxHQUF2QjtBQUE0QixZQUFJLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQlIsZUFvQkk7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUNLLGFBQU8sRUFBRTtBQUFBLGVBQU1ILFFBQVEsR0FBR0MsV0FBVyxDQUFDLEtBQUQsQ0FBZCxHQUF3QixJQUF0QztBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCSjtBQUFBLGtCQURKO0FBMEJILENBN0JEOztHQUFNSDs7S0FBQUE7O0FBK0JOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvL1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZjVXBMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHBhZ2VDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRU5EUE9JTlRcbiAgICBjb25zdCBncmFwaFFMQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQodXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiIDogYEJlYXJlciAke3Byb2Nlc3MuZW52LkdSQVBIX0NNU19UT0tFTn1gXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHBhZ2VTbHVnID0gcGFnZUNvbnRleHQucXVlcnkuc2x1Z1xuXG4gICAgY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkoJHBhZ2VTbHVnOiBTdHJpbmchKSB7XG4gICAgICB2aWRlbyh3aGVyZToge1xuICAgICAgICBzbHVnOiAkcGFnZVNsdWdcbiAgICAgIH0pIHtcbiAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICBpZCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzZWVuLFxuICAgICAgICBzbHVnLFxuICAgICAgICB0YWdzLFxuICAgICAgICB0aHVtYm5haWwge1xuICAgICAgICAgIHVybFxuICAgICAgICB9LFxuICAgICAgICBtcDQge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGBcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgICAgcGFnZVNsdWcsXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdyYXBoUUxDbGllbnQucmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKVxuICAgIGNvbnN0IHZpZGVvID0gZGF0YS52aWRlb1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZpZGVvXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZVRvU2VlbiA9IGFzeW5jIChzbHVnKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvY2hhbmdlVG9TZWVuJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNsdWcgfSlcbiAgICB9KVxufVxuXG5jb25zdCBWaWRlbyA9ICh7IHZpZGVvIH0pID0+IHtcbiAgICBjb25zdCBbd2F0Y2hpbmcsIHNldFdhdGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHshd2F0Y2hpbmcgJiYgPGltZyBjbGFzc05hbWU9XCJ2aWRlby1pbWFnZVwiIHNyYz17dmlkZW8udGh1bWJuYWlsLnVybH0gYWx0PXt2aWRlby50aXRsZX0vPn1cbiAgICAgICAgICAgIHshd2F0Y2hpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHA+e3ZpZGVvLnRhZ3Muam9pbignLCAnKX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3ZpZGVvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxGY1VwTGVmdC8+PC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tb3ZlcmxheVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVRvU2Vlbih2aWRlby5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2hpbmcgPyBzZXRXYXRjaGluZyhmYWxzZSk6IHNldFdhdGNoaW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlBMQVk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIHt3YXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW8ubXA0LnVybH0gdHlwZT1cInZpZGVvL21wNFwiLz5cbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1mb290ZXJcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3YXRjaGluZyA/IHNldFdhdGNoaW5nKGZhbHNlKSA6IG51bGx9XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZjVXBMZWZ0IiwiY2hhbmdlVG9TZWVuIiwic2x1ZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVmlkZW8iLCJ2aWRlbyIsIndhdGNoaW5nIiwic2V0V2F0Y2hpbmciLCJ0aHVtYm5haWwiLCJ1cmwiLCJ0aXRsZSIsInRhZ3MiLCJqb2luIiwiZGVzY3JpcHRpb24iLCJtcDQiXSwic291cmNlUm9vdCI6IiJ9