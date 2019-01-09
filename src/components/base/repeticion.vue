<template>
<v-container>
  <v-layout row wrap pb-2>
    <v-flex xs12><br>
      <span class="body-2"> 
        Ahora si la aplicación creciera a tal punto que cada tarea tuviera asociada sub-listas de tareas, necesitaremos una forma de recorrer esas sub tareas y mostrar su  contenido, para esto vue nos permite utilizar la directiva <b>v-for</b> para renderisar listas
      </span> <br>
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-list-tile style="position: relative;" v-for="(value,i) in task.subtask" :key="i">
            // ...          
          &lt;/v-list-tile-title>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2">
        Para que esta directiva pueda funcionar necesita tener la sintactis especial de <b>(value,i) in task.subtask</b>, donde <b>task.subtask</b> es la colección de tareas que vamos a recorrer, <b>value</b> es el valor de la lista en el que estamos e <b>i</b> es el numero de iteracion. Con ella se pueden recorrer desde arrays hasta objetos.
        <br><br> 
        La propiedas <b>key</b>, nos termite asignarle un codigo unico a cada elemneto para eviatr conflictos cuando vue cree la lista en pantalla. Ahora que vimos la sintactis necesita podemos agregar el contenido restante        
      </span> <br>    
      <pre class="language-html">
        <code style="box-shadow: none;">
          &lt;v-list-tile style="position: relative;" v-for="(value,i) in task.subtask" :key="i">
            //...
            &lt;v-list-tile-action>
              &lt;v-checkbox v-model="value.done" color="blue-grey darken-2">
              &lt;/v-checkbox>
            &lt;/v-list-tile-action>
            &lt;v-list-tile-content @click="editSubTask(i)">
              &lt;v-list-tile-title :style="{
              'text-decoration': value.done?'line-through':'none',
              'text-decoration-color': value.done?'red':'transparent',
              'width': '52rem',
              'white-space': 'nowrap'
              }">
              &lt;/v-list-tile-title>
            &lt;/v-list-tile-content> 
            //...
          &lt;/v-list-tile-title>
        </code>
      </pre>
    </v-flex>
    <v-flex py-2 xs12>
      <span class="body-2"> 
        Esta contenido sera repetido por cada nueva sub tarea que le proporcionemos permitiendonos crear niveles de informacion cada vez mas complejos
      </span> <br>    
    </v-flex>
    <task lesson="3"></task>
  </v-layout>
</v-container>
</template>
<script src="./repeticion.js"></script>