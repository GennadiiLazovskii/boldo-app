import styles from './mainScrean.module.scss';
import BoldoLogo from '../../images/main/logoBoldo.png';

const MainScrean = () => {
  return (
    <div className={styles.mainScrean}>
      <div className={styles.container}>
        <div className={styles.mainHeader}>
          <div className={styles.mainLogo}>
            <img src={BoldoLogo} alt="Boldo-Logo" />
          </div>
          <div className={styles.mainbtn}>
            <p>Product</p>
            <p>Services</p>
            <p>About</p>
          </div>
        </div>
        <div className={styles.mainCenter}>
          
        </div>
      </div>
    </div>
  )
}

export default MainScrean;
