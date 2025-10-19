import styles from './TaskInput.module.css'

export default function TaskInput() {
    return (
        <div className={styles.taskInput}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar</button>
        </div>



    )
}