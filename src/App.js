import React, {Component} from 'react'
import TodoList from './todolist/TodoList'
class App extends Component {
  state = {}
  render() { 
    return (
      <div>
        <TodoList/>
      </div>
    )
  }
}

export default App