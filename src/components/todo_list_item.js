import React from 'react';

const TodoListItem = (props)=>{
  const completed = ()=>{
    if(!props.todoItem.done){
      props.todoList[props.serial-1].done = true;
    }
    else{
      props.todoList[props.serial-1].done = false;
    }
    props.onTodoDone(props.todoList);
  }
  const deleteTodo = ()=>{
    props.todoList.splice(props.splice-1,1);
    props.onTodoDone(props.todoList);
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-2">
          <h5>{props.serial}</h5>
        </div>
        <div className="col-md-6">
          <h4 className={props.todoItem.done ?'done' : ''}>{props.todoItem.todo}</h4>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-default"
            onClick={completed}
            >
            {!props.todoItem.done?'Mark Done': 'Mark Undone'}
          </button>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-danger"
            onClick={deleteTodo}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
