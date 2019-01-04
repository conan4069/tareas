export default{
  props:{
    //Aqui definimos los valores cuando queremos que otro componente
    //Nos envie informacion pertinente a nuestro componente
  },
  data(){
    return {
      //Aca retornaremos todos los modelos que retornaremos
      //y podran se usados desde el archivo .vue  
    }
  },
  computed:{
    //Ahora estan los campos calculados es cuando queremos mostrar una variable
    //calculada o dinamica
  },
  methods:{
    //En esta seccion como su nombre lo dice crearemos
    //Todos los metodos que usaremos en nuestro componente
  },
  watch:{
    //Este es un observador que ando chequeando una variable especifica
    //cada vez que hay un cambio en una variable podemos realizar otro
    //proceso
  },
  mounted(){
    //Este es una funcion del lifecicle de la instancia
    // ver https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    this.$store.dispatch("setScreen","Tareas")
  }
}