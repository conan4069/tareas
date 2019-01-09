import { VueEditor } from 'vue2-editor'
import task from "../task/task.vue"

export default{
  data(){
    return {
      task:{
        description:""
      },
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
  components:{
    'vue-editor':VueEditor,
    'task':task
  }
}