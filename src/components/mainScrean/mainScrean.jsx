import styles from './mainScrean.module.scss';
import BoldoLogo from '../../images/main/logoBoldo.png';
import BoldoLogoWhite from '../../images/main/logoBoldoWhite.png';
import Graphics from '../../images/main/graphicsgraf.png';
import PrestoLogo from '../../images/main/presto-logo.png';

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
          <div className={styles.mainCenterLeft}>
            <div className={styles.mainCenterLeftTitle}>
              <h1>Save time by building fast with Boldo Template</h1>
            </div>
            <div className={styles.mainCenterLeftBtn}>
              <button className={styles.mainCenterBtnGreen}>Buy template</button>
              <button className={styles.mainCenterBtnWhite}>Explore</button>
            </div>
          </div>
          <div className={styles.mainCenterRight}>
            <img src={Graphics} alt="Graphics" />
          </div>
        </div>
        <div className={styles.mainBottom}>
          <div className={styles.scrollingPhotos}>
            <img src={BoldoLogoWhite} alt="BoldoLogo" />
            <img src={PrestoLogo} alt="PrestoLogo" />
            <img src={BoldoLogoWhite} alt="BoldoLogo" />
            <img src={PrestoLogo} alt="PrestoLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScrean;

