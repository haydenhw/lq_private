(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)a=i[s],o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-a6828c50":"55cff4ff","chunk-02defa15":"23a74c82","chunk-7b1eb337":"01b8375f","chunk-f18f0272":"9fa1f04c","chunk-001f7a64":"ee667949","chunk-3539f5e3":"f839d219"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-a6828c50":1,"chunk-02defa15":1,"chunk-7b1eb337":1,"chunk-f18f0272":1,"chunk-001f7a64":1,"chunk-3539f5e3":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-a6828c50":"73e565fc","chunk-02defa15":"ad5d1668","chunk-7b1eb337":"a3337843","chunk-f18f0272":"ff1a3344","chunk-001f7a64":"8bd14497","chunk-3539f5e3":"01e4216d"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4fa2":function(e,t,n){"use strict";var r=n("5176"),a=n.n(r),o=(n("96cf"),n("3b8d")),c=n("bc3a"),i=n.n(c);i.a.defaults.withCredentials=!0,i.a.defaults.headers.common.client="newClient";var u=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,c=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},r=n&&n.method?n.method:"get",n=a()({},n,{url:t,method:r}),e.prev=3,e.next=6,i()(n);case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e["catch"](3),"We encountered a network error! \n\n Is the server running?",e.t0.message,alert(e.t0),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{customProperties:!0,iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("transition",{attrs:{name:"router-animation","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[n("router-view")],1)],1)},c=[],i=n("cebc"),u=n("2f62"),l=n("9860"),s={name:"App",created:function(){this.FETCH_MODULES()},methods:Object(i["a"])({},Object(u["b"])([l["a"]]))},d=s,f=(n("5c0b"),n("2877")),m=n("6544"),v=n.n(m),p=n("7496"),h=Object(f["a"])(d,o,c,!1,null,null,null),b=h.exports;v()(h,{VApp:p["a"]});var g=n("8c4f");r["a"].use(g["a"]);var O,E,S,w,M=new g["a"]({mode:"history",base:"",routes:[{path:"/",name:"reactorControls",component:function(){return Promise.all([n.e("chunk-a6828c50"),n.e("chunk-f18f0272"),n.e("chunk-02defa15"),n.e("chunk-3539f5e3")]).then(n.bind(null,"f721"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-a6828c50"),n.e("chunk-02defa15"),n.e("chunk-7b1eb337")]).then(n.bind(null,"a55b"))}},{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-a6828c50"),n.e("chunk-f18f0272"),n.e("chunk-001f7a64")]).then(n.bind(null,"78c1"))}}]}),k=n("a4bb"),T=n.n(k),L=(n("96cf"),n("3b8d")),_=n("bd86"),y=n("5176"),A=n.n(y),j=n("5e23"),C=n("4fa2"),H=new j["b"].Entity("reactions"),P=new j["b"].Entity("modules",{reactions:[H]},{idAttribute:"mod_name"}),U=[P],D=n("e5ce"),x={ZeePrime:{mod_name:"ZeePrime",mod_active:!0,title:"ZeePrime",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!1,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:"0"},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},MV1:{mod_name:"Dosis1",mod_active:!1,title:"Dosis1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!0,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:0},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}}},I=n("9797"),N={modules:x,reactions:{}},R=(O={},Object(_["a"])(O,I["e"],function(e,t){e.modules=t}),Object(_["a"])(O,I["f"],function(e,t){e.reactions=t}),Object(_["a"])(O,I["i"],function(e,t){var n=t.moduleName,r=t.actuatorType,a=t.newState;e.modules[n].moduleState[r]=a}),Object(_["a"])(O,I["h"],function(e,t){var n=t.moduleName,r=t.actuatorType,a=t.newParams,o=a,c=o.level;console.log("** Mutation **"),console.log(n,r,a),a=c&&"number"===typeof c?A()({},a,{level:String(c)}):a;var i=e.modules[n].parameters,u=i[r];i[r]=A()({},u,a)}),Object(_["a"])(O,I["g"],function(e,t){var n=t.moduleName,r=t.actuatorType,a=t.newLimits,o=e.modules[n].limits,c=o[r];o[r]=A()({},c,a)}),O),F=function(e){return function(t,n){var r=t.commit,a=(t.state,t.getters),o=a.selectedModuleName;n=A()({},n,{moduleName:o}),console.log(),console.log("** Mutation Payload **"),console.log(n),console.log(),r(e,n);var c=n,i=c.actuatorType,u=a["".concat(i.toLowerCase(),"UpdatePayload")];console.log(),console.log("** Request Payload**"),console.log(u),console.log(),Object(C["a"])(D["d"],{method:"POST",data:u})}},V=(E={},Object(_["a"])(E,I["a"],function(){var e=Object(L["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,o,c,i,u,l,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Object(C["a"])(D["c"]);case 4:if(a=e.sent,o=a.data,c=o.message,!c||"Not logged in"!==c[0]){e.next=9;break}return e.abrupt("return",M.push("/login"));case 9:i=Object(j["a"])(o,U),u=i.entities,l=u.modules,s=u.reactions,r(I["e"],l),r(I["f"],s),r(I["d"]),n&&M.push(n),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](1),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[1,17]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(_["a"])(E,l["d"],F(I["i"])),Object(_["a"])(E,l["c"],F(I["h"])),Object(_["a"])(E,l["b"],F(I["g"])),E),G=function(e){return T()(e.reactions).filter(function(t){return e.reactions[t].active})[0]},W=function(e){return function(t,n){var r,a=n.activeModuleState,o=n.activeReactionId,c=n.selectedModuleName,i=n.activeModuleParams,u=n.activeModuleLimits,l="".concat(c,"-").concat(e,"-parameters"),s="".concat(c,"-").concat(e,"-limits"),d=u[e],f=d?{"HIGH-value":d["HIGH-value"],"LOW-value":d["LOW-value"]}:{};return r={mid:c,allStates:a,activeId:o,activeSwitch:"ReactionActive-".concat(o),changes:[e]},Object(_["a"])(r,l,i[e]),Object(_["a"])(r,s,f||{}),r}},q=function(e,t){var n=t.activeModuleState,r=t.activeModuleParams,a=t.activeModuleLimits;return{powerOn:n.Heater,level:r.Heater.level,minTemp:a.Heater["LOW-value"],maxTemp:a.Heater["HIGH-value"]}},B=function(e,t){var n=t.activeModuleState,r=t.activeModuleParams;return{powerOn:n.Lamp,level:r.Lamp.level,start:r.Lamp.start,stop:r.Lamp.stop}},Z={activeReactionId:G,activeModule:function(e,t){var n=t.selectedModuleName;return e.modules[n]},activeModuleParams:function(e,t){var n=t.activeModule;return n.parameters},activeModuleState:function(e,t){var n=t.activeModule;return n.moduleState},activeModuleLimits:function(e,t){var n=t.activeModule;return n.limits},air:function(e,t){var n=t.activeModuleState;return n.Air},heater:q,lamp:B,airUpdatePayload:W("Air"),lampUpdatePayload:W("Lamp"),heaterUpdatePayload:W("Heater")},J={state:N,mutations:R,actions:V,getters:Z},Q={selectedModuleName:localStorage.selectedModuleName||"ZeePrime",isFetching:!0},$=(S={},Object(_["a"])(S,I["o"],function(e,t){e.selectedModuleName=t,localStorage.selectedModuleName=t}),Object(_["a"])(S,I["c"],function(e){e.isFetching=!0}),Object(_["a"])(S,I["d"],function(e){e.isFetching=!1}),Object(_["a"])(S,I["b"],function(e){e.isFetching=!1}),S),z={selectedModuleName:function(e){return"Dosis1"===e.selectedModuleName?"LQR":e.selectedModuleName}},K={state:Q,mutations:$,getters:z},X={environmentControls:{selectedControl:localStorage.selectedEnvironmentControl||"Air"}},Y=(w={},Object(_["a"])(w,I["j"],function(e){e.environmentControls.selectedControl="Air",localStorage.selectedEnvironmentControl="Air"}),Object(_["a"])(w,I["m"],function(e){e.environmentControls.selectedControl="Light",localStorage.selectedEnvironmentControl="Light"}),Object(_["a"])(w,I["k"],function(e){e.environmentControls.selectedControl="Heater",localStorage.selectedEnvironmentControl="Heater"}),w),ee={selectedControlPanel:function(e){return e.environmentControls.selectedControl}},te={state:X,mutations:Y,getters:ee};r["a"].use(u["a"]);var ne=new u["a"].Store({modules:{entities:J,modules:K,ui:te}}),re=n("9483");Object(re["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},setfound:function(){console.log("New content is downloading.")},setd:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8"),n("d1e7"),n("c033");r["a"].config.productionTip=!1,new r["a"]({router:M,store:ne,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("6879"),a=n.n(r);a.a},6879:function(e,t,n){},9797:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"o",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"l",function(){return s}),n.d(t,"i",function(){return d}),n.d(t,"h",function(){return f}),n.d(t,"g",function(){return m}),n.d(t,"j",function(){return v}),n.d(t,"m",function(){return p}),n.d(t,"k",function(){return h});var r="FETCH_MODULES_FAILURE",a="FETCH_MODULES_SUCCESS",o="FETCH_MODULES_REQUEST",c="UPDATE_SELECTED_MODULE",i="FETCH_MODULES",u="LOAD_MODULES",l="LOAD_REACTIONS",s="SET_HEATER_LEVEL",d="MUTATE_MODULE_STATE",f="MUTATE_MODULE_PARAMS",m="MUTATE_MODULE_LIMITS",v="SET_AIR_ACTIVE",p="SET_LIGHT_ACTIVE",h="SET_HEATER_ACTIVE"},9860:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});var r="UPDATE_MODULE_STATE",a="UPDATE_MODULE_PARAMS",o="UPDATE_MODULE_LIMITS",c="FETCH_MODULES"},c033:function(e,t,n){},e5ce:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return i});n("cadf"),n("551c"),n("f751"),n("097d");console.log("Vue app served from:","la_warehouse");var r="http://192.168.1.99:8888";console.log("Http requests will be made to: ".concat(r));var a="".concat(r,"/users/login"),o="".concat(r,"/users/logout"),c="".concat(r,"/modules"),i=("".concat(r,"/environment"),"".concat(r,"/updateState"))}});
//# sourceMappingURL=app.a7f4fa91.js.map