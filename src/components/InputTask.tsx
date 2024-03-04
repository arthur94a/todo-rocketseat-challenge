import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import styles from './InputTask.module.css'

interface InputTaskProps {
    taskList: (x: [string, number][]) => void,
    attTaskList: [string, number][],
}

export function InputTask({ taskList, attTaskList }: InputTaskProps) {
    const [taskId, setTaskId] = useState<number>(1)
    const [taskItems, setTaskItems] = useState<[string, number][]>([]);
    const [newTaskContent, setNewTaskContent] = useState<string>('');

    useEffect(() => {
        setTaskItems(attTaskList)
    }, [attTaskList])

    function handleNewTaskValueChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskContent(event.target.value);
    }

    function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (newTaskContent !== '') {
            setTaskId(taskId + 1);
            setNewTaskContent('');
            setTaskItems([...taskItems, [newTaskContent, taskId]])
            taskList([...taskItems, [newTaskContent, taskId]]);
        }
    }

    return (
        <form onSubmit={handleSubmitTask} className={styles.form_container}>
            <input
                className={styles.input_task}
                placeholder="Adicione uma nova taréfa"
                onChange={handleNewTaskValueChange}
                value={newTaskContent}
            />
            <button type="submit" className={styles.button_submit}>
                Criar
                <img src='/src/assets/svg/plus.svg' alt='+'/>
            </button>
        </form>
    );
}