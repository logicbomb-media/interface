webpackHotUpdate("devise-tables",{

/***/ "./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2bbf5072-vue-loader-template\"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/utilities/tables/SimpleTable.vue?vue&type=template&id=383d2427&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2bbf5072-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/utilities/tables/SimpleTable.vue?vue&type=template&id=383d2427& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"dvs-flex dvs-items-stretch table-fixed\" },\n    _vm._l(_vm.columns, function(column, index) {\n      return _c(\n        \"div\",\n        {\n          key: index,\n          staticClass:\n            \"dvs-flex dvs-flex-col dvs-justify-between dvs-w-full items-stretch\"\n        },\n        [\n          _c(\n            \"div\",\n            {\n              staticClass:\n                \"dvs-font-bold dvs-mb-2 dvs-pb-2 dvs-px-2 dvs-border-b\",\n              style: { borderColor: _vm.theme.panel.color },\n              on: {\n                click: function($event) {\n                  return _vm.sortByColumn(column)\n                }\n              }\n            },\n            [\n              _vm._v(\"\\n      \" + _vm._s(column.name) + \"\\n      \"),\n              column === _vm.sortBy\n                ? [_vm.sortDir === \"desc\" ? _c(\"arrow-down\") : _c(\"arrow-up\")]\n                : _vm._e()\n            ],\n            2\n          ),\n          _vm._l(_vm.sortedData, function(record, dataKey) {\n            return _c(\n              \"div\",\n              { key: dataKey, staticClass: \"dvs-overflow-hidden dvs-px-2\" },\n              [\n                !column.property\n                  ? [_vm._v(_vm._s(record[0]))]\n                  : [_vm._v(_vm._s(record[1][column.property]))]\n              ],\n              2\n            )\n          })\n        ],\n        2\n      )\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMmJiZjUwNzItdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy90YWJsZXMvU2ltcGxlVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4M2QyNDI3Ji5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxpdGllcy90YWJsZXMvU2ltcGxlVGFibGUudnVlPzNhODAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZHZzLWZsZXggZHZzLWl0ZW1zLXN0cmV0Y2ggdGFibGUtZml4ZWRcIiB9LFxuICAgIF92bS5fbChfdm0uY29sdW1ucywgZnVuY3Rpb24oY29sdW1uLCBpbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZHZzLWZsZXggZHZzLWZsZXgtY29sIGR2cy1qdXN0aWZ5LWJldHdlZW4gZHZzLXctZnVsbCBpdGVtcy1zdHJldGNoXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJkdnMtZm9udC1ib2xkIGR2cy1tYi0yIGR2cy1wYi0yIGR2cy1weC0yIGR2cy1ib3JkZXItYlwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyBib3JkZXJDb2xvcjogX3ZtLnRoZW1lLnBhbmVsLmNvbG9yIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zb3J0QnlDb2x1bW4oY29sdW1uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoY29sdW1uLm5hbWUpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgIGNvbHVtbiA9PT0gX3ZtLnNvcnRCeVxuICAgICAgICAgICAgICAgID8gW192bS5zb3J0RGlyID09PSBcImRlc2NcIiA/IF9jKFwiYXJyb3ctZG93blwiKSA6IF9jKFwiYXJyb3ctdXBcIildXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fbChfdm0uc29ydGVkRGF0YSwgZnVuY3Rpb24ocmVjb3JkLCBkYXRhS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsga2V5OiBkYXRhS2V5LCBzdGF0aWNDbGFzczogXCJkdnMtb3ZlcmZsb3ctaGlkZGVuIGR2cy1weC0yXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICFjb2x1bW4ucHJvcGVydHlcbiAgICAgICAgICAgICAgICAgID8gW192bS5fdihfdm0uX3MocmVjb3JkWzBdKSldXG4gICAgICAgICAgICAgICAgICA6IFtfdm0uX3YoX3ZtLl9zKHJlY29yZFsxXVtjb2x1bW4ucHJvcGVydHldKSldXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2bbf5072-vue-loader-template\"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/utilities/tables/SimpleTable.vue?vue&type=template&id=383d2427&\n");

/***/ })

})