(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,17],{4395:function(t,e,n){"use strict";n.r(e);var r={props:["articles"]},c=n(8),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.articles?t._l(t.articles,(function(article){return n("article",[n("header",[n("h2",[n("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),n("time",{attrs:{datetime:article.createdAt}},[t._v(t._s(article.createdAt))])]),article.description?n("div",[n("p",[t._v(t._s(article.description))])]):t._e()])})):n("div",{staticClass:"text-center"},[n("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4407:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(33),{data:function(){return{articles:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").sortBy("createdAt","desc").fetch().catch((function(){}));case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n("article",[n("TntBlogList",{attrs:{articles:t.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntBlogList:n(4395).default})},4449:function(t,e,n){"use strict";n.r(e);var r=n(8),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("TntPagesBlog")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntPagesBlog:n(4407).default})}}]);