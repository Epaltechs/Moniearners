import styles from '../styles/Signin.module.css'
import Image from 'next/image'
function forgot() {
  return (
    <div className={styles.container}>
        
        <div className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" width="163" height="54" alt="logo" />
            </div>

            <div className={styles.briefTextContainer}>
                <h3 className={styles.sideTitle}>Your finacial freedom is here</h3>
                <p className={styles.brief}>
                    Moniearners is a digital 
                    marketplace where we help 
                    creators of digital products get 
                    more sales and connect 
                    with more customers through our
                    platform and network of 
                    high performing affiliates.
                </p>
            </div>
            
        
        </div>
        <div className={styles.mainArea}>
            <div className={styles.formTitleDiv}>
                <span className={styles.pageTitle}></span>
                <h5 className={styles.subTitle}></h5>
                <h3 className={styles.title}>Forgot password</h3>
            </div>
            <div className={styles.formContainer}>
                <form>
                    <input type="email" name="email" value="" placeholder='Your Email address' className={styles.input} style={{marginBottom: 40}}/>
                    <div>
                        <button className={styles.button}>Reset Password</button>
                    </div>
                    <div className={styles.signin}>
                        <p >Don't have an account? <a href="#" className={styles.link}>Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default forgot