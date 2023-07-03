import styles from './bottom.module.scss';
import Logo from '../../images/main/logoBoldoBL.png';

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.container}>
        <div className={styles.columnLogo}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.description}>
            Social media validation business model canvas graphical user interface
            launch party creative facebook iPad twitter.
          </div>
        </div>
        <div className={styles.columnWrap}>
          <div className={styles.column}>
            <h2>Landings</h2>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
          <div className={styles.column}>
            <h2>Company</h2>
            <a href="#">Home</a>
            <a href="#">Careers</a>
            <a href="#">Services</a>
          </div>
          <div className={styles.column}>
            <h2>Resources</h2>
            <a href="#">Blog</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;

