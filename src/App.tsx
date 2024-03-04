import { useState } from 'react';
import { Layout } from './components/Layout'
import { InputTask } from "./components/InputTask";
import { DisplayTasks } from './components/DisplayTasks';

import './global.css'

export function App() {
  const [tasks, setTasks] = useState<[string, number][]>([])

  function getterTaskList(taskList: [string, number][]) {
    setTasks(taskList)
  }

  function deleteTask(idTask: number) {
    setTasks(tasks.filter(task => task[1] !== idTask))
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
      />
    </Layout>
  )
}