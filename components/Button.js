import React from 'react'
import styles from '../styles/ButtonClasses.module.css'


const PrimaryButton = ({text, clickAction}) => {
  return (
    <button className={`${styles.primary} `} onClick={() => clickAction()} >{text}</button>
  )
}

export default PrimaryButton