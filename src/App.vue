<template>
  <v-app>
    <v-navigation-drawer
        app
        clipped
        stateless
        hide-overlay
        :mini-variant="$vuetify.breakpoint.name === 'sm' || 
        $vuetify.breakpoint.name === 'xs' ? true : false"
        v-model="drawer">
        <v-list-tile>
            <v-list-tile-action>
                <router-link to="/">
                    <v-icon>fa-home</v-icon>
                </router-link>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    <router-link to="/">
                        <v-list-tile-title>
                            Qué es Vue y como instalarlo
                        </v-list-tile-title>
                    </router-link>  
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
                <router-link to="/base">
                    <v-icon>fa-book</v-icon>
                </router-link>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    <router-link to="/base">
                        <v-list-tile-title>
                          Lecciones
                        </v-list-tile-title>
                    </router-link>  
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
                <router-link to="/task">
                    <v-icon>fa-tasks</v-icon>
                </router-link>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                    <router-link to="/groups">
                        <v-list-tile-title>
                          Administrador de tareas
                        </v-list-tile-title>
                    </router-link>  
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-navigation-drawer>
    <v-toolbar app color="blue-grey lighten-1" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span v-if="$route.name != 'task'">Taller / </span>  
        <span class="font-weight-light">{{$store.getters.getScreen}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="show"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="blue-grey darken-3" dark>
      <v-layout justify-center row wrap class="pt-2">
        <p>
          <b>
            Realizado por Miguel Villamizar de ANALITICOM - Mérida 
            <v-icon small>fa-users</v-icon>
          </b>
        </p><span style="margin: 0px 5px;">/</span>
        <p>
          <b>
            Reichel Yanez de ANALITICOM - Caracas 
            <v-icon small>fa-users</v-icon>
          </b>
        </p>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      drawer:false
    }
  },
  methods:{
    show(){
      this.drawer = !this.drawer
    }
  }
}
</script>