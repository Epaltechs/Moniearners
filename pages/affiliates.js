import NewTopNav from '../components/NewTopNav'
import Image from 'next/image'
import homwStyle from '../styles/HomePage.module.css'
import buttonStyle from '../styles/ButtonClasses.module.css'
import styles from '../styles/Affiliates.module.css'
import navStyles from '../styles/Nav.module.css'

import CustomCard from '../components/CustomCard'

const cardContent = [
    {
        id: 1,
        img: `profile.png`,
        title: 'Sign up',
        content: `Fill our short affiliate signup form and pay a yearly signup fee of N10,000 only.`,
        actionText: `Learn more`,
    },
    {
        id: 2,
        img: `volume-high.png`,
        title: 'Promote',
        content: `Pick any of our products and start promoting it using the affiliate link that will be provided for you.`,
        actionText: `Learn more`,
    },
    {
        id: 3,
        img: `moneys.svg`,
        title: 'Get Paid',
        content: `Get paid when a customer buys through your affiliate link. Commissions are deposited into your bank account every Friday.`,
        actionText: `Learn more`,
    },
]

const Affiliates = () => {


    const getStarted = () => {

    }

    const onChange = (key) => {
        console.log(key);
    };

  return (
    <div className={`${styles.container}`}>
        <div className={` ${styles.section1}`}>
            <div className={styles.titleRow}>
                <div className={`${styles.fistCol}`}>
                    <div className={`${styles.title1}`} >
                        <h1 className={`${styles.mainTitle}`}>Make money as an affiliate, <br/>  Promoting Products</h1>
                        <p>You can make a lot of money by recommending the products on our<br/> marketplace to your social media followers.</p>
                        <div className={buttonStyle.btnContainer}>
                            <button className={buttonStyle.smallBtn}>Sign Up</button>
                        </div>
                    </div>

                    <div className={`${styles.affiliateImg}`}>
                        <Image src='/supportImg.png' width="324" height="405" alt="support" className=''/>
                    </div>
                </div>


                
            </div>

            <div className={`${styles.column}`}>
                <h6 className={`${styles.headerColored}`}>GET STARTED</h6>
                <h3 className={`${styles.header1}`}>How it works?</h3>
                <p className={`${styles.content1}`}>It is simple to start earning money as an affiliate on Moniearners.</p>

                <div className={`${styles.cardContainer}`} >
                    {
                        cardContent.map((item, index) => {
                            return  <CustomCard title={item.title} key={item.id} img={item.img} content={item.content} actionText={item.actionText} />
                        })
                    }
                    
                </div>
            </div>

            <div className={` ${styles.sectionColumn} `}>
                <div className={``}>
                    <h3  className={` ${styles.heading2}`}>5 Things That Makes Moniearners Unique?</h3>
                    <ul>
                        <li>
                            <p className={` ${styles.textSection2} ps-5 text-start `}>Our dashboard is user friendly and our courses are easily accessible and can turn you into a professional internet marketer..</p>
                        </li>
                        <li> <p className={` ${styles.textSection2} ps-5 text-start `}>We mentor you and hold you by the hands to make your first 1 million naira in 3 months.</p></li>
                        <li> <p className={` ${styles.textSection2} ps-5 text-start `}>The products on our marketplace are high quality and result-oriented.</p></li>
                        <li> <p className={` ${styles.textSection2} ps-5 text-start `}>Our affiliate tracking process ensures that your affiliate commissions are safe and paid to you every week Thursday.</p></li>
                        <li> <p className={` ${styles.textSection2} ps-5 text-start `}>You can register NOW and within a few minutes and start earning some good commissions</p></li>
                    </ul>
                </div>

                <div className={` ${homwStyle.image2} col text-start`}>
                    <Image src='/image2.png' width="367" height="614" alt="How Moniearners is unique" className={` ${styles.image2}  `}/>
                </div>
            </div>

        </div>
        <div>

        </div>
        
    </div>
  )
}

export default Affiliates