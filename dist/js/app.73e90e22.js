(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],p=0,v=[];p<i.length;p++)o=i[p],s[o]&&v.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=a("bb71");a("da64");n["default"].use(s["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{attrs:{app:"",color:"blue-grey lighten-1",dark:""}},[a("v-spacer"),a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Taller ")]),e._v(" / \n      "),a("span",{staticClass:"font-weight-light"},[e._v(e._s(e.$store.getters.getScreen))])]),a("v-spacer")],1),a("v-content",[a("router-view")],1),a("v-footer",{attrs:{color:"blue-grey darken-3",dark:""}},[a("v-layout",{staticClass:"pt-2",attrs:{"justify-center":"",row:"",wrap:""}},[a("p",[a("b",[e._v("\n          Realizado por Miguel Villamizar de ANALITICOM - Mérida \n          "),a("v-icon",{attrs:{small:""}},[e._v("fa-users")])],1)]),a("span",{staticStyle:{margin:"0px 5px"}},[e._v("/")]),a("p",[a("b",[e._v("\n          Reichel Yanez de ANALITICOM - Caracas \n          "),a("v-icon",{attrs:{small:""}},[e._v("fa-users")])],1)])])],1)],1)},o=[],i={name:"App"},l=i,c=a("2877"),u=a("6544"),p=a.n(u),v=a("7496"),f=a("549c"),d=a("553a"),m=a("132d"),h=a("a722"),b=a("9910"),_=a("71d9"),y=a("2a7f"),g=Object(c["a"])(l,r,o,!1,null,null,null);g.options.__file="App.vue";var x=g.exports;p()(g,{VApp:v["a"],VContent:f["a"],VFooter:d["a"],VIcon:m["a"],VLayout:h["a"],VSpacer:b["a"],VToolbar:_["a"],VToolbarTitle:y["a"]});var j=a("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[1==e.inicio?n("v-flex",[n("h1",{staticClass:"blue-grey--text darken-1 text-uppercase text-md-center"},[e._v("\n      Bienvenidos al mini taller de Vue\n    ")]),n("ventaja",{on:{instalar:e.back}})],1):e._e(),2==e.inicio?n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-icon",[e._v("fa-cogs")]),n("span",{staticClass:"headline blue-grey--text darken-3"},[e._v("\n        Instalación de vue como framework junto con vuetify\n      ")]),n("br"),n("span",[e._v("\n        Para iniciar instalaremos \n        "),n("a",{attrs:{href:"https://cli.vuejs.org/guide/installation.html"}},[e._v("vue-cli")])]),n("pre",{staticClass:"language-bash"},[e._v("        "),n("code",{staticStyle:{"box-shadow":"none"}},[e._v("\n          npm install -g @vue/cli\n        ")]),e._v("\n      ")]),n("span",[e._v(" Una vez instalado Vue-cli comprobamos que este instalado")]),n("pre",{staticClass:"language-bash"},[e._v("        "),n("code",{staticStyle:{"box-shadow":"none"}},[e._v("  \n          vue --version # 3.2.1\n        ")]),e._v("\n      ")]),n("span",[e._v(" Ahora crearemos nuestro proyecto")]),n("pre",{staticClass:"language-bash"},[e._v("        "),n("code",{staticStyle:{"box-shadow":"none"}},[e._v("  \n          vue create my-proyect\n        ")]),e._v("\n      ")]),n("span",[e._v("\n        En el proceso de creado nos dejara seleccionar opciones, \n        por defecto salen dos opciones:\n        "),n("ul",[n("li",[n("b",[e._v("default:")]),e._v(" Nos instalara vue, con babel y eslint\n          ")]),n("li",[n("b",[e._v("Manually select features:")]),e._v(" En esta opción podremos customizar \n            nuestra aplicación: Para estos ejemplos usaremos esta opción\n            con vue-router, vuex, babel, eslint.\n          ")])]),e._v("\n        Ahora esperaremos que realice la configuración default con nuestra configuración.\n        Bien luego de instalado nos falta añadir vuetify a nuestra aplicacion primero que todo\n        nos desplazaremos a la carpeta de nuestro proyecto el cual acabamos de crear.\n      ")]),n("pre",{staticClass:"language-bash"},[e._v("        "),n("code",{staticStyle:{"box-shadow":"none"}},[e._v("  \n          cd my-project\n          # Añadiremos vuetify\n          vue add vuetify\n          # seleccionaremos la opcion default de vuetify\n        ")]),e._v("\n      ")]),n("span",[e._v("Bueno ahora podemos iniciar nuestro proyecto ya dentro de la carpeta")]),n("pre",{staticClass:"language-bash"},[e._v("        "),n("code",{staticStyle:{"box-shadow":"none"}},[e._v("\n          npm run serve\n        ")]),e._v("\n      ")]),n("span",[e._v("\n        Esto nos permitira iniciar el servidor local ahora podemos ir a nuestro\n        navegador de preferencia y en las url colocar "),n("b",[e._v("https://localhost:8080")])]),n("br"),n("v-layout",{attrs:{"justify-center":""}},[n("v-btn",{attrs:{color:"success",dark:""},on:{click:e.viewpreview}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-eye")]),e._v("  \n          Vista previa\n        ")],1)],1)],1)],1):e._e(),3==e.inicio?n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Vuetify\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),n("br"),e._v("please join our online\n        "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),n("v-layout",{attrs:{"justify-center":""}},[n("v-btn",{attrs:{color:"red darken-2",dark:""},on:{click:e.back}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-left")]),e._v("\n        Atras\n      ")],1),n("v-btn",{attrs:{color:"success",to:"/base"}},[n("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-right")]),e._v("\n        Pasar a la siguiente lección\n      ")],1)],1)],1):e._e()],1)},w=[],V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-btn",{attrs:{color:"success"},on:{click:function(t){e.$emit("instalar")}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-right")]),e._v("\n    Siguiente\n  ")],1)],1)},C=[],S={},E=S,A=a("8336"),O=Object(c["a"])(E,V,C,!1,null,null,null);O.options.__file="ventajas.vue";var I=O.exports;p()(O,{VBtn:A["a"],VIcon:m["a"],VLayout:h["a"]});var T={components:{ventaja:I},data:function(){return{inicio:1,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},methods:{viewpreview:function(){this.$store.dispatch("setScreen","Vista previa(default)"),this.inicio=3},back:function(){this.$store.dispatch("setScreen","Instalación de vue con vuetify"),this.inicio=2}}},L=T,M=a("a523"),$=a("0e8f"),q=a("adda"),P=Object(c["a"])(L,k,w,!1,null,null,null);P.options.__file="HelloWorld.vue";var z=P.exports;p()(P,{VBtn:A["a"],VContainer:M["a"],VFlex:$["a"],VIcon:m["a"],VImg:q["a"],VLayout:h["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-stepper",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{complete:e.step>1,step:"1",color:"green lighten-2"}},[e._v("\n        Estructura base de vue\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>2,step:"2",color:"green lighten-1"}},[e._v("\n        Estructura de condicionales\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>3,step:"3",color:"green darken-1"}},[e._v("\n        Estructura de repetión\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>4,step:"4",color:"green darken-2"}},[e._v("\n        Inclusión de un componente dentro de otro\n      ")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("estructura")],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{attrs:{color:"blue-grey darken-2",dark:""},on:{click:function(t){e.changeStep(2)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-right")]),e._v("\n              Siguiente lección\n            ")],1)],1)],1)],1)],1)],1)},N=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"body-2"},[e._v("\n      Bueno ya después de haber concluido con la creación de nuestro proyecto, \n      pasaremos a explicar la estructura de las carpetas que veremos en vue, \n      y crearemos nuestro primer componente\n    ")])]),a("v-flex",{attrs:{xs12:"","my-3":""}},[a("span",{staticClass:"display-1 blue-grey--text darken-3"},[a("b",[e._v("Estructura inicial de las carpetas")]),a("v-treeview",{attrs:{open:e.open,items:e.items,activatable:"","item-key":"name","open-on-click":""},scopedSlots:e._u([{key:"prepend",fn:function(t){var n=t.item,s=t.open;return[n.file?a("v-icon",[e._v("\n            "+e._s(e.files[n.file])+"\n          ")]):a("v-icon",[e._v("\n            "+e._s(s?"fa-folder-open":"fa-folder")+"\n          ")])]}}]),model:{value:e.tree,callback:function(t){e.tree=t},expression:"tree"}})],1)]),a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("span",{staticClass:"body-2"},[e._v("\n      Ahora que sabemos cual es la estructura de las carpetas en la carpeta components,\n      crearemos una carpeta "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task")]),e._v(" \n      dentro crearemos dos archivos, un "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task.vue")]),e._v("\n      en este alojaremos toda la estructura visual del componente usando etiquetas tan simples\n      como un html, o más customizadas como son al llamar a otro componente creando una comunicación\n      padre-hijo(más adelante sera mejor explicado) y en este se hace el llamado al otro archivo. \n      "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task.js")]),e._v(" En este archivo realizaremos todas las\n      funcionalidades de nuestro componente. La carpeta quedaria del siguiente modo:\n    ")]),a("v-treeview",{staticClass:"mt-3",attrs:{open:e.open2,items:e.items2,activatable:"","item-key":"name","open-on-click":""},scopedSlots:e._u([{key:"prepend",fn:function(t){var n=t.item,s=t.open;t.leaf;return[n.file?a("v-icon",[e._v("\n          "+e._s(e.files[n.file])+"\n        ")]):a("v-icon",[e._v("\n          "+e._s(s?"fa-folder-open":"fa-folder")+"\n        ")])]}}]),model:{value:e.tree2,callback:function(t){e.tree2=t},expression:"tree2"}})],1)],1)},D=[],R={data:function(){return{open:["src"],open2:["components"],files:{html:"fa-html5",js:"fa-file-code-o",json:"fa-file-code-o",png:"fa-picture-o",txt:"fa-file-text"},tree:[],tree2:[],items2:[{name:"components",children:[{name:"task",children:[{name:"task.vue",file:"txt"},{name:"task.js",file:"js"}]}]}],items:[{name:"new-project",children:[{name:".git"},{name:"node_modules"},{name:"public",children:[{name:"favicon.ico",file:"png"},{name:"index.html",file:"html"}]},{name:"src",children:[{name:"assets",children:[{name:"logo.png",file:"png"}]},{name:"components"},{name:"plugins",children:[{name:"vuetify.js",file:"txt"}]},{name:"App.vue",file:"txt"},{name:"main.js",file:"js"},{name:"router.js",file:"js"},{name:"store.js",file:"js"}]},{name:".gitignore",file:"txt"},{name:"babel.config.js",file:"js"},{name:"package.json",file:"json"},{name:"README.md",file:"txt"}]}]}}},W=R,H=a("eb2a"),J=Object(c["a"])(W,F,D,!1,null,null,null);J.options.__file="estructura.vue";var Q=J.exports;p()(J,{VFlex:$["a"],VIcon:m["a"],VLayout:h["a"],VTreeview:H["a"]});var U={components:{estructura:Q},data:function(){return{step:1}},methods:{setTitle:function(){this.$store.dispatch("setScreen","Lección Básica "+this.step)},changeStep:function(e){this.step=e,this.setTitle()}},mounted:function(){this.setTitle()}},Y=U,G=a("ce7e"),K=a("7e85"),X=a("e516"),Z=a("9c54"),ee=a("56a4"),te=Object(c["a"])(Y,B,N,!1,null,null,null);te.options.__file="base.vue";var ae=te.exports;p()(te,{VBtn:A["a"],VDivider:G["a"],VFlex:$["a"],VIcon:m["a"],VLayout:h["a"],VStepper:K["a"],VStepperContent:X["a"],VStepperHeader:Z["a"],VStepperItems:Z["b"],VStepperStep:ee["a"]}),n["default"].use(j["a"]);var ne=new j["a"]({routes:[{path:"/",name:"home",component:z},{path:"/base",name:"base",component:ae}]}),se=a("2f62");n["default"].use(se["a"]);var re=new se["a"].Store({state:{screenNow:"Ventajas de vue"},getters:{getScreen:function(e){return e.screenNow}},mutations:{setScreen:function(e,t){e.screenNow=t}},actions:{setScreen:function(e,t){var a=e.commit;a("setScreen",t)}}}),oe=a("97fa"),ie=(a("84bf"),a("8009"),a("ce5b")),le=a.n(ie);n["default"].use(oe["a"]),n["default"].config.productionTip=!1,n["default"].use(le.a,{iconfont:"fa4"}),new n["default"]({router:ne,store:re,render:function(e){return e(x)}}).$mount("#app")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.73e90e22.js.map