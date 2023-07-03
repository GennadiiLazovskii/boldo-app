import styles from './stayOpen.module.scss';
import stayOpenImg from '../../../images/stayOpen/stayOpen.png';
import Check from '../../../images/connectCustomers/check.png';

const StayOpen = () => {
  return (
    <div className={styles.stayOpen}>
      <div className={styles.container}>
        <div className={styles.stayOpenBox}>
          <div className={styles.stayOpenBoxImg}>
            <img src={stayOpenImg} alt="stayOpenImg" />
          </div>
          <div className={styles.stayOpenBoxDescr}>
            <div className={styles.stayOpenBoxDescrTitle}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </div>
            <div className={styles.stayOpenBoxDescrCheckBox}>
              <div className={styles.stayOpenBoxDescrCheck}>
                <p>We connect our customers with the best?</p>
                <img src={Check} alt="Check" />
              </div>
              <div className={styles.stayOpenBoxDescrCheck}>
                <p>Android research & development rockstar? </p>
                <img src={Check} alt="Check" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayOpen;
