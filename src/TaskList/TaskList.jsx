import Task from '../Task/Task';
import styles from './TaskList.module.css';

function TaskList(props) {
  return (
    <div className={styles.list}>
      {props.tasksData.map(data => <Task
                                    text={data.text}
                                    data={data.date}
                                    key={data.id}
                                    status={data.status}
                                    onChange={props.onChange}
                                    id={data.id}
                                  />
      )}
    </div>
  )
}

export default TaskList;
