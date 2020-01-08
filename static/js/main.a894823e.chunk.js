(this["webpackJsonpreact.local"]=this["webpackJsonpreact.local"]||[]).push([[0],{44:function(t,n,e){t.exports=e(76)},76:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(9),i=e.n(a),c=e(12),u=e(4),s=e(8),l={SET_THEME:"".concat("@hnReader/app","/SET_THEME")},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"dark"},n=arguments.length>1?arguments[1]:void 0,e=n.type,r=n.payload;switch(e){case l.SET_THEME:return Object(s.a)({},t,{},r);default:return t}},d=e(18),h=e(10),p=e(11),g=e(30),S=e.n(g),E=Object({NODE_ENV:"production",PUBLIC_URL:""}).URL||"http://localhost:3000",m={"Content-Type":"application/json",Accept:"application/json"},v=new(function(){function t(n){var e=n.baseURL,r=void 0===e?E:e,o=n.timeout,a=void 0===o?2e3:o,i=n.headers,c=void 0===i?m:i,u=n.auth;Object(h.a)(this,t);var s=S.a.create({baseURL:r,timeout:a,headers:c,auth:u});s.interceptors.response.use(this.handleSuccess,this.handleError),this.client=s}return Object(p.a)(t,[{key:"handleSuccess",value:function(t){return t}},{key:"handleError",value:function(t){return Promise.reject(t)}},{key:"get",value:function(t){return this.client.get(t).then((function(t){return t.data}))}},{key:"post",value:function(t,n){return this.client.post(t,n).then((function(t){return t.data}))}},{key:"put",value:function(t,n){return this.client.put(t,n).then((function(t){return t.data}))}},{key:"path",value:function(t,n){return this.client.path(t,n).then((function(t){return t.data}))}},{key:"delete",value:function(t){return this.client.delete(t).then((function(t){return t.data}))}}]),t}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),b={};b.getTopStoryIds=function(){return v.get("/topstories".concat(".json?print=pretty"))},b.getStory=function(t){return v.get("/item/".concat(t).concat(".json?print=pretty"))},b.getStoriesByPage=function(t,n){var e=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:n*t,end:(n+1)*t}}(20,n),r=function(t){var n=t.begin,e=t.end;return t.items.slice(n,e)}({begin:e.begin,end:e.end,items:t}).map((function(t){return b.getStory(t)}));return Promise.all(r)};var y=b,_="@hnReader/story",T={FETCH_STORY_IDS_REQUEST:"".concat(_,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(_,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(_,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(_,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(_,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAILURE:"".concat(_,"/FETCH_STORIES_FAILURE")},O=function(t,n){return{type:t,payload:n}},w={fetchStoryIds:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){return n(O(T.FETCH_STORY_IDS_REQUEST,t)),y.getTopStoryIds().then((function(t){return n(O(T.FETCH_STORY_IDS_SUCCESS,{storyIds:t})),n(w.fetchStories({storyIds:t,page:0})),t})).catch((function(t){return n(O(T.FETCH_STORY_IDS_FAILURE,t))}))}},fetchStories:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var e=t.storyIds,r=t.page;return n(O(T.FETCH_STORIES_REQUEST,t)),y.getStoriesByPage(e,r).then((function(t){return n(O(T.FETCH_STORIES_SUCCESS,{stories:t}))})).catch((function(t){return n(O(T.FETCH_STORIES_FAILURE),t)}))}}},C=w,I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},n=arguments.length>1?arguments[1]:void 0,e=n.type,r=n.payload;switch(e){case T.FETCH_STORY_IDS_REQUEST:case T.FETCH_STORIES_REQUEST:return Object(s.a)({},t,{isFetching:!0});case T.FETCH_STORY_IDS_SUCCESS:return Object(s.a)({},t,{},r);case T.FETCH_STORIES_SUCCESS:return Object(s.a)({},t,{stories:[].concat(Object(d.a)(t.stories),Object(d.a)(r.stories)),page:t.page+1,isFetching:!1});default:return t}},R=Object(u.c)({app:f,story:I}),x=e(31),j=(e(32),[]);j.push(x.a);var F=Object(u.d)(u.a.apply(void 0,j)),k=function(t){return Object(u.e)(R,t,F)},U=e(33),H=Object(U.a)((function(t){return t.story.storyIds}),(function(t){return t.story.stories}),(function(t,n){return t.length>n.length})),L=e(40),D=e(34),Y=e(42),M=e(1),A=e(35),Q=e(39),z=e(36),N=e.n(z),P=function(t){var n="";return t&&(t.includes("//")||(t="http://".concat(t)),n=N.a.parse(t).hostname),n.includes("www.")&&(n=n.split("www.")[1]),n},B="https://news.ycombinator.com",W="".concat(B,"/item?id="),J="".concat(B,"/user?id="),V=function(t){var n=t.url,e=t.id,r="".concat(W).concat(e);return n||r},$=e(2);function q(){var t=Object($.a)(["\n\tcolor: ",";\n\t&:visited {\n\t\tcolor: ",";\n\t}\n"]);return q=function(){return t},t}function G(){var t=Object($.a)(["\n\tfont-size: 14px;\n\tcolor: ",";\n"]);return G=function(){return t},t}function K(){var t=Object($.a)(["\n\tcolor: ",";\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n\tflex-direction: row;\n\talign-items: center;\n\ttext-decoration: none;\n"]);return K=function(){return t},t}function X(){var t=Object($.a)(["\n\tcolor: ",";\n\tfont-size: 12px;\n\t&:hover {\n\t\tcolor: #fff;\n\t}\n"]);return X=function(){return t},t}function Z(){var t=Object($.a)(["\n\tcolor: ",";\n\tmargin-top: 0;\n\tmargin-bottom: 6px;\n\tfont-weight: 400;\n\tfont-size: 16px;\n\tletter-spacing: 0.4px;\n"]);return Z=function(){return t},t}function tt(){var t=Object($.a)(["\n\tborder-bottom: 1px solid ",";\n\tpadding: 14px 24px;\n\t\n\t&:last-child {\n\t\tborder-bottom: none;\n\t}\n"]);return tt=function(){return t},t}var nt=M.c.li(tt(),(function(t){return t.theme.border})),et=M.c.h3(Z(),(function(t){return t.theme.text})),rt=M.c.a(X(),(function(t){return t.theme.textSecondary})),ot=M.c.a(K(),(function(t){return t.theme.text})),at=M.c.div(G(),(function(t){return t.theme.textSecondary})),it=M.c.a(q(),(function(t){return t.theme.textSecondary}),(function(t){return t.theme.textSecondary})),ct="nofollow noreferrer noopener",ut=function(t){var n=t.by,e=t.kids,r=void 0===e?[]:e,a=t.score,i=t.url,c=t.title,u=t.id,s=(t.type,t.time),l=P(i)||"news.ycombinator.com",f=V({url:i,id:u}),d="".concat(W).concat(u),h="".concat(J).concat(n);return o.a.createElement(nt,null,o.a.createElement(ot,{href:f,rel:ct,target:"_blank"},o.a.createElement(et,null,c," ",o.a.createElement(rt,{href:f,target:"_blank"},"(",l,")"))),o.a.createElement(at,null,a," point by"," ",o.a.createElement(it,{href:h,rel:ct,target:"_blank"},n)," ",Object(Q.a)(new Date(1e3*s).toISOString())," "," | ",o.a.createElement(it,{href:d,rel:ct,target:"_blank"},r.length," Comments")))};function st(){var t=Object($.a)(["\n\tbackground-color: ",";\n\tborder-radius: 4px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return st=function(){return t},t}var lt=M.c.ul(st(),(function(t){return t.theme.backgroundSecondary})),ft=function(t){var n=t.stories;return o.a.createElement(lt,null,n&&n.map((function(t){return o.a.createElement(ut,Object.assign({key:t.id},t))})))};function dt(){var t=Object($.a)(["\n  text-align: center;\n\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n\n"]);return dt=function(){return t},t}function ht(){var t=Object($.a)(["\n  0% {\n    opacity: .2\n  }\n  20% {\n    opacity: 1\n  }\n  0% {\n    opacity: .2\n  }\n"]);return ht=function(){return t},t}var pt=Object(M.d)(ht()),gt=M.c.div(dt(),(function(t){return t.theme.textSecondary}),pt),St=function(){return o.a.createElement(gt,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))},Et={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"};function mt(){var t=Object($.a)(["\n\tcolor: ",";\n\tfont-size: 20px;\n\tfont-weight: 300;\n\tmargin-top: 24px;\n\tmargin-bottom: 26px;\n"]);return mt=function(){return t},t}function vt(){var t=Object($.a)(["\n\twidth: 85%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\theight: 100%;\n\toverflow: hidden;\n\tpadding-bottom: 200px;\n\t\n\t"," {\n\t\twidth: 96%;\n\t}\n"]);return vt=function(){return t},t}var bt=M.c.div(vt(),"@media only screen and (max-width: 768px)"),yt=M.c.h1(mt(),(function(t){return t.theme.textSecondary})),_t=function(t){function n(){var t,e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(L.a)(this,(t=Object(D.a)(n)).call.apply(t,[this].concat(o)))).fetchStories=function(){var t=e.props,n=t.storyIds,r=t.page,o=t.fetchStories,a=t.isFetching;console.log(" --- stories",typeof o),a||o({storyIds:n,page:r})},e}return Object(Y.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var t=this.props,n=t.stories,e=t.hasMoreStories;return o.a.createElement(M.a,{theme:Et},o.a.createElement("div",null,o.a.createElement(bt,null,o.a.createElement(yt,null,"Hacker News Reader"),o.a.createElement(A.a,{dataLength:n.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(St,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(ft,{stories:n})))))}}]),n}(r.Component),Tt=Object(c.b)((function(t){return{hasMoreStories:H(t),stories:t.story.stories,page:t.story.page,storyIds:t.story.storyIds,isFetching:t.story.isFetching}}),(function(t){return{fetchStoriesFirstPage:function(){return t(C.fetchStoryIds())},fetchStories:function(n){var e=n.storyIds,r=n.page;return t(C.fetchStories({storyIds:e,page:r}))}}}))(_t);function Ot(){var t=Object($.a)(['\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n\t\t\t"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n\t\t\tsans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t}\n\tcode {\n\t\tfont-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n\t\t\tmonospace;\n\t}\n\tul {\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\t&:visited {\n\t\t\tcolor: inherit;\n\t\t}\n\t}\n']);return Ot=function(){return t},t}var wt=Object(M.b)(Ot()),Ct=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function It(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}!function(){var t=k({});i.a.render(o.a.createElement(c.a,{store:t},o.a.createElement(wt,null),o.a.createElement(Tt,null)),document.getElementById("root"))}(),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ct?(!function(t){fetch(t).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):It(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):It(t)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.a894823e.chunk.js.map