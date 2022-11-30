import React, {useState} from 'react';
import TaskList from '../TaskList/TaskList';
import { Checkbox } from '@material-ui/core';
import styles from './App.module.css';

const tasksData = [
  {
    id: 1, text: 'dkfkkfkf', date: '22.11.22', isSuccess: true
  },
  {
    id: 2, text: 'elelelleel', date: '33.11.33', isSuccess: false
  },
  {
    id: 3, text: 'dkfkkfkf', date: '22.11.22', isSuccess: false
  },
  {
    id: 4, text: 'elelelleel', date: '33.11.33', isSuccess: false
  },
];

function getMaxId(state) {
  return state.reduce((acc, item) => {
    return acc > item.id ? acc : item.id
  }, 0)
}

function useStateWithKey(initialState) {
  const [data, setData] = useState(initialState);

  function setDataByKey(key, value) {
    setData(oldData => ({...oldData, [key]: value}))
  }

  return [data, setDataByKey, setData];
}

function App() {
  const [state, setState] = useState(tasksData);
  const [data, setDataByKey, setData] = useStateWithKey({value: "", date: ""});
  const [filter, setFilterByKey, setFilter] = useStateWithKey({key: 'both'}); // eslint-disable-line no-unused-vars

  function addTask() {
    setState([{ id: getMaxId(state) + 1, text: data.value, date: data.date, isSuccess: false}, ...state])
    setData({value: "", date: ""});
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textareaContainer}>
          <div className={styles.title}>Добавьте задачу</div>
          <textarea className={styles.textarea} onChange={(e) => setDataByKey('value', e.target.value)} value={data.value} />
          <input type="date" className={styles.calendar} onChange={(e) => setDataByKey('date', e.target.value)} value={data.date} />
          <button className={styles.addButton} onClick={addTask} disabled={!data.value||!data.date}>Добавить</button>
        </div>
        <div>
          {
            state.length !== 0 &&
            <label className={styles.filter}>
              <Checkbox onChange={(e) => setFilterByKey('key', e.target.checked ? 'done' : 'both')}/>
              Посмотреть выполненные
            </label>
          }
          <TaskList state={state} setState={setState} filter={filter}/>
        </div>
      </div>
    </>
  );
}

export default App;
