<template>
<v-container fluid :style="{
  'background-color': typeof(task.colorBg) === 'string' ? task.colorBg : task.colorBg.hex,
  'color': task.color,
  'position': 'relative',
  'height': '100%'
}">
<v-layout row wrap>
    <v-bottom-sheet>
      <v-btn
        key="paint"
        v-model="fab"
        color="blue-grey darken-2"
        dark
        slot="activator"
        fab
        small
        style="z-index:4;position: absolute;bottom: 0;right:0px;"
      >
        <v-icon>fa-tachometer</v-icon>
      </v-btn>
      <v-card tile>
        <span :style="{
          'color': task.color ? 'white' : 'black',
          'padding': '5px',
          'width': '10px',
          'white-spacing': 'nowrap',
          'text-overflow': 'ellipsis',
          'background-color': typeof(task.colorBg) === 'string' ? task.colorBg : task.colorBg.hex
        }">
          <b>Ejemplo de los colores: </b>{{ task.text }}
        </span>
        <v-form>
          <v-container>
            <v-text-field
              v-model="task.text"
              label="Agregar una tarea"
            >
            </v-text-field>
            <p class="text-md-center display-1 blue-grey--text darken-3">
              <b>Colores de la tarea</b>
            </p>
            <v-layout row justify-center py-3>
              <chrome-picker 
                disableAlpha 
                v-model="task.colorBg">
              </chrome-picker>
              <v-checkbox
              label="letras blancas"
              v-model="task.color"
              >  
              </v-checkbox>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-bottom-sheet>
  <v-flex xs12>
    <span :style="{
      'color': task.color ? 'white' : 'black'
    }">
      {{ task.text }}
    </span>
  </v-flex>
</v-layout>
</v-container>
</template>
<script src="./task.js"></script>