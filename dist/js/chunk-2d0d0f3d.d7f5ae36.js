(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0f3d"],{"69bf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{name:"dvs-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loadbarPercentage>0&&e.loadbarPercentage<1,expression:"loadbarPercentage > 0 && loadbarPercentage < 1"}],staticClass:"dvs-fixed dvs-inset-0 dvs-z-50"},[a("div",{staticClass:"dvs-blocker"}),a("div",{staticClass:"\n          dvs-text-center\n          dvs-w-1/4\n          dvs-px-4\n          dvs-py-8\n          dvs-bg-white\n          dvs-rounded\n          dvs-flex\n          dvs-flex-col\n          dvs-items-center\n          dvs-absolute\n          dvs-absolute-center\n          dvs-z-50\n        "},[a("h6",{staticClass:"dvs-mb-2 dvs-text-action dvs-uppercase dvs-text-xs"},[e._v("Just a moment")]),a("div",{staticClass:"dvs-loadbar"},[a("div",{staticClass:"dvs-bar dvs-background",style:{width:100*e.loadbarPercentage+"%"}})])])])])],1)},d=[],n=(a("a9e3"),{props:{percentage:{type:Number,default:-1}},data:function(){return{loadbarPercentage:0,modulesLoaded:0}},watch:{percentage:function(e){this.loadbarPercentage=e}},mounted:function(){this.percentage>0?this.loadbarPercentage=this.percentage:this.addListeners()},methods:{addListeners:function(){window.deviseSettings.$bus.$on("incrementLoadbar",this.incrementLoadbar)},incrementLoadbar:function(e){this.modulesLoaded+=1,this.loadbarPercentage=this.modulesLoaded/e,this.checkIfLoaded()},checkIfLoaded:function(){var e=this;this.loadbarPercentage>=1&&(this.showLoadbar=!1,setTimeout((function(){e.loadbarPercentage=0,e.modulesLoaded=0}),1e3))}}}),r=n,o=a("2877"),i=Object(o["a"])(r,s,d,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d0f3d.d7f5ae36.js.map