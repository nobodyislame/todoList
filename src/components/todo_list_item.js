import React from 'react';

const TodoListItem = (props)=>{
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-2">
          <b>{props.serial}</b>
        </div>
        <div className="col-md-6">
          <b>{props.todoItem.todo}</b>
        </div>
        <div className="col-md-2">
          <button className="btn btn-success">Completed</button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
