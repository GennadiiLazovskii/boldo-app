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

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3git,
  });

  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    marginLeft: headerInView ? 0 : -100,
  });

  const [bottomRef, bottomInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const bottomAnimation = useSpring({
    opacity: bottomInView ? 1 : 0,
    marginRight: bottomInView ? 0 : -100,
  });


  return (
    <div className={styles.connectCustomers}>
      <div className={styles.container}>
        <div ref={headerRef}>
        <div className={styles.connectCustomersBlockHeader}>
          <animated.div className={styles.connectCustomersBlockLeft} style={headerAnimation}>
            <img src={Men} alt="Men" />
            <div className={styles.connectCustomersBlockLeftCard}>
              <img src={InfoGrafic} alt="Grafic" />
              <h2>30%</h2>
              <p>More income in June</p>
            </div>
          </animated.div>
          <animated.div className={styles.connectCustomersBlockRight} style={headerAnimation}>
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

      <div ref={bottomRef}>
      <animated.div className={styles.connectCustomersBlockBottom} style={bottomAnimation}>
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
        </animated.div>
      </div>
      </div>
    </div>
  );
};

export default ConnectCustomers;
