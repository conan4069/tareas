import estructura from "./estructura.vue"
import inicio from "./inicioApp.vue"
import repeticion from "./repeticion.vue"
import task from "../task/task.vue"
import importarComponents from "./importar.vue"
import ciclos from "./condicionales.vue"

export default{
  components:{
    'estructura': estructura,
    'inicio': inicio,
    'repeticion':repeticion,
    "task":task,
    "importarComponents":importarComponents,
    "condicionales": ciclos
  },
  data () {
    return {
      step: 1
    }
  },
  methods:{
    setTitle(){
      this.$store.dispatch('setScreen',"Lección Básica " + this.step)
    },
    changeStep(number){
      this.step = number
      this.setTitle()
    }
  },
  mounted(){
    this.setTitle()
  }
}