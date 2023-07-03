import { useFormik } from 'formik';
import styles from './emailComponents.module.scss';

const EmailComponents = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className={styles.emailComponents}>
      <div className={styles.container}>
        <div className={styles.emailComponentsBox}>
          <div className={styles.emailComponentsBoxTitle}>
            An enterprise template to ramp up your company website
          </div>
          <div className={styles.emailComponentsBoxForm}>
            <form onSubmit={formik.handleSubmit}>
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Your email address'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <button type="submit">Start now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailComponents;