(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4381:function(t,e,r){"use strict";r.r(e);var l=r(84),c={props:["article"],methods:{parameterize:function(t){return Object(l.kebabCase)(t)}}},n=r(8),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"py-4"},[t.article.image?r("NuxtImg",{attrs:{src:t.article.image,width:"100vw"}}):t._e(),t.article.categories?r("dl",{staticClass:"inline-block mr-3"},[r("dt",{staticClass:"sr-only"},[t._v("Categories")]),t._l(t.article.categories,(function(e){return r("dd",[r("NuxtLink",{attrs:{to:"/blog/categories/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2):t._e(),t.article.series?r("dl",{staticClass:"inline-block mr-3"},[r("dt",{staticClass:"sr-only"},[t._v("Series")]),t._l(t.article.series,(function(e){return r("dd",[r("NuxtLink",{attrs:{to:"/blog/series/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.article.tags?r("dl",{staticClass:"inline-block mr-3"},[r("dt",{staticClass:"sr-only"},[t._v("Tags")]),t._l(t.article.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[r("NuxtLink",{attrs:{to:"/blog/tags/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2):t._e(),r("time",{staticClass:"block",attrs:{datetime:t.article.createdAt}},[t._v(t._s(t.article.createdAt))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);