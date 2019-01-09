<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap mt-5>
      <v-btn color="success">text</v-btn>
      <v-flex xs12 sm6 md4 v-for="group in groups" :key="group.title"> 
        <v-card>
          <v-toolbar :color="group.color" dark>
            <v-toolbar-title>{{ group.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>fa-more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-lines ref="list" :data-group="group.title" :key="group.title">    
            <!-- <v-list-tile v-for="task in getTasks(group.title)" class="drag-item" :id="task.id" :key="task.id">
              <v-list-tile-content>
              </v-list-tile-content>
            </v-list-tile> -->        
            <task :taskInfo="task" :group="group.title"
              v-for="task in getTasks(group.title)" class="drag-item" :key="task.id"
            >
            </task>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./groups.js"></script>