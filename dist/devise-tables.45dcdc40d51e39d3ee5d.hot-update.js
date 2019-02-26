webpackHotUpdate("devise-tables",{

/***/ "./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/utilities/tables/SimpleTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/utilities/tables/SimpleTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_garywilliams_Code_devise_interface_cli_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js\");\n/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SimpleTable',\n  data: function data() {\n    return {\n      sortBy: null,\n      sortDir: null\n    };\n  },\n  methods: {\n    sortByColumn: function sortByColumn(column) {\n      // Toggling same column\n      if (this.sortBy === column) {\n        if (this.sortDir === 'desc') {\n          this.sortDir = null;\n          this.sortBy = null;\n        } else if (this.sortDir === 'asc') {\n          this.sortDir = 'desc';\n        } else {\n          this.sortDir = 'asc';\n        }\n      } else {\n        this.sortBy = column;\n        this.sortDir = 'asc';\n      }\n    },\n    sortNumber: function sortNumber(a, b, direction) {\n      if (direction === 'desc') {\n        return b - a;\n      }\n\n      return a - b;\n    },\n    sortString: function sortString(a, b, direction) {\n      var A = a.toUpperCase(); // ignore upper and lowercase\n\n      var B = b.toUpperCase(); // ignore upper and lowercase\n\n      if (A < B) {\n        return direction === 'desc' ? -1 : 1;\n      }\n\n      return direction === 'desc' ? 1 : -1;\n    }\n  },\n  computed: {\n    sortedData: function sortedData() {\n      var self = this;\n      var sortable = [];\n\n      for (var record in this.data) {\n        if (this.data.hasOwnProperty(record)) {\n          sortable.push([record, this.data[record]]);\n        }\n      }\n\n      if (this.sortBy !== null) {\n        sortable.sort(function (a, b) {\n          if (self.sortBy.property) {\n            console.log(Object(_Users_garywilliams_Code_devise_interface_cli_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self.sortBy));\n\n            if (typeof a[1][self.sortBy.name] === 'string') {\n              return self.sortString(a[1][self.sortBy.property], b[1][self.sortBy.property], self.sortDir);\n            }\n\n            return self.sortNumber(a[1][self.sortBy.property], b[1][self.sortBy.property], self.sortDir);\n          }\n\n          if (typeof a[0] === 'string') {\n            return self.sortString(a[0], b[0], self.sortDir);\n          }\n\n          return self.sortNumber(a[0], b[0], self.sortDir);\n        });\n      }\n\n      return sortable;\n    }\n  },\n  props: {\n    columns: {\n      required: true,\n      type: Array\n    },\n    data: {\n      required: true,\n      type: Object | Array\n    }\n  },\n  components: {\n    ArrowDown: function ArrowDown() {\n      return __webpack_require__.e(/*! import() | devise-icons */ \"vendors~devise-icons\").then(__webpack_require__.bind(null, /*! vue-ionicons/dist/ios-arrow-down.vue */ \"./node_modules/vue-ionicons/dist/ios-arrow-down.vue\"));\n    },\n    ArrowUp: function ArrowUp() {\n      return __webpack_require__.e(/*! import() | devise-icons */ \"vendors~devise-icons\").then(__webpack_require__.bind(null, /*! vue-ionicons/dist/ios-arrow-up.vue */ \"./node_modules/vue-ionicons/dist/ios-arrow-up.vue\"));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1wbHVnaW4tYmFiZWwvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy91dGlsaXRpZXMvdGFibGVzL1NpbXBsZVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vU2ltcGxlVGFibGUudnVlP2FiZDQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZHZzLWZsZXggZHZzLWl0ZW1zLXN0cmV0Y2hcIj5cbiAgICA8ZGl2XG4gICAgICB2LWZvcj1cIihjb2x1bW4sIGluZGV4KSBpbiBjb2x1bW5zXCJcbiAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICBjbGFzcz1cImR2cy1mbGV4IGR2cy1mbGV4LWNvbCBkdnMtanVzdGlmeS1iZXR3ZWVuIGR2cy13LWZ1bGxcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJkdnMtZm9udC1ib2xkIGR2cy1tYi0yIGR2cy1wYi0yIGR2cy1weC0yIGR2cy1ib3JkZXItYlwiXG4gICAgICAgIDpzdHlsZT1cIntib3JkZXJDb2xvcjogdGhlbWUucGFuZWwuY29sb3J9XCJcbiAgICAgICAgQGNsaWNrPVwic29ydEJ5Q29sdW1uKGNvbHVtbilcIlxuICAgICAgPlxuICAgICAgICB7eyBjb2x1bW4ubmFtZSB9fVxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImNvbHVtbiA9PT0gc29ydEJ5XCI+XG4gICAgICAgICAgPGFycm93LWRvd24gdi1pZj1cInNvcnREaXIgPT09ICdkZXNjJ1wiIC8+XG4gICAgICAgICAgPGFycm93LXVwIHYtZWxzZSAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtZm9yPVwiKHJlY29yZCwgZGF0YUtleSkgaW4gc29ydGVkRGF0YVwiXG4gICAgICAgIDprZXk9XCJkYXRhS2V5XCJcbiAgICAgICAgY2xhc3M9XCJkdnMtb3ZlcmZsb3ctaGlkZGVuIGR2cy1weC0yXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhY29sdW1uLnByb3BlcnR5XCI+e3sgcmVjb3JkWzBdIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57eyByZWNvcmRbMV1bY29sdW1uLnByb3BlcnR5XSB9fTwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnU2ltcGxlVGFibGUnLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc29ydEJ5OiBudWxsLFxuICAgICAgc29ydERpcjogbnVsbCxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc29ydEJ5Q29sdW1uIChjb2x1bW4pIHtcbiAgICAgIC8vIFRvZ2dsaW5nIHNhbWUgY29sdW1uXG4gICAgICBpZiAodGhpcy5zb3J0QnkgPT09IGNvbHVtbikge1xuICAgICAgICBpZiAodGhpcy5zb3J0RGlyID09PSAnZGVzYycpIHtcbiAgICAgICAgICB0aGlzLnNvcnREaXIgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc29ydEJ5ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNvcnREaXIgPT09ICdhc2MnKSB7XG4gICAgICAgICAgdGhpcy5zb3J0RGlyID0gJ2Rlc2MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc29ydERpciA9ICdhc2MnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvcnRCeSA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5zb3J0RGlyID0gJ2FzYyc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzb3J0TnVtYmVyIChhLCBiLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkZXNjJykge1xuICAgICAgICByZXR1cm4gYiAtIGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSxcbiAgICBzb3J0U3RyaW5nIChhLCBiLCBkaXJlY3Rpb24pIHtcbiAgICAgIGNvbnN0IEEgPSBhLnRvVXBwZXJDYXNlKCk7IC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgICBjb25zdCBCID0gYi50b1VwcGVyQ2FzZSgpOyAvLyBpZ25vcmUgdXBwZXIgYW5kIGxvd2VyY2FzZVxuXG4gICAgICBpZiAoQSA8IEIpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gLTEgOiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnZGVzYycgPyAxIDogLTE7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzb3J0ZWREYXRhICgpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc3Qgc29ydGFibGUgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgcmVjb3JkIGluIHRoaXMuZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KHJlY29yZCkpIHtcbiAgICAgICAgICBzb3J0YWJsZS5wdXNoKFtyZWNvcmQsIHRoaXMuZGF0YVtyZWNvcmRdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc29ydEJ5ICE9PSBudWxsKSB7XG4gICAgICAgIHNvcnRhYmxlLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoc2VsZi5zb3J0QnkucHJvcGVydHkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBzZWxmLnNvcnRCeSlcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYVsxXVtzZWxmLnNvcnRCeS5uYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuc29ydFN0cmluZyhcbiAgICAgICAgICAgICAgICBhWzFdW3NlbGYuc29ydEJ5LnByb3BlcnR5XSxcbiAgICAgICAgICAgICAgICBiWzFdW3NlbGYuc29ydEJ5LnByb3BlcnR5XSxcbiAgICAgICAgICAgICAgICBzZWxmLnNvcnREaXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxmLnNvcnROdW1iZXIoXG4gICAgICAgICAgICAgIGFbMV1bc2VsZi5zb3J0QnkucHJvcGVydHldLFxuICAgICAgICAgICAgICBiWzFdW3NlbGYuc29ydEJ5LnByb3BlcnR5XSxcbiAgICAgICAgICAgICAgc2VsZi5zb3J0RGlyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGFbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5zb3J0U3RyaW5nKGFbMF0sIGJbMF0sIHNlbGYuc29ydERpcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzZWxmLnNvcnROdW1iZXIoYVswXSwgYlswXSwgc2VsZi5zb3J0RGlyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzb3J0YWJsZTtcbiAgICB9LFxuICB9LFxuICBwcm9wczoge1xuICAgIGNvbHVtbnM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHlwZTogQXJyYXksXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IE9iamVjdCB8IEFycmF5LFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBBcnJvd0Rvd246ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkZXZpc2UtaWNvbnNcIiAqLyAndnVlLWlvbmljb25zL2Rpc3QvaW9zLWFycm93LWRvd24udnVlJyksXG4gICAgQXJyb3dVcDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRldmlzZS1pY29uc1wiICovICd2dWUtaW9uaWNvbnMvZGlzdC9pb3MtYXJyb3ctdXAudnVlJyksXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQUNBO0FBQUEsaU9BQ0E7QUFEQTtBQUVBO0FBQUEsNk5BQ0E7QUFEQTtBQUhBO0FBekZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/utilities/tables/SimpleTable.vue?vue&type=script&lang=js&\n");

/***/ })

})