import { FormEvent, ChangeEvent } from 'react';
import styles from './InputTask.module.css'

export function InputTask() {

    function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }

    function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('submited');
    }

    return (
        <form onSubmit={handleSubmitTask} className={styles.form_container}>
            <input
                className={styles.input_task}
                placeholder="Adicione uma nova taréfa"
                onChange={handleNewTaskValue}
            />
            <button type="submit" className={styles.button_submit}>
                Criar
                <img src='/src/assets/svg/plus.svg' alt='+'/>
            </button>
        </form>
    );
}