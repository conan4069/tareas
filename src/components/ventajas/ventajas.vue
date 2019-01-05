<template>
<v-layout row wrap>
  <v-flex xs12>
    <v-icon>fa-info-circle</v-icon>
    <span  class="headline blue-grey--text darken-3 "> ¿Qué es Vue.js y por que usarlo? </span>
    <br>
    <br>
    <span>
      Vue es un <v-tooltip bottom><kbd slot="activator">framework</kbd><span>aporta estructura ahora hacer una aplicación</span></v-tooltip> progresivo para construir interfaces de usuario. Se enfoca solo en la capa de la vista, y es muy simple de utilizar e integrar con otros proyectos o bibliotecas existentes. Simplemente con importar la librería en el HTML (Desde un CDN como cdnjs o unkpg) ya podemos utilizar Vue.
    </span>
    <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js"&gt;&lt;/script&gt;
        </code>
    </pre>   
    <br>
    <p>         
      Vue fue creado en un intento de <kbd>simplificar</kbd> el funcionamiento de AngularJS. Esta inpirado en las virtudes que poseen ReactJs y AngularJs, por lo que su documentación es bastante fácil de aprender si está migrando desde otros frameworks, y en caso de que no se tenga experiencia su código fuente es muy legible lo que permite una curva de aprendizaje mucho mas rapida. Si tuviésemos que definir a VueJS por sus aspectos conceptuales serían estos:
    </p>
    <br>      
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs8>
              <v-card color="cyan darken-2" class="white--text">
                <v-card-title primary-title >
                  <div>
                    <div class="headline">Framework Progresivo</div>
                    <p class="pb-5 pt-2">
                      Vue se autodenomina como <kbd>progresivo</kbd>, podemos usarlo para algo múy básico, o para algo más complejo como el desarrollo de una <v-tooltip bottom><kbd slot="activator">SPA</kbd><span>Single Page Application</span></v-tooltip> . Siempre con un rendimiento y experiencia de desarrollo muy buena.
                    </p>
                  </div>
                </v-card-title>
                <v-card-actions align-end>
                  <v-divider light></v-divider>
                  <v-bottom-sheet>
                    <v-btn dark slot="activator" color="white" class="blue-grey--text">
                      <v-icon>fa-image</v-icon>
                    </v-btn>
                    <v-card tile>
                      <br>
                      <a target="_blank" :href="require('@/assets/vue-progressive.png')">
                        <v-img
                          :src="require('@/assets/vue-progressive.png')"
                          class="my-3"
                          contain          
                          height="500"
                        ></v-img>           
                      </a>
                      <br>
                    </v-card>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex d-flex xs4>
               <v-card color="orange darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Intuitivo, moderno y fácil de usar</div>
                    <span>
                      Trasladar todo lo bueno que tienen otros frameworks como <kbd>Angular</kbd>, <kbd>ReactJS</kbd> y <kbd>EmberJS</kbd> y desechar aquello que no le aportaba o es complejo de usar.
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions  align-end>
                  <v-divider light></v-divider>
                  <v-bottom-sheet>
                    <v-btn dark slot="activator" color="white" class="blue-grey--text">
                      <v-icon>fa-image</v-icon>
                    </v-btn>
                    <v-card tile>
                      <br>
                      <a target="_blank" :href="require('@/assets/vue-vs-react.jpg')">
                        <v-img
                          :src="require('@/assets/vue-vs-react.jpg')"
                          class="my-3"
                          contain          
                          height="500"
                        ></v-img>           
                      </a>
                      <br>
                    </v-card>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs4>
              <v-card color="orange darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Sistema de componentes reactivo</div>
                    <p class="">
                      Se convierte en un organismo vivo que <kbd>reacciona</kbd> muy bien al cambio y realiza acciones programadas por el desarrollador. VueJS sabe comunicarse muy bien por medio de <kbd>eventos</kbd> asíncronos.
                    </p>
                  </div>
                </v-card-title>
                <v-card-actions  align-end>
                  <v-divider light></v-divider>
                  <v-bottom-sheet>
                    <v-btn dark slot="activator" color="white" class="blue-grey--text">
                      <v-icon>fa-image</v-icon>
                    </v-btn>
                    <v-card tile>
                      <br>
                      <a target="_blank" :href="require('@/assets/mvvm.png')">
                        <v-img
                          :src="require('@/assets/mvvm.png')"
                          class="my-3"
                          contain          
                          height="500"
                        ></v-img>           
                      </a>
                      <br>
                    </v-card>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex d-flex xs5>
               <v-card color="teal darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">El dato como centro de todo</div>
                    <p class="pb-4 pt-4">
                      Los componentes gestionan un modelo de datos interno y proporciona un complejo  <kbd>cliclo de vida</kbd>  que permite manipular el comportamiento de un componente en cualquier estado.
                    </p>
                  </div>
                </v-card-title>
                <v-card-actions  align-end>
                  <v-divider light></v-divider>
                  <v-bottom-sheet>
                    <v-btn dark slot="activator" color="white" class="blue-grey--text">
                      <v-icon>fa-image</v-icon>
                    </v-btn>
                    <v-card tile>
                      <br>
                      <a target="_blank" :href="require('@/assets/lifecycle.png')">
                        <v-img
                          :src="require('@/assets/lifecycle.png')"
                          class="my-3"
                          contain          
                          height="500"
                        ></v-img>           
                      </a>
                      <br>
                    </v-card>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex d-flex xs3>
              <v-card color="cyan darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Comunidad muy activa</div>
                    <span>
                      VueJS es un proyecto <v-tooltip bottom><kbd slot="activator">Open Source</kbd><span>modelo de desarrollo de software basado en la colaboración abierta</span></v-tooltip> que cuenta con una comunidad muy viva. Es un proyecto gestionado, desarrollado, evolucionado y planteado por y para la comunidad.  
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions align-end>
                  <v-divider light></v-divider>
                  <v-bottom-sheet>
                    <v-btn dark slot="activator" color="white" class="blue-grey--text">
                      <v-icon>fa-link</v-icon>
                    </v-btn>
                    <v-card tile class="text-md-center">
                      <br>                      
                      <v-btn large outline round dark color="teal" target="_blank" href="https://github.com/vuejs/awesome-vue/graphs/commit-activity" class="mb-4" >Awesome VueJS</v-btn>                           
                      <br>
                    </v-card>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs5>
              <v-card color="teal darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Facil Integracion</div>
                    <span>
                      La forma modular en la que esta construido permite integrar diversas herramientas conforme se necesites, esto hace que desarrollar en VueJS sea más <kbd>intuitivo</kbd>.   
                    </span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex d-flex xs7>
              <v-card color="orange darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Ecosistema muy variado</div>
                    <span>
                      VueJS tiene a su alrededor una serie de <kbd>herramientas</kbd> que ayudan a conseguir que el desarrollador sepa en todo momento qué está haciendo y cómo lo está haciendo.   
                    </span>
                  </div>
                </v-card-title>
                <v-card-actions align-end>
                  <v-divider light></v-divider>
                  <v-bottom-sheet>
                    <v-btn dark slot="activator" color="white" class="blue-grey--text">
                      <v-icon>fa-list</v-icon>
                    </v-btn>
                    <v-card tile class="text-md-center">
                      <br>                      
                      <v-list>
                        <v-subheader>Herramientas</v-subheader>       
                        <v-list-group v-for="item in items" :key="item.title" no-action>
                          <v-list-tile slot="activator">
                            <v-list-tile-content>
                              <v-list-tile-title style="height: auto">
                                <v-btn v-if="item.link" small flat dark color="teal" target="_blank" :href="item.link" >
                                  {{ item.title }}
                                </v-btn>
                                <v-btn v-else small flat dark color="teal">
                                  {{ item.title }}
                                </v-btn>
                              </v-list-tile-title>
                            </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile >
                            <v-list-tile-content>
                              <v-list-tile-sub-title v-html="item.resume"></v-list-tile-sub-title>                              
                            </v-list-tile-content>
                          </v-list-tile>
                        </v-list-group>
                      </v-list>                 
                      <br>
                    </v-card>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <br>  
    <v-layout justify-center>
      <v-btn color="success" @click="$emit('instalar')">
        <v-icon>fa-chevron-right</v-icon>
          Siguiente
      </v-btn>
    </v-layout>
    </v-flex>
</v-layout>
</template>
<script src="./ventajas.js"></script>