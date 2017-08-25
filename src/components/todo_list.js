import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props)=>{

  // let todoList = props.todoList;
  let todoLength = props.todoList.length;
  if(todoLength >0){
    let todoItems = props.todoList.map((todo, index)=>{
      return <TodoListItem
                todoItem={todo}
                todoList={props.todoList}
                serial={index+1}
                key={index}
                onTodoDone={props.onTodoDone} />
    });

    return (
      <div className="text-center">
        <ul className="list-group">
          {todoItems}
        </ul>
      </div>
    );
  }
  else{
    return(
      <div className="text-center">
        <h3 className="text-muted">No Entries made to the todo list</h3>
      </div>
    )
  }
}

export default TodoList;
