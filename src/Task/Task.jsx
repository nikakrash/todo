import React from 'react';
import { Card, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

function Task({ text, data, onClick, id, isSuccess, toggleTask }) {
  const classNames = [styles.card];

  classNames.push(isSuccess ? styles.done : styles.inProgress);

  return (
    <div className={styles.wrapper}>
      <Checkbox onChange={() => toggleTask(id)} checked={isSuccess}/>
      <Card className={classNames.join(' ')}>
        <div className={styles.text}>
          {text}
        </div>
        <div className={styles.date}>
          {data}
        </div>
      </Card>
      <button className={styles.button} type="button" onClick={() => onClick(id)}>x</button>
    </div>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  toggleTask: PropTypes.func.isRequired
};

export default Task;
