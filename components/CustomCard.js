import { Card } from 'antd';
import styles from '../styles/Card.module.css'
import Link from 'next/link';
import Image from 'next/image'

const CustomCard = ({title, content, actionText, img}) => (
  <Card
    className={`${styles.customCard}`}
  >
    <Image src={`/${img}`} width="50" height="50" alt="logo" className="" />
    <h3 >{title}</h3>
    <p>{content}</p> 

    <Link href=''>{actionText}</Link>
  </Card>
);
export default CustomCard;