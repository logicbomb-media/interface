(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2382b5"],{fdde:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Page Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.title,expression:"newPage.title"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Title of the Page"},domProps:{value:e.newPage.title},on:{input:function(t){t.target.composing||e.$set(e.newPage,"title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.language_id,expression:"newPage.language_id"}],staticClass:"dvs-w-full",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newPage,"language_id",t.target.multiple?a:a[0])}}},[a("option",{domProps:{value:null}},[e._v("Please select a language")]),e._l(e.languages.data,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.code)+" ")])}))],2)]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Slug")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.slug,expression:"newPage.slug"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Url of the Page"},domProps:{value:e.newPage.slug},on:{input:function(t){t.target.composing||e.$set(e.newPage,"slug",t.target.value)}}})])]),a("button",{staticClass:"dvs-btn dvs-btn-primary mr-4",attrs:{disabled:e.createInvalid},on:{click:e.requestTranslatePage}},[e._v(" Create ")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary",on:{click:e.cancel}},[e._v("Cancel")])])},l=[],s=a("5530"),i=(a("d3b7"),a("ddb0"),a("2f62")),u={name:"DevisePagesTranslate",props:{values:{type:Object,required:!0}},data:function(){return{newPage:{language_id:null,title:null,slug:null}}},computed:Object(s["a"])(Object(s["a"])({},Object(i["e"])("devise",["languages"])),{},{createInvalid:function(){return null===this.newPage.title||null===this.newPage.language_id||null===this.newPage.slug},layouts:function(){return window.deviseSettings.$config.layouts}}),mounted:function(){this.loadLanguages()},methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])("devise",["translatePage","getGeneric"])),{},{requestTranslatePage:function(){var e=this;this.translatePage({data:this.newPage,page:this.values}).then((function(){e.$emit("done")}))},loadLanguages:function(){var e=this;this.getGeneric({config:{apiendpoint:"languages",store:"languages"}}).then((function(t){t.data&&t.data.data&&t.data.data.length>0&&(e.newPage.language_id=t.data.data[0].id)}))},cancel:function(){this.$emit("cancel")}})},d=u,o=a("2877"),g=Object(o["a"])(d,n,l,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d2382b5.12f35dd5.js.map