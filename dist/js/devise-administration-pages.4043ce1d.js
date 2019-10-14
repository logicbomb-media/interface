(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-administration-pages"],{1771:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.title,expression:"localValue.title"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Title of the Page"},domProps:{value:e.localValue.title},on:{input:function(t){t.target.composing||e.$set(e.localValue,"title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Slug")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.slug,expression:"localValue.slug"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Url of the Page"},domProps:{value:e.localValue.slug},on:{input:function(t){t.target.composing||e.$set(e.localValue,"slug",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Meta Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.meta_title,expression:"localValue.meta_title"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Meta title of the Page"},domProps:{value:e.localValue.meta_title},on:{input:function(t){t.target.composing||e.$set(e.localValue,"meta_title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[a("label",[e._v("\n      Canonical\n      "),a("help",{attrs:{compact:!0}},[e._v("The canonical link element helps webmasters make clear to the search engines which page should be credited as the original."),a("br"),a("br"),a("a",{staticClass:"dvs-underline dvs-text-admin-highlight-fg dvs-font-bold",attrs:{href:"https://en.wikipedia.org/wiki/Canonical_link_element",target:"_blank"}},[e._v("Wikipedia Entry")])])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.canonical,expression:"localValue.canonical"}],staticClass:"w-full",attrs:{type:"text",placeholder:"Canonical"},domProps:{value:e.localValue.canonical},on:{input:function(t){t.target.composing||e.$set(e.localValue,"canonical",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[a("label",[e._v("Additional Meta Tags")]),a("meta-form",{attrs:{"global-form":!1},on:{"request-create-meta":e.requestCreateMeta,"request-update-meta":e.requestUpdateMeta,"request-delete-meta":e.requestDeleteMeta},model:{value:e.localValue.meta,callback:function(t){e.$set(e.localValue,"meta",t)},expression:"localValue.meta"}})],1),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[a("label",[e._v("\n      Additional code in <head>\n      "),a("help",{attrs:{compact:!0}},[e._v("Code will be output exactly as you place it in here so you need to wrap JavaScript with ≶script> tags.")])],1),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.localValue.head,expression:"localValue.head"}],staticClass:"dvs-w-full",domProps:{value:e.localValue.head},on:{input:function(t){t.target.composing||e.$set(e.localValue,"head",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[a("label",[e._v("\n      Additional code at the bottom of the page code?\n      "),a("help",{attrs:{compact:!0}},[e._v("Code will be output exactly as you place it in here so you need to wrap JavaScript with ≶script> tags.")])],1),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.localValue.footer,expression:"localValue.footer"}],staticClass:"dvs-w-full",domProps:{value:e.localValue.footer},on:{input:function(t){t.target.composing||e.$set(e.localValue,"footer",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Middleware")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.middleware,expression:"localValue.middleware"}],staticClass:"dvs-w-full",attrs:{type:"text"},domProps:{value:e.localValue.middleware},on:{input:function(t){t.target.composing||e.$set(e.localValue,"middleware",t.target.value)}}})]),a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-4",attrs:{disabled:e.editInvalid},on:{click:e.requestEditPage}},[e._v("Edit Page")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs",on:{click:e.cancel}},[e._v("Cancel")])])},s=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("7f7f"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={name:"DevisePagesEditSettings",components:{MetaForm:function(){return a.e("devise-meta").then(a.bind(null,"bcdb"))},Help:function(){return a.e("devise-utilities").then(a.bind(null,"a31e"))}},props:{values:{type:Object,required:!0}},data:function(){return{localValue:{},showPassword:!1}},computed:o({},Object(i["e"])("devise",["languages"]),{editInvalid:function(){return null===this.localValue.name||null===this.localValue.email||null===this.localValue.password||null===this.localValue.password_confirmation||this.localValue.password!==this.localValue.password_confirmation},layouts:function(){return window.deviseSettings.$config.layouts}}),mounted:function(){this.localValue=o({},this.values)},methods:o({},Object(i["b"])("devise",["updateGeneric"]),{requestEditPage:function(){var e=this;this.updateGeneric({config:{apiendpoint:"pages",recordLabel:"title"},record:this.localValue}).then(function(){e.$emit("done")})},requestCreateMeta:function(e){this.localValue.meta.push(e)},requestUpdateMeta:function(e){e.edit=!1},requestDeleteMeta:function(e){this.localValue.meta.splice(this.localValue.meta.indexOf(e),1)},cancel:function(){this.$emit("cancel")}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},"1c7e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Page Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.title,expression:"newPage.title"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Title of the Page"},domProps:{value:e.newPage.title},on:{input:function(t){t.target.composing||e.$set(e.newPage,"title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.language_id,expression:"newPage.language_id"}],staticClass:"dvs-w-full",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.newPage,"language_id",t.target.multiple?a:a[0])}}},[a("option",{domProps:{value:null}},[e._v("Please select a language")]),e._l(e.languages.data,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.code)+"\n      ")])})],2)]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Slug")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.slug,expression:"newPage.slug"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Url of the Page"},domProps:{value:e.newPage.slug},on:{input:function(t){t.target.composing||e.$set(e.newPage,"slug",t.target.value)}}})])]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Layout")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.layout,expression:"newPage.layout"}],staticClass:"w-full",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.newPage,"layout",t.target.multiple?a:a[0])}}},e._l(e.layouts,function(t,n){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(n))])}),0)]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Published?")]),a("div",{staticClass:"dvs-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.published,expression:"newPage.published"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.newPage.published)?e._i(e.newPage.published,null)>-1:e.newPage.published},on:{change:function(t){var a=e.newPage.published,n=t.target,s=!!n.checked;if(Array.isArray(a)){var l=null,i=e._i(a,l);n.checked?i<0&&e.$set(e.newPage,"published",a.concat([l])):i>-1&&e.$set(e.newPage,"published",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.newPage,"published",s)}}})])]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Go to page after creation?")]),a("div",{staticClass:"dvs-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.redirect,expression:"redirect"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.redirect)?e._i(e.redirect,null)>-1:e.redirect},on:{change:function(t){var a=e.redirect,n=t.target,s=!!n.checked;if(Array.isArray(a)){var l=null,i=e._i(a,l);n.checked?i<0&&(e.redirect=a.concat([l])):i>-1&&(e.redirect=a.slice(0,i).concat(a.slice(i+1)))}else e.redirect=s}}})])]),a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-4",attrs:{disabled:e.createInvalid},on:{click:e.requestCreatePage}},[e._v("Create")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs",on:{click:e.cancel}},[e._v("Cancel")])])},s=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("8615"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={name:"DevisePagesCreate",data:function(){return{redirect:!0,newPage:{layout:"",language_id:null,translated_from_page_id:0,title:null,slug:null,canonical:null,head:null,footer:null,middleware:"web",published:!0}}},computed:o({},Object(i["e"])("devise",["languages"]),{createInvalid:function(){return null===this.newPage.title||null===this.newPage.layout&&!this.newPage.copy_page&&0===this.newPage.copy_page_id||null===this.newPage.language_id||null===this.newPage.slug},layouts:function(){return window.deviseSettings.$config.layouts}}),mounted:function(){this.loadLanguages(),this.selectLayout()},methods:o({},Object(i["b"])("devise",["createGeneric","getGeneric"]),{requestCreatePage:function(){var e=this;this.createGeneric({config:{apiendpoint:"pages",recordLabel:"title"},record:this.newPage}).then(function(){e.redirect?setTimeout(function(){window.location.href=e.newPage.slug},1e3):e.$emit("done")})},loadLanguages:function(){var e=this;this.getGeneric({config:{apiendpoint:"languages",store:"languages"}}).then(function(t){t.data&&t.data.data&&t.data.data.length>0&&(e.newPage.language_id=t.data.data[0].id)})},selectLayout:function(){this.newPage.layout=Object.values(this.layouts)[0]},cancel:function(){this.$emit("cancel")}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},3623:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("Loading Page Data")])},s=[],l=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={props:{step:{type:Object,required:!0},values:{type:Object,required:!0}},mounted:function(){this.step.jumpedTo?this.requestPage():this.$emit("cancel")},methods:o({},Object(i["b"])("devise",["getPage"]),{requestPage:function(){var e=this;this.getPage(this.step.jumpedToParams.pageId).then(function(t){e.$emit("done",t.data.page)})}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},"504c":function(e,t,a){var n=a("9e1e"),s=a("0d58"),l=a("6821"),i=a("52a7").f;e.exports=function(e){return function(t){var a,r=l(t),o=s(r),c=o.length,u=0,d=[];while(c>u)a=o[u++],n&&!i.call(r,a)||d.push(e?[a,r[a]]:r[a]);return d}}},8321:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex justify-center"},[a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-btn-lg mr-4",on:{click:e.requestDeletePage}},[e._v("Remove Page")])])},s=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={name:"DevisePagesDelete",props:{values:{type:Object,required:!0}},methods:o({},Object(i["b"])("devise",["deleteGeneric"]),{requestDeletePage:function(){var e=this;this.deleteGeneric({config:{apiendpoint:"pages",recordLabel:"title"},record:this.values}).then(function(){e.$emit("done")})},cancel:function(){this.$emit("cancel")}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},8615:function(e,t,a){var n=a("5ca1"),s=a("504c")(!1);n(n.S,"Object",{values:function(e){return s(e)}})},c6d5:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"dvs-mb-8"},[a("help",[e._v("Page versions allow your team to create alternate versions of a page for devlopment, historical purposes, and for A/B testing which allow you to run two pages at once to test user success rates")])],1),a("div",{staticClass:"dvs-flex dvs-justify-around dvs-flex-wrap"},e._l(e.localValue.versions,function(t,n){return a("div",{key:n,staticClass:"dvs-rounded dvs-shadow-lg dvs-mb-4 dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg dvs-w-2/5"},[t.is_live?a("div",{staticClass:"dvs-text-admin-highlight-fg dvs-bg-admin-highlight-bg dvs-text-sm dvs-uppercase dvs-p-2 dvs-font-bold dvs-text-center"},[e._v("(Currently Live)")]):e._e(),a("div",{staticClass:" dvs-p-6"},[a("div",{staticClass:"dvs-text-base dvs-font-bold dvs-mb-4 dvs-flex dvs-justify-between"},[e._v("\n          "+e._s(t.name)+"\n        ")]),a("div",[a("div",[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Version Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue.versions[n].name,expression:"localValue.versions[key].name"}],staticClass:"dvs-w-full",attrs:{type:"text"},domProps:{value:e.localValue.versions[n].name},on:{input:function(t){t.target.composing||e.$set(e.localValue.versions[n],"name",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Layout")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.localValue.versions[n].layout,expression:"localValue.versions[key].layout"}],staticClass:"dvs-w-full",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.localValue.versions[n],"layout",t.target.multiple?a:a[0])}}},e._l(e.layouts,function(t,n){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(n))])}),0)]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Start Date")]),a("date-picker",{attrs:{settings:{date:!0,time:!0},placeholder:"Start Date",title:"The date in which this version will begin appearing."},model:{value:e.localValue.versions[n].starts_at,callback:function(t){e.$set(e.localValue.versions[n],"starts_at",t)},expression:"localValue.versions[key].starts_at"}})],1),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("End Date")]),a("date-picker",{attrs:{settings:{date:!0,time:!0},placeholder:"End Date",title:"The date when this page version will stop appearing. This page will either fall back to another page version or produce a 404: Page Not Found if a user attempts to load it."},model:{value:e.localValue.versions[n].ends_at,callback:function(t){e.$set(e.localValue.versions[n],"ends_at",t)},expression:"localValue.versions[key].ends_at"}})],1),e.localValue.ab_testing_enabled?a("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[a("label",[e._v("A/B Testing Amount")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.localValue.versions[n].ab_testing_amount,expression:"localValue.versions[key].ab_testing_amount",modifiers:{number:!0}}],attrs:{type:"number",title:"This is the weight in which a page will show up. The number can be any number you want and is divided by the total weights of all other page versions."},domProps:{value:e.localValue.versions[n].ab_testing_amount},on:{input:function(t){t.target.composing||e.$set(e.localValue.versions[n],"ab_testing_amount",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]):e._e()]),a("div",{staticClass:"dvs-flex dvs-flex-wrap"},[a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-sm dvs-px-4 dvs-mr-2",attrs:{title:"Save Version Settings"},on:{click:function(a){return e.requestSaveVersion(t)}}},[a("checkmark-icon",{attrs:{w:"30",h:"30"}})],1),a("button",{staticClass:"dvs-btn dvs-bg-admin-bg dvs-text-admin-fg dvs-text-sm dvs-px-4 dvs-mr-2",attrs:{title:"Copy Version"},on:{click:function(a){return e.requestCopyVersion(t)}}},[a("copy-icon",{attrs:{w:"30",h:"30"}})],1),a("button",{directives:[{name:"devise-alert-confirm",rawName:"v-devise-alert-confirm",value:{callback:e.requestDeleteVersion,arguments:t,message:"Are you sure you want to delete this version?"},expression:"{callback: requestDeleteVersion, arguments:version, message: 'Are you sure you want to delete this version?'}"}],staticClass:"dvs-btn dvs-bg-admin-bg dvs-text-admin-fg dvs-text-sm dvs-px-4",attrs:{title:"Delete Version"}},[a("trash-icon",{attrs:{w:"30",h:"30"}})],1)])])])])}),0)])},s=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={name:"DevisePagesEditSettings",components:{DatePicker:function(){return a.e("devise-utilities").then(a.bind(null,"7e6e"))},TrashIcon:function(){return a.e("devise-icons").then(a.bind(null,"b02d"))},CopyIcon:function(){return a.e("devise-icons").then(a.bind(null,"01de"))},CheckmarkIcon:function(){return a.e("devise-icons").then(a.bind(null,"8412"))},Help:function(){return a.e("devise-utilities").then(a.bind(null,"a31e"))}},props:{values:{type:Object,required:!0}},data:function(){return{localValue:{},showPassword:!1}},computed:{layouts:function(){return window.deviseSettings.$config.layouts}},mounted:function(){this.localValue=o({},this.values)},methods:o({},Object(i["b"])("devise",["updatePageVersion","copyPageVersion","deletePageVersion"]),{requestSaveVersion:function(e){this.updatePageVersion({page:this.localValue,version:e})},requestCopyVersion:function(e){this.copyPageVersion({page:this.localValue,version:e})},requestDeleteVersion:function(e){this.deletePageVersion({page:this.localValue,version:e})},done:function(){this.$emit("done")}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},f19d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Page Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.title,expression:"newPage.title"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Title of the Page"},domProps:{value:e.newPage.title},on:{input:function(t){t.target.composing||e.$set(e.newPage,"title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.language_id,expression:"newPage.language_id"}],staticClass:"dvs-w-full",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.newPage,"language_id",t.target.multiple?a:a[0])}}},[a("option",{domProps:{value:null}},[e._v("Please select a language")]),e._l(e.languages.data,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.code)+"\n      ")])})],2)]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Slug")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.slug,expression:"newPage.slug"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Url of the Page"},domProps:{value:e.newPage.slug},on:{input:function(t){t.target.composing||e.$set(e.newPage,"slug",t.target.value)}}})])]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Published?")]),a("div",{staticClass:"dvs-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.published,expression:"newPage.published"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.newPage.published)?e._i(e.newPage.published,null)>-1:e.newPage.published},on:{change:function(t){var a=e.newPage.published,n=t.target,s=!!n.checked;if(Array.isArray(a)){var l=null,i=e._i(a,l);n.checked?i<0&&e.$set(e.newPage,"published",a.concat([l])):i>-1&&e.$set(e.newPage,"published",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.newPage,"published",s)}}})])]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Go to page after creation?")]),a("div",{staticClass:"dvs-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.redirect,expression:"redirect"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.redirect)?e._i(e.redirect,null)>-1:e.redirect},on:{change:function(t){var a=e.redirect,n=t.target,s=!!n.checked;if(Array.isArray(a)){var l=null,i=e._i(a,l);n.checked?i<0&&(e.redirect=a.concat([l])):i>-1&&(e.redirect=a.slice(0,i).concat(a.slice(i+1)))}else e.redirect=s}}})])]),a("button",{staticClass:"dvs-btn dvs-btn-primary dvs-text-xs mr-4",attrs:{disabled:e.createInvalid},on:{click:e.requestCopyPage}},[e._v("Create")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary dvs-text-xs ",on:{click:e.cancel}},[e._v("Cancel")])])},s=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={name:"DevisePagesCopy",props:{values:{type:Object,required:!0}},data:function(){return{redirect:!0,newPage:{layout:"",language_id:null,translated_from_page_id:0,title:null,slug:null,canonical:null,head:null,footer:null,middleware:"web",published:!0,copy_page_id:0}}},computed:o({},Object(i["e"])("devise",["languages"]),{createInvalid:function(){return null===this.newPage.title||null===this.newPage.language_id||null===this.newPage.slug},layouts:function(){return window.deviseSettings.$config.layouts}}),mounted:function(){this.loadLanguages()},methods:o({},Object(i["b"])("devise",["createGeneric","getGeneric"]),{requestCopyPage:function(){var e=this;this.newPage.copy_page_id=this.values.id,this.createGeneric({config:{apiendpoint:"pages",recordLabel:"title"},record:this.newPage}).then(function(){e.redirect?setTimeout(function(){window.location.href=e.newPage.slug},1e3):e.$emit("done")})},loadLanguages:function(){var e=this;this.getGeneric({config:{apiendpoint:"languages",store:"languages"}}).then(function(t){t.data&&t.data.data&&t.data.data.length>0&&(e.newPage.language_id=t.data.data[0].id)})},cancel:function(){this.$emit("cancel")}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports},fdde:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(e){e.preventDefault()}}},[a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Page Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.title,expression:"newPage.title"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Title of the Page"},domProps:{value:e.newPage.title},on:{input:function(t){t.target.composing||e.$set(e.newPage,"title",t.target.value)}}})]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Language")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newPage.language_id,expression:"newPage.language_id"}],staticClass:"dvs-w-full",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.newPage,"language_id",t.target.multiple?a:a[0])}}},[a("option",{domProps:{value:null}},[e._v("Please select a language")]),e._l(e.languages.data,function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.code)+"\n      ")])})],2)]),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("Slug")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPage.slug,expression:"newPage.slug"}],staticClass:"dvs-w-full",attrs:{type:"text",placeholder:"Url of the Page"},domProps:{value:e.newPage.slug},on:{input:function(t){t.target.composing||e.$set(e.newPage,"slug",t.target.value)}}})])]),a("button",{staticClass:"dvs-btn dvs-btn-primary mr-4",attrs:{disabled:e.createInvalid},on:{click:e.requestTranslatePage}},[e._v("Create")]),a("button",{staticClass:"dvs-btn dvs-btn-secondary",on:{click:e.cancel}},[e._v("Cancel")])])},s=[],l=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),i=a("2f62");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(a,!0).forEach(function(t){Object(l["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var c={name:"DevisePagesTranslate",props:{values:{type:Object,required:!0}},data:function(){return{newPage:{language_id:null,title:null,slug:null}}},computed:o({},Object(i["e"])("devise",["languages"]),{createInvalid:function(){return null===this.newPage.title||null===this.newPage.language_id||null===this.newPage.slug},layouts:function(){return window.deviseSettings.$config.layouts}}),mounted:function(){this.loadLanguages()},methods:o({},Object(i["b"])("devise",["translatePage","getGeneric"]),{requestTranslatePage:function(){var e=this;this.translatePage({data:this.newPage,page:this.values}).then(function(){e.$emit("done")})},loadLanguages:function(){var e=this;this.getGeneric({config:{apiendpoint:"languages",store:"languages"}}).then(function(t){t.data&&t.data.data&&t.data.data.length>0&&(e.newPage.language_id=t.data.data[0].id)})},cancel:function(){this.$emit("cancel")}})},u=c,d=a("2877"),v=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=devise-administration-pages.4043ce1d.js.map