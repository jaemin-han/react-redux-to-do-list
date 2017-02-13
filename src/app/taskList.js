import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  addTask(taskText) {
    const { dispatch, type } = this.props;
    dispatch(addTask(taskText, type));
  }

  render() {
    const { onCompleteTask, tasks } = this.props;
    let newTask;

    // Render all 'tasks' which has an Onclick action to complete the task
    // Once you complete the task (see above)
    // Create input text with + sign to add new task/s
    return (
      <div>
        <ul className="task-list">

          <li className="task">
            <input type="text" ref={node => { newTask = node }} />
            <a onClick={() => this.addTask(newTask.value)}>+</a>
          </li>

          { tasks.map(task =>
          <li key={task.id} className={task.completed ? 'task completed' : 'task'}>
            <span onClick={() => { onCompleteTask(task) }}>[ ]</span>
            {task.text}
          </li>
          )}
        </ul>
      </div>
    )
  }
}

function select(state) {
  return {};
}

export default connect(select)(TaskList);

