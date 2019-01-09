<template>
<v-container>
  <v-layout row wrap pb-2>
    <v-flex xs12>
      <span class="body-2"> 
        Antes de comenzar debemos descargar dos paquetes indispensables para la 
        funcionabilidad que se explicara más adelante
      </span><br><br>
      <span class="body-2"> 
        El primero:
      </span>
      <pre class="language-bash">
        <code style="box-shadow: none;">
          npm install vue-color

            # Este paquete es indispensable para cargar un selector de colores
        </code>
      </pre>
      <span class="body-2"> 
        El segundo:
      </span>
      <pre class="language-bash">
        <code style="box-shadow: none;">
          npm install vue2-editor

            # Este paquete es indispensable para cargar un editor de texto
        </code>
      </pre>
    </v-flex>    
    <v-fle xs12><br>
      <span class="display-1 blue-grey--text dark">
        <b>Personalizando Task.vue y Task.js</b>
      </span><br><br>
      <span class="body-2"> 
        Una vez instaladas las dependencias necesarias, ingresaremos en el archivo
        task.vue y empezaremos a modificar nuestro template. Así mismo, agregaremos 
        un v-container (Con sus repectivos estilos) con el props fluid para que se,
        adapte al ancho de la pantalla, el cual servira de base para 
        los demas elementos de la app, a continuación se muestra a continuación:
      </span> <br>
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-container fluid :style="{
          'background-color': typeof(task.colorBg) === 'string' ? task.colorBg : task.colorBg.hex,
          'color': task.color,
          'box-shadow': '8px 4px 20px -7px rgba(0,0,0,.6),4px -2px 4px 2px rgba(0,0,0,.2)',
          'border-radius': '30px 0px 30px 0px',
          'position': 'relative',
          'height': '100%'
          }"> &lt;/vcontainer>
        </code>
      </pre>
    </v-fle>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Ya teniendo nuestro v-container creado dentro del template, debemos crear un v-layout
        con los props row y wrap, cabe destacar que es una buena práctica la implementación 
        de v-layout luego del v-container, como se muestra a continuación: 
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-layout row wrap> 
          &lt;/v-layout>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Seguidamente debemos crear un v-botton-sheet el cual se encargara de desplegar
        en la interfaz del usuario una hoja inferior, elemto que al aparecer desde abajo
        proyecta un area o parte de la app. Cabe destacar que que dentro de dicho
        boton se encuentra otro boton y un icono con la finalidad de llamar la atención del usuario.
        A continuación se puede apreciar el codigo: 
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-bottom-sheet> 
            &lt;v-btn
            key="paint"
            v-model="fab"
            color="blue-grey darken-2"
            dark
            slot="activator"
            fab
            small
            style="z-index:4;position: absolute;bottom: 0;right:0px;"
            >
              &lt;/v-icon> fa-tachometer &lt;/v-icon>
            &lt;/v-btn> 
          &lt;/v-bottom-sheet>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        A continuacion, crearemos un elemento de Viutify llamado v-card (con un props y estilos) 
        dentro de la etiqueta v-bottom-shet, justo debajo del v-btn que creamos anteriormente. 
        Dicha v-card servira de base para la posterior carga de elementos, dividiendo la 
        UI de una forma agradable para el usuario. El codigo para agregar estos elementos 
        se muestra a continuacion: 
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-card tile style="height: 32em;overflow-y:auto">
              //Aquí dentro se ejecutara más codigo posteriormente 
          &lt;/v-card>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Antes de continuar con la edición del task.vue, debemos agregar algunas lineas de código en el
        archivo task.js, las mismas consisten en crear el objeto task, dentro del return que se encuentra en data. 
        El codigo es el siguiente: 
      </span> <br>    
      <pre class="language-javascript">
        <code style="box-shadow: none;">
          data(){
            return {
              //Aca retornaremos todos los modelos que retornaremos
              //y podran se usados desde el archivo .vue
              task:{
                colorBg:"",
                color:false,
                description:"",
                id:"",
                group:"",
                subtask:[],
                text:""
              }
            }
          },
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Continuando con la lección, crearemos un formulario (v-form), el cual tendra un parrafo de una 
        linea distintivo en la esquina superior izquierda, al desplegarlo y al estar cerrado el mismo
        mostrara el texto que recibe de un input mas adelante. El codigo para agregar estos elementos 
        se muestra a continuacion: 
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;p :style="{
          'color': task.color ? 'white' : 'black',
          'padding': '5px',
          'border-radius': '15px 0px 20px 0px',
          'width': '30rem !important',
          'white-space': 'nowrap',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
          'box-shadow': '8px 10px 20px -7px rgba(0,0,0,.7)',
          'background-color': typeof(task.colorBg) === 'string' ? task.colorBg : task.colorBg.hex
          }">
            &lt;!--&lt;b>Ejemplo de los colores: &lt;/b> { { task.text } } -->
            <br>&lt;!-- Debes descomentar la linea de arriba y eliminar el espacio en blanco entre las llaves-->
          &lt;/p>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Antes de continuar con la edición del task.vue, debemos importar el complemento vue-color y lo asignamos a un componente de forma global en el 
        archivo main.js, dicho complemento nos proporcionara funcionabilidades requeridas en los pasos siguientes. El 
        codigo es el siguiente: 
      </span> <br>    
      <pre class="language-javascript">
        <code style="box-shadow: none;">
          //Importamos Chrome desde el complemento vue-color
          import { Chrome } from 'vue-color'

          // De este modo Chrome se pude usar desde cualquier complemento
          Vue.component('chrome-picker', Chrome)
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Siguiendo con la lección, crearemos un contenedor (v-container), que dentro de si contendra
        un campo input (v-text-field) y un panel de expansión (v-expansion-panel popuout). El codigo para agregar estos elementos 
        se muestra a continuacion: 
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-container>
            &lt;v-text-field
              v-model="task.text"
              label="Agregar una tarea"
            >
            &lt;/v-text-field>
            &lt;v-expansion-panel popuout>

            &lt;/v-expansion-panel>
          &lt;/v-container>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Para finalizar la lección, crearemos el contenido del panel de expansión (v-expansion-panel)
        en el cual se cargara el Color Picker y un select. El codigo para agregar estos elementos 
        se muestra a continuacion: 
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-expansion-panel-content>
              &lt;div slot="header">
                &lt;p class="text-md-center display-1 blue-grey--text darken-3">
                  &lt;b>Colores de la tarea&lt;/b>
                &lt;/p>
              &lt;/div>
              &lt;v-layout row justify-center py-3>
                &lt;v-flex xs12 md4>
                  &lt;chrome-picker 
                    disableAlpha 
                    v-model="task.colorBg">
                  &lt;/chrome-picker>
                &lt;/v-flex>
                &lt;v-flex xs12 md4>
                  &lt;v-checkbox
                    label="letras blancas"
                    v-model="task.color"
                    color="blue-grey darken-2"
                  >  
                  &lt;/v-checkbox>
                &lt;/v-flex>
              &lt;/v-layout>
            &lt;/v-expansion-panel-content>
        </code>
      </pre>
    </v-flex>
  </v-layout>
  <h1>Ejemplo práctico</h1>
  <v-flex py-2 xs12>
      <span class="body-2"> 
        Ya es hora de que veamos en acción todo el codigo que realizamos hasta este punto. Exitos!!! 
      </span> <br>
  </v-flex>
  <tarea></tarea>
</v-container>
</template>
<script src="./inicioApp.js"></script>