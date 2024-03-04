import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import styles from './InputTask.module.css'

interface InputTaskProps {
    taskList: (x: [string, string, boolean][]) => void,
    attTaskList: [string, string, boolean][],
}

export function InputTask({ taskList, attTaskList }: InputTaskProps) {
    const [taskIdNumber, setTaskIdNumber] = useState<number>(1)
    const [taskId, setTaskId] = useState<string>((new Date).toISOString() + taskIdNumber.toString())
    // const [taskComplete, setTaskComplete] = useState<boolean>(false)
    const [taskItems, setTaskItems] = useState<[string, string, boolean][]>([]);
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
            setTaskIdNumber(taskIdNumber + 1)
            setTaskId((new Date).toISOString() + taskIdNumber.toString());
            setNewTaskContent('');
            setTaskItems([...taskItems, [newTaskContent, taskId, false]])
            taskList([...taskItems, [newTaskContent, taskId, false]]);
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