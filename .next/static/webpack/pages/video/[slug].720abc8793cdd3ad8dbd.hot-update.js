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
        className: "px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3NsdWddLjcyMGFiYzg3OTNjZGQzYWQ4ZGJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBOENBLElBQU1FLFlBQVk7QUFBQSxpWUFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWEMsS0FBSyxDQUFDLG1CQUFELEVBQXNCO0FBQzdCQyxjQUFBQSxNQUFNLEVBQUUsTUFEcUI7QUFFN0JDLGNBQUFBLE9BQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRm9CO0FBSzdCQyxjQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVOLGdCQUFBQSxJQUFJLEVBQUpBO0FBQUYsZUFBZjtBQUx1QixhQUF0QixDQURNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpELFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O0FBVUEsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFBQSxrQkFDT1gsK0NBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUNsQlksUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUd6QixzQkFDSTtBQUFBLGVBQ0ssQ0FBQ0QsUUFBRCxpQkFBYTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUcsRUFBRUQsS0FBSyxDQUFDRyxTQUFOLENBQWdCQyxHQUFsRDtBQUF1RCxTQUFHLEVBQUVKLEtBQUssQ0FBQ0s7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURsQixFQUVLLENBQUNKLFFBQUQsaUJBQWE7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNWO0FBQUEsa0JBQUlELEtBQUssQ0FBQ00sSUFBTixDQUFXQyxJQUFYLENBQWdCLElBQWhCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVLGVBRVY7QUFBQSxrQkFBSVAsS0FBSyxDQUFDUTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVSxlQUdWO0FBQVEsaUJBQVMsRUFBQywyRUFBbEI7QUFBQSwrQkFDSTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUEsaUNBQVksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSFUsZUFLVjtBQUNJLGlCQUFTLEVBQUMsZUFEZDtBQUVJLGVBQU8sRUFBRSxtQkFBTTtBQUNYakIsVUFBQUEsWUFBWSxDQUFDUyxLQUFLLENBQUNSLElBQVAsQ0FBWjtBQUNBUyxVQUFBQSxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxLQUFELENBQWQsR0FBdUJBLFdBQVcsQ0FBQyxJQUFELENBQTFDO0FBQ0gsU0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZsQixFQWVLRCxRQUFRLGlCQUNMO0FBQU8sV0FBSyxFQUFDLE1BQWI7QUFBb0IsY0FBUSxNQUE1QjtBQUFBLDZCQUNJO0FBQVEsV0FBRyxFQUFFRCxLQUFLLENBQUNTLEdBQU4sQ0FBVUwsR0FBdkI7QUFBNEIsWUFBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJSLGVBb0JJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFDSyxhQUFPLEVBQUU7QUFBQSxlQUFNSCxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxLQUFELENBQWQsR0FBd0IsSUFBdEM7QUFBQTtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQko7QUFBQSxrQkFESjtBQTBCSCxDQTdCRDs7R0FBTUg7O0tBQUFBOztBQStCTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlby9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGY1VwTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChwYWdlQ29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkVORFBPSU5UXG4gICAgY29uc3QgZ3JhcGhRTENsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHVybCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIiA6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HUkFQSF9DTVNfVE9LRU59YFxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBwYWdlU2x1ZyA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWdcblxuICAgIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5KCRwYWdlU2x1ZzogU3RyaW5nISkge1xuICAgICAgdmlkZW8od2hlcmU6IHtcbiAgICAgICAgc2x1ZzogJHBhZ2VTbHVnXG4gICAgICB9KSB7XG4gICAgICAgIGNyZWF0ZWRBdCxcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgc2VlbixcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgdGFncyxcbiAgICAgICAgdGh1bWJuYWlsIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfSxcbiAgICAgICAgbXA0IHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBgXG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgICAgIHBhZ2VTbHVnLFxuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaFFMQ2xpZW50LnJlcXVlc3QocXVlcnksIHZhcmlhYmxlcylcbiAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW9cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2aWRlb1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VUb1NlZW4gPSBhc3luYyAoc2x1ZykgPT4ge1xuICAgIGF3YWl0IGZldGNoKCcvYXBpL2NoYW5nZVRvU2VlbicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzbHVnIH0pXG4gICAgfSlcbn1cblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlbyB9KSA9PiB7XG4gICAgY29uc3QgW3dhdGNoaW5nLCBzZXRXYXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7IXdhdGNoaW5nICYmIDxpbWcgY2xhc3NOYW1lPVwidmlkZW8taW1hZ2VcIiBzcmM9e3ZpZGVvLnRodW1ibmFpbC51cmx9IGFsdD17dmlkZW8udGl0bGV9Lz59XG4gICAgICAgICAgICB7IXdhdGNoaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPnt2aWRlby50YWdzLmpvaW4oJywgJyl9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt2aWRlby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmx1ZS03MDAnPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxGY1VwTGVmdC8+PC9hPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tb3ZlcmxheVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVRvU2Vlbih2aWRlby5zbHVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2hpbmcgPyBzZXRXYXRjaGluZyhmYWxzZSk6IHNldFdhdGNoaW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlBMQVk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIHt3YXRjaGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW8ubXA0LnVybH0gdHlwZT1cInZpZGVvL21wNFwiLz5cbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1mb290ZXJcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3YXRjaGluZyA/IHNldFdhdGNoaW5nKGZhbHNlKSA6IG51bGx9XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZjVXBMZWZ0IiwiY2hhbmdlVG9TZWVuIiwic2x1ZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVmlkZW8iLCJ2aWRlbyIsIndhdGNoaW5nIiwic2V0V2F0Y2hpbmciLCJ0aHVtYm5haWwiLCJ1cmwiLCJ0aXRsZSIsInRhZ3MiLCJqb2luIiwiZGVzY3JpcHRpb24iLCJtcDQiXSwic291cmNlUm9vdCI6IiJ9