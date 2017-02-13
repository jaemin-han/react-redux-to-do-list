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

    return (
      <div>
        <ul className="task-list">


        </ul>
      </div>
    )
  }
}

function select(state) {
  return {};
};

export default connect(select)(TaskList);

