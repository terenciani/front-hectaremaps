(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1fde":function(t,e,a){"use strict";a("fc3f")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-navigation"),a("v-main",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[t._l(t.items,(function(e,r){return[a("v-list-item",{key:r,attrs:{link:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-title",{staticClass:"text-capitalize"},[t._v(" "+t._s(e.title)+" ")])],1),a("v-divider",{key:"divider-"+r})]})),a("v-list-item",{attrs:{link:"",to:"/admin"}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-login")])],1),a("v-list-item-title",{staticClass:"text-capitalize"},[t._v(" Entrar ")])],1),a("v-divider"),a("v-list-item",{attrs:{link:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account-plus-outline")])],1),a("v-list-item-title",{staticClass:"text-capitalize"},[t._v(" Solicitar Cadastro ")])],1)],2)],1),a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer",{staticClass:"hidden-md-and-up"}),a("v-toolbar-items",t._l(t.items,(function(e,r){return a("v-btn",{key:r,staticClass:"text-uppercase hidden-sm-and-down",attrs:{text:"",to:e.route}},[t._v(t._s(e.title))])})),1),a("v-spacer",{staticClass:"hidden-sm-and-down"}),a("v-toolbar-items",[a("v-btn",{attrs:{text:"",to:"/admin"}},[t._v("ENTRAR")]),a("v-btn",{staticClass:"grey darken-3",attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("SOLICITAR CADASTRO")])],1)],1),a("v-dialog",{attrs:{"max-width":"600",fullscreen:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"teal"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.cancel()}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Solicitação de Cadastro")]),a("v-spacer"),a("v-toolbar-items",[t.$vuetify.breakpoint.xs?a("v-btn",{attrs:{text:""},on:{click:function(e){return t.submit()}}},[t._v(" Confirmar ")]):t._e()],1)],1),a("v-card-text",{staticClass:"pt-5",style:t.$vuetify.breakpoint.xs?"width: 100%":""},[a("v-container",{staticClass:"py-5"},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{class:t.$vuetify.breakpoint.xs?"py-2":"",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Nome *",required:"",rules:t.nameRules},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),a("v-col",{class:t.$vuetify.breakpoint.xs?"py-2":"",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Sobrenome *",rules:t.lastNameRules,required:""},model:{value:t.user.lastname,callback:function(e){t.$set(t.user,"lastname",e)},expression:"user.lastname"}})],1),a("v-col",{class:t.$vuetify.breakpoint.xs?"py-2":"",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"E-mail *",rules:t.emailRules,required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("v-col",{class:t.$vuetify.breakpoint.xs?"py-2":"",attrs:{cols:"12",md:"6"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:t.mask,expression:"mask"}],attrs:{rules:t.phoneRules,placeholder:"(99) 9 9999-9999",label:"Telefone de contato *",required:""},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}})],1),a("v-col",{class:t.$vuetify.breakpoint.xs?"py-2":"",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",rules:t.passwordRules,hint:"A senha deve ter no mínimo 8 characteres.",label:"Senha de acesso *",required:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("v-col",{class:t.$vuetify.breakpoint.xs?"py-2":"",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.confirmRules,"append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",label:"Confirmação de Senha *",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.user.confirmpass,callback:function(e){t.$set(t.user,"confirmpass",e)},expression:"user.confirmpass"}})],1)],1)],1)],1)],1),t.$vuetify.breakpoint.xs?t._e():a("v-card-actions",{staticClass:"pb-5"},[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.cancel()}}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.submit()}}},[t._v(" Confirmar ")])],1)],1)],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"350"},model:{value:t.loadingDialog,callback:function(e){t.loadingDialog=e},expression:"loadingDialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[a("v-card-text",[t._v(" Aguarde! Sua solicitação está sendo enviada!")]),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-snackbar",{attrs:{color:t.response.type},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({class:t.response.type,attrs:{text:""},on:{click:function(e){t.response.active=!1}}},"v-btn",r,!1),[t._v(" Fechar ")])]}}]),model:{value:t.response.active,callback:function(e){t.$set(t.response,"active",e)},expression:"response.active"}},[t._v(" "+t._s(t.response.message)+" ")])],1)},i=[],c=a("1da1"),l=(a("96cf"),a("d4ec")),u=a("bee2"),d=(a("b0c0"),a("5319"),a("ac1f"),a("4d63"),a("25f0"),a("bc3a")),v=a.n(d),m={apiHost:"https://hectaremaps-api.herokuapp.com",privateArea:"https://hectaremaps-admin.herokuapp.com",decimalPlaces:2},p=v.a.create({baseURL:m.apiHost}),f=a("6821"),h=a.n(f),b=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"signUp",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=a.email.toLowerCase(),e.next=3,t.capitalizeCase(a.name);case 3:return e.t1=e.sent,e.next=6,t.unMask(a.phone);case 6:return e.t2=e.sent,e.next=9,t.capitalizeCase(a.lastname);case 9:return e.t3=e.sent,e.next=12,h()(a.password);case 12:return e.t4=e.sent,r={email:e.t0,name:e.t1,phone:e.t2,lastname:e.t3,password:e.t4},e.prev=14,e.next=17,p.post("signup",r);case 17:return n=e.sent,e.abrupt("return",n.data);case 21:throw e.prev=21,e.t5=e["catch"](14),"Não foi possível efetuar seu cadastro. Tente mais tarde!";case 24:case"end":return e.stop()}}),e,null,[[14,21]])})));function a(t){return e.apply(this,arguments)}return a}()},{key:"unMask",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="",a=0;a<t.length;a++){var r=t.charAt(a);"("!=r&&")"!=r&&"-"!=r&&" "!=r&&(e+=r)}return e}},{key:"capitalizeCase",value:function(t){var e,a,r,n;for(r=t.replace(/([^\W_]+[^\s-]*) */g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})),n=["De","Da","Do","Dos","Das","E"],e=0,a=n.length;e<a;e++)r=r.replace(new RegExp("\\s"+n[e]+"\\s","g"),(function(t){return t.toLowerCase()}));return r}}]),t}(),g={name:"AppNavigation",data:function(){var t=this;return{user:{},dialog:!1,valid:!0,show:!1,show2:!1,mask:["(",/\d/,/\d/,") ",/\d/," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],loadingDialog:!1,appTitle:"Hectare Maps",drawer:!1,items:[{title:"Home",route:"/",icon:"mdi-home-outline"},{title:"Sobre",route:"#about",icon:"mdi-book-open-page-variant-outline"},{title:"Serviços",route:"#services",icon:"mdi-drone"},{title:"Planos",route:"#plans",icon:"mdi-cart-outline"},{title:"Contato",route:"#contact",icon:"mdi-card-account-phone-outline"}],nameRules:[function(t){return!!t||"O nome é obrigatório."}],lastNameRules:[function(t){return!!t||"O sobrenome é obrigatório."}],emailRules:[function(t){return!!t||"O e-mail é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"Informe um e-mail válido."}],phoneRules:[function(t){return!!t||"O telefone é obrigatório."}],passwordRules:[function(t){return!!t||"A senha é obrigatória."},function(t){return t&&t.length>=8||"A senha deve ter no mínimo 8 characteres."}],confirmRules:[function(t){return!!t||"A confirmação de senha é obrigatória."},function(e){return e&&e==t.user.password||"As senhas não conferem."}],response:{message:"",type:"success",active:!1}}},methods:{cancel:function(){this.$refs.form.resetValidation(),this.$refs.form.reset(),this.dialog=!1,this.loadingDialog=!1,this.response={message:"",type:"success",active:!1},this.user={}},submit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return t.dialog=!1,t.loadingDialog=!0,e.prev=4,e.next=7,b.signUp(t.user);case 7:a=e.sent,t.response.message=a.message,200==a.status?t.response.type="success":t.response.type="warning",t.$refs.form.resetValidation(),t.$refs.form.reset(),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](4),t.response.message=e.t0,t.response.type="error";case 18:return e.prev=18,t.loadingDialog=!1,t.response.active=!0,t.user={},e.finish(18);case 23:case"end":return e.stop()}}),e,null,[[4,14,18,23]])})))()}}},x=g,k=a("2877"),w=Object(k["a"])(x,o,i,!1,null,"dab5ccfa",null),_=w.exports,y={name:"App",components:{AppNavigation:_},beforeMount:function(){this.$store.dispatch("loadHomeData")}},C=y,D=Object(k["a"])(C,n,s,!1,null,null,null),R=D.exports,$=(a("99af"),a("8c4f")),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("home-hero"),a("home-about",{staticClass:"padding-section",attrs:{id:"about"}}),a("home-service",{attrs:{id:"services"}}),a("home-plan",{staticClass:"padding-section",attrs:{id:"plans"}}),a("home-video"),a("home-contact",{staticClass:"padding-section",attrs:{id:"contact"}}),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"","x-large":"",right:"",color:"teal"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-chevron-up ")])],1),a("div",{staticClass:"text-center"},[t._v("® Todos os direitos reservados.")])],1)},j=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{staticClass:"home-hero",staticStyle:{"max-height":"100vh"},attrs:{height:"100vh",src:t.heroData.background?""+t.host+t.heroData.background:""}},[a("v-row",{attrs:{align:"end",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-4 mb-4 text-shadow font-weight-thin"},[t._v(" "+t._s(t.heroData.title)+" ")]),a("h1",{staticClass:"display-1 text-shadow mb-5"},[t._v(" "+t._s(t.heroData.subtitle)+" ")]),a("v-btn",{staticClass:"mt-5 white--text text-shadow shadow",attrs:{"x-large":"",color:"teal",to:"/admin?servicerequest"}},[t._v(" Enviar Imagens "),a("v-icon",{attrs:{right:"",light:""}},[t._v(" mdi-cloud-upload ")])],1)],1)],1)],1)},S=[],H={name:"HomeHero",data:function(){return{host:m.apiHost+"/assets/"}},computed:{heroData:function(){return this.$store.getters.getHero?this.$store.getters.getHero:{}}}},P=H,E=(a("5e88"),Object(k["a"])(P,A,S,!1,null,"0629fce8",null)),T=E.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{staticClass:"display-2 text-center"},[t._v(t._s(t.aboutData.title))])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{md:"8",sm:"10",xs:"12"},domProps:{innerHTML:t._s(t.aboutData.text)}})],1)],1)},q=[],M={name:"HomeAbout",computed:{aboutData:function(){return this.$store.getters.getAbout?this.$store.getters.getAbout:{}}}},I=M,V=Object(k["a"])(I,N,q,!1,null,"6d89d162",null),z=V.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:t.serviceData.background?""+t.host+t.serviceData.background:"",height:"700"}},[a("v-container",[a("v-row",{staticClass:"mt-5"},[a("v-col",{staticClass:"display-2 text-center mb-5",attrs:{xs:"12"}},[t._v(t._s(t.serviceData.title))])],1),a("v-row",{staticClass:"d-none d-sm-flex my-5",attrs:{align:"center"}},[a("v-col",{attrs:{xs:"12"}},[a("v-card",{attrs:{height:"400"}},[a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.services,(function(e){return a("v-tab",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.services,(function(e){return a("v-tab-item",{key:e.id},[a("v-card",{attrs:{color:"basil"}},[a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-col",{attrs:{sm:"6",md:"6"}},[a("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.utilFormatter.numberToMoney(e.price)))]),a("v-card-text",{staticClass:" text-justify"},[t._v(t._s(e.description))])],1),a("v-col",{staticClass:"pa-5",attrs:{sm:"5",md:"4"}},[a("v-img",{attrs:{src:t.host+e.image}})],1)],1)],1)],1)})),1)],1)],1)],1),a("v-row",{staticClass:"d-flex d-sm-none my-5"},[a("v-carousel",{attrs:{cycle:"",height:"300","hide-delimiter-background":""}},t._l(t.services,(function(e){return a("v-carousel-item",{key:e.id,attrs:{src:t.host+e.image}},[a("v-sheet",{attrs:{color:"transparent",height:"100%"}},[a("v-row",{staticClass:"fill-height pt-5",attrs:{align:"start",justify:"center"}},[a("div",{staticClass:"display-1"},[t._v(t._s(e.name))])])],1)],1)})),1)],1)],1)],1)},L=[],U=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"getAll",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("service");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0.response.data;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),B=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"numberToMoney",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t)}}]),t}(),J={name:"HomeService",data:function(){return{host:m.apiHost+"/assets/",services:[],utilFormatter:B,tab:null}},methods:{init:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U.getAll();case 2:t.services=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},computed:{serviceData:function(){return this.$store.getters.getService?this.$store.getters.getService:{}}},created:function(){this.init()}},G=J,W=Object(k["a"])(G,F,L,!1,null,"51510cda",null),Y=W.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{staticClass:"display-2 text-center mb-5",attrs:{xs:"12"}},[t._v(" "+t._s(t.planData.title))])],1),a("v-row",t._l(t.plansAndItems,(function(e){return a("v-col",{key:e.id_plan,attrs:{cols:"12",sm:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{elevation:"12"}},[a("v-card-title",{staticClass:"teal d-block text-center"},[t._v(t._s(e.name)+" "),a("br"),a("div",{staticClass:"text-subtitle-1"},[t._v(" "+t._s(t.utilFormatter.numberToMoney(e.price))+" ")])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[t._l(e.plan_items,(function(e){return[a("div",{key:e.id_item_plan,staticClass:"text--primary"},[t._v(" "+t._s(e.description)+" "),a("div",[t._v(" "+t._s(e.quantity)+"/ "+t._s(e.unit)+" x "+t._s(t.utilFormatter.numberToMoney(e.price))+" ")])]),a("v-divider",{key:4*e.id_item_plan,staticClass:"my-4"})]})),e.observation?a("div",{staticClass:"text-subtitle-2"},[t._v(" * "+t._s(e.observation)+" ")]):t._e()],2),a("v-fade-transition",[n?a("v-overlay",{attrs:{absolute:"",color:"#036358"}},[a("v-btn",{attrs:{large:"",color:"primary accent-4",to:"/admin?plancontract"}},[t._v(" Contratar ")])],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)],1)},K=[],Q=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"getAllPlansAndItems",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("plansanditems");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0.response.data;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),X={name:"HomePlan",data:function(){return{adminPage:m.privateArea,plansAndItems:[],utilFormatter:B}},methods:{init:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q.getAllPlansAndItems();case 2:t.plansAndItems=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},computed:{planData:function(){return this.$store.getters.getPlan?this.$store.getters.getPlan:{}}},created:function(){this.init()}},tt=X,et=Object(k["a"])(tt,Z,K,!1,null,"4b5f8080",null),at=et.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{staticClass:"py-5",attrs:{src:t.videoData.background?""+t.host+t.videoData.background:"",height:"650"}},[a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"display-2 text-center mb-5",attrs:{cols:"12"}},[t._v("Equipamentos de Última Geração")]),a("v-col",{attrs:{cols:"12",md:"8"}},[t.videoSources.length>0?a("v-card",{attrs:{color:"teal lighten-2",dark:""}},[a("vue-video",{attrs:{sources:t.videoSources}})],1):t._e()],1)],1)],1)],1)},nt=[],st=a("7750"),ot={name:"HomeVideo",components:{vueVideo:st["a"]},data:function(){return{host:m.apiHost+"/assets/"}},computed:{videoData:function(){return this.$store.getters.getVideo?this.$store.getters.getVideo:{}},videoSources:function(){var t;return""==(null===(t=this.videoData)||void 0===t?void 0:t.src)?[]:[{src:"".concat(this.host).concat(this.videoData.src),type:"video/mp4"}]}}},it=ot,ct=Object(k["a"])(it,rt,nt,!1,null,"2aca350e",null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"display-2 text-center mb-5",attrs:{cols:"12"}},[t._v(t._s(t.contactData.title))]),a("v-row",{staticClass:"pb-0 px-5 mb-0",attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"12",md:"5"}},[a("div",{staticClass:"text-h5"},[t._v("Entre em contato conosco")]),a("div",{staticClass:"text-subtitle-1 mb-5"},[t._v(" Para suporte ou qualquer questão envie um e-mail para nós: "),a("a",{attrs:{href:"mailto:"+t.contactData.email}},[t._v(t._s(t.contactData.email))])]),a("div",{staticClass:"font-weight-medium text-h6"},[a("v-icon",[t._v("mdi-google-maps")]),t._v(" Endereço ")],1),a("div",{staticClass:"text-subtitle-1 mb-5"},[t._v(" "+t._s(t.contactData.address)+" ")]),a("div",{staticClass:"font-weight-medium text-h6"},[a("v-icon",[t._v("mdi-phone")]),t._v(" Telefone ")],1),a("div",{staticClass:"text-subtitle-1 mb-5"},[t._v(" "+t._s(t.contactData.phone)+" ")]),t.hasSocialNetwork?a("div",{staticClass:"font-weight-medium text-h6"},[a("v-icon",[t._v("mdi-wan")]),t._v(" Nossas redes sociais ")],1):t._e(),t.hasSocialNetwork?a("div",{staticClass:"text-subtitle-1 mb-5"},[""!=t.contactData.instagram?a("a",{staticClass:"social-network",attrs:{href:t.contactData.instagram,target:"_blank"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-instagram")])],1):t._e(),""!=t.contactData.twitter?a("a",{staticClass:"social-network",attrs:{href:t.contactData.twitter,target:"_blank"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-twitter")])],1):t._e(),""!=t.contactData.facebook?a("a",{staticClass:"social-network",attrs:{href:t.contactData.facebook,target:"_blank"}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-facebook")])],1):t._e(),""!=t.contactData.pinterest?a("a",{staticClass:"social-network",attrs:{href:t.contactData.pinterest,target:"_blank"}},[a("v-icon",[t._v("mdi-pinterest")])],1):t._e()]):t._e()]),a("v-col",{staticClass:"hidden-md-and-up",attrs:{cols:"12"}},[a("v-divider")],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-h5"},[t._v(" Preencha o formulário e pressione enviar. ")])]),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{outlined:"",rules:t.nameRules,label:"Insira seu nome",required:""},model:{value:t.email.name,callback:function(e){t.$set(t.email,"name",e)},expression:"email.name"}})],1),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.emailRules,type:"email",outlined:"",label:"Insira seu e-mail",required:""},model:{value:t.email.email,callback:function(e){t.$set(t.email,"email",e)},expression:"email.email"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",rules:t.messageRules,label:"Message",required:""},model:{value:t.email.message,callback:function(e){t.$set(t.email,"message",e)},expression:"email.message"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-btn",{attrs:{tile:"",large:"",disabled:t.loadingDialog,loading:t.loadingDialog,dark:"",color:"teal"},on:{click:t.submit}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-send ")]),t._v(" Enviar ")],1)],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"350"},model:{value:t.loadingDialog,callback:function(e){t.loadingDialog=e},expression:"loadingDialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[a("v-card-text",[t._v(" Aguarde! Seu e-mail está sendo enviado!")]),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-snackbar",{attrs:{color:t.emailResponse.type},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({class:t.emailResponse.type,attrs:{text:""},on:{click:function(e){t.emailResponse.active=!1}}},"v-btn",r,!1),[t._v(" Fechar ")])]}}]),model:{value:t.emailResponse.active,callback:function(e){t.$set(t.emailResponse,"active",e)},expression:"emailResponse.active"}},[t._v(" "+t._s(t.emailResponse.message)+" ")])],1)},dt=[],vt=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"sendEmail",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.post("email",e);case 3:return a=t.sent,t.abrupt("return",a.data);case 7:throw t.prev=7,t.t0=t["catch"](0),"Não foi possível enviar seu e-mail. Tente mais tarde!";case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),mt={name:"HomeContact",data:function(){return{email:{},valid:!0,loadingDialog:!1,nameRules:[function(t){return!!t||"O nome é obrigatório"},function(t){return/[a-zA-Z]/.test(t)||"O nome deve possuir somente letras."}],emailRules:[function(t){return!!t||"O e-mail é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"Informe um e-mail válido."}],messageRules:[function(t){return!!t||"A mensagem é obrigatória"},function(t){return t&&t.length>=20||"A mensagem deve ter pelo menos 20 caracteres."}],emailResponse:{message:"",type:"success",active:!1}}},computed:{contactData:function(){return this.$store.getters.getContact?this.$store.getters.getContact:{}},hasSocialNetwork:function(){return!!this.contactData&&(""!=this.contactData.instagram||""!=this.contactData.twitter||""!=this.contactData.facebook||""!=this.contactData.pinterest)}},methods:{submit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return t.loadingDialog=!0,e.prev=3,e.next=6,vt.sendEmail(t.email);case 6:t.emailResponse.message=e.sent,t.emailResponse.type="success",t.$refs.form.resetValidation(),t.$refs.form.reset(),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](3),t.emailResponse.message=e.t0,t.emailResponse.type="error";case 16:return e.prev=16,t.loadingDialog=!1,t.emailResponse.active=!0,t.email={},e.finish(16);case 21:case"end":return e.stop()}}),e,null,[[3,12,16,21]])})))()}}},pt=mt,ft=(a("1fde"),Object(k["a"])(pt,ut,dt,!1,null,"5fd893e4",null)),ht=ft.exports,bt={name:"Home",components:{HomeHero:T,HomeAbout:z,HomeService:Y,HomePlan:at,HomeContact:ht,HomeVideo:lt},data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},gt=bt,xt=(a("cccb"),Object(k["a"])(gt,O,j,!1,null,null,null)),kt=xt.exports,wt=a("3384"),_t=a.n(wt);r["default"].use($["a"]);var yt=[{path:"/",name:"Home",component:kt},{path:"/admin",beforeEnter:function(t){window.open("".concat(m.privateArea,"?r=").concat(t.fullPath.substring(7)))}}],Ct=new $["a"]({scrollBehavior:function(t,e,a){var r=0;return t.hash?r=t.hash:a&&(r=a.y),_t()(r)},mode:"history",base:"/",routes:yt}),Dt=Ct,Rt=a("2f62"),$t=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"getData",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.get("homedata");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0.response.data;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),Ot={state:{hero:{title:"",subtitle:"",background:""},about:{title:"",text:""},service:{title:"",background:""},plan:{title:""},video:{title:"",src:"",background:""},contact:{title:"",email:"",address:"",phone:"",instagram:"",twitter:"",facebook:"",pinterest:""}},getters:{getHero:function(t){return t.hero},getAbout:function(t){return t.about},getService:function(t){return t.service},getPlan:function(t){return t.plan},getVideo:function(t){return t.video},getContact:function(t){return t.contact}},mutations:{setHero:function(t,e){t.hero.title=e.title,t.hero.subtitle=e.subtitle,t.hero.background=e.background},setAbout:function(t,e){t.about.title=e.title,t.about.text=e.text},setService:function(t,e){t.service.title=e.title,t.service.background=e.background},setPlan:function(t,e){t.plan.title=e.title},setVideo:function(t,e){t.video.title=e.title,t.video.src=e.src,t.video.background=e.background},setContact:function(t,e){t.contact.title=e.title,t.contact.email=e.email,t.contact.address=e.address,t.contact.phone=e.phone,t.contact.instagram=e.instagram,t.contact.twitter=e.twitter,t.contact.facebook=e.facebook,t.contact.pinterest=e.pinterest},reloadHome:function(t){t.hero.title="",t.hero.subtitle="",t.hero.background="",t.about.title="",t.about.text="",t.service.title="",t.service.background="",t.video.title="",t.video.src="",t.video.background="",t.contact.title="",t.contact.email="",t.contact.address="",t.contact.phone="",t.contact.instagram="",t.contact.twitter="",t.contact.facebook="",t.contact.pinterest=""}},actions:{loadHomeData:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$t.getData();case 3:a=e.sent,t.commit("setHero",a.hero),t.commit("setAbout",a.about),t.commit("setService",a.service),t.commit("setPlan",a.plan),t.commit("setVideo",a.video),t.commit("setContact",a.contact),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),t.commit("reloadHome"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}};r["default"].use(Rt["a"]);var jt=new Rt["a"].Store({modules:{home:Ot}}),At=a("ce5b"),St=a.n(At);a("bf40");r["default"].use(St.a);var Ht=new St.a({}),Pt=a("b6d0");a("e792");r["default"].use(Pt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:Dt,store:jt,vuetify:Ht,render:function(t){return t(R)}}).$mount("#app")},"5ced":function(t,e,a){},"5e88":function(t,e,a){"use strict";a("bae9")},bae9:function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},fc3f:function(t,e,a){}});
//# sourceMappingURL=app.fdd2748b.js.map