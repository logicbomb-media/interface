(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a36ea"],{"01c6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("devise-installer-item",{attrs:{id:"nav-page",item:e.item,title:"First Page (required)"}},[a("template",{slot:"instructions"},[a("p",[e._v(" It's time to create your first page. We'd suggest maybe making your homepage. There's a lot to cover here but don't be intimidated. We will walk you through each step. ")]),a("p",[e._v(" A Devise page is built on two parts: A layout file which follows "),a("a",{attrs:{href:"https://laravel.com/docs/5.7/blade",target:"_blank"}},[e._v("Laravel's Blade System")]),e._v(" and slices. ")]),a("p",[a("strong",[e._v("What a Layout Is:")]),e._v(" A layout blade file is a file that is intended to be used across many pages. This way you don't have to set the <head>, Javascript includes, style inclues, etc on every single page. Each page that is assigned that layout extends it placing it's content where you see fit. We have provided a boilerplate for you to the right. Copy the contents and save them to \"/resources/views/main.blade.php\". ")]),a("p",[a("strong",[e._v("Language:")]),e._v(": The language should be pretty obvious: What language is this page in? But what is exciting is that if you have multiple languages you'll be able to quickly deploy localized content based on whatever language the user has selected. More on that in the official documention. For now: select your first language you created above in the sites section. ")]),a("p",[a("strong",[e._v("Slug:")]),e._v(' Finally, the slug is just the url the page lives on. The homepage slug would be "/" while an about page might live at "/about" or "/about-us". The important thing is that it is lower case, has no spaces and is prefixed with a slash. ')])]),a("template",{slot:"example"},[a("h3",{staticClass:"dvs-mb-4"},[e._v(" Create Your first Page "),e.item?[e._v("(Already Created)")]:e._e()],2),a("form",{staticClass:"dvs-mb-8",class:{"dvs-opacity-50":e.item}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Page Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.title,expression:"newPage.title"}],attrs:{type:"text",disabled:e.item},domProps:{value:e.newPage.title},on:{input:function(t){t.target.composing||e.$set(e.newPage,"title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[a("label",[e._v("Layout")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.layout,expression:"newPage.layout"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newPage,"layout",t.target.multiple?a:a[0])}}},e._l(e.layouts,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e.languages.length?a("fieldset",{staticClass:"dvs-fieldset dvs-mb-6"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.language_id,expression:"newPage.language_id"}],attrs:{disabled:e.item},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newPage,"language_id",t.target.multiple?a:a[0])}}},e._l(e.languages,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.code)+" ")])})),0)]):e._e(),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-6"},[a("label",[e._v("Slug")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.slug,expression:"newPage.slug"}],attrs:{type:"text",disabled:e.item},domProps:{value:e.newPage.slug},on:{input:function(t){t.target.composing||e.$set(e.newPage,"slug",t.target.value)}}})]),a("button",{staticClass:"dvs-btn dvs-bg-green-500 dvs-text-white",attrs:{type:"submit",disabled:e.item},on:{click:function(t){return t.preventDefault(),e.attemptCreatePage()}}},[e._v(" Create Page ")])]),a("h3",{staticClass:"dvs-mb-4"},[e._v("A solid boilerplate for your first layout file")]),a("p",[e._v(" Save the following to "),a("span",{staticClass:"dvs-font-mono"},[e._v("/resource/views/layouts/main.blade.php")])]),a("pre",{staticClass:"lang-html line-numbers"},[e._v("      "),a("code",{domProps:{innerHTML:e._s(e.layoutTemplate)}}),e._v("\n    ")])])],2)},n=[],l=a("5530"),i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2f62")),o={components:{DeviseInstallerItem:function(){return a.e("chunk-2d0aa24d").then(a.bind(null,"1080"))}},props:{item:{type:Boolean,required:!0}},data:function(){return{newPage:{site_id:1,language_id:1,published:1,title:"Homepage",layout:"main",language:null,slug:"/"},layoutTemplate:'\n        &lt;!doctype html&gt;\n        &lt;html lang="{{ app()-&gt;getLocale() }}"&gt;\n          &lt;head&gt;\n            @isset($page)\n            {!! Devise::head($page) !!}\n            @else\n            {!! Devise::head() !!}\n            @endif\n\n            @if(Auth::user())\n              &lt;link href=/devise/css/chunk-vendors.css rel=stylesheet&gt;\n              &lt;link href=/devise/css/main.css rel=stylesheet&gt;\n              &lt;link href=/devise/css/styles.css rel=stylesheet&gt;\n            @endif\n\n            &lt;meta charset="utf-8"&gt;\n            &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;\n            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;\n            &lt;meta name="csrf-token" content="{{ csrf_token() }}"&gt;\n          &lt;/head&gt;\n\n          &lt;body&gt;\n            &lt;div id="app"&gt;\n                &lt;div v-cloak&gt;\n                  &lt;devise&gt;\n                    &lt;div slot="on-top"&gt;&lt;/div&gt;\n\n                    &lt;div slot="static-content"&gt;\n                        @yield(\'content\')\n                    &lt;/div&gt;\n\n                    &lt;div slot="on-bottom"&gt;&lt;/div&gt;\n                  &lt;/devise&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n\n            &lt;script rel="prefetch" src="{{vuemix(\'js/chunk-vendors.js\', \'/devise\')}}"&gt;&lt;/script&gt;\n            &lt;script rel="prefetch" src="{{vuemix(\'js/main.js\', \'/devise\')}}"&gt;&lt;/script&gt;\n          &lt;/body&gt;\n        &lt;/html&gt;\n        '}},computed:Object(l["a"])(Object(l["a"])({},Object(i["e"])("devise",{languages:function(e){return e.languages.data}})),{},{layouts:function(){return window.deviseSettings.$config.layouts}}),methods:Object(l["a"])(Object(l["a"])({},Object(i["b"])("devise",["createPage"])),{},{attemptCreatePage:function(){this.createPage(this.newPage)}})},r=o,u=a("2877"),d=Object(u["a"])(r,s,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0a36ea.bef661bf.js.map