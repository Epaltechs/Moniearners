import React from 'react'
import styles from'../styles/Card.module.css'
import Image from 'next/image'

const Card = ({style, text, title, author, img}) => {
  return (
    <div className={` ${style === 'brown' ? styles.brownCard : styles.goldCard}`}>
        <p className={`${styles.cardText}`}> {text} </p>
        
        <div className={`${styles.authorSection}`}>
            <div className={``}>
                <h3 className={`${styles.author}`}> {author} </h3>
                <h5  className={`${styles.title}`}> {title} </h5>
            </div>
            <div className={``}>
                <Image src={`/${img}`} width="43" height="51" alt="logo" className={` ${styles.image6} `}/>
            </div>
        </div>
    </div>
  )
}

export default Card