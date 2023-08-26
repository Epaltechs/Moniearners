import React from 'react'
import TopNav from '../components/TopNav'
import NewTopNav from '../components/NewTopNav'
import Button from '../components/Button'
import Card from '../components/Card'
import CustomInput from '../components/CustomInput'
import Image from 'next/image'
import buttonStyle from '../styles/ButtonClasses.module.css'
import styles from '../styles/Support.module.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const faqs = [
    {
        id: 1,
        question: 'What is Moniearners All About?',
        answer: `Moniearners is an online marketplace for the sale of high value and quality digital products.
        On Moniearners, there are 3 parties - The vendor, the affiliate and the customer. 
        The vendor refers to the person who owns the product that is been sold.
        Affiliates are marketers who recommend the products on the platform to people and when any of the person they refer buys, they get a commission.
        Customers are simply those who purchase the products been sold on Moniearners
        `
    },
    {
        id: 2,
        question: 'How do I Become An Affiliate on Moniearners?',
        answer: `To sign up as an affiliate on Moniearners, you will have to pay a yearly renewable affiliate fee of N10,000 only. Click here to sign up
        `
    },
    {
        id: 3,
        question: 'Does Moniearners Teach Affiliates How to Sell Products?',
        answer: `Yes we do. We have a course called “500k Income Course” . This course teaches you over 12 high income skills as such as facebooks ads, Instagram ads, copywriting, content creation, web design, graphic design, public speaking and many others.
        To become an affiliate with result, you are advised to get this course which currently cost N20,000. This price will be increased soon.
        You can purchase the course from the person that told you about Moniearners
        However, we have weekly mentorship training which you can use to learn how to sell.
        We also have a telegram group where affiliates learn from one another.
        `
    },
    {
        id: 4,
        question: 'What Happens If I am Not Satisfied With a Product I Purchased on Moniearners?',
        answer: `Majority of the products on Moniearners (except otherwise stated) are backed by our 60-day money back guarantee.
        What this means is that if you are not satisfied with the product you purchased from Moniearners, you can ask for a full refund within 60 days of purchase and we will send you the refund.
        However, we also take note of serial "refunders" and such people are banned from the platform.
        `
    },
    {
        id: 5,
        question: 'How am I Sure That The Products on Moniearners Will Deliver?',
        answer: `All the products listed on the platform goes through thorough check by our quality control department before it is listed, we are always sure to confirm authenticity of every product before having it listed on our platform.
        `
    },
    {
        id: 6,
        question: 'Can I List Physical Products?',
        answer: `No. The Moniearners platform is strictly for the sales and distribution of digital products only.
        `
    },
]

const Home = () => {


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
                    <div className={`${styles.title1}`} ><h1>We would love <br/> to hear you</h1>
                        <p>Moniearners is a digital marketplace where we help creators of digital products get more sales and connect.</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.imageRow}`}>
                <div className={`${styles.imageContainer}`}>
                    <div className={`${styles.secondCol} col`}>
                        <Image src='/support.png' width="534" height="667" alt="support" className=''/>
                    </div>
                    
                    <div className={`${styles.formContainer}`}>
                        <form>
                            <input type="email" name="email" value="" placeholder='Your Email address' className={styles.input} />
                            <input type="password" name="password" value="" placeholder='Password' className={styles.input} />

                            <textarea className={styles.inputTextArea} name="comment" rows="4" cols="39"> </textarea>
                            <div>
                                <button className={buttonStyle.supportBtn}>Sign Up</button>
                            </div>
           
           
                        </form>
                    </div>
                </div>
                
                
            </div>

            <div className={`${styles.column}`}>
                <h6 className={`${styles.headerColored}`}>FAQ</h6>
                <h3 className={`${styles.header1}`}>Do you have any question?</h3>
                <p className={`${styles.content1}`}>Vivamus lectus nibh, mollis eget venenatis a, condimentum non purus. Ut eleifend suscipit velit, sit amet consectetur odio finibus sed.</p>

                <div className={styles.faqContainer}>
                    <Collapse defaultActiveKey={[0]}  bordered={false} onChange={onChange} className={`${styles.collapse}`} >
                        {faqs.map((item, index) => {
                            return <Panel className={`${styles.panel}`} header={item.question} key={index}>
                                    <p>{item.answer}</p>
                                </Panel>
                            
                        })}
                         
                        
                        {/* <Panel header="How do I Become An Affiliate on Moniearners?" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Does Moniearners Teach Affiliates How to Sell Products?" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="What Happens If I am Not Satisfied With a Product I Purchased on Moniearners?" key="4">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Can I List Physical Products?" key="5">
                            <p>{text}</p>
                        </Panel> */}
                    </Collapse>
                </div>
            </div>
          </div>
        <div>
      </div>
    </div>
  )
}

export default Home