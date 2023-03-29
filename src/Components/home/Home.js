import styles from './home.module.css'

export function Home(){
    return(
        <div className={styles.homeContainer}>
            <div className={styles.leftContainer}>
                <h1>Welcome</h1>
                <span>to my site</span>
            </div>
            <hr/>
            <div className={styles.rightContainer}>
                <span>I'm</span>
                <h2>Shubham Sharma</h2>
            </div>
        </div>
    )
}