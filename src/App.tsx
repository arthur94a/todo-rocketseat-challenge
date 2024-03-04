import { useState } from 'react';
import { Layout } from './components/Layout'
import { InputTask } from "./components/InputTask";
import { DisplayTasks } from './components/DisplayTasks';

import './global.css'

export function App() {
  const [tasks, setTasks] = useState<[string, number, boolean][]>([])

  function getterTaskList(taskList: [string, number, boolean][]) {
    setTasks(taskList)
  }

  function deleteTask(idTask: number) {
    setTasks(tasks.filter(task => task[1] !== idTask))
  }
  
  function completeTask(idTask: number) {
    const changeTaskStatus = tasks.map(task => {
      if (task[1] === idTask) {
        task[2] = !task[2]
      }

      return task;
    })

    setTasks(changeTaskStatus)
  }

  return (
    <Layout>
      <InputTask 
        taskList={getterTaskList}
        attTaskList={tasks}  
      />
      <DisplayTasks 
        taskData={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </Layout>
  )
}