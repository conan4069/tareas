<template>
<v-container fluid :style="{
  'background-color': typeof(task.colorBg) === 'string' ? task.colorBg : task.colorBg.hex,
  'color': task.color,
  'box-shadow': '8px 4px 20px -7px rgba(0,0,0,.6),4px -2px 4px 2px rgba(0,0,0,.2)',
  'border-radius': '30px 0px 30px 0px',
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
    <v-card tile style="height: 32em;overflow-y:auto">
      <v-form>
        <p :style="{
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
          <b>Ejemplo de los colores: </b>{{ task.text }}
        </p>
        <v-container>
          <v-text-field
            v-model="task.text"
            label="Agregar una tarea"
          >
          </v-text-field>
          <v-expansion-panel popuout>
            <v-expansion-panel-content>
              <div slot="header">
                <p class="text-md-center display-1 blue-grey--text darken-3">
                  <b>Colores de la tarea</b>
                </p>
              </div>
              <v-layout row justify-center py-3>
                <v-flex xs12 md4>
                  <chrome-picker 
                    disableAlpha 
                    v-model="task.colorBg">
                  </chrome-picker>
                </v-flex>
                <v-flex xs12 md4>
                  <v-checkbox
                    label="letras blancas"
                    v-model="task.color"
                    color="blue-grey darken-2"
                  >  
                  </v-checkbox>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">
                <p class="text-md-center display-1 blue-grey--text darken-3">
                  <b>Información extra</b>
                </p>
              </div>
              <v-layout row wrap>
                <v-flex xs12>
                  <p class="text-md-center title blue-grey--text darken-3">
                    <b>Sub Tareas</b>
                  </p>
                  <v-list-tile style="position: relative;" v-for="(value,i) in task.subtask" :key="i">
                    <v-list-tile-action>
                      <v-checkbox v-model="value.done"
                        color="blue-grey darken-2"
                      >
                      </v-checkbox>
                    </v-list-tile-action>
                    <v-list-tile-content @click="editSubTask(i)">
                      <v-list-tile-title :style="{
                        'text-decoration': value.done?'line-through':'none',
                        'text-decoration-color': value.done?'red':'transparent',
                        'width': '52rem',
                        'white-space': 'nowrap'
                      }">
                        <span>{{ value.task }}</span>
                      </v-list-tile-title>
                    </v-list-tile-content>
                    <v-btn color="red" flat fab small 
                      style="z-index:4;position:absolute;bottom: 0px;right:.8rem;"
                      @click.prevent="removeSubTask(i)">
                      <v-icon>fa-trash</v-icon>
                    </v-btn>
                  </v-list-tile>
                  <v-list-tile @click="dialog=!dialog" class="add">
                    <v-list-tile-content class="text-md-center">
                      <v-list-tile-sub-title>
                        <v-icon>fa-plus</v-icon>
                        <span class="caption blue-grey--text darken-2" 
                          style="z-index:4;position:absolute;bottom: 0px;right:2rem;"
                        >
                          {{ completedSubtask }}/{{ totalSubtask }}
                        </span>
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-dialog
                    v-model="dialog"
                    max-width="800px"
                  >
                    <v-card>
                      <v-card-title class="headline">Añadir SubTarea</v-card-title>
                      <v-card-text>
                        <v-form @submit.prevent="save()">
                          <v-text-field
                            v-model="text"
                            label="Tarea"
                          >
                          </v-text-field>
                        </v-form>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          color="blue-grey darken-1"
                          flat="flat"
                          @click="dialog = false"
                        >
                          Cancel
                        </v-btn>

                        <v-btn
                          color="blue-grey darken-1"
                          flat="flat"
                          @click="save()"
                        >
                          <span v-if="indextask === ''">Añadir</span>
                          <span v-else>Editar</span>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>
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
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-container>
      </v-form>
    </v-card>
  </v-bottom-sheet>
  <v-flex xs12>
    <span class="display-1" :style="{
      'color': task.color ? 'white' : 'black'
    }">
      {{ task.text }}
    </span>
  </v-flex>
</v-layout>
</v-container>
</template>
<script src="./task.js"></script>