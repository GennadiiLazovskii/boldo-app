import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from './enterpriseTemplate.module.scss';
import User1 from '../../../images/enterprise/user-1.png';
import User2 from '../../../images/enterprise/user-2.png';
import User3 from '../../../images/enterprise/user-3.png';

const EnterpriseTemplate = () => {

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const cardAnimation = useSpring({
    opacity: cardInView ? 1 : 0,
    marginLeft: cardInView ? 0 : -100,
  })

  return (
    <div className={styles.enterpriseTemplate}>
      <div className={styles.container}>
        <div ref={cardRef}>
          <div className={styles.enterpriseTemplateBlock}>
            <div className={styles.enterpriseTemplateTitle}>An enterprise template to ramp up your company website</div>
            <animated.div className={styles.enterpriseTemplateBlockCard} style={cardAnimation}>
              <div className={styles.enterpriseTemplateCard}>
                <div className={styles.enterpriseTemplateCardTitle}>“Buyer buzz partner network disruptive non-disclosure agreement business”</div>
                <div className={styles.enterpriseTemplateCardUser}>
                  <img src={User1} alt="User1" />
                  <div className={styles.enterpriseTemplateCardUserPosition}>
                    <p className={styles.name}>Albus Dumbledore</p>
                    <p className={styles.position}>Manager @ Howarts</p>
                  </div>
                </div>
              </div>
              <div className={styles.enterpriseTemplateCard}>
                <div className={styles.enterpriseTemplateCardTitle}>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</div>
                <div className={styles.enterpriseTemplateCardUser}>
                  <img src={User2} alt="User2" />
                  <div className={styles.enterpriseTemplateCardUserPosition}>
                    <p className={styles.name}>Severus Snape</p>
                    <p className={styles.position}>Manager @ Slytherins</p>
                  </div>
                </div>
              </div>
              <div className={styles.enterpriseTemplateCard}>
                <div className={styles.enterpriseTemplateCardTitle}>“Release facebook responsive web design business model canvas seed money monetization.”</div>
                <div className={styles.enterpriseTemplateCardUser}>
                  <img src={User3} alt="User3" />
                  <div className={styles.enterpriseTemplateCardUserPosition}>
                    <p className={styles.name}>Harry Potter</p>
                    <p className={styles.position}>Team Leader @ Gryffindor</p>
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterpriseTemplate;