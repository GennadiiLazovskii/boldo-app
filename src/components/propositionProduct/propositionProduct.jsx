import styles from './propositionProduct.module.scss';
import GrenMen from '../../images/proposition/grenmen.png';
import Woman from '../../images/proposition/woman.png';
import Houses from '../../images/proposition/home.png';
import User1 from '../../images/proposition/1.png';
import User2 from '../../images/proposition/2.png';
import User3 from '../../images/proposition/3.png';

const PropositionProduct = () => {
  return (
    <div className={styles.propositionProduct}>
      <div className={styles.container}>
        <div className={styles.propositionProductBlockTitle}>
          Value proposition accelerator product management venture
        </div>
        <div className={styles.propositionProductBlock}>
          <div className={styles.propositionProductBlockCard}>
            <img src={GrenMen} alt="Men" />
            <div className={styles.CardTitle}>
              <h2>Category</h2>
              <p>November 22, 2023</p>
            </div>
            <p className={styles.CardDescr}>
              Pitch termsheet backing validation focus release.
            </p>
            <div className={styles.CardUser}>
              <img src={User1} alt="User" />
              <p>Chandler Bing</p>
            </div>
          </div>
          <div className={styles.propositionProductBlockCard}>
            <img src={Woman} alt="Woman" />
            <div className={styles.CardTitle}>
              <h2>Category</h2>
              <p>November 22, 2023</p>
            </div>
            <p className={styles.CardDescr}>
              Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
            </p>
            <div className={styles.CardUser}>
              <img src={User2} alt="User" />
              <p>Rachel Green</p>
            </div>
          </div>
          <div className={styles.propositionProductBlockCard}>
            <img src={Houses} alt="Houses" />
            <div className={styles.CardTitle}>
              <h2>Category</h2>
              <p>November 22, 2023</p>
            </div>
            <p className={styles.CardDescr}>
              Beta prototype sales iPad gen-z marketing network effects value proposition
            </p>
            <div className={styles.CardUser}>
              <img src={User3} alt="User" />
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
        <div className={styles.propositionProductBlockBtn}>
          <button>Load more</button>
        </div>
      </div>
    </div>
  );
};

export default PropositionProduct;
