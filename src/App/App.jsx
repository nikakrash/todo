import TaskList from '../TaskList/TaskList';
import { useState } from 'react';
import styles from './App.module.css';

let tasksData = [
  { id: 1, text: 'dkfkkfkf', date: '22.11.22', status: 'inProgress' },
  { id: 2, text: 'elelelleel', date: '33.11.33', status: 'done' }
]

function App() {
  const [tasks, setTasks] = useState(tasksData);

  function toggleTask(id) {
    const newTaskData = tasksData.map(data => {

      if (data.id === id) {
        data.status = data.status === 'done' ? 'inProgress' : 'done';
      }

      return tasksData;
    })

    setTasks(newTaskData);
  }

  return (
    <>
      <div className={styles.title}>Todo list</div>
      <div className={styles.container}>
        <TaskList tasksData={tasksData} onChange={toggleTask}/>
      </div>
    </>
  )
}

export default App;
