import React from 'react';
import ReactDOM from 'react-dom';


const dummyData = [{taskTest: "eat", completed: false}, {taskTest:"code", completed:true}]

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li><button type="button">X</button> {this.props.task.completed ? <strike>{this.props.task.taskTest}</strike> : this.props.task.taskTest} </li>
    )
  }
}


class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <ul>
        {dummyData.map((task)=><Todo task={task}/>)}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <input type="text" placeholder="Todo Item"/>
        <input type="submit" value="Add"/>
      </div>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <InputLine/>
        <TodoList/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'))
