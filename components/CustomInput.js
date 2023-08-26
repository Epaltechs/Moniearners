import styles from '../styles/InputStyles.module.css'

const CustomInput = ({type, name, value, placeholder}) => {
  return (
    <input type="email" name="email" value="" placeholder='Your Email address' className={styles.input} />
  )
}

export default CustomInput