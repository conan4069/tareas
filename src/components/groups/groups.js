import dragula from 'dragula';
import 'dragula/dist/dragula.css';

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