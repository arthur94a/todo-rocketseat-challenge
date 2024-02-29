import { Layout } from './components/Layout'
import { InputTask } from "./components/InputTask";

import './global.css'


export function App() {

  return (
    <Layout>
      <InputTask />
      <h1>Hello World!</h1>
    </Layout>
  )
}