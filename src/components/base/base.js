import estructura from "./estructura.vue"

export default{
  components:{
    'estructura': estructura
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