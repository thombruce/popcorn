(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8,22],{4517:function(t,e,n){"use strict";n.r(e);var r={props:["articles"]},c=n(3),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.articles?t._l(t.articles,(function(article){return n("article",{staticClass:"card card-side bordered mb-4"},[n("figure",[article.image?n("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),n("div",{staticClass:"card-body"},[n("header",[n("h2",{staticClass:"card-title"},[n("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),n("time",{attrs:{datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))])]),article.description?n("div",[n("p",[t._v(t._s(article.description))])]):t._e()])])})):n("div",{staticClass:"text-center"},[n("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4524:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(30),{props:{section:String,deep:{type:Boolean,default:!1}},data:function(){return{articles:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.section,{deep:t.deep}).where({draft:{$ne:!0}}).sortBy("date","desc").fetch().catch((function(){}));case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),l=n(3),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n("article",[n("TntBlogList",{attrs:{articles:t.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntBlogList:n(4517).default})},4556:function(t,e,n){"use strict";n.r(e);var r={},c=n(3),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("TntPagesSection",{attrs:{section:"blog"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntPagesSection:n(4524).default})}}]);