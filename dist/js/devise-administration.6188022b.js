(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-administration"],{"011e":function(e,t,n){
/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Scrollbar @ Version 0.0.5,
 * 
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../dist/",n(n.s=5)}([function(e,t){e.exports=function(e,t,n,s,i){var r,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,o=e.default);var l,c="function"===typeof o?o.options:o;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),s&&(c._scopeId=s),i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,u=d?c.render:c.beforeCreate;d?c.render=function(e,t){return l.call(t),u(e,t)}:c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:r,exports:o,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),i=n.n(s),r=n(9),o=n(0),a=null,l=null,c=null,d=o(i.a,r["a"],a,l,c);d.options.__file="src/js/components/vue-scrollbar.vue",d.esModule&&Object.keys(d.esModule).some((function(e){return"default"!==e&&"__"!==e.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] vue-scrollbar.vue: functional components are not supported with templates, they should use render functions."),t["default"]=d.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{width:0,dragging:!1,start:0}},watch:{"wrapper.width":function(e,t){this.calculateSize(this)},"area.width":function(e,t){this.calculateSize(this)}},methods:{startDrag:function(e){e.preventDefault(),e.stopPropagation(),e=e.changedTouches?e.changedTouches[0]:e,this.dragging=!0,this.start=e.clientX},onDrag:function(e){if(this.dragging){this.onDragging(),e.preventDefault(),e.stopPropagation(),e=e.changedTouches?e.changedTouches[0]:e;var t=e.clientX-this.start,n=t/this.wrapper.width*100;this.start=e.clientX;var s=this.scrolling+n;this.onChangePosition(s,"horizontal")}},stopDrag:function(e){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(e){var t=e.target===this.$refs.container;if(t){var n=this.$refs.scrollbar.getBoundingClientRect(),s=e.clientX-n.left,i=this.width/2,r=s/this.wrapper.width*100-i;this.start=e.clientX;var o=this.scrolling+r;this.onChangePosition(o,"horizontal")}},calculateSize:function(e){this.width=e.wrapper.width/e.area.width*100}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{height:0,dragging:!1,start:0}},watch:{"wrapper.height":function(e,t){this.calculateSize(this)},"area.height":function(e,t){this.calculateSize(this)}},methods:{startDrag:function(e){e.preventDefault(),e.stopPropagation(),e=e.changedTouches?e.changedTouches[0]:e,this.dragging=!0,this.start=e.clientY},onDrag:function(e){if(this.dragging){this.onDragging(),e.preventDefault(),e.stopPropagation(),e=e.changedTouches?e.changedTouches[0]:e;var t=e.clientY-this.start,n=t/this.wrapper.height*100;this.start=e.clientY;var s=this.scrolling+n;this.onChangePosition(s,"vertical")}},stopDrag:function(e){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(e){var t=e.target===this.$refs.container;if(t){var n=this.$refs.scrollbar.getBoundingClientRect(),s=e.clientY-n.top,i=this.height/2,r=s/this.wrapper.height*100-i;this.start=e.clientY;var o=this.scrolling+r;this.onChangePosition(o,"vertical")}},calculateSize:function(e){this.height=e.wrapper.height/e.area.height*100},getSize:function(){var e=this.$refs.container.parentElement,t=e.parentElement,n={scrollAreaHeight:e.children[0].clientHeight,scrollAreaWidth:e.children[0].clientWidth,scrollWrapperHeight:t.clientHeight,scrollWrapperWidth:t.clientWidth};return n}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(7),i=a(s),r=n(6),o=a(r);function a(e){return e&&e.__esModule?e:{default:e}}t.default={props:{classes:String,styles:Object,speed:{type:Number,default:53},onMaxScroll:Function},components:{VerticalScrollbar:i.default,HorizontalScrollbar:o.default},data:function(){return{ready:!1,top:0,left:0,scrollAreaHeight:null,scrollAreaWidth:null,scrollWrapperHeight:null,scrollWrapperWidth:null,vMovement:0,hMovement:0,dragging:!1,start:{y:0,x:0},allowBodyScroll:!1}},methods:{scroll:function(e){var t=this;this.calculateSize((function(){var n=t.speed,s=e.shiftKey,i=e.deltaY>0?n:-n,r=e.deltaX>0?n:-n;s&&0==e.deltaX&&(r=e.deltaY>0?n:-n);var o=t.top+i,a=t.left+r,l=t.scrollAreaHeight>t.scrollWrapperHeight,c=t.scrollAreaWidth>t.scrollWrapperWidth;l&&!s&&t.normalizeVertical(o),s&&c&&t.normalizeHorizontal(a)})),this.allowBodyScroll||(e.preventDefault(),e.stopPropagation())},startDrag:function(e){var t=this;this.touchEvent=e;var n=e.changedTouches?e.changedTouches[0]:e;this.calculateSize((function(){t.dragging=!0,t.start={y:n.pageY,x:n.pageX}}))},onDrag:function(e){if(this.dragging){e.preventDefault(),e.stopPropagation(),this.touchEvent&&(this.touchEvent.preventDefault(),this.touchEvent.stopPropagation());var t=e.changedTouches?e.changedTouches[0]:e,n=this.start.y-t.clientY,s=this.start.x-t.clientX;this.start={y:t.clientY,x:t.clientX};var i=this.top+n,r=this.left+s;this.normalizeVertical(i),this.normalizeHorizontal(r)}},stopDrag:function(e){this.dragging=!1,this.touchEvent=!1},scrollToY:function(e){this.normalizeVertical(e)},scrollToX:function(e){this.normalizeHorizontal(e)},normalizeVertical:function(e){var t=this.getSize(),n=t.scrollAreaHeight-t.scrollWrapperHeight,s=e>n;s&&(e=n);var i=e<0;i&&(e=0);var r=this.top!==e;this.allowBodyScroll=!r,r&&(this.top=e,this.vMovement=e/t.scrollAreaHeight*100,this.onMaxScroll&&(i||s)&&this.onMaxScroll({top:i,bottom:s,right:!1,left:!1}))},normalizeHorizontal:function(e){var t=this.getSize(),n=t.scrollAreaWidth-this.scrollWrapperWidth,s=e>n;s&&(e=n);var i=e<0;e<0&&(e=0);var r=this.left!==e;this.allowBodyScroll=!r,r&&(this.left=e,this.hMovement=e/t.scrollAreaWidth*100,this.onMaxScroll&&(s||i)&&this.onMaxScroll({right:s,left:i,top:!1,bottom:!1}))},handleChangePosition:function(e,t){var n=this;this.calculateSize((function(){var s=e/100;"vertical"==t&&n.normalizeVertical(s*n.scrollAreaHeight),"horizontal"==t&&n.normalizeHorizontal(s*n.scrollAreaWidth)}))},handleScrollbarDragging:function(){this.dragging=!0},handleScrollbarStopDrag:function(){this.dragging=!1},getSize:function(){var e=this.$refs.scrollArea,t=this.$refs.scrollWrapper,n="undefined"!==typeof e&&e.children[0]?e.children[0].clientHeight:0,s="undefined"!==typeof e&&e.children[0]?e.children[0].clientWidth:0,i={scrollAreaHeight:n,scrollAreaWidth:s,scrollWrapperHeight:"undefined"!==typeof t?t.clientHeight:0,scrollWrapperWidth:"undefined"!==typeof t?t.clientWidth:0};return i},calculateSize:function(e){"function"!==typeof e&&(e=null);var t=this.getSize();return t.scrollWrapperHeight!==this.scrollWrapperHeight||t.scrollWrapperWidth!==this.scrollWrapperWidth||t.scrollAreaHeight!==this.scrollAreaHeight||t.scrollAreaWidth!==this.scrollAreaWidth?(this.scrollAreaHeight=t.scrollAreaHeight,this.scrollAreaWidth=t.scrollAreaWidth,this.scrollWrapperHeight=t.scrollWrapperHeight,this.scrollWrapperWidth=t.scrollWrapperWidth,this.ready=!0,!!e&&e()):!!e&&e()}},mounted:function(){this.calculateSize(),window.addEventListener("resize",this.calculateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.calculateSize)}}},function(e,t,n){"use strict";var s=n(1),i=r(s);function r(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=n.n(s),r=n(8),o=n(0),a=null,l=null,c=null,d=o(i.a,r["a"],a,l,c);d.options.__file="src/js/components/horizontal-scrollbar.vue",d.esModule&&Object.keys(d.esModule).some((function(e){return"default"!==e&&"__"!==e.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] horizontal-scrollbar.vue: functional components are not supported with templates, they should use render functions."),t["default"]=d.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(3),i=n.n(s),r=n(10),o=n(0),a=null,l=null,c=null,d=o(i.a,r["a"],a,l,c);d.options.__file="src/js/components/vertical-scrollbar.vue",d.esModule&&Object.keys(d.esModule).some((function(e){return"default"!==e&&"__"!==e.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] vertical-scrollbar.vue: functional components are not supported with templates, they should use render functions."),t["default"]=d.exports},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.width<100?n("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-horizontal",on:{click:e.jump}},[n("div",{ref:"scrollbar",class:"scrollbar"+(e.dragging||e.draggingFromParent?"":" vue-scrollbar-transition"),style:{width:this.width+"%",left:this.scrolling+"%"},on:{touchstart:e.startDrag,mousedown:e.startDrag}})]):e._e()])},i=[];s._withStripped=!0;var r={render:s,staticRenderFns:i};t["a"]=r},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollWrapper",class:"vue-scrollbar__wrapper"+(this.classes?" "+this.classes:""),style:this.styles,on:{click:e.calculateSize}},[n("div",{ref:"scrollArea",class:"vue-scrollbar__area"+(this.dragging?" ":" vue-scrollbar-transition"),style:{marginTop:-1*this.top+"px",marginLeft:-1*this.left+"px"},on:{wheel:e.scroll,touchstart:e.startDrag,touchmove:e.onDrag,touchend:e.stopDrag}},[e._t("default"),e._v(" "),e.ready?n("vertical-scrollbar",{attrs:{area:{height:e.scrollAreaHeight},wrapper:{height:e.scrollWrapperHeight},scrolling:e.vMovement,"dragging-from-parent":e.dragging,"on-change-position":e.handleChangePosition,"on-dragging":e.handleScrollbarDragging,"on-stop-drag":e.handleScrollbarStopDrag}}):e._e(),e._v(" "),e.ready?n("horizontal-scrollbar",{attrs:{area:{width:e.scrollAreaWidth},wrapper:{width:e.scrollWrapperWidth},scrolling:e.hMovement,"dragging-from-parent":e.dragging,"on-change-position":e.handleChangePosition,"on-dragging":e.handleScrollbarDragging,"on-stop-drag":e.handleScrollbarStopDrag}}):e._e()],2)])},i=[];s._withStripped=!0;var r={render:s,staticRenderFns:i};t["a"]=r},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.height<100?n("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-vertical",on:{click:e.jump}},[n("div",{ref:"scrollbar",class:"scrollbar"+(e.dragging||e.draggingFromParent?"":" vue-scrollbar-transition"),style:{height:e.height+"%",top:e.scrolling+"%"},on:{touchstart:e.startDrag,mousedown:e.startDrag}})]):e._e()])},i=[];s._withStripped=!0;var r={render:s,staticRenderFns:i};t["a"]=r}])}))},"309f":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("ul",e._l(e.results.data,(function(t,s){return n("li",{key:s,staticClass:"dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-4 dvs-cursor-pointer",on:{click:function(n){return e.selectSuggestion(t)}}},[n("div",{staticClass:"dvs-text-lg dvs-mb-2 dvs-font-light"},[e._v(e._s(t[e.mainLabelField]))]),n("ul",{staticClass:"dvs-flex"},e._l(e.subLabelFields,(function(s,i){return n("li",{key:i,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight dvs-w-1/4 dvs-bg-admin-bg dvs-text-admin-fg dvs-rounded dvs-p-3 opacity-75"},[n("div",{staticClass:"dvs-uppercase dvs-text-xs"},[e._v(e._s(s.label))]),n("div",[e._v(e._s(e.format(s,t[s.field])))])])})),0)])})),0)]),""!==e.searchTerm&&e.results.data&&e.results.data.length<1?n("div",{staticClass:"dvs-text-center"},[e._v(" No search results found ")]):e._e()])},i=[],r=n("5530"),o=n("2f62"),a=n("5a0c"),l=n.n(a),c={name:"DeviseWorkflowIndex",props:{step:{type:Object,required:!0}},data:function(){return{results:{data:[]}}},computed:{mainLabelField:function(){return this.step.resultsDisplayFields[0].field},subLabelFields:function(){var e=JSON.parse(JSON.stringify(this.step.resultsDisplayFields));return e.shift(),e}},mounted:function(){this.requestData()},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])("devise",["getGeneric"])),{},{requestData:function(){var e=this,t=!0===this.step.app||"undefined"===typeof this.step.app||this.step.app;this.getGeneric({config:{apiendpoint:this.step.apiendpoint,app:t}}).then((function(t){e.results=t.data}))},selectSuggestion:function(e){this.$emit("done",e)},format:function(e,t){return e.dateFormat?l()(t).format(e.dateFormat):t}})},d=c,u=n("2877"),h=Object(u["a"])(d,s,i,!1,null,null,null);t["default"]=h.exports},"492a":function(e,t,n){const s=n("b8f9");function i(e,t){t.value!==t.oldValue&&(e.oninput=i.debounce((function(t){e.dispatchEvent(r("change"))}),parseInt(t.value)||800))}function r(e){if("function"===typeof Event)var t=new Event(e);else{t=document.createEvent("Event");t.initEvent(e,!0,!0)}return t}i.debounce=s,e.exports=i},"66ed":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentStep?n("admin-container",{scopedSlots:e._u([{key:"message",fn:function(){return[n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"dvs-cursor-pointer dvs-flex dvs-flex-col dvs-items-center",on:{click:e.back}},[n("arrow-left-circle-icon",{staticClass:"mb-1"}),n("span",{staticClass:"dvs-text-2xs dvs-uppercase"},[e._v("Back")])],1),n("div",{staticClass:"dvs-px-8",domProps:{innerHTML:e._s(e.currentStep.message)}})])]},proxy:!0},{key:"content",fn:function(){return[n("transition",{attrs:{name:"dvs-fade",mode:"out-in"}},[n(e.currentStep.component,{tag:"component",attrs:{step:e.currentStep,values:e.values},on:{done:e.done,cancel:e.cancel}})],1)]},proxy:!0}],null,!1,2452802325)}):e._e()},i=[],r=(n("d3b7"),n("3ca3"),n("ddb0"),n("7db0"),n("fb6a"),n("159b"),n("a434"),{name:"DeviseWorkflow",components:{AdminContainer:function(){return Promise.resolve().then(n.bind(null,"987f"))},ArrowLeftCircleIcon:function(){return n.e("devise-icons").then(n.bind(null,"2f56"))},WorkflowIndex:function(){return Promise.resolve().then(n.bind(null,"309f"))},WorkflowMenu:function(){return Promise.resolve().then(n.bind(null,"8768"))},WorkflowSearch:function(){return Promise.resolve().then(n.bind(null,"704d"))}},props:{workflow:{type:Array,required:!0}},data:function(){return{workflowStack:[]}},computed:{index:function(){return this.workflow.find((function(e){return e.index}))},currentStep:function(){return this.workflowStack.slice(-1)[0]},values:function(){var e={};return this.workflowStack.forEach((function(t){e=Object.assign(e,t.value)})),e}},mounted:function(){this.$route.params&&this.$route.params.workflowKey?this.jumpToStep(this.$route.params.workflowKey):this.index&&this.workflowStack.push(this.index)},methods:{done:function(e){this.workflowStack[this.workflowStack.length-1].value=e,this.loadStep()},cancel:function(){this.clearStack()},back:function(){this.workflowStack.length>1?(this.workflowStack.splice(-1,1),delete this.currentStep.value,window.deviseSettings.$bus.$emit("dvs-admin-container-content-changed")):this.$router.go(-1)},jumpToStep:function(e){var t=this.workflow.find((function(t){return t.key===e}));this.$set(t,"jumpedTo",!0),this.$set(t,"jumpedToParams",this.$route.params),this.workflowStack.push(t)},loadStep:function(){var e=null;if(this.currentStep.end||this.currentStep.value&&this.currentStep.value.end)this.clearStack();else{var t=this.workflowStack[this.workflowStack.length-2],n=null;"undefined"!==typeof this.currentStep.nextStep?n=this.currentStep.nextStep:"undefined"!==typeof this.currentStep.value&&(n=this.currentStep.value.nextStep),n?e=this.workflow.find((function(e){return e.key===n})):t&&t.value.stepAfterNext&&(e=this.workflow.find((function(e){return e.key===t.value.stepAfterNext}))),e?(this.workflowStack.push(Object.assign({},e)),window.deviseSettings.$bus.$emit("dvs-admin-container-content-changed")):console.warn("There is no step registered as ".concat(n))}},clearStack:function(){this.workflowStack=[this.index],window.deviseSettings.$bus.$emit("dvs-admin-container-content-changed")}}}),o=r,a=n("2877"),l=Object(a["a"])(o,s,i,!1,null,null,null);t["default"]=l.exports},"704d":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"dvs-flex dvs-justify-center"},[n("div",{staticClass:"dvs-relative dvs-flex dvs-justify-center dvs-items-center dvs-mt-8 dvs-relative"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.searchTerm,expression:"searchTerm",modifiers:{lazy:!0}},{name:"debounce",rawName:"v-debounce",value:1e3,expression:"1000"}],staticClass:"dvs-bg-transparent dvs-bg-admin-secondary-bg dvs-px-12 dvs-py-4 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:"Type to begin searching"},domProps:{value:e.searchTerm},on:{change:function(t){e.searchTerm=t.target.value}}}),n("div",{staticClass:"dvs-cursor-pointer dvs-absolute dvs-right-0 dvs-top-0 dvs-mt-3 dvs-mr-2",class:{"dvs-opacity-50":""===e.searchTerm},on:{click:function(t){e.searchTerm=""}}},[n("x-icon")],1)])]),n("div",{staticClass:"dvs-mb-8 dvs-flex dvs-justify-center dvs-mt-2"},[e.step.allRecordsApiendpoint?n("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-btn-sm dvs-m4-6",on:{click:e.requestAll}},[e._v(" Load All Records ")]):e._e()]),e.autosuggest.meta?n("pagination",{attrs:{meta:e.autosuggest.meta},on:{changePage:e.changePage}}):e._e(),n("ul",e._l(e.autosuggest.data,(function(t,s){return n("li",{key:s,staticClass:"dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-4 dvs-cursor-pointer",on:{click:function(n){return e.selectSuggestion(t)}}},[n("div",{staticClass:"dvs-text-lg dvs-mb-2 dvs-font-light"},[e._v(e._s(t[e.mainLabelField]))]),n("ul",{staticClass:"dvs-flex"},e._l(e.subLabelFields,(function(s,i){return n("li",{key:i,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight dvs-w-1/4 dvs-bg-admin-bg dvs-text-admin-fg dvs-rounded dvs-p-3 dvs-opacity-75 dvs-break-words"},[n("div",{staticClass:"dvs-uppercase dvs-text-xs"},[e._v(e._s(s.label))]),n("div",[e._v(e._s(e.format(s,t[s.field])))])])})),0)])})),0),""!==e.searchTerm&&e.autosuggest.data&&e.autosuggest.data.length<1?n("div",{staticClass:"dvs-text-center"},[e._v(" No search results found ")]):e._e()],1)},i=[],r=n("5530"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("492a")),a=n.n(o),l=n("2f62"),c=n("5a0c"),d=n.n(c),u={name:"DeviseWorkflowSearch",directives:{debounce:a.a},components:{XIcon:function(){return n.e("devise-icons").then(n.bind(null,"1a4e"))},Pagination:function(){return n.e("devise-utilities").then(n.bind(null,"b29d"))}},props:{step:{type:Object,required:!0}},data:function(){return{searchDelay:1e3,searchTerm:"",autosuggest:{data:[]}}},computed:{options:function(){return this.step.options},mainLabelField:function(){return this.step.resultsDisplayFields[0].field},subLabelFields:function(){var e=JSON.parse(JSON.stringify(this.step.resultsDisplayFields));return e.shift(),e}},watch:{searchTerm:function(e){this.requestSearch(e)}},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("devise",["searchGeneric"])),{},{requestSearch:function(e){var t=this;if(""!==e){var n=!0===this.step.app||"undefined"===typeof this.step.app||this.step.app,s={};s[this.step.searchPropertyName]=e,this.searchGeneric({config:{apiendpoint:this.step.apiendpoint,app:n},filters:s}).then((function(n){t.autosuggest=n.data,n.data.length<1&&window.deviseSettings.$bus.$emit("showMessage",{title:"No Suggestions Found",message:"We couldn't find any data with the term: \"".concat(e,'".')})}))}else this.autosuggest=Object.assign({},{})},requestAll:function(e){var t=this,n=!0===this.step.app||"undefined"===typeof this.step.app||this.step.app;this.searchGeneric({config:{apiendpoint:this.step.allRecordsApiendpoint,app:n},filters:e}).then((function(e){t.autosuggest=e.data}))},changePage:function(e){this.requestAll({page:e})},selectSuggestion:function(e){this.$emit("done",e)},format:function(e,t){return e.dateFormat?d()(t).format(e.dateFormat):t}})},h=u,v=n("2877"),f=Object(v["a"])(h,s,i,!1,null,null,null);t["default"]=f.exports},8768:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.options,(function(t,s){return n("div",{key:s,staticClass:"dvs-bg-white dvs-cursor-pointer dvs-text-admin-bg dvs-text-center dvs-py-3 dvs-px-8 dvs-my-4 dvs-shadow dvs-rounded",domProps:{innerHTML:e._s(t.label)},on:{click:function(n){return e.chooseOption(t)}}})})),0)},i=[],r={name:"DeviseWorkflowMenu",props:{step:{type:Object,required:!0}},computed:{options:function(){return this.step.options}},methods:{chooseOption:function(e){this.$emit("done",e)}}},o=r,a=n("2877"),l=Object(a["a"])(o,s,i,!1,null,null,null);t["default"]=l.exports},"95f1":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.deviseOptions.adminClass],attrs:{id:"devise-admin"}},[n("transition",{attrs:{name:"fast-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showAdmin,expression:"!showAdmin"}],staticClass:"dvs-sidebar-hint dvs-p-3",class:{"opacity-100":!e.showAdmin},on:{click:function(t){e.showAdmin=!0}}},[n("power-icon")],1)]),n("transition",{attrs:{name:"fast-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdmin,expression:"showAdmin"}],staticClass:"dvs-blocker",class:{"opacity-0":e.fieldOpen},on:{click:function(t){e.showAdmin=!1}}})]),n("transition",{attrs:{name:"fast-fade"}},[n("panel",{directives:[{name:"show",rawName:"v-show",value:e.showAdmin&&!e.fieldOpen,expression:"showAdmin && !fieldOpen"}],staticClass:"dvs-m-8 dvs-fixed dvs-pin dvs-z-9980 dvs-flex dvs-pointer-events-none"},[n("div",{staticClass:"dvs-flex dvs-shadow dvs-flex-col dvs-relative dvs-rounded dvs-bg-admin-bg dvs-pointer-events-auto"},[n("preview-mode"),e._l(e.allowedAdminMenu,(function(t,s){return[n("div",{key:s,staticClass:"dvs-border-b dvs-border-admin-secondary-bg"},[n("button",{staticClass:"dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-text-admin-fg",class:e.checkActivePanelSidebar(t),on:{click:function(n){return n.preventDefault(),e.loadAdminPage(t)}}},[n(t.icon,{tag:"component",staticClass:"dvs-m-4",attrs:{w:"25",h:"25"}})],1)])]})),n("a",{staticClass:"dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-text-admin-fg",attrs:{href:"#",onclick:"event.preventDefault(); document.getElementById('dvs-logout-form').submit();"}},[n("power-icon",{staticClass:"dvs-m-4",attrs:{w:"25",h:"25"}})],1),n("form",{staticStyle:{display:"none"},attrs:{id:"dvs-logout-form",action:"/logout",method:"POST"}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrf_field}})])],2),n("div",{staticClass:"dvs-flex dvs-w-full dvs-ml-16"},[n("transition",{attrs:{name:"dvs-fade",mode:"out-in"}},[n("router-view",{attrs:{name:"devise"}})],1)],1)])],1),n("portal-target",{directives:[{name:"show",rawName:"v-show",value:!e.hideDeviseRootPortal,expression:"!hideDeviseRootPortal"}],staticClass:"dvs-fixed dvs-pin dvs-z-9999 dvs-w-full",attrs:{name:"devise-root"},on:{change:e.deviseRootPortalContentChanged}}),n("media-manager",{staticClass:"dvs-z-9999"}),n("slice-settings"),n("loadbar",{staticClass:"dvs-relative dvs-z-9999"}),n("loading-screen",{staticClass:"dvs-relative dvs-z-9999"}),n("force-save",{staticClass:"dvs-z-9999"})],1)},i=[],r=n("5530"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("b64b"),n("b0c0"),n("2b0e")),a=n("2f62"),l=n("5118"),c={name:"Administration",components:{Loadbar:function(){return n.e("devise-utilities").then(n.bind(null,"69bf"))},LoadingScreen:function(){return n.e("devise-utilities").then(n.bind(null,"f10a"))},MediaEditor:function(){return Promise.all([n.e("devise-editors~devise-media~devise-slices"),n.e("devise-media")]).then(n.bind(null,"3d71"))},MediaManager:function(){return Promise.all([n.e("devise-editors~devise-media~devise-slices"),n.e("devise-media")]).then(n.bind(null,"0dea"))},ForceSave:function(){return n.e("devise-utilities").then(n.bind(null,"84e6"))},PreviewMode:function(){return n.e("devise-previewmode").then(n.bind(null,"6ae2"))},BackIcon:function(){return n.e("devise-icons").then(n.bind(null,"f6e6"))},CogIcon:function(){return n.e("devise-icons").then(n.bind(null,"8dd5"))},CreateIcon:function(){return n.e("devise-icons").then(n.bind(null,"39b0"))},CubeIcon:function(){return n.e("devise-icons").then(n.bind(null,"d454"))},DocumentIcon:function(){return n.e("devise-icons").then(n.bind(null,"382d"))},ImageIcon:function(){return n.e("devise-icons").then(n.bind(null,"fab7"))},Panel:function(){return n.e("devise-utilities").then(n.bind(null,"cb57"))},PowerIcon:function(){return n.e("devise-icons").then(n.bind(null,"95ae"))},SaveIcon:function(){return n.e("devise-icons").then(n.bind(null,"854f"))},SliceSettings:function(){return Promise.all([n.e("devise-editors~devise-media~devise-slices"),n.e("devise-slices")]).then(n.bind(null,"5f09"))}},data:function(){return{showAdmin:!1,everythingIsLoaded:!1,hideDeviseRootPortal:!0,fieldOpen:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(a["e"])("devise",["adminMenu"])),{},{allowedAdminMenu:function(){var e=this;return Object.keys(this.adminMenu).filter((function(t){return!e.adminMenu[t].permissions||e.can(e.adminMenu[t].permissions)})).reduce((function(t,n){return t[n]=e.adminMenu[n],t}),{})},user:function(){return window.deviseSettings.$user},csrf_field:function(){return window.axios.defaults.headers.common["X-CSRF-TOKEN"]}}),mounted:function(){var e=this;o["default"].component("help",(function(){return n.e("devise-utilities").then(n.bind(null,"a31e"))})),setTimeout((function(){e.everythingIsLoaded=!0}),2e3),Object(l["setInterval"])((function(){e.pollIfLoggedIn()}),3e4),window.deviseSettings.$bus.$on("devise-showing-field-editor",(function(){e.fieldOpen=!0})),window.deviseSettings.$bus.$on("devise-hiding-field-editor",(function(){e.fieldOpen=!1}))},methods:Object(r["a"])(Object(r["a"])({},Object(a["b"])("devise",["getLanguages"])),{},{loadAdminPage:function(e){"media-manager"===e.routeName?window.deviseSettings.$bus.$emit("devise-launch-media-manager",{}):"undefined"!==typeof e.routeParams?this.goToPage(e.routeName,e.routeParams):this.goToPage(e.routeName)},checkActivePanelSidebar:function(e){if(this.$route.meta&&this.$route.meta.parentRouteName){if("devise-pages-view"===this.$route.name&&this.$route.params.pageId===this.currentPage.id&&"devise-pages-view"===e.routeName)return[" dvs-bg-admin-highlight-bg dvs-text-admin-highlight-fg"];if(e.routeName===this.$route.meta.parentRouteName&&("devise-pages-view"!==this.$route.name||this.$route.params.pageId!==this.currentPage.id))return[" dvs-bg-admin-highlight-bg dvs-text-admin-highlight-fg"]}return[]},pollIfLoggedIn:function(){this.getLanguages().then((function(){}),(function(){window.location.reload(!0)}))},deviseRootPortalContentChanged:function(e){e.passengers?this.hideDeviseRootPortal=!1:this.hideDeviseRootPortal=!0}})},d=c,u=n("2877"),h=Object(u["a"])(d,s,i,!1,null,null,null);t["default"]=h.exports},"987f":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dvs-relative dvs-w-full dvs-flex dvs-justify-center dvs-items-start dvs-mt-10"},[n("div",{staticClass:"dvs-z-10 dvs-bg-white dvs-text-admin-bg dvs-w-1/2 dvs-rounded-lg dvs-shadow-xl dvs-absolute dvs-pin-t dvs--mt-10 dvs-px-8 dvs-py-4 dvs-font-light dvs-text-center dvs-leading-tight dvs-text-sm dvs-pointer-events-auto"},[e._t("message")],2),n("div",{staticClass:"dvs-relative dvs-bg-admin-bg dvs-rounded dvs-shadow-lg dvs-max-w-3/4 dvs-min-w-1/2 dvs-py-10 dvs-px-16 dvs-pointer-events-auto dvs-overflow-y-scroll",staticStyle:{"max-height":"70vh","min-width":"800px"}},[e._t("content")],2)])},i=[],r={name:"DeviseAdminContainer",data:function(){return{maxHeight:300}},mounted:function(){var e=this,t=window.innerHeight;this.maxHeight=.7*t,window.deviseSettings.$bus.$on("dvs-admin-container-content-changed",(function(){e.$nextTick((function(){"undefined"!==typeof e.$refs.Scrollbar&&(e.$refs.Scrollbar.calculateSize(),e.$refs.Scrollbar.scrollToY(0))}))}))}},o=r,a=n("2877"),l=Object(a["a"])(o,s,i,!1,null,null,null);t["default"]=l.exports},adf4:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("admin-container",{scopedSlots:e._u([{key:"message",fn:function(){return[e._v(" Welcome Back!"),n("br"),e._v(" What are you looking to work on? ")]},proxy:!0},{key:"content",fn:function(){return[n("ul",{staticClass:"dvs-flex dvs-flex-wrap dvs-justify-between"},e._l(e.currentMenuItems,(function(t){return n("li",{key:t.id,staticClass:"dvs-py-6 dvs-mr-8"},[t.routeName?n("div",{staticClass:"dvs-block dvs-switch-sm dvs-flex dvs-justify-between dvs-items-center dvs-cursor-pointer",on:{click:function(n){return e.goToPage(t.routeName,t.parameters)}}},[e._v(" "+e._s(t.label)+" ")]):n("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(" "+e._s(t.label)+" ")]),t.children?n("ul",{staticClass:"dvs-text-sm"},e._l(e.filteredMenu(t.children),(function(t){return n("li",{key:t.id,staticClass:"dvs-pt-3"},[t.routeName?n("div",{staticClass:"dvs-block dvs-switch-sm dvs-flex dvs-justify-between dvs-items-center dvs-cursor-pointer",on:{click:function(n){return e.goToPage(t.routeName,t.parameters)}}},[e._v(" "+e._s(t.label)+" ")]):e._e()])})),0):e._e()])})),0)]},proxy:!0}])})},i=[],r=n("53ca"),o=n("5530"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("d81d"),n("b64b"),n("b0c0"),n("2f62")),l={name:"DeviseIndex",components:{AdminContainer:function(){return Promise.resolve().then(n.bind(null,"987f"))}},computed:Object(o["a"])(Object(o["a"])({},Object(a["e"])("devise",["adminMenu"])),{},{currentMenu:function(){return this.findMenu(this.adminMenu)},currentMenuItems:function(){var e=this;return this.currentMenu.menu.filter((function(t){return!t.permissions||e.can(t.permissions)}))}}),methods:{filteredMenu:function(e){var t=this;return e.filter((function(e){return!e.permissions||t.can(e.permissions)}))},findMenu:function(e){var t=e;"object"===Object(r["a"])(e)&&(t=Object.keys(e).map((function(t){return e[t]})));for(var n=0;n<t.length;n+=1){var s=t[n];if(s.routeName===this.$route.name)return s;if(s.menu){var i=this.findMenu(s.menu);if(i)return i}}return!1}}},c=l,d=n("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports},b8f9:function(e,t){e.exports=function(e,t){var n=null;return function(){clearTimeout(n);var s=arguments,i=this;n=setTimeout((function(){e.apply(i,s)}),t)}}}}]);
//# sourceMappingURL=devise-administration.6188022b.js.map