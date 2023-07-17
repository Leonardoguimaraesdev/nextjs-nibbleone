import styles from '../../styles/Contact.module.scss'
import Navbar from '../../components/Navbar'
import ContentContact from '../../components/ContentContact'
import Footer from '../../components/Footer'

export default function Contact() {

  return (
    <div className={styles.main}>
      <Navbar />
      <ContentContact />
      <Footer />
    </div>
  )
}
