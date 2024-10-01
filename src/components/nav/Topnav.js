import styles from './css_modules/topnav.module.css'
function TopNav(){
    return (
        <nav id={styles.top_nav}>
            <div className={styles.logo}>
                <div><img src="/favicon.ico" alt="" /></div>
                <p>TEEMBOOM DOCS .</p>
            </div>
            <ul className={styles.links}>
                <a href="/">Support</a>
                <a target='_blank' rel="noreferrer" href="https://admin.teemboom.com">Login</a>
            </ul>
        </nav>
    )
}

export default TopNav