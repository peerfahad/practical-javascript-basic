var todosList = {
  todos:[],
  display:function(){
    console.log('Mytodos',this.todos);
  },
  addTodo: function(todosText){
    this.todos.push({
      todosText: todosText,
      completed: false
    });
    this.display();
  },
  changeTodo: function(position,todoText){
    this.todos[0].todosText = todoText;
    this.display();
  },
  deleteDodos: function(position){
    this.todos.splice(position,1);
    this.display();
  }
};
