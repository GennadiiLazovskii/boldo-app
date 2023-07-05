import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './infographicScrean.module.scss';
import MenGreen from '../../../images/infographic/gren-m.png';
import Men from '../../../images/infographic/men.png';
import Houses from '../../../images/infographic/houses.png';

const InfographicScrean = () => {

  const [infographicRef, infographicInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const infographicAnimation = useSpring({
    opacity: infographicInView ? 1 : 0,
    marginLeft: infographicInView ? 0 : -100,
  })

  return (
    <div className={styles.infographicScrean}>
      <div className={styles.container}>
        <div ref={infographicRef}>
          <animated.div className={styles.infographicMassMarket} style={infographicAnimation}>
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
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default InfographicScrean;