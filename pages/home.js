import styles from '../styles/HomePage.module.css'
import Button from '../components/Button'
import Card from '../components/Card'
import Image from 'next/image'

const cardData = [
    { 
        id: 1,
        text: `Through innovative products, tools, and services, we help you experience a deeper relationship with your money. Through innovative products, tools, and services, we help `, 
        author: `Angela Bryan`,
        title: 'Digital Marketer' ,
        img: `profile1.png`
    },
    { 
        id: 2,
        text: `Through innovative products, tools, and services, we help you experience a deeper relationship with your money. Through innovative products, tools, and services, we help `, 
        author: `Wade Warren`,
        title: 'Medical Assistant',
        img: `profile2.png`
    },
    { 
        id: 3,
        text: `Through innovative products, tools, and services, we help you experience a deeper relationship with your money. Through innovative products, tools, and services, we help `, 
        author: `Marvin McKinney`,
        title: 'Web Designer',
        img: `profile3.png`
    },
    { 
        id: 4,
        text: `Through innovative products, tools, and services, we help you experience a deeper relationship with your money. Through innovative products, tools, and services, we help `, 
        author: `Courtney Henry`,
        title: 'President of Sales',
        img: `profile4.png` 
    },
]

function HomePage() {

    const getStarted = () => {}

  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.section1}`}>
            <div>
                <div className={`${styles.fistCol}`}>
                    <div className={`${styles.title1}`} ><h1>The Final Bustop To Your </h1><h1 style={{ paddingTop:0,  }}><span className={`${styles.titleBold}`} > Online Business Struggle</span></h1>
                        <p>Let our network of high performing affiliates help you connect with millions of paying customers.</p>
                    </div>
                </div>
                
            </div>

            <div className={`${styles.imageRow}`}>
                <div className={`${styles.secondCol}`}>
                    <Image src='/image1.png' alt="Be financially free" width="1036" height="559" className=''/>
                </div>
                
            </div>
            <div className={`${styles.statsContainer}`}>
                <div className={` ${styles.analyticContainer}`}>
                    <div className={`${styles.analyticSubContainer }`}>
                        <span className={`${styles.analytics}`}>150k+</span>
                        <p className={`${styles.analyticBrief}`}>Products Sold</p>
                    </div>
                    <div className={`${styles.analyticSubContainer }`}>
                        <span className={`${styles.analytics}`}>50k+</span>
                        <p className={`${styles.analyticBrief}`}>Affiliates</p>
                    </div>
                    <div className={`${styles.analyticSubContainer }`}>
                        <span className={`${styles.analytics}`}>60+</span>
                        <p className={`${styles.analyticBrief}`}>Product Creators</p>
                    </div>
                    <div className={`${styles.analyticSubContainer }`}>
                        <span className={`${styles.analytics}`}>15+</span>
                        <p className={`${styles.analyticBrief}`}>Skills</p>
                    </div>
                </div>
            </div>

        </div>

        <div className={` ${styles.sectionColumn2}`}>
            <div className={``}>
                <Image src='/woman1.png' width="379" height="451"  alt="What we do" className={` ${styles.woman} `}/>
            </div>

            <div className={``}>
                <h3  className={` ${styles.heading1} `}>What we do</h3>
                <p className={` ${styles.textSection1} `}> Moniearners is a digital marketplace where we help creators of digital products get more sales and connect with more customers through our platform and network of high performing affiliates.
                </p>
            </div>
        </div>

        <div className={` ${styles.sectionColumn2}`}>
            <div className={`${styles.benefit}`}>
                <h3 className={` ${styles.heading2}`}>At Moniearners, here are the three major things you stand to gain</h3>
                <ul>
                    <li>
                        <p className={` ${styles.textSection2}`}> Moniearners is a digital marketplace where we help creators of digital products get more sales and connect with more customers through our platform and network of high performing affiliates.</p>
                    </li>
                    <li><p className={` ${styles.textSection2}`}>We give you access to our marketplace where you can promote high-quality digital products and get paid commissions that start from 50% and above. You can make as much as 500k per week using your smartphone. This means you can make money online by promoting other people’s products. Here we help you solve the problem of having to go through the stress of creating your own products.</p></li>
                    <li> <p className={` ${styles.textSection2}`}>As a digital product creator, our high-performing affiliates would help you sell your product to millions of paying customers. Here we help you solve the problem of making poor sales from your product. (Anyone with a smartphone can do this)</p></li>
                </ul>
            </div>

            <div className={` ${styles.image2}`}>
                <Image src='/image2.png' width="367" height="614" alt="Why us" className={` ${styles.image2}  `}/>
            </div>

            
        </div>

        <div className={` ${styles.sectionColumn2}`}>
            <div className={` `}>
                <Image src='/image3.png' width="367" height="444" alt="" className={` ${styles.woman} `}/>
            </div>

            <div className={`${styles.articleContainer}`}>
                <h5 className={` ${styles.smallHeader} `}>BECOME AN AFFILIATE</h5>
                <h3  className={` ${styles.heading2} `}>You can make a lot of money by recommending  the products on our marketplace to your social media followers.</h3>
                <p className={` ${styles.textSection1} `}> Register as an affiliate and start promoting any of our digital products and get paid as high as 70% commission for each sale you make. It is fast and easy to register.
            </p>
            <Button text="Get Started" clickAction={getStarted} />

            </div>

        </div>

        <div className={` ${styles.sectionColumn2} `}>
            <div className={`${styles.articleContainer}`}>
                <h5 className={` ${styles.smallHeader} `}>BECOME AN AFFILIATE</h5>
                <h3 className={` ${styles.heading2}`}>Getting affiliates to promote your digital products is the absolute fastest way to get more paying customers.</h3>
                <p className={` ${styles.textSection1}  `}> Register as an affiliate and start promoting any of our digital products and get paid as high as 70% commission for each sale you make. It is fast and easy to register.</p>
                <p className={` ${styles.textSection1}`}> Do you have a digital product to sell? Let us help you sell more of your products.</p>
                <Button text="Get Started" clickAction={getStarted} />
            
            </div>

            <div className={`${styles.articleContainer}`}>
                <Image src='/image5.png' width="367" height="444" alt="" className={` ${styles.image5}  `}/>
            </div>
        </div>

        <div className={`${styles.videoSection}`}>
            <h3 className={`${styles.centerHeader}`}>Welcome Message <br />from our CEO</h3>
            <div className={`${styles.videoContainer}`}>
                <Image src='/image6.png' width="1037" height="505" alt="" className={` ${styles.image6} `}/>
            </div>
        </div>
        <div className={`${styles.sectionColumn3}`}>
            <div className={`${styles.CardTitle}`}>
                <h3 className={` ${styles.heading4} `}>What our <br /> awesome users say</h3>
                <h3 className={` ${styles.heading6} `}>Through innovative products, tools, and services, we help you<br /> experience a deeper relationship with your money.</h3>
            </div>
            
                <div className={`${styles.cardContainer} `}>
                    {
                            cardData.map((card, index) =>{
                                let style = "";
                                if(index === 0 || index === 3) style = 'brown'
                                else style = 'gold';
                                return <Card text={card.text} key={card.id} title={card.title} author={card.author} img={card.img} style={style} />
                            })
                        }
                </div>
            

        </div>
    </div>
  )
}

export default HomePage;