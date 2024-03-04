import { useState } from 'react'
import iconTrash from '../assets/svg/trash.svg'
import iconChecked from '../assets/svg/checked.svg'
import styles from './Task.module.css'

interface PropsTask {
    content: string,
    id?: number,
    getDeleteTaskId: (idTask: number) => void,
    getTaskCompleteStatus: (idTask: number) => void,
}

export function Task({ content, id, getDeleteTaskId, getTaskCompleteStatus}: PropsTask) {
    const [isComplete, setIsComplete] = useState(false);

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