(this["webpackJsonpreact-hackernews"]=this["webpackJsonpreact-hackernews"]||[]).push([[0],{19:function(e,t,n){e.exports=n(35)},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=(n(24),n(3)),s=n(1),l=n(17);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEWS":return Object(l.a)(t.news);default:return e}},h=Object(s.c)({news:u}),f=n(11);n(31),n(32);var m=function(){return a.a.createElement("div",{className:"nav"},a.a.createElement("h1",null,"React - Hacker News"))},v=n(12),w=n(13),d=n(18),p=n(16),E=(n(33),n(14)),g=n.n(E),b=function(e){var t=e.title,n=e.showSkeleton;return a.a.createElement("div",{className:"item"},a.a.createElement("h1",null,t),n&&a.a.createElement("div",null,a.a.createElement(g.a,{className:"skeleton",count:3})))};var k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNews()}},{key:"render",value:function(){var e=this.props.news.map((function(e){return a.a.createElement(b,{title:e.title})}));if(0===e.length){for(var t=[],n=0;n<6;n++)t.push(a.a.createElement(b,{showSkeleton:!0,title:""}));return a.a.createElement("div",null,t)}return a.a.createElement("div",null,e)}}]),n}(r.Component);var j=Object(i.b)((function(e){return{news:e.news}}),{fetchNews:function(){return function(e){return fetch("https://hn.algolia.com/api/v1/search?tags=front_page").then((function(e){return function(e){if(!e.ok){if(e.status>=400&&e.status<500)return e.json().then((function(e){throw{errorMessage:e.message}}));throw{errorMessage:"Please try again later. Servor is not responding"}}return e.json()}(e)})).then((function(t){return e({type:"FETCH_NEWS",news:t.hits})}))}}})(k),O=Object(s.e)(h,Object(s.d)(Object(s.a)(f.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));var N=function(){return a.a.createElement(i.a,{store:O},a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f8ce7b60.chunk.js.map