import styles from './TaskList.module.css'


export default function TaskList() {
    return (
        <>
            <div className={styles.taskList}>
                <span >Tarefas criadas</span>
                <span >Concluídas</span>
            </div>

        </>
    )

}