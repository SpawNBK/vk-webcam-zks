(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(e,t,a){e.exports=a(434)},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);a(228),a(230);var n=a(0),o=a.n(n),c=a(48),r=a.n(c),i=a(40),l=a(168),s=a(28),u=a(13),p=a(7),d=a(75),m=a(74),h=a.n(m),v=a(93),O=a(53),y=a.n(O),b=a(56),f=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}};var E=function(e,t){return t.access_token=ie.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,b.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.data.response}).catch(function(e){return e})},j=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},g=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},w=function(){return{type:"CLOSE_POPOUT"}},k=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},S=function(){return{type:"CLOSE_MODAL"}},_={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},A={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},T={forms:[]},C=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],c=e.viewsHistory[e.activeStory]||[],r=c.indexOf(a);return-1!==r&&c.splice(r,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&b.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(c),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],h=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var v=m.shift();h=(m=[v])[m.length-1]}else if(i.length>1){var O=i.shift();s=(i=[O])[i.length-1],h=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var y=e.activeView,f=e.activePanel,E=e.activeStory,j=e.popouts;if(j[y])return j[y]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:j})});var g=e.modalHistory[y];if(void 0!==g&&0!==g.length){var w=g[g.length-2]||null;return null===w?g=[]:-1!==g.indexOf(w)?g=g.splice(0,g.indexOf(w)+1):g.push(w),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},y,w)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},y,g))})}var k=e.panelsHistory[y]||[],S=e.viewsHistory[e.activeStory]||[],A=e.storiesHistory;if(k.length>1)k.pop(),f=k[k.length-1];else if(S.length>1){S.pop(),y=S[S.length-1];var T=e.panelsHistory[y];f=T[T.length-1]}else if(A.length>1&&"Android"===t.payload.from){A.pop(),E=A[A.length-1],y=e.viewsHistory[E][e.viewsHistory[E].length-1];var C=e.panelsHistory[y];f=C.length>1?C[C.length-1]:C[0]}else window.history.pushState(null,null);return 1===k.length&&"iOS"===t.payload.from&&b.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:y,activePanel:f,activeStory:E,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,S)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,k))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===P?H=[]:-1!==H.indexOf(P)?H=H.splice(0,H.indexOf(P)+1):H.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var x=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,V=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===x?V=[]:-1!==V.indexOf(x)?V=V.splice(0,V.indexOf(x)+1):V.push(x),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,x)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,V))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),P=a(170),H=(a(421),a(422),a(423),a(424),a(25)),x=a(26),V=a(29),N=a(27),D=a(30),M=a(4),I=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(D.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id;e.setPage,e.withoutEpic;return o.a.createElement(M.r,{id:t},o.a.createElement(M.s,null,o.a.createElement(M.u,{status:"\u0433. \u0416\u0438\u0433\u0443\u043b\u0435\u0432\u0441\u043a v.1.1.0"},"\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u043a\u0430\u043c\u0435\u0440\u044b")),o.a.createElement(M.i,null,o.a.createElement("div",{className:"cam-container"},o.a.createElement("div",{className:"loading"},o.a.createElement("div",{className:"load-spin"})),o.a.createElement("div",{id:"main",className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-xs-12 col-xxs-12"},o.a.createElement("p",{className:"cam-title"},"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043c\u0438\u0440\u0430"),o.a.createElement("div",{id:"cam1"})),o.a.createElement("div",{className:"col-md-6 col-xs-12 col-xxs-12"},o.a.createElement("p",{className:"cam-title"},"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043c\u0438\u0440\u0430 2"),o.a.createElement("div",{id:"cam2"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-xs-12 col-xxs-12"},o.a.createElement("p",{className:"cam-title"},"\u041f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u0431\u0435\u0434\u044b"),o.a.createElement("div",{id:"cam4"})),o.a.createElement("div",{className:"col-md-6 col-xs-12 col-xxs-12"},o.a.createElement("p",{className:"cam-title"},"\u0421\u043a\u0432\u0435\u0440 \u0412-1"),o.a.createElement("div",{id:"cam5"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-xs-12 col-xxs-12"},o.a.createElement("p",{className:"cam-title"},"\u0421\u0442\u0430\u0434\u0438\u043e\u043d \u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b"),o.a.createElement("div",{id:"cam3"})),o.a.createElement("div",{className:"col-md-6 col-xs-12 col-xxs-12"}))))))}}]),t}(o.a.Component),B={setPage:function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},goBack:j,closePopout:w},G=Object(s.b)(null,B)(I),L=function(e){function t(){return Object(H.a)(this,t),Object(V.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,c=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(M.c,{description:c,before:o.a.createElement(M.a,{size:40,src:a})},n)}}]),t}(n.PureComponent),K=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(L,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},W=function(e){function t(){var e,a;Object(H.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(V.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(D.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){b.a.send("VKWebAppGetAuthToken",{app_id:6984089,scope:e.join(",")}).then(function(e){t(f(e.data.access_token))}).catch(function(){t(f(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(v.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,E("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,c=K(this.state.groups.admined),r=K(this.state.groups.other);return o.a.createElement(M.r,{id:a},o.a.createElement(M.s,{left:o.a.createElement(M.t,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(M.v,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(M.i,null,o.a.createElement(M.f,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(M.f,null,o.a.createElement(M.b,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(M.i,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"},o.a.createElement(M.n,null,c)),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(M.i,{title:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"},o.a.createElement(M.n,null,r)))}}]),t}(o.a.Component);var F=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:j,openPopout:g,closePopout:w,openModal:k},e))})(W),R=a(95),U=a.n(R),z=a(73),Y=a.n(z),J=a(94),q=a.n(J),X=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],Z=function(e){function t(){return Object(H.a)(this,t),Object(V.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return o.a.createElement(M.o,{id:t,header:o.a.createElement(M.p,{left:!M.k&&o.a.createElement(M.j,{onClick:a},o.a.createElement(Y.a,null)),right:M.k&&o.a.createElement(M.j,{onClick:a},o.a.createElement(U.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(M.n,null,X.map(function(e,t){return o.a.createElement(M.c,{key:t,description:e.desc,before:o.a.createElement(M.a,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(q.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),Q={openModal:k},$=Object(s.b)(null,Q)(Z),ee=function(e){function t(){return Object(H.a)(this,t),Object(V.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return o.a.createElement(M.o,{id:t,header:o.a.createElement(M.p,{left:!M.k&&o.a.createElement(M.j,{onClick:a},o.a.createElement(Y.a,null)),right:M.k&&o.a.createElement(M.j,{onClick:a},o.a.createElement(U.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(M.c,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(M.a,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(M.n,null,o.a.createElement(M.c,null,o.a.createElement(M.l,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(M.c,null,o.a.createElement(M.l,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(M.c,null,o.a.createElement(M.l,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),te=Object(s.b)()(ee),ae=function(e){function t(e){var a;Object(H.a)(this,t),a=Object(V.a)(this,Object(N.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(D.a)(t,e),Object(x.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(M.r,{id:t},o.a.createElement(M.s,{left:o.a.createElement(M.t,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(M.i,null,o.a.createElement(M.g,null,o.a.createElement(M.h,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(M.m,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(M.m,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(M.h,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(M.d,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(M.d,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(M.f,{className:"buttons-group"},o.a.createElement(M.b,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(M.b,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),ne={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:j},oe=Object(s.b)(function(e){return{inputData:e.formData.forms}},ne)(ae),ce=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(V.a)(this,Object(N.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(D.a)(t,e),Object(x.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){y.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(y.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),b.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,c=n.activeStory,r=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==r||e.activeStory!==c){var l=i[c+"_"+o+"_"+r]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.closeModal,n=e.popouts,c=e.activeView,r=e.activePanel,i=e.activeModals,l=e.panelsHistory,s=e.colorScheme,u=void 0===l[c]?[c]:l[c],p=void 0===n[c]?null:n[c],d=void 0===i[c]?null:i[c],m=o.a.createElement(M.q,{activeModal:d},o.a.createElement($,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return a()}}),o.a.createElement(te,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return a()}}));return o.a.createElement(M.e,{isWebView:!0,scheme:s},o.a.createElement(M.w,{activeView:c,popout:p},o.a.createElement(M.x,{id:"home",modal:m,activePanel:r,history:u,onSwipeBack:function(){return t()}},o.a.createElement(G,{id:"base",withoutEpic:!0}),o.a.createElement(F,{id:"groups"})),o.a.createElement(M.x,{id:"modal",modal:m,activePanel:r,history:u,onSwipeBack:function(){return t()}},o.a.createElement(oe,{id:"filters"}))))}}]),t}(o.a.Component);var re=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:j,closeModal:S},e))})(ce);a.d(t,"store",function(){return ie});var ie=Object(i.createStore)(C,Object(P.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));ie.dispatch({type:"SET_STORY",payload:{story:"home",initial_panel:"base"}}),r.a.render(o.a.createElement(s.a,{store:ie},o.a.createElement(re,null)),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.30497ae0.chunk.js.map