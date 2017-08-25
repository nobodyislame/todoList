import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [
        {todo : 'Todo1', done : false},
        {todo : 'Todo2', done : false}
      ]
    }
  }
  render(){
    return(
      <div>
        <TodoInput onNewTodo = { todos=>{this.setState({todos})} } todoList={this.state.todos} />
        <TodoList todoList={this.state.todos} onTodoDone={todos=>{this.setState({todos})}} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
