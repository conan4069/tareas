<template>
  <v-container>
    <v-flex v-if="inicio == 1">
      <h1 class="blue-grey--text darken-1 text-uppercase text-md-center">
        Bienvenidos al mini taller de Vue
      </h1>
      <ventaja @instalar="back"/>
    </v-flex>
    <v-layout
      v-if="inicio == 2"
      wrap
    >
      <v-flex xs12>
        <v-icon>fa-cogs</v-icon>
        <span class="headline blue-grey--text darken-3">
          Instalación de vue como framework junto con vuetify
        </span><br>
        <span>
          Para iniciar instalaremos 
          <a href="https://cli.vuejs.org/guide/installation.html">vue-cli</a> 
        </span>
        <pre class="language-bash">
          <code style="box-shadow: none;">
            npm install -g @vue/cli
          </code>
        </pre>
        <span> Una vez instalado Vue-cli comprobamos que este instalado</span>
        <pre class="language-bash">
          <code style="box-shadow: none;">  
            vue --version # 3.2.1
          </code>
        </pre>
        <span> Ahora crearemos nuestro proyecto</span>
        <pre class="language-bash">
          <code style="box-shadow: none;">  
            vue create my-proyect
          </code>
        </pre>
        <span>
          En el proceso de creado nos dejara seleccionar opciones, 
          por defecto salen dos opciones:
          <ul>
            <li>
              <b>default:</b> Nos instalara vue, con babel y eslint
            </li>
            <li>
              <b>Manually select features:</b> En esta opción podremos customizar 
              nuestra aplicación: Para estos ejemplos usaremos esta opción
              con vue-router, vuex, babel, eslint.
            </li>
          </ul>
          Ahora esperaremos que realice la configuración default con nuestra configuración.
          Bien luego de instalado nos falta añadir vuetify a nuestra aplicación primero que todo
          nos desplazaremos a la carpeta de nuestro proyecto el cual acabamos de crear.
        </span>
        <pre class="language-bash">
          <code style="box-shadow: none;">  
            cd my-project
            # Añadiremos vuetify
            vue add vuetify
            # seleccionaremos la opcion default de vuetify
          </code>
        </pre>
        <span>Bueno ahora podemos iniciar nuestro proyecto ya dentro de la carpeta</span>
        <pre class="language-bash">
          <code style="box-shadow: none;">
            npm run serve
          </code>
        </pre>
        <span>
          Esto nos permitira iniciar el servidor local ahora podemos ir a nuestro
          navegador de preferencia y en las url colocar <b>https://localhost:8080</b>
        </span>
        <br>
        <v-layout justify-center>
          <v-btn color="success" dark @click="viewpreview">
            <v-icon small class="mr-2">fa-eye</v-icon>  
            Vista previa
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout
      text-xs-center
      wrap
      v-if="inicio == 3"
    >
      <v-flex xs12>
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
      <v-layout justify-center>
        <v-btn color="red darken-2" 
          dark 
          @click="back">
          <v-icon small class="mr-2">fa-chevron-left</v-icon>
          Atras
        </v-btn>
        <v-btn color="success" to="/base">
          <v-icon small class="mr-2">fa-chevron-right</v-icon>
          Pasar a la siguiente lección
        </v-btn>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script src="./HelloWorld.js">
</script>