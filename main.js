Vue.component('my-heading', {
    template: '<h1>{{heading}}</h1>',
    data () {
        return{
            heading: 'MY TO-DO LIST'
        }
    }
})

Vue.component('hilary', {
    template: '<p>  copyright &copy {{producer}} </p>',
    data () {
        return{
            producer: 'Made By Hilary'
        }
    }
})

Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button class="btn1" v-on:click="$emit(\'remove\')">X</button>\
      </li>\
    ',
    props: ['title']
  })

let app = new Vue({
    el:'#app',
    data: {
      todo:'',
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Cut my hair'
        }
      ],
      nextTodoId: 4
    },


methods: {

    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
});

