import dragula from 'dragula'
import 'dragula/dist/dragula.css'
import task from '../task/task.vue'

export default{
  components:{
    'task':task
  },
  data(){
    return {
      fab:false,
      groups: [
        {
          title: 'to-do',
          colorBg: 'indigo',
          color:true
        }, 
        {
          title: 'doing',
          colorBg: 'amber',
          color:true
        },
        {
          title: 'done',
          colorBg: 'teal',
          color:true
        },
      ],
      group:{
        'title':"",
        'colorBg':"",
        'color':""
      },
      addTask:false,
      tasks: [
        {
          id: 1,
          text: 'esto es una tarea to-do',
          group: 'to-do',
          subtask:[],
          colorBg:"",
          color:false,
          description:""
        },
        {
          id: 2,
          text: 'esto es una tarea to-do',
          group: 'to-do',
          subtask:[],
          colorBg:"",
          color:false,
          description:""
        },
        {
          id: 3,
          text: 'esto es una tarea done',
          group: 'done',
          subtask:[],
          colorBg:"",
          color:false,
          description:""
        },
        {
          id: 4,
          text: 'esto es una tarea done',
          group: 'done',
          subtask:[],
          colorBg:"",
          color:false,
          description:""
        },
        {
          id: 5,
          text: 'esto es una tarea doing',
          group: 'doing',
          subtask:[],
          colorBg:"",
          color:false,
          description:""
        },
        {
          id: 6,
          text: 'esto es una tarea doing',
          group: 'doing',
          subtask:[],
          colorBg:"",
          color:false,
          description:""
        },
      ],
      task:{
        colorBg:"",
        color:false,
        description:"",
        id:"",
        group:"",
        subtask:[],
        text:""
      }
    }
  },
  methods: {
    getTasks(group) {
      return this.tasks.filter(task => task.group === group);
    },
    updatetasks(id, group) {
      this.tasks.find(task => task.id === Number(id)).group = group;
    },
    save(){
      this.group.colorBg = this.group.colorBg.hex
      this.groups.push(this.group)
      this.group = {
        'text':"",
        'colorBg':"",
        'color':""
      }
      this.fab = false
    },
    createTask(gp){
      if(this.tasks.length > 0){
        this.task.id = this.tasks[this.tasks.length - 1].id + 1
      }
      else{
        this.task.id = 1  
      }
      this.task.group = gp
      this.task.text = ""
      this.addTask = true
    },
    saveTask(){
      this.tasks.push(this.task)
      this.addTask = false
    }
  },
  mounted () {
    let list = this.$refs.list.map(element => element.$el);
    dragula(list)
    .on('drag', (el) => {
      el.classList.add('is-moving');
    })
    .on('drop', (task, list) => {
      let index = 0;
      for (index = 0; index < list.children.length; index += 1) {
        if (list.children[index].classList.contains('is-moving')) break;
      }
      this.updatetasks(task.children[0].id, list.dataset.group);
    })
    .on('dragend', (el) => {
      el.classList.remove('is-moving');
      window.setTimeout(() => {
        el.classList.add('is-moved');
        window.setTimeout(() => {
          el.classList.remove('is-moved');
        }, 600);
      }, 100);
    })
  }
}