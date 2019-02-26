webpackHotUpdate("devise-utilities",{

/***/ "./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/utilities/Messages.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/utilities/Messages.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _mixins_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/Strings */ \"./src/mixins/Strings.js\");\n//\n//\n//\n//\n//\n\n\n\nfunction toast(_ref) {\n  var title = _ref.title,\n      message = _ref.message,\n      type = _ref.type,\n      timeout = _ref.timeout,\n      cb = _ref.cb;\n  if (type === VueNotifications.types.warn) type = 'warning';\n  return iziToast[type]({\n    title: title,\n    message: message,\n    timeout: timeout\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      title: null\n    };\n  },\n  notifications: {\n    showSuccessMsg: {\n      type: VueNotifications.types.success,\n      title: 'Success',\n      message: 'Your Request was successful'\n    },\n    showInfoMsg: {\n      type: VueNotifications.types.info,\n      title: 'Hey you',\n      message: 'Here is some info for you'\n    },\n    showWarnMsg: {\n      type: VueNotifications.types.warn,\n      title: 'Wow, man',\n      message: 'That\\'s the kind of warning'\n    },\n    showErrorMsg: {\n      type: VueNotifications.types.error,\n      title: 'Wow-wow',\n      message: 'That\\'s the error'\n    }\n  },\n  mounted: function mounted() {\n    var options = {\n      success: toast,\n      error: toast,\n      info: toast,\n      warn: toast\n    };\n    vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(VueNotifications, options);\n    var self = this;\n    window.deviseSettings.$bus.$on('showError', function (error) {\n      self.addError(error);\n    });\n    window.deviseSettings.$bus.$on('showMessage', function (payload) {\n      self.addMessage(payload);\n    });\n  },\n  methods: {\n    addError: function addError(error) {\n      var self = this; // Error came from axios most likely\n\n      if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && typeof error.response.data.errors !== 'undefined') {\n        this.title = error.response.data.message;\n\n        for (var property in error.response.data.errors) {\n          if (error.response.data.errors.hasOwnProperty(property)) {\n            var e = error.response.data.errors[property];\n            self.appendError({\n              id: this.genUniqueKey(error),\n              code: error.response.status,\n              title: error.response.statusText,\n              message: e[0]\n            });\n          }\n        }\n      } else if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && error.response.data !== null && error.response.data.message !== null) {\n        self.appendError({\n          id: this.genUniqueKey(error),\n          code: error.response.status,\n          title: error.response.data.exception,\n          message: error.response.data.message\n        });\n      } else if (typeof error.data !== 'undefined' && error.data !== null) {\n        self.appendError({\n          id: this.genUniqueKey(error),\n          code: error.status,\n          title: error.data.error,\n          message: error.data.message\n        });\n      } else if (typeof error === 'string') {\n        self.appendError({\n          id: this.genUniqueKey(error),\n          code: '',\n          title: 'Uh-Oh!',\n          message: error\n        });\n      } else if (typeof error.message !== 'undefined' && error.message !== null) {\n        self.appendError({\n          id: this.genUniqueKey(error),\n          code: '',\n          title: 'Uh-Oh!',\n          message: error.message\n        });\n      } else {\n        self.appendError({\n          id: this.genUniqueKey(error),\n          code: error.status,\n          title: 'Unable to reach server',\n          message: 'Please check your internet connection'\n        });\n      }\n    },\n    appendError: function appendError(payload) {\n      this.showErrorMsg({\n        message: 'whatever'\n      });\n    },\n    addMessage: function addMessage(payload) {\n      this.showSuccessMsg({\n        message: 'whatever'\n      });\n    }\n  },\n  computed: {\n    mainTitle: function mainTitle() {\n      if (this.title === null) {\n        return 'There was a Problem';\n      }\n\n      return this.title;\n    },\n    activeErrors: function activeErrors() {\n      return this.errors.filter(function (error) {\n        return error.active === true;\n      });\n    },\n    activeMessages: function activeMessages() {\n      return this.messages.filter(function (message) {\n        return message.active === true;\n      });\n    }\n  },\n  mixins: [_mixins_Strings__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1wbHVnaW4tYmFiZWwvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy91dGlsaXRpZXMvTWVzc2FnZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9NZXNzYWdlcy52dWU/MGZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFN0cmluZ3MgZnJvbSAnLi4vLi4vbWl4aW5zL1N0cmluZ3MnO1xuXG5mdW5jdGlvbiB0b2FzdCAoeyB0aXRsZSwgbWVzc2FnZSwgdHlwZSwgdGltZW91dCwgY2IgfSkge1xuICBpZiAodHlwZSA9PT0gVnVlTm90aWZpY2F0aW9ucy50eXBlcy53YXJuKSB0eXBlID0gJ3dhcm5pbmcnXG4gIHJldHVybiBpemlUb2FzdFt0eXBlXSh7IHRpdGxlLCBtZXNzYWdlLCB0aW1lb3V0IH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgbm90aWZpY2F0aW9uczoge1xuICAgIHNob3dTdWNjZXNzTXNnOiB7XG4gICAgICB0eXBlOiBWdWVOb3RpZmljYXRpb25zLnR5cGVzLnN1Y2Nlc3MsXG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxuICAgICAgbWVzc2FnZTogJ1lvdXIgUmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCdcbiAgICB9LFxuICAgIHNob3dJbmZvTXNnOiB7XG4gICAgICB0eXBlOiBWdWVOb3RpZmljYXRpb25zLnR5cGVzLmluZm8sXG4gICAgICB0aXRsZTogJ0hleSB5b3UnLFxuICAgICAgbWVzc2FnZTogJ0hlcmUgaXMgc29tZSBpbmZvIGZvciB5b3UnXG4gICAgfSxcbiAgICBzaG93V2Fybk1zZzoge1xuICAgICAgdHlwZTogVnVlTm90aWZpY2F0aW9ucy50eXBlcy53YXJuLFxuICAgICAgdGl0bGU6ICdXb3csIG1hbicsXG4gICAgICBtZXNzYWdlOiAnVGhhdFxcJ3MgdGhlIGtpbmQgb2Ygd2FybmluZydcbiAgICB9LFxuICAgIHNob3dFcnJvck1zZzoge1xuICAgICAgdHlwZTogVnVlTm90aWZpY2F0aW9ucy50eXBlcy5lcnJvcixcbiAgICAgIHRpdGxlOiAnV293LXdvdycsXG4gICAgICBtZXNzYWdlOiAnVGhhdFxcJ3MgdGhlIGVycm9yJ1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHN1Y2Nlc3M6IHRvYXN0LFxuICAgICAgZXJyb3I6IHRvYXN0LFxuICAgICAgaW5mbzogdG9hc3QsXG4gICAgICB3YXJuOiB0b2FzdFxuICAgIH1cblxuICAgIFZ1ZS51c2UoVnVlTm90aWZpY2F0aW9ucywgb3B0aW9ucylcblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5kZXZpc2VTZXR0aW5ncy4kYnVzLiRvbignc2hvd0Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgc2VsZi5hZGRFcnJvcihlcnJvcik7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuZGV2aXNlU2V0dGluZ3MuJGJ1cy4kb24oJ3Nob3dNZXNzYWdlJywgcGF5bG9hZCA9PiB7XG4gICAgICBzZWxmLmFkZE1lc3NhZ2UocGF5bG9hZCk7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRFcnJvciAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBFcnJvciBjYW1lIGZyb20gYXhpb3MgbW9zdCBsaWtlbHlcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGVycm9yLnJlc3BvbnNlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbcHJvcGVydHldO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRFcnJvcih7XG4gICAgICAgICAgICAgIGlkOiB0aGlzLmdlblVuaXF1ZUtleShlcnJvciksXG4gICAgICAgICAgICAgIGNvZGU6IGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGVbMF0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIGVycm9yLnJlc3BvbnNlLmRhdGEgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEgIT09IG51bGwgJiZcbiAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgc2VsZi5hcHBlbmRFcnJvcih7XG4gICAgICAgICAgaWQ6IHRoaXMuZ2VuVW5pcXVlS2V5KGVycm9yKSxcbiAgICAgICAgICBjb2RlOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXhjZXB0aW9uLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvci5kYXRhICE9PSAndW5kZWZpbmVkJyAmJiBlcnJvci5kYXRhICE9PSBudWxsKSB7XG4gICAgICAgIHNlbGYuYXBwZW5kRXJyb3Ioe1xuICAgICAgICAgIGlkOiB0aGlzLmdlblVuaXF1ZUtleShlcnJvciksXG4gICAgICAgICAgY29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICAgIHRpdGxlOiBlcnJvci5kYXRhLmVycm9yLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2VsZi5hcHBlbmRFcnJvcih7XG4gICAgICAgICAgaWQ6IHRoaXMuZ2VuVW5pcXVlS2V5KGVycm9yKSxcbiAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICB0aXRsZTogJ1VoLU9oIScsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3IubWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXJyb3IubWVzc2FnZSAhPT0gbnVsbCkge1xuICAgICAgICBzZWxmLmFwcGVuZEVycm9yKHtcbiAgICAgICAgICBpZDogdGhpcy5nZW5VbmlxdWVLZXkoZXJyb3IpLFxuICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgIHRpdGxlOiAnVWgtT2ghJyxcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuYXBwZW5kRXJyb3Ioe1xuICAgICAgICAgIGlkOiB0aGlzLmdlblVuaXF1ZUtleShlcnJvciksXG4gICAgICAgICAgY29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICAgIHRpdGxlOiAnVW5hYmxlIHRvIHJlYWNoIHNlcnZlcicsXG4gICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24nLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFwcGVuZEVycm9yIChwYXlsb2FkKSB7XG4gICAgICB0aGlzLnNob3dFcnJvck1zZyh7IG1lc3NhZ2U6ICd3aGF0ZXZlcicgfSlcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2UgKHBheWxvYWQpIHtcbiAgICAgIHRoaXMuc2hvd1N1Y2Nlc3NNc2coeyBtZXNzYWdlOiAnd2hhdGV2ZXInIH0pXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG1haW5UaXRsZSAoKSB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ1RoZXJlIHdhcyBhIFByb2JsZW0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBhY3RpdmVFcnJvcnMgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci5hY3RpdmUgPT09IHRydWUpO1xuICAgIH0sXG4gICAgYWN0aXZlTWVzc2FnZXMgKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZS5hY3RpdmUgPT09IHRydWUpO1xuICAgIH0sXG4gIH0sXG4gIG1peGluczogW1N0cmluZ3NdLFxufTtcbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFoQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBckVBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVpBO0FBY0E7QUFwSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/utilities/Messages.vue?vue&type=script&lang=js&\n");

/***/ })

})