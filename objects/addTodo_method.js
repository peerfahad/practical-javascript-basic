var todosList = {
  todos:['item1','item2','item3','item4'],
  display:function(){
    console.log('Mytodos',this.todos);
  },
  addTodo: function(todos){
    this.todos.push(todos);
    this.display();
  }
};
