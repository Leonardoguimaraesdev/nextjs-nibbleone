import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router'

export default function Navbar () {
    const router = useRouter()

    const navegation = (e) => {
        const page = e.target.innerText

        console.log(page)

        if ( page === "HOME") {
            router.push('/')
        }
        if ( page === "SOBRE") {
            router.push('/about')
        }
        if ( page === "CLIENTES") {
            router.push('/clients')
        }
        if ( page === "CONTATO") {
            router.push('/contact')
        }
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <Image src='/logo.png' width='230' height='50' alt='Logo da nibbleone'/>
            </div>
            <div className={styles.right}>
                <ul>
                    <li onClick={(e) => navegation(e)}>HOME</li>
                    <li onClick={(e) => navegation(e)}>SOBRE</li>
                    <li onClick={(e) => navegation(e)}>CLIENTES</li>
                    <li onClick={(e) => navegation(e)}>CONTATO</li>
                </ul>
            </div>
        </nav>
    )
}