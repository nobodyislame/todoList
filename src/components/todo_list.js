import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props)=>{

  let todoList = props.todoList;
  let todoItems = props.todoList.map((todo, index)=>{
    return <TodoListItem
              todoItem={todo}
              todoList={todoList}
              serial={index+1}
              key={index}
              onTodoDone={props.onTodoDone} />
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
