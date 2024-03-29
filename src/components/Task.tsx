import { useState, useEffect } from 'react'
import iconTrash from '../assets/svg/trash.svg'
import iconChecked from '../assets/svg/checked.svg'
import styles from './Task.module.css'

interface PropsTask {
    content: string,
    id?: string,
    getDeleteTaskId: (idTask: string) => void,
    getTaskCompleteStatus: (idTask: string) => void,
}

export function Task({ content, id, getDeleteTaskId, getTaskCompleteStatus}: PropsTask) {
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        try {
            const tasksStorage = localStorage.getItem('taskList')
            if (tasksStorage !== null) {
                const taskParse = JSON.parse(tasksStorage)
                taskParse.map((task: [string, string, boolean]) => {
                    if (task[1] === id) {
                        setIsComplete(task[2])
                    }
                })
            }
        } 
        catch(error) {
            console.log(error)
        }
    },[id])

    function handleDeleteTask() {
        if (id !== undefined) {
            getDeleteTaskId(id)
        }
    }

    function handleToggleCompleteTask() {
        if (id !== undefined) {
            getTaskCompleteStatus(id)
            setIsComplete(!isComplete)
        }
    }

    return (
        <article className={`${styles.task} ${isComplete && styles.complete}`}>
            <button 
                className={styles.btn_checkbox}
                onClick={handleToggleCompleteTask}
            >

                {isComplete ? (
                    <>
                        <img src={iconChecked} alt="complete" />
                    </>
                ) : (
                    <>
                        <span className={styles.checkbox}/>
                    </>
                )}
            </button>
            <p className={styles.content}>{content}</p>
            <button
                className={styles.btn_delete}
                onClick={handleDeleteTask}
            >
                <img src={iconTrash} alt="delete" />
            </button>
        </article>
    )
}