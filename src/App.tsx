import { useState, useEffect } from 'react';
import { Layout } from './components/Layout'
import { InputTask } from "./components/InputTask";
import { DisplayTasks } from './components/DisplayTasks';

import './global.css'

export function App() {
  const [tasks, setTasks] = useState<[string, string, boolean][]>([])

  useEffect(() => {
    try {
      const tasksStorage = localStorage.getItem('taskList')
      if (tasksStorage !== null) {
        const taskParse = JSON.parse(tasksStorage)
        setTasks(taskParse)
      }
    } 
    catch(error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const tasksStringify = JSON.stringify(tasks)
      localStorage.setItem('taskList', tasksStringify)
    }, 100)
  }, [tasks])

  function getterTaskList(taskList: [string, string, boolean][]) {
    setTasks(taskList)
  }

  function deleteTask(idTask: string) {
    setTasks(tasks.filter(task => task[1] !== idTask))
  }
  
  function completeTask(idTask: string) {
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