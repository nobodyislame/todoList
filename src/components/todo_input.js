import React,{ Component } from 'react';

class TodoInput extends Component{
  constructor(props){
    super(props);
    this.state={
      todo : ''
    }
  }
  onTodoAdd(){
    this.props.todoList.push({
      todo : this.state.todo,
      done : false
    });
    this.props.onNewTodo(this.props.todoList);
    this.setState({ todo : '' });
  }
  render(){
    return (
      <div className="row todo-input">
        <div className="col-md-10">
          <input
            placeholder="Enter todo"
            value = {this.state.todo}
            className="form-control"
            onChange={event=>{this.setState({todo : event.target.value})}}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary btn-block"
            onClick={()=>{this.onTodoAdd()}}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default TodoInput;
