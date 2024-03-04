import { useState, useEffect } from "react"
import { Task } from './Task'
import iconClipboard from '../assets/svg/clipboard.svg'
import styles from './DisplayTasks.module.css'


interface PropsDisplayTasks {
    taskData: [string, number][],
    deleteTask: (idTask: number) => void,
}

export function DisplayTasks({ taskData, deleteTask }: PropsDisplayTasks) {
    const [taskCount, setTaskCount] = useState(0);
    const [taskCompleteCount, setTaskCompleteCount] = useState(0);
    const [isTasksEmpty, setIsTaskEmpty] = useState(true);

    useEffect(() => {
        setTaskCount(taskData.length)
        setIsTaskEmpty(taskData.length !== 0 ? false : true)
    }, [taskData])

    function getDeleteTaskId(idTask: number) {
        console.log('idTask', idTask)
        deleteTask(idTask)
    }

    return (
        <section className={styles.display}>
            <header className={styles.task_count_container}>
                <div className={styles.tasks_created}>
                    <p>Tarefas criadas</p>
                    <span>{taskCount}</span>
                </div>
                <div className={styles.tasks_completed}>
                    <p>Concluidas</p>
                    <span>{taskCompleteCount}</span>
                </div>
            </header>

            <div className={styles.task_list_container}>
                {!isTasksEmpty ? (
                    <>
                        {
                            taskData.map(data => {
                                if (data[0] !== '') {
                                    return (
                                        <Task content={data[0]} key={data[1]} id={data[1]} getDeleteTaskId={getDeleteTaskId}/>
                                    )
                                }
                            })
                        }
                    </>
                ) : (
                    <>
                        <span className={styles.tasks_empty}>
                            <img src={iconClipboard} alt="empty" />
                            <p>
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                            </p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </span>
                    </>
                )}
            </div>
        </section>
    )
}