<template>
  <v-app>
    <v-toolbar app color="blue-grey lighten-1" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>Taller </span> / 
        <span class="font-weight-light">{{$store.getters.getScreen}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="blue-grey darken-3" dark>
      <v-layout justify-center row wrap class="pt-2">
        <p>
          <b>
            Realizado por Miguel Villamizar de ANALITICOM - Mérida 
            <v-icon small>group</v-icon>
          </b>
        </p><span style="margin: 0px 5px;">/</span>
        <p>
          <b>
            Realizado por Reichel Yanez de ANALITICOM - Caracas 
            <v-icon small>group</v-icon>
          </b>
        </p>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import './plugins/prism.js'
import './plugins/prism.css'
export default {
  name: 'App',
}
</script>
