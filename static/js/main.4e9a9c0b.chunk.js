(this["webpackJsonpalbum-list"]=this["webpackJsonpalbum-list"]||[]).push([[0],{29:function(n,e,t){n.exports=t(68)},34:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=(t(34),t(4)),u=t(9),l=t.n(u),d=t(24),s=t(5),f=t.n(s),p=function(n,e){var t=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var i=this;clearTimeout(t),t=setTimeout((function(){return n.apply(i,a)}),e)}},m=t(1),b=t(2);function v(){var n=Object(m.a)(["\n  max-width: 280px;\n"]);return v=function(){return n},n}function h(){var n=Object(m.a)([""]);return h=function(){return n},n}function x(){var n=Object(m.a)(["\n  padding: 8px;\n  border-bottom: 1px solid #e7e7e7;\n  cursor: pointer;\n  &:hover {\n    background-color: #e7e7e7;\n  }\n  &.last-child {\n    border-bottom: none;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(m.a)(["\n  border: 1px solid #e7e7e7;\n  outline: none;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 360px;\n"]);return g=function(){return n},n}function j(){var n=Object(m.a)(["\n  box-sizing: border-box;\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  height: 40px;\n  font-size: 16px;\n  padding: 4px;\n  transition: width 0.3s;\n  text-indent: 8px;\n  width: 100%;\n  &:focus {\n    width: 100%;\n    outline: none;\n    border: 1px solid #08a1b6;\n  }\n"]);return j=function(){return n},n}var O=b.a.input(j()),w=b.a.ul(g()),E=b.a.li(x()),y=b.a.div(h()),S=b.a.div(v()),k=function(n){var e=n.placeholder,t=n.valueKey,o=n.labelKey,i=n.onSelect,u=Object(r.useRef)(),s=Object(r.useState)(!1),m=Object(c.a)(s,2),b=m[0],v=m[1],h=Object(r.useState)([]),x=Object(c.a)(h,2),g=x[0],j=x[1],k=function(){var n=Object(d.a)(l.a.mark((function n(){var e,t,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.current.value,n.next=3,f.a.get("https://jsonplaceholder.typicode.com/albums",{params:{q:e}});case 3:t=n.sent,console.log("res",t,e),200===t.status&&(r=t.data.filter((function(n){return n[o].toLowerCase().indexOf(e)>-1})),e?(v(!0),j(r.slice(0,10))):(v(!1),j([])));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=function(n){var e=g.find((function(e){return e[o]===n.currentTarget.innerText}));i(e),u.current.value=e[o],v(!1)},N=null;return b&&(N=g.length?a.a.createElement(w,{className:"options"},g.map((function(n,e){return a.a.createElement(E,{className:void 0,key:n[t],onClick:T},n[o])}))):a.a.createElement(y,{className:"no-options"},"No Option!")),a.a.createElement(S,null,a.a.createElement(O,{type:"text",onChange:p(k,300),ref:u,placeholder:e}),N)};k.defaultProps={labelKey:"title",valueKey:"id",value:{},onSelect:function(){}};var T=k;function N(){var n=Object(m.a)(["\n  padding: 16px;\n  border-radius: 16px;\n  border: 1px solid #e7e7e7;\n  background-color: green;\n  cursor: pointer;\n  display: inline-block;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 24px;\n"]);return N=function(){return n},n}function z(){var n=Object(m.a)([""]);return z=function(){return n},n}function A(){var n=Object(m.a)([""]);return A=function(){return n},n}function C(){var n=Object(m.a)(["\n  margin-top: 8px;\n  font-size: 14px;\n  color: #9b9b9b;\n  font-weight: bold;\n"]);return C=function(){return n},n}function D(){var n=Object(m.a)(["\n  margin-bottom: 8px;\n  font-size: 16px;\n  font-weight: bold;\n"]);return D=function(){return n},n}function I(){var n=Object(m.a)(["\n  flex: 0 0 280px;\n  margin: 16px;\n  border: 1px solid #e7e7e7;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n"]);return I=function(){return n},n}function K(){var n=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return K=function(){return n},n}function F(){var n=Object(m.a)(["\n  padding: 16px;\n  margin-top: 16px;\n"]);return F=function(){return n},n}function U(){var n=Object(m.a)(["\n  .ag-center-cols-container {\n    width: 100% !important;\n  }\n"]);return U=function(){return n},n}var B=b.a.div(U()),G=b.a.div(F()),J=b.a.div(K()),R=b.a.div(I()),V=b.a.div(D()),W=b.a.div(C()),q=b.a.div(A()),L=b.a.img(z()),M=b.a.div(N()),P=function(n){var e=n.data;return a.a.createElement(J,null,e.map((function(n){return a.a.createElement(R,{key:n.id},a.a.createElement(W,null,n.title),a.a.createElement(L,{src:n.thumbnailUrl}),a.a.createElement(V,null,"#",n.id))})))},$=t(28),H=(t(66),t(67),function(n){var e=n.data;return a.a.createElement("div",{className:"ag-theme-alpine",style:{height:"460px",width:"80%"}},a.a.createElement($.AgGridReact,{columnDefs:[{headerName:"Id",field:"id"},{headerName:"Title",field:"title"},{headerName:"Thumbnail",field:"thumbnailUrl",valueFormatter:function(n){return n.thumbnailUrl}}],rowData:e}))}),Q=function(n){var e=n.id,t=Object(r.useState)([]),o=Object(c.a)(t,2),i=o[0],u=o[1],l=Object(r.useState)(!1),d=Object(c.a)(l,2),s=d[0],p=d[1],m=Object(r.useState)(!1),b=Object(c.a)(m,2),v=b[0],h=b[1];return Object(r.useEffect)((function(){p(!0),f.a.get("https://jsonplaceholder.typicode.com/photos?albumId=".concat(e||1)).then((function(n){200===n.status&&(u(n.data),p(!1))}))}),[e]),a.a.createElement(B,null,s?a.a.createElement(q,null,"Fetching Details..."):a.a.createElement(a.a.Fragment,null,a.a.createElement(G,null,"Showing Details of Album Id ",e||1,"."),a.a.createElement(M,{onClick:function(){h(!v)}},v?"Switch To GridView":"Switch To TableView"),v?a.a.createElement(H,{data:i}):a.a.createElement(P,{data:i})))};function X(){var n=Object(m.a)(["\n  padding: 16px;\n"]);return X=function(){return n},n}var Y=b.a.div(X()),Z=function(){var n=Object(r.useState)(null),e=Object(c.a)(n,2),t=e[0],o=e[1];return a.a.createElement(Y,null,a.a.createElement(T,{placeholder:"Type an Album Title",onSelect:function(n){o(n.id)}}),a.a.createElement(Q,{id:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.4e9a9c0b.chunk.js.map