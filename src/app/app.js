import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTask, getTasks } from './actions';
import TaskList from './taskList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getTasks());
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
    // passed down as props in different components
    const { dispatch, habits, dailies, todos } = this.props;

    return (
      <div className="container">
        <section>
          <h3>Habits</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={habits} type="habit" />
        </section>
        <section>
          <h3>Dailies</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={dailies} type="daily" />
        </section>
        <section>
          <h3>Todos</h3>
          <TaskList
            onCompleteTask={(task) => this.handleCompleteTask(task)}
            tasks={todos} type="todo" />
        </section>
      </div>
    );

  }
}

// It will get new tasks and filter through these below and passed down
// as props
function select(state) {
  return {
    habits: state.tasks.filter(task => task.type === 'habit'),
    dailies: state.tasks.filter(task => task.type === 'daily'),
    todos: state.tasks.filter(task => task.type === 'todo')
  };
}

// Application is connected to the Redux and the store
// It will run a 'select' function above
export default connect(select) (App);
