import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

export default function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <Image src='/logo.png' width='230' height='50' alt='Logo da nibbleone'/>
            </div>
            <div className={styles.right}>
                <ul>
                    <li>HOME</li>
                    <li>SOBRE</li>
                    <li>CLIENTES</li>
                    <li>CONTATO</li>
                </ul>
            </div>
        </nav>
    )
}