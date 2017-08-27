var todosList = {
  todos:[],
  display:function(){
    console.log('Mytodos;');
    for(i = 0; i < this.todos.length; i++){
      console.log(this.todos[i].todosText);
    }
  },
  addTodo: function(todosText){
    this.todos.push({
      todosText: todosText,
      completed: false
    });
    this.display();
  },
  changeTodo: function(position,newValue){
    this.todos[position] = newValue;
    this.display();
  },
  deleteDodos: function(position){
    this.todos.splice(position,1);
    this.display();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.display();
  }
};
