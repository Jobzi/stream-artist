import React from 'react'
import styles from './Footer.module.css'
import Yaw from '../../assets/yaw.svg'

function Footer () {
  return <footer className={styles.footer}>
        <a className={styles.a} href="" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <img src={Yaw} alt="Yaw Logo" width={100} height={36} />
          </span>
        </a>
      </footer>
}
export default Footer
