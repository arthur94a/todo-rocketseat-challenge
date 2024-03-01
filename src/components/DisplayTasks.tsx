import { useState } from "react"
import { Task } from './Task'
import iconClipboard from '../assets/svg/clipboard.svg'
import styles from './DisplayTasks.module.css'

export function DisplayTasks() {
    const [taskCount, setTaskCoun] = useState(0);
    const [taskCompleteCount, setTaskCompleteCount] = useState(0);
    const [isTasksEmpty, setIsTaskEmpty] = useState(false);

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
                        <Task />
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