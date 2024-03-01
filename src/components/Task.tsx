import iconTrash from '../assets/svg/trash.svg'
import styles from './Task.module.css'

export function Task() {
    return (
        <article className={styles.task}>
            <button className={styles.btn_checkbox}>
                <span className={styles.checkbox}/>
            </button>
            <p className={styles.content}>my tasks here</p>
            <button className={styles.btn_delete}>
                <img src={iconTrash} alt="delete" />
            </button>
        </article>
    )
}