import styles from '../styles/Signin.module.css'
import Image from 'next/image'
function verify() {
  return (
    <div className={styles.container}>
        
        <div className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" width="163" height="54" alt='logo' />
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
                <h5 className={styles.subTitle}>Payment Details</h5>
                <h3 className={styles.title}></h3>
            </div>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.cardContainer}>
                        <h3>Pay with</h3>
                        <div className={styles.cardSelectionContainer}>
                            <input type="radio" id="age1" name="age" value="30"/>
                            <label for="age1">Card</label>
                            <input type="radio" id="age2" name="age" value="60"/>
                            <label for="age1">Bank</label>
                            <input type="radio" id="age3" name="age" value="100"/>
                            <label for="age1">Transfer</label>

                        </div>
                    </div>
                    <div className={styles.pinContainer}>
                        <div className={styles.centerText}>
                            <p style={{ color: '#808080'}}>Enter your 4-digit card pin to confirm this payment</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingLeft:'50px', paddingTop:20}}>
                        <input type="text" name="pin1" placeholder='0' className={styles.pinInput} style={{marginBottom: 40}}/>
                        <input type="text" name="pin2" placeholder='0' className={styles.pinInput} style={{marginBottom: 40}}/>
                        <input type="text" name="pin3" placeholder='0' className={styles.pinInput} style={{marginBottom: 40}}/>
                        <input type="text" name="pin4" placeholder='0' className={styles.pinInput} style={{marginBottom: 40}}/>
                        </div>
                        
                    </div>
                    
                    <div>
                        <button className={styles.paymentButton}>Confirm Payment</button>
                    </div>
                    <div>
                        <p style={{ color: '#808080'}}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </div>
                    {/* <div className={styles.signin}>
                        <p >Don't have an account? <a href="#" className={styles.link}>Sign up</a></p>
                    </div> */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default verify