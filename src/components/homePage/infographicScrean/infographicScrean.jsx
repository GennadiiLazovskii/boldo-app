import styles from './infographicScrean.module.scss';
import MenGreen from '../../../images/infographic/gren-m.png';
import Men from '../../../images/infographic/men.png';
import Houses from '../../../images/infographic/houses.png';

const InfographicScrean = () => {

  return (
    <div className={styles.infographicScrean}>
      <div className={styles.container}>
        <div className={styles.infographicMassMarket}>
          <h2 className={styles.infographicMassMarketTitle}>Handshake infographic mass market crowdfunding iteration.</h2>
          <div className={styles.infographicMassMarketBlock}>
            <div className={styles.infographicMassMarketBlockCard}>
              <img src={MenGreen} alt="Men" />
              <p className={styles.CardTitle}>Cool feature title</p>
              <p className={styles.CardDescr}>Learning curve network effects return on investment.</p>
              <p className={styles.CardBtn}>Explore page</p>
            </div>
            <div className={styles.infographicMassMarketBlockCard}>
              <img src={Men} alt="Men" />
              <p className={styles.CardTitle}>Cool feature title</p>
              <p className={styles.CardDescr}>Learning curve network effects return on investment.</p>
              <p className={styles.CardBtn}>Explore page</p>
            </div>
            <div className={styles.infographicMassMarketBlockCard}>
              <img src={Houses} alt="Houses" />
              <p className={styles.CardTitle}>Cool feature title</p>
              <p className={styles.CardDescr}>Learning curve network effects return on investment.</p>
              <p className={styles.CardBtn}>Explore page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicScrean;