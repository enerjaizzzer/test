(window.webpackJsonptest=window.webpackJsonptest||[]).push([[0],{50:function(e,a,t){e.exports=t(81)},55:function(e,a,t){},79:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),i=(t(55),t(33)),o=t.n(i),s=t(45),m=t(17),u=t(18),g=t(23),h=t(19),d=t(25),b=t(49),E=t(84),f=t(89),p=t(85),v=t(48),N=t(87),x=t(83),k=t(88),C=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(g.a)(this,Object(h.a)(a).call(this,e))).onChangeLogin=e.onChangeLogin,t.submitLogin=e.submitLogin,t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,Object.assign({},this.props,{size:"xs","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(f.a,{className:"text-center modal-form bg-dark text-light",onSubmit:this.submitLogin},r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,{className:"title-form"},"Send your Nickname"),r.a.createElement(f.a.Control,{id:"formName",type:"text",onChange:this.onChangeLogin,placeholder:"NickName"})),r.a.createElement(x.a,{variant:"outline-light",type:"submit",className:"button"},"LogIn")))}}]),a}(n.Component),w=function(e){var a=e.onChangeSearch,t=e.submitSearch,n=e.onChangeLogin,c=e.submitLogin,l=e.login,i=e.nickName,o=r.a.useState(!1),s=Object(b.a)(o,2),m=s[0],u=s[1];return r.a.createElement(E.a,{className:"bg-dark header",fluid:!0},r.a.createElement(f.a,{className:"text-center",onSubmit:t},r.a.createElement(p.a,null,r.a.createElement(v.a,{xs:2},r.a.createElement(N.a.Brand,{href:"#home",className:"text-light"},"Movie Catalog")),r.a.createElement(v.a,{xl:7,md:6,xs:5},r.a.createElement(f.a.Control,{id:"form",type:"text",onChange:a,placeholder:"Text message",className:"send-form"})),r.a.createElement(v.a,{xl:1,md:2,xs:3},r.a.createElement(x.a,{variant:"outline-light",type:"submit",className:"button"},"Search")),!l&&r.a.createElement(v.a,{xs:2,className:"header-buttons"},r.a.createElement(x.a,{className:"button",variant:"outline-light",onClick:function(){return u(!0)}},"LogIn"),r.a.createElement(C,{show:m,onHide:function(){return u(!1)},onChangeLogin:n,submitLogin:c})),l&&r.a.createElement(v.a,{xs:2},r.a.createElement("h3",null,i)))))},y=t(86),L=t(90),P=t(27),S=t.n(P),j=(t(79),function(e){var a=e.data,t=e.value,n=e.changePagePrev,c=e.changePageNext,l=e.page,i=a.totalResults,o="You serched for: ".concat(t,", ").concat(i," results found"),s=a.Search,m=Object.values(s).map(function(e,a){return r.a.createElement(r.a.Fragment,null,(0===a||5===a)&&r.a.createElement(v.a,{key:S()(),xs:1}),r.a.createElement(v.a,{key:S()(),xl:2,className:"image-block"},r.a.createElement(y.a,{src:e.Poster,className:"image",rounded:!0,fluid:!0}),r.a.createElement("h5",{className:"title"},e.Title),r.a.createElement("p",{className:"text"},e.Year),r.a.createElement("p",{className:"text"},e.imdbID),r.a.createElement("p",{className:"text"},e.Type)),(4===a||9===a)&&r.a.createElement(v.a,{key:S()(),xs:1}))});return r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",null,o))),r.a.createElement(p.a,null,m),r.a.createElement(p.a,null,r.a.createElement(v.a,{className:"pagination"},r.a.createElement(L.a,{className:"bg-dark"},r.a.createElement(L.a.Prev,{onClick:n}),r.a.createElement(L.a.Item,{active:!0},l),r.a.createElement(L.a.Next,{onClick:c})))))}),O=function(){return r.a.createElement(E.a,{className:"fixed-bottom bg-dark",fluid:!0},r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement("h4",{className:"text-light"},"by enerjaizzzer "))))},I=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(g.a)(this,Object(h.a)(a).call(this,e))).onChangeSearch=function(e){t.value=e.target.value,t.url="https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=".concat(t.value,"&page=1")},t.submitSearch=function(e){e.preventDefault(),t.destructor()},t.onChangeLogin=function(e){t.nickName=e.target.value},t.submitLogin=function(){t.setState(function(){return{login:!0,nickName:t.nickName}})},t.changePagePrev=function(){t.page=t.state.page-1,t.renderAfterChangePage()},t.changePageNext=function(){t.page=t.state.page+1,t.renderAfterChangePage()},t.renderAfterChangePage=function(){t.url="https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=".concat(t.value,"&page=").concat(t.page),t.setState(function(){return{page:t.page}}),t.destructor()},t.state={login:!1,nickName:"",page:1},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"destructor",value:function(){var e=Object(s.a)(o.a.mark(function e(){var a,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url);case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState(function(){return{data:t}});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{onChangeSearch:this.onChangeSearch,submitSearch:this.submitSearch,onChangeLogin:this.onChangeLogin,submitLogin:this.submitLogin,login:this.state.login,nickName:this.state.nickName}),this.state.data&&r.a.createElement(j,{data:this.state.data,value:this.value,changePagePrev:this.changePagePrev,changePageNext:this.changePageNext,page:this.state.page}),r.a.createElement(O,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(80);l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.105fc241.chunk.js.map