import Image from 'next/image'
import styles from '../styles/ContentHome.module.scss'

export default function ContentHome () {
    return (
        <section className={styles.content}>
            <div className={styles.left}>
                <Image src='/computernibbleone.png' alt='Imagem de computador, celular e tablet' width='635' height='480' />
            </div>
            <div className={styles.right}>
                <h2>VENDA DE FORMA PROFISSIONAL</h2>
                <h1>COM UM SITE</h1>
                <h3>QUE É A CARA DA SUA EMPRESA!</h3>
                <button>FAÇA UM ORÇAMENTO</button>
            </div>
        </section>
    )
}