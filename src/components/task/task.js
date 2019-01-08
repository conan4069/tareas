import { VueEditor } from 'vue2-editor'

export default{
  components:{
    //En esta seccion colocaremos el llamado a otros componentes,
    //de modo tal que quede key:component, la key sera la
    //etiqueta html que creareamos y la cual hare referencia,
    //a nuestro componente
    'vue-editor':VueEditor
  },
  props:{
    //Aqui definimos los valores cuando queremos que otro componente
    //Nos envie informacion pertinente a nuestro componente
  },
  data(){
    return {
      //Aca retornaremos todos los modelos que retornaremos
      //y podran se usados desde el archivo .vue
      task:{
        colorBg:"",
        color:false,
        text:"fdfdsafsdfsad",
        description:"",
        id:"",
        group:"",
        type:"note"
      },
      fab:false,
      customToolbar: [
        [{"header":[]}],
        ['bold', 'italic','underline',"strike","blockquote","code","code-block"],
        [{"align":""},{"align":"center"},{"align":"right"},{"align":"justify"}],
        [{ 'list': 'ordered'}, { 'list': 'bullet' },{"list":"check"}],
        [{"script":"sub"},{"script":"super"}],
        [{"indent":"-1"},{"indent":"+1"}],
        [{"color":[]},{"background":[]}]
      ]
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