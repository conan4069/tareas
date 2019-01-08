import dragula from 'dragula';

export default{
  data(){
    return {
      groups: [
        {
          title: 'to-do',
          color: 'indigo'
        }, 
        {
          title: 'doing',
          color: 'amber'
        },
        {
          title: 'done',
          color: 'teal'
        },
      ],
      tasks: [
        {
          id: 1,
          text: 'esto es una tarea to-do',
          group: 'to-do'
        },
        {
          id: 2,
          text: 'esto es una tarea to-do',
          group: 'to-do'
        },
        {
          id: 3,
          text: 'esto es una tarea done',
          group: 'done'
        },
        {
          id: 4,
          text: 'esto es una tarea done',
          group: 'done'
        },
        {
          id: 5,
          text: 'esto es una tarea doing',
          group: 'doing'
        },
        {
          id: 6,
          text: 'esto es una tarea doing',
          group: 'doing'
        },
      ],
    }
  },
  methods: {
    getTasks(group) {
      return this.tasks.filter(task => task.group === group);
    },
    updatetasks(id, group) {
      this.tasks.find(task => task.id === Number(id)).group = group;  
    }
  }
}