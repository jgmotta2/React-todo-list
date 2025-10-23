import { useState } from 'react'
import styles from './TaskList.module.css'


export function TaskList() {

    const [taskCreated, setTaskCreated] = useState(0);
    const [taskComplete, setTaskComplete] = useState(0);

    function CreateTask(){
        const task = setTaskCreated (taskCreated + 1);
    }

    return (
        <>
        <div className={styles.taskList}>
            <section>
                <span>Tarefas criadas: {taskCreated}</span>
                <span >Concluídas</span>
            </section>
            <div className={styles.description}>
                <img src="src/assets/Clipboard.svg" alt="" />
                <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>  
        </>
    )

}