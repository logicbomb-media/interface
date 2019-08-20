(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-administration"],{"66ed":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.currentStep?s("admin-container",{scopedSlots:e._u([{key:"message",fn:function(){return[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"dvs-cursor-pointer dvs-flex dvs-flex-col dvs-items-center",on:{click:e.back}},[s("arrow-left-circle-icon",{staticClass:"mb-1"}),s("span",{staticClass:"dvs-text-2xs dvs-uppercase"},[e._v("Back")])],1),s("div",{staticClass:"dvs-px-8",domProps:{innerHTML:e._s(e.currentStep.message)}})])]},proxy:!0},{key:"content",fn:function(){return[s("transition",{attrs:{name:"dvs-fade",mode:"out-in"}},[s(e.currentStep.component,{tag:"component",attrs:{step:e.currentStep,values:e.values},on:{done:e.done,cancel:e.cancel}})],1)]},proxy:!0}],null,!1,1268363295)}):e._e()},r=[],i=s("5176"),a=s.n(i),o=(s("ac6a"),s("7514"),{name:"DeviseWorkflow",components:{AdminContainer:function(){return Promise.resolve().then(s.bind(null,"987f"))},ArrowLeftCircleIcon:function(){return s.e("devise-icons").then(s.bind(null,"2f56"))},WorkflowMenu:function(){return Promise.resolve().then(s.bind(null,"8768"))},WorkflowSearch:function(){return Promise.resolve().then(s.bind(null,"704d"))}},props:{workflow:{type:Array,required:!0}},computed:{index:function(){return this.workflow.find(function(e){return e.index})},currentStep:function(){return this.workflowStack.slice(-1)[0]},values:function(){var e={};return this.workflowStack.forEach(function(t){e=a()(e,t.value)}),e}},data:function(){return{workflowStack:[]}},mounted:function(){this.index&&this.workflowStack.push(this.index)},methods:{done:function(e){this.workflowStack[this.workflowStack.length-1].value=e,this.loadStep()},cancel:function(){this.clearStack()},back:function(){this.workflowStack.length>1?(this.workflowStack.splice(-1,1),delete this.currentStep.value):this.$router.go(-1)},loadStep:function(){var e=null;if(this.currentStep.end)this.clearStack();else{var t=this.workflowStack[this.workflowStack.length-2],s=this.currentStep.value.nextStep;s?e=this.workflow.find(function(e){return e.key===s}):t&&t.value.stepAfterNext&&(e=this.workflow.find(function(e){return e.key===t.value.stepAfterNext})),e?this.workflowStack.push(e):console.warn("There is no step registered as ".concat(e))}},clearStack:function(){this.workflowStack=[this.index]}}}),c=o,d=s("0c7c"),u=Object(d["a"])(c,n,r,!1,null,null,null);t["default"]=u.exports},"704d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"dvs-flex dvs-justify-center dvs-py-8 dvs-relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"dvs-bg-transparent dvs-border-b-2 dvs-px-12 dvs-py-2 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:"Type to begin searching"},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),s("div",{staticClass:"dvs-cursor-pointer",class:{"dvs-opacity-50":""===e.searchTerm},on:{click:function(t){e.searchTerm=""}}},[s("x-icon")],1)]),s("ul",{staticClass:"dvs-list-reset"},e._l(e.autosuggest.data,function(t,n){return s("li",{key:n,staticClass:"dvs-bg-admin-bg dvs-shadow hover:dvs-shadow-lg dvs-rounded dvs-my-4 dvs-p-2 dvs-cursor-pointer",on:{click:function(s){return e.selectSuggestion(t)}}},[s("div",{staticClass:"dvs-text-lg dvs-mb-2"},[e._v(e._s(t[e.mainLabelField]))]),s("ul",{staticClass:"dvs-list-reset dvs-flex"},e._l(e.subLabelFields,function(n,r){return s("li",{key:r,staticClass:"dvs-mr-4 dvs-text-xs dvs-leading-tight"},[s("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(e._s(n.label))]),s("div",[e._v(e._s(e.format(n,t[n.field])))])])}),0)])}),0),""!==e.searchTerm&&e.autosuggest.data&&e.autosuggest.data.length<1?s("div",{staticClass:"dvs-text-center"},[e._v("\n    No search results found\n  ")]):e._e()])},r=[],i=s("5176"),a=s.n(i),o=s("cebc"),c=s("f499"),d=s.n(c),u=s("2f62"),l=s("5a0c"),v=s.n(l),f={name:"DeviseWorkflowSearch",components:{XIcon:function(){return s.e("devise-icons").then(s.bind(null,"1a4e"))}},props:{step:{type:Object,required:!0}},data:function(){return{searchDelay:1e3,searchTerm:"",autosuggest:{data:[]}}},computed:{options:function(){return this.step.options},mainLabelField:function(){return this.step.resultsDisplayFields[0].field},subLabelFields:function(){var e=JSON.parse(d()(this.step.resultsDisplayFields));return e.shift(),e}},methods:Object(o["a"])({},Object(u["b"])("devise",["searchGeneric"]),{requestSearch:function(e){var t=this;if(""!==e){var s={};s[this.step.searchPropertyName]=e,this.searchGeneric({config:{apiendpoint:this.step.apiendpoint},filters:s}).then(function(s){t.autosuggest=s.data,s.data.length<1&&window.deviseSettings.$bus.$emit("showMessage",{title:"No Suggestions Found",message:"We couldn't find any data with the term: \"".concat(e,'".')})})}else this.autosuggest=a()({},{})},selectSuggestion:function(e){this.$emit("done",e)},format:function(e,t){return e.dateFormat?v()(t).format(e.dateFormat):t}}),watch:{searchTerm:function(e){this.requestSearch(e)}}},p=f,m=s("0c7c"),h=Object(m["a"])(p,n,r,!1,null,null,null);t["default"]=h.exports},8768:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.options,function(t,n){return s("div",{key:n,staticClass:"dvs-bg-white dvs-cursor-pointer dvs-text-admin-bg dvs-text-center dvs-py-3 dvs-px-8 dvs-my-4 dvs-shadow dvs-rounded",domProps:{innerHTML:e._s(t.label)},on:{click:function(s){return e.chooseOption(t)}}})}),0)},r=[],i={name:"DeviseWorkflowMenu",props:{step:{type:Object,required:!0}},computed:{options:function(){return this.step.options}},methods:{chooseOption:function(e){this.$emit("done",e)}}},a=i,o=s("0c7c"),c=Object(o["a"])(a,n,r,!1,null,null,null);t["default"]=c.exports},"987f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-absolute dvs-pin dvs-flex dvs-justify-center dvs-items-start dvs-mt-10"},[s("div",{staticClass:"dvs-z-10 dvs-bg-white dvs-text-admin-bg dvs-max-w-1/3 dvs-rounded-lg dvs-shadow-xl dvs-absolute dvs-pin-t dvs--mt-10 dvs-px-8 dvs-py-4 dvs-font-light dvs-text-center dvs-leading-tight dvs-text-sm dvs-pointer-events-auto"},[e._t("message")],2),s("div",{staticClass:"dvs-relative dvs-bg-admin-bg dvs-rounded dvs-shadow-lg dvs-max-w-3/4 dvs-min-w-1/2 dvs-py-10 dvs-pointer-events-auto"},[s("vue-scrollbar",{ref:"scrollbar",staticClass:" dvs-px-10",style:{maxHeight:e.maxHeight+"px"}},[e._t("content")],2)],1)])},r=[],i={name:"DeviseAdminContainer",data:function(){return{maxHeight:300}},mounted:function(){var e=window.innerHeight;this.maxHeight=.7*e}},a=i,o=s("0c7c"),c=Object(o["a"])(a,n,r,!1,null,null,null);t["default"]=c.exports},adf4:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("admin-container",{scopedSlots:e._u([{key:"message",fn:function(){return[e._v("\n    Welcome Back!"),s("br"),e._v("\n    What are you looking to work on?\n  ")]},proxy:!0},{key:"content",fn:function(){return[s("ul",{staticClass:"dvs-list-reset dvs-flex dvs-flex-wrap dvs-justify-between"},e._l(e.currentMenuItems,function(t,n){return s("li",{key:t.id,staticClass:"dvs-py-6 dvs-mr-8"},[t.routeName?s("div",{staticClass:"dvs-block dvs-switch-sm dvs-flex dvs-justify-between dvs-items-center dvs-cursor-pointer",on:{click:function(s){return e.goToPage(t.routeName,t.parameters)}}},[e._v(e._s(t.label))]):s("div",{staticClass:"dvs-uppercase dvs-text-xs dvs-text-admin-secondary-fg"},[e._v(e._s(t.label))]),t.children?s("ul",{staticClass:"dvs-list-reset dvs-text-sm"},e._l(t.children,function(t){return s("li",{key:t.id,staticClass:"dvs-pt-3"},[t.routeName?s("div",{staticClass:"dvs-block dvs-switch-sm dvs-flex dvs-justify-between dvs-items-center dvs-cursor-pointer",on:{click:function(s){return e.goToPage(t.routeName,t.parameters)}}},[e._v(e._s(t.label))]):e._e()])}),0):e._e()])}),0)]},proxy:!0}])})},r=[],i=s("cebc"),a=(s("7f7f"),s("a4bb")),o=s.n(a),c=s("7618"),d=s("2f62"),u={name:"DeviseIndex",components:{AdminContainer:function(){return Promise.resolve().then(s.bind(null,"987f"))}},methods:{findMenu:function(e){var t=e;"object"===Object(c["a"])(e)&&(t=o()(e).map(function(t){return e[t]}));for(var s=0;s<t.length;s+=1){var n=t[s];if(n.routeName===this.$route.name)return n;if(n.menu){var r=this.findMenu(n.menu);if(r)return r}}return!1}},computed:Object(i["a"])({},Object(d["e"])("devise",["adminMenu"]),{currentMenu:function(){return this.findMenu(this.adminMenu)},currentMenuItems:function(){var e=this;return this.currentMenu.menu.filter(function(t){return!t.permissions||e.can(t.permissions)})}})},l=u,v=s("0c7c"),f=Object(v["a"])(l,n,r,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=devise-administration.ee86bad1.js.map