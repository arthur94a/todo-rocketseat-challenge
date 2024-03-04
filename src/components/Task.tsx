import iconTrash from '../assets/svg/trash.svg'
import styles from './Task.module.css'

interface PropsTask {
    content: string,
    id?: number,
    getDeleteTaskId: (idTask: number) => void,
}

export function Task({ content, id, getDeleteTaskId }: PropsTask) {

    function handleDeleteTask() {
        if (id !== undefined) {
            getDeleteTaskId(id)
        }
    }

    return (
        <article className={styles.task}>
            <button className={styles.btn_checkbox}>
                <span className={styles.checkbox}/>
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