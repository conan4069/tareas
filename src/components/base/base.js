import estructura from "./estructura.vue"
import inicio from "./inicioApp.vue"
import repeticion from "./repeticion.vue"

export default{
  components:{
    'estructura': estructura,
    'inicio': inicio,
    'repeticion':repeticion
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