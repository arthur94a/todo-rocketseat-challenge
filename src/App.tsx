import { Layout } from './components/Layout'
import { InputTask } from "./components/InputTask";
import { DisplayTasks } from './components/DisplayTasks';

import './global.css'

export function App() {

  return (
    <Layout>
      <InputTask />
      <DisplayTasks />
    </Layout>
  )
}