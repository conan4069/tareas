(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],v=0,d=[];v<i.length;v++)o=i[v],n[o]&&d.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"18f3":function(e,t,a){e.exports=a.p+"img/mvvm.8a919f39.png"},5464:function(e,t,a){e.exports=a.p+"img/vue-vs-react.10741733.jpg"},5509:function(e,t,a){e.exports=a.p+"img/vue-progressive.f7330abb.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=a("bb71");a("da64");s["default"].use(n["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",clipped:"",stateless:"","hide-overlay":"","mini-variant":"sm"===e.$vuetify.breakpoint.name||"xs"===e.$vuetify.breakpoint.name},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-tile",[a("v-list-tile-action",[a("router-link",{attrs:{to:"/"}},[a("v-icon",[e._v("fa-home")])],1)],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{attrs:{to:"/"}},[a("v-list-tile-title",[e._v("\n                          Qué es Vue y como instalarlo\n                      ")])],1)],1)],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("router-link",{attrs:{to:"/base"}},[a("v-icon",[e._v("fa-book")])],1)],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{attrs:{to:"/base"}},[a("v-list-tile-title",[e._v("\n                        Lecciones\n                      ")])],1)],1)],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("router-link",{attrs:{to:"/task"}},[a("v-icon",[e._v("fa-tasks")])],1)],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{attrs:{to:"/task"}},[a("v-list-tile-title",[e._v("\n                        Administrador de tareas\n                      ")])],1)],1)],1)],1)],1),a("v-toolbar",{attrs:{app:"",color:"blue-grey lighten-1",dark:""}},[a("v-spacer"),a("v-toolbar-title",{staticClass:"headline text-uppercase"},["task"!=e.$route.name?a("span",[e._v("Taller / ")]):e._e(),a("span",{staticClass:"font-weight-light"},[e._v(e._s(e.$store.getters.getScreen))])]),a("v-spacer"),a("v-toolbar-side-icon",{on:{click:function(t){return t.stopPropagation(),e.show(t)}}})],1),a("v-content",[a("router-view")],1),a("v-footer",{attrs:{color:"blue-grey darken-3",dark:""}},[a("v-layout",{staticClass:"pt-2",attrs:{"justify-center":"",row:"",wrap:""}},[a("p",[a("b",[e._v("\n          Realizado por Miguel Villamizar de ANALITICOM - Mérida \n          "),a("v-icon",{attrs:{small:""}},[e._v("fa-users")])],1)]),a("span",{staticStyle:{margin:"0px 5px"}},[e._v("/")]),a("p",[a("b",[e._v("\n          Reichel Yanez de ANALITICOM - Caracas \n          "),a("v-icon",{attrs:{small:""}},[e._v("fa-users")])],1)])])],1)],1)},o=[],i={name:"App",data:function(){return{drawer:!1}},methods:{show:function(){this.drawer=!this.drawer}}},l=i,c=a("2877"),u=a("6544"),v=a.n(u),d=a("7496"),p=a("549c"),m=a("553a"),f=a("132d"),h=a("a722"),b=a("ba95"),_=a("40fe"),y=a("5d23"),g=a("f774"),x=a("9910"),k=a("71d9"),w=a("706c"),C=a("2a7f"),j=Object(c["a"])(l,r,o,!1,null,null,null);j.options.__file="App.vue";var V=j.exports;v()(j,{VApp:d["a"],VContent:p["a"],VFooter:m["a"],VIcon:f["a"],VLayout:h["a"],VListTile:b["a"],VListTileAction:_["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VNavigationDrawer:g["a"],VSpacer:x["a"],VToolbar:k["a"],VToolbarSideIcon:w["a"],VToolbarTitle:C["a"]});var S=a("8c4f"),q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[1==e.inicio?s("v-flex",[s("h1",{staticClass:"blue-grey--text darken-1 text-uppercase text-md-center"},[e._v("\n      Bienvenidos al mini taller de Vue\n    ")]),s("ventaja",{on:{instalar:e.back}})],1):e._e(),2==e.inicio?s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-icon",[e._v("fa-cogs")]),s("span",{staticClass:"headline blue-grey--text darken-3"},[e._v("\n        Instalación de vue como framework junto con vuetify\n      ")]),s("br"),s("span",[e._v("\n        Para iniciar instalaremos \n        "),s("a",{attrs:{href:"https://cli.vuejs.org/guide/installation.html"}},[e._v("vue-cli")])]),s("pre",{staticClass:"language-bash"},[e._v("        "),s("code",{staticStyle:{"box-shadow":"none"}},[e._v("\n          npm install -g @vue/cli\n        ")]),e._v("\n      ")]),s("span",[e._v(" Una vez instalado Vue-cli comprobamos que este instalado")]),s("pre",{staticClass:"language-bash"},[e._v("        "),s("code",{staticStyle:{"box-shadow":"none"}},[e._v("  \n          vue --version # 3.2.1\n        ")]),e._v("\n      ")]),s("span",[e._v(" Ahora crearemos nuestro proyecto")]),s("pre",{staticClass:"language-bash"},[e._v("        "),s("code",{staticStyle:{"box-shadow":"none"}},[e._v("  \n          vue create my-proyect\n        ")]),e._v("\n      ")]),s("span",[e._v("\n        En el proceso de creado nos dejara seleccionar opciones, \n        por defecto salen dos opciones:\n        "),s("ul",[s("li",[s("b",[e._v("default:")]),e._v(" Nos instalara vue, con babel y eslint\n          ")]),s("li",[s("b",[e._v("Manually select features:")]),e._v(" En esta opción podremos customizar \n            nuestra aplicación: Para estos ejemplos usaremos esta opción\n            con vue-router, vuex, babel, eslint.\n          ")])]),e._v("\n        Ahora esperaremos que realice la configuración default con nuestra configuración.\n        Bien luego de instalado nos falta añadir vuetify a nuestra aplicación primero que todo\n        nos desplazaremos a la carpeta de nuestro proyecto el cual acabamos de crear.\n      ")]),s("pre",{staticClass:"language-bash"},[e._v("        "),s("code",{staticStyle:{"box-shadow":"none"}},[e._v("  \n          cd my-project\n          # Añadiremos vuetify\n          vue add vuetify\n          # seleccionaremos la opcion default de vuetify\n        ")]),e._v("\n      ")]),s("span",[e._v("Bueno ahora podemos iniciar nuestro proyecto ya dentro de la carpeta")]),s("pre",{staticClass:"language-bash"},[e._v("        "),s("code",{staticStyle:{"box-shadow":"none"}},[e._v("\n          npm run serve\n        ")]),e._v("\n      ")]),s("span",[e._v("\n        Esto nos permitira iniciar el servidor local ahora podemos ir a nuestro\n        navegador de preferencia y en las url colocar "),s("b",[e._v("https://localhost:8080")])]),s("br"),s("v-layout",{attrs:{"justify-center":""}},[s("v-btn",{attrs:{color:"success",dark:""},on:{click:e.viewpreview}},[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-eye")]),e._v("  \n          Vista previa\n        ")],1)],1)],1)],1):e._e(),3==e.inicio?s("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),s("v-flex",{attrs:{"mb-4":""}},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Vuetify\n      ")]),s("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),s("br"),e._v("please join our online\n        "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),s("v-flex",{attrs:{"mb-5":"",xs12:""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),s("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),s("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),s("v-flex",{attrs:{xs12:"","mb-5":""}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),s("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),s("v-layout",{attrs:{"justify-center":""}},[s("v-btn",{attrs:{color:"red darken-2",dark:""},on:{click:e.back}},[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-left")]),e._v("\n        Atras\n      ")],1),s("v-btn",{attrs:{color:"success",to:"/base"}},[s("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-right")]),e._v("\n        Pasar a la siguiente lección\n      ")],1)],1)],1):e._e()],1)},L=[],T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-icon",[e._v("fa-info")]),s("span",{staticClass:"headline blue-grey--text darken-3 "},[e._v(" ¿Qué es Vue.js y por que usarlo? ")]),s("br"),s("br"),s("span",[e._v("\n      Vue es un "),s("v-tooltip",{attrs:{bottom:""}},[s("kbd",{attrs:{slot:"activator"},slot:"activator"},[e._v("framework")]),s("span",[e._v("aporta estructura ahora hacer una aplicación")])]),e._v(" progresivo para construir interfaces de usuario. Se enfoca solo en la capa de la vista, y es muy simple de utilizar e integrar con otros proyectos o bibliotecas existentes. Simplemente con importar la librería en el HTML (Desde un CDN como cdnjs o unkpg) ya podemos utilizar Vue.\n    ")],1),s("pre",{staticClass:"language-html"},[e._v("        "),s("code",{staticStyle:{"box-shadow":"none"}},[e._v('\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"><\/script>\n        ')]),e._v("\n    ")]),s("br"),s("p",[e._v("        \t\n      Vue fue creado en un intento de simplificar el funcionamiento de AngularJS. Esta inpirado en las virtudes que poseen ReactJs y AngularJs, por lo que su documentación es bastante fácil de aprender si está migrando desde otros frameworks, y en caso de que no se tenga experiencia su código fuente es muy legible lo que permite una curva de aprendizaje mucho mas rapida. Si tuviésemos que definir a VueJS por cuatro de sus aspectos conceptuales serían estos:\n    ")]),s("br"),s("v-container",{attrs:{fluid:"","grid-list-sm":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs8:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("Framework Progresivo")]),s("p",{staticClass:"pb-5 pt-2"},[e._v("\n                      Vue se autodenomina como "),s("kbd",[e._v("progresivo")]),e._v(", podemos usarlo para algo múy básico, o para algo más complejo como el desarrollo de una SPA. Siempre con un rendimiento y experiencia de desarrollo muy buena.\n                    ")])])]),s("v-card-actions",{attrs:{"align-end":""}},[s("v-divider",{attrs:{light:""}}),s("v-bottom-sheet",[s("v-btn",{staticClass:"blue-grey--text",attrs:{slot:"activator",dark:"",color:"white"},slot:"activator"},[s("v-icon",[e._v("fa-image")])],1),s("v-card",{attrs:{tile:""}},[s("br"),s("a",{attrs:{target:"_blank",href:a("5509")}},[s("v-img",{staticClass:"my-3",attrs:{src:a("5509"),contain:"",height:"500"}})],1),s("br")])],1)],1)],1)],1),s("v-flex",{attrs:{"d-flex":"",xs4:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("Intuitivo, moderno y fácil de usar")]),s("span",[e._v("\n                      Trasladar todo lo bueno que tienen otros frameworks como "),s("kbd",[e._v("Angular")]),e._v(", "),s("kbd",[e._v("ReactJS")]),e._v(" y "),s("kbd",[e._v("EmberJS")]),e._v(" y desechar aquello que no le aportaba o es complejo de usar.\n                    ")])])]),s("v-card-actions",{attrs:{"align-end":""}},[s("v-divider",{attrs:{light:""}}),s("v-bottom-sheet",[s("v-btn",{staticClass:"blue-grey--text",attrs:{slot:"activator",dark:"",color:"white"},slot:"activator"},[s("v-icon",[e._v("fa-image")])],1),s("v-card",{attrs:{tile:""}},[s("br"),s("a",{attrs:{target:"_blank",href:a("5464")}},[s("v-img",{staticClass:"my-3",attrs:{src:a("5464"),contain:"",height:"500"}})],1),s("br")])],1)],1)],1)],1)],1)],1),s("v-flex",{attrs:{"d-flex":"",xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs4:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("Sistema de componentes reactivo")]),s("p",{},[e._v("\n                      se convierte en un organismo vivo que reacciona muy bien al cambio y realiza acciones programadas por el desarrollador. VueJS sabe comunicarse muy bien por medio de eventos asíncronos.\n                    ")])])]),s("v-card-actions",{attrs:{"align-end":""}},[s("v-divider",{attrs:{light:""}}),s("v-bottom-sheet",[s("v-btn",{staticClass:"blue-grey--text",attrs:{slot:"activator",dark:"",color:"white"},slot:"activator"},[s("v-icon",[e._v("fa-image")])],1),s("v-card",{attrs:{tile:""}},[s("br"),s("a",{attrs:{target:"_blank",href:a("18f3")}},[s("v-img",{staticClass:"my-3",attrs:{src:a("18f3"),contain:"",height:"500"}})],1),s("br")])],1)],1)],1)],1),s("v-flex",{attrs:{"d-flex":"",xs5:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("El dato como centro de todo")]),s("p",{staticClass:"pb-4 pt-4"},[e._v("\n                      los componentes gestionan un modelo de datos interno y proporciona un complejo cliclo de vida que permite manipular el comportamiento de un componente en cualquier estado.\n                    ")])])]),s("v-card-actions",{attrs:{"align-end":""}},[s("v-divider",{attrs:{light:""}}),s("v-bottom-sheet",[s("v-btn",{staticClass:"blue-grey--text",attrs:{slot:"activator",dark:"",color:"white"},slot:"activator"},[s("v-icon",[e._v("fa-image")])],1),s("v-card",{attrs:{tile:""}},[s("br"),s("a",{attrs:{target:"_blank",href:a("7b8c")}},[s("v-img",{staticClass:"my-3",attrs:{src:a("7b8c"),contain:"",height:"500"}})],1),s("br")])],1)],1)],1)],1),s("v-flex",{attrs:{"d-flex":"",xs3:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("Comunidad muy activa")]),s("span",[e._v("\n                      VueJS es un proyecto Open Source que cuenta con una comunidad muy viva. Es un proyecto gestionado, desarrollado, evolucionado y planteado por y para la comunidad.  \n                    ")])])]),s("v-card-actions",{attrs:{"align-end":""}},[s("v-divider",{attrs:{light:""}}),s("v-bottom-sheet",[s("v-btn",{staticClass:"blue-grey--text",attrs:{slot:"activator",dark:"",color:"white"},slot:"activator"},[s("v-icon",[e._v("fa-link")])],1),s("v-card",{staticClass:"text-md-center",attrs:{tile:""}},[s("br"),s("v-btn",{staticClass:"mb-4",attrs:{large:"",outline:"",round:"",dark:"",color:"cyan",target:"_blank",href:"https://github.com/vuejs/awesome-vue/graphs/commit-activity"}},[e._v("Awesome VueJS")]),s("br")],1)],1)],1)],1)],1)],1)],1),s("v-flex",{attrs:{"d-flex":"",xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs5:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("Facil Integracion")]),s("span",[e._v("\n                      La forma modular en la que esta construido permite integrar diversas herramientas conforme se necesites, esto hace que desarrollar en VueJS sea más intuitivo, es casi como trabajar con JavaScript nativo.   \n                    ")])])])],1)],1),s("v-flex",{attrs:{"d-flex":"",xs7:""}},[s("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"headline"},[e._v("Ecosistema muy variado")]),s("span",[e._v("\n                      VueJS tiene a su alrededor una serie de herramientas que ayudan a conseguir que el desarrollador sepa en todo momento qué está haciendo y cómo lo está haciendo.   \n                    ")])])]),s("v-card-actions",{attrs:{"align-end":""}},[s("v-divider",{attrs:{light:""}}),s("v-bottom-sheet",[s("v-btn",{staticClass:"blue-grey--text",attrs:{slot:"activator",dark:"",color:"white"},slot:"activator"},[s("v-icon",[e._v("fa-list")])],1),s("v-card",{staticClass:"text-md-center",attrs:{tile:""}},[s("br"),s("v-list",[s("v-subheader",[e._v("Herramientas")]),e._l(e.items,function(t){return s("v-list-group",{key:t.title,attrs:{"no-action":""}},[s("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[s("v-list-tile-content",[s("v-list-tile-title",[e._v("\n                                "+e._s(t.title)+"\n                                "),t.link?s("v-btn",{attrs:{small:"",flat:"",dark:"",color:"cyan",target:"_blank",href:t.link}},[s("v-icon",[e._v("fa-link fa-2x")])],1):e._e()],1)],1)],1),s("v-list-tile",[s("v-list-tile-content",[s("v-list-tile-title",[e._v("\n                                "+e._s(t.resume)+"                                \n                                "),s("br")])],1)],1)],1)})],2),s("br")],1)],1)],1)],1)],1)],1)],1)],1)],1),s("br"),s("v-btn",{attrs:{color:"success"},on:{click:function(t){e.$emit("instalar")}}},[s("v-icon",[e._v("fa-chevron-right")]),e._v("\n        Siguiente\n    ")],1)],1)],1)},A=[],E={data:function(){return{items:[{title:"Vue Cli",resume:"List Item",link:""},{title:"Vue Reouter",resume:"List Item",link:""},{title:"Vuetify",resume:"List Item",link:""},{title:"Vuex",resume:"List Item",link:""},{title:"Vue Notification",resume:"List Item",link:"fdgdg"},{title:"Vue-i10n",resume:"List Item",link:"fdgdg"},{title:"Vue2 Editor",resume:"List Item",link:"fdgdg"}]}}},I=E,O=a("288c"),$=a("8336"),z=a("b0af"),J=a("99d9"),M=a("12b2"),N=a("a523"),P=a("ce7e"),B=a("0e8f"),D=a("adda"),F=a("8860"),R=a("56b0"),H=a("e0c7"),Q=a("3a2f"),W=Object(c["a"])(I,T,A,!1,null,null,null);W.options.__file="ventajas.vue";var U=W.exports;v()(W,{VBottomSheet:O["a"],VBtn:$["a"],VCard:z["a"],VCardActions:J["a"],VCardTitle:M["a"],VContainer:N["a"],VDivider:P["a"],VFlex:B["a"],VIcon:f["a"],VImg:D["a"],VLayout:h["a"],VList:F["a"],VListGroup:R["a"],VListTile:b["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VSubheader:H["a"],VTooltip:Q["a"]});var G={components:{ventaja:U},data:function(){return{inicio:1,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},methods:{viewpreview:function(){this.$store.dispatch("setScreen","Vista previa(default)"),this.inicio=3},back:function(){this.$store.dispatch("setScreen","Instalación de vue con vuetify"),this.inicio=2}}},Y=G,K=Object(c["a"])(Y,q,L,!1,null,null,null);K.options.__file="HelloWorld.vue";var X=K.exports;v()(K,{VBtn:$["a"],VContainer:N["a"],VFlex:B["a"],VIcon:f["a"],VImg:D["a"],VLayout:h["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-stepper",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[a("v-stepper-header",{staticStyle:{"flex-wrap":"nowrap","overflow-x":"auto"}},[a("v-stepper-step",{attrs:{complete:e.step>1,step:"1",color:"green lighten-2"}},[e._v("\n        Estructura base de vue\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>2,step:"2",color:"green lighten-1"}},[e._v("\n        Crearemos el principio de nuestra app\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>3,step:"3",color:"green darken-1"}},[e._v("\n        Estructura de condicionales\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>4,step:"4",color:"green darken-2"}},[e._v("\n        Estructura de repetión\n      ")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:e.step>5,step:"5",color:"green darken-3"}},[e._v("\n        Inclusión de un componente dentro de otro\n      ")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("estructura")],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{attrs:{color:"blue-grey darken-2",dark:""},on:{click:function(t){e.changeStep(2)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-right")]),e._v("\n              Siguiente lección\n            ")],1)],1)],1)],1),a("v-stepper-content",{attrs:{step:"2"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("inicio")],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{attrs:{color:"blue-grey darken-2",dark:""},on:{click:function(t){e.changeStep(3)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-chevron-right")]),e._v("\n              Siguiente lección\n            ")],1)],1)],1)],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"body-2"},[e._v("\n      Bueno ya después de haber concluido con la creación de nuestro proyecto, \n      pasaremos a explicar la estructura de las carpetas que veremos en vue, \n      y crearemos nuestro primer componente\n    ")])]),a("v-flex",{attrs:{xs12:"","my-3":""}},[a("span",{staticClass:"display-1 blue-grey--text darken-3"},[a("b",[e._v("Estructura inicial de las carpetas")]),a("v-treeview",{attrs:{open:e.open,items:e.items,activatable:"","item-key":"name","open-on-click":""},scopedSlots:e._u([{key:"prepend",fn:function(t){var s=t.item,n=t.open;return[s.file?a("v-icon",[e._v("\n            "+e._s(e.files[s.file])+"\n          ")]):a("v-icon",[e._v("\n            "+e._s(n?"fa-folder-open":"fa-folder")+"\n          ")])]}}]),model:{value:e.tree,callback:function(t){e.tree=t},expression:"tree"}})],1)]),a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("span",{staticClass:"body-2"},[e._v("\n      Ahora que sabemos cual es la estructura de las carpetas en la carpeta components,\n      crearemos una carpeta "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task")]),e._v(" \n      dentro crearemos dos archivos, un "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task.vue")]),e._v("\n      en este alojaremos toda la estructura visual del componente usando etiquetas tan simples\n      como un html, o más customizadas como son al llamar a otro componente creando una comunicación\n      padre-hijo(más adelante sera mejor explicado) y en este se hace el llamado al otro archivo. \n      "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task.js")]),e._v(" En este archivo realizaremos todas las\n      funcionalidades de nuestro componente. La carpeta quedaría del siguiente modo:\n    ")]),a("v-treeview",{staticClass:"mt-3",attrs:{open:e.open2,items:e.items2,activatable:"","item-key":"name","open-on-click":""},scopedSlots:e._u([{key:"prepend",fn:function(t){var s=t.item,n=t.open;return[s.file?a("v-icon",[e._v("\n          "+e._s(e.files[s.file])+"\n        ")]):a("v-icon",[e._v("\n          "+e._s(n?"fa-folder-open":"fa-folder")+"\n        ")])]}}]),model:{value:e.tree2,callback:function(t){e.tree2=t},expression:"tree2"}})],1),a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"body-2"},[e._v("\n      Una vez hemos creado nuestros archivos abriremos el \n      "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task.vue")]),e._v(" y colocaremos los siguiente:\n    ")]),a("pre",{staticClass:"language-html"},[e._v("      "),a("code",{staticStyle:{"box-shadow":"none"}},[e._v('\n        <template>\n        <template>\n        <script src="./task.js"><\/script>\n      ')]),e._v("\n    ")]),a("span",{staticClass:"body-2"},[e._v("\n      Ahora en nuestro "),a("b",{staticClass:"blue-grey--text darken-3"},[e._v("task.js")]),e._v(" crearemos el\n      siguiente esqueleto\n    ")]),a("pre",{staticClass:"language-js"},[e._v("      "),a("code",{staticStyle:{"box-shadow":"none"}},[e._v("\n        export default{\n          props:{\n            //Aqui definimos los valores cuando queremos que otro componente\n            //Nos envie informacion pertinente a nuestro componente\n          },\n          data(){\n            return {\n              //Aca retornaremos todos los modelos que retornaremos\n              //y podran se usados desde el archivo .vue  \n            }\n          },\n          computed:{\n            //Ahora estan los campos calculados es cuando queremos mostrar una variable\n            //calculada o dinamica\n          },\n          methods:{\n            //En esta seccion como su nombre lo dice crearemos\n            //Todos los metodos que usaremos en nuestro componente\n          },\n          watch:{\n            //Este es un observador que ando chequeando una variable especifica\n            //cada vez que hay un cambio en una variable podemos realizar otro\n            //proceso\n          },\n          mounted(){\n            //Este es una funcion del lifecicle de la instancia\n            // ver https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram\n          }\n        }\n      ")]),e._v("\n    ")])])],1)},ae=[],se={data:function(){return{open:["src"],open2:["task"],files:{html:"fa-html5",js:"fa-file-code-o",json:"fa-file-code-o",png:"fa-picture-o",txt:"fa-file-text"},tree:[],tree2:[],items2:[{name:"components",children:[{name:"task",children:[{name:"task.vue",file:"txt"},{name:"task.js",file:"js"}]}]}],items:[{name:"new-project",children:[{name:".git"},{name:"node_modules"},{name:"public",children:[{name:"favicon.ico",file:"png"},{name:"index.html",file:"html"}]},{name:"src",children:[{name:"assets",children:[{name:"logo.png",file:"png"}]},{name:"components"},{name:"plugins",children:[{name:"vuetify.js",file:"txt"}]},{name:"App.vue",file:"txt"},{name:"main.js",file:"js"},{name:"router.js",file:"js"},{name:"store.js",file:"js"}]},{name:".gitignore",file:"txt"},{name:"babel.config.js",file:"js"},{name:"package.json",file:"json"},{name:"README.md",file:"txt"}]}]}}},ne=se,re=a("eb2a"),oe=Object(c["a"])(ne,te,ae,!1,null,null,null);oe.options.__file="estructura.vue";var ie=oe.exports;v()(oe,{VFlex:B["a"],VIcon:f["a"],VLayout:h["a"],VTreeview:re["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("hola")])},ce=[],ue={},ve=ue,de=Object(c["a"])(ve,le,ce,!1,null,null,null);de.options.__file="inicioApp.vue";var pe=de.exports,me={components:{estructura:ie,inicio:pe},data:function(){return{step:1}},methods:{setTitle:function(){this.$store.dispatch("setScreen","Lección Básica "+this.step)},changeStep:function(e){this.step=e,this.setTitle()}},mounted:function(){this.setTitle()}},fe=me,he=a("7e85"),be=a("e516"),_e=a("9c54"),ye=a("56a4"),ge=Object(c["a"])(fe,Z,ee,!1,null,null,null);ge.options.__file="base.vue";var xe=ge.exports;v()(ge,{VBtn:$["a"],VDivider:P["a"],VFlex:B["a"],VIcon:f["a"],VLayout:h["a"],VStepper:he["a"],VStepperContent:be["a"],VStepperHeader:_e["a"],VStepperItems:_e["b"],VStepperStep:ye["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},we=[],Ce={props:{},data:function(){return{}},computed:{},methods:{},watch:{},mounted:function(){this.$store.dispatch("setScreen","Tareas")}},je=Ce,Ve=Object(c["a"])(je,ke,we,!1,null,null,null);Ve.options.__file="task.vue";var Se=Ve.exports;s["default"].use(S["a"]);var qe=new S["a"]({routes:[{path:"/",name:"home",component:X},{path:"/base",name:"base",component:xe},{path:"/task",name:"task",component:Se}]}),Le=a("2f62");s["default"].use(Le["a"]);var Te=new Le["a"].Store({state:{screenNow:"Ventajas de vue"},getters:{getScreen:function(e){return e.screenNow}},mutations:{setScreen:function(e,t){e.screenNow=t}},actions:{setScreen:function(e,t){var a=e.commit;a("setScreen",t)}}}),Ae=a("97fa"),Ee=(a("84bf"),a("8009"),a("6cf3"),a("ce5b")),Ie=a.n(Ee);s["default"].use(Ae["a"]),s["default"].config.productionTip=!1,s["default"].use(Ie.a,{iconfont:"fa4"}),new s["default"]({router:qe,store:Te,render:function(e){return e(V)}}).$mount("#app")},"7b8c":function(e,t,a){e.exports=a.p+"img/lifecycle.b6749746.png"},"9b19":function(e,t,a){e.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.1369846d.js.map