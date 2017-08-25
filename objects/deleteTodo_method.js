var todosList = {
  todos:['item1','item2','item3','item4'],
  display:function(){
    console.log('Mytodos',this.todos);
  },
  addTodo: function(todos){
    this.todos.push(todos);
    this.display();
  },
  changeTodo: function(position,newValue){
    this.todos[position] = newValue;
    this.display();
  },
  deleteDodos: function(position){
    this.todos.splice(position,1);
    this.display();
  }
};
