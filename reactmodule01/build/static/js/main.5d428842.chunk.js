(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),u=(n(143),n(144),n(217)),s=n(16);var o=n(23),p=n(212),d=n(213),l=n(171),f=n.p+"static/media/logo.400ad79a.svg",h=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{marginLeft:e.spacing(2)}}}));function j(){var e=h();return Object(s.jsx)(p.a,{position:"static",children:Object(s.jsxs)(d.a,{children:[Object(s.jsx)("img",{width:40,src:f,alt:"Logo"}),Object(s.jsx)(l.a,{variant:"h4",className:e.title,children:"reactmodule01"})]})})}var b=n(38),v=n.n(b),g=n(57),x=n(7),O=n(216),m=n(114),w=n(116),P=n.n(w).a.create({baseURL:"Northwind/"}),k=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,r,a,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:{$top:100,$skip:0},e.next=3,P.get("/Products",{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",(null===(t=a.d)||void 0===t?void 0:t.results)||a.d||a.value);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/Products/$count");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=[{field:"ProductName",headerName:"ProductName",width:250},{field:"ProductID",headerName:"ProductID",flex:1},{field:"SupplierID",headerName:"SupplierID",flex:1}];function I(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(x.a)(c,2),o=i[0],p=i[1],d=Object(r.useState)(0),l=Object(x.a)(d,2),f=l[0],h=l[1],j=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,c,i,u=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=u.length>1&&void 0!==u[1]?u[1]:0,e.prev=1,a([]),p(!0),!t){e.next=9;break}return e.next=7,N();case 7:r=e.sent,h(r);case 9:return e.next=11,k({$top:15,$skip:n});case 11:c=e.sent,i=c.map((function(e,t){return e.id=t,e})),a(i);case 14:return e.prev=14,p(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,,14,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){j(!0)}),[]),Object(s.jsx)(O.a,{disableGutters:!0,children:Object(s.jsx)(u.a,{height:"80vh",py:5,children:Object(s.jsx)(m.a,{loading:o,rows:n,columns:S,pageSize:15,paginationMode:"server",rowCount:f,onPageChange:function(e){var t=e.page;j(!1,15*t)}})})})}var y=function(){return Object(s.jsxs)("div",{className:"App full-height",children:[Object(s.jsx)(j,{}),Object(s.jsx)(I,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),C()}},[[168,1,2]]]);
//# sourceMappingURL=main.5d428842.chunk.js.map