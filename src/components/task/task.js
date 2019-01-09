import { VueEditor } from 'vue2-editor'
import "./task.css"

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
    taskInfo : Object,
    group: String
  },
  data(){
    return {
      //Aca retornaremos todos los modelos que retornaremos
      //y podran se usados desde el archivo .vue
      task:{
        colorBg:"",
        color:false,
        description:"",
        id:"",
        group:"",
        subtask:[],
        text:""
      },
      text:"",
      indextask:"",
      fab:false,
      dialog:false,
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
    totalSubtask(){
      return this.task.subtask.length
    },
    completedSubtask(){
      return this.task.subtask.filter(o => o.done === true ).length
    }
  },
  methods:{
    //En esta seccion como su nombre lo dice crearemos
    //Todos los metodos que usaremos en nuestro componente
    save(){
      this.dialog = false
      if(this.indextask === ''){
        this.task.subtask.push({
          'task': this.text,
          'done': false
        })
      }
      else{
        this.task.subtask[this.indextask].task = this.text
        this.indextask = ""
      }
      this.text = ""
    },
    editSubTask(index){
      if(!this.task.subtask[index].done){
        this.text = this.task.subtask[index].task
        this.indextask = index
        this.dialog = true
      }
    },
    removeSubTask(index){
      this.task.subtask.splice(index,1)
    }
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
    if(this.taskInfo != undefined){
      this.task = this.taskInfo
    }
  }
}