import React from 'react';

const TodoListItem = (props)=>{
  const completed = ()=>{
    props.todoList[props.serial-1].done = true;
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
            className="btn btn-success"
            onClick={completed}
            >
            Completed
          </button>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
