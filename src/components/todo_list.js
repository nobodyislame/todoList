import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props)=>{
  let todoItems = props.todoList.map((todo, index)=>{
    return <TodoListItem todoItem={todo} serial={index+1} key={index} />
  })
  return (
    <div className="text-center">
      <ul className="list-group">
        {todoItems}
      </ul>
    </div>
  );
}

export default TodoList;
