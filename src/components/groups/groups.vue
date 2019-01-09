<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap mt-5>
      <v-flex xs12>
        <v-btn 
            fab
            @click="fab = !fab" 
            slot="activator"
            color="blue-grey darken-2" 
            dark>
          <v-icon>fa-plus</v-icon>
        </v-btn>
        <span class="blue-grey--text darken-2 headline">
          Crear Grupos
        </span>
        <v-dialog v-model="fab">
          <v-card>
            <v-card-title class="headline" :style="{
              'background-color': typeof(group.colorBg) === 'string' ? group.colorBg : group.colorBg.hex,
              'color': group.color?'white':'black'
            }">
              Añadir Grupo
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="save()">
                <v-text-field
                  autofocus
                  v-model="group.title"
                  label="Grupo"
                >
                </v-text-field>
              </v-form>
              <v-layout row justify-center py-3>
                <v-flex xs12 md4>
                  <chrome-picker 
                    disableAlpha 
                    v-model="group.colorBg">
                  </chrome-picker>
                </v-flex>
                <v-flex xs12 md4>
                  <v-checkbox
                    label="letras blancas"
                    v-model="group.color"
                    color="blue-grey darken-2"
                  >  
                  </v-checkbox>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-grey darken-1"
                flat="flat"
                @click="fab = false"
              >
                Cancel
              </v-btn>

              <v-btn
                color="blue-grey darken-1"
                flat="flat"
                @click="save()"
              >
                <!-- <span v-if="in dextask === ''">Añadir</span> -->
                <span>Añadir</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12 sm6 md4 v-for="group in groups" :key="group.title"> 
        <v-card>
          <v-toolbar :style="{
              'background-color': typeof(group.colorBg) === 'string' ? group.colorBg : group.colorBg.hex,
              'color': group.color,
            }" 
            dark
          >
            <v-toolbar-title>{{ group.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="createTask(group.title)">
              <v-icon>fa-plus</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-lines ref="list" :data-group="group.title" :key="group.title">    
            <task :taskInfo="task" :group="group.title"
              lesson="6"
              v-for="task in getTasks(group.title)" class="drag-item" :key="task.id+'-task'"
            >
            </task>
          </v-list>
        </v-card>
      </v-flex>
      <v-dialog v-model="addTask">
        <v-card>
          <v-card-title class="headline" :style="{
            'background-color': typeof(group.colorBg) === 'string' ? group.colorBg : group.colorBg.hex,
            'color': group.color?'white':'black'
          }">
            Añadir Tarea al grupo {{task.group}} {{task.id}}
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="saveTask()">
              <v-text-field
                autofocus
                v-model="task.text"
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
              @click="addTask = false"
            >
              Cancel
            </v-btn>

            <v-btn
              color="blue-grey darken-1"
              flat="flat"
              @click="saveTask()"
            >
              <!-- <span v-if="in dextask === ''">Añadir</span> -->
              <span>Añadir</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>
<script src="./groups.js"></script>