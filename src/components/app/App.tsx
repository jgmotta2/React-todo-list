import Header from '../header/Header.tsx'
import TaskInput from '../taskInput/TaskInput.tsx'
import TaskList from '../taskList/TaskList.tsx'
import styles from './App.module.css'

function App() {

    return (
        <>
            <Header />
            <div >
                <TaskInput />
                <TaskList />
            </div>

        </>
    )
}

export default App
