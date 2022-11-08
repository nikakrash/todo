import { Card } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import styles from './Task.module.css';

function Task(props) {
  const classes = [styles.card];

  props.status === 'done' ? classes.push(styles.done) : classes.push(styles.inProgress);

  return (
    <div className={styles.wrapper}>
      <Checkbox onChange={() => props.onChange(props.id)} checked={props.status === 'done'} />
      <Card className={classes.join(' ')}>
        <div className={styles.text}>
          {props.text}
        </div>
        <div className={styles.date}>
          {props.data}
        </div>
      </Card>
      <button className={styles.button}>x</button>
    </div>
  );
}

export default Task;
