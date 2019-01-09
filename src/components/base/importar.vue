<template>
<v-container>
  <v-layout row wrap pb-2>
    <v-flex xs12>
      <span class="body-2">
        Bueno ahora para Finalizar, importaremos el componente de vue2-editor, para asi poder añadirle una descripcion a nuestras tarea primero entraremos a nuestro 
        <b class="blue-grey--text darken-2">task.js</b>
        <pre class="language-javascript">
          <code style="box-shadow: none;">
            import { VueEditor } from 'vue2-editor'
            import "./task.css"

            export default{
              components:{
                //En esta seccion colocaremos el llamado a otros componentes,
                //de modo tal que quede key:component, la key sera la
                //etiqueta html que creareamos y la cual hare referencia,
                //a nuestro componente
                'vue-editor':VueEditor
              },
              //...
            }
          </code>
        </pre>
        Entonces la key 'vue-editor' sera el nombre de la etiqueta que usaremos en nuestro template, la cual hara 
        referencia al componente ya instalado, lo mismo podemos hacer si quisieramos llamar a un componente
        hecho por nosotros, ahora en nuestro archivo <b class="blue-grey--text darken-2">task.vue</b> 
        nos iremos a la misma una linea mas abajo de nuestra ultima lección e incluiremos nuestra nueva etiqueta
        vue-editor
        <pre class="language-javascript">
          <code style="box-shadow: none;">
                 ...
                &lt;/v-card>
              &lt;/v-dialog>
            &lt;/v-flex>
            &lt;v-flex xs12>
              &lt;p class="text-md-center title blue-grey--text darken-3">
                &lt;b>Descripción</b>
              &lt;/p>
              &lt;v-layout row justify-center py-3>
                &lt;vue-editor id="description" 
                  name="description_field"
                  v-model="task.description" 
                  style="height:15em;margin-bottom: 4rem;"
                >      
                &lt;/vue-editor>  
              &lt;/v-layout>
            &lt;/v-flex>
          </code>
        </pre>
        Esto nos generara algo asi
        <v-flex xs12>
          <p class="text-md-center title blue-grey--text darken-3">
            <b>Descripción</b>
          </p>
          <v-layout row justify-center py-3>
            <vue-editor id="description" 
              name="description_field"
              v-model="task.description" 
              style="height:15em;margin-bottom: 4rem;"
            >      
            </vue-editor>  
          </v-layout>
        </v-flex>
        Y bueno como podemos ver tienen distintas funciones pero queremos que este campo description,
        sea solo textos bueno volveremos a ir a nuestro <b class="blue-grey--text darken-2">task.js</b>
        y en el area del data agregaremos la variable customToolbar
        <pre class="language-javascript">
          <code style="box-shadow: none;">
            data(){
              return {
                //...
                customToolbar: [
                  [{"header":[]}],
                  ['bold', 'italic','underline',"strike","blockquote","code","code-block"],
                  [{"align":""},{"align":"center"},{"align":"right"},{"align":"justify"}],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' },{"list":"check"}],
                  [{"script":"sub"},{"script":"super"}],
                  [{"indent":"-1"},{"indent":"+1"}],
                  [{"color":[]},{"background":[]}]
                ],
                //...
              }
            }
          </code>
        </pre>
        y en el .vue solo vamos a convocar una variable que tiene este componente
        llamado editorToolbar
        <pre class="language-javascript">
          <code style="box-shadow: none;">
                 ...
                &lt;/v-card>
              &lt;/v-dialog>
            &lt;/v-flex>
            &lt;v-flex xs12>
              &lt;p class="text-md-center title blue-grey--text darken-3">
                &lt;b>Descripción</b>
              &lt;/p>
              &lt;v-layout row justify-center py-3>
                &lt;vue-editor id="description" 
                  name="description_field"
                  :editorToolbar="customToolbar"
                  v-model="task.description" 
                  style="height:15em;margin-bottom: 4rem;"
                >      
                &lt;/vue-editor>  
              &lt;/v-layout>
            &lt;/v-flex>
          </code>
        </pre>
        Esto nos generara algo asi
        <v-flex xs12>
          <p class="text-md-center title blue-grey--text darken-3">
            <b>Descripción</b>
          </p>
          <v-layout row justify-center py-3>
            <vue-editor id="description" 
              name="description_field"
              v-model="task.description"
              :editorToolbar="customToolbar" 
              style="height:15em;margin-bottom: 4rem;"
            >      
            </vue-editor>
          </v-layout>
        </v-flex>
      </span>
    </v-flex>     
    <task lesson="4"></task>
  </v-layout>
</v-container>
</template>
<script src="./importar.js"></script>