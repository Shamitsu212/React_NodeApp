import Aside from '../../layout/Aside/Aside'
import Header from '../../layout/Header/Header'
import styles from './Main_Page.module.css'

function Main_Page() {

  return (
    <div className={styles.Container}>
      
      <div className={styles.Container_header}>
        <Header />
      </div>
      

      <div className={styles.Container_row}>
        <Aside/>
      </div>

    </div>
  )
}

export default Main_Page
