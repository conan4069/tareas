<template>
<v-layout row wrap>
  <v-flex xs12>
    <span class="body-2">
      Bueno ya después de haber concluido con la creación de nuestro proyecto, 
      pasaremos a explicar la estructura de las carpetas que veremos en vue, 
      y crearemos nuestro primer componente
    </span>
  </v-flex>
  <v-flex xs12 my-3>
    <span class="display-1 blue-grey--text darken-3">
      <b>Estructura inicial de las carpetas</b>
      <v-treeview
        v-model="tree"
        :open="open"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template slot="prepend" slot-scope="{ item, open}">
          <v-icon v-if="!item.file">
            {{ open ? 'fa-folder-open' : 'fa-folder' }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </span>
  </v-flex>
  <v-flex xs12 mb-3>
    <span class="body-2">
      Ahora que sabemos cual es la estructura de las carpetas en la carpeta components,
      crearemos una carpeta <b class="blue-grey--text darken-3">task</b> 
      dentro crearemos dos archivos, un <b class="blue-grey--text darken-3">task.vue</b>
      en este alojaremos toda la estructura visual del componente usando etiquetas tan simples
      como un html, o más customizadas como son al llamar a otro componente creando una comunicación
      padre-hijo(más adelante sera mejor explicado) y en este se hace el llamado al otro archivo. 
      <b class="blue-grey--text darken-3">task.js</b> En este archivo realizaremos todas las
      funcionalidades de nuestro componente. La carpeta quedaría del siguiente modo:
    </span>
    <v-treeview
      v-model="tree2"
      :open="open2"
      class="mt-3"
      :items="items2"
      activatable
      item-key="name"
      open-on-click
    >
      <template slot="prepend" slot-scope="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? 'fa-folder-open' : 'fa-folder' }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
  </v-flex>
  <v-flex xs12>
    <span class="body-2">
      Una vez hemos creado nuestros archivos abriremos el 
      <b class="blue-grey--text darken-3">task.vue</b> y colocaremos los siguiente:
    </span>
    <pre class="language-html">
      <code style="box-shadow: none;">
        &lt;template>
        &lt;template>
        &lt;script src="./task.js">&lt;/script>
      </code>
    </pre>
    <span class="body-2">
      Ahora en nuestro <b class="blue-grey--text darken-3">task.js</b> crearemos el
      siguiente esqueleto
    </span>
    <pre class="language-js">
      <code style="box-shadow: none;">
        export default{
          props:{
            //Aqui definimos los valores cuando queremos que otro componente
            //Nos envie informacion pertinente a nuestro componente
          },
          data(){
            return {
              //Aca retornaremos todos los modelos que retornaremos
              //y podran se usados desde el archivo .vue  
            }
          },
          computed:{
            //Ahora estan los campos calculados es cuando queremos mostrar una variable
            //calculada o dinamica
          },
          methods:{
            //En esta seccion como su nombre lo dice crearemos
            //Todos los metodos que usaremos en nuestro componente
          },
          watch:{
            //Este es un observador que ando chequeando una variable especifica
            //cada vez que hay un cambio en una variable podemos realizar otro
            //proceso
          },
          mounted(){
            //Este es una funcion del lifecicle de la instancia
            // ver https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
          }
        }
      </code>
    </pre>
  </v-flex>
</v-layout>
</template>
<script src="./estructura.js"></script>