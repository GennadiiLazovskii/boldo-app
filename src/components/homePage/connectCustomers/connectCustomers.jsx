import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './connectCustomers.module.scss';
import {
  Men,
  Woman,
  Check,
  InfoGrafic,
  InfoGraficCircle,
  CircleBlue,
  CircleGreen,
  CircleGray,
  Feather,
  Eye,
  Sun
} from '../../../images/connectCustomers/connectCustomersImages.jsx';

const ConnectCustomers = () => {

  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftAnimation = useSpring({
    opacity: leftInView ? 1 : 0,
    transform: leftInView ? 'translateX(0)' : 'translateX(-100px)',
  });

  const rightAnimation = useSpring({
    opacity: rightInView ? 1 : 0,
    transform: rightInView ? 'translateX(0)' : 'translateX(100px)',
  });


  return (
    <div className={styles.connectCustomers}>
      <div className={styles.container}>
        <div className={styles.connectCustomersBlockHeader}>
          <div ref={leftRef}>
          <animated.div className={styles.connectCustomersBlockLeft} style={leftAnimation}>
            <img src={Men} alt="Men" />
            <div className={styles.connectCustomersBlockLeftCard}>
              <img src={InfoGrafic} alt="Grafic" />
              <h2>30%</h2>
              <p>More income in June</p>
            </div>
          </animated.div>
          </div>
          <div ref={rightRef}>
          <animated.div className={styles.connectCustomersBlockRight} style={rightAnimation}>
            <div className={styles.connectCustomersBlockRightTitle}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </div>
            <div className={styles.connectCustomersBlockRightList}>
              <div className={styles.connectCustomersBlockRightListItem}>
                <img src={Check} alt="Check" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className={styles.connectCustomersBlockRightListItem}>
                <img src={Check} alt="Check" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className={styles.connectCustomersBlockRightListItem}>
                <img src={Check} alt="Check" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
            <div className={styles.connectCustomersBlockRightBtn}>
              <button>Start now</button>
            </div>
          </animated.div>
          </div>
        </div>

        <div className={styles.connectCustomersBlockBottom}>
          <div className={styles.connectCustomersBlockRight}>
            <img src={Woman} alt="Woman" />
            <div className={styles.connectCustomersBlockRightCard}>
              <img src={InfoGraficCircle} alt="Grafic" />
              <ul>
                <li>
                  <img src={CircleBlue} alt="CircleBlue" />
                  <p>35% - Agile Development</p>
                </li>
                <li>
                  <img src={CircleGreen} alt="CircleGreen" />
                  <p>35% - Agile Development</p>
                </li>
                <li>
                  <img src={CircleGray} alt="CircleGray" />
                  <p>35% - Agile Development</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.connectCustomersBlockLeft}>
            <div className={styles.connectCustomersBlockLeftTitle}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </div>
            <div className={styles.connectCustomersBlockLeftList}>
              <div className={styles.connectCustomersBlockLeftListItemBlack}>
                <img src={Feather} alt="Feather" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className={styles.connectCustomersBlockLeftListItem}>
                <img src={Eye} alt="Eye" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className={styles.connectCustomersBlockLeftListItem}>
                <img src={Sun} alt="Check" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCustomers;
