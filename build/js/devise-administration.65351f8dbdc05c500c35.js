webpackJsonp([4],{"0E55":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),r=n("woOf"),a=n.n(r),o=n("NYxO");t.default={name:"Administration",data:function(){return{everythingIsLoaded:!1}},mounted:function(){var e=this;setTimeout(function(){e.everythingIsLoaded=!0},2e3)},methods:{loadAdminPage:function(e){"media-manager"===e.routeName?devise.$bus.$emit("devise-launch-media-manager",{}):void 0!==e.routeParams?this.goToPage(e.routeName,e.routeParams):this.goToPage(e.routeName)},checkActivePanelSidebar:function(e){var t=a()({},this.theme.panelSidebar);return this.$route.meta&&this.$route.meta.parentRouteName&&("devise-pages-view"===this.$route.name&&this.$route.params.pageId===this.currentPage.id&&"devise-pages-view"===e.routeName&&(t.background=this.theme.panelSidebar.secondaryColor),e.routeName!==this.$route.meta.parentRouteName||"devise-pages-view"===this.$route.name&&this.$route.params.pageId===this.currentPage.id||(t.background=this.theme.panelSidebar.secondaryColor)),t}},computed:i()({},Object(o.d)("devise",["adminMenu"]),{user:function(){return deviseSettings.$user},csrf_field:function(){return window.axios.defaults.headers.common["X-CSRF-TOKEN"]}}),components:{Loadbar:function(){return n.e(13).then(n.bind(null,"Ti2x"))},LoadingScreen:function(){return n.e(13).then(n.bind(null,"INjQ"))},Messages:function(){return n.e(13).then(n.bind(null,"XznR"))},MediaEditor:function(){return n.e(16).then(n.bind(null,"LfI/"))},MediaManager:function(){return n.e(16).then(n.bind(null,"rdfH"))},PreviewMode:function(){return n.e(1).then(n.bind(null,"ZGxL"))},BackIcon:function(){return n.e(0).then(n.bind(null,"hYyN"))},CogIcon:function(){return n.e(0).then(n.bind(null,"FrHD"))},CreateIcon:function(){return n.e(0).then(n.bind(null,"DRXg"))},CubeIcon:function(){return n.e(0).then(n.bind(null,"LR3y"))},DocumentIcon:function(){return n.e(0).then(n.bind(null,"dyPY"))},ImageIcon:function(){return n.e(0).then(n.bind(null,"769S"))},Panel:function(){return n.e(13).then(n.bind(null,"Px9n"))},PowerIcon:function(){return n.e(0).then(n.bind(null,"YlKG"))},SaveIcon:function(){return n.e(0).then(n.bind(null,"cd81"))},SliceSettings:function(){return n.e(1).then(n.bind(null,"lhsx"))}}}},VjCB:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dvs-p-8"},[n("h3",{staticClass:"dvs-mb-6",style:{color:e.theme.panel.color}},[e._v(e._s(e.currentMenu.label))]),e._v(" "),n("ul",{staticClass:"dvs-list-reset"},e._l(e.currentMenu.menu,function(t){return n("li",{key:t.id,staticClass:"dvs-mb-4"},[n("div",{staticClass:"dvs-block dvs-mb-4 dvs-switch-sm dvs-flex dvs-justify-between dvs-items-center dvs-cursor-pointer",style:{color:e.theme.panel.color},on:{click:function(n){e.goToPage(t.routeName,t.parameters)}}},[e._v(e._s(t.label))])])}))])},staticRenderFns:[]}},XDC8:function(e,t,n){var s=n("VU/8")(n("mgVN"),n("VjCB"),!1,null,null,null);e.exports=s.exports},hMx6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.deviseOptions.adminClass],attrs:{id:"devise-admin"}},[n("panel",{directives:[{name:"tuck",rawName:"v-tuck"}],staticClass:"dvs-m-8 dvs-fixed dvs-z-9980",staticStyle:{"min-width":"360px"},attrs:{"panel-style":e.theme.panel}},[n("div",{staticClass:"dvs-flex"},[n("div",{staticClass:"dvs-flex dvs-flex-col",style:e.theme.panelSidebar},[n("preview-mode"),e._v(" "),e._l(e.adminMenu,function(t,s){return[n("button",{key:s,staticClass:"dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-border-b",style:e.checkActivePanelSidebar(t),on:{click:function(n){n.preventDefault(),e.loadAdminPage(t)}}},[n(t.icon,{tag:"component",staticClass:"dvs-m-4",attrs:{w:"25",h:"25"}})],1)]}),e._v(" "),n("a",{staticClass:"dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-border-b",style:e.theme.panelSidebar,attrs:{href:"/logout}",onclick:"event.preventDefault(); document.getElementById('dvs-logout-form').submit();"}},[n("power-icon",{staticClass:"dvs-m-4",attrs:{w:"25",h:"25"}})],1),e._v(" "),n("form",{staticStyle:{display:"none"},attrs:{id:"dvs-logout-form",action:"/logout",method:"POST"}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrf_field}})])],2),e._v(" "),n("div",{ref:"admin-route-wrapper",staticClass:"dvs-max-h-screen dvs-flex-grow",attrs:{id:"dvs-admin-content-container","data-simplebar":""}},[n("transition",{attrs:{name:"dvs-fade",mode:"out-in"}},[n("router-view",{attrs:{name:"devise"}})],1)],1)])]),e._v(" "),n("portal-target",{staticClass:"dvs-relative dvs-z-9999",attrs:{name:"devise-root"}}),e._v(" "),n("media-manager",{staticClass:"dvs-z-9999"}),e._v(" "),n("slice-settings"),e._v(" "),n("loadbar",{staticClass:"dvs-relative dvs-z-9999"}),e._v(" "),n("loading-screen",{staticClass:"dvs-relative dvs-z-9999"}),e._v(" "),n("messages",{staticClass:"dvs-relative dvs-z-9999"})],1)},staticRenderFns:[]}},mgVN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),r=n("fZjL"),a=n.n(r),o=n("pFYg"),d=n.n(o),u=n("wxOc"),l=(n.n(u),n("NYxO"));t.default={name:"DeviseIndex",methods:{findMenu:function(e){if("object"===(void 0===e?"undefined":d()(e)))var t=a()(e).map(function(t){return e[t]});else t=e;for(var n=0;n<t.length;n++){var s=t[n];if(s.routeName===this.$route.name)return s;if(s.menu){var i=this.findMenu(s.menu);if(i)return i}}}},computed:i()({},Object(l.d)("devise",["adminMenu"]),{currentMenu:function(){return this.findMenu(this.adminMenu)}}),components:{Administration:function(){return new Promise(function(e){e()}).then(n.bind(null,"wxOc"))}}}},wxOc:function(e,t,n){var s=n("VU/8")(n("0E55"),n("hMx6"),!1,null,null,null);e.exports=s.exports}});