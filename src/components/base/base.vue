<template>
	<v-stepper v-model="step">
    <v-stepper-header style="flex-wrap: nowrap;overflow-x: auto;">
      <v-stepper-step :complete="step > 1" step="1" color="green lighten-2">
        Estructura base de vue
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 2" step="2" color="green lighten-1">
        Crearemos el principio de nuestra app
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 3" step="3" color="green darken-1">
        Bucles y condicionales
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 4" step="4" color="green darken-3">
        Inclusión de un componente dentro de otro
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-layout row wrap>
          <v-flex xs12>
            <estructura></estructura>
          </v-flex>
          <v-layout justify-center>
            <v-btn @click="changeStep(2)" color="blue-grey darken-2" dark>
              <v-icon small class="mr-2">fa-chevron-right</v-icon>
              Siguiente lección
            </v-btn>
          </v-layout>
        </v-layout>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-layout row wrap>
          <v-flex xs12>
            <inicio></inicio>
          </v-flex>
          <v-layout justify-center>
            <v-btn @click="changeStep(1)" color="red lighten-1" dark>
              <v-icon small class="mr-2">fa-chevron-left</v-icon>
              Lección anterior
            </v-btn>
            <v-btn @click="changeStep(3)" color="blue-grey darken-2" dark>
              <v-icon small class="mr-2">fa-chevron-right</v-icon>
              Siguiente lección
            </v-btn>
          </v-layout>
        </v-layout>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-layout row wrap>
          <v-flex xs12>
            <condicionales></condicionales>
            <repeticion></repeticion>
          </v-flex>
          <v-layout justify-center>
            <v-btn @click="changeStep(2)" color="red lighten-1" dark>
              <v-icon small class="mr-2">fa-chevron-left</v-icon>
              Lección anterior
            </v-btn>
            <v-btn @click="changeStep(4)" color="blue-grey darken-2" dark>
              <v-icon small class="mr-2">fa-chevron-right</v-icon>
              Siguiente lección
            </v-btn>
          </v-layout>
        </v-layout>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-layout row wrap>
          <v-flex xs12>
            <importarComponents></importarComponents>
          </v-flex>
          <v-layout justify-center>
            <v-btn @click="changeStep(3)" color="red lighten-1" dark>
              <v-icon small class="mr-2">fa-chevron-left</v-icon>
              Lección anterior
            </v-btn>
          </v-layout>
        </v-layout>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script src="./base.js"></script>