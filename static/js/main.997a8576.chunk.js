(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(8),c=n.n(r),i=n(12),s=n.n(i),u=n(13),l=n(22),j=n(4),b=n(10),m=n(23),d=n.n(m),h=n(0),g=function(){return Object(h.jsx)(d.a,{type:"Hearts",color:"#00BFFF",height:80,width:80})},p=function(e){var t=e.onSubmit,n=Object(a.useState)(""),o=Object(b.a)(n,2),r=o[0],c=o[1];return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),c("")},className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",value:r,onChange:function(e){var t=e.target;c(t.value)},placeholder:"Search images and photos"})]})})},O=function(e){var t=e.item,n=e.onShow;return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return n(t.largeImageURL)},children:Object(h.jsx)("img",{src:t.webformatURL,className:"ImageGalleryItem-image"})})},f=function(e){var t=e.images,n=e.onShow;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(O,{item:e,onShow:n},e.id)}))})},v=n(24),x=n(25),y=n(28),w=n(27),L=document.querySelector("#modal-root"),S=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closeModal=function(t){"Escape"===t.key&&e.props.onClose()},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){return Object(r.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.props.onClose,children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})}),L)}}]),n}(a.Component),k=function(e){var t=e.onLoadMore;return Object(h.jsx)("button",{onClick:t,className:"Button",children:"Load more"})},M=n(26),I=n.n(M),N=function(e,t){return I.a.get("https://pixabay.com/api/?q="+e+"&page="+t+"&key=23381165-23963a51c09328db6c17876e7&image_type=photo&orientation=horizontal&per_page=12")},C=(n(73),{images:[],isLoading:!1,error:null,query:"",page:1,largeImg:"",isModal:!1}),F=function(){var e=Object(a.useState)(C),t=Object(b.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){var e=n.query,t=n.page;n.isLoading&&r(e,t)}),[n.isLoading]);var r=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(t,a);case 3:r=e.sent,c=r.data,i=c.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}})),o((function(e){return Object(j.a)(Object(j.a)({},e),{},{images:[].concat(Object(u.a)(e.images),Object(u.a)(i)),page:e.page+1,isLoading:!1})})),n.isModal||window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),o((function(t){return Object(j.a)(Object(j.a)({},t),{},{error:e.t0,isLoading:!1})}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),c=n.images,i=n.largeImg,m=n.isModal,d=n.isLoading;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{onSubmit:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{isLoading:!0,query:e,page:1,images:[]})}))}}),Object(h.jsx)(f,{images:c,onShow:function(e){o((function(t){return Object(j.a)(Object(j.a)({},t),{},{largeImg:e,isModal:!0})}))}}),m&&Object(h.jsx)(S,{onClose:function(){o((function(e){return Object(j.a)(Object(j.a)({},e),{},{isModal:!1})}))},children:Object(h.jsx)("img",{src:i})}),d&&Object(h.jsx)(g,{}),c.length>0&&Object(h.jsx)(k,{onLoadMore:function(){o((function(e){return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0})}))}})]})};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.997a8576.chunk.js.map