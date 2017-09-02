var todosList = {
  todos:[],
  display:function(){
   if(this.todos.length === 0){
     console.log('this array is emopty');
   }else{
   console.log('My Todos:');
    for(i = 0; i < this.todos.length; i++){
      if(this.todos[i].completed === true){
      console.log('(x)',this.todos[i].todosText);
      }else{
        console.log('()',this.todos[i].todosText);
      }
    }
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
    debugger;
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
  },
      toggleAll: function() {
            
            var allTodos = this.todos.length;
            var completedTodos = 0;
            // Get # of completed todos:
            for (var i=0; i < allTodos; i++) {
                if (this.todos[i].completed === true) {
                    completedTodos++;
                }
            }
            // Case 1: if everything is true, make them all false:
            if (completedTodos === allTodos) {
                // make everthing false:
                for (var i=0; i < allTodos; i++) {
                    this.todos[i].completed = false;
                }
            // this.displayTodos(); -- we don't need display for every case - just in the end
            } else {
            // Case 2:  If some are true, make them all true:
                // even if only 1 is true, so we need to find the 1st true:
                for (var k=0; k < allTodos; k++) {
                    this.todos[k].completed = true;
                }
            }
            // after the case logic, it will display the outcome:
            this.display();
        }
};

var handlers = {
  displayTodos: function(){
    todosList.display()
  },
  toggleAll: function(){
    todosList.toggleAll();
  }
}