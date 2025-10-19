import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src="src/assets/rocket.svg" alt="logo foguete" />
                <h1>todo</h1>
            </header>
        </>

    )

}