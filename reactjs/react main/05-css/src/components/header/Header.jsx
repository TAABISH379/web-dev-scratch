import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>Welcome</h3>
        <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>

        <button className={styles.btn}>Login</button>

    </div>
    
  )
}

export default Header