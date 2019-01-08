<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap mt-5>
      <v-flex ma-1 v-for="group in groups" :key="group.title"> 
        <v-card>
          <v-toolbar :color="group.color" dark>
            <v-toolbar-title>{{ group.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>fa-more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-lines ref="list" :data-group="group.title" :key="group.title">    
              <v-list-tile v-for="task in getTasks(group.title)" class="drag-item" :id="task.id" :key="task.id">
                <v-list-tile-content>
                  <v-list-tile-title v-html="task.text"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>        
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script src="./groups.js"></script>