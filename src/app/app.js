import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTask } from './actions';
import TaskList from './taskList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleCompleteTask(task) {
    const { dispatch } = this.props;

    dispatch(completeTask(task.id));
  }

  // Redux Loop: 23:21 - https://www.youtube.com/watch?v=tBya7sDXS7c
  // You have view and get data from the store
  // when 'check marked' it triggers dispatch (id) -- passed through reducer,
  // which modifies the state. This 'state' goes back to the 'store'
  // 'store' notifies everyone that is connected that there is a new state.
  // State has props, which go through 'view' and these are rendered through VIEW
  render() {
    // Need connect
    const { dispatch, habits, dailies, todos } = this.props;

    return (
      <div>
        <section>
          <h3>Habits</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={habits} />
        </section>
        <section>
          <h3>Dailies</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={dailies} />
        </section>
        <section>
          <h3>Todos</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={todos} />
        </section>
      </div>
    );

  }
}

function select(state) {
  return {
    habits: state.tasks.filter(task => task.type === 'habit'),
    dailies: state.tasks.filter(task => task.type === 'daily'),
    todos: state.tasks.filter(task => task.type === 'todo')
  };
}
export default connect(select) (App);
