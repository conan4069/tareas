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
        ahora crearemos un siguiente v-expansion-content
        <pre class="language-js">
          <code style="box-shadow: none;">
            //Bueno en nuestra data agregaremos las siguientes variables
            data(){
              return {
               //...
               text:"",
               indextask:"",
               fab:false,
               dialog:false,
              }
            },
            computed:{
              //Ahora estan los campos calculados es cuando queremos mostrar una variable
              //calculada o dinamica
              totalSubtask(){
                return this.task.subtask.length
              },
              completedSubtask(){
                return this.task.subtask.filter(o => o.done === true ).length
              }
            },
            methods:{
              //En esta seccion como su nombre lo dice crearemos
              //Todos los metodos que usaremos en nuestro componente
              save(){
                this.dialog = false
                if(this.indextask === ''){
                  this.task.subtask.push({
                    'task': this.text,
                    'done': false
                  })
                }
                else{
                  this.task.subtask[this.indextask].task = this.text
                  this.indextask = ""
                }
                this.text = ""
              },
              editSubTask(index){
                if(!this.task.subtask[index].done){
                  this.text = this.task.subtask[index].task
                  this.indextask = index
                  this.dialog = true
                }
              },
              removeSubTask(index){
                this.task.subtask.splice(index,1)
              }
            },
          </code>
        </pre>
        <pre class="language-html">
          <code style="box-shadow: none;">
            &lt;v-expansion-panel-content>
              &lt;div slot="header">
                &lt;p class="text-md-center display-1 blue-grey--text darken-3">
                  &lt;b>Información extra&lt;/b>
                &lt;/p>
              &lt;/div>
              &lt;v-layout row wrap>
                &lt;v-flex xs12>
                  &lt;p class="text-md-center title blue-grey--text darken-3">
                    &lt;b>Sub Tareas&lt;/b>
                  &lt;/p>
                &lt;/v-flex>
                &lt;v-list-tile @click="dialog = !dialog" class="add">
                  &lt;v-list-tile-content class="text-md-center">
                    &lt;v-list-tile-sub-title>
                      &lt;v-icon>fa-plus&lt;/v-icon>
                      &lt;span class="caption blue-grey--text darken-2" 
                        style="z-index:4;position:absolute;bottom: 0px;right:2rem;"
                      >
                        { { completedSubtask } }/{ { totalSubtask } } 
                        &lt;!-- Debes eliminar el espacio en blanco entre las llaves -->
                      &lt;/span>
                    &lt;/v-list-tile-sub-title>
                  &lt;/v-list-tile-content>
                &lt;/v-list-tile>
              &lt;/v-layout>
            &lt;/v-expansion-panel-content>
            &lt;v-dialog
                v-model="dialog"
                max-width="800px"
              >
              &lt;v-card>
                &lt;v-card-title class="headline">Añadir SubTarea&lt;/v-card-title>
                &lt;v-card-text>
                  &lt;v-form @submit.prevent="save()">
                    &lt;v-text-field
                      autofocus
                      v-model="text"
                      label="Tarea"
                    >
                    &lt;/v-text-field>
                  &lt;/v-form>
                &lt;/v-card-text>

                &lt;v-card-actions>
                  &lt;v-spacer>&lt;/v-spacer>

                  &lt;v-btn
                    color="blue-grey darken-1"
                    flat="flat"
                    @click="dialog = false"
                  >
                    Cancel
                  &lt;/v-btn>

                  &lt;v-btn
                    color="blue-grey darken-1"
                    flat="flat"
                    @click="save()"
                  >
                    &lt;span v-if="indextask === ''">Añadir&lt;/span>
                    &lt;span v-else>Editar&lt;/span>
                  &lt;/v-btn>
                &lt;/v-card-actions>
              &lt;/v-card>
            &lt;/v-dialog>
          </code> 
        </pre>
        Bueno con esto hemos creado una pantalla desplegable para crear subtareas subtareas,
        y esta misma pantalla nos servira para editar, creamos todos los metodos que simplemente
        usaremos para crud de las subtareas, creamos dos campos computados <b>completedSubtask</b> 
        veremos la cantidad de tareas completadas con <b>totalSubtask</b> Sabremos la cantidad
        total de subtareas 
      </span>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script src="./condicionales.js"></script>