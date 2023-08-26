import NewTopNav from '../components/NewTopNav'
import Image from 'next/image'
import buttonStyle from '../styles/ButtonClasses.module.css'
import styles from '../styles/Vendor.module.css'
import navStyles from '../styles/Nav.module.css'

const Vendor = () => {

    const getStarted = () => {}

    const onChange = (key) => {
        console.log(key);
    };

  return (
    <div className={`${styles.container}`}>
        <div className={` ${styles.section1}`}>
            <div className={styles.titleRow}>
                <div className={`${styles.fistCol}`}>
                    <div className={`${styles.title1}`} >
                        <h2>Are You a Product Creator? Let's Help You Sell More Of Your Digital Products</h2>
                        <p>Do you have a digital product to sell? let us help you sell more of your products</p>
                        <div>
                            <button className={buttonStyle.medBtn}>Sign Up Now</button>
                        </div>
                    </div>

                    <div className={`${styles.medBtn}`}>
                        <Image src='/supportImg.png' width="324" height="405" alt='support' className=''/>
                    </div>
                </div>
            </div>

            <div className={` ${styles.sectionColumn} `}>
            <div className={`${styles.containerMain}`}>
                
                <h3  className={` ${styles.heading2}`}>How to List Your Digital Products on <br />the Moniearners Marketplace as a Vendor</h3>
                <div className={`${styles.contentContainer}`}>
                    <p className={`${styles.textSection2}`}> The very first thing you should know is we only allow quality and result-oriented digital products to be listed in the Moniearners product marketplace. <br />Here is how to list your digital produ♂ct on the Moniearners marketplace;<br />(1) Send us the details of your product. It is important to note that you are not permitted to list a product you do not own. These are the details we need: <br /></p>
                    <ul>
                        <li>
                            <p className={` ${styles.textSection2} `}>Our dashboard is user friendly and our courses are easily accessible and can turn you into a professional internet marketer..</p>
                        </li>
                        <li><p className={`${styles.textSection2}`}>We mentor you and hold you by the hands to make your first 1 million naira in 3 months.</p></li>
                        <li> <p className={` ${styles.textSection2}`}>The products on our marketplace are high quality and result-oriented.</p></li>
                        <li> <p className={` ${styles.textSection2}`}>Our affiliate tracking process ensures that your affiliate commissions are safe and paid to you every week Thursday.</p></li>
                        <li> <p className={` ${styles.textSection2}`}>You can register NOW and within a few minutes and start earning some good commissions</p></li>
                    </ul>

                    <p className={`${styles.textSection2}`}>
                    Send these details to vendors@Moniearners.com (Use the subject line -New Vendor Application)
                    <br /><br /> <br />(2) Once we have approved your product, you will need to create a vendor account. This account is basically for you to track your sales. The vendor registration fee is N10,000 a year and it is non-refundable. The registration link for vendors will be sent to you once your product has been approved. <br /> (3) Once you have created your vendor account, we will setup the sales page for your first product on Moniearners and make it 
                        available to affiliates.<br/> PLEASE TAKE NOTE OF THE FOLLOWING:<br /> Moniearners collects the payments on your behalf, pays the affiliate and delivers the product to the buyer.
                        Moniearners charges 10% of the product cost. So, if your product is N20,000, Moniearners charges N2,000
                        We have a 30-day refund policy on all products. And Vendors are paid once in two weeks on Thursdays.
                    </p>
                </div>
            </div>


        </div>

        </div>
        <div></div>
        
    </div>
  )
}

export default Vendor