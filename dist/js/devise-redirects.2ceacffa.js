(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-redirects"],{"3ee9":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("devise-workflow",{attrs:{workflow:e.workflow}})},o=[],n={name:"DeviseRedirectsAdmin",components:{DeviseWorkflow:function(){return r.e("devise-administration").then(r.bind(null,"66ed"))}},data:function(){return{workflow:[{index:!0,key:"pages-main-menu",component:"workflow-menu",message:"Managing <strong>Redirects</strong> huh?! Nice!<br> What would you like to do?",options:[{label:"Create a 301 Redirect",nextStep:"create-redirect"},{label:"Manage a 301 Redirect",nextStep:"search-for-redirect",stepAfterNext:"edit-redirect"},{label:"Delete a 301 Redirect",nextStep:"search-for-redirect",stepAfterNext:"delete-redirect"}]},{key:"create-redirect",component:"devise-redirect-create",message:"Fill out the fields below to create the redirect. All fields are required.",end:!0},{key:"edit-redirect",component:"devise-redirect-edit",message:"Manage the redirect settings using the fields below.",end:!0},{key:"delete-redirect",component:"devise-redirect-delete",message:"Are you sure you want to delete this redirect? This will delete all related information and cannot be undone.",end:!0},{key:"search-for-redirect",component:"workflow-search",message:"Use the form below to search for the redirect you wish to manage",apiendpoint:"redirects",searchPropertyName:"term",resultsDisplayFields:[{label:"From URL",field:"from_url"},{label:"To URL",field:"to_url"},{label:"Created At",field:"created_at",dateFormat:"MMMM D, YYYY @ h:mm a"}]}]}}},d=n,a=r("0c7c"),l=Object(a["a"])(d,i,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=devise-redirects.2ceacffa.js.map