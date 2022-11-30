import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.css';
import PropTypes, { element } from 'prop-types';

TaskList.propTypes = {
  state: PropTypes.array,
  setState: PropTypes.func,
  filter: PropTypes.object
};

function filterState(state, filter) {
  const filtredState = state.filter(element => {
    switch (filter.key) {
      case 'both':
        return element;
      case 'done':
        return element.isSuccess === true;
      case 'inProgress':
        return element.isSuccess === false;
    }
  });

  return filtredState;
}

function TaskList({state, setState, filter}) {
  function deleteTask(id) {
    setState(state.filter((task) => task.id !== id))
  }

  function toggleTask(id) {
    setState(state.map((task) => {
      if (task.id === id) {
        return {...task, isSuccess: !task.isSuccess}
      }
      else {
        return task
      }
    }))
  }

  return (
    <div className={styles.list}>
      {filterState(state, filter).map((data) => (
        <Task
            text={data.text}
            data={data.date}
            key={data.id}
            id={data.id}
            onClick={deleteTask}
            isSuccess={data.isSuccess}
            toggleTask={toggleTask}
        />
      ))}
    </div>
  )
}

export default TaskList;
