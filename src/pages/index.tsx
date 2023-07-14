import styles from '@/styles/Home.module.scss'
import Navbar from '../components/Navbar'
import ContentHome from '../components/ContentHome'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className={styles.main}>
      <Navbar />
      <ContentHome />
      <Footer />
    </div>
  )
}
