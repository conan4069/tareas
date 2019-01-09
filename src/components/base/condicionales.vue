<template>
<v-container>
  <v-layout row wrap pb-2>
    <v-flex xs12>
      <span class="body-2">
        Bueno ahora estamos con unas de las fortalezas de vue sus directivas 
        tenemos <b class="blue-grey--text darken-2">v-if v-else</b> para marcar 
        todo el proceso de condicionales para mostrar o no dicha información, 
        tenemos los eventos de vue los cuales se encargan de simplificar
        los valores en las etiquetas onclick, onchange, etc, para usarlos en vue
        es sencillo tenemos dos modos de representarlos 
        <b>v-on:click="funcion_a_ejecutar(parametros)"</b> o nos
        eliminamos v-on: usan un @ en su lugar <b>@click="funcion_a_ejecutar(parametros)"</b>
        ejemplo rapido tenemos una variable <b>Hola</b> que un boleano si ella es false
        dira chao sino dira hola
        <pre class="language-html">
          <code style="box-shadow: none;">
            &lt;p class="display-1 blue-grey--text">
              &lt;span v-if="hola">Hola&lt;/span>
              &lt;span v-else> Chao&lt;/span>
              {{contador}}
            &lt;/p>
            &lt;v-btn dark color="blue-grey darken-2" @click="hola = !hola">
              &lt;span>Decir &lt;/span> &lt;span v-if="!hola"> Hola&lt;/span>
              &lt;span v-else> Chao&lt;/span>
            &lt;/v-btn>
            &lt;v-btn dark color="blue-grey darken-2" v-on:click="contar()">
              Contar
            &lt;/v-btn>
          </code>
        </pre>
        <pre class="language-js">
          <code style="box-shadow: none;">
            //En el js
            export default{
              data(){
                return{
                  hola:false,
                  contador: 0
                }
              },
              methods:{
                contar(){
                  this.contador += 1 
                }
              }
            }
          </code>
        </pre>
        <p class="display-1 blue-grey--text">
          <span v-if="hola">Hola</span>
          <span v-else> Chao</span>
          {{contador}}
        </p>
        <v-btn dark color="blue-grey darken-2" @click="hola = !hola">
          <span>Decir </span> 
          <span v-if="!hola"> Hola</span>
          <span v-else> Chao</span>
        </v-btn>
        <v-btn dark color="blue-grey darken-2" v-on:click="contar()">
          Contar
        </v-btn>
        Una vez mostrado este pequeño ejemplo seguiremos con nuestra tarea
        ahora crearemos una siguiente 
      </span>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script src="./condicionales.js"></script>