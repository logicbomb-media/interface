(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e815"],{d69f:function(n,e){!function(n){function e(n,e){return"___"+n.toUpperCase()+e+"___"}Object.defineProperties(n.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(n){if("function"==typeof r&&!r(n))return n;for(var o,i=c.length;-1!==t.code.indexOf(o=e(a,i));)++i;return c[i]=n,o})),t.grammar=n.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=n.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var p=i[u];if("string"==typeof p||p.content&&"string"==typeof p.content){var g=r[o],s=t.tokenStack[g],f="string"==typeof p?p:p.content,l=e(a,g),k=f.indexOf(l);if(-1<k){++o;var d=f.substring(0,k),h=new n.Token(a,n.tokenize(s,t.grammar),"language-"+a,s),m=f.substring(k+l.length),v=[];d&&v.push.apply(v,c([d])),v.push(h),m&&v.push.apply(v,c([m])),"string"==typeof p?i.splice.apply(i,[u,1].concat(v)):p.content=v}}else p.content&&c(p.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=chunk-2d21e815.d0f8db57.js.map