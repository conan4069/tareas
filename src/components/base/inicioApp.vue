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
        <b>Personalizando Task.vue</b>
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
        en la interfaz del usuario un modal, elemto (que al aparecer desde abajo) que
        proyecta un area a parte el sistema. Cabe destacar que que dentro de dicho
        boton se ingresa un boton y un icono con la finalidad de llamar la atención del usuario.
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
  </v-layout>
  <h1>hola soy la leccion</h1>
  <tarea></tarea>
</v-container>
</template>
<script src="./inicioApp.js"></script>