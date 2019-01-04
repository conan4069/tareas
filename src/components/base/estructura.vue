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
      funcionalidades de nuestro componente. La carpeta quedaria del siguiente modo:
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
      <template slot="prepend" slot-scope="{ item, open, leaf }">
        <v-icon v-if="!item.file">
          {{ open ? 'fa-folder-open' : 'fa-folder' }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
  </v-flex>
</v-layout>
</template>
<script src="./estructura.js"></script>