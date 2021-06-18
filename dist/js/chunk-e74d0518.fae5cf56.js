(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e74d0518"],{"49d5":function(t,e,i){"use strict";(function(e){
/**
 * filesize
 *
 * @copyright 2019 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 4.2.1
 */
(function(e){var i=/^(b|B)$/,s={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],l=0,o=void 0,d=void 0,u=void 0,r=void 0,c=void 0,m=void 0,h=void 0,v=void 0,g=void 0,b=void 0,f=void 0,p=void 0,w=void 0,x=void 0,y=void 0,C=void 0,_=void 0;if(isNaN(t))throw new TypeError("Invalid number");return u=!0===e.bits,w=!0===e.unix,d=e.base||2,p=void 0!==e.round?e.round:w?1:2,h=void 0!==e.locale?e.locale:"",v=e.localeOptions||{},x=void 0!==e.separator?e.separator:"",y=void 0!==e.spacer?e.spacer:w?"":" ",_=e.symbols||{},C=2===d&&e.standard||"jedec",f=e.output||"string",c=!0===e.fullform,m=e.fullforms instanceof Array?e.fullforms:[],o=void 0!==e.exponent?e.exponent:-1,b=Number(t),g=b<0,r=d>2?1e3:1024,g&&(b=-b),(-1===o||isNaN(o))&&(o=Math.floor(Math.log(b)/Math.log(r)),o<0&&(o=0)),o>8&&(o=8),"exponent"===f?o:(0===b?(n[0]=0,n[1]=w?"":s[C][u?"bits":"bytes"][o]):(l=b/(2===d?Math.pow(2,10*o):Math.pow(1e3,o)),u&&(l*=8,l>=r&&o<8&&(l/=r,o++)),n[0]=Number(l.toFixed(o>0?p:0)),n[0]===r&&o<8&&void 0===e.exponent&&(n[0]=1,o++),n[1]=10===d&&1===o?u?"kb":"kB":s[C][u?"bits":"bytes"][o],w&&(n[1]="jedec"===C?n[1].charAt(0):o>0?n[1].replace(/B$/,""):n[1],i.test(n[1])&&(n[0]=Math.floor(n[0]),n[1]=""))),g&&(n[0]=-n[0]),n[1]=_[n[1]]||n[1],!0===h?n[0]=n[0].toLocaleString():h.length>0?n[0]=n[0].toLocaleString(h,v):x.length>0&&(n[0]=n[0].toString().replace(".",x)),"array"===f?n:(c&&(n[1]=m[o]?m[o]:a[C][o]+(u?"bit":"byte")+(1===n[0]?"":"s")),"object"===f?{value:n[0],symbol:n[1]}:n.join(y)))}n.partial=function(t){return function(e){return n(e,t)}},t.exports=n})("undefined"!==typeof window&&window)}).call(this,i("c8ba"))},"965e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("field-editor",{attrs:{options:t.options,"show-editor":t.showEditor},on:{toggleShowEditor:t.toggleEditor,cancel:t.cancel,resetvalue:t.resetValue,change:t.update},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("template",{slot:"preview"},[null===t.url||""===t.url?i("span",{staticClass:"dvs-italic"},[t._v(" Currently No Value ")]):t._e(),i("img",{staticClass:"dvs-max-w-2xs",attrs:{src:t.url,alt:t.url}}),i("br")]),i("template",{slot:"editor"},[i("label",{staticClass:"dvs-mb-2 dvs-block dvs-font-bold"},[t._v("Image Tool To Use:")]),i("div",{staticClass:"dvs-flex dvs-mb-2"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],staticClass:"dvs-w-auto dvs-mr-2",attrs:{type:"radio",value:"media"},domProps:{checked:t._q(t.mode,"media")},on:{change:function(e){t.mode="media"}}}),t._v(" Media Manager ")])]),i("div",{staticClass:"dvs-flex dvs-mb-8"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],staticClass:"dvs-w-auto dvs-mr-2",attrs:{type:"radio",value:"manual"},domProps:{checked:t._q(t.mode,"manual")},on:{change:function(e){t.mode="manual"}}}),t._v(" Manual URL ")])]),"manual"===t.mode?i("fieldset",{staticClass:"dvs-fieldset"},[i("label",[t._v("URL")]),i("div",{staticClass:"dvs-flex dvs-items-center"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})])]):i("fieldset",{staticClass:"dvs-fieldset"},[i("div",{staticClass:"flex"},[t.value.url&&Object.keys(t.media).length>0?i("div",{staticClass:"dvs-mb-8 dvs-mr-4",on:{click:function(e){return t.launchMediaEditor(e)}}},[i("button",{staticClass:"dvs-btn dvs-btn-sm dvs-btn-primary"},[t._v("Edit Current Media")])]):t._e(),i("div",{staticClass:"dvs-mb-8 dvs-mr-4",on:{click:function(e){return t.launchMediaManager(e)}}},[i("button",{staticClass:"dvs-btn dvs-btn-sm dvs-btn-primary"},[t._v("Select New Media")])])]),i("div",{staticClass:"dvs-flex dvs-items-center"},[t.hasMedia?i("div",[i("div",{staticClass:"dvs-mb-4 uppercase font-bold text-sm"},[t._v("Media sizes")]),i("div",{staticClass:"dvs-flex dvs-flex-wrap"},t._l(t.media,(function(t,e){return i("div",{key:e,staticClass:"\n                dvs-uppercase dvs-text-center dvs-mr-4 dvs-mb-4 dvs-p-4 dvs-bg-admin-secondary-bg\n              "},[i("image-preview",{attrs:{src:""+t,name:e}})],1)})),0)]):t._e(),t.hasSingleImage?i("div",[i("img",{staticStyle:{"max-width":"200px"},attrs:{src:t.value.url}})]):t._e()])]),i("fieldset",{staticClass:"dvs-fieldset"},[i("label",{staticClass:"dvs-mt-4"},[t._v("Alt Tag")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.value.alt,expression:"value.alt"}],staticClass:"dvs-w-full",attrs:{type:"text"},domProps:{value:t.value.alt},on:{input:function(e){e.target.composing||t.$set(t.value,"alt",e.target.value)}}})])])],2)},a=[],n=i("53ca"),l=(i("d3b7"),i("3ca3"),i("ddb0"),i("b64b"),i("a7b1")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.image?i("div",{staticClass:"dvs-text-2xs"},[i("div",{staticClass:"dvs-bg-cover dvs-bg-center dvs-mb-2",style:{width:"100px",height:"100px",backgroundImage:"url("+t.image.src+")"}}),i("div",{staticClass:"dvs-text-lg dvs-font-bold dvs-mb-1"},[t._v(t._s(t.formattedName))]),i("div",{staticClass:"mb-1"},[t._v(t._s(t.dimensions))]),t._v(" "+t._s(t.formattedFilesize)+" ")]):t._e()},d=[],u=(i("99af"),i("b0c0"),i("49d5")),r=i.n(u),c={props:{src:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{image:null,width:null,height:null,filesize:null}},computed:{dimensions:function(){return"".concat(this.width," x ").concat(this.height)},formattedFilesize:function(){return r()(this.filesize)},formattedName:function(){return"orig_optimized"===this.name?"optimized":this.name}},watch:{src:function(){this.initialize()}},mounted:function(){this.initialize()},methods:{initialize:function(){this.loadImage(),this.getFileSize()},getImage:function(t){var e=new Image;e.src=t,this.loadImage(e).then((function(){return e}))},loadImage:function(){var t=this;this.image=new Image,this.image.src=this.src,this.image.onload=function(){t.$nextTick((function(){t.getDimensions()}))}},getDimensions:function(){this.width=this.image.naturalWidth,this.height=this.image.naturalHeight},getFileSize:function(){var t=this,e=new XMLHttpRequest;e.open("HEAD",this.src,!0),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&(t.filesize=e.getResponseHeader("Content-Length"))},e.send(null)}}},m=c,h=i("2877"),v=Object(h["a"])(m,o,d,!1,null,null,null),g=v.exports,b={name:"ImageEditor",components:{FieldEditor:function(){return i.e("chunk-2d0c0849").then(i.bind(null,"41b8"))},ImagePreview:g},mixins:[l["a"]],props:{value:{type:Object,required:!0},options:{type:Object,required:!0}},data:function(){return{originalValue:null,showEditor:!1}},computed:{defaultImage:{get:function(){return this.value.defaultImage},set:function(t){var e=Object.assign(this.value,{defaultImage:t});this.$emit("input",e),this.$emit("change",e)}},url:{get:function(){return this.value.url},set:function(t){var e=Object.assign(this.value,{url:t});this.$emit("input",e),this.$emit("change",e)}},alt:{get:function(){return this.value.alt},set:function(t){var e=Object.assign(this.value,{alt:t});this.$emit("input",e),this.$emit("change",e)}},mode:{get:function(){if("media"!==this.value.mode&&"manual"!==this.value.mode){var t=Object.assign(this.value,{mode:"media"});this.$emit("input",t),this.$emit("change",t)}return this.value.mode},set:function(t){var e=Object.assign(this.value,{mode:t});this.$emit("input",e),this.$emit("change",e)}},media:{get:function(){return this.value.media},set:function(t){var e=Object.assign(this.value,{media:t});this.$emit("input",e),this.$emit("change",e)}},settings:{get:function(){return this.value.settings},set:function(t){var e=Object.assign(this.value,{settings:t});this.$emit("input",e),this.$emit("change",e)}},hasMedia:function(){return!!this.media&&Object.keys(this.media).length>0},hasSingleImage:function(){return!!(this.media||this.url&&this.url.length>0)&&Object.keys(this.media).length<1}},mounted:function(){this.originalValue=Object.assign({},this.value)},methods:{toggleEditor:function(){"manual"!==this.mode&&this.$set(this,"mode","media"),this.showEditor=!this.showEditor},cancel:function(){this.url=this.originalValue.url,this.defaultImage=this.originalValue.defaultImage,this.alt=this.originalValue.alt,this.media=this.originalValue.media,this.settings=this.originalValue.settings,this.enabled=this.originalValue.enabled,this.mode=this.originalValue.mode},resetValue:function(){this.url=null,this.defaultImage=null,this.enabled=!1,this.alt=null,this.media=[],this.settings={},this.mode="media"},launchMediaManager:function(){this.options.type="image",window.deviseSettings.$bus.$emit("devise-launch-media-manager",{callback:this.mediaSelected,options:this.options})},mediaSelected:function(t){"object"===Object(n["a"])(t)?(this.alt=t.images.alt,this.url=t.images.defaultImage,this.defaultImage=t.images.defaultImage,this.media=t.images.media,this.settings=t.settings):this.url=t},launchMediaEditor:function(){this.options.type="image";var t=this.value.defaultImage?this.value.defaultImage:this.value.url;window.deviseSettings.$bus.$emit("devise-launch-media-editor",{callback:this.mediaSelected,options:this.options,image:t,settings:this.settings})}}},f=b,p=Object(h["a"])(f,s,a,!1,null,null,null);e["default"]=p.exports},a7b1:function(t,e,i){"use strict";e["a"]={methods:{update:function(t){this.$emit("input",t),this.$emit("change",t)}},computed:{enabled:{get:function(){return this.value.enabled},set:function(t){var e=Object.assign(this.value,{enabled:t});this.update(e)}}}}}}]);
//# sourceMappingURL=chunk-e74d0518.fae5cf56.js.map